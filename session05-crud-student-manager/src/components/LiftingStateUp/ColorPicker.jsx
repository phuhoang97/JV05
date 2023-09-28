import React from "react";

// Cách 1 - Để nhận props: Nhập props từ cha => Lấy tất cả các props từ cha
// function ColorPicker(props) {
//   console.log(props);

// Cách 2 - Để nhận props: Sử dụng destructoring => Lấy props cụ thể
// function ColorPicker({ setColorParent }) {
//   // Cách 1 - LiftingStateUp
//   const handleColorPicker = (e) => {
//     setColorParent(e.target.value);
//   };

// Cách 2 - LiftingStateUp

function ColorPicker({ changeColor }) {
  //   console.log(changeColor);
  const handleChangeColor = (e) => {
    changeColor(e.target.value);
  };
  return (
    <div>
      {/* <input type='color' onChange={handleColorPicker} /> */}
      <input type='color' onChange={handleChangeColor} />
    </div>
  );
}

export default ColorPicker;
