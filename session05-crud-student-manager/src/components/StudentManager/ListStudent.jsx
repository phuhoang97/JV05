import React from "react";
import Student from "./Student";

// R-3: Nhận dữ liệu từ cha bằng props
// U-6: Nhận hàm handleEdit từ parent
function ListStudent({ listStudentProps, handleEdit, handleDeleteStudent }) {
  return (
    <div className='card-body'>
      <h3 className='card-title'>Danh sách sinh viên</h3>
      <div className='table-responsive pt-3'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {/* R-4: Duyệt qua các ptu và truyền xuống component Student */}
            {/* U-7: Truyền hàm xuống tiếp cho component Student */}
            {listStudentProps.map((element, index) => (
              <Student
                handleDeleteStudent={handleDeleteStudent}
                key={index}
                studentKey={index}
                inforStudent={element}
                handleEditStudent={handleEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListStudent;
