import { useAppSelector } from 'redux/hooks'
import postsArray, { Posts } from 'utils/postsArray'
import LikedItem from './LikedItem'

type Props = {}

const Liked = (props: Props) => {
    const likeState = useAppSelector((state) => state.likeState)
    const likedPosts = postsArray.filter(
        ({ id }: Posts) => likeState[id]
    )
    return (
        <>
            <div className="blog-page">
                <div className="container">
                    <h1>
                        Favorites posts
                    </h1>
                    {likedPosts.map(
                        ({
                            id,
                            image,
                            title,
                            description,
                            category,
                        }: Posts) => (
                            <LikedItem
                                id={id}
                                image={image}
                                title={title}
                                description={description}
                                category={category}
                            />
                        )
                    )}
                </div>
            </div>
        </>
    )
}
export default Liked
