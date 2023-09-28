import React, { Component } from "react";

export default class Baithuchanh5 extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      number: "",
      total: 0,
    };
  }
  handleChangeValue = (e) => {
    this.setState({
      number: +e.target.value,
    });
  };
  handleSubmit = () => {
    this.setState({
      arr: [...this.state.arr, this.state.number],
      total: this.state.total + this.state.number,
      number: "",
    });
  };
  render() {
    return (
      <div>
        <input
          value={this.state.number}
          onChange={this.handleChangeValue}
          type='number'
        />
        <button onClick={this.handleSubmit}>click me</button>
        <p>{this.state.arr.join("+") + " = " + this.state.total}</p>
      </div>
    );
  }
}
