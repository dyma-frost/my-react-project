import { Link } from "react-router-dom"


type Props = {}
const Logo = (props: Props) => {
    return (
        <>
            <Link to="/">
                <img src="../../images/bedoctor.svg" alt="Logo" style={{width: "10vw"}}/>
            </Link>
        </>
    )
}
export default Logo
