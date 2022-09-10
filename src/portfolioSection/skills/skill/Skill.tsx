import React from 'react'
import style from './Skill.module.scss';

export type SkillType = {
    title: string
    style: any
}

export function Skill(props: SkillType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}
                 style={props.style}
            >

            </div>
            <h3 className={style.title}>{props.title}</h3>
            {/*<span>{props.description}</span>*/}
        </div>
    );
}