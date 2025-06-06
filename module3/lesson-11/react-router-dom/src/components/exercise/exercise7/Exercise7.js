import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
function Exercise7() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isAuthenticated') === 'false'
    );
    return(
        <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}></Route>
            <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard /></ProtectedRoute>}></Route>
        </Routes>
    );
}
export default Exercise7;