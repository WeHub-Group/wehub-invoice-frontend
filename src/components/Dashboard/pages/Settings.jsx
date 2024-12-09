import { AiOutlineEdit } from 'react-icons/ai'

const Settings = () => {
    return (
        <div className='bg-white w-full h-full p-1'>
            <div className="flex justify-center items-center">In progress</div>
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