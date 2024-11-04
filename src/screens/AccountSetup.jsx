import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AccountSetup = () => {
    const naviagte = useNavigate()
    const prefferedCurrencies = ["Nigerian Naira(N)", "Ghanian Cedes(c)", "European Euro(€)", "American Dollar($)", ""]
    const prefferedCategories = ["Information Commuinication Technology(ICT)", "Human Resource", ""]

    // Form Values
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [bussinessName, setBussinessName] = useState()
    const [prefferedCurrency, setPrefferedCurrency] = useState("")
    const [prefferedCategory, setPrefferedCategory] = useState("")
    const [bussinessAddress, setBussinessAddess] = useState()


    function SubmitForm(e) {
        e.preventDefault();
        const formData = new FormData()

    }


    return (
        <div className="accountSetup">
            <div className="center">
                <div className="column">
                    <div className="header">Welcome!</div>
                    <div className="center_label">Please fill in the details to complete your account setup.</div>
                </div>

                <form onSubmit={SubmitForm}>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Adamu' value={firstname}
                        onChange={(e) => { setFirstName(e.target.value) }} minLength={2} maxLength={64} required />


                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Bello' value={lastname}
                        onChange={(e) => { setLastName(e.target.value) }} maxLength={64} minLength={2} required />


                    <label htmlFor="">Bussiness Name</label>
                    <input type="text" placeholder='Bussiness Name' value={bussinessName}
                        onChange={(e) => { setBussinessName(e.target.value) }} maxLength={255} minLength={2} required />


                    <label htmlFor="">Bussiness Category</label>
                    <select title='Bussiness Category' value={prefferedCategory} onChange={(e) => { setPrefferedCategory(e.target.value) }} >
                        {
                            prefferedCategories.map(category => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <option value={category} >{category}</option>
                                )
                            })
                        }
                    </select>
                    <label htmlFor="">Bussiness Address</label>
                    <input type='text' placeholder='Bussiness Address' />
                    <label htmlFor="">Currency</label>
                    <select value={prefferedCurrency} onChange={(e) => { setPrefferedCurrency(e.target.value) }} >
                        {
                            prefferedCurrencies.map(currency => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <option value={currency} >{currency}</option>
                                )
                            })
                        }
                    </select>
                    <input type="submit" value="Proceed" />
                </form>
            </div>
            <div className="bottom"></div>
        </div>
    )
}
export default AccountSetup
