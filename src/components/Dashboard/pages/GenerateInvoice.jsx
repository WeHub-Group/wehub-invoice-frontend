import { useState } from 'react';
import Card from '../../basic/Card';
import InputField from '../../Authentication/InputField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { Trash } from '@iconsans/react/linear';

const GenerateInvoice = () => {
    const [itemName, setItemName] = useState('');
    const [itemRate, setItemRate] = useState('');
    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemList, setItemList] = useState([]);
    const [formData, setFormData] = useState({
        invoiceId: '',
        profielPicUrl: "",
        billFrom: '',
        billTo: '',
        recipientEmail: '',
        recipientAddress: '',
        billTitle: '',
        issuedOn: '',
        dueDate: '',
        terms: '',
    });

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
            invoiceId: '',
            billFrom: '',
            billTo: '',
            recipientEmail: '',
            recipientAddress: '',
            title: '',
            issuedOn: '',
            dueDate: '',
            terms: '',
        });
        setItemList([]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, itemList });
        // Add validation logic and navigation here
    };

    return (
        <Card>
            <ToastContainer position="top-right" />
            <p className="font-bold">Create New Invoice</p>

            {/* Invoice ID */}
            <div className="flex md:flex-row flex-col gap-3 justify-between items-center">
                <p className="md:text-2xl text-xl font-bold mt-3">
                    Invoice:{' '}
                    <span className="text-darkPrimary font-normal">
                        {formData.invoiceId || 'INV-YYYYMMDD-001'}
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
            <div className="grid grid-cols-2 mt-8 gap-x-10">
                <InputField name="billFrom" value={formData.billFrom} onChange={handleChange} type="text" placeholder="Ahmadu Bello" label="Bill From" required />

                <InputField name="billTo" value={formData.billTo} onChange={handleChange} type="text" placeholder="Rasheed Ahmed" label="Bill To" required />

                <div className="col-span-full">
                    <InputField name="recipientEmail" value={formData.recipientEmail} onChange={handleChange} type="email" placeholder="Recipient Email" label="Recipient Email" required />
                </div>

                <div className="col-span-full">
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
                    <form className="flex flex-row w-full justify-between">
                        <InputField value={itemName} onChange={(e) => setItemName(e.target.value)} type="text" placeholder="Item" label="Item Name" required />
                        <InputField value={itemRate} onChange={(e) => setItemRate(e.target.value)} type="text" placeholder="100.00" label="Rate" required />
                        <InputField value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} type="text" placeholder="1" label="Qty" required />
                    </form>

                    <button onClick={addToList} className="bg-darkPrimary text-white rounded-lg p-3 hover:scale-110 transition-all w-40 mt-3">
                        Add Item
                    </button>

                    {/* Item List */}
                    <div className="grid grid-cols-4 text-white bg-black mt-3 px-3">
                        <p>Item</p>
                        <p>Qty</p>
                        <p>Rate</p>
                        <p>Amount</p>
                    </div>
                    {itemList.map((item, index) => (
                        <div key={index} className="grid grid-cols-4 items-center mb-2">
                            <p>{item.itemName}</p>
                            <p>{item.itemQuantity}</p>
                            <p>{toCurrencyFormat(item.itemRate)}</p>
                            <p className="flex justify-between items-center">
                                {toCurrencyFormat(item.itemRate * item.itemQuantity)}
                                <Trash onClick={() => deleteItem(index)} className="text-red-500 hover:scale-105 hover:rotate-12 text-xl transition-all ml-3" />
                            </p>
                        </div>
                    ))}

                    {/* Total */}
                    <div className="grid grid-cols-4 mt-5">
                        <div className="col-span-3 text-right font-bold mx-3">Total </div>
                        <div className="font-semibold">{toCurrencyFormat(calculateTotal())}</div>
                    </div>
                </div>

                <InputField name="terms" value={formData.terms} onChange={handleChange} type="text" placeholder="Terms" label="Terms" className="col-span-full mt-10" />

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
