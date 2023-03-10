import articleArray from 'utils/articleArray'
import Slider from 'react-slick'





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
                        <button>See more</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}
export default SimpleSlider
