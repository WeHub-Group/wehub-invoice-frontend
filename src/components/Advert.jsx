import { useNavigate } from 'react-router-dom'
import './Advert.scss'

const Advert = () => {
    const navigate = useNavigate()
    /*
    Check if user has a signup session active
     if{
        gotoDashboard()
     }else{
        goToSignup()
     }
     but for the mean time*/
    function generateInvoice() {
        navigate("/signup")
    }
    return (
        <div className="advert" id="advert">
            <div className="advert_section">
                <div className="advert_section_1">
                    <div className="advert_section_1_header_1">PAYMENT</div>
                    <div className="advert_section_1_header_2">Generate your Invoices now for free <br></br>Recieving payments have
                        never been more easier </div>
                    <div className="advert_section_1_button" onClick={generateInvoice}>Generate Invoice</div>
                </div>
                <div className="advert_section_2"></div>
            </div>
        </div>
    )
}

export default Advert
