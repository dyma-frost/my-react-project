import './About1.scss'

type Props = {}
const About1 = (props: Props) => {
    const handleClickScroll = () => {
        const element = document.getElementById('about-second')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="title-wrapper">
                        <img
                            src="/images/bedoctor-about-pic1.webp"
                            alt="Kim Granger"
                        />
                        <h1>
                            I'm <span>Kim Granger</span>
                        </h1>
                        <h5>
                            Vulputate fringilla in gravida hendrerit quis sed
                            ultrices. Risus in vestibulum turpis velit. Varius
                            id consequat consectetur odio elementum elit enim.
                        </h5>
                        <button onClick={handleClickScroll}>
                            My experience<span>00</span>
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
                    <div className="card-wrapper">
                        <div className="card-1">
                            <div className="icon-box">
                                <div className="logo">
                                    <img
                                        src="/images/bedoctor-about-icon-card-1.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="description">
                                    <h5>Dental Department</h5>
                                    <h6>
                                        Nascetur justo sagittis ultricies
                                        sociosqu
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="card-2">
                            <div className="icon-box">
                                <div className="logo">
                                    <img
                                        src="/images/bedoctor-about-icon-card-2.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="description">
                                    <h5>Cardiology</h5>
                                    <h6>
                                        Efficitur curae libero vulputate
                                        facilisis
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="card-3">
                            <div className="icon-box">
                                <div className="logo">
                                    <img
                                        src="/images/bedoctor-about-icon-card-3.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="description">
                                    <h5>Emergency care</h5>
                                    <h6>
                                        Praesent vel potenti non nostra erater
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="card-4">
                            <div className="icon-box">
                                <div className="logo">
                                    <img
                                        src="/images/bedoctor-about-icon-card-4.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="description">
                                    <h5>Pediatrics</h5>
                                    <h6>
                                        Class mollis volutpat dui commodo auctor
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About1
