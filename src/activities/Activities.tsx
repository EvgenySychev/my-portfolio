import {Title} from "../common/Components/title/Title";
import style from "./Activities.module.scss";
import {NavigateBtn} from "../common/Components/navigateBtn/NavigateBtn";
import {ActivityBlock} from "../common/Components/activity/ActivityBlock";

export type ActivitiesType = {
    title: string
    subTitle: string
}

export const Activities = (props: ActivitiesType) => {
    return (
        <div id={'activities'} className={style.educationBlock}>
            <div className={style.educationContainer}>
                <Title title={props.title}
                       subTitle={props.subTitle}/>
                <div className={style.carousel}>
                    <ActivityBlock title={props.title}/>
                    <div >
                        <NavigateBtn/>
                    </div>
                </div>
            </div>
        </div>
    )
}