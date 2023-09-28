import React, { Component } from "react";

export default class DemoForm1 extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChangeInput = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Tên người dùng là: ${this.state.text}`);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Xử lý form với 1 ô input</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.text}
            onChange={this.handleChangeInput}
          />
          <button type='submit'>Click</button>
        </form>
      </div>
    );
  }
}
