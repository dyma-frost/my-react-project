import eartreatmentArray from 'utils/CategoryArrays/eartreatmentArray'
import EarTreatmentItem from './EarTreatmentItem'
import '../Style.scss'

type Props = {}
const EarTreatment = (props: Props) => {
    window.scrollTo({
        top: 0,
    })
    return (
        <>
            <div className="blog-page">
                <div className="container">
                    <h1>
                        Our blog about{' '}
                        <span>{eartreatmentArray[0].category}</span>
                    </h1>
                    {eartreatmentArray.map(
                        ({ id, image, title, description, category }) => (
                            <EarTreatmentItem
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
export default EarTreatment
