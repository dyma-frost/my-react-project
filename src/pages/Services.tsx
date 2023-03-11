import ServicesList from 'components/ServicesList/ServicesList'
import ChooseMe from 'components/ChooseMe/ChooseMe'
import Appointment from 'components/Appointment/Appointment'
import ContactMe from 'components/ContactMe/ContactMe'

import './Services.scss'

type Props = {}
const Services = (props: Props) => {
    window.scrollTo({
        top: 0,
        // behavior: 'smooth',
    })
    return (
        <>
            <div className="services">
                <div className="container">
                    <div className="title-wrapper">
                        <div className="title">
                            <h6>BEDOCTOR</h6>
                            <h1>Services</h1>
                            <h5>
                                Vulputate fringilla in gravida hendrerit quis
                                sed ultrices. Risus in vestibulum turpis velit.
                                Varius id consequat consectetur odio elementum
                                elit enim.
                            </h5>
                            <button
                                onClick={() =>
                                    window.scrollTo({
                                        top: 600,
                                        left: 0,
                                        behavior: 'smooth',
                                    })
                                }
                            >
                                Services<span>OO</span>
                                <i
                                    className="fa fa-chevron-down"
                                    style={{
                                        color: '#2b6cf5',
                                        fontSize: '13px',
                                        verticalAlign: 'top',
                                    }}
                                ></i>
                            </button>
                        </div>
                    </div>
                    <ServicesList />
                </div>
            </div>
            <ChooseMe />
            <Appointment />
            <ContactMe />
        </>
    )
}
export default Services
