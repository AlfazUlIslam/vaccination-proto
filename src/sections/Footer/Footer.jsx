import { logo, youtubeIcon, instagramIcon, twitterIcon, facebookIcon } from "../../assets"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-logo">
                <img src={logo} alt="Vaccination Logo" />
            </div>
            <div className="footer-links">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Schedule</a>
                <a href="#">Contact us</a>
            </div>
            <div className="footer-social-links">
                <a href="#">
                    <img src={youtubeIcon} alt="Youtube Icon" />
                </a>
                <a href="#">
                    <img src={instagramIcon} alt="Instagram Icon" />
                </a>
                <a href="#">
                    <img src={twitterIcon} alt="Twitter Icon" />
                </a>
                <a href="#">
                    <img src={facebookIcon} alt="Facebook Icon" />
                </a>
            </div>
        </div>
    </footer>
  )
}
export default Footer