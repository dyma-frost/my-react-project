import Reviews from "components/Reviews/Reviews"
import { Link, useParams } from "react-router-dom"
import postsArray, { getPostsObject, Posts } from "utils/postsArray"

import './ArticlePage.scss'

type Props = {
    postsObject?: {
        [id: number]: Posts
    }

}


const ArticlePage = ({postsObject = getPostsObject(postsArray)}: Props) => {
    const { id } = useParams()
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
    return (
        <>
            <div className="article-page">
                <div className="container">
                    <div key={id} className="card-wrapper">
                        <div className="image">
                            <img
                                src={postsObject[parseInt(id!)].image}
                                alt={postsObject[parseInt(id!)].image}
                            />
                        </div>
                        <div className="title-wrapper">
                            <div className="category">
                                <Link
                                    to={`/services/${
                                        postsObject[parseInt(id!)].category
                                    }`}
                                >
                                    <button>
                                        <p>
                                            {
                                                postsObject[parseInt(id!)]
                                                    .category
                                            }
                                        </p>
                                    </button>
                                </Link>
                            </div>
                            <div className="title">
                                <h3>{postsObject[parseInt(id!)].title}</h3>
                            </div>
                            <div className="description">
                                <h5>
                                    {postsObject[parseInt(id!)].description}
                                </h5>
                            </div>
                            <div className="full-desc">
                                <h4>
                                    <span>1.</span> Lorem ipsum dolor sit amet.
                                </h4>
                                <h6>{postsObject[parseInt(id!)].fullDesc1}</h6>
                            </div>
                            <div className="full-desc">
                                <h4>
                                    <span>2.</span> Lorem ipsum dolor sit amet?
                                </h4>
                                <h6>{postsObject[parseInt(id!)].fullDesc2}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Reviews/>
        </>
    )
}
export default ArticlePage
