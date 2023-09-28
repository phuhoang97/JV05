// rcc
import React, { Component } from "react";

export default class Event extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1 = () => {
    console.log("Button 01");
  };

  // Chỉ thực thi 1 lần khi component render
  handleClick2 = () => {
    console.log("Button 02");
  };

  // Function thường
  handleClick3() {
    this.setState({
      count: 10,
    });
    console.log("Button 03");
  }

  // Chỉ thực thi 1 lần khi component render
  handleClick4() {
    console.log("Button 04");
  }

  handleClick5 = () => {
    console.log("Button 05");
  };

  handleClick6 = (element) => {
    console.log("Button 06");
    console.log(element);
  };

  render() {
    return (
      <div>
        <h3>Event</h3>
        {/* Không truyền đối số */}
        <button onClick={this.handleClick1}>Button 01</button>
        <button onClick={this.handleClick2()}>Button 02</button>
        {/* Truyền đối số lên */}
        <button onClick={() => this.handleClick5}>Button 05</button>
        <button onClick={() => this.handleClick6("Heyyy Vân Anh !!!")}>
          Button 06
        </button>
      </div>
    );
  }
}
