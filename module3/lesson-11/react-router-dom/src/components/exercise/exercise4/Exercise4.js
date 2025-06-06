import {Routes, Route} from "react-router-dom";

const Exercise4 = () => {
    return(
        <div>
            <Routes>
                <Route index element={<p>This is homepage</p>}></Route>
                <Route path="*" element={<p>This page does not exist</p>}></Route>
            </Routes>
        </div>
    )
}
export default Exercise4