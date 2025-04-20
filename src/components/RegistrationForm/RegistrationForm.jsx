import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import c from './RegistrationForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';

const FeedbackSchema = Yup.object().shape({
    email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email').required('Requaried'),
    password: Yup.string().matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g, 'Invalid password').min(6, 'Too short').max(15, 'Too long').required('Requaried'),
});

const initialValues = {
    email: '', 
    password: '',
}

export default function RegisterForm () {
    const emailField = useId();
    const passwordField = useId();
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {

    dispatch(
        register({...values})
    );
    actions.resetForm();
  };

  return (
    <>
    <Formik initialValues={initialValues}
    validationSchema={FeedbackSchema}
    onSubmit={handleSubmit}>
        <Form className={c.form}>
            <label className={c.label} htmlFor={emailField}>Email</label>
            <Field type='email'
            name='email'
            id={emailField}
            autoComplete='off'/>
            <ErrorMessage name='email' component='span'></ErrorMessage>
                        
            <label className={c.label} htmlFor={passwordField}>Password</label>
            <Field type='password'
            name='password'
            id={passwordField}
            autoComplete='off'/>
            <ErrorMessage name='password' component='span'></ErrorMessage>
                        
            <button type='submit'>Register</button>
        </Form>
        </Formik>
    </>
  );
};
