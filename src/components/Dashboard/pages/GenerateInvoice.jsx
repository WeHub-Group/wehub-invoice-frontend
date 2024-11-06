import { useState, useEffect } from 'react'
import Card from '../../basic/Card'
import InputField from '../../Authentication/InputField'

const GenerateInvoice = () => {

    return (
        <Card>
            <p className=''>Create new Invoice</p>
            {/* Format: INV-YYYYMMDD-001  */}
            <div className="flex flex-row justify-between items-center">
                <p className='text-2xl font-bold mt-3'>Invoice: <span className='text-darkPrimary font-normal'>#INV-20241106-001</span></p>

                <button className="bg-darkPrimary text-white rounded-lg p-3 hover:scale-110 transition-all">Generate</button>
            </div>

            {/* Invoice Form */}
            <form className='grid grid-cols-2 mt-8 gap-x-10'>
                <InputField type={'text'} placeholder={'Ahmadu Bello'} label={'Bill From'} required />
                <InputField type={'text'} placeholder={'Rasheed Ahmed'} label={'Bill To'} required />
                <div className="col-span-full">
                    <InputField type={'text'} placeholder={'Ahmadu Bello'} label={'Bill From'} />
                </div>

            </form>

        </Card>
    )
}

export default GenerateInvoice