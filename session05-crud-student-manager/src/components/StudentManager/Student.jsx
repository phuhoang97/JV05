import React from "react";

// R-5: Nhập dữ liệu từ ListStudent
// U-8: Nhận hàm handleEditStudent từ component ListStudent
function Student({
  studentKey,
  inforStudent,
  handleEditStudent,
  handleDeleteStudent,
}) {
  // U-2: Viết hàm handleEdit trong hàm: index, toggle, actionName
  const handleEdit = (student) => {
    handleEditStudent(student, true, "UPDATE");
  };
  return (
    // R-6: Hiển thị dữ liệu nhận được
    <tr key={studentKey}>
      <td>{studentKey + 1}</td>
      <td>{inforStudent.studentId}</td>
      <td>{inforStudent.studentName}</td>
      <td>{inforStudent.studentAge}</td>
      <td>
        {inforStudent.gender === "Nam"
          ? "Nam"
          : inforStudent.gender === "Nữ"
          ? "Nữ"
          : "Khác"}
      </td>
      <td>
        <div className='template-demo'>
          <button type='button' className='btn btn-danger btn-icon-text'>
            Xem
          </button>
          {/* U-1: Xây dựng hàm để nhận được index */}
          <button
            type='button'
            className='btn btn-warning btn-icon-text'
            onClick={() => handleEdit(inforStudent)}
          >
            Sửa
          </button>
          <button
            type='button'
            className='btn btn-success btn-icon-text'
            onClick={() => handleDeleteStudent(inforStudent.studentId)}
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Student;
