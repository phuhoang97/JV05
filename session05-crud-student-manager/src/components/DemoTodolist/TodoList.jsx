// rfce

import React, { useState } from "react";

function TodoList() {
  // todolist: ["homework", "go to sleep", ...]
  // Bước 1: Khai báo các state lưu trữ dữ liệu
  // + state todo dùng để chứa tất cả dữ liệu từ ng dùng nhập
  const [todo, setTodo] = useState([]);
  // + state text dùng để lấy dữ liệu từ ô input
  const [text, setText] = useState("");

  // Bước 2: Viết hàm handleChangeInput để lấy sự thay đổi trong ô input
  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  // Bước 3: Viết hàm handleAddTodo để thêm dữ liệu từ ng dùng vào state todo
  const handleAddTodo = () => {
    setTodo([...todo, { text: text, complete: false }]);
    setText("");
  };

  // Bước 5: SD splice() để xóa theo vị trí index
  const handleDelete = (id) => {
    const deleteTodo = [...todo];
    deleteTodo.splice(id, 1);
    setTodo(deleteTodo);
  };

  // Bước 6: Làm chức năng complete
  const handleToggle = (id) => {
    const todoComplete = todo.map((e, i) =>
      id === i ? { ...e, complete: !e.complete } : e
    );
    setTodo(todoComplete);
  };

  // Bước 7: Làm chức năng update
  const [editIndex, setEditIndex] = useState(-1); // mảng => chạy từ 0 => length - 1
  const [editText, setEditText] = useState("");

  // handleEdit để lấy index của phần tử
  const handleEdit = (id) => {
    // set lại giá trị index
    setEditIndex(id);
    // set lại giá trị ô input
    setEditText(todo[id].text);
  };

  // Viết hàm handleUpdate để cập nhật lại giá trị
  // arrName[vị trí index] = giá trị mới
  const handleUpdate = () => {
    const updateTodo = [...todo];
    updateTodo[editIndex].text = editText;
    setTodo(updateTodo);
    setEditIndex(-1);
  };

  return (
    <div>
      <h3>Todolist</h3>
      <input type='text' value={text} onChange={handleChangeInput} />
      <button onClick={handleAddTodo}>Add</button>
      {/* Bước 4: Hiển thị dữ liệu từ todo */}
      <ul>
        {todo.map((element, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type='text'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </div>
            ) : (
              <div>
                <span
                  onClick={() => handleToggle(index)}
                  style={{
                    textDecoration: element.complete ? "line-through" : "none",
                  }}
                >
                  {element.text}
                </span>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
