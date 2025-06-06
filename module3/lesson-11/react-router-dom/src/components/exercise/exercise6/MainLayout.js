import {NavLink, Outlet} from "react-router-dom";

const MainLayout = ( ) => {
    return(
        <div>
            <header>
                This is header
            </header>
            <NavLink to="home">Home</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <Outlet/>
            <footer>
                This is footer
            </footer>
        </div>
    )
}
export default MainLayout