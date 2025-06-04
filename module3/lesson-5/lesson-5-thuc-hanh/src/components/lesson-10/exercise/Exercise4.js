import React , {useState} from "react";
import './Exercise4.css';

const Exercise4 = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        hobbies: [],
    });
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Vui lòng nhập tên';
        }
        if (!formData.age || formData.age <= 0) {
            newErrors.age = 'Vui lòng nhập tuổi hợp lệ';
        }
        if (!formData.gender.trim()) {
            newErrors.gender = 'Vui lòng chọn giới tính';
        }
        if (formData.hobbies.length === 0) {
            newErrors.hobbies = 'Vui lòng chọn ít nhất một sở thích';
        }
        return newErrors;
    }
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => {
                const hobbies = checked
                    ? [...prevData.hobbies, value]
                    : prevData.hobbies.filter((hobby) => hobby !== value);
                return { ...prevData, hobbies };
            });
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
            setErrors({})
            console.log('Dữ liệu đã được gửi:', formData);
        }
    }
    return(
        <div className="exercise4">
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label>
                        Tên:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label>
                        Tuổi:
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                        />
                    </label>
                    {errors.age && <span className="error">{errors.age}</span>}
                </div>
                <fieldset>
                    <legend>Giới tính:</legend>
                    <label>
                        <input type="radio" name="gender" value="Nam" onChange={handleInputChange}/>
                        Nam
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Nữ" onChange={handleInputChange}/>
                        Nữ
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Khác" onChange={handleInputChange}/>
                        Khác
                    </label>
                    <br/>
                    {errors.gender && <span className="error">{errors.gender}</span>}

                </fieldset>
                <fieldset>
                    <legend>Sở thích:</legend>
                    <label>
                        <input
                            type="checkbox"
                            name="hobbies"
                            value="Đọc sách"
                            onChange={handleInputChange}
                        />
                        Đọc sách
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="hobbies"
                            value="Chơi thể thao"
                            onChange={handleInputChange}
                        />
                        Chơi thể thao
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="hobbies"
                            value="Du lịch"
                            onChange={handleInputChange}
                        />
                        Du lịch
                    </label>
                    {errors.hobbies && <span className="error">{errors.hobbies}</span>}

                </fieldset>
                <div>
                    <button type="submit">Gửi</button>
                </div>
            </form>
        </div>
    )
}
export default Exercise4