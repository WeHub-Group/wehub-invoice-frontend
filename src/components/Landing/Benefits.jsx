import React from 'react'
import { FaClipboardCheck, FaFileInvoice, FaLaptop, FaPalette, FaPlugCircleCheck, FaTimeline } from 'react-icons/fa6'

const Benefits = () => {
    return (
        <section className="text-gray-600 body-font" id='features'>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-5xl text-3xl font-medium title-font mb-2 text-specialBlack">Why Choose Wehub Invoice Generator?</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Here are some benefits of using the WeHub Invoice Generator</p>
                </div>

                <div className="flex flex-wrap -m-4">
                    <BenefitItem icon={<FaTimeline />} title={'Time Efficieny'} desc={'Using an online invoice generator like WebHub saves time by automating the creation of invoices.'} />

                    <BenefitItem icon={<FaPalette />} title={'Professional and Customizable Design'} desc={'Using an online invoice generator like WebHub saves time by automating the creation of invoices.'} />

                    <BenefitItem icon={<FaClipboardCheck />} title={'Accuracy and Error Reduction'} desc={'Using an online invoice generator like WebHub saves time by automating the creation of invoices.'} />

                    <BenefitItem icon={<FaFileInvoice />} title={'Easy Record-Keeping and Tracking'} desc={'Using an online invoice generator like WebHub saves time by automating the creation of invoices.'} />

                    <BenefitItem icon={<FaLaptop />} title={'Multi-Device Access'} desc={'Using an online invoice generator like WebHub saves time by automating the creation of invoices.'} />

                    <BenefitItem icon={<FaPlugCircleCheck />} title={'Integration with Other Business Tools'} desc={'Using an online invoice generator like WebHub saves time by automating the creation of invoices.'} />
                </div>
            </div>
        </section>
    )
}

function BenefitItem({ icon, title, desc }) {
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full text-darkPrimary text-2xl mb-4">
                    {icon}
                </div>
                <h2 className="text-lg text-black font-bold title-font mb-2">{title}</h2>
                <p className="leading-relaxed text-base">{desc}.</p>
            </div>
        </div>
    )
}

export default Benefits