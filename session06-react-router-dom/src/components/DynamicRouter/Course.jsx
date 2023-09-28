import React from "react";
import { useSearchParams } from "react-router-dom";

function Course() {
  // useSearchParams: dùng để sửa string trên url
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ReactJS</td>
            <td>1200</td>
            <td>
              <button
                onClick={() =>
                  setSearchParams({ courseName: "ReactJS", price: "1200" })
                }
              >
                Detail
              </button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Java</td>
            <td>1000</td>
            <td>
              <button
                onClick={() =>
                  setSearchParams({ courseName: "Java", price: "1000" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Chi tiết khóa học</h3>
      <p>
        Khóa học tên: {searchParams.get("courseName")} - Giá tiền:
        {searchParams.get("price")}
      </p>
    </div>
  );
}

export default Course;
