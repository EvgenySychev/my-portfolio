import {ActivityItem} from "./ActivitiesItem/ActivityItem";
import style from "./ActivityBlock.module.scss"

export type ActivityBlockType = {
    title: string
}

export const ActivityBlock = (props: ActivityBlockType) => {
    return (
        <div>
            {props.title === 'Experience'
            ?
            (<div className={style.activities}>
                <ActivityItem
                    date={'2018-Present'}
                    placeName={'ASPEK-Otkrytie'}
                    placeLocation={'IZHEVSK'}
                    description={'description about same workplace description about same workplace description about same workplace description about same workplace description about same workplace description about same workplace description about same workplace description about same workplace description about same workplace description about same workplace'}
                />
                <ActivityItem
                    date={'2009-2018'}
                    placeName={'ASPEK-Drive'}
                    placeLocation={'IZHEVSK'}
                    description={'description about same workplace description about same workplace description about same workplace description about same workplace description about same workplace'}
                />
            </div>)
            :
            (<div className={style.activities}>
                <ActivityItem
                    date={'2004-2009'}
                    placeName={'IzhGTU'}
                    placeLocation={'IZHEVSK'}
                    description={'description about same university description about same university description about same university description about same university description about same university description about same university description about same university'}
                />
                <ActivityItem
                    date={'2010-2013'}
                    placeName={'IzhGSHA'}
                    placeLocation={'IZHEVSK'}
                    description={'description about same university description about same university description about same university description about same university description about same university description about same university'}
                />
            </div>)}
        </div>
    )
}