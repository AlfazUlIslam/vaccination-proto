import { FeedbackCard } from "../../components"
import { personOne, personTwo, personThree, paperPlane } from "../../assets"
import "./Feedback.css"

const Feedback = () => {
    const cardsData = [
        {
            image: personOne,
            alt: "Person One",
            name: "Oyindamola Maja",
            address: "Badagry, Lagos",
            quote: <div className="feedback-card-quote">
                        “Been stressing about a close centre
                        to get the <span className='text-darkTurquoise'>
                        covid-19</span> vaccine, until
                        i tried Vaccination.ng”
                    </div>
        },
        {
            image: personTwo,
            alt: "Person Two",
            name: "Okeowo Lekan",
            address: "Ikeja, Lagos",
            quote: <div className="feedback-card-quote">
                        “Got my vaccine very close to my house.
                        Was very easy scheduling
                        an appointment.”
                    </div>
        },
        {
            image: personThree,
            alt: "Person Three",
            name: "Kafaru Temitope",
            address: "Obanikoro, Lagos",
            quote: <div className="feedback-card-quote">
                        “Been stressing about a close centre
                        to get the <span className='text-darkTurquoise'>
                        covid-19</span> vaccine, until i tried Vaccination.ng”
                    </div>
            
        },
    ]
  return (
    <section id="feedback" className="feedback">
        <div className="feedback-container">
            <div className="feedback-content">
                <h4 className="feedback-title">FEEDBACK</h4>
                <h2 className="feedback-heading">What Our Patients Think</h2>
                <p className="feedback-description">
                    Adipiscing nec etiam tortor elit quisque. 
                    Arcu aliquet convallis aenean eu velit.
                    Mi vestibulum, ullamcorper venenatis
                    imperdiet augue arcu ue.
                </p>
            </div>
            <div className="feedback-cards">
                {cardsData.map((cardData, index) => (
                    <FeedbackCard 
                        key={index}
                        image={cardData.image} 
                        alt={cardData.alt}
                        name={cardData.name}
                        address={cardData.address}
                        quote={cardData.quote}
                    />
                ))}
            </div>
            <div className="feedback-newsletter-container">
                <div className="feedback-newsletter">
                    <h3 className="feedback-newsletter-title">
                        Get a quote
                    </h3>
                    <p className="feedback-newsletter-description">
                        Please do enter your email address below
                    </p>
                    <form className="feedback-newsletter-form">
                        <input 
                            type="text" 
                            className="feedback-newsletter-input" 
                            placeholder="lenux.ng@gmail.com"
                        />
                        <button 
                            className="feedback-newsletter-button"
                            onClick={(e) => e.preventDefault()}
                        >
                            <img src={paperPlane} alt="Paper Plane" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Feedback