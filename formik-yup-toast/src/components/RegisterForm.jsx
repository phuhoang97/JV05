import React from "react";
// 1. import formik => formik chịu trách nhiệm xử lý các trạng thái của form
import { useFormik } from "formik";

import * as Yup from "yup";
import { toast } from "react-toastify";

function RegisterForm() {
  // 2. Khai báo formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    // Sử dụng yup để validate các giá trị trong form
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Your name must be at least 5 characters!")
        .max(25, "Your name must be under 25 characters!")
        .required("You must fill in this section"),
      email: Yup.string()
        .email("Invalid Email")
        .required("You must fill in this section"),
      address: Yup.string().required("You must fill in this section"),
      password: Yup.string()
        .min(8, "Your name must be at least 8 characters!")
        .required("You must fill in this section"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password does not match")
        .required("You must fill in this section"),
    }),
    onSubmit: async (values) => {
      // Simulate an async operation, for example, an API call
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log(values);

      // Show success toast
      toast.success("Registration successful!");
    },
  });

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Khai báo value cho các input */}
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
