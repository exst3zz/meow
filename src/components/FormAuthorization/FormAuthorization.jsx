import { ErrorMessage, Field, Form, Formik } from "formik";

const FormAuthorization = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ username: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field name="username" />
        <ErrorMessage name="username" component="span" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormAuthorization;
