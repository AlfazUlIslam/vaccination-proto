import {modernaLogo, pfizerLogo, astraZenecaLogo, sinovacLogo} from "../../assets"
import "./Brands.css"

const Brands = () => {
  return (
    <section className="brands">
        <div className="brands-container">
            <img src={modernaLogo} alt="Moderna Logo" />
            <img src={pfizerLogo} alt="Pfizer Logo" />
            <img src={astraZenecaLogo} alt="Astra Zeneca Logo" />
            <img src={sinovacLogo} alt="Sinovac Logo" />
        </div>
    </section>
  )
}
export default Brands