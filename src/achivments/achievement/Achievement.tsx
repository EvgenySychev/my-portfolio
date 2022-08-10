import style from './Achievement.module.scss'

export type AchievementType = {
    title: string
    description: string
}

export const Achievement = (props: AchievementType) => {
    return (
        <div className={style.achievementBlock}>
            <div className={style.item}>
                <div>
                    <span> {props.title} </span>
                </div>
                <div>
                    <div className={style.description}>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}