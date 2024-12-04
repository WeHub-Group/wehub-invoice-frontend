import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

    const date = '2024';

    function goToSignup() {
        navigate("signup")
    }

    return (
        <div className="h-auto md:h-[70vh] flex flex-col bg-specialBlack text-white gap-3 p-5 md:p-5" id="contactus">

            <div className="flex flex-col md:flex-row justify-center items-center h-full">

                <div className="md:w-[50%]">
                    <div className="flex flex-col gap-3">
                        <img src="/assets/images/wehub_logo.jpg" className='h-20 w-20 md:h-32 md:w-32 bg-gray-50 rounded-full self-center md:self-start' />
                        <h3 className='font-lato font-bold text-2xl md:text-start text-center' >WEHUB INVOICE GENERATOR</h3>
                    </div>

                    <div className="flex flex-col mt-3">
                        <h4 className='font-bold font-lato text-center md:text-start'>Email</h4>
                        <h5 className='font-lato text-center md:text-start'>wehubfreelanceagency@gmail.com</h5>
                    </div>

                    <div className="flex flex-col mt-3">
                        <h4 className='font-bold font-lato text-center md:text-start'>Phone Number</h4>
                        <h5 className='font-lato text-center md:text-start'>+234 9064898590</h5>
                    </div>
                </div>


                <div className="text-center flex flex-col gap-5 pb-3 mt-5 md:w-[40%]">
                    <h1 className='font-lato text-xl'>Track your payments, generate invoices and receive payments fast and swift now.</h1>
                    <div className="bg-darkPrimary text-white font-lato cursor-pointer w-full rounded-lg p-[15px_40px] hover:scale-110 transition-all" onClick={goToSignup}>Sign Up</div>
                </div>

            </div>


            <div className="flex flex-col gap-3">
                <hr className='' />
                <div className="text-center text-lg">© {date} WEHUB FREELANCE AGENCY</div>
            </div>

        </div>
    )
}

export default Footer
