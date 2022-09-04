import React from 'react'
import style from './Achievements.module.scss'
import {Title} from "../common/Components/title/Title";
import {Achievement} from "./achievement/Achievement";

export function Achievements() {

    const achievementDescription = [
        {description: 'tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la om-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom' },
        {description: 'tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la om-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom' },
        {description: 'tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la om-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom' },
        {description: 'tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la om-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom' },
        {description: 'tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la om-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom' },
    ]

    return (
        <div id={'achievements'} className={style.achievementsBlock}>
            <div className={style.achievementsContainer}>
                <Title title={'Achievements'}
                       subTitle={'MY AWARDS'}
                />
                <div className={style.achievements}>
                    {achievementDescription
                    .map((t,i)=>(
                        <Achievement title={`Achievement № ${i+1}`} description={t.description}/>
                    ))}
                </div>
            </div>
        </div>
    );
}