import React from 'react'

const CTA = () => {
    return (
        <section className="text-black body-font bg-primaryAccent">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">
                        Stay Informed, Stay Ahead!
                    </h1>
                    <p className="leading-relaxed mt-4">
                        Subscribe to our newsletter for the latest updates, tips, and exclusive offers delivered straight to your inbox.
                    </p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Register for Newsletter</h2>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                        <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="text-white bg-darkPrimary border-0 py-2 px-8 focus:outline-none hover:bg-primary rounded text-lg">Agree</button>
                    <p className="text-xs text-gray-500 mt-3 italic">Simplicity is the ultimate sophistication.</p>
                    <p className='text-xs text-gray-500 mt-3 font-bold'>- Leonardo da Vinci</p>
                </div>
            </div>
        </section>
    )
}

export default CTA