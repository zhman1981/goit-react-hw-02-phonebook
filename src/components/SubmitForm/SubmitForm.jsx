import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import PropTypes from 'prop-types';

export class SubmitForm extends Component {
  state = {
    name: '',
  };

  render() {
    return (
      <div>
        <p>Name:</p>
        <Formik
          initialValues={{ name: this.state.name }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            } else if (
              !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
                values.name
              )
            ) {
              errors.name =
                'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              this.props.onSend(values);
              this.setState({ name: '' });
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="name" name="name" />
              <ErrorMessage name="name" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

// SubmitForm.propTypes = {
//   name: PropTypes.string,
// }
export default SubmitForm;
