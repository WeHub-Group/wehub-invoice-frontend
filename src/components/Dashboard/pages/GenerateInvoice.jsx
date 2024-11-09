import { useState } from 'react'
import Card from '../../basic/Card'
import InputField from '../../Authentication/InputField'

const GenerateInvoice = () => {
    const [formData, setFormData] = useState({
        billTo: '',
        billFrom: '',
        recipientEmail: '',
        recipientAddress: '',
        title: '',
        issuedOn: '',
        dueDate: ''
    });

    const [itemName, setItemName] = useState('')
    const [itemRate, setItemRate] = useState('')
    const [itemQuantity, setItemQuantity] = useState(1)
    const [itemList, setItemList] = useState([])
    let total = 0

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };



    const toCurrencyFormat = (number) => {
        return number.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })
    }
    const calculateTotal = () => {
        return itemList.reduce((acc, item) => acc +
            (item.itemRate * item.itemQuantity), 0)
    }
    async function addToList() {
        if (itemName === undefined || itemRate === undefined || itemName == '' || itemRate == '') {
            return false
        }
        await setItemList((prevArray) => [
            ...prevArray,
            { itemName, itemRate, itemQuantity },
        ]);
        console.log(itemList);
    }



    return (
        <Card>
            <p className=''>Create new Invoice</p>
            {/* Format: INV-YYYYMMDD-001  */}
            <div className="flex flex-row justify-between items-center">
                <p className='text-2xl font-bold mt-3'>Invoice: <span className='text-darkPrimary font-normal'>#INV-20241106-001</span></p>

                <button className="bg-darkPrimary text-white rounded-lg p-3 hover:scale-110 transition-all">Generate</button>
            </div>

            {/* Invoice Form */}
            <div className='grid grid-cols-2 mt-8 gap-x-10'>
                <InputField name='billTo' value={formData.billTo} onChange={handleChange} type={'text'} placeholder={'Ahmadu Bello'} label={'Bill From'} required />

                <InputField type={'text'} placeholder={'Rasheed Ahmed'} label={'Bill To'} required />

                <div className="col-span-full">
                    <InputField type={'email'} placeholder={'Recipient Email'} label={'Recipient Email'} required />
                </div>

                <div className="col-span-full">
                    <InputField type={'text'} placeholder={'Recipient Address'} label={'Recipient Address'} required />
                </div>

                <div className="col-span-full mt-10">
                    <InputField type={'text'} placeholder={'Title'} label={'Project Title / Bill Title'} required />
                </div>

                <InputField type={'date'} placeholder={'Issued On'} label={'Issued On'} required />

                <InputField type={'date'} placeholder={'Due On'} label={'Due On'} required />

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
                    <InputField type={'text'} placeholder={'Terms'} label={'Terms'} />
                </div>

                <div className="col-span-full flex justify-center mt-8">
                    <button className="button" onClick={handleSubmit}>Generate Invoice</button>
                </div>

            </div>

        </Card>
    )
}

export default GenerateInvoice