import {NavLink, Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import Info from "./Info";
import Posts from "./Posts";
import Settings from "./Settings";

const Exercise8 = () => {
    return(
        <div>
            <NavLink to="/profile">Profile</NavLink>
            <Routes>
                <Route path="/profile" element={<Profile/>}>
                    <Route path="/profile/info" element={<Info/>}></Route>
                    <Route path="/profile/posts" element={<Posts/>}></Route>
                    <Route path="/profile/settings" element={<Settings/>}></Route>
                </Route>
            </Routes>
        </div>
    )
}
export default Exercise8