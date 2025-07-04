import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Route, Routes} from "react-router-dom";
import Product from "./components/exercise1/Product";
import ProductAdd from "./components/exercise1/ProductAdd";
import ProductEdit from "./components/exercise1/ProductEdit";
import ProductView from "./components/exercise1/ProductView";
import Students from "./components/exercise2/Students";
import StudentAdd from "./components/exercise2/StudentAdd";
import StudentView from "./components/exercise2/StudentView";
import StudentEdit from "./components/exercise2/StudentEdit";
import Posts from "./components/exercise3/Posts";
import PostAdd from "./components/exercise3/PostAdd";
import PostEdit from "./components/exercise3/PostEdit";
import PostView from "./components/exercise3/PostView";

function App() {
    return (
        <div className="App">
            {/*BT1*/}
            {/*<Routes>*/}
            {/*    <Route path="/" element={<Product/>}></Route>*/}
            {/*    <Route path="/add" element={<ProductAdd/>}></Route>*/}
            {/*    <Route path="edit/:id" element={<ProductEdit/>}></Route>*/}
            {/*    <Route path="view/:id" element={<ProductView/>}></Route>*/}
            {/*    <Route path="*" element={<h1>Page not found</h1>}></Route>*/}
            {/*</Routes>*/}
            {/*BT2*/}
            {/*<Routes>*/}
            {/*    <Route path="/" element={<Students/>}></Route>*/}
            {/*    <Route path="/add" element={<StudentAdd/>}></Route>*/}
            {/*    <Route path="edit/:id" element={<StudentEdit/>}></Route>*/}
            {/*    <Route path="view/:id" element={<StudentView/>}></Route>*/}
            {/*    <Route path="*" element={<h1>Page not found</h1>}></Route>*/}
            {/*</Routes>*/}
            {/*BT3*/}
            <Routes>
                <Route path="/" element={<Posts/>}></Route>
                <Route path="/add" element={<PostAdd/>}></Route>
                <Route path="edit/:id" element={<PostEdit/>}></Route>
                <Route path="view/:id" element={<PostView/>}></Route>
                <Route path="*" element={<h1>Page not found</h1>}></Route>
            </Routes>
        </div>
    );
}

export default App;
