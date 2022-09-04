import React from 'react'
import s from './Work.module.scss';

export type WorkType = {
    style: any
    title: string
    description: string
    linkToWork: string
}

export function Work({linkToWork, style, description,title}: WorkType) {
    return (
        <div className={s.work}>
            <div className={s.image} style={style}>
                <a href={linkToWork}>
                    <button className={s.viewBtn}>
                        Смотреть
                    </button>
                </a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.header}> {title} </h3>
                <span className={s.description}> {description} </span>
            </div>
        </div>
    );
}