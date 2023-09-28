import React, { useEffect, useState } from "react";
import SlideBar from "./SlideBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteCars, fetchCars } from "../redux/carsSlice";
import CarForm from "./CarForm";
import { Link } from "react-router-dom";

function CarList() {
  const cars = useSelector((state) => state.cars.cars);
  const status = useSelector((state) => state.cars.status);
  const dispatch = useDispatch();

  const [select, setSelect] = useState("");

  // Tính chất:
  //   + Sẽ được gọi khi component mount
  //   + Sẽ gọi khi deps thay đổi || dispatch
  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  if (status === "loading") {
    return (
      <div style={{ fontSize: "50px", textAlign: "center" }}>Loading ...</div>
    );
  }

  const handleDelete = (id) => {
    dispatch(deleteCars(id));
  };

  const handleEditCar = (car) => {
    setSelect(car);
  };

  return (
    <div>
      <SlideBar />
      <h2 style={{ textAlign: "center" }}>Car List</h2>
      <table
        border={1}
        align='center'
        width={"30%"}
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((element, index) => (
            <tr key={element.id}>
              <td>{index + 1}</td>
              <td>{element.name}</td>
              <td>{element.price}</td>
              <td>
                <button onClick={() => handleEditCar(element)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(element.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span>
        <CarForm select={select} setSelect={setSelect} />
      </span>
    </div>
  );
}

export default CarList;
