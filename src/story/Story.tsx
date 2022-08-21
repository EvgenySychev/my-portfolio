import React from 'react'
import {Title} from "../common/Components/title/Title";
import style from './Story.module.scss'

export const Story = () => {
    return <div id={'story'} className={style.storyBlock}>

        <div className={style.storyContainer}>
            <div>
                <Title title={'About Me'}
                       subTitle={'MY STORY'}/>
            </div>
            <div className={style.descriptionBlock}>
                <div className={style.description}>
                    <p>tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la
                        boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta
                        la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom
                        tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la
                        boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta
                        la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom</p>
                    <p>tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la
                        boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta
                        la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom tra-ta-ta la-la-la boom-boom-boom</p>
                </div>
            </div>
            <div className={style.infoList}>
                <ul>
                    <li>
                        <strong>
                            <span>Age:</span>
                        </strong>
                        <span>34</span>
                    </li>
                    <li>
                        <strong>
                            <span>Phone:</span>
                        </strong>
                        <span>+7 912 753 97 00</span>
                    </li>
                    <li>
                        <strong>
                            <span>Location:</span>
                        </strong>
                        <span>Russia, Izhevsk</span>
                    </li>
                    <li>
                        <strong>
                            <span>E-Mail:</span>
                        </strong>
                        <span>e.sychev87 @yandex.ru</span>
                    </li>
                </ul>
            </div>
        </div>


    </div>
}