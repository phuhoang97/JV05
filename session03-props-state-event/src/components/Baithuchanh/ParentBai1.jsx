import React, { Component } from "react";
import ChildBai1 from "./ChildBai1";

export default class ParentBai1 extends Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      background: "blue",
    };
  }
  render() {
    return (
      <div>
        <ChildBai1
          color={this.state.color}
          background={this.state.background}
        />
      </div>
    );
  }
}
