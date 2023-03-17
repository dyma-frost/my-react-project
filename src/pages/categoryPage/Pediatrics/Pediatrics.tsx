import pediatricsArray from "utils/CategoryArrays/pediatricsArray"

import '../Style.scss'
import PediatricsItem from "./PediatricsItem"

type Props = {}
const Pediatrics = (props: Props) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
    return (
        <>
            <div className="blog-page">
                <div className="container">
                    <h1>
                        Our blog about{' '}
                        <span>{pediatricsArray[0].category}</span>
                    </h1>
                    {pediatricsArray.map(
                        ({ id, image, title, description, category }) => (
                            <PediatricsItem
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
export default Pediatrics
