import React from "react";
import { useNavigate } from "react-router-dom";

function DemoNavigate() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Sử dụng Navigate với 1 tham số - Chuyển trang */}
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
      {/* navigate với history */}
      <button onClick={() => navigate(-1)}>Go back 1 page</button>
      <button onClick={() => navigate(-2)}>Go back 2 page</button>
      <button onClick={() => navigate(1)}>Go forward 1 page</button>
      <button onClick={() => navigate(2)}>Go forward 2 page</button>
      {/* Sử dụng navigate với replace=true => không lưu lại history */}
      <button onClick={() => navigate("/about", { replace: true })}>
        Go to About
      </button>
      {/* Sử dụng navigate để chuyển dữ liệu */}
      <button onClick={() => navigate("/contact", { state: { count: 10 } })}>
        Go to Contact with Data
      </button>
    </div>
  );
}

export default DemoNavigate;
