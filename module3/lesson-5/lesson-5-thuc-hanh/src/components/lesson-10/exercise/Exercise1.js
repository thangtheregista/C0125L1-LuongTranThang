import React, { useState } from "react";
import './Exercise1.css';

const Exercise1 = () => {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        frequency: '',
        interests: {
            technology: false,
            offers: false,
            news: false
        }
    });

    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'Vui lòng nhập email';
        }
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Vui lòng nhập họ tên';
        }
        if (!formData.frequency) {
            newErrors.frequency = 'Vui lòng chọn tần suất';
        }
        if (!formData.interests.technology && !formData.interests.offers && !formData.interests.news) {
            newErrors.interests = 'Vui lòng chọn ít nhất một chủ đề quan tâm';
        }
        return newErrors;
    }
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                interests: {
                    ...prevData.interests,
                    [name]: checked
                }
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            alert(
                `Cảm ơn ${formData.fullName} đã đăng ký nhận tin\n` +
                `Tần suất: ${formData.frequency}\n` +
                `Chủ đề quan tâm:\n` +
                `- Công nghệ: ${formData.interests.technology ? 'Có' : 'Không'}\n` +
                `- Ưu đãi: ${formData.interests.offers ? 'Có' : 'Không'}\n` +
                `- Tin tức: ${formData.interests.news ? 'Có' : 'Không'}`
            );
        }

    };

    return (
        <div className="exercise1">
            <form onSubmit={(e)=> handleSubmit(e)}>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}

                    />
                </label>
                {errors.email && <span className="error">{errors.email}</span>}
                <br />
                <label>
                    Họ tên:
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}

                    />
                </label>
                {errors.fullName && <span className="error">{errors.fullName}</span>}
                <br />
                <label>
                    Chọn tần suất:
                    <select
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleInputChange}

                    >
                        <option value="">-- Chọn tần suất --</option>
                        <option value="Hàng ngày">Hàng ngày</option>
                        <option value="Hàng tuần">Hàng tuần</option>
                        <option value="Hàng tháng">Hàng tháng</option>
                    </select>
                </label>
                {errors.frequency && <span className="error">{errors.frequency}</span>}
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="technology"
                        checked={formData.interests.technology}
                        onChange={handleInputChange}
                    />
                    Tin công nghệ
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="offers"
                        checked={formData.interests.offers}
                        onChange={handleInputChange}
                    />
                    Ưu đãi
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="news"
                        checked={formData.interests.news}
                        onChange={handleInputChange}
                    />
                    Tin tức
                </label>
                <br />
                {errors.interests && <span className="error">{errors.interests}</span>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Exercise1;
