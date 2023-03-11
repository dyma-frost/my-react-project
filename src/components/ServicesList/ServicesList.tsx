import './ServicesList.scss'
import articleArray from 'utils/articleArray'
import { Link } from 'react-router-dom'

type Props = {}
const ServicesList = (props: Props) => {
    return (
        <>
            {articleArray.map((card) => (
                <div className="card-container">
                    <div className="card" key={card.id}>
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
                                    <Link to={card.category}>
                                        <button>Read more</button>
                                    </Link>

                                    {/* <span>
                                        or call us:
                                        <a href="tel: +38 (000) 000 00 00">
                                            +38 (000) 000 00 00
                                        </a>
                                    </span> */}
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
