import React from 'react'
import style from './Achievements.module.scss'
import {Title} from "../../common/components/title/Title";
import {Achievement} from "./achievement/Achievement";
import TypingEffect from "new-react-typing-effect";

type AchievementItemsType = {
    description: string
}

export const Achievements = () => {

    const achievementDescription: AchievementItemsType[] = [
        {description: 'По результатам работы руководителем отдела продаж автомобилей в 2021г. мой отдел лучший в группе компаний «АСПЭК-Авто»'},
        {description: 'Преодолел отметку в 1200 проданных новых автомобилей'},
        {description: 'Успешно завершил обучение по программе «Мастер продаж», являюсь сертифицированным консультантом по продаже автомобилей'},
    ]

    return (
        <div id={'achievements'} className={style.achievementsBlock}>
            <div className={style.achievementsContainer}>
                <Title title={'Achievements'}
                       subTitle={'MY AWARDS'}
                />
                <div className={style.achievements}>
                    {achievementDescription
                        .map((t, i) => (
                            <Achievement title={`Достижение № ${i + 1}`} description={t.description}/>
                        ))}
                </div>
                <div className={style.description}>
                    <TypingEffect
                        messages={["Здесь ещё есть место :)"]}
                        cursor="|"
                        textRenderer={(text, renderedCursor) => {
                            return <p>{text}{renderedCursor}</p>
                        }}
                        options={{
                            text: {
                                charactersPerSecond: 20,
                                fullTextDelayMS: 2000,
                            },
                        }}
                    />
                </div>

            </div>
        </div>
    );
}