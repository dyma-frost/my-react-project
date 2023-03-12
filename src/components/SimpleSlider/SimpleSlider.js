import articleArray from 'utils/articleArray'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const SimpleSlider = () => {
    const settings = {
        dots: false,
        // infinite: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    return (
        <>
            <Slider {...settings}>
                {articleArray.map((card) => (
                    <div className="card" key={card.id}>
                        <div className="card-top">
                            <img src={card.image} alt={card.title} />
                        </div>
                        <div className="card-bottom">
                            <h3>{card.title}</h3>
                            <h6>{card.description}</h6>
                            <Link to="/services">
                                <button>See more</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}
export default SimpleSlider
