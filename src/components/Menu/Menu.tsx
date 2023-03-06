import MenuItem from "./MenuItem"

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <div className="menu" style={{zIndex: 9}}>
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/services">Services</MenuItem>
                <MenuItem to="/about">About</MenuItem>
                <MenuItem to="/packages">Packages</MenuItem>
                <MenuItem to="/contact">Contact</MenuItem>
            </div>
        </>
    )
}
export default Menu
