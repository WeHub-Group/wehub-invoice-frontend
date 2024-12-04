import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from './InputField'
import { TypeAnimation } from 'react-type-animation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import getImage from '../basic/FileToImage';
import Button from '../basic/Button';
import validator from 'validator'
import { motion } from 'framer-motion';
import InputImageCircleView from '../basic/InputImageCircleView';
import { upload } from '../../appwrite/storage.appwrite';
import getuserEmail from '../../appwrite/account.appwrite'
import addUserToDB from '../../api/database.api'


const AccountSetup = () => {
    const navigate = useNavigate()
    const [firstname, setFirstame] = useState('')
    const [lastname, setLastname] = useState('')
    const [telephone, setTelephone] = useState('');
    const [businessName, setBusinessName] = useState('')
    const [businessAddress, setBusinessAddress] = useState('')
    const [image, setImage] = useState(null);
    const [profilePic, setProfilePic] = useState()
    const [error, setError] = useState('')
    Button.changeStatus(false)

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        setProfilePic(file)
        setImage(await getImage(file))
    };


    async function handleSubmit(e) {
        e.preventDefault();
        const user = await getuserEmail();

        if (validator.isEmpty(firstname) || firstname.length < 2) {
            setError('Firstname cannot be blank or less than 2')
            return false;
        }
        if (validator.isEmpty(lastname) || lastname.length < 2) {
            setError('Lastname cannot be blank or less than 2')
            return false;
        }
        if (validator.isEmpty(telephone)) {
            setError('Telephone cannot be empty')
        }
        if (!validator.isMobilePhone(telephone)) {
            setError('Phone number is not a valid phone Number')
        }
        if (validator.isEmpty(businessName) || businessName.length < 3) {
            setError('Business Name cannot be blank or less than 3')
            return false;
        }
        if (validator.isEmpty(businessAddress)) {
            setError('Business Address cannot be blank')
            return false;
        }
        if (validator.isEmpty(image)) {
            setError('Please upload your company Logo')
            return false;
        }
        else {
            Button.changeStatus(true)

            await upload(profilePic)
                .then(async (result) => {
                    const payload = {
                        firstname: firstname,
                        lastname: lastname,
                        email: user.userEmail,
                        profilePicUrl: result,
                        phoneNumber: telephone,
                        businessName: businessName,
                        businessAddress: businessAddress,
                    }

                    addUserToDB(payload)
                        .then(() => {
                            navigate('/dashboard')
                        }).catch(({ response }) => {
                            toast.error(response.data.message)
                            console.log(response);
                        });

                }).catch((err) => {
                    toast.error('Error Uploading Profile Picture')
                    console.log(err)
                    Button.changeStatus(false)
                });
        }
    }



    return (
        <div className="w-screen flex flex-row bg-black">
            <ToastContainer position='top-right' />

            <div className="w-full relative md:flex hidden">
                <span className="flex items-center justify-center h-full w-full">
                    <motion.img
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, type: 'spring' }}
                        src="/assets/svg/account-setup.svg" className="w-1/2 h-3/4" alt="" />
                </span>
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

                    <div className="mt-1">

                        <div className="mt-3 flex flex-col gap-2">
                            <InputImageCircleView image={image} handleImageChange={handleImageChange} />
                        </div>

                        <InputField type={'text'} placeholder={'Adamu'} label={'First Name'} required dark={true} value={firstname} onChange={({ target }) => setFirstame(target.value)} />

                        <InputField type={'text'} placeholder={'Bello'} label={'Last Name'} required dark={true} value={lastname} onChange={({ target }) => setLastname(target.value)} />

                        <InputField type={'telephone'} placeholder={'+234 123456789'} label={'Phone Number'} value={telephone} onChange={(e) => setTelephone(e.target.value)} required dark={true} />

                        <InputField type={'text'} placeholder={'Adamu Bello Cosmetics'} label={'Bussiness Name'} required dark={true} value={businessName} onChange={({ target }) => setBusinessName(target.value)} />

                        <InputField type={'text'} placeholder={'Business Address'} label={'Address'} dark={true} value={businessAddress} required onChange={({ target }) => setBusinessAddress(target.value)} />

                        <Button className="bg-white text-black w-full rounded-lg text-center font-lato p-2 font-extrabold flex justify-center mt-5" onClick={handleSubmit} defaultText={'Proceed'} />

                        {error &&
                            <motion.div
                                initial={{ x: 500, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 500, opacity: 0 }}
                                transition={{ duration: 1, type: 'spring' }}
                                className=" text-red-500 font-lato p-3 text-sm mt-3">
                                {error}
                            </motion.div>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
export default AccountSetup
