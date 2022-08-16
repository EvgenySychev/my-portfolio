import React from 'react'
import style from './Main.module.scss';
import TypingEffect from 'new-react-typing-effect';

export function Main() {
    return (
        <div id={'main'} className={style.mainBlock}>
            <div className={style.text}>
                <h1 className={style.hTitle}>
                        <span>
                            Evgeny
                        <br/>
                            Sychev
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
                        Приветствие zcvzxcvzxcvzxcv zcxvzxcvzxcv zxcvzcvzxcvzxcv zxcvzxcvzxcvzx zxcvzxcvzxcv
                        zxcvzxcvzxcv
                    </div>
                    <button className={style.btnContact}>
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
                    </button>

                </div>
            </div>


        </div>
    );
}

