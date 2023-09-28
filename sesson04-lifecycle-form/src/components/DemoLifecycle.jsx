import React, { Component } from "react";

export default class DemoLifecycle extends Component {
  // Vòng đời của component:
  // => Khởi tạo => Mounting (Render lần đầu tiên) => Updating (Re-render) => unmounting (Tháo gỡ)

  // Các phương thức trong các giai đoạn
  // 1. Khởi tạo: Khai báo các state, props, ...
  // 2. Mounting: componentWillMount => render => componentDidMount
  // 3. Updation: componentDidUpdate
  // 4. unmounting: componentWillUnmount

  UNSAFE_componentWillMount() {
    console.log("componentWillMount được chạy");
  }

  componentDidMount() {
    console.log("componentDidMount được chạy");
  }

  render() {
    console.log("Render được chạy");
    return <div>DemoLifecycle</div>;
  }
}
