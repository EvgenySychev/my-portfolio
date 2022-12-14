import {Title} from "../../common/components/title/Title";
import style from "./Activities.module.scss";
import {NavigateBtn} from "../../common/components/navigateBtn/NavigateBtn";
import {ActivityBlock} from "../../common/components/activity/ActivityBlock";

export type ActivitiesType = {
    title: string
    subTitle: string
}

export const Activities = ({title,subTitle}: ActivitiesType) => {
    return (
        <div id={'activities'} className={style.educationBlock}>
            <div className={style.educationContainer}>
                <Title title={title}
                       subTitle={subTitle}/>
                <div className={style.carousel}>
                    <ActivityBlock title={title}/>
                    {/*<div >*/}
                    {/*    <NavigateBtn/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}