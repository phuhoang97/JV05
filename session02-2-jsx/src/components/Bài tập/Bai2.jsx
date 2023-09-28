import React, { Component } from "react";

export default class Bai2 extends Component {
  render() {
    const number1 = +prompt("Nhập số thứ 1");
    const number2 = +prompt("Nhập số thứ 2");
    return (
      <div>
        <div>
          <h3>
            Tổng của {number1} và {number2} là {number1 + number2}
          </h3>
        </div>
      </div>
    );
  }
}
