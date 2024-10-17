import { arrowGray } from "../../assets"
import "./WhyVaccTransCard.css"

const WhyVaccTransCard = ({icon, alt, text}) => {
  return (
    <div className="why-vacc-trans-card">
      <div className="why-vacc-trans-card-icon">
        <img src={icon} alt={alt} />
      </div>
      <div className="why-vacc-trans-card-content">
        <h4 className="why-vacc-trans-card-title">
          {text}
        </h4>
        <a className="read-more-link" href="#">
          <span>Read More</span>
          <img 
            src={arrowGray} 
            alt="Arrow Right" 
          />
        </a>
      </div>
    </div>
  )
}
export default WhyVaccTransCard