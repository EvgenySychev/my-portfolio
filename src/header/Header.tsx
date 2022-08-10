import React from 'react'
import style from './Header.module.scss';
import {Nav} from "./nav/Nav";
import {DownloadCV} from "./downloadCV/DownloadCV";
import {Logo} from "./logo/Logo";

export function Header() {
    return (
            <div className={style.header}>
                <Logo/>
                <div className={style.nav}>
                    <Nav/>
                    <DownloadCV/>
                </div>
            </div>
    );
}

