import { useState } from "react"
import { FaAlignLeft } from "react-icons/fa"
import logo from "../../assets/logo.png"
import "./Navbar.css"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img 
                        className="w-[100%]" 
                        src={logo} 
                        alt="Vaccination Logo" 
                    />
                </div>
                <div className="navbar-links">
                    <a className="navbar-link">Home</a>
                    <a className="navbar-link">Services</a>
                    <a className="navbar-link">Schedule</a>
                    <a className="navbar-link">Contact us</a>
                </div>
                <div className="navbar-button">
                    <button>Check Status</button>
                </div>
                <div className="mobile-menu">
                    <div 
                        className="toggler"
                        onClick={() => setToggle(!toggle)}
                    >
                        <FaAlignLeft />
                    </div>
                    {toggle && 
                    <div className="drawer">
                        <a className="drawer-link">Home</a>
                        <a className="drawer-link">Services</a>
                        <a className="drawer-link">Schedule</a>
                        <a className="drawer-link">Contact us</a>
                    </div>}
                </div>
            </div>
        </nav>
    )
}
export default Navbar