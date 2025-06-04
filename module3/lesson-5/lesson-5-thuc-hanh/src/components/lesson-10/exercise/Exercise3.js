import React,{useState} from "react";
import './Exercise3.css';

const Exercise3 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        food: '',
        topping: {
            egg : false,
            beef: false,
            chicken: false,
            vegetables: false
        },
        note: ''
    });
    const [errors, setErrors] = useState({});
    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                topping: {
                    ...prevData.topping,
                    [name]: checked
                }
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    }
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Vui lòng nhập tên';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Vui lòng nhập email';
        }
        if (!formData.food) {
            newErrors.food = 'Vui lòng chọn món ăn';
        }
        if (!formData.topping.egg && !formData.topping.beef && !formData.topping.chicken && !formData.topping.vegetables) {
            newErrors.topping = 'Vui lòng chọn ít nhất một topping';
        }
        if (!formData.note.trim()) {
            newErrors.note = 'Vui lòng nhập ghi chú';
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
    return(
        <div>
            <form action="" onSubmit={(e) => handleSubmit(e)} className="exercise3">
                <label>
                    Tên
                </label>
                <input type="text" name="name" value={formData.name} onChange={(e)=> handleInputChange(e)}/>
                <br/>
                {errors.name && <span className="error">{errors.name}</span>}
                <br />
                <label>
                    Email
                </label>
                <input type="email" name="email" value={formData.email} onChange={(e)=> handleInputChange(e)}/>
                <br />
                {errors.email && <span className="error">{errors.email}</span>}
                <br />
                <label>
                    Chọn món
                </label>
                <select name="food" value={formData.food} onChange={(e)=> handleInputChange(e)}>
                    <option value="">-- Chọn món ăn --</option>
                    <option value="Cơm">Cơm</option>
                    <option value="Phở">Phở</option>
                    <option value="Bún">Bún</option>
                    <option value="Mì">Mì</option>
                    <option value="Bánh mì">Bánh mì</option>
                </select>
                <br />
                {errors.food && <span className="error">{errors.food}</span>}
                <br />
                <fieldset>
                    <legend>Chọn topping</legend>
                    <label>
                        <input
                            type="checkbox"
                            name="egg"
                            checked={formData.topping.egg}
                            onChange={(e) => handleInputChange(e)}
                        />
                        Trứng
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="beef"
                            checked={formData.topping.beef}
                            onChange={(e) => handleInputChange(e)}
                        />
                        Thịt bò
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="chicken"
                            checked={formData.topping.chicken}
                            onChange={(e) => handleInputChange(e)}
                        />
                        Gà
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="vegetables"
                            checked={formData.topping.vegetables}
                            onChange={(e) => handleInputChange(e)}
                        />
                        Rau
                    </label>
                    <br/>
                    {errors.topping && <span className="error">{errors.topping}</span>}
                    <br/>
                </fieldset>
                <br />
                <label>
                    Ghi chú:
                </label>
                <textarea
                    name="note"
                    value={formData.note}
                    onChange={(e) => handleInputChange(e)}
                ></textarea>
                <br />
                {errors.note && <span className="error">{errors.note}</span>}
                <br />
                <button type="submit">Gửi</button>
            </form>
        </div>
    )
}
export default Exercise3
