import React, {useEffect} from "react";

const Color = () => {
    const [colors, setColors] = React.useState([
        "red",
        "green",
        "blue",
        "yellow",
    ]);
   const [selectedColor, setSelectedColor] = React.useState("");
   useEffect(()=> {
       console.log(selectedColor)
   }, [selectedColor]);
    return(
        <div>
            {
                colors.map((item, index) => (
                    <button key={index} style={{color: item, marginRight: "10px"}} onClick={()=> {
                        setSelectedColor(item);
                        document.body.style.backgroundColor = item;
                    }}>
                        {item}
                    </button>
                ))
            }
        </div>
    )
}
export default Color