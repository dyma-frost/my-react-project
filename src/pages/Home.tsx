import MainPage1 from 'components/MainPage/MainPage1'
import Quote from 'components/Quote/Quote'
import Specializations from 'components/Specializations/Specializations'
import ChooseMe from 'components/ChooseMe/ChooseMe'
import VisitOur from 'components/VisitOur/VisitOur'
import HealthPlan from 'components/HealthPlan/HealthPlan'
import SatisfiedPatients from 'components/SatisfiedPatients/SatisfiedPatients'
import Appointment from 'components/Appointment/Appointment'
import ContactMe from 'components/ContactMe/ContactMe'


type Props = {}
const Home = (props: Props) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
    return (
        <>
            <MainPage1 />
            <Quote/>
            <Specializations />
            <ChooseMe />
            <VisitOur />
            <HealthPlan />
            <SatisfiedPatients />
            <Appointment />
            <ContactMe />
            
        </>
    )
}
export default Home
