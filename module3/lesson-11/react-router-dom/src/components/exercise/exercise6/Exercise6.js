import {NavLink, Route, Routes} from "react-router-dom";
import MainLayout from "./MainLayout";
import Contact from "./Contact";
import Home from "./Home";

const Exercise6 = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index path="/" element={<Home/>}>
                    </Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Route>
            </Routes>
        </div>
    )
}
export default Exercise6