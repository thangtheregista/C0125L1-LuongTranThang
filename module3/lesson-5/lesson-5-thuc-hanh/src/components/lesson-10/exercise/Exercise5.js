import React, {useState} from "react";

import './Exercise5.css';

const Exercise5 = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        newPassword: '',
        confirmPassword: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'Vui lòng nhập email';
        }
        if (!formData.username.trim()) {
            newErrors.username = 'Vui lòng nhập tên người dùng';
        }
        if (!formData.newPassword.trim()) {
            newErrors.newPassword = 'Vui lòng nhập mật khẩu mới';
        }
        if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
        }
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'Bạn phải đồng ý với các điều khoản';
        }
        return newErrors;
    }
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log('Dữ liệu đã được gửi:', formData);
        }
    }
    return(
        <div className="exercise5">
            <form action="" onSubmit={handleSubmit}>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
                </label>
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div>
                <label>
                    Username:
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange}/>
                </label>
                {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div>
                <label>
                    New Password:
                    <input type="password" name="newPassword" value={formData.newPassword} onChange={handleInputChange}/>
                </label>
                {errors.newPassword && <span className="error">{errors.newPassword}</span>}
            </div>
            <div>
                <label>
                    Confirm Password:
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange}/>
                </label>
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>
            <div>
                <label>
                    <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleInputChange}/>
                    I agree to the terms and conditions
                </label>
                {errors.agreeToTerms && <span className="error">{errors.agreeToTerms}</span>}
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Exercise5;