import faqArray from 'utils/faqArray'
import './FAQ.scss'

type Props = {}
const FAQ = (props: Props) => {
    return (
        <>
            <div className="faq">
                <div className="continer">
                    {faqArray.map((item) => (
                        <div className="title-wrapper" key={item.id}>
                            <div className="question">{item.question}</div>
                            <div className="answer">{item.answer}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default FAQ
