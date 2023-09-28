// rfce

import React from "react";
import { useState } from "react";

function DemoState() {
  // 1. useState là 1 hook được cung cấp và tích hợp sẵn trong reactjs
  // Sử dụng để lưu trữ dữ liệu trong component

  // 2. Cú pháp:
  // const [nameState, setNameState] = useState(0)
  // trong đó:
  // nameState: là tên state
  // setNameState: là tên hàm dùng để set lại giá trị cho state
  // 0: là giá trị khởi tạo => nameState = 0

  // 3. Ví dụ:
  const [count, setCount] = useState(0);

  // 4. Kiểu dữ liệu: Kiểu dữ liệu nguyên thủy và kiểu dữ liệu tham chiếu
  // 4.1. Kiểu dữ liệu nguyên thủy
  // String:
  const [text, setText] = useState("Welcome to RA !!!");

  const handleChangeText = () => {
    setText("Học điiii");
  };

  // camelCase

  // 4.2. Kiểu dữ liệu tham chiếu
  // Array
  const [arrNumber, setArrNumber] = useState([1, 2, 3, 4]);
  const handleRandom = () => {
    setArrNumber([...arrNumber, Math.floor(Math.random() * 10)]);
  };

  // Object
  const [objList, setObjList] = useState({
    objNumber: 10,
    objArr: [10, 20, 30],
  });

  const handleRandomObj = () => {
    setObjList({
      ...objList,
      objArr: [...objList.objArr, Math.floor(Math.random() * 10)],
    });
  };

  // Array + Object (JSON)
  const [data, setData] = useState([
    { id: 1, student: "Vân Anh", age: "52" },
    { id: 2, student: "Thùy", age: "22" },
    { id: 3, student: "Ánh Ánh", age: "20" },
  ]);

  return (
    <div>
      <h3>Demo useState</h3>
      <h5>Number</h5>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <h5>String</h5>
      <p>{text}</p>
      <button onClick={handleChangeText}>Change</button>
      <h5>Array</h5>
      <p>{arrNumber.toString()}</p>
      <button onClick={handleRandom}>Random</button>
      <h5>Object</h5>
      <p>{objList.objNumber}</p>
      <button
        onClick={() =>
          setObjList({
            ...objList,
            objNumber: objList.objNumber + 1,
            // objArr: objList.objArr,
          })
        }
      >
        Up count in Obj
      </button>
      <p>{objList.objArr.toString()}</p>
      <button onClick={handleRandomObj}>Random in obj</button>

      <h5>Array + Object</h5>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <td>{element.id}</td>
              <td>{element.student}</td>
              <td>{element.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoState;
