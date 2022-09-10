import React from 'react'
import {Title} from "../../common/Components/title/Title";
import style from './Story.module.scss'
import {ContactItem} from "../../common/Components/contactItem/ContactItem";

export const Story = () => {
    return <div id={'story'} className={style.storyBlock}>

        <div className={style.storyContainer}>
            <div>
                <Title title={'About Me'}
                       subTitle={'MY STORY'}/>
            </div>
            <div className={style.descriptionBlock}>
                <div className={style.description}>
                    <p>Я человек, который испытывает страсть к программированию. Занимаюсь Frontend-разработкой
                        пользовательских интерфейсов с помощью JavaScript-библиотеки React. Хорошо знаком со строго
                        типизированным языком программирования TypeScript. Сейчас изучаю набор инструментов для
                        эффективной разработки Redux Toolkit. Планирую развиваться и обучаться новым технологиям во
                        Frontend разработке (ReactNative) и Backend разработке (NodeJS). Развиваю свой английский.
                        Занимаю активную жизненную позицию.</p>
                    <p>
                        I am a person who has a passion for programming. I am engaged in Frontend development of user
                        interfaces using the React JavaScript library. I am well familiar with the strongly typed
                        TypeScript programming language. Now I am studying a set of tools for effective development of
                        the Redux Toolkit. I plan to develop and learn new technologies in Frontend development
                        (ReactNative) and Backend development (Node JS). I'm developing my English. I take an active
                        life position.
                    </p>
                </div>
            </div>
            <div className={style.infoList}>
                <ul>
                    <li>
                        <ContactItem description={'Возраст'} value={'34'}/>
                    </li>
                    <li>
                        <ContactItem description={'Телефон'} value={'+7 912 753 97 00'}/>
                    </li>
                    <li>
                        <ContactItem description={'Адрес'} value={'Россия, УР, Izhevsk'}/>
                    </li>
                    <li>
                        <ContactItem description={'E-Mail'} value={'e.sychev87 @yandex.ru'}/>
                    </li>
                </ul>
            </div>
        </div>


    </div>
}