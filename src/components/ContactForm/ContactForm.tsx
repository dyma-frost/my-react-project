import { useState } from 'react'
import './ContactForm.scss'

type Props = {}

type Contact = {
    name: string
    phone: string
    email: string
    message: string
}

const ContactForm = (props: Props) => {
    const [newContact, setNewContact] = useState<Contact>({
        name: '',
        phone: '',
        email: '',
        message: '',
    })
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewContact((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewContact((prevState) => ({
            ...prevState,
            phone: e.target.value,
        }))
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewContact((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewContact((prevState) => ({
            ...prevState,
            message: e.target.value,
        }))
    }
    const contactSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newContact.name === '' || newContact.phone === '') {
            alert('Please fill all fields.')
        } else {
            setNewContact({
                name: '',
                phone: '',
                email: '',
                message: '',
            })
        }
    }

    return (
        <>
            <div className="contact-form">
                <div className="container-form">
                    <div className="title-wrapper">
                        <h6>CONTACT FORM</h6>
                        <h3>
                            Fill the form to
                            <br />
                            <span>contact us directly</span>
                        </h3>
                    </div>
                    <div className="form-wrapper">
                        <form onSubmit={contactSend}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full name"
                                value={newContact.name}
                                onChange={handleName}
                            ></input>
                            <input
                                type="phone"
                                name="phone"
                                placeholder="Phone"
                                value={newContact.phone}
                                onChange={handlePhone}
                            ></input>
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail address"
                                value={newContact.email}
                                onChange={handleEmail}
                            ></input>
                            <textarea
                                placeholder="Your message..."
                                value={newContact.message}
                                onChange={handleMessage}
                            ></textarea>
                            <button type="submit">Send a message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactForm
