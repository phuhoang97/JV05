import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_list_random } from "../redux/action";

function ListComp() {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>List Number</h1>
      <p>{list.toString()}</p>
      <button onClick={() => dispatch(act_list_random())}>Random</button>
    </div>
  );
}

export default ListComp;
