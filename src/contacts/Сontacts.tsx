import React from 'react'
import style from './Contacts.module.scss';
import {Title} from "../common/Components/title/Title";
import {AnimatedButton} from "../common/Components/animatedButton/AnimatedButton";
import {useFormik} from "formik";

type FormikErrorType = {
    email?: string
    name?: string
    message?: string
}

export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.name) {
                errors.name = 'Required'
            } else if (values.name.length < 2) {
                errors.name = 'Must be 2 characters or more'
            }
            if (!values.message) {
                errors.message = 'Required'
            } else if (values.message.length < 2) {
                errors.message = 'Must be 2 characters or more'
            }

            return errors
        },
        onSubmit: values => {
            alert(`отправлено ${values.message}`)
            formik.resetForm();
        },
    });

    return (
        <div id={'contacts'} className={style.contacts}>
            <div className={style.block}>
                <div>
                    <Title title={'Contacts'}
                           subTitle={'LET \'S TALK'}/>
                </div>
                <div className={style.contactFormBlock}>
                    <form onSubmit={formik.handleSubmit} className={style.contactForm}>
                        <div className={style.inputBlock}>
                            <input type="text" placeholder={'Евгений Frontend-Developer'}
                                   {...formik.getFieldProps('name')}
                            />
                            {formik.touched.name && formik.errors.name &&
                                <div style={{color: 'red'}}>{formik.errors.name}</div>}
                        </div>
                        <div className={style.inputBlock}>
                            <input type="email" placeholder={'example@domain.ru'}
                                   {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email &&
                                <div style={{color: 'red'}}>{formik.errors.email}</div>}
                        </div>
                        <div className={style.inputBlock}>
                            <textarea {...formik.getFieldProps('message')}/>
                            {formik.touched.message && formik.errors.message &&
                                <div style={{color: 'red'}}>{formik.errors.message}</div>}
                        </div>

                        <AnimatedButton type={"submit"} value={'Send message'}/>
                    </form>
                </div>
            </div>
        </div>
    );
}
