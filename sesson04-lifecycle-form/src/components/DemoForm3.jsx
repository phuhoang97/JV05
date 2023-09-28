import React, { Component } from "react";

export default class DemoForm3 extends Component {
  constructor() {
    super();
    this.state = {
      studentName: "",
      studentAge: "",
      course: "ReactJS",
    };
  }
  handleChange = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    this.setState({
      [nameInput]: valueInput,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(` 
    Tên SV: ${this.state.studentName}
    Tuổi SV: ${this.state.studentAge}
    Khóa học: ${this.state.course}
    `);

    this.setState({
      studentName: "",
      studentAge: "",
      course: "ReactJS",
    });
  };

  render() {
    return (
      <div>
        <h3>Xử lý multiple form input</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Tên sinh viên:</label>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.studentName}
            name='studentName'
          />
          <br />
          <label>Tuổi sinh viên:</label>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.studentAge}
            name='studentAge'
          />
          <br />
          <label>Chọn khóa học: </label>
          <select
            onChange={this.handleChange}
            value={this.state.course}
            name='course'
          >
            <option value='HTML'>HTML</option>
            <option value='CSS'>CSS</option>
            <option value='Javascript'>Javascript</option>
            <option value='ReactJS'>ReactJS</option>
          </select>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
