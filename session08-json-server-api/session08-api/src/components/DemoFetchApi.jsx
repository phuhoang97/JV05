import React, { useEffect, useState } from "react";

function DemoFetchApi() {
  const [dataUser, setDataUser] = useState([]);
  // Get Fetch API
  const handleGetFetch = () => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
      .then((data) => setDataUser(data)) // Để lấy dữ liệu về
      .catch((err) => console.log(err)); // Để báo lỗi
  };

  const person = {
    name: "Tiến",
    age: 22,
    address: "HN",
    phone: "023783254",
  };
  // Post Fetch API
  const handlePostFetch = () => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(person),
    })
      .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
      .then((data) => console.log(data)) // Để lấy dữ liệu về
      .catch((err) => console.log(err)); // Để báo lỗi
  };

  // Put Fetch API
  const handlePutFetch = () => {
    fetch("http://localhost:8000/users/5", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: "Dũng",
        age: 28,
        phone: "023778945",
      }),
    })
      .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
      .then((data) => console.log(data)) // Để lấy dữ liệu về
      .catch((err) => console.log(err)); // Để báo lỗi
  };

  // Patch Fetch API
  const handlePatchFetch = () => {
    fetch("http://localhost:8000/users/6", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: "Dũng",
        age: 30,
        phone: "023778945",
      }),
    })
      .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
      .then((data) => console.log(data)) // Để lấy dữ liệu về
      .catch((err) => console.log(err)); // Để báo lỗi
  };

  // Put và Patch:
  //   + Put sẽ tạo ra bản ghi mới và ghi đè lại bản ghi cũ
  //   + Patch sẽ không tạo ra bản ghi mới chỉ cập nhật lại trường được sửa

  // Delete Fetch API
  const handleDeleteFetch = () => {
    fetch("http://localhost:8000/users/7", {
      method: "DELETE",
    })
      .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
      .then((data) => console.log(data)) // Để lấy dữ liệu về
      .catch((err) => console.log(err)); // Để báo lỗi
  };

  // Sử dụng useEffect để đổ dữ liệu khi component mount
  //   useEffect(() => {
  //     fetch("http://localhost:8000/users")
  //       .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
  //       .then((data) => setDataUser(data)) // Để lấy dữ liệu về
  //       .catch((err) => console.log(err)); // Để báo lỗi
  //   }, []);

  return (
    <div>
      <h1>Fetch API</h1>
      {/* Get Fetch API*/}
      <button onClick={handleGetFetch}>Get Fetch API</button>
      {/* Post Fetch API */}
      <button onClick={handlePostFetch}>Post Fetch API</button>
      {/* Put Fetch API */}
      <button onClick={handlePutFetch}>Put Fetch API</button>
      {/* Patch Fetch API */}
      <button onClick={handlePatchFetch}>Patch Fetch API</button>
      {/* Delete Fetch API */}
      <button onClick={handleDeleteFetch}>Delete Fetch API</button>

      {/* Hiển thị dữ liệu trong dataUser */}
      <h2>Table User</h2>
      <table border={1} align='center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((e, i) => (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.address}</td>
              <td>{e.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoFetchApi;
