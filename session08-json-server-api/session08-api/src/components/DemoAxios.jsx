import React from "react";
import axios from "axios";

function DemoAxios() {
  const url = "http://localhost:8000/users";
  // Get Axios
  const handleGetAxios = () => {
    axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Post Axios
  const people = {
    name: "Son",
    age: 28,
    address: "HN",
    phone: "086512813",
  };
  const handlePostAxios = () => {
    axios
      .post(url, people)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Put Axios
  const handlePutAxios = () => {
    axios
      .put(url + "/8", {
        name: "Duy",
        age: 20,
        address: "HN",
        phone: "081234613",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Put Axios
  const handlePatchAxios = () => {
    axios
      .patch(url + "/8", {
        name: "Quỳnh",
        age: 30,
        address: "HN",
        phone: "081234613",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Delete Axios
  const handleDeleteAxios = () => {
    axios.delete(url + "/10");
  };

  return (
    <div>
      <h1>Demo Axios</h1>
      {/* Get Axios */}
      <button onClick={handleGetAxios}>Get Axios</button>
      {/* Post Axios */}
      <button onClick={handlePostAxios}>Post Axios</button>
      {/* Put Axios */}
      <button onClick={handlePutAxios}>Put Axios</button>
      {/* Patch Axios */}
      <button onClick={handlePatchAxios}>Patch Axios</button>
      {/* Delete Axios */}
      <button onClick={handleDeleteAxios}>Delete Axios</button>
    </div>
  );
}

export default DemoAxios;
