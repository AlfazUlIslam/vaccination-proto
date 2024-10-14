import "./AppointmentField.css"

const AppointmentField = ({icon, fieldName, fieldValue}) => {
  return (
    <div className="appointment-field">
        <div className="appointment-field-icon">
            <img src={icon} />
        </div>
        <div className="appointment-field-content">
            <div className="appointment-field-name">
                {fieldName}
            </div>
            <div className="appointment-field-value">
                {fieldValue}
            </div>
        </div>
    </div>
  )
}
export default AppointmentField