import cardiologyArray from 'utils/CategoryArrays/cardiologyArray'
import CardiologyItem from './CardiologyItem'
import '../Style.scss'


type Props = {}
const Cardiology = (props: Props) => {
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
                        <span>{cardiologyArray[0].category}</span>
                    </h1>
                    {cardiologyArray.map(
                        ({ id, image, title, description, category }) => (
                            <CardiologyItem
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
export default Cardiology
