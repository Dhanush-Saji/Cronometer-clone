import styles from "./Navbar.css";
import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <div className="navBar">
            <img className="navLogo" src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt="error" />
            <div className="nav2ndDiv">
                <div className="navText">
                <p>Product</p>
                <p>Support</p>
                <p>Blog</p>
                <p>Forums</p>
                <p>About</p>
                </div>
                <div>
                    <Link className="navLoginbutton" to="/login">Log In</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar