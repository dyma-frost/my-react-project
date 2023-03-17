// import { store } from 'redux/store'
import MenuItem from './MenuItem'

type Props = {}
const Menu = (props: Props) => {
    // const myState = store.getState().productsLikeState
    // const trueValues = Object.values(myState).filter(
    //     (item: boolean) => item === true
    // )
    // const trueValuesCount = trueValues.length
    // console.log(trueValues)

    return (
        <>
            <div className="menu" style={{ zIndex: 9 }}>
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/services">Services</MenuItem>
                <MenuItem to="/about">About</MenuItem>
                <MenuItem to="/packages">Packages</MenuItem>
                <MenuItem to="/contact">Contact</MenuItem>
                {/* <MenuItem to="/favorites">
                    <i className="fa fa-heart">
                        <span>({trueValuesCount})</span>
                    </i>
                </MenuItem> */}
            </div>
        </>
    )
}
export default Menu
