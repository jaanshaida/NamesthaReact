import { LOGO_URL }  from "../Utils/Constants"

const Header = () => {
    return (
        <div className="header"> 
            <div className="logo-container">
                <img 
                    className="logo" 
                    // src="https://images.app.goo.gl/YniFPMbvx9HYVfHi6"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contac Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            

        </div>
    )
}


export default Header