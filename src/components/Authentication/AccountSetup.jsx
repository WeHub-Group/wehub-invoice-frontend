import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import InputField from './InputField'
import { TypeAnimation } from 'react-type-animation'
import db from '../../appwrite/database.appwrite'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const AccountSetup = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [profilePicture, setProfilePicture] = useState()
    const [firstname, setFirstame] = useState('')
    const [lastname, setLastname] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [businessAddress, setBusinessAddress] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        const payload = {
            userId: location.state.$id,
            firstname: firstname,
            lastname: lastname,
            phoneNumber: location.state.telephone,
            businessName: businessName,
            businessAddress: businessAddress,
        }
        console.log(payload);

        await db.users.create(payload)
            .then((result) => {
                toast.success('Successfully added to DB')
                navigate('/dashboard')
            }).catch((err) => {
                toast.error('Error')
                console.log(err);
            });
    }

    return (
        <div className="w-screen h-screen flex flex-row bg-black">
            <ToastContainer position='top-right' />

            <div className="w-full relative md:flex hidden">
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

                        <InputField type={'text'} placeholder={'Adamu'} label={'First Name'} required dark={true} value={firstname} onChange={({ target }) => setFirstame(target.value)} />

                        <InputField type={'text'} placeholder={'Bello'} label={'Last Name'} required dark={true} value={lastname} onChange={({ target }) => setLastname(target.value)} />

                        <InputField type={'text'} placeholder={'Adamu Bello Cosmetics'} label={'Bussiness Name'} required dark={true} value={businessName} onChange={({ target }) => setBusinessName(target.value)} />

                        <InputField type={'text'} placeholder={'Business Address'} label={'Address'} dark={true} value={businessAddress} onChange={({ target }) => setBusinessAddress(target.value)} />

                        <button className="bg-white text-black w-full rounded-lg text-center font-lato p-2 font-extrabold mt-5" onClick={handleSubmit}>Proceed</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default AccountSetup
