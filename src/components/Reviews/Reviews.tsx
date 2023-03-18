import { useState } from 'react'
import './Reviews.scss'

type Props = {}

type Review = {
    name: string
    text: string
    date: string
}
const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Jane Doe',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et quis consequuntur eum doloribus, necessitatibus a nisi saepe sit facilis harum cupiditate natus ratione distinctio ducimus. Molestiae odio eius expedita. Perspiciatis tenetur enim iusto possimus similique reiciendis accusantium asperiores quaerat corrupti. Neque enim officia aspernatur repellendus? Nostrum necessitatibus quaerat saepe quo iste perferendis, cupiditate voluptas aliquam? Unde corrupti fugit est. Necessitatibus illo obcaecati unde tempora deleniti sed placeat, quia cupiditate odio fugiat sint impedit maxime vitae repellendus corporis, rerum dignissimos maiores reprehenderit molestiae eveniet cumque inventore! Obcaecati similique nulla consequuntur?',
            date: '18 August 2021',
        },
        {
            name: 'John Doe',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi assumenda, blanditiis labore, molestiae odio fugit sed voluptate dolorum placeat ipsa exercitationem temporibus porro architecto deserunt magni quibusdam cumque! Provident, laboriosam!',
            date: '24 February 2022',
        },
    ]
    const date =
        new Date().toLocaleString('en-US', { day: '2-digit' }) +
        ' ' +
        new Date().toLocaleString('en-US', { month: 'long' }) +
        ' ' +
        new Date().getFullYear()

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
        date: `${date}`
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('Please fill all fields.')
        } else {
            setNewReview({
                name: '',
                text: '',
                date: `${date}`,
            })

            setReviews((prevState) => {
                return [...prevState, newReview]
            })
        }
    }
    return (
        <>
            <div className="reviews-wrap">
                <div className="container">
            <h3>Reviews about us</h3>
                    {reviews.map((item, i) => (
                        <div className="review">
                            <div className='review-name'>{item.name}</div>
                            <h6>{item.date}</h6>
                            <div style={{wordBreak: "break-word", wordWrap: "break-word", overflowWrap: "break-word"}}>{item.text}</div>
                        </div>
                    ))}
                    <form onSubmit={onSend}>
                        <h3>Leave a review</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full name"
                            onChange={handleName}
                        ></input>
                        <textarea
                            placeholder="Your message..."
                            onChange={handleText}
                        ></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Reviews
