import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  fullName: yup.string().required("Họ và tên không được để trống"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Email không được để trống"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 kí tự")
    .required("Mật khẩu không được để trống"),
});

const DemoYupFormik = () => {
  const handleSubmit = (values) => {
    // Xử lý logic submit form ở đây
  };

  return (
    <Formik
      initialValues={{ fullName: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, touched, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='fullName'>
            <Form.Label>Họ và tên</Form.Label>
            <Field
              type='text'
              name='fullName'
              as={Form.Control}
              isInvalid={touched.fullName && !!errors.fullName}
            />
            <Form.Control.Feedback type='invalid' style={{ color: "red" }}>
              {errors.fullName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Field
              type='email'
              name='email'
              as={Form.Control}
              isInvalid={touched.email && !!errors.email}
            />
            <Form.Control.Feedback type='invalid' style={{ color: "red" }}>
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Mật khẩu</Form.Label>
            <Field
              type='password'
              name='password'
              as={Form.Control}
              isInvalid={touched.password && !!errors.password}
            />
            <Form.Control.Feedback type='invalid' style={{ color: "red" }}>
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type='submit'>Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default DemoYupFormik;
