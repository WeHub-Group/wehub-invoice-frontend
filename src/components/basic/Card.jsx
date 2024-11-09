import React from 'react'

const Card = ({ children }) => {
    return (
        <div className='bg-grey w-full p-1 font-lato'>
            <div className="w-full h-full p-5 bg-white rounded-lg ">
                {children}
            </div>
        </div>
    )
}

export default Card