import React from 'react'
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/Components/title/Title";

export function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.block}`}>
                <div>
                    <Title title={'Contacts'}
                           subTitle={'LET\'S TALK'}/>
                </div>
                <div>
                    <form className={style.contactForm}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea/>
                        <button type='submit' className={style.submitBtn}>Отправить</button>
                    </form>
                </div>

            </div>
        </div>
    );
}