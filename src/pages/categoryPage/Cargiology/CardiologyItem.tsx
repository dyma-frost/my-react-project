import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import { addLike, removeLike } from "redux/likeReducer"

type Props = {
    id: number
    image: string
    title: string
    description: string
    category: string
}
const CardiologyItem = ({ id, image, title, description, category }: Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()
    return (
        <>
            <div key={id} className="card-wrapper">
                <div className="image">
                    <img src={image} alt={image} />
                    <button
                        className="like-button"
                        onClick={() =>
                            isLiked
                                ? dispatch(removeLike(id))
                                : dispatch(addLike(id))
                        }
                    >
                        <i
                            className={
                                isLiked ? 'fa fa-heart active' : 'fa fa-heart'
                            }
                        ></i>
                    </button>
                </div>
                <div className="title-wrapper">
                    <div className="category">
                        <Link to={`/services/${category}`}>
                            <button>
                                <p>{category}</p>
                            </button>
                        </Link>
                    </div>
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                    <div className="description">
                        <h5>{description}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardiologyItem
