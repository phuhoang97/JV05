import React, { useState } from "react";

function Thuchanh1() {
  const [count, setCount] = useState(0);

  const handleUp = () => {
    setCount(count + 1);
  };
  const handleDown = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Số lần đếm : {count} </p>
      <button onClick={handleUp}>up</button>
      <button onClick={handleDown}>down</button>
    </div>
  );
}

export default Thuchanh1;
