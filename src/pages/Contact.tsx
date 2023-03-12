import FAQ from "components/FAQ/FAQ"

type Props = {}
const Contact = (props: Props) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
    return <FAQ/>
}
export default Contact
