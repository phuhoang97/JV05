import React from "react";
import Navbar from "../../layout/Navbar";

function HomePage() {
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log(apiUrl + "todos");
  return (
    <div>
      <Navbar />
      HomePage
    </div>
  );
}

export default HomePage;
