import { useNavigate } from 'react-router-dom'

const Advert = () => {
    const navigate = useNavigate()

    function generateInvoice() {
        navigate("/signup")
    }
    return (
        <div className="" id="advert">

        </div >
    )
}

export default Advert
