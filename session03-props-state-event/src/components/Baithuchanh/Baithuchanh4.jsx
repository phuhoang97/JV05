import React, { Component } from "react";

export default class Baithuchanh4 extends Component {
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

  handleClick = () => {
    alert(this.state.text);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChangeInput} />
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}
