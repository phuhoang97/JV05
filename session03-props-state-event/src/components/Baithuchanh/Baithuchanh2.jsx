import React, { Component } from "react";

export default class Baithuchanh2 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  //   handleChangeNumber = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   };
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
