import React, { Component } from "react";

export default class DemoForm2 extends Component {
  constructor() {
    super();
    this.state = {
      course: "ReactJS",
    };
  }

  handleChange = (e) => {
    this.setState({
      course: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(` Khóa học bạn chọn là: ${this.state.course}`);
    this.setState({
      course: "HTML",
    });
  };

  render() {
    return (
      <div>
        <h3>Xử lý form với select và option</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor=''>Chọn khóa học: </label>
          <select onChange={this.handleChange} value={this.state.course}>
            <option value='HTML'>HTML</option>
            <option value='CSS'>CSS</option>
            <option value='Javascript'>Javascript</option>
            <option value='ReactJS'>ReactJS</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
