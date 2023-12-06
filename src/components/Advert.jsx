import { useNavigate } from 'react-router-dom'

const Advert = () => {
    const navigate = useNavigate()

    function goToSignup() {
        navigate('signup')
    }
    return (
        <div className="bg-advertPattern h-[40vh] md:h-[60vh]  bg-center bg-cover flex flex-row p-2 md:p-5 items-center justify-center md:justify-between" id="pricing">
            <div className="flex flex-col gap-3 items-center md:items-start">
                <p className='uppercase text-xl font-lato font-bold'>Payment</p>
                <p className='font-lato md:text-2xl text-center md:text-start'>Generate your invoice now for free <br /> Making payments has been <br /> more easy </p>
                <button className='bg-darkPrimary text-white font-lato cursor-pointer w-full rounded-lg p-[20px_40px] hover:scale-110 transition-all' onClick={goToSignup}>Generate Invoice</button>
            </div>
            <img src="/src/assets/images/advert_card.png" className='hidden md:flex h-[80%] w-[36%]' />
        </div >
    )
}

export default Advert
