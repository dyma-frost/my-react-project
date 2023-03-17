import { useAppSelector } from 'redux/hooks'
import postsArray, { Posts } from 'utils/postsArray'
import LikedItem from './LikedItem'

type Props = {}

const Liked = (props: Props) => {
    const productsLikeState = useAppSelector((state) => state.productsLikeState)
    const likedPosts = postsArray.filter(
        ({ id }: Posts) => productsLikeState[id]
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
