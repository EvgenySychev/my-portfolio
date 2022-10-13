import React from 'react'
import style from './Title.module.scss';

export type TitleType ={
    title: string
    subTitle: string
}

export function Title({title,subTitle}: TitleType) {
    return (
        <div className={style.titles}>
            <h2 className={style.title}>
                {title}
            </h2>
            <div className={style.subTitle}>
                <span> {subTitle}</span>
            </div>
        </div>

    );
}