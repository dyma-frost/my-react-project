// import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import './Header.scss'

type Props = {}
const Header = (props: Props) => {
    return (
        <>
            <header /* className='header-sticky' */>
                <div className="header-container">
                    <Logo />
                    <div className="menu">
                        <a href="/">Home</a>
                        <a href="/">Services</a>
                        <a href="/">About</a>
                        <a href="/">Packages</a>
                        <a href="/">Contact</a>
                    </div>
                    {/* <Menu/> */}
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
