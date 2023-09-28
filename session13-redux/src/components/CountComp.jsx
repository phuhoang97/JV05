import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Bước 11: Import action để sử dụng dispatch gửi lên store
import { act_count_up, act_count_down } from "../redux/action";

function CountComp() {
  // Bước 8: Lấy value state => useSelector
  const count = useSelector((state) => state.count);

  // Bước 9: Sử dụng useDispatch => để gửi action lên cho Store
  const dispatch = useDispatch();

  console.log(act_count_down);

  return (
    <div>
      <h1>Count Component</h1>
      <p>{count}</p>
      {/* {console.log("Bước 3: Hiển thị state")} */}
      <button onClick={() => dispatch(act_count_down(5))}>Down</button>
      <button onClick={() => dispatch(act_count_up(10))}>Up</button>
    </div>
  );
}

export default CountComp;
