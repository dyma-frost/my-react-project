
import ContactMe from "components/ContactMe/ContactMe"
import ContactTop from "components/ContactTop/ContactTop"




type Props = {}
const Contact = (props: Props) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
    return (<>
        <ContactTop />
        <ContactMe/>
    </>)
}
export default Contact
