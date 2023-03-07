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
                        <a href="tel: +61 (0) 3 8376 6284">
                            +61 (0) 3 8376 6284
                        </a>
                        <button>Send</button>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header
