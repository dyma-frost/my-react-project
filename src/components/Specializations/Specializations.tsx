import SimpleSlider from 'components/SimpleSlider/SimpleSlider'
import './Specializations.scss'

type Props = {}
const Specializations = (props: Props) => {
    return (
        <>
            <div className="third-block">
                <div className="container">
                    <div className="text-fragment">
                        <h6>OUR SERVICES</h6>
                        <h2>Our specializations</h2>
                        <p>
                            Posuere at arcu, felis iaculis tortor mattis id.
                            <br />
                            Eu at in posuere elit. Feugiat at faucibus risus
                            commodo odio.
                        </p>
                    </div>
                    <SimpleSlider />
                </div>
            </div>
        </>
    )
}
export default Specializations
