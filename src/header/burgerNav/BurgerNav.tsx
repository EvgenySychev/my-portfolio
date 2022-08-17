import React, {useState} from 'react'
import style from './BurgerNav.module.scss';
import {Link} from 'react-scroll'

export function BurgerNav() {
    let [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerMenuClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div onClick={onBurgerMenuClick}>
            <div className={menuIsOpen
                ? style.burgerTopMenu
                : `${style.burgerTopMenu} ${style.show}`}
            >
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
                              onClick={onBurgerMenuClick}
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
                              onClick={onBurgerMenuClick}
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
                              onClick={onBurgerMenuClick}
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
                              onClick={onBurgerMenuClick}
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
                              onClick={onBurgerMenuClick}
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
                              onClick={onBurgerMenuClick}
                        >
                            Контакты
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={style.menuBtn}>
                <span></span>
            </div>
        </div>
    )
        ;
}

