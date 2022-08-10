import React from 'react'
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css'

export function Footer() {
    return (
        <div className={style.footer}>
            <div className= {`${styleContainer.container} ${style.block}`}>
                <span>2022 Все права защищены</span>
            </div>

        </div>
    );
}