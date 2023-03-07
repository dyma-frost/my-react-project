import './MainPage5.scss'

type Props = {}
const MainPage5 = (props: Props) => {
    return (
        <>
            <div className="fifth-block">
                <div className="container">
                    <div className="left-side"></div>
                    <div className="right-side">
                        <div className="top-side">
                            <div className="logo"></div>
                            <h3 className="title">
                                Visit our new facility. <br /> We're looking
                                forward to <br />
                                seeing you!
                            </h3>
                        </div>
                        <div className="bottom-side">
                            <h5 className="text-fragment">
                                Level 13, 2 Elizabeth St, Melbourne, Victoria
                                3000, Australia
                            </h5>
                            <button>Book an appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainPage5
