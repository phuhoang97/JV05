import React, { Component } from "react";

export default class ChildBai1 extends Component {
  render() {
    return (
      <div>
        <button
          style={{ color: this.props.color, background: this.props.background }}
        >
          Click me !!!
        </button>
      </div>
    );
  }
}
