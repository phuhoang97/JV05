import React, { Component } from "react";
import ChildrentComp from "./ChildrentComp";

export default class ParentComp extends Component {
  // Props:
  // Props là viết tắt của properties
  // Dùng để lưu trữ các attribute
  // Giúp cho việc truyền dữ liệu từ component cha xuống component con
  // => giúp cho việc giao tiếp giữa các component với nhau
  // Giá trị của props không thay đổi

  //   Parent => Childrent
  render() {
    const greeting = "Welcome to RA !!!"; // dynamic
    const person = {
      name: "Ánh",
      age: 20,
    };
    return (
      <div>
        <h2>Parent Component</h2>
        <ChildrentComp mess={greeting} course={"ReactJS"} person={person}>
          Hello World
        </ChildrentComp>
      </div>
    );
  }
}
