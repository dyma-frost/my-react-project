
import xrayArray from "utils/CategoryArrays/xrayArray"
import '../Style.scss'
import XRayItem from "./XRayItem"


type Props = {}
const XRay = (props: Props) => {
    window.scrollTo({
        top: 0,

    })
    return (
        <>
            <div className="blog-page">
                <div className="container">
                    <h1>
                        Our blog about <span>{xrayArray[0].category}</span>
                    </h1>
                    {xrayArray.map(
                        ({ id, image, title, description, category }) => (
                            <XRayItem
                                id={id}
                                image={image}
                                title={title}
                                description={description}
                                category={category}
                            />
                        )
                    )}
                </div>
            </div>
        </>
    )
}
export default XRay
