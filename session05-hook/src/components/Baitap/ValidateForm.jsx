import React, { useState } from "react";

const ValidateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const validateField = (name, value) => {
    let errorMessage = "";
    if (name === "name") {
      if (!value.trim()) {
        errorMessage = "Vui lòng nhập tên.";
      }
    } else if (name === "email") {
      if (!value.trim()) {
        errorMessage = "Vui lòng nhập email.";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errorMessage = "Email không hợp lệ.";
      }
    }
    return errorMessage;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Kiểm tra và cập nhật lỗi chỉ khi người dùng đã rời khỏi trường
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Kiểm tra validate cho tất cả các trường khi người dùng submit form
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
    };
    setErrors(newErrors);

    // Nếu không có lỗi thì xử lý dữ liệu
    if (!newErrors.name && !newErrors.email) {
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tên:</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <button type='submit'>Gửi</button>
    </form>
  );
};

export default ValidateForm;
