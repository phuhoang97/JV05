import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postCars, putCars } from "../redux/carsSlice";

function CarForm({ select, setSelect }) {
  const [inputForm, setInputForm] = useState({
    id: "",
    name: "",
    price: "",
  });

  const dispatch = useDispatch();

  const { name, price } = inputForm;

  const handleChangeInput = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (select) {
      dispatch(putCars({ inputForm: inputForm, id: select.id }));
      setSelect("");
    } else {
      dispatch(postCars(inputForm));
    }
    setInputForm({ name: "", price: "" });
  };

  useEffect(() => {
    if (select) {
      setInputForm({
        name: select.name,
        price: select.price,
      });
    }
  }, [select]);

  return (
    <div>
      <h2>Cars Form</h2>
      <form onSubmit={handleSubmitForm}>
        <label>Name</label>
        <input
          type='text'
          value={name}
          name='name'
          onChange={handleChangeInput}
        />
        <br />
        <label>Price</label>
        <input
          type='text'
          value={price}
          name='price'
          onChange={handleChangeInput}
        />
        <br />
        <button type='submit'>{select ? "Update Car" : "Add Car"}</button>
      </form>
    </div>
  );
}

export default CarForm;
