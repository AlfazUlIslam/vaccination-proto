import { Dropdown } from "../../components"
import "./Registration.css"

const Registration = () => {
    return (
        <section className="registration">
            <div className="registration-container">
                <h2 className="registration-heading">
                    Get your vaccine registration today
                </h2>
                <div className="registration-content">
                    <div className="registration-image">
                        <button className="verify-status-button">
                            Verify Status
                        </button>
                    </div>
                    <form className="registration-form">
                        <label className="full-name-label">
                            Patient's Full Name
                        </label>
                        <input 
                            className="full-name-input"
                            type="text" 
                            placeholder="Full name"
                        />
                        <label className="mobile-number-label">
                            Mobile Number
                        </label>
                        <p className="notification-text">
                            Notifications for appointment and reminders
                            will be sent to this provided number
                        </p>
                        <div className="input-group-and-button">
                            <div className="input-group">
                                <Dropdown />
                                <input 
                                    className="mobile-number-input"
                                    type="text" 
                                    placeholder="Mobile number"
                                />
                            </div>
                            <button 
                                className="verify-button"
                                onClick={(e) => e.preventDefault()}
                            >
                                Verify
                            </button>
                        </div>
                        <div className="reg-submit-button-container">
                            <button 
                                className="reg-submit-button"
                                onClick={(e) => e.preventDefault()}
                            >
                                Submit
                            </button>
                        </div>
                        <div className="registration-bottom-links">
                            <a href="#">
                                Already registered ?
                            </a>
                            <a href="#">
                                Check your status
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Registration