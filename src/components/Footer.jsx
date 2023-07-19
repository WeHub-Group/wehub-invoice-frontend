import './footer.scss'

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer_top">
                <div className="footer_top_grid">
                    <div className="footer_top_grid_card">
                        <div className="logoImage"></div>
                        <h3>WEHUB INVOICE GENERATOR</h3>
                    </div>
                    <div className="footer_top_grid_card"></div>
                    <div className="footer_top_grid_card">
                        <h4>Email</h4>
                        <h5>wehubfreelanceagency@gmail.com</h5>
                    </div>
                    <div className="footer_top_grid_card">
                        <h4>Phone Number</h4>
                        <h5>+234 704 400 0087</h5>
                    </div>
                </div>
                <div className="footer_top_col">
                    <h1>Track your payments, generate invoices and receive payments fast and swift now.</h1>
                    <div className="footer_top_col_button">Sign Up</div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="orgName">© 2023 WEHUB FREELANCE AGENCY</div>
            </div>
        </div>
    )
}

export default Footer
