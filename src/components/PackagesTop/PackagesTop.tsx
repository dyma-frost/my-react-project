
import PricePlan from 'components/PricePlan/PricePlan'
import './PackagesTop.scss'

type Props = {}
const PackagesTop = (props: Props) => {
    return (
        <>
            <div className="packages-top">
                <div className="container">
                    <div className="title-wrapper">
                        <div className="left-side">
                            <h6>BEDOCTOR</h6>
                            <h1>Health Packages</h1>
                            <h5>
                                Vulputate fringilla in gravida hendrerit quis
                                sed ultrices. Risus in vestibulum turpis velit.
                                Varius id consequat consectetur odio elementum
                                elit enim elit.
                            </h5>
                        </div>
                        <div className="right-side">
                            <img
                                src="/images/bedoctor-packages-pic1.webp"
                                alt=""
                            />
                        </div>
                    </div>
                    <PricePlan />
                </div>
            </div>
        </>
    )
}
export default PackagesTop
