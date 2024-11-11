import { useState } from 'react'
import Card from '../../basic/Card'
import InputField from '../../Authentication/InputField'

const GenerateInvoice = () => {
    const [itemName, setItemName] = useState('')
    const [itemRate, setItemRate] = useState('')
    const [itemQuantity, setItemQuantity] = useState(1)
    const [itemList, setItemList] = useState([])
    let total = 0

    const [formData, setFormData] = useState({
        invoiceId: '',
        billFrom: 'Ronald Kelechi',
        billTo: '',
        recipientEmail: '',
        recipientAddress: '',
        title: '',
        issuedOn: '',
        dueDate: '',
        terms: '',
        itemList
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const toCurrencyFormat = (number) => {
        return number.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })
    }
    const calculateTotal = () => {
        return itemList.reduce((acc, item) => acc +
            (item.itemRate * item.itemQuantity), 0)
    }
    const generateRandomID = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

        // Generate 3 random letters (A-Z)
        let part1 = "";
        for (let i = 0; i < 3; i++) {
            part1 += letters[Math.floor(Math.random() * letters.length)];
        }

        const date = new Date();
        let YYYY = date.getFullYear();
        let MM = date.getMonth();
        let DD = date.getDay();
        return `INV-${YYYY}${MM}${DD}-${part1}`
    }
    async function addToList() {
        if (itemName === undefined || itemRate === undefined || itemName == '' || itemRate == '') {
            return false
        }
        await setItemList((prevArray) => [
            ...prevArray,
            { itemName, itemRate, itemQuantity },
        ]);
        setItemName('')
        setItemRate('')
    }
    function generateInvoiceID() {
        setFormData({ invoiceId: generateRandomID() })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <Card>
            <p className=''>Create new Invoice</p>

            {/* Format: INV-YYYYMMDD-001  */}
            <div className="flex flex-row justify-between items-center">
                <p className='text-2xl font-bold mt-3'>Invoice: <span className='text-darkPrimary font-normal'>
                    {formData.invoiceId ? formData.invoiceId : 'INV-20241106-001'}
                </span>
                </p>

                <div className="flex gap-2">
                    <button onClick={generateInvoiceID} className="bg-darkPrimary text-white rounded-lg p-3 hover:scale-110 transition-all"
                    >Generate</button>

                    <button className="bg-darkGrey text-white rounded-lg p-3 hover:scale-110 transition-all"
                    >Clear All</button>
                </div>
            </div>

            {/* Invoice Form */}
            <div className='grid grid-cols-2 mt-8 gap-x-10'>
                <InputField name='billFrom' value={formData.billFrom} onChange={handleChange} type={'text'} placeholder={'Ahmadu Bello'} label={'Bill From'} required />

                <InputField type={'text'} placeholder={'Rasheed Ahmed'} label={'Bill To'} required name='billTo' value={formData.billTo} onChange={handleChange} />

                <div className="col-span-full">
                    <InputField type={'email'} placeholder={'Recipient Email'} label={'Recipient Email'} required name='recipientEmail' value={formData.recipientEmail} onChange={handleChange} />
                </div>

                <div className="col-span-full">
                    <InputField type={'text'} placeholder={'Recipient Address'} label={'Recipient Address'} required name='recipientAddress' value={formData.recipientAddress} onChange={handleChange} />
                </div>

                <div className="col-span-full mt-10">
                    <InputField type={'text'} placeholder={'Title'} label={'Project Title / Bill Title'} required name='title' value={formData.title} onChange={handleChange} />
                </div>

                <InputField type={'date'} placeholder={'Issued On'} label={'Issued On'} required name='issuedOn' value={formData.issuedOn} onChange={handleChange} />

                <InputField type={'date'} placeholder={'Due On'} label={'Due On'} required name='dueDate' value={formData.dueDate} onChange={handleChange} />

                <div className="col-span-full flex flex-col mt-10">

                    <form className="flex flex-row gap-2 justify-between ">
                        <div className="flex-1">
                            <InputField type={'text'} placeholder={'Item'} label={'Item Name'} required value={itemName} onChange={(e) => { setItemName(e.target.value) }} />
                        </div>

                        <div className="flex flex-row gap-5">
                            <InputField type={'text'} placeholder={'100.00'} label={'Rate'} required value={itemRate} onChange={(e) => { setItemRate(e.target.value) }} />
                            <InputField type={'text'} placeholder={'1'} label={'Qty'}
                                value={itemQuantity} onChange={(e) => { setItemQuantity(e.target.value) }} />
                            <InputField type={'text'} placeholder={''} label={'Total'}
                                value={'NGN ' + (itemQuantity * itemRate).toLocaleString('EN-US')} />
                        </div>
                    </form>

                    <div className="flex-row flex">
                        <button onClick={addToList} className="bg-darkPrimary text-white rounded-lg p-3 hover:scale-110 transition-all w-40"> Add Item</button>
                    </div>


                    <div className="grid grid-cols-4 text-white bg-black mt-3 px-3">
                        <p>Item</p>
                        <p>Qty</p>
                        <p>Rate</p>
                        <p>Amount</p>
                    </div>

                    {
                        itemList.map((item, index) => {
                            return (
                                <div className="grid grid-cols-4 mb-2" key={index}>
                                    <p>{item?.itemName}</p>
                                    <p>{item?.itemQuantity}</p>
                                    <p>{(item.itemRate)}</p>
                                    <p>{toCurrencyFormat(item?.itemRate * item?.itemQuantity)}</p>
                                </div>
                            )
                        })
                    }
                    <div className="grid grid-cols-4 mt-5">
                        <div className=""></div>
                        <div className=""></div>
                        <div className="font-bold">Total</div>
                        <div className="font-bold">
                            {toCurrencyFormat(calculateTotal())}
                        </div>
                    </div>
                </div>

                <div className="col-span-full mt-10">
                    <InputField type={'text'} placeholder={'Terms'} label={'Terms'} name='terms' value={formData.terms} onChange={handleChange} />
                </div>

                <div className="col-span-full flex justify-center mt-8">
                    <button className="button" onClick={handleSubmit}>Generate Invoice</button>
                </div>

            </div>

            <div className="bg-grey w-full p-1 font-lato"></div>

        </Card>
    )
}

export default GenerateInvoice