import './ServicesList.scss'
import articleArray from 'utils/articleArray'
import { Link } from 'react-router-dom'

type Props = {}
const ServicesList = (props: Props) => {
    return (
        <>
            {articleArray.map((card) => (
                <div
                    className="card-container"
                    key={card.id}
                    id={card.category}
                >
                    <div className="card">
                        <div className="left-side">
                            <div className="left-side-container">
                                <h3>{card.title}</h3>

                                <ul>
                                    <li>{card.desc1}</li>
                                    <li>{card.desc2}</li>
                                    <li>{card.desc3}</li>
                                </ul>
                                <hr />
                                <div className="buttons-block">
                                    <Link to={`/services/${card.category}`}>
                                        <button>Read more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="right-side">
                            <img src={card.image} alt={card.title} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ServicesList
