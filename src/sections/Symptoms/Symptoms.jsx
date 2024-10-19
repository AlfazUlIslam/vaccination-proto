import { symptomsImage } from "../../assets"
import "./Symptoms.css"

const Symptoms = () => {
  return (
    <section id="symptoms">
        <div className="symptoms-container">
            <div className="symptoms-content">
                <h5 className="symptoms-title">Covid-19 Prevention</h5>
                <h2 className="symptoms-heading">
                    <span>COVID-19 </span>
                    Symptoms
                </h2>
                <p className="symptoms-description">
                    Adipiscing nec etiam tortor elit quisque. 
                    Arcu aliquet convallis aenean eu velit.
                    Mi vestibulum, ullamcorper venenatis imperdiet 
                    augue arcu donec neque.
                </p>
            </div>
            <div className="symptoms-image">
                <img src={symptomsImage} alt="Person With Symptoms" />
            </div>
        </div>
    </section>
  )
}
export default Symptoms