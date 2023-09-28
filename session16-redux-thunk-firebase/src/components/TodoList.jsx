import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../redux/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todolist.task);
  const status = useSelector((state) => state.todolist.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idel") {
      dispatch(fetchApi());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h1>todolist</h1>
      <ul>
        {todos.map((e) => (
          <li>{e.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
