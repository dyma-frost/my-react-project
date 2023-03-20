import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import postsArray, { Posts } from 'utils/postsArray'
import './LikeCounter.scss'

type Props = {}

const LikeCounter = (props: Props) => {
    const LikeState = useAppSelector((state) => state.likeState)
    const likedPostsCount = postsArray.filter(({ id }: Posts) => LikeState[id])

    return (
        <>
            <div className="like-counter">
                <Link to="/favorites">
                    <i className="fa fa-heart">
                        <span> {likedPostsCount.length}</span>
                    </i>
                </Link>
            </div>
        </>
    )
}
export default LikeCounter
