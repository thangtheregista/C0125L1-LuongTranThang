import "./layout.css"
import Header from "./Header";
import Navbar from "./Navbar";
import Carousels from "./Carousels";
import slides from '../pages/mock.json'

export default function Layout() {
    return(
        <div className="layout">
            <Header/>
            <Navbar/>
            <Carousels slides={slides}/>
            <div className="sidebar">
                sidebar
            </div>
            <div className="main">
                main
            </div>
            <div className="footer">
                footer
            </div>
        </div>
    )
}