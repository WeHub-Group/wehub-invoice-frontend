
import chartSvg from '../assets/svg/chart-21.svg'
import messageSvg from '../assets/svg/message.svg'
import notificationSvg from '../assets/svg/notification.svg'
import cloudSvg from '../assets/svg/cloud-plus.svg'

const Features = () => {
    return (
        <div className="h-screen" id="features">
            <div className="">
                <div className="">
                    <div className="">Our Features</div>
                    <div className="">Wehub Invoice Generator helps you get paid on time. We <br></br> provide multiple
                        payment
                        options that your customers <br></br> can choose from to make their payment securely.</div>
                    <div className="">Payment Modes</div>
                </div>
                <div className="">
                    <div className="">
                        <img src={messageSvg} alt="" />
                        <h3>Send Invoice via via sms, email or client portal.</h3>
                    </div>
                    <div className="">
                        <img src={chartSvg} alt="" />
                        <h3>Keep track of customers Invoice status.</h3>
                    </div>
                    <div className="">
                        <img src={notificationSvg} alt="" />
                        <h3>Follow up with automated <br></br> payment reminders and <br></br> notifications.</h3>
                    </div>
                    <div className="">
                        <img src={cloudSvg} alt="" />
                        <h3>Thousands of subscribers <br></br> make use of Wehub Invoice <br></br> Generator daily.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
