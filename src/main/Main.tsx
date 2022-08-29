import React from 'react'
import style from './Main.module.scss';
import TypingEffect from 'new-react-typing-effect';
import {Link} from "react-scroll";

export function Main() {
    return (
        <div id={'main'} className={style.mainBlock}>
            <div className={style.text}>
                <h1 className={style.hTitle}>
                        <span>
                            Евгений
                        <br/>
                            Сычев
                        </span>
                </h1>
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
                        Привет! Я человек, который испытывает страсть к программированию. Занимаюсь Frontend-разработкой пользовательских интерфейсов с помощью JavaScript-библиотеки React. Хорошо знаком со строго типизированным языком программирования TypeScript. Сейчас изучаю набор инструментов для эффективной разработки  Redux Toolkit. Планирую развиваться и обучаться новым технологиям во Frontend разработке (ReactNative) и Backend разработке (NodeJS). Развиваю свой английский. Занимаю активную жизненную позицию.
                    </div>

                    <Link className={style.btnContact}
                          to="contacts"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={-120}
                          duration={700}
                          delay={200}
                          isDynamic={true}
                    >
                        <span className={style.animatedBtn}>
                            <span>
                                <em>C</em>
                                <em>o</em>
                                <em>n</em>
                                <em>t</em>
                                <em>a</em>
                                <em>c</em>
                                <em>t</em>
                                <em> </em>
                                <em>m</em>
                                <em>e</em>
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

