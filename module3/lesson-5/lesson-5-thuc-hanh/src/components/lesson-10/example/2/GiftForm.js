import { useState } from 'react';
const GiftForm = () => {
    const [formData, setFormData] = useState({
        childName: '',
        age: '',
        parentName: '',
        address: '',
        giftType: '',
        gender: '',
        agree:false,
    })
    const handleOnChangeData = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                [name]: checked
            }))
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }


    }
    const [errors, setErrors] = useState({});

    const submitForm = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            setErrors({});
            alert("Dang ky thanh cong");
            console.log('Form submitted:', formData);
        }
    }

    const validate = () => {
        const newErrors = {};
        if (!formData.childName.trim()) {
            newErrors.childName = 'Vui long nhap ten be';
        }
        if (!formData.age || formData.age < 1 || isNaN(formData.age)) {
            newErrors.age = 'Vui long nhap tuoi hop le';
        }
        if (!formData.parentName.trim()) {
            newErrors.parentName = 'Vui long nhap ten phu huynh';
        }
        if (!formData.address.trim()) {
            newErrors.address = 'Vui long nhap dia chi';
        }
        if (!formData.giftType) {
            newErrors.giftType = 'Vui long chon loai qua';
        }
        return newErrors
    }
    return(
        <div>
            <h1>
                Dang ky nhan qua
            </h1>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="childName">Ten be:</label>
                    <input
                        type="text"
                        name="childName"
                        id="childName"
                        value={formData.childName}
                        onChange={(e) => handleOnChangeData(e)}
                    />
                    {errors.childName && <span style={{ color: 'red' }}>{errors.childName}</span>}
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="nam"
                            checked={formData.gender === 'nam'}
                            onChange={(e) => handleOnChangeData(e)}
                        /> Nam
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="nu"
                            checked={formData.gender === 'nu'}
                            onChange={(e) => handleOnChangeData(e)}
                        /> Nu
                    </label>

                </div>
                <div>
                    <label htmlFor="age">Tuoi:</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={formData.age}
                        onChange={(e) => handleOnChangeData(e)}
                    />
                    {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
                </div>
                <div>
                    <label htmlFor="parentName">Ten phu huynh:</label>
                    <input
                        type="text"
                        name="parentName"
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => handleOnChangeData(e)}
                    />
                    {errors.parentName && <span style={{ color: 'red' }}>{errors.parentName}</span>}
                </div>
                <div>
                <label htmlFor="childName">Dia chi:</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleOnChangeData(e)}
                />
                    {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
                </div>
                <div>
                    <label htmlFor="">Chon loai qua</label>
                    <select name="giftType" id="" value={formData.giftType} onChange={(e) => handleOnChangeData(e)}>
                        <option value="">Chon qua</option>
                        <option value="sach-to-mau">Sach to mau</option>
                        <option value="gau-bong">Gau bong</option>
                        <option value="lego">Lego</option>
                    </select>
                    {errors.giftType && <span style={{ color: 'red' }}>{errors.giftType}</span>}
                </div>
                <div>
                    <label htmlFor="">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={(e) => handleOnChangeData(e)}
                        /> Toi da doc va dong y voi dieu khoan
                    </label>
                </div>
                <button type="submit">
                    Dang ky nhan qua
                </button>


            </form>
        </div>
    )
}
export default GiftForm;