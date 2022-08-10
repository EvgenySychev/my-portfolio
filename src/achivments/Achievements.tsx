import React from 'react'
import style from './Achievements.module.scss'
import {Title} from "../common/Components/title/Title";
import {Achievement} from "./achievement/Achievement";

export function Achievements() {

    return (
        <div className={style.achievementsBlock}>
            <div className={style.achievementsContainer}>
                <Title title={'Achievements'}
                       subTitle={'MY AWARDS'}
                />
                <div className={style.achievements}>
                    <Achievement title={'Achievement №1'}
                                 description={'tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la om-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom'}
                    />
                    < Achievement
                        title={'Achievement №2'}
                        description={'tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la om-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom'}
                    />
                    < Achievement
                        title={'Achievement №3'}
                        description={'tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la om-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom'}
                    />
                    < Achievement
                        title={'Achievement №4'}
                        description={'tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la om-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom'}
                    />
                    < Achievement
                        title={'Achievement №5'}
                        description={'tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la om-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom'}
                    />
                    < Achievement
                        title={'Achievement №6'}
                        description={'tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la om-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom'}
                    />
                </div>

            </div>
        </div>
    );
}