import './ContactForm.scss'

type Props = {}
const ContactForm = (props: Props) => {
    return (
        <>
            <div className="contact-form">
                
                <div className="container-form">
                    <div className="title-wrapper">
                        <h6>CONTACT FORM</h6>
                        <h3>
                            Fill the form to
                            <br />
                            <span>contact us directly</span>
                        </h3>
                    </div>
                    <div className="form-wrapper">
                        <form action="">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full name"
                            ></input>
                            <input
                                type="phone"
                                name="phone"
                                placeholder="Phone"
                            ></input>
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail address"
                            ></input>
                            <textarea placeholder="Your message..."></textarea>
                        </form>
                    </div>
                    <button type="submit">Send a message</button>
                </div>
            </div>
        </>
    )
}
export default ContactForm
