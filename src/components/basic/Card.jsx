import React from 'react'

const Card = ({ children }) => {
    return (
        <div className='bg-white w-full h-full p-1 font-lato'>
            <div className="w-full h-full p-5 bg-white rounded-lg">
                {children}
            </div>
        </div>
    )
}

export default Card