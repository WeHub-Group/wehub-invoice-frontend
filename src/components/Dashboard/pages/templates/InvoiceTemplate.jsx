import React, { useEffect, useRef, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Button from "../../../basic/Button";
import { toast, ToastContainer } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { addInvoiceToDB } from "../../../../api/database.api";


const InvoiceTemplate = () => {
    const targetRef = useRef();
    const location = useLocation();
    const [invoice, setInvoice] = useState({
        invoiceId: "",
        profielPicUrl: "",
        senderName: "",
        senderEmail: "",
        senderAddress: "",
        recipientName: "",
        recipientEmail: "",
        recipientAddress: "",
        billTitle: "",
        issuedOn: "",
        dueDate: "",
        terms: "",
        itemList: [],
    });
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (location.state) {
            setInvoice(location.state);
        }
    }, []);

    const toCurrencyFormat = (number) =>
        number.toLocaleString("en-US", { style: "currency", currency: "NGN" });

    const calculateTotal = () =>
        invoice.itemList.reduce(
            (acc, item) => acc + item.itemRate * item.itemQuantity,
            0
        );

    const handleSave = async () => {
        addInvoiceToDB(invoice)
            .then((result) => {
                console.log(result);
                toast.success('Your PDF has been Saved')
                setIsSaved(true)
            }).catch(({ response }) => {
                toast.error(response.data.message)
            });
    };

    const handleDiscard = () => {
        confirmAlert({
            title: `Do you want to ${isSaved ? 'Go back?' : 'Discard this Invoice?'}`,
            buttons: [
                {
                    label: "Yes",
                    onClick: () => { <Navigate to={'/dashboard'} /> },
                },
                {
                    label: "No",
                    onClick: () => { },
                },
            ],
        });
    };

    const handleDownload = async () => {
        const element = targetRef.current;
        const canvas = await html2canvas(element, {
            scale: 2, // Improve quality
            useCORS: true, // Allow cross-origin images
        });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("portrait", "pt", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${invoice.invoiceId}.pdf`);
    };

    return (
        <>
            <ToastContainer position="top-right" />
            <div className="p-8 bg-gray-200 flex flex-col justify-center min-h-screen font-lato">
                {/* Invoice Here */}

                <div className="flex flex-col rounded-lg" ref={targetRef}>
                    <div className="bg-white flex-1 flex flex-col p-8">
                        {/* Invoice Header */}
                        <div className="flex justify-between items-center">
                            <img
                                src={invoice.profielPicUrl || "https://via.placeholder.com/150"}
                                alt="Profile"
                                className="rounded-full w-32 h-32 bg-gray-300 border-2 border-black"
                            />
                            <div className="text-end">
                                <h1 className="text-5xl">INVOICE</h1>
                                <p className="text-xl mt-3">
                                    INVOICE NO: <span className="text-darkPrimary">#{invoice.invoiceId}</span>
                                </p>
                            </div>
                        </div>

                        {/* Bill To Section */}
                        <div className="mt-10">
                            <p className="font-extrabold">Bill To:</p>
                            <p>{invoice.recipientName}</p>
                            <p>{invoice.recipientAddress}</p>
                            <p>{invoice.recipientEmail}</p>
                        </div>

                        {/* Items */}
                        <div className="mt-20">
                            <div className="grid grid-cols-4 py-2 bg-black text-white text-center">
                                <p>Item</p>
                                <p>Quantity</p>
                                <p>Rate</p>
                                <p>Amount</p>
                            </div>
                            <div className="grid grid-cols-4 gap-4 mt-4">
                                {invoice.itemList?.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <p className="capitalize">{item.itemName}</p>
                                        <p>{item.itemQuantity}</p>
                                        <p>{toCurrencyFormat(item.itemRate)}</p>
                                        <p>{toCurrencyFormat(item.itemRate * item.itemQuantity)}</p>
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="mt-10 grid grid-cols-4 py-2 border-y border-black">
                                <p className="font-bold col-span-3">Total:</p>
                                <p className="ml-4 font-bold">{toCurrencyFormat(calculateTotal())}</p>
                            </div>
                        </div>

                        {/* Bill info */}
                        <div className="mt-16 text-start grid grid-cols-2 gap-5">
                            <div className="">
                                <p className="font-bold">Title:</p>
                                <p>{invoice.billTitle}</p>
                            </div>

                            <div className=""></div>

                            <div className="">
                                <p className="font-bold">Terms:</p>
                                <p>{invoice.terms}</p>
                            </div>
                        </div>


                        <div className="mt-24 text-end">
                            <p className="text-xl">{invoice.senderName}</p>
                            <p>{invoice.senderAddress}</p>
                        </div>
                    </div>


                    {/* Footer */}
                    <div className="bg-black text-white font-lato py-3 flex items-center justify-center">
                        <p>Generate using <span className="text-darkPrimary">WEHUB INVOICE GENERATOR</span></p>
                    </div>
                </div>


                {/* Actions */}
                <div className="flex justify-center mt-8 gap-4">
                    <Button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:scale-105 transition-all"
                        defaultText={isSaved ? 'Go back' : 'Discard'}
                        onClick={handleDiscard}
                    />
                    <Button
                        className="bg-black text-white px-4 py-2 rounded hover:scale-105 transition-all"
                        defaultText={"Save"}
                        onClick={handleSave}
                    />
                    {isSaved &&
                        <Button
                            className="bg-darkPrimary text-white px-4 py-2 rounded hover:scale-105 transition-all"
                            defaultText={"Download As PDF"}
                            onClick={handleDownload}
                        />
                    }

                </div>
            </div>
        </>
    );
};

export default InvoiceTemplate;
