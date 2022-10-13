import React from 'react'
import {Title} from "../../common/components/title/Title";
import style from './Story.module.scss'
import {ContactItem} from "../../common/components/contactItem/ContactItem";

export const Story = () => {
    return (
        <div id={'story'} className={style.storyBlock}>
            <div className={style.storyContainer}>
                <div>
                    <Title title={'About Me'}
                           subTitle={'MY STORY'}/>
                </div>
                <div className={style.descriptionBlock}>
                    <div className={style.description}>
                        <p>
                            Я фронтенд-разработчик с опытом создания SPA с использованием React, Redux, TypeScript.
                            Обладаю знаниями в области пользовательских интерфейсов, процессов тестирования и отладки. Я
                            совершенствую свои навыки в этом направлении и планирую расширить их с помощью новых
                            технологий, таких как React Native. В свободное время люблю решать задачи на CodeWars и
                            занимаюсь улучшением моего английского.
                        </p>
                        <p>
                            I am a frontend developer with experience in creating a SPA using React, Redux, TypeScript.
                            I have knowledge in the field of user interfaces, testing and debugging processes. I am
                            improving my skills in this direction and plan to expand them with the help of new
                            technologies, such as React Native. In my free time, I like to visit CodeWars, as well as
                            improve my English.
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
        </div>)
}