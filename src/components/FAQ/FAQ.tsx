import { useState } from 'react'
import faqArray from 'utils/faqArray'
import './FAQ.scss'

type Props = {}

const FAQ = (props: Props) => {
    const [isActive, setActive] = useState(false)

    const toggleClass = (id: number) => {
        setActive((id) => !isActive)
        console.log(id)
        console.log(isActive)
    }

    return (
        <>
            <div className="faq">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="title-wrapper">
                        {faqArray.map((item) => (
                            <div className="ask-wrapper" key={item.id}>
                                <div
                                    className="question"
                                    onClick={() => toggleClass(item.id)}
                                >
                                    <i
                                        className="fa fa-plus-circle"
                                        style={{ color: '#204289' }}
                                    ></i>
                                    <i
                                        className={
                                            isActive
                                                ? 'fa fa-minus-circle show'
                                                : 'fa'
                                        }
                                        style={{ color: '#204289' }}
                                    ></i>
                                    {item.question}
                                </div>
                                <div
                                    className={
                                        isActive ? 'show answer' : 'answer'
                                    }
                                >
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default FAQ
