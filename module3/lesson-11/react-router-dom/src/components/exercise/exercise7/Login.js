import { useNavigate } from "react-router-dom";
function Login({ setIsAuthenticated }) {
    const navigate = useNavigate();
    const handleOnClick = (e) => {
        e.preventDefault()
        localStorage.setItem('isAuthenticated', 'true');  // lưu trạng thái
        setIsAuthenticated(true);
        navigate('/dashboard');
    }
    return (
        <div>
            <h4>Bạn cần phải đăng nhập trước khi vào trang Dashboard</h4>
            <button onClick={handleOnClick}>Đăng nhập bằng Google</button>
        </div>
    );
}
export default Login;