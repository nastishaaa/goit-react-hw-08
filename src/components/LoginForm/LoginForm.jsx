import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import c from './LoginForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import toast from 'react-hot-toast';

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short').max(25, 'Too long').required('Required'),
    email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email').required('Requaried'),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/, 'Invalid password').min(6, 'Too short').max(15, 'Too long').required('Requaried'),
});

const initialValues = {
    name: '',
    email: '', 
    password: '',
}

export default function RegisterForm () {
    const nameField = useId();
    const emailField = useId();
    const passwordField = useId();
    const dispatch = useDispatch();

    const handleSubmit = async (values, actions) => {
        try {
            const resultAction = await dispatch(logIn(values));
    
            if (logIn.fulfilled.match(resultAction)) {
                toast.success('Successful login!')
                actions.resetForm();
            } else {
                toast.error("Please register first!");

            }
        } catch (error) {
            toast.error("Something went wrong!");
        }
  };

  return (
    <>
    <Formik initialValues={initialValues}
    validationSchema={FeedbackSchema}
    onSubmit={handleSubmit}>

        <Form className={c.form}>
        <label className={c.label} htmlFor={nameField}>Name</label>
            <Field type='text'
            name='name'
            id={nameField}
            autoComplete='off'/>
            <ErrorMessage name='name' component='span'></ErrorMessage>
            
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
