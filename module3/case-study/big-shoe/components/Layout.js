import "./layout.css"
import Header from "./Header";
import Navbar from "./Navbar";
import Carousels from "./Carousels";
import slides from '../pages/mock.json'
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";


export default function Layout() {
    return(
        <div className="layout">
            <Header/>
            <Navbar/>
            <Carousels slides={slides}/>
            <Sidebar/>
            <Main/>
            <div className="footer">
                footer
            </div>
        </div>
    )
}