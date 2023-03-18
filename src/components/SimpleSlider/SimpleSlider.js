// import articleArray from 'utils/articleArray'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import postsArray from 'utils/postsArray'

const SimpleSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    return (
        <>
            <Slider {...settings}>
                {postsArray.map(
                    ({ id, image, title, description, category }) => (
                        <div className="card" key={id}>
                            <div className="card-top">
                                <img src={image} alt={title} />
                            </div>
                            <Link to={`/services/${id}`}>
                                <div className="card-bottom">
                                    <h3>{title}</h3>
                                    {/* <h6>{description}</h6> */}
                                    <Link to={`/services/${category}`}>
                                        <button>
                                            See more about{' '}
                                            <span>{category}</span>
                                        </button>
                                    </Link>
                                </div>
                            </Link>
                        </div>
                    )
                )}
            </Slider>
        </>
    )
}
export default SimpleSlider
