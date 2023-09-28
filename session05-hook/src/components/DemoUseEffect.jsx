import React, { useEffect, useState } from "react";

function DemoUseEffect() {
  // useEffect là 1 hook được cung cấp bởi react
  // Dùng để: call API, update DOM, listen event DOM, ...
  // Cú pháp: useEffect(callback, [deps])
  // Các trường hợp trong useEffect

  // - Trường hợp 1: useEffect(callback)
  // Tính chất:
  // + useEffect luôn được gọi mỗi khi component mount
  // + useEffect sẽ được gọi lại mỗi khi component re-render
  // + Gọi callback ngay sau khi element được thêm vào DOM

  // ví dụ:
  //   const [count, setCount] = useState(10);
  //   useEffect(() => {
  //     console.log("Đang được chạy khi component mount");
  //   });

  // componentWillMount => render => componentDidMount
  // useEffect tương đương với giai đoạn componentDidMount và componentDidUpdate

  // - Trường hợp 2: useEffect(callback, []) => ở trong phiên bản dưới 18.x: [] được gọi là cleanUp
  // => còn trong phiên bản 18.x được gọi là dependencies => deps
  // Tính chất:
  // + useEffect luôn được gọi mỗi khi component mount
  // + useEffect sẽ chỉ được gọi 1 lần khi component mount

  // + Ví dụ:
  //   const [count, setCount] = useState(10);
  //   useEffect(() => {
  //     console.log("Đang được chạy khi component mount");
  //   }, []);

  // - Trường hợp 3: useEffect(callback, [deps])
  // - Tính chất:
  // + useEffect luôn được gọi mỗi khi component mount
  // + useEffect sẽ được gọi mỗi khi deps thay đổi
  // - Ví dụ:
  const [count, setCount] = useState(10);
  const [text, setText] = useState("Hello");
  useEffect(() => {
    console.log("Đang được chạy khi component mount");
  }, [count, text]);

  return (
    <div>
      <h3>Demo useEffect</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>

      <p>{text}</p>
      <button onClick={() => setText("Welcome to RA")}>Click</button>
    </div>
  );
}

export default DemoUseEffect;
