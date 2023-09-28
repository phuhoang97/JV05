import React from "react";

// R-5: Nhận giá trị từ ListStudent
function Student({ inforStudent, index, handleDelete, handleEditSt }) {
  const handleEditStudent = (newStudent) => {
    handleEditSt(newStudent, "Update", false);
  };
  return (
    <tr key={inforStudent.studentId}>
      <td>{index + 1}</td>
      <td>{inforStudent.studentId}</td>
      <td>{inforStudent.studentName}</td>
      <td>{inforStudent.age}</td>
      <td>{inforStudent.gender}</td>
      <td>
        <div className='template-demo'>
          <button type='button' className='btn btn-danger btn-icon-text'>
            Xem
          </button>
          <button
            type='button'
            className='btn btn-warning btn-icon-text'
            onClick={() => handleEditStudent(inforStudent)}
          >
            Sửa
          </button>
          <button
            type='button'
            className='btn btn-success btn-icon-text'
            onClick={() => handleDelete(inforStudent.studentId)}
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Student;
