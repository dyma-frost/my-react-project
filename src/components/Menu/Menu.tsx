import MenuItem from "./MenuItem"

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/services">Services</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/packages">Packages</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
        </>
    )
}
export default Menu
