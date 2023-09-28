import React from "react";
// Bước 1: Import useFormik => formik chịu trách nhiệm xử lý các trạng thái trong form
import { useFormik } from "formik";
// Bước 3: Import yup => yup chịu trách nhiệm xử lý validate cho form
import * as Yup from "yup";
import { toast } from "react-toastify";

function RegisterForm() {
  // Bước 2: Khai báo formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    // Bước 4: Sử dụng yup để viết các điều kiện cho input
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Cần nhiều hơn 5 ký tự")
        .max(25, "không được nhập quá 25 ký tự")
        .required("Không được để trống"),
      email: Yup.string()
        .email("Email chưa đúng định dạng")
        .required("Không được để trống"),
      address: Yup.string().required("Không được để trống"),
      password: Yup.string()
        .min(8, "Nhập nhiều hơn 8 ký tự")
        .required("Không được để trống"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp")
        .required("Không được để trống"),
    }),

    onSubmit: (values) => {
      toast("Đăng ký thành công !!!");
    },
  });

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )}
        <br />
        <label>Email: </label>
        <input
          type='text'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}
        <br />
        <label>Address: </label>
        <input
          type='text'
          name='address'
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {formik.errors.address && formik.touched.address && (
          <p style={{ color: "red" }}>{formik.errors.address}</p>
        )}
        <br />
        <label>Password: </label>
        <input
          type='text'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && formik.touched.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}
        <br />
        <label>Confirm Password: </label>
        <input
          type='text'
          name='confirmPassword'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
        )}
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
