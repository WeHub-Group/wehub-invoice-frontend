import React from 'react'

const InputImageCircleView = ({ image, handleImageChange }) => {
    return (
        <div className="flex flex-col items-center">
            <label
                htmlFor="imageInput"
                className="relative w-32 h-32 rounded-full border-2 border-gray-300 cursor-pointer overflow-hidden flex items-center justify-center bg-gray-100 hover:border-primary transition-all"
            >
                <img
                    src={image || 'https://via.placeholder.com/150'} // Dummy avatar if no image
                    alt="Avatar"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-bold">Upload</span>
                </div>
            </label>
            <input
                id="imageInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
            />
        </div>
    )
}

export default InputImageCircleView