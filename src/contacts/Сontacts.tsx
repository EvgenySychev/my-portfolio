import React from 'react'
import style from './Contacts.module.scss';
import {Title} from "../common/Components/title/Title";
import {AnimatedButton} from "../common/Components/animatedButton/AnimatedButton";
import {useFormik} from "formik";
import * as emailjs from 'emailjs-com';

type FormikErrorType = {
    email?: string
    name?: string
    message?: string
    subject?: string
}

const SERVICE_ID = "service_q3t5x48";
const TEMPLATE_ID = "template_8gxhpvv";
const USER_ID = "F9NhMwLzikdqGCR_5";



export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            emailAdmin: 'Евгений',
            subject: " 'my-portfolio' ",
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Необходимо заполнить'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Не верный формат адреса'
            }
            if (!values.name) {
                errors.name = 'Необходимо заполнить'
            } else if (values.name.length < 2) {
                errors.name = 'Должно быть 2 или более символа'
            }
            if (!values.message) {
                errors.message = 'Необходимо заполнить'
            } else if (values.message.length < 2) {
                errors.message = 'Должно быть 2 или более символа'
            }

            return errors
        },
        onSubmit: values => {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID)
                .then(() => {
                    console.log('message send');
                })
                .catch((e)=> {
                    console.error(e)
                })
            ;
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
                                <input type="text" placeholder={'Ваше имя'}
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
                                <textarea placeholder={'Ваше сообщение'}
                                          {...formik.getFieldProps('message')}
                                />
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
