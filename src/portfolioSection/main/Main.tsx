import React from 'react'
import style from './Main.module.scss';
import TypingEffect from 'new-react-typing-effect';
import {Link} from "react-scroll";
import {AnimatedButton} from "../../common/Components/animatedButton/AnimatedButton";
import {TitleName} from "./titleName/TitleName";

export const Main = () => {
    return (
        <div id={'main'} className={style.mainBlock}>
            <div className={style.text}>
                <TitleName
                    name={'Евгений'}
                    surname={'Сычев'}
                />
                <div className={style.startedContent}>
                    <TypingEffect
                        messages={["Frontend Developer"]}
                        cursor="|"
                        textRenderer={(text, renderedCursor) => {
                            return <p>{text}{renderedCursor}</p>
                        }}
                        options={{
                            text: {
                                charactersPerSecond: 20,
                                fullTextDelayMS: 2000,
                            },
                        }}
                    />
                    <div className={style.description}>
                        Привет! Я Frontend-разработчик из России, г. Ижевск. Имею опыт создания SPA с использованием React, Redux, TypeScript.
                        <br/>
                        Открыт для ваших предложений.
                    </div>

                    <Link
                        to="contacts"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-120}
                        duration={700}
                        delay={200}
                        isDynamic={true}
                    >
                        <AnimatedButton
                            value={'Contact me'}
                        />

                    </Link>
                </div>
            </div>
        </div>
    );
}

