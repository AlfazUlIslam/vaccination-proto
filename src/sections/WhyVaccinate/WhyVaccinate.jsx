import { WhyVaccTransCard } from "../../components"
import { shield, arrowTurquoise, users, thermometer } from "../../assets"
import "./WhyVaccinate.css"

const WhyVaccinate = () => {
  return (
    <section className="why-vaccinate">
        <div className="why-vaccinate-container">
            <div className="why-vaccinate-content">
                <h2 className="why-vaccinate-heading">
                    Why get vaccinated today?
                </h2>
                <p className="why-vaccinate-description">
                    Magna adipiscing at elit at ornare lectus
                    nibh lorem. 
                    Ac, sed ac lorem pellentesque vestibulum
                    risus matti. 
                    In molestie condimentum malesuada non.
                </p>
            </div>
            <div className="why-vaccinate-cards">
                <div className="gray-card">
                    <div className="gray-card-icon">
                        <img src={shield} alt="Shield Icon" />
                    </div>
                    <h4 className="gray-card-title">
                        Protects your immune 
                        system against viruses
                    </h4>
                    <p className="gray-card-description">
                        Velit ut consectetur mauris, orci amet, 
                        faucibus. 
                        Sit turpis fringilla ipsum pretium,
                        dictum. Dolor eget vel nulla lorem ac.
                    </p>
                    <div className="gray-card-read-more">
                        <span>Read More</span>
                        <img src={arrowTurquoise} alt="Right Arrow" />
                    </div>
                </div>
                <div className="transparent-cards">
                    <WhyVaccTransCard 
                        icon={users}
                        alt="Users"
                        text="Minimize the spread of the virus"
                    />
                    <WhyVaccTransCard 
                        icon={thermometer}
                        alt="Thermometer"
                        text="Protect yourself"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
export default WhyVaccinate