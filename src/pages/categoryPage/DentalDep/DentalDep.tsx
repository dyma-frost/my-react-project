import dentaldepArray from 'utils/CategoryArrays/dentaldepArray'
import DentalDepItem from './DentalDepItem'
import '../Style.scss'

type Props = {}

const DentalDep = (props: Props) => {
    window.scrollTo({
        top: 0,

    })

    return (
        <>
            <div className="blog-page">
                <div className="container">
                    <h1>
                        Our blog about{' '}
                        <span>{dentaldepArray[0].category}</span>
                    </h1>
                    {dentaldepArray.map(
                        ({ id, image, title, description, category }) => (
                            <DentalDepItem
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
export default DentalDep
