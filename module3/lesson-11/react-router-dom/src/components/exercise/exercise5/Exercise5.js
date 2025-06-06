import "./exercise5.css"
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
const Exercise5 = () => {
    return(
        <div>
            <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? ' active' : 'inactive')}
            >Home</NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >Contact</NavLink>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </div>
    )
}
export default Exercise5