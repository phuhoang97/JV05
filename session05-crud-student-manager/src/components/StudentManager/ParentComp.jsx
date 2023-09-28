import React, { useState } from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";

function ParentComp() {
  // R-1: Khai báo state lưu trữ thông tin student
  const [students, setStudents] = useState([
    {
      studentId: "SV001",
      studentName: "Vân Anh",
      studentAge: "20",
      gender: "Nam",
      birthDay: "12/02/2000",
      birthPlace: "HN",
      address: "HN",
    },
    {
      studentId: "SV002",
      studentName: "Ánh Ánh",
      studentAge: "22",
      gender: "Nữ",
      birthDay: "14/02/2002",
      birthPlace: "HCM",
      address: "HN",
    },
    {
      studentId: "SV003",
      studentName: "Thùy",
      studentAge: "24",
      gender: "Nữ",
      birthDay: "18/02/1996",
      birthPlace: "DN",
      address: "HN",
    },
  ]);

  // C-1: toggle create student
  const [toggle, setToggle] = useState(false);
  const [actionName, setActionName] = useState("Add");

  // C-2: xây dựng hàm để truyền xuống component con
  const handleToggleAction = (toggle, action) => {
    setToggle(toggle);
    setActionName(action);
  };

  // C-11: Viết hàm handleSubmitAdd
  const handleSubmitAdd = (newStudent, toggle) => {
    setStudents([...students, newStudent]);
    setToggle(toggle);
  };

  // U-3: Khai báo state để lưu trữ student
  const [selectStudent, setSelectStudent] = useState({});

  // U-4: Khai báo hàm để truyền xuống listStudent => Student
  const handleEdit = (selectStudent, toggle, action) => {
    setSelectStudent(selectStudent);
    setToggle(toggle);
    setActionName(action);
  };

  // U-13: Viết hàm handleSubmitUpdate
  const handleSubmitUpdate = (objStudent, toggle) => {
    console.log(objStudent);
    const update = students.map((e) =>
      e.studentId === objStudent.studentId ? objStudent : e
    );
    setStudents(update);
    setToggle(toggle);
  };

  // D-1: Viết hàm handleDeleteStudent để truyền xuống component listStudent
  const handleDeleteStudent = (student) => {
    console.log(student);
    // sử dụng filter để tạo ra 1 mảng mới chứa tất cả student trừ student được chọn
    const deleteStudent = students.filter((e) => e.studentId !== student);
    console.log(deleteStudent);
    setStudents(deleteStudent);
  };

  return (
    <div className='row'>
      <div className='col-lg-7 grid-margin stretch-card'>
        <div className='card'>
          {/* START CONTROL */}
          {/* C-3: Truyền xuống componet Control */}
          <Control handleToggleAction={handleToggleAction} toggle={toggle} />
          {/* END CONTROL */}
          {/* START LIST STUDENT */}
          {/* R-2: Truyền data xuống component con (ListStudent) */}
          {/* U-5: Truyền hàm xuống component Form */}
          <ListStudent
            listStudentProps={students}
            handleEdit={handleEdit}
            handleDeleteStudent={handleDeleteStudent}
          />
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      {/* C-6: SD toggle để làm chức năng bật tắt */}
      {/* U-8: Truyền ActionName để xử lý button update */}
      {/* U-11: Truyền selsectStudent để truyền đối tượng xuống */}
      {/* U-14: Truyền hàm handleSubmitUpdate xuống */}
      {toggle ? (
        <Form
          handleSubmitAdd={handleSubmitAdd}
          actionName={actionName}
          selectStudent={selectStudent}
          handleSubmitUpdate={handleSubmitUpdate}
        />
      ) : (
        ""
      )}

      {/* END FORM SINH VIÊN */}
    </div>
  );
}

export default ParentComp;
