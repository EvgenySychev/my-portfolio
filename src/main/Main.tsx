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

