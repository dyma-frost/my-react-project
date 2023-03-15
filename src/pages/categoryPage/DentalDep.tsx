import dentaldepArray from "utils/CategoryArrays/dentaldepArray"
import './Style.scss'

type Props = {}
const DentalDep = (props: Props) => {
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
                        <span>{dentaldepArray[0].category}</span>
                    </h1>
                    {dentaldepArray.map((item) => (
                        <div key={item.id} className="card-wrapper">
                            <div className="image">
                                <img src={item.image} alt={item.image} />
                                <button className="like-button"></button>
                            </div>
                            <div className="title-wrapper">
                                <div className="category">
                                    <p>{item.category}</p>
                                </div>
                                <div className="title">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="description">
                                    <h5>{item.description}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default DentalDep
