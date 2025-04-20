import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import c from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { logIn } from '../../redux/auth/operations';


const initialValues = {
    email: "",
    password: "",  
};

const FeedbackSchema = Yup.object().shape({
    email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required('Requaried'),
    password: Yup.string().matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g).min(6, 'Too short').max(15, 'Too long').required('Requaried'),
});


export default function LoginForm() {
    const emailField = useId();
    const passwordField = useId();
    const dispatch = useDispatch();

        const handleSubmit = (values, actions) => {
        dispatch(
            logIn({...values})
        );
    
        actions.resetForm();
        };

    return(
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
                    <button type="submit">Log in</button>
                </Form>
            </Formik>
        </>
    )
}