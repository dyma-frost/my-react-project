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
                {articleArray.map((item) => (
                    <div className="card">
                        <div className="card-top">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="card-bottom">
                            <h3>{item.title}</h3>
                            <h6>{item.description}</h6>
                        <button>See more</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}
export default SimpleSlider
