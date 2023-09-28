import React from "react";

// C-4: Nhận hàm và state toggle
function Control({ handleToggle, toggle }) {
  // C-5: Khai báo hàm để set lại giá trị toggle
  const handleToggleControl = () => {
    handleToggle(!toggle, "Add");
  };
  return (
    <div className='card-header'>
      <div className='row'>
        <div className='col-3'>
          <button
            type='button'
            className='btn btn-primary btn-icon-text'
            onClick={handleToggleControl}
          >
            Thêm mới sinh viên
          </button>
        </div>
        <div className='col-6'>
          <form className='search-form' action='#'>
            <i className='icon-search' />
            <input
              type='search'
              className='form-control'
              placeholder='Search Here'
              title='Search here'
            />
            <button className='btn btn-primary btn-icon-text'>Tìm kiếm</button>
          </form>
        </div>
        <div className='col-3 d-flex align-items-center'>
          <select className='form-control'>
            <option value=''>Sắp xếp</option>
            <option value=''>ABC def</option>
            <option value=''>ABC def</option>
            <option value=''>ABC def</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Control;
