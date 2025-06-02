import React, {useState} from "react";
import './Exercise2.css';

const Exercise2 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: '',
        comment: ''
    })
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Vui lòng nhập tên người bình luận';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Vui lòng nhập email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }
        if (!formData.rating) {
            newErrors.rating = 'Vui lòng chọn đánh giá';
        }
        if (!formData.comment.trim()) {
            newErrors.comment = 'Vui lòng nhập bình luận';
        }
        return newErrors;
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log(formData)

        }
    };
    return(
        <div className="exercise2">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Tên người bình luận:
                </label>
                <input type="text" name="name" value={formData.name} onChange={(e)=> handleInputChange(e)} />
                <br/>
                {errors.name && <span className="error">{errors.name}</span>}
                <br />
                <label>
                    Email:
                </label>
                <input type="email" name="email" value={formData.email} onChange={(e)=> handleInputChange(e)} />
                <br />
                {errors.email && <span className="error">{errors.email}</span>}
                <br />
                <fieldset>
                    <legend>Đánh giá:</legend>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="1"
                            checked={formData.rating === '1'}
                            onChange={(e) => handleInputChange(e)}
                        />
                        1
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="2"
                            checked={formData.rating === '2'}
                            onChange={(e) => handleInputChange(e)}
                        />
                        2
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="3"
                            checked={formData.rating === '3'}
                            onChange={(e) => handleInputChange(e)}
                        />
                        3
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="4"
                            checked={formData.rating === '4'}
                            onChange={(e) => handleInputChange(e)}
                        />
                        4
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="5"
                            checked={formData.rating === '5'}
                            onChange={(e) => handleInputChange(e)}
                        />
                        5
                    </label>
                    <br />
                    {errors.rating && <span className="error">{errors.rating}</span>}

                </fieldset>
                <label>
                    Bình luận:
                    <textarea name="comment" value={formData.comment} onChange={(e)=> handleInputChange(e)}></textarea>
                </label>
                <br />
                {errors.comment && <span className="error">{errors.comment}</span>}
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Exercise2