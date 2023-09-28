import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  decremented,
  deleteTask,
  incremented,
  setNewTask,
  toggleTask,
} from "../redux/todoSlice";

function TodoList() {
  const count = useSelector((state) => state.todos.count);
  const task = useSelector((state) => state.todos.task);
  const newTask = useSelector((state) => state.todos.newTask);
  // todolist: ["todo1", "todo2"]
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(
      addTask({
        id: Date.now(),
        text: newTask,
        completed: false,
      })
    );
    dispatch(setNewTask(""));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <div>
        <h1>Tăng / giảm count</h1>
        <p>{count}</p>
        <button onClick={() => dispatch(decremented(2))}>Down</button>
        <button onClick={() => dispatch(incremented(4))}>Up</button>
      </div>

      <div>
        <h1>TodoList</h1>
        <input
          type='text'
          value={newTask}
          onChange={(e) => dispatch(setNewTask(e.target.value))}
        />
        <button onClick={handleAddTask}>Add</button>
        <ul>
          {task.map((e, i) => (
            <li key={i}>
              <span
                onClick={() => dispatch(toggleTask(e.id))}
                style={{
                  textDecoration: e.completed ? "line-through" : "none",
                }}
              >
                {e.text}
              </span>
              <button onClick={() => handleDeleteTask(e.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
