import React from "react";
import "./SignIn.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function SignIn({ onClose, onShowSignUp }) {
 
  // initial data
  const initialData = {
    email : "",
    password : "",
  }

  // validations
  const validations = Yup.object({
    email : Yup.string().email('Invalid Email Format').required('Required email'),
    password : Yup.string().required('Required email').min(6, 'password must be 6 characters or higher')
  })

  // submission
  const submission = (values)=>{
    console.log(values);
    onClose();
  }




  return (
    <div className="signIn-form-modal">
      <Formik initialValues={initialData} validationSchema={validations} onSubmit={submission}>
        <Form className="signIn-form">
          <h3>Sign In</h3>

          <label htmlFor="email">Email : </label>
          <Field
            type="email"
            placeholder="Enter email"
            id="email"
            name = 'email'
          />
          <ErrorMessage name="email">
            {(msg)=> <span className="signIn-validations">{msg}</span>}
          </ErrorMessage>

          <label htmlFor="password">Password : </label>
          <Field
            type="password"
            placeholder="Enter password"
            id="password"
            name = 'password'
          />
          <ErrorMessage name="password">
            {(msg)=> <span className="signIn-validations">{msg}</span>}
          </ErrorMessage>

          <div className="signIn-form-buttons">
            <button type="submit">Sign In</button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
          <span className="dont-have-account">
            Don't have an account ?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onShowSignUp();
              }}
            >
              Sign Up
            </a>
          </span>
        </Form>
      </Formik>
    </div>
  );
}
