import './HealthPlan.scss'

type Props = {}
const HealthPlan = (props: Props) => {
    return (
        <>
            <div className="sixth-block">
                <div className="container">
                    <div className="text-fragment">
                        <h6>PRICING</h6>
                        <h2>Choose your health plan</h2>
                        <p>
                            Posuere at arcu, felis iaculis tortor mattis id. Eu
                            at in posuere elit. Feugiat at faucibus risus
                            commodo odio.
                        </p>
                    </div>
                    <div className="price-cards">
                        <div className="card1">
                            <div className="top-side">
                                <div className="logo"></div>
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
                                <button>Choose</button>
                            </div>
                        </div>
                        <div className="card2">
                            <div className="top-side">
                                <div className="logo"></div>
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
                                <button>Choose</button>
                            </div>
                        </div>
                        <div className="card3">
                            <div className="top-side">
                                <div className="logo"></div>
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
                                <button>Choose</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HealthPlan
