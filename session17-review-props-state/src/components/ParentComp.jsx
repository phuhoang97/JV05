import React, { useState } from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";

function ParentComp() {
  // R-1: Xây dựng dữ liệu student
  const [students, setStudents] = useState([
    {
      studentId: "SV001",
      studentName: "Nguyễn Văn A",
      age: 20,
      gender: "Nam",
      birthDate: "2003-04-15",
      birthPlace: "HN",
      address: "Số 1 Phạm Hùng",
    },
    {
      studentId: "SV002",
      studentName: "Nguyễn Thị B",
      age: 22,
      gender: "Nữ",
      birthDate: "2001-09-09",
      birthPlace: "ĐN",
      address: "Số 1 Trần Duy Hưng",
    },
    {
      studentId: "SV003",
      studentName: "Nguyễn Văn C",
      age: 18,
      gender: "Nam",
      birthDate: "2005-11-22",
      birthPlace: "HCM",
      address: "22 Lý Tự Trọng",
    },
  ]);

  // C-1: State toggle
  const [toggle, setToggle] = useState(false);
  const [selectStudent, setSelectStudent] = useState({});
  const [action, setAction] = useState("Add");
  // C-2: Khai báo hàm => truyền xuống control
  const handleToggle = (toggle) => {
    setToggle(toggle);
    setAction("Add");
    setSelectStudent({});
  };

  // C-9: Viết hàm handleSubmit
  const handleSubmit = (newStudent, toggle) => {
    setStudents([...students, newStudent]);
    setToggle(toggle);
  };

  const handleDelete = (id) => {
    const data = students.filter((e) => e.studentId !== id);
    setStudents(data);
  };

  const handleEdit = (student, action, toggle) => {
    setSelectStudent(student);
    setToggle(!toggle);
    setAction(action);
  };

  const handleUpdate = (newStudent, toggle) => {
    const updateStudent = students.map((item) =>
      item.studentId === newStudent.studentId ? newStudent : item
    );
    setStudents(updateStudent);
    setToggle(toggle);
    setAction("Add");
  };

  return (
    <div className='row'>
      <div className='col-lg-7 grid-margin stretch-card'>
        <div className='card'>
          {/* START CONTROL */}
          {/* C-3: Truyền handleToggle xuống */}
          <Control
            handleToggle={handleToggle}
            toggle={toggle}
            action={action}
          />
          {/* END CONTROL */}
          {/* START LIST STUDENT */}

          {/* R-2: Truyền dữ liệu xuống ListStudent */}
          <ListStudent
            students={students}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      {/* C-6: Viết logic render có điều kiện */}
      {/* C-10: Truyền hàm handleSubmit xuống */}
      {toggle ? (
        <Form
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          selectStudent={selectStudent}
          action={action}
          setSelectStudent={setSelectStudent}
        />
      ) : (
        ""
      )}
      {/* END FORM SINH VIÊN */}
    </div>
  );
}

export default ParentComp;
