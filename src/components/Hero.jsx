
const Hero = () => {
    return (
        <div className="bg-heroPattern w-screen p-3 md:h-screen bg-top bg-no-repeat bg-cover" id="hero">
            <div className="flex flex-col h-full justify-center items-start p-5 gap-5">
                <div className="font-extrabold font-lato text-7xl">Automatic <br></br> Invoice Generator <br></br> For Your Client <br></br> and Business
                </div>

                <div className="font-lato">Track all your payments from start to finish with Wehub Automatic Invoice
                    Generator <br></br>We make project planning and payment a breeze <br></br> Manage your resources</div>
                <div className="bg-darkPrimary text-white font-lato cursor-pointer w-auto rounded-lg p-[20px_40px]">Generate Invoice</div>
            </div>
        </div>
    )
}

export default Hero
