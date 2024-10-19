import "./FeedbackCard.css"

const FeedbackCard = ({image, alt, name, address, quote}) => {
  return (
    <div className="feedback-card group">
        <div className="feedback-card-header">
            <div className="feedback-card-image">
                <img src={image} alt={alt} />
            </div>
            <div className="feedback-card-info">
                <h4 className="feedback-card-name">{name}</h4>
                <h6 className="feedback-card-address">{address}</h6>
            </div>
        </div>
        {quote}
    </div>
  )
}
export default FeedbackCard