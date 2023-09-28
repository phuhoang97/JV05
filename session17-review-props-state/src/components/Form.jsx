import React, { useEffect, useState } from "react";

// C-11: Nhận hàm handleSubmit

function Form({
  handleSubmit,
  handleUpdate,
  selectStudent,
  action,
  setSelectStudent,
}) {
  // C-7: Khai báo state chứa newStudent
  const [newStudent, setNewStudent] = useState({
    studentId: "",
    studentName: "",
    age: 0,
    gender: "Nam",
    birthDate: "",
    birthPlace: "",
    address: "",
  });

  const {
    studentId,
    studentName,
    age,
    gender,
    birthDate,
    birthPlace,
    address,
  } = newStudent;

  // C-8: Viết hàm handleChangeInput để lấy giá trị các ô input
  const handleChangeInput = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  // C-12: Viết hàm handleSubmitForm
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(newStudent, false);
    setSelectStudent({});
  };

  useEffect(() => {
    setNewStudent(selectStudent);
  }, [selectStudent]);

  const handleUpdateForm = (e) => {
    e.preventDefault();
    handleUpdate(newStudent, false);
    setSelectStudent({});
  };
  return (
    <div className='col-5 grid-margin'>
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title'>Thông tin sinh viên</h3>
          <form
            className='form-sample'
            onSubmit={action === "Add" ? handleSubmitForm : handleUpdateForm}
          >
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Mã sinh viên</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  name='studentId'
                  value={studentId}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Tên sinh viên</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  name='studentName'
                  value={studentName}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Tuổi</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  name='age'
                  value={age}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Giới tính</label>
              <div className='col-sm-9'>
                <select
                  className='form-control'
                  name='gender'
                  value={gender}
                  onChange={handleChangeInput}
                >
                  <option value={"Nam"}>Nam</option>
                  <option value={"Nữ"}>Nữ</option>
                  <option value={"Khác"}>Khác</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Ngày sinh</label>
              <div className='col-sm-9'>
                <input
                  className='form-control'
                  placeholder='dd/mm/yyyy'
                  name='birthDate'
                  value={birthDate}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Nơi sinh</label>
              <div className='col-sm-9'>
                <select
                  className='form-control'
                  name='birthPlace'
                  value={birthPlace}
                  onChange={handleChangeInput}
                >
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"DN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Địa chỉ</label>
              <div className='col-sm-9'>
                <textarea
                  className='form-control'
                  name='address'
                  value={address}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <button type='submit' className='btn btn-primary me-2'>
              {action === "Add" ? "Submit" : "Update"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
