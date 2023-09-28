import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

function IndexColor() {
  // Lifting State Up: Nâng (Chuyển) trạng thái từ component con lên component cha
  // Trong React là luồng dữ liệu 1 chiều (one way data binding) nên để có thể cập nhật được
  // trạng thái từ component con lên component cha thì cần sử dụng event

  const [color, setColor] = useState("#000000");

  // Cách 2:
  const handleChangeColor = (e) => {
    setColor(e);
  };
  return (
    <div>
      <h3>Demo Lifting State Up</h3>
      {/* Cách 1: Sử dụng hàm setState */}
      {/* Truyền props (setColorParent) từ cha xuống con */}
      {/* <ColorPicker setColorParent={setColor} number={10} /> */}

      {/* Cách 2: Xây dựng hàm để truyền xuống component con */}
      <ColorPicker changeColor={handleChangeColor} />
      <div
        style={{
          backgroundColor: color,
          width: "200px",
          height: "200px",
          margin: "0 auto",
        }}
      ></div>
    </div>
  );
}

export default IndexColor;
