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
                    placeName={'АСПЭК-Открытие'}
                    placeLocation={'г.Ижевск'}
                    description={'Начальник отдела продаж автомобилей. Организовал работу отдела продаж автомобилей во вновь открывшемся дилерском центре; Контролирую и планирую работу отдела продаж; Осуществляю анализ и составление отчетности; Выполнение плановых показателей отдела; Веду работу по обучению и развитию сотрудников отдела продаж;'}
                />
                <ActivityItem
                    date={'2009-2018'}
                    placeName={'АСПЭК-Драйв'}
                    placeLocation={'г.Ижевск'}
                    description={'Менеджер по работе с корпоративными клиентами, Старший консультант по продаже автомобилей. Вел работу с корпоративными клиентами города Ижевска, Удмуртской республики и ближайших регионов; Систематизировал и расширил базу клиентов; Проводил работу по обучению консультантов по продаже автомобилей эффективным техникам продаж автомобилей; Контролировал работу консультантов по продаже автомобилей;'}
                />
            </div>)
            :
            (<div className={style.activities}>
                <ActivityItem
                    date={'2004-2009'}
                    placeName={'Ижевский государственная технический университет'}
                    placeLocation={'г.Ижевск'}
                    description={'факультет «Современные технологии и автомобили», специальность «Технология роботизированного производства», квалификация - инженер'}
                />
                <ActivityItem
                    date={'2010-2013'}
                    placeName={'Ижевская государственная сельскохозяйственная академия'}
                    placeLocation={'г.Ижевск'}
                    description={'факультет «Дополнительного профессионального образования», специальность «Бухгалтерский учет, анализ и аудит», квалификация - экономист'}
                />
            </div>)}
        </div>
    )
}