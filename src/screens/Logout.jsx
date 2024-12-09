import React from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../appwrite/appwrite.config';

const LogoutPage = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await account.deleteSessions();
        navigate('/login');
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-darkPrimary text-center">
                    Are you sure you want to log out?
                </h1>
                <p className="text-center text-gray-600 mt-4">
                    You will be redirected to the login page.
                </p>
                <div className="mt-8 flex justify-between">
                    <button
                        className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition-all"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-darkPrimary text-white px-6 py-2 rounded hover:bg-primaryHover transition-all"
                        onClick={handleLogout}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutPage;
