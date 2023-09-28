import React, { createContext, useState } from "react";
import CompB from "./CompB";
import "./CompA.css";

// Bước 1: Tạo ngữ cảnh cho useContext
export const themeContext = createContext();

function CompA() {
  // Trường hợp 1: không sử dụng useContext
  // CompA => CompB => CompC
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Trường hợp 2: Sử dụng useContext
  // useContext là 1 hook được cung cấp bởi react.
  // Giúp đơn giản hóa việc chia sẻ dữ liệu giữa các component
  // CompA => CompC
  return (
    <div>
      <h3>Demo useContext</h3>
      {/* Trường hợp 1: Truyền props */}
      {/* <button onClick={handleChangeTheme}>Click</button>
      <CompB theme={theme} /> */}
      {/* Trường hợp 2: Sử dụng useContext */}
      <button onClick={handleChangeTheme}>Click</button>
      <themeContext.Provider value={theme}>
        <CompB />
      </themeContext.Provider>
    </div>
  );
}

export default CompA;
