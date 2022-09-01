import React from 'react'
import style from './Nav.module.scss';
import {Link} from 'react-scroll'
import {AscendingText} from "../../common/Components/animatedButton/ascendingText/AscendingText";

type headerMenuSectionType = {
    name: string
    link: string
}

export function Nav() {

    const headersMenuSection: headerMenuSectionType[] = [
        {name:'Обо мне',link:'story'},
        {name:'Скилы',link:'skills'},
        {name:'Проекты',link:'works'},
        {name:'Опыт работы',link:'activities'},
        {name:'Достижения',link:'achievements'},
        {name:'Контакты',link:'contacts'},
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
                >
                    <AscendingText value={name}/>
                </Link>
            </li>
        )
    }
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
                    {headersMenuSection.map(i => renderHeaderMenu(i.name,i.link))}
                </ul>
            </div>
        </div>
    );
}

