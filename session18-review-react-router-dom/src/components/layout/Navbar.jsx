import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className='nav'>
        <ul className='nav-list'>
          <Link to={"/"}>
            <li className='nav-item'>Home</li>
          </Link>
          <Link to={"/about"}>
            <li className='nav-item'>About</li>
          </Link>

          <Link to={"/contact"}>
            <li className='nav-item'>Contact</li>
          </Link>
        </ul>
        <ul className='nav-list'>
          <li className='nav-item'>Đăng nhập</li>
          <li className='nav-item'>Đăng ký</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
