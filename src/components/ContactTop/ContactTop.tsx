import ContactForm from 'components/ContactForm/ContactForm'
import MailWithIcon from 'components/MailWithIcon/MailWithIcon'
import PhoneWithIcon from 'components/PhoneWithIcon/PhoneWithIcon'
import './ContactTop.scss'

type Props = {}
const ContactTop = (props: Props) => {
    return (
        <>
            <div className="contact-top">
                <div className="container">
                    <div className="title-wrapper">
                        <h1>Contact</h1>
                    </div>
                    <div className="sides-wrapper">
                        <div className="left-side">
                            <div className="top-side">
                                <h6>address</h6>
                                <h4>
                                    Level 13, 2 Elizabeth St, Melbourne,
                                    Victoria 3000, Australia83 766 284
                                </h4>
                                <p>Opening hours: Mon - Sat: 9 AM - 6 PM</p>
                            </div>
                            <div className="bottom-side">
                                <PhoneWithIcon />
                                <MailWithIcon />
                            </div>
                        </div>
                        <div className="right-side">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactTop
