import { Link } from 'react-router-dom'
import './About2.scss'

type Props = {}
const About2 = (props: Props) => {
    
    return (
        <>
            <div id="about-second">
                <div className="container">
                    <div className="left-side">
                        <div className="title">
                            <h3>
                                Ac amet in adipiscing in sed sit eget.
                                <br />
                                Aliquam suspendisse viverra varius lobortis elit
                                velit.
                            </h3>
                            <div className="list">
                                <ul>
                                    <li>
                                        Ac amet in adipiscing in sed sit eget.
                                        Aliquam suspendisse viverra varius
                                        lobortis elit velit.
                                    </li>
                                    <li>
                                        Augue tortor sociosqu habitasse luctus
                                        ad.
                                    </li>
                                    <li>
                                        Etiam tristique inceptos faucibus tortor
                                        ultricies venenatis
                                    </li>
                                    <li>
                                        Tempus faucibus massa a molestie iaculis
                                        tortor
                                    </li>
                                    <li>
                                        Purus hac finibus efficitur venenatis
                                        fusce si tristique
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Link to="/about">
                            <button
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth',
                                    })
                                }
                            >
                                Reed about me
                            </button>
                        </Link>
                    </div>
                    <div className="right-side">
                        <img
                            src="images/bedoctor-about-pic2.webp"
                            alt="Kim Granger"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default About2
