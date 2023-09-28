import React, { Component } from "react";

export default class DemoForm4 extends Component {
  constructor() {
    super();
    this.state = {
      selectRadio: "Male",
    };
  }

  handleChange = (e) => {
    this.setState({
      selectRadio: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(` Giới tính: ${this.state.selectRadio}`);
  };
  render() {
    return (
      <div>
        <h3>Xử lý radio trong form</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type='radio'
            value={"Male"}
            name='gender'
            checked={this.state.selectRadio === "Male"}
            onChange={this.handleChange}
          />
          <label>Nam</label>
          <br />
          <input
            type='radio'
            value={"Female"}
            name='gender'
            checked={this.state.selectRadio === "Female"}
            onChange={this.handleChange}
          />
          <label>Nữ</label>
          <br />
          <input
            type='radio'
            value={"Other"}
            checked={this.state.selectRadio === "Other"}
            name='gender'
            onChange={this.handleChange}
          />
          <label>Khác</label>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
