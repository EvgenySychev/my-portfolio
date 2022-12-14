import React from 'react'
import style from './Contacts.module.scss';
import {Title} from "../../common/components/title/Title";
import {AnimatedButton} from "../../common/components/animatedButton/AnimatedButton";
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
                errors.email = 'Заполните, чтобы отправить'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Не верный формат адреса'
            }
            if (!values.name) {
                errors.name = 'Заполните, чтобы отправить'
            } else if (values.name.length < 2) {
                errors.name = 'Должно быть 2 или более символа'
            }
            if (!values.message) {
                errors.message = 'Заполните, чтобы отправить'
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
                .catch((e) => {
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
                                <div style={{color: '#68e0cf', fontSize: '12px'}}>{formik.errors.name}</div>}
                        </div>
                        <div className={style.inputBlock}>
                            <input type="email" placeholder={'example@domain.ru'}
                                   {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email &&
                                <div style={{color: '#68e0cf', fontSize: '12px'}}>{formik.errors.email}</div>}
                        </div>
                        <div className={style.inputBlock}>
                                <textarea style={{minHeight: '150px'}} placeholder={'Ваше сообщение'}
                                          {...formik.getFieldProps('message')}
                                />
                            {formik.touched.message && formik.errors.message &&
                                <div style={{color: '#68e0cf', fontSize: '12px'}}>{formik.errors.message}</div>}
                        </div>
                    </form>
                    <AnimatedButton type={"submit"} value={'Send message'}/>
                </div>
            </div>
        </div>
    );
}
