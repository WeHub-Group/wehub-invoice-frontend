import { useState } from 'react'
import '../styles/accountsetup.scss'

const AccountSetup = () => {
    const [prefferedCurrency, setPrefferedCurrency] = useState("")
    const [prefferedCategory, setPrefferedCategory] = useState("")
    const prefferedCurrencies = ["Nigerian Naira(N)", "Ghanian Cedes(c)", "European Euro(€)", "American Dollar($)", ""]
    const prefferedCategories = ["Information Commuinication Technology(ICT)", "Human Resource", ""]

    return (
        <div className="accountSetup">
            <div className="center">
                <div className="column">
                    <div className="header">Welcome!</div>
                    <div className="center_label">Please fill in the details to complete your account setup.</div>
                </div>

                <form>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Adamu' />
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Bello' />
                    <label htmlFor="">Bussiness Name</label>
                    <input type="text" placeholder='Bussiness Name' />
                    <label htmlFor="">Bussiness Category</label>
                    <select value={prefferedCategory} onChange={(e) => { setPrefferedCategory(e.target.value) }} >
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
