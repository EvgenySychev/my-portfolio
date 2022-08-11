import React from 'react'
import style from './Nav.module.scss';

export function Nav() {
    return (
        <div>
            <div className={style.topMenu}>
                <ul>
                    <li>
                        <a href="">
                            <span>Главная</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Обо мне</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Скилы</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Проекты</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Опыт работы</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Достижения</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Контакты</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

