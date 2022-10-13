import React from 'react'
import style from './Nav.module.scss';
import {Link} from 'react-scroll'
import {AscendingText} from "../../common/components/animatedButton/ascendingText/AscendingText";

type headerMenuSectionType = {
    name: string
    link: string
}

export function Nav() {

    const headersMenuSection: headerMenuSectionType[] = [
        {name:'Главная',link:'main'},
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
                    {headersMenuSection.map(i => renderHeaderMenu(i.name,i.link))}
                </ul>
            </div>
        </div>
    );
}

