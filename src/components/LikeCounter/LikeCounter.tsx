import { Link } from 'react-router-dom'
import { store } from 'redux/store'
import './LikeCounter.scss'

type Props = {}

const LikeCounter = (props: Props) => {
    const myState = store.getState().likeState
    const trueValues = Object.values(myState).filter(
        (item: boolean) => item === true
    )
    const trueValuesCount = trueValues.length

    return (
        <>
            <div className="like-counter">
                <Link to="/favorites">
                    <i className="fa fa-heart">
                        <span> {trueValuesCount}</span>
                    </i>
                </Link>
            </div>
        </>
    )
}
export default LikeCounter
