import React, {useState} from 'react'
import style from './BurgerNav.module.scss';
import {Link} from 'react-scroll'

type headerMenuSectionType = {
    name: string
    link: string
}

export function BurgerNav() {
    let [menuIsOpen, setMenuIsOpen] = useState(false)

    const onBurgerMenuClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const headersMenuSection: headerMenuSectionType[] = [
        {name: 'Обо мне', link: 'story'},
        {name: 'Скилы', link: 'skills'},
        {name: 'Проекты', link: 'works'},
        {name: 'Опыт работы', link: 'activities'},
        {name: 'Достижения', link: 'achievements'},
        {name: 'Контакты', link: 'contacts'},
    ]

    const renderHeaderMenu = (name: string, link: string) => {
        return (
            <li>
                <Link activeClass={style.active}
                      to={link}
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={-120}
                      duration={700}
                      delay={200}
                      isDynamic={true}
                      onClick={onBurgerMenuClick}
                >
                    {name}
                </Link>
            </li>
        )
    }

    return (
        <div className={style.burgerTopMenuBlock}>
            <div className={style.menuBtnBlock}>
                <div className={style.menuBtn} onClick={onBurgerMenuClick}>
                    <span></span>
                </div>
            </div>
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
                    {headersMenuSection.map(i => renderHeaderMenu(i.name, i.link))}
                </ul>
            </div>

        </div>
    );
}

