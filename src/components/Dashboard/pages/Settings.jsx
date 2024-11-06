import React from 'react'
import Navbar from '../../Landing/Navbar'
import { AiOutlineEdit } from 'react-icons/ai'

const Settings = () => {
    return (
        <div className='bg-white w-full h-full p-1'>

            <div className="w-full h-full p-5 bg-white rounded-lg" >
                <div className="flex flex-row justify-between items-center">
                    <h1 className='font-lato text-black font-bold text-3xl'>Account Details</h1>
                    <AiOutlineEdit className='text-4xl text-black border border-grey rounded-lg p-1 hover:scale-110 cursor-pointer transition-all hover:bg-primary' />
                </div>
                <hr className='mt-1 bg-grey' />

                <div className="grid grid-cols-2 mt-10 gap-4">
                    <ValueField value1={'Firstname'} value2={'Adamu'} />
                    <ValueField value1={'Lastname'} value2={'Bello'} />

                    <ValueField value1={'Business Name'} value2={'Adamu Bello Cosmetics'} />
                    <ValueField value1={'Business Address'} value2={'Adamu'} />

                    <ValueField value1={'Phone Number'} value2={'Adamu'} />
                </div>

                <h1 className='font-lato text-black font-bold text-3xl mt-8'>Security</h1>
                <hr className='mt-1 bg-grey' />

            </div>

        </div>
    )
}

function ValueField({ value1, value2 }) {
    return (
        <div className="flex flex-col font-lato text-black">
            <h4 className='text-sm capitalize'>{value1}</h4>
            <h6 className='font-bold text-xl capitalize'>{value2}</h6>
        </div>
    )
}

export default Settings