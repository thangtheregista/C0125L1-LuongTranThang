import {NavLink, Route, Routes} from "react-router-dom";

const Exercise3 = () => {
    return(
        <div>
            <nav>
                <NavLink to="/main">
                    Main
                </NavLink>
            </nav>
            <Routes>
                <Route path="/main" element={}></Route>
            </Routes>
        </div>
    )
}
export default Exercise3