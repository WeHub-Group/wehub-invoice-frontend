import chartSvg from '../assets/svg/chart-21.svg'
import messageSvg from '../assets/svg/message.svg'
import notificationSvg from '../assets/svg/notification.svg'
import cloudSvg from '../assets/svg/cloud-plus.svg'

const Features = () => {
    return (
        <div className="h-screen md:h-[60vh] flex flex-col p-2 md:p-5 gap-3 md:grid md:grid-cols-2" id="features">

            <div className="h-full w-full flex flex-col gap-3 justify-center">
                <div className="flex flex-col gap-3">
                    <p className="text-primary uppercase text-2xl text-center font-bold font-lato">Our Features</p>
                    <p className="text-center font-lato text-sm">Wehub Invoice generator helps you get paid on time. We <br></br>  provide multiple
                        payment
                        options that your customers <br></br> can choose from to make their payment securely.
                    </p>
                </div>

                <p className="text-primary text-xl text-center font-bold font-lato">Payment Modes</p>
            </div>


            <div className="flex flex-col md:grid md:grid-cols-2 md:place-content-center gap-4">
                <FeatureItem text={"Send Invoices via SMS, email and client portal"} svg={messageSvg} />
                <FeatureItem text={"Keep track of customers Invoice status."} svg={chartSvg} />
                <FeatureItem text={"Follow up with automated payment reminders and notifications."} svg={notificationSvg} />
                <FeatureItem text={"Thousands of subscribers make use of Wehub Invoice Generator daily"} svg={cloudSvg} />
            </div>


        </div >
    )
}


// eslint-disable-next-line react/prop-types
function FeatureItem({ text, svg }) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <img src={svg} alt="" className='h-10 w-10' />
            <h3 className='text-center font-lato'>{text}</h3>
        </div>
    )
}
export default Features
