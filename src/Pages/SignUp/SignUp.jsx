import React, { useState } from "react";
import "./SignUp.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SignUp({ onClose, onShowSignIn }) {
  // initial data
  const initialValuesData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // validating
  const validationSchemaForForm = Yup.object({
    firstName: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required first name"),
    lastName: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required last name"),
    email: Yup.string()
      .email("invalid email format")
      .required("Required email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Password must match"),
  });

  // form submission
  const onSubmitForForm = (values) => {
    console.log(values);
    onClose();
  };

  return (
    <>
      <div className="signup-form-modal">
        <Formik
          initialValues={initialValuesData}
          validationSchema={validationSchemaForForm}
          onSubmit={onSubmitForForm}
        >
          <Form className="signup-form">
            <h3>Sign Up</h3>

            <label htmlFor="firstName">First Name : </label>
            <Field
              type="text"
              placeholder="Enter first name"
              name="firstName"
              id="firstName"
            />
            <ErrorMessage name="firstName">
              {(msg) => <span className="validations">{msg}</span>}
            </ErrorMessage>

            <label htmlFor="lastName">Last Name : </label>
            <Field
              type="type"
              placeholder="Enter last name"
              name="lastName"
              id="lastName"
            />
            <ErrorMessage name="lastName">
              {(msg) => <span className="validations">{msg}</span>}
            </ErrorMessage>

            <label htmlFor="email">Email : </label>
            <Field
              type="email"
              placeholder="Enter email"
              name="email"
              id="email"
            />
            <ErrorMessage name="email">
              {(msg) => <span className="validations">{msg}</span>}
            </ErrorMessage>

            <label htmlFor="password">Password : </label>
            <Field
              type="password"
              placeholder="Enter password"
              name="password"
              id="password"
            />
            <ErrorMessage name="password">
              {(msg) => <span className="validations">{msg}</span>}
            </ErrorMessage>

            <label htmlFor="confirmPassword">Confirm password : </label>
            <Field
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              id="confirmPassword"
            />
            <ErrorMessage name="confirmPassword">
              {(msg) => <span className="validations">{msg}</span>}
            </ErrorMessage>

            <div className="form-buttons">
              <button type="submit">Register</button>
              <button type="button" onClick={onClose}>
                Close
              </button>
            </div>
            <span className="already-have-account">
              Already have an account ?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onShowSignIn();
                }}
              >
                Sign in
              </a>
            </span>
          </Form>
        </Formik>
      </div>
    </>
  );
}
