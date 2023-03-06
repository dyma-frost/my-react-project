import './MainPage4.scss'

type Props = {}
const MainPage4 = (props: Props) => {
    return (
        <>
            <div className="fourth-block">
                <div className="container">
                    <div className="content">
                        <div className="top-side">
                            <h2>
                                Why you should <br />
                                choose me?
                            </h2>
                            <button>My experience</button>
                        </div>
                        <div className="bottom-side">
                            <h5 className="description-1">
                                <p>01</p>
                                Posuere viverra felis cursus{/* <br/> */} porta.
                                Lacus, egestas elit sed faucibus id nisl
                                scelerisque.
                            </h5>

                            <h5 className="description-2">
                                <p>02</p>
                                In lacus eu vestibulum pretium blandit facilisis
                                elit dictum nec sollicitudin. Cras lectus magnis
                            </h5>

                            <h5 className="description-3">
                                <p>03</p>
                                Montes mattis donec pellentes imperdiet integer.
                                Litora nullam Hac volutpat egestas duis.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainPage4
