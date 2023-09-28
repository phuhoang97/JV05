// rcc

import React, { Component } from "react";

export default class Bai1 extends Component {
  render() {
    const course = ["HTML", "CSS", "Javascript", "ReactJS"];
    return (
      <div>
        <div style={{ border: "1px solid black", margin: "10px" }}>
          <h2>Danh sách khóa học</h2>
          <ul>
            {course.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
