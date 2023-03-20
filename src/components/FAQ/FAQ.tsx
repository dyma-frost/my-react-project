import React, { useState } from 'react'
import faqArray from 'utils/faqArray'

import './FAQ.scss'

type Item = {
    question: string
    answer: string
}

type MyFaq = {
    items: Item[]
}

type ExpandedState = {
    [id: number]: boolean
}

const FAQ = ({ items }: MyFaq) => {
    const [expanded, setExpanded] = useState<ExpandedState>({})

    const toggleExpanded = (id: number) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    return (
        <>
            <div className="faq">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="title-wrapper">
                        {faqArray.map((item, id) => (
                            <div className="ask-wrapper" key={item.id}>
                                <div
                                    className="question"
                                    onClick={() => toggleExpanded(id)}
                                >
                                    <i
                                        className={
                                            expanded[id]
                                                ? 'fa fa-minus-circle show'
                                                : 'fa fa-plus-circle'
                                        }
                                        style={{ color: '#204289' }}
                                    ></i>
                                    {item.question}
                                    {expanded[id] ? '' : ''}
                                </div>
                                {expanded[id] && (
                                    <div className="answer">{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ
