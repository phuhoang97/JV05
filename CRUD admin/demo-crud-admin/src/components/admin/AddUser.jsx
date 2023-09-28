import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./AddUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  const { name, age, email, phone } = user;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/users", user);
    navigate("/users");
  };

  return (
    <div>
      <div className='mx-auto shadow w-75 p-5'>
        <i class='fa-solid fa-arrow-left' onClick={() => navigate(-1)}></i>
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input type='text' value={name} name='name' onChange={handleChange} />
          <br />

          <label>Age: </label>
          <input type='text' value={age} name='age' onChange={handleChange} />
          <br />

          <label>Email: </label>
          <input
            type='text'
            value={email}
            name='email'
            onChange={handleChange}
          />
          <br />

          <label>Phone: </label>
          <input
            type='text'
            value={phone}
            name='phone'
            onChange={handleChange}
          />
          <br />

          <Button variant='outline-success' type='submit'>
            Add User
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
