import { Link } from 'react-router-dom'
import './ContactMe.scss'

type Props = {}

const ContactMe = (props: Props) => {
    return (
        <>
            <div className="contact-me">
                <div className="container">
                    <div className="logo"></div>
                    <div className="contact-block">
                        <div className="left-side">
                            <h5>
                                Level 13, 2 Elizabeth St, Melbourne, Victoria
                                3000, Australia
                            </h5>
                            <p>Opening hours: Mon - Sat: 9 AM - 6 PM</p>
                            <div className="links">
                                <button>
                                    <Link to="/packages">
                                        <i className="fa fa-facebook"></i>
                                    </Link>
                                </button>
                                <button>
                                    <Link to="/packages">
                                        <i className="fa fa-instagram"></i>
                                    </Link>
                                </button>
                                <button>
                                    <Link to="/packages">
                                        <i className="fa fa-pinterest-p"></i>
                                    </Link>
                                </button>
                            </div>
                        </div>

                        <div className="mid-side">
                            <h5>Contact me</h5>
                            <a href="tel: +38 (000) 000 00 00">
                                +38 (000) 000 00 00
                            </a>
                            <button>Contact us</button>
                        </div>
                        <div className="right-side">
                            <h5>Useful links</h5>
                            <ul>
                                <li>
                                    <Link to="/contact">Contact with us</Link>
                                </li>
                                <li>
                                    <Link to="/about">Who we are?</Link>
                                </li>
                                <li>
                                    <Link to="/about">Safety data sheets</Link>
                                </li>
                                <li>
                                    <Link to="/about">Job application</Link>
                                </li>
                                <li>
                                    <Link to="/about">Privacy policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}
export default ContactMe
