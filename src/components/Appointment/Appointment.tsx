import { Link } from 'react-router-dom'
import './Appointment.scss'

type Props = {}
const Appointment = (props: Props) => {
    return (
        <>
            <div className="eighth-block">
                <div className="container">
                    <div className="central-side">
                        <div className="logo"></div>
                        <h3 className="title">
                            Don't wait and make an appointment today
                        </h3>
                        <Link to="/contact">
                            <button>Book an appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Appointment
