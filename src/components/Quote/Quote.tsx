import './Quote.scss'

type Props = {}
const Quote = (props: Props) => {
    return (
        <>
            <div className="second-block">
                <div className="container">
                    <div className="left-side">
                        <img src="/images/bedoctor-home-pic2.webp" alt="" />
                    </div>
                    <div className="right-side">
                        <div className="icon"></div>
                        <div className="title">
                            <h4>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aperiam eum nihil sint soluta
                                architecto? Saepe quam deleniti mollitia, id
                                quia impedit possimus excepturi, voluptatibus
                                dolores fugit beatae autem deserunt optio.
                                Dolor, explicabo doloribus? Tempore fugiat ex
                                fugit aliquam vero quidem alias possimus
                                adipisci dolorem aliquid? Cum, earum
                                repudiandae, neque minus magnam nulla eveniet
                                quas consectetur provident nobis assumenda nam.
                                Perspiciatis.
                            </h4>
                        </div>
                        <div className="signature">Kim Granger</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Quote
