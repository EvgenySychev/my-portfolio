import React from 'react'
import s from './Work.module.scss';
// @ts-ignore
import Tilt from 'react-tilt'

export type WorkType = {
    style: any
    title: string
    description: string
    linkToWork: string
    linkToGit: string
}

export function Work({linkToWork, style, description, title, linkToGit}: WorkType) {
    return (
        <div className={s.work}>
                <Tilt className="Tilt" options={{max: 15, scale:1}}>
                    <div className={s.image} style={style}>
                        <div className={s.socials}>
                            <a href={linkToWork} target="_blank">
                                <span>открыть</span>
                            </a>
                            <a href={linkToGit} target="_blank">
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </Tilt>
            <div className={s.projectInfo}>
                <h3 className={s.header}> {title} </h3>
                <span className={s.description}> {description} </span>
            </div>
        </div>
    );
}