import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter() {
  // Khi đăng nhập => lưu lên localStorage
  // => sử dụng biến đấy trên localStorage để check điều kiện
  const getLocal = localStorage.getItem("user")
  const isLogin = getLocal;
  return isLogin ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRouter;
    