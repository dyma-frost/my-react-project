import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import './Header.scss'
import React, { useState } from 'react'

type Props = {}

const Header = (props: Props) => {
    const [state, setstate] = useState(false)

    const changeClass = () => {
        const scrollValue = document.documentElement.scrollTop
        if (scrollValue >= 120) {
            setstate(true)
        } else {
            setstate(false)
        }
    }

    window.addEventListener('scroll', changeClass)
    return (
        <>
            <header className={state ? 'header-sticky' : ''}>
                <div className="header-container">
                    <Logo />
                    <Menu />
                    <div className="contact">
                        <a href="tel: +38 (000) 000 00 00">
                            <img
                                src="/images/bedoctor-header-phone-icon.svg"
                                alt="phonecall-logo"
                            />
                            +38 (000) 000 00 00
                        </a>
                        <a href="mailto:testmail@mail.com">
                            <img
                                src="/images/bedoctor-header-mail-icon.svg"
                                alt="mail-logo"
                            />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header
