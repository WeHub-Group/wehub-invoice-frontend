import { useEffect, useState } from 'react';
import Card from '../../basic/Card';
import InputField from '../../Authentication/InputField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { Trash } from '@iconsans/react/linear';
import isEmail from 'validator/lib/isEmail';
import getuserEmail from '../../../appwrite/account.appwrite';
import { isEmpty } from 'validator';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { getUser } from '../../../api/database.api';

const GenerateInvoice = () => {
    const navigate = useNavigate()
    const [itemName, setItemName] = useState('');
    const [itemRate, setItemRate] = useState('');
    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemList, setItemList] = useState([]);
    const [formData, setFormData] = useState({
        invoiceId: "",
        profielPicUrl: "",
        senderName: "",
        senderEmail: "",
        senderAddress: "",
        recipientName: "",
        recipientEmail: "",
        recipientAddress: "",
        billTitle: "",
        issuedOn: "",
        dueDate: "",
        terms: "",
        tax: "",
        itemList: []
    });

    // Fetch User and Verification 
    const fetchUser = async () => {
        const user = await getuserEmail();

        if (user) {
            getUser(user.userEmail)
                .then(({ data }) => {
                    setFormData({
                        ...formData,
                        senderEmail: data.email,
                        senderName: data.businessName,
                        senderAddress: data.businessAddress,
                        profielPicUrl: data?.profilePicUrl
                    })
                }).catch(({ response }) => {
                    console.error("Error", response);
                    toast.error('Failed to fetch user Details')
                    if (response.status === 404) {
                        navigate('/signup')
                    }
                });
        }
    };
    useEffect(() => {
        fetchUser();
    }, [])



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const toCurrencyFormat = (number) =>
        number.toLocaleString('en-US', { style: 'currency', currency: 'NGN' });

    const calculateTotal = () =>
        itemList.reduce((acc, item) => acc + item.itemRate * item.itemQuantity, 0);

    const generateRandomID = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomLetters = Array.from({ length: 3 }, () =>
            letters[Math.floor(Math.random() * letters.length)]
        ).join('');
        const date = new Date();
        const YYYYMMDD = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
        return `INV-${YYYYMMDD}-${randomLetters}`;
    };
    const addToList = () => {
        if (!itemName || !itemRate) {
            toast.error('Cannot add empty item');
            return;
        }
        setItemList((prevArray) => [...prevArray, { itemName, itemRate: Number(itemRate), itemQuantity: Number(itemQuantity) }]);
        setItemName('');
        setItemRate('');
        setItemQuantity(1);
    };
    const deleteItem = (index) => {
        setItemList((prevList) => prevList.filter((_, i) => i !== index));
    };
    const clearAll = () => {
        setFormData({
            ...formData,
            invoiceId: '',
            recipientName: '',
            recipientEmail: '',
            recipientAddress: '',
            billTitle: '',
            issuedOn: '',
            dueDate: '',
            terms: '',
            tax: '',
            itemList: [],
        }
        );
        setItemList([]);
    };



    const handleSubmit = (e) => {

        e.preventDefault();
        setFormData({ ...formData, itemList })

        // Validation should go here
        if (isEmpty(formData.invoiceId || '')) {
            toast.error("Invoice ID is required")
            return false;
        }
        if (isEmpty(formData.recipientName || '')) {
            toast.error("Recipient Name is required!");
            return false;
        }
        if (!isEmail(formData.recipientEmail || '')) {
            toast.error("Recipient Email is invalid!");
            return false;
        }
        if (isEmpty(formData.billTitle || '')) {
            toast.error("Bill Title is required!");
            return false;
        }
        if (isEmpty(formData.issuedOn || '')) {
            toast.error("Issued On date is required!");
            return false;
        }
        if (isEmpty(formData.dueDate || '')) {
            toast.error("Due Date is required!");
            return false;
        }
        if (formData.itemList?.length === 0) {
            toast.error('Item List is empty try Generating again')
            return;
        }

        // Validate dates
        const issuedDate = new Date(formData.issuedOn);
        const dueDate = new Date(formData.dueDate);
        if (issuedDate > dueDate) {
            toast.error("Due Date cannot be earlier than Issued On date!");
            return false;
        }

        else {
            console.log(formData);
            confirmAlert({
                title: 'Do you want to generate the Invoice?',
                buttons: [
                    {
                        label: 'Yes',
                        className: 'bg-green-500',
                        onClick: () => navigate('template', { state: formData }),
                    },
                    {
                        label: 'No',
                        onClick: () => { },
                        className: 'bg-red-500'
                    }
                ]
            });
        }

    };

    return (
        <Card>
            <ToastContainer position="top-right" />
            <p className="font-bold text-xl mb-2 md:mb-5 text-end">Create New Invoice</p>

            {/* Invoice ID */}
            <div className="flex md:flex-row flex-col gap-3 justify-between items-center">
                <p className="md:text-2xl text-xl font-bold mt-3">
                    Invoice: <span className="text-darkPrimary font-normal">
                        {formData.invoiceId || 'INV-YYYYMMDD-AAA'}
                    </span>
                </p>

                <div className="flex gap-2">
                    <button onClick={() => setFormData({ ...formData, invoiceId: generateRandomID() })} className="bg-darkPrimary text-white rounded-lg p-3 hover:scale-110 transition-all">
                        Generate
                    </button>
                    <button onClick={clearAll} className="bg-darkGrey text-white rounded-lg p-3 hover:scale-110 transition-all">
                        Clear All
                    </button>
                </div>
            </div>

            {/* Form Inputs */}
            <div className="md:grid md:grid-cols-2 flex flex-col mt-8 gap-x-10">
                <img src={formData.profielPicUrl || 'https://via.placeholder.com/130'}
                    className="rounded-full w-32 h-32 bg-gray-300 border-2 border-black " />
                <div className=""></div>

                <InputField name="senderName" value={formData.senderName} type="text" placeholder="Ahmadu Bello" label="Sender Name" required readOnly />

                <InputField name="senderEmail" value={formData.senderEmail} type="text" placeholder="Ahmadu Bello" label="Sender Email" required readOnly />

                <div className="col-span-full mb-10">
                    <InputField name="senderAddress" value={formData.senderAddress} readOnly type="text" placeholder="Address" label="Sender Address" required />
                </div>

                <InputField name="recipientName" value={formData.recipientName} onChange={handleChange} type="text" placeholder="Rasheed Ahmed" label="Recipient Name" required />

                <InputField name="recipientEmail" value={formData.recipientEmail} onChange={handleChange} type="email" placeholder="Recipient Email" label="Recipient Email" required />

                <div className="col-span-full mb-10">
                    <InputField name="recipientAddress" value={formData.recipientAddress} onChange={handleChange} type="text" placeholder="Recipient Address" label="Recipient Address" required />
                </div>

                <div className="col-span-full">
                    <InputField name="billTitle" value={formData.billTitle} onChange={handleChange} type="text" placeholder="Issued On" label="Bill Title" required />
                </div>

                <InputField name="issuedOn" value={formData.issuedOn} onChange={handleChange} type="date" placeholder="Issued On" label="Issued On" required />

                <InputField name="dueDate" value={formData.dueDate} onChange={handleChange} type="date" placeholder="Due On" label="Due On" required />

                {/* Items Section */}
                <div className="col-span-full mt-10">

                    {/* Item Forms */}
                    <form className="flex flex-col md:flex-row w-full justify-between">
                        <InputField value={itemName} onChange={(e) => setItemName(e.target.value)} type="text" placeholder="Item" label="Item Name" required />
                        <InputField value={itemRate} onChange={(e) => setItemRate(e.target.value)} type="text" placeholder="100.00" label="Rate" required />
                        <InputField value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} type="number" placeholder="1" label="Qty" required />
                    </form>

                    <button onClick={addToList} className="bg-darkPrimary text-white rounded-lg p-3 hover:scale-110 transition-all w-40 mt-3">
                        Add Item
                    </button>



                    {/* Mobile */}
                    {itemList.map((item, index) => (
                        <div key={index} className="bg-gray-100 flex flex-col mt-3 p-2 rounded-lg">
                            <p><strong>Name:</strong> {item.itemName}</p>
                            <p><strong>Quantity:</strong> {item.itemQuantity}</p>
                            <p><strong>Rate: </strong>{toCurrencyFormat(item.itemRate)}</p>
                            <p className="flex mt-3">
                                <strong>Total:</strong> {toCurrencyFormat(item.itemRate * item.itemQuantity)}
                            </p>

                            <div className="flex gap-2 justify-end">
                                <button
                                    onClick={() => { deleteItem(index) }}
                                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-all"  >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Laptop */}
                    <div className="hidden md:grid grid-cols-4 text-white bg-black mt-3 px-3">
                        <p>Item</p>
                        <p>Qty</p>
                        <p>Rate</p>
                        <p>Amount</p>
                    </div>
                    {itemList.map((item, index) => (
                        <div key={index} className="hidden md:grid grid-cols-4 items-center mb-2">
                            <p>{item.itemName}</p>
                            <p>{item.itemQuantity}</p>
                            <p>{toCurrencyFormat(item.itemRate)}</p>
                            <p className="flex justify-between items-center">
                                {toCurrencyFormat(item.itemRate * item.itemQuantity)}
                                <Trash onClick={() => deleteItem(index)} className="text-red-500 hover:scale-105 hover:rotate-45 text-xl transition-all ml-3 cursor-pointer" />
                            </p>
                        </div>
                    ))}

                    {/* Total */}
                    <div className="flex md:grid grid-cols-4 mt-5">
                        <div className="col-span-3 text-right font-bold mx-3">Total </div>
                        <div className="font-semibold">{toCurrencyFormat(calculateTotal())}</div>
                    </div>
                </div>

                <div className="col-span-full mt-10">
                    <div className="mt-3 flex flex-col gap-2">
                        <label className="font-bold">Terms</label>
                        <textarea
                            name="terms"
                            value={formData.terms}
                            onChange={handleChange}
                            type="text"
                            placeholder="Terms"
                            label="Terms"
                            rows={4}
                            className={"bg-transparent text-sm border border-black text-black rounded-lg p-3 hover:scale-105 transition-all flex-1"}  >
                        </textarea>
                    </div>
                </div>

                <div className="col-span-full flex justify-center mt-8">
                    <button onClick={handleSubmit} className="button">
                        Generate Invoice
                    </button>
                </div>
            </div>
        </Card>
    );
};

export default GenerateInvoice;
