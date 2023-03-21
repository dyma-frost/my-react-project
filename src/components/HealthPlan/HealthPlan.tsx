import PricePlan from 'components/PricePlan/PricePlan'
import './HealthPlan.scss'

type Props = {}
const HealthPlan = (props: Props) => {
    return (
        <>
            <div className="sixth-block">
                <div className="container">
                    <div className="text-fragment">
                        <h6>PRICING</h6>
                        <h2>Choose your health plan</h2>
                        <p>
                            Posuere at arcu, felis iaculis tortor mattis id. Eu
                            at in posuere elit. Feugiat at faucibus risus
                            commodo odio.
                        </p>
                    </div>
                    <PricePlan />
                </div>
            </div>
        </>
    )
}
export default HealthPlan
