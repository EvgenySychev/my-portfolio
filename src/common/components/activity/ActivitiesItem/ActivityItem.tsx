import style from "./ActivityItem.module.scss"

export type ActivityItemType = {
    date: string
    placeName: string
    placeLocation: string
    description: string
}

export const ActivityItem = (props: ActivityItemType) => {
    return (
        <div>
            <div className={style.activityBlock}>
                <div className={style.item}>
                    <div className={style.date}>
                        <span>{props.date}</span>
                    </div>
                    <div className={style.name}>
                        <span>
                            {props.placeName}
                            <br/>
                            {props.placeLocation}
                        </span>
                    </div>
                    <div className={style.description}>
                        <div>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}