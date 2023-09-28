import React from "react";
import { Link } from "react-router-dom";

function SlideBar() {
  return (
    <div className='slide-bar'>
      <ul>
        <li>
          <Link to='/'>Dashboard</Link>
        </li>
        <li>
          <Link to='/admin/cars'>Manager Cars</Link>
        </li>
      </ul>
    </div>
  );
}

export default SlideBar;
