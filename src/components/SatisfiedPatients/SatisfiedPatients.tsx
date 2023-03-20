import './SatisfiedPatients.scss'

type Props = {}
const SatisfiedPatients = (props: Props) => {
    return (
        <>
            <div className="seventh-block">
                <div className="container">
                    <div className="left-side">
                        <div className="image"></div>
                        <div className="title">
                            <h2>Satisfied patients</h2>
                            <h6>
                                Ac amet in adipiscing in sed sit eget. Aliquam
                                suspendisse viverra varius lobortis elit velit.
                                Sit vitae a enim mi vitae accumsan. Quam in
                                auctor sed libero lacus. Varius adipiscing ac,
                                commodo, tincidunt.
                            </h6>
                            <p>
                                <span>Kristin Watson</span>
                                <br />
                                Jun 27, 2020
                            </p>
                        </div>
                    </div>
                    <div className="right-side">
                        <img src="images/bedoctor-packages-pic2.webp" alt="" />
                        <div className="sticker">
                            <div className="logo">
                                <i className="logo-star"></i>
                            </div>
                            <div className="description">
                                <h4 className="title">4.9</h4>
                                <div className="desc">
                                    Opinions made by our patients
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SatisfiedPatients
