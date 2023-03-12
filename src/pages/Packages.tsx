
import Appointment from 'components/Appointment/Appointment'
import ContactMe from 'components/ContactMe/ContactMe'
import PackagesTop from 'components/PackagesTop/PackagesTop'
import SatisfiedPatients from 'components/SatisfiedPatients/SatisfiedPatients'

type Props = {}
const Packages = (props: Props) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
    return (
        <>
            <PackagesTop />
            <SatisfiedPatients />
            <Appointment />
            <ContactMe/>
        </>
    )
}
export default Packages
