import React from "react";
import Homework7Child from "./Homework7Child";

const Homework7 = () => {
    const handleSelectImage = (url) => {
        const displayedImage = document.getElementById('displayedImage');
        displayedImage.src = url;
        displayedImage.style.display = 'block';
    }
    return(
        <div>
            <Homework7Child
                url="https://images.pexels.com/photos/31190496/pexels-photo-31190496/free-photo-of-dan-chim-dang-bay.jpeg"
                handleSelectImage={handleSelectImage}
                number="1"/>
            <Homework7Child
                url="https://images.pexels.com/photos/31184765/pexels-photo-31184765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                handleSelectImage={handleSelectImage}
                number="2"/>
            <Homework7Child
                url="https://images.pexels.com/photos/18842121/pexels-photo-18842121/free-photo-of-b-u-tr-i-d-ng-v-t-chim-bay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                handleSelectImage={handleSelectImage}
                number="3"
            />
            <div style={{ marginTop: '20px' }}>
                <img
                    id="displayedImage"
                    style={{ width: '300px', display: 'none' }}
                />
            </div>
        </div>
    )
}
export default Homework7;