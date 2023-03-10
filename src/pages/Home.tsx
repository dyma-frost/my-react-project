import ContactMe from "components/ContactMe/ContactMe"
import MainPage1 from "components/MainPage/MainPage1"
import MainPage2 from "components/MainPage/MainPage2"
import MainPage3 from "components/MainPage/MainPage3"
import MainPage4 from "components/MainPage/MainPage4"
import MainPage5 from "components/MainPage/MainPage5"
import MainPage6 from "components/MainPage/MainPage6"
import MainPage7 from "components/MainPage/MainPage7"
import MainPage8 from "components/MainPage/MainPage8"

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <MainPage1 />
            <MainPage2 />
            <MainPage3 />
            <MainPage4 />
            <MainPage5 />
            <MainPage6 />
            <MainPage7 />
            <MainPage8 />
            <ContactMe/>
        </>
    )
}
export default Home
