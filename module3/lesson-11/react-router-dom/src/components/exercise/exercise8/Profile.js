import {NavLink, Outlet} from "react-router-dom";

const Profile = ( ) => {
    return(
        <div>
            <NavLink to="info">Info</NavLink>
            <NavLink to="posts">Posts</NavLink>
            <NavLink to="settings">Settings</NavLink>
            <Outlet/>
        </div>
    )
}
export default Profile