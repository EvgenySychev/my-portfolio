import React from 'react'
import style from './Work.module.scss';

export type WorkType = {
    style: any
    title: string
    description: string
}

export function Work(props: WorkType) {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <button className={style.viewBtn}>Смотреть</button>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.header}> {props.title} </h3>
                <span className={style.description}> {props.description} </span>
            </div>
        </div>
    );
}