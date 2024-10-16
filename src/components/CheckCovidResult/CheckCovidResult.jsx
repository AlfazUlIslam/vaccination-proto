import "./CheckCovidResult.css"

const CheckCovidResult = () => {
  return (
    <div className="check-covid-result">
        <div className="check-covid-container">
            <h5 className="check-covid-title">
                Check your COVID-19 result on our Database
            </h5>
            <form className="check-covid-form">
                <input type="text" placeholder="Okeowo" />
                <input type="text" placeholder="NIK Number" />
                <button onClick={(e) => e.preventDefault()}>
                    Check
                </button>
            </form>
            <div className="covid-certificate-text">
                Need a certificate for your COVID-19 result? 
                Please click
                <a href="#"> here</a>
            </div>
        </div>
    </div>
  )
}
export default CheckCovidResult