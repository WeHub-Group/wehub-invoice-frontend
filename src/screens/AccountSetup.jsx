import '../styles/accountsetup.scss'

const AccountSetup = () => {
    return (
        <div className="accountSetup">
            <div className="center">
                <div className="header">Welcome!</div>
                <div className="center_label">Please fill in the details to complete your account setup.</div>

                <form>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Adamu' />
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Bello' />
                    <label htmlFor="">Bussiness Name</label>
                    <input type="text" placeholder='Bussiness Name' />
                    <label htmlFor="">Bussiness Category</label>
                    <input type="text" placeholder='Bussiness Category' />
                    <label htmlFor="">Bussiness Address</label>
                    <input type="text" placeholder='Bussiness Category' />
                    <label htmlFor="">Bussiness Category</label>
                    <input type="text" placeholder='Nigerian Niara' />
                    {/* Please change the above to a multiple selct option */}
                    <input type="submit" value="Proceed" />
                </form>
            </div>

            <div className="bottom"></div>
        </div>
    )
}

export default AccountSetup
