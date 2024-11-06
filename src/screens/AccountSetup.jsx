import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../components/Authentication/InputField'
import { TypeAnimation } from 'react-type-animation'
import { Image } from '@iconsans/react/linear'

const AccountSetup = () => {
    const navigate = useNavigate()
    const [profilePicture, setProfilePicture] = useState()

    return (
        <div className="w-screen h-screen flex flex-row bg-black">
            <div className="w-full relative">
                <div className="absolute bottom-5 left-5 font-lato text-white">
                    <TypeAnimation
                        sequence={[
                            "'Accounting is the language of business.'", 1500,

                            "'Someone's sitting in the shade today because someone planted a tree a long time ago.'", 1500,

                            "`Rule No.1: Never lose money. Rule No.2: Never forget Rule No.1.'", 1500,

                            "'Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.'", 1500,

                            "'The best investment you can make is in your own abilities.'", 1500
                        ]}
                        speed={20}
                        repeat={Infinity}
                        className="italic text-lg" />
                    <br />
                    <Link to={'http://www.berkshirehathaway.com/'} className="text-lg italic text-primary">- Warren Buffett</Link>
                </div>
            </div>


            <div className="w-full bg-black p-5 relative flex justify-center items-center">

                <div className="flex flex-col text-white">
                    <h1 className="font-extrabold font-lato text-2xl">Welcome, Let's get your setup</h1>
                    <h3 className="text-grey text-sm">Please fill in the details to complete your account setup</h3>

                    <form className="mt-3">

                        <div className="mt-3 flex flex-col gap-2">
                            <label className='font-bold'>Profile Picture</label>
                            {/* <input type="file" accept="image/*" className='rounded-full border border-white w-20 h-20 file:bg-black' onChange={(e) => {
                                setProfilePicture(e.target.files[0])
                            }} /> */}
                        </div>

                        <InputField type={'text'} placeholder={'Adamu'} label={'First Name'} required />
                        <InputField type={'text'} placeholder={'Bello'} label={'Last Name'} required />
                        <InputField type={'text'} placeholder={'Adamu Bello Cosmetics'} label={'Bussiness Name'} />
                        <InputField type={'text'} placeholder={'Business Address'} label={'Address'} />

                        <button className="bg-white text-black w-full rounded-lg text-center font-lato p-2 font-extrabold mt-5" onClick={() => { navigate('/dashboard') }}>Proceed</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default AccountSetup
