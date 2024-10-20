import { useState } from "react"
import { flagNigeria, flagBelgium, flagFrance, flagFinland, flagSwitzerland, chevronDown } from "../../assets"
import "./Dropdown.css"

const Dropdown = () => {
    const [toggle, setToggle] = useState(false)
        
    const handleToggle = (e) => {
        e.preventDefault()
        setToggle(!toggle)
    }

    return (
        <div className="dropdown">
            <button 
                className="dropdown-button"
                onClick={handleToggle}
            >
                <img className="flag" src={flagNigeria} />
                <img className="chevron" src={chevronDown} />
            </button>
            {
            toggle &&
            <ul className="dropdown-content">
                <li>
                    <img src={flagNigeria} />
                </li>
                <li>
                    <img src={flagBelgium} />
                </li>
                <li>
                    <img src={flagFrance} />
                </li>
                <li>
                    <img src={flagFinland} />
                </li>
                <li>
                    <img src={flagSwitzerland} />
                </li>
            </ul>
            }
        </div>
    )
}
export default Dropdown