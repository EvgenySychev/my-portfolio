import React from 'react'
import style from './Contacts.module.scss';
import {Title} from "../common/Components/title/Title";
import {AnimatedButton} from "../common/Components/animatedButton/AnimatedButton";

export function Contacts() {
    return (
        <div id={'contacts'} className={style.contacts} >
            <div className={style.block}>
                <div>
                    <Title title={'Contacts'}
                           subTitle={'LET\'S TALK'}/>
                </div>
                <div className={style.contactFormBlock}>
                    <form className={style.contactForm}>
                        <input type="text" name={'name'}/>
                        <input type="text" name={'lastname'}/>
                        <textarea />
                        <AnimatedButton type={"submit"} value={'Send message'}/>
                    </form>
                </div>
            </div>
        </div>
    );
}