import About1 from 'components/About/About1'
import About2 from 'components/About/About2'
import Quote from 'components/Quote/Quote'
import VisitOur from 'components/VisitOur/VisitOur'
import Appointment from 'components/Appointment/Appointment'
import ContactMe from 'components/ContactMe/ContactMe'


type Props = {}
const About = (props: Props) => {
    return (
        <>
            <About1 />
            <About2/>
            <Quote />
            <VisitOur />
            <Appointment />
            <ContactMe/>
        </>
    )
}
export default About
