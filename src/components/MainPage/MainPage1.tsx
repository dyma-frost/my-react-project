import './MainPage1.scss'

type Props = {}
const MainPage1 = (props: Props) => {
    return (
        <>
            <div className="first-block">
                <div className="container">
                    <div className="left-side">
                        <div className="left-side-text">
                            <h6>BEDOCTOR</h6>
                            <h1>
                                Hi, I'm <span>Kim Granger</span> and I'll be
                                your family doctor!
                            </h1>
                            <div className="btns-block">
                                <button className="blue-btn">
                                    Book an appointment
                                </button>
                                <button className="white-btn">
                                    My experience
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right-side"></div>
                </div>
            </div>
        </>
    )
}
export default MainPage1
