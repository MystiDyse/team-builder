import React, { useState } from 'react'
import { withFormik, Form, Field } from 'formik'
// formik handles our Forms and input fields
import * as yup from 'yup'
const TEamForm = ( { errors, touched}) => {
// const AnimalForm = (props) => {
  // you can deconstruct this by saying const ANimalFOrm = ( { error }) so that it will know that props.error is the same as errors
  return (
    <Form>
      {touched.names && errors.name && <p className="error">{errors.name}</p>}
      {/* deconstructed errors.species */}
      {/* FORM, FIeld, all come with Formik */}
      <Field type="text" name="name" placeholder="Name"/>
      {/* Field takes the place of input, label, text area */}
      {touched.email && errors.email && <p className="error">{errors.email}</p>}
      <Field type="text" name="email" placeholder="Email Ad"/>
      {touched.role && errors.role && <p className="error">{errors.role}</p>}
      <Field component="select" name="role">
        <option value="" disabled>Select Your Role:</option>{/* place holder*/}
        <option value="backend">backend engineer</option>
        <option value="frontend">frontend engineer</option>
        <option value="designer">designer</option>
        <option value="project_manager">Project Manager</option>
        <option value="ux">UX</option>
      </Field>
      <button type="submit">Submit</button>
      {/* Formik does a lot but doesnt creat button haha */}
    </Form>
  )
}

export default withFormik({
  // adding Formik as a High order COmponent, that will take animal form as a param and create a new component
  mapPropsToValues: (values) => {
    return {
      name: values.name || '',
      // !!! dont forget the comma
      // some: 'value'
      // this will show up in our console as values.values = 'values'
      // so you can create variables/ or input values. making them props instead of using state
      // ex species: values.species || 'default Species'
      email: values.email || '',
      role: values.roel || '',
    }
  },
  // with formik it does everything through props! 
  // eliminating the need to establish use state and and then pace our state through the input value:{state}
  validationSchema: yup.object().shape({
    name: yup.string().required('Name is required!'),
    email: yup.number().required('Email is required!').positive(),
    role: yup.string().required('Role is required'),
  }),
  // yup is a validation thingy that pretty much says does this do this or look like this?
  handleSubmit: (values) => {
    console.log(values)
  }
})(TeamForm)
