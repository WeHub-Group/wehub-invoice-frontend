import React, { useEffect, useState } from 'react'
import { getUser } from '../../../api/database.api';
import getuserEmail from '../../../appwrite/account.appwrite';
import { toast, ToastContainer } from 'react-toastify';
// import { toCurrencyFormat } from '../../basic/toCurrency';
import 'react-toastify/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { EyeSlash, Eye } from '@iconsans/react/linear';


const DashboardHome = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        profilePicUrl: '',
        phoneNumber: '',
        businessName: '',
        businessAddress: '',
        invoices: []
    });
    const [isHidden, setIsHidden] = useState(true)
    const toCurrencyFormat = (number) =>
        number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'NGN',
        });
    const fetchUser = async () => {
        const user = await getuserEmail();

        if (user) {
            getUser(user.userEmail)
                .then(({ data }) => {
                    setUser(data);
                }).catch(({ response }) => {
                    console.error("Error", response);
                    toast.error(`${response.data}`)
                    if (response.status === 404) {
                        navigate('/signup')
                    }
                });
        }
    };

    useEffect(() => {
        fetchUser();
    }, [])

    const totalRevenueAllInvoices = user.invoices?.filter(invoice => invoice.status === "paid")
        .reduce(
            (grandTotal, invoice) =>
                grandTotal + invoice.itemList.reduce(
                    (total, item) => total + item.itemRate * item.itemQuantity,
                    0
                ),
            0
        );

    const totalUnpaidInvoices = user.invoices?.filter(invoice => invoice.status === 'unpaid')

    return (
        <div className="h-screen font-lato">
            <ToastContainer position='top-right' />

            {/* Navbar */}
            <div className="bg-black flex-1 flex flex-row items-center p-3">
                <div className="ml-auto flex flex-row items-center gap-5 text-white">
                    <p className='font-bold'>{user.businessName || 'loading'}</p>
                    {
                        user.profilePicUrl == '' ?
                            <div className="h-10 w-10 rounded-full bg-white text-black flex justify-center items-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity }}>
                                    <FaSpinner />
                                </motion.div>
                            </div>
                            :
                            <img src={user?.profilePicUrl} className="h-10 w-10 rounded-full bg-white ml-auto" />
                    }
                </div>
            </div>


            <div className="md:px-14 px-2 py-10">

                {/* Overview */}
                <div className="flex flex-wrap">

                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-3xl title-font font-medium">
                                    <p>{isHidden ? '******' : toCurrencyFormat(totalRevenueAllInvoices)}</p>
                                </h2>
                                <p className="text-gray-500">Total Revenue</p>
                                <div className="cursor-pointer" onClick={() => { setIsHidden(!isHidden) }}>
                                    {isHidden ? <Eye /> : <EyeSlash />}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-3xl title-font font-medium">
                                    {user.invoices.length}
                                </h2>
                                <p className="text-gray-500">Total Invoices</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-3xl title-font font-medium">
                                    <p>{totalUnpaidInvoices.length}</p>
                                </h2>
                                <p className="text-gray-500">Pending Invoices</p>
                            </div>
                        </div>
                    </div>



                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-3xl title-font font-medium">
                                    <p>{totalUnpaidInvoices.length}</p>
                                </h2>
                                <p className="text-gray-500">Paid Invoices</p>
                            </div>
                        </div>
                    </div>

                </div>

                {
                    user.invoices.length == 0 ?
                        <EmptyInvoice />
                        : <div className="p-3 mt-8 flex flex-col">
                            <p className='text-xl font-extrabold'>My Invoices</p>

                            <div className="grid grid-cols-5 py-2 text-black">
                                <p>No</p>
                                <p>To</p>
                                <p>Date</p>
                                <p>Due</p>
                                <p>Status</p>
                            </div>

                            <div className="grid grid-cols-5 gap-3">
                                {
                                    user.invoices?.map((invoice, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <p>{index + 1}</p>
                                                <p>{invoice.recipientName}</p>
                                                <p>{invoice.issuedOn}</p>
                                                <p>{invoice.dueDate}</p>
                                                <p className={invoice.status == 'paid' ? 'text-blue-500' : 'text-red-500'}>{invoice.status}</p>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        </div>
                }

            </div>


        </div>
    )
}

function EmptyInvoice() {
    return (
        <div className="flex h-[100%] flex-col justify-center items-center py-5 font-lato">
            <img className='h-40 md:h-80' src='/assets/svg/empty-invoices.svg' alt="" />
            <p className='md:text-2xl text-lg text-center font-extrabold'>Start generating invoices to track Payments</p>
        </div>
    )
}
const FullScreenLoader = ({ loading }) => (
    loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="loader">Loading...</div>
        </div>
    )
);


export default DashboardHome