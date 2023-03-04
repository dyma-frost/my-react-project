import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
// import { Route, Routes } from 'react-router-dom'
// import Home from 'pages/Home'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <Header />
            {/* <Routes>
                <Route path='/' element={<Main/>} />

                
            </Routes> */}
            <Main />
            <Footer />
        </>
    )
}
export default App
