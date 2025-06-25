import React from 'react';
import './Contact.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export default function Contact() {

  // initial data
  const initialData = {
    name : "",
    email : "",
    message : "",
  }

  // validations
  const validations = Yup.object({
    name : Yup.string().required('Required Name'),
    email : Yup.string().email('Invalid email format').required('Required Email'),
    message : Yup.string().required('Required message'),
  })

  //submissions
  const submission = (values, {resetForm})=>{
    console.log(values);
    resetForm();
  }

  return (
    <>
    <div className='contact-from-container'>
      <div className='contact-form-card'>
        <h3>Contact</h3>
        <Formik initialValues={initialData} validationSchema={validations} onSubmit={submission}>
          <Form className='contact-form'>
            <label>Your Name : </label>
            <Field placeholder='Enter Name' name='name'></Field>
            <ErrorMessage name='name'>
              {(msg)=> <span className='contact-error'>{msg}</span>}
            </ErrorMessage>

            <label>Your Email : </label>
            <Field placeholder='Enter Email' name='email'></Field>
            <ErrorMessage name='email'>
              {(msg)=> <span className='contact-error'>{msg}</span>}
            </ErrorMessage>

            <label>Your Message : </label>
            <Field as='textarea' placeholder='Enter Message' name='message'></Field>
            <ErrorMessage name='message'>
              {(msg)=> <span className='contact-error'>{msg}</span>}
            </ErrorMessage>

            <button type='submit'>Send</button>
          </Form>
        </Formik>
      </div>
    </div>
    </>
  )
}
