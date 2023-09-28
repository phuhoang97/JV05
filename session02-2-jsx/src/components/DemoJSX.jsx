// rcc

import React, { Component } from "react";
import "./DemoJSX.css";

export default class DemoJSX extends Component {
  // Trong react sử dụng cú pháp của JSX là cú pháp kết hợp giữa JS + XML
  render() {
    const greeting = "Hello World !!!";
    const student = {
      name: "Vân Anh",
      age: 50,
    };
    // Lưu ý khi dụng css trong ReactJS
    // + Khi sử dụng css inline các thuộc tính sẽ được viết theo kiểu camelCase
    // Ví dụ: background-color => backgroundColor
    // + Khi sử dụng css external thì class => className
    // + Khi sử dụng các sự kiện cũng sẽ viết theo kiểu camelCase

    function f() {
      alert("Welcome to RA !!!");
    }

    return (
      <div>
        {/* Phép nội suy trong JSX */}
        <h2 style={{ backgroundColor: "pink" }}>{greeting}</h2>
        <p className='infor-student'>
          Student name: {student.name} - student age: {student.age}
        </p>
        {/* <div /> */}
        <button onClick={f}>Click Me !!!</button>
      </div>
    );
  }
}
