import { BannerButton, AppointmentField, Brands, CheckCovidResult } from "../../components"
import { bannerImage, doctorAndVirus, coronavirus, doctorOne, doctorTwo, doctorThree, clock, mapPin, calendar, shield } from "../../assets"
import "./Banner.css"

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-portion-one">
          <div className="banner-content">
            <h3 className="banner-title">
              Get Vaccinated. Boost your Immune System
            </h3>
            <h1 className="banner-heading">
              COVID-19 Vaccination
              Got Easier With,
              <span> Vaccination.ng</span>
            </h1>
            <p className="banner-description">
              Vaccination.ng will help you find the nearest
              centre for vaccination, in all 36 states in Nigeria.
            </p>
            <div className="banner-buttons">
              <BannerButton content="Get Vaccine" />
              <BannerButton content="Help Center" />
            </div>
          </div>
          <div className="banner-image">
            <img src={bannerImage} alt="Bottle of Vaccine" />
            <div className="animated-image-left">
              <img src={doctorAndVirus} alt="Doctor examining coronavirus" />
            </div>
            <div className="animated-image-right">
              <img src={coronavirus} alt="coronavirus" />
            </div>
            <div className="specialists">
              <div className="specialists-images">
                <img src={doctorOne} alt="Specialist photo" />
                <img src={doctorTwo} alt="Specialist photo" />
                <img src={doctorThree} alt="Specialist photo" />
              </div>
              <div className="specialists-content">
                <span className="number">20+</span>
                <span className="text">Specialists</span>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-portion-two">
          <div className="schedule-title">
            <div className="schedule-title-image">
              <img src={clock} alt="" />
            </div>
            <div className="schedule-title-text">
              Schedule your Vaccination
            </div>
          </div>
          <div className="appointment-fields">
            <div className="appointment-fields-portion-one">
              <AppointmentField
                icon={mapPin}
                fieldName={"Location"}
                fieldValue={"Ikeja Lagos, Nigeria"}
              />
              <AppointmentField
                icon={calendar}
                fieldName={"Date"}
                fieldValue={"29 February, 2022"}
              />
            </div>
            <div className="appointment-fields-portion-two">
              <AppointmentField
                icon={shield}
                fieldName={"Vaccine Type"}
                fieldValue={"Moderna"}
              />
              <div className="appointment-submit-button">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Brands />
      <CheckCovidResult />
    </section>
  )
}
export default Banner