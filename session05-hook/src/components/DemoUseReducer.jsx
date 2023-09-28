import React, { useState, useMemo } from "react";

function ExpensiveComponent() {
  // Tạo ra một mảng chứa 1 triệu phần tử
  const data = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 1000000; i++) {
      arr.push(i);
    }
    return arr;
  }, []);

  return <p>Data length: {data.length}</p>;
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Component</button>
      {show && <ExpensiveComponent />}
    </div>
  );
}

export default App;
