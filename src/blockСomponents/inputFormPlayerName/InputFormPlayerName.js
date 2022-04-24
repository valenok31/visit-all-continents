import React from "react";
import loadingImg from './loading.png'
import style from "./InputFormPlayerName.module.css"
import {Form,Field,Formik} from "formik";
import {setPlayerName} from "../../redux/visitAllContinents_reducer";

const InputFormPlayerName = (props) => {
        return <>
        <div className={style.data_entry}>
            <h1>Введи свое имя</h1>
            <Formik
                initialValues={{
                    firstName: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    //alert(JSON.stringify(values, null, 2));
                    props.setPlayerName(values.firstName)
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Jane"/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    </>
}

export default InputFormPlayerName;