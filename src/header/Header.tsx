import React from 'react'
import style from './Header.module.scss';
import {Nav} from "./nav/Nav";
import {DownloadCV} from "./downloadCV/DownloadCV";
import {Logo} from "./logo/Logo";
import {BurgerNav} from "./burgerNav/BurgerNav";

export function Header() {
    return (
        <div className={style.header}>
            <Logo/>
            <DownloadCV/>
            <Nav/>
            <BurgerNav/>
        </div>
    );
}

