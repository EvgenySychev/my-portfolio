import React from 'react'
import style from './Title.module.scss';

export type TitleType ={
    title: string
    subTitle: string
}

export function Title(props: TitleType) {
    return (
        <div className={style.titles}>
            <h2 className={style.title}>
                {props.title}
            </h2>
            <div className={style.subTitle}>
                <span> {props.subTitle}</span>
            </div>
        </div>

    );
}