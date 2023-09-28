import React, { useRef, useState } from "react";

function DemoRef() {
  // useRef là 1 hook được cung cấp bởi react. sẽ trả về 1 đối tượng có key là current
  const [count, setCount] = useState(60);

  let timer = useRef();

  const handleStart = () => {
    timer.current = setInterval(() => setCount((pre) => pre - 1), 1000);
    console.log("timer start", timer);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    console.log("timer stop", timer);
  };
  return (
    <div>
      <h3>Demo useRef</h3>
      <p>{count}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default DemoRef;
