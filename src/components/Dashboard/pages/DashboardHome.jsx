import React, { useEffect, useState } from 'react'
import { getUser } from '../../../api/database.api';
import getUserId from '../../../appwrite/account.appwrite';
import { toast } from 'react-toastify';
import { Trash } from '@iconsans/react/linear';
import { FaFileInvoice } from 'react-icons/fa'
import { p } from 'framer-motion/client';
import { toCurrencyFormat } from '../../basic/toCurrency';

const DashboardHome = () => {
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

    const fetchUser = async () => {
        const user = await getUserId();

        if (user) {
            getUser(user.userEmail)
                .then(({ data }) => {
                    setUser(data)
                }).catch((err) => {
                    console.error("Error", err);
                    toast.error('Failed to fetch user Details')
                });
        }
    };
    useEffect(() => {
        fetchUser();
    }, [])

    const totalRevenueAllInvoices = user.invoices?.reduce(
        (grandTotal, invoice) =>
            grandTotal + invoice.itemList.reduce(
                (total, item) => total + item.itemRate * item.itemQuantity,
                0
            ),
        0
    );

    const totalPaidRevenue = user.invoices?.filter(invoice => invoice.status === "paid")
        .reduce((total, invoice) =>
            total + invoice.itemList.reduce(
                (subtotal, item) => subtotal + item.itemRate * item.itemQuantity,
                0 // Initial value for inner reduce
            ),
            0 // Initial value for outer reduce
        );



    return (
        <div className="h-screen font-lato">

            {/* Navbar */}
            <div className="bg-black flex-1 flex flex-row items-center p-3">
                <div className="ml-auto flex flex-row items-center gap-5 text-white">
                    <p className='font-bold'>{user.businessName || 'Placeholder'}</p>
                    <img src={user.profilePicUrl || 'https://via.placeholder.com/150'} className="h-10 w-10 rounded-full bg-white ml-auto" />
                </div>
            </div>

            {/* Invoice is Empty */}
            {user.invoices.length == 0 &&
                <EmptyInvoice />
            }

            {/* Invoice is not empty */}
            {user.invoices.length > 0 &&
                <div className="px-14 py-10">

                    <div className="flex flex-wrap">
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
                                        <p>{toCurrencyFormat(totalRevenueAllInvoices)}</p>
                                    </h2>
                                    <p className="text-gray-500">Total Expected Revenue</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-3xl title-font font-medium">
                                        <p>{toCurrencyFormat(totalPaidRevenue)}</p>
                                    </h2>
                                    <p className="text-gray-500">Total Paid Revenue</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="p-3 mt-8 flex flex-col">
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
                </div>
            }


        </div>
    )
}

function EmptyInvoice() {
    return (
        <div className="flex h-full flex-col justify-center items-center py-5 font-lato">
            <img className='h-80' src='/assets/svg/empty-invoices.svg' alt="" />
            <p className='text-2xl font-extrabold'>Start generating invoices to track Payments</p>
        </div>
    )
}

export default DashboardHome