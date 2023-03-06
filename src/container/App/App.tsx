import Header from 'container/Header/Header'
// import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Services from 'pages/Services'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Packages from 'pages/Packages'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* <Main /> */}
            <Footer />
        </>
    )
}
export default App
