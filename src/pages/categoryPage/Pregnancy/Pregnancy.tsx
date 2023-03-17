import pregnancyArray from "utils/CategoryArrays/pregnancyArray"
import PregnancyItem from "./PregnancyItem"
import '../Style.scss'


type Props = {}
const Pregnancy = (props: Props) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
    return (
        <>
            <div className="blog-page">
                <div className="container">
                    <h1>
                        Our blog about <span>{pregnancyArray[0].category}</span>
                    </h1>
                    {pregnancyArray.map(
                        ({ id, image, title, description, category }) => (
                            <PregnancyItem
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
export default Pregnancy
