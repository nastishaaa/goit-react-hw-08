import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { addContact } from "../../redux/contactsOps";
import c from './ContactsForm.module.css'
import * as Yup from "yup";

const initialValues = {
    name: "",
    phone: "",
};

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ' -]+$/, "Invalid name format").min(3, "Too short").max(50, "Too long").required("Required"),
    phone: Yup.string().matches(/^\+?[0-9\s\-()]{7,20}$/, "Invalid phone number").required("Required").min(7).max(7, "Too long"),
});


export default function ContactForm(){

    const nameField = useId();
    const phoneField = useId();

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact({...values}));
        actions.resetForm();
    }

    return(
        <Formik initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}>

            <Form className={c.form}>
                <div>
                    <label htmlFor={nameField}>Name</label>
                    <Field className={c.input} 
                    type="text" 
                    name="name" 
                    id={nameField}
                    autoComplete="off"/>
                    <ErrorMessage name="name" component="span" />
                </div>
                <div>
                    <label htmlFor={phoneField}>Phone</label>
                    <Field className={c.input} 
                    type="tel" 
                    name="phone" 
                    id={phoneField}
                    autoComplete="off"/>
                    <ErrorMessage name="phone" component="span" />
                </div>
                <button type="submit">Add contact</button>
            </Form>

        </Formik>
    )
}
    
