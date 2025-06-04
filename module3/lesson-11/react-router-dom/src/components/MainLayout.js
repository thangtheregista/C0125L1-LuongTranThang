import {NavLink, Outlet, Routes} from "react-router-dom";

const MainLayout = ( ) => {
    return(
        <div>
            <nav>
                <NavLink to="product">Product</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
            <hr/>
            <Outlet/>
        </div>
    )
}
export default MainLayout