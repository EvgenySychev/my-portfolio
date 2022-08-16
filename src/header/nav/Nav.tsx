import React from 'react'
import style from './Nav.module.scss';
import {Link} from 'react-scroll'

export function Nav() {
    return (
        <div>
            <div className={style.topMenu}>
                <ul>
                    <li>
                        <Link activeClass={style.active}
                              to="main"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-50}
                              duration={700}
                              delay={200}
                              isDynamic={true}
                        >
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link activeClass={style.active}
                              to="story"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-120}
                              duration={700}
                              delay={200}
                              isDynamic={true}
                        >
                            Обо мне
                        </Link>
                    </li>
                    <li>
                        <Link activeClass={style.active}
                              to="skills"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-120}
                              duration={700}
                              delay={200}
                              isDynamic={true}
                        >
                            Скилы
                        </Link>
                    </li>
                    <li>
                        <Link activeClass={style.active}
                              to="works"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-120}
                              duration={700}
                              delay={200}
                              isDynamic={true}
                        >
                            Проекты
                        </Link>
                    </li>
                    <li>
                        <Link activeClass={style.active}
                              to="activities"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-120}
                              duration={700}
                              delay={200}
                              isDynamic={true}
                        >
                            Опыт работы
                        </Link>
                    </li>
                    <li>
                        <Link activeClass={style.active}
                              to="achievements"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-120}
                              duration={700}
                              delay={200}
                              isDynamic={true}
                        >
                            Достижения
                        </Link>
                    </li>
                    <li>
                        <Link activeClass={style.active}
                              to="contacts"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-120}
                              duration={700}
                              delay={200}
                              isDynamic={true}
                        >
                            Контакты
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

