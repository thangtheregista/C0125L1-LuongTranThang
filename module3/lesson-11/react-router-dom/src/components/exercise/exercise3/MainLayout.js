import {NavLink, Outlet} from "react-router-dom";

const MainLayout = ( ) => {
    return(
        <div>
            <NavLink to="product">Product</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <NavLink to="detail">Detail</NavLink>
            <Outlet/>
        </div>
    )
}
export default MainLayout