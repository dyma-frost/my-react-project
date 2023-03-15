import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Services from 'pages/Services'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Packages from 'pages/Packages'
import Cardiology from 'pages/categoryPage/Cardiology'
import DentalDep from 'pages/categoryPage/DentalDep'
import Pediatrics from 'pages/categoryPage/Pediatrics'
import XRay from 'pages/categoryPage/XRay'
import EarTreatment from 'pages/categoryPage/EarTreatment'
import Pregnancy from 'pages/categoryPage/Pregnancy'


type Props = {}
const App = (props: Props) => {

    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home/>}
                />
                <Route
                    path="/services"
                    element={<Services />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/dental" element={<DentalDep />} />
                <Route path="/services/cardiology" element={<Cardiology />} />
                <Route path="/services/pediatrics" element={<Pediatrics />} />
                <Route path="/services/x-ray" element={<XRay />} />
                <Route
                    path="/services/ear-treatment"
                    element={<EarTreatment />}
                />
                <Route path="/services/pregnancy" element={<Pregnancy />} />
            </Routes>
            <Footer />
        </>
    )
}
export default App
