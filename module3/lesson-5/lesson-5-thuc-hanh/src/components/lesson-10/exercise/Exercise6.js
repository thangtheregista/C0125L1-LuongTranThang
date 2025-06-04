import React, {useState} from "react";

const Exercise6 = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        email: '',
        age: '',
        courses : []
    });
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'courses' && type === 'checkbox') {
            const updatedCourses = checked
                ? [...formData.courses, value]
                : formData.courses.filter(course => course !== value);
            setFormData((prevData) => ({
                ...prevData,
                courses: updatedCourses
            }))
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    }
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if (!formData.studentName.trim()) newErrors.studentName = "Trường tên học sinh không được để trống";
        if (!formData.email.trim()) newErrors.email = "Trường email không được để trống";
        if (!formData.age) {
            newErrors.age = "Tuổi không được để trống";
        } else if (formData.age > 14) {
            newErrors.age = "Tuổi phải nhỏ hơn 14";
        } else if(isNaN(formData.age)) {
            newErrors.age = "Tuổi phải là một số";
        }

        if(formData.courses.length === 0) {
            newErrors.courses = "Vui lòng chọn ít nhất một khoá học";
        }
        return newErrors;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log('Form submitted:', formData);
        }
    }
    const languages = ['JavaScript', 'Python', 'Java', 'C#', 'PHP'];
    return(
        <div>
            <h1>Form đăng ký lớp học lập trình</h1>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div>
                    <label>
                        Tên học sinh
                    </label>
                    <input
                        name="studentName"
                        type="text"
                        value={formData.studentName}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.studentName && <span className="error">{errors.studentName}</span>}
                </div>
                <div>
                    <label>
                        Nhập email
                    </label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label>
                        Tuổi
                    </label>
                    <input
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.age && <span className="error">{errors.age}</span>}
                </div>
                <div>
                    {
                        languages.map((language, index) => (
                            <label key={index}>
                                <input type="checkbox" name="courses" value={language} checked={formData.courses.includes(language)} onChange={(e)=> handleInputChange(e)}/>
                                {language}
                            </label>
                        ))
                    }
                    {errors.courses && <span className="error">{errors.courses}</span>}
                </div>
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    )
}
export default Exercise6