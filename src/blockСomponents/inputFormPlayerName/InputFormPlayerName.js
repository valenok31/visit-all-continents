import React from "react";
import style from "./InputFormPlayerName.module.css"
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const InputFormPlayerName = (props) => {
    return <>
        <div className={style.data_entry}>
            <h1>Введи свое имя</h1>
            <Formik
                initialValues={{
                    firstName: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    props.setPlayerName(values.firstName)
                }}
            >
{/*                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Jane"/>
                    <button type="submit">Submit</button>
                </Form>*/}
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field id="firstName" name="firstName" placeholder="Jane"/>
                        {errors.firstName && touched.firstName ? (
                            <span>{errors.firstName}</span>
                        ) : null}
                        <div><button type="submit">Submit</button></div>

                    </Form>
                )}
            </Formik>
        </div>
    </>
}

export default InputFormPlayerName;