import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./AddUser.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
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

  const { id } = useParams();

  const loadUser = async () => {
    let result = await axios.get(`http://localhost:8000/users/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/users/${id}`, user);
    navigate("/users");
  };

  return (
    <div>
      <div className='mx-auto shadow w-75 p-5'>
        <i class='fa-solid fa-arrow-left' onClick={() => navigate(-1)}></i>
        <h2>Edit User</h2>
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
            Update
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
