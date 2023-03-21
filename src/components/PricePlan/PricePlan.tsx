import { Link } from 'react-router-dom'
import './PricePlan.scss'

type Props = {}
const PricePlan = (props: Props) => {
    return (
        <>
            <div className="price-cards">
                <div className="card1">
                    <div className="top-side">
                        <div className="logo">
                            <img
                                src="images/bedoctor-pricing-icon1.svg"
                                alt="bedoctor-pricing-icon1"
                            />
                        </div>
                        <div className="price">
                            <sup>$</sup>
                            <span>39</span>
                            <sup>mo</sup>
                        </div>
                    </div>
                    <div className="bottom-side">
                        <div className="description">
                            <p>Consultation with doctor</p>
                            <p>Laboratory and diagnostic tests</p>
                            <p>Two home visits a year</p>
                        </div>
                        <Link to="/packages">
                            <button>Choose</button>
                        </Link>
                    </div>
                </div>
                <div className="card2">
                    <div className="top-side">
                        <div className="logo">
                            <img
                                src="images/bedoctor-pricing-icon1.svg"
                                alt="bedoctor-pricing-icon1"
                            />
                        </div>
                        <div className="price">
                            <sup>$</sup>
                            <span>59</span>
                            <sup>mo</sup>
                        </div>
                    </div>
                    <div className="bottom-side">
                        <div className="description">
                            <p>ALL from BASIC +</p>
                            <p>Day and night emergency care</p>
                            <p>Two more home visits a year</p>
                        </div>
                        <Link to="/packages">
                            <button>Choose</button>
                        </Link>
                    </div>
                </div>
                <div className="card3">
                    <div className="top-side">
                        <div className="logo">
                            <img
                                src="images/bedoctor-pricing-icon1.svg"
                                alt="bedoctor-pricing-icon1"
                            />
                        </div>
                        <div className="price">
                            <sup>$</sup>
                            <span>99</span>
                            <sup>mo</sup>
                        </div>
                    </div>
                    <div className="bottom-side">
                        <div className="description">
                            <p>All from COMFORT +</p>
                            <p>Rehabilitation after injury</p>
                            <p>Four more home visits a year</p>
                        </div>
                        <Link to="/packages">
                            <button>Choose</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PricePlan
