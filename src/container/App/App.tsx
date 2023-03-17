import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Services from 'pages/Services'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Packages from 'pages/Packages'
import Cardiology from 'pages/categoryPage/Cargiology/Cardiology'
import DentalDep from 'pages/categoryPage/DentalDep/DentalDep'
import Pediatrics from 'pages/categoryPage/Pediatrics/Pediatrics'
import XRay from 'pages/categoryPage/XRay/XRay'
import EarTreatment from 'pages/categoryPage/EarTreatment/EarTreatment'
import Pregnancy from 'pages/categoryPage/Pregnancy/Pregnancy'
import Liked from 'pages/categoryPage/Liked/Liked'
// import { useState } from 'react'
// import { omit } from 'lodash'

type Props = {}

// type Favorites = {
//     [id: number]: number
    
// }

const App = (props: Props) => {
    // const [favorites, setFavorites] = useState<Favorites>({
    //     1: 1,
    //     20: 1,
    // })

    // const addFavorites = (id: number) => {
    //     setFavorites((prevState) => ({
    //         ...prevState,
    //         [id]: prevState[id],
    //     }))
    // }
    // const removeFavorites = (id: number) => {
    //     setFavorites((prevState) => omit(prevState, [id]))
    // }

    // console.log({ favorites })
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/contact" element={<Contact />} />

                <Route
                    path="/services/dental department"
                    element={<DentalDep />}
                />
                <Route path="/services/cardiology" element={<Cardiology />} />
                <Route path="/services/pediatrics" element={<Pediatrics />} />
                <Route path="/services/x-ray" element={<XRay />} />
                <Route
                    path="/services/ear-treatment"
                    element={<EarTreatment />}
                />
                <Route path="/services/pregnancy" element={<Pregnancy />} />

                <Route
                    path="/favorites"
                    element={<Liked /* favorites={favorites} */ />}
                />
            </Routes>
            <Footer />
        </>
    )
}
export default App
