import React from 'react'
import style from './Works.module.scss';
import {Work} from './work/Work';
import {Title} from '../../common/Components/title/Title';
import socialImg from './../../assets/image/cs_networking.jpg'
import todoListImg from './../../assets/image/Todolist.jpeg'
import counterImg from './../../assets/image/counter.png'
import cardsImg from './../../assets/image/cards.jpg'
import {BackgroundImageType} from "../../App";
// @ts-ignore
import Tilt from 'react-tilt'

type workItemType = {
    title: string
    worksImg: BackgroundImageType
    linkToWork: string
    linkToGit: string
    description: string
}

export const Works = () => {

    const workItems: workItemType[] = [
        {
            title: 'Counter',
            worksImg: {backgroundImage: `url(${counterImg})`},
            linkToWork: 'https://EvgenySychev.github.io/counter',
            linkToGit: 'https://github.com/EvgenySychev/counter',
            description: 'Мой первый проект на React. Использовал функциональные компоненты. Сделал верстку. Реализовал логику работы приложения. Работа с Localstorage. Для эффективного хранения данных приложения использовал библиотеку Redux'
        },
        {
            title: 'Todolist',
            worksImg: {backgroundImage: `url(${todoListImg})`},
            linkToWork: 'https://EvgenySychev.github.io/TO-DO_LIST',
            linkToGit: 'https://github.com/EvgenySychev/TO-DO_LIST',
            description: 'Учебный проект. Написан с использованием функциональных компонент. Так же использовалась библиотека Material UI. Разработка приложения через тестирование TDD. Хранение состояние приложения с помощью Redux. Запросы на сервер с помощью библиотеки Axios. Разработка формы логинизации, валидация формы с помощью formik. Обработка ошибок запросов на сервер'
        },
        {
            title: 'Social network',
            worksImg: {backgroundImage: `url(${socialImg})`},
            linkToWork: '',
            linkToGit: '',
            description: 'В разработке'
        },
        {
            title: 'Cards',
            worksImg: {backgroundImage: `url(${cardsImg})`},
            linkToWork: '',
            linkToGit: '',
            description: 'В разработке'
        }
    ]

    return (
        <div id={'works'} className={style.worksBlock}>
            <div className={style.worksContainer}>
                <Title title={'Portfolio'}
                       subTitle={'LATEST WORKS'}/>
                <div className={style.works}>
                    {workItems
                        .map(t => (
                                <Work
                                    style={t.worksImg}
                                    title={t.title}
                                    description={t.description}
                                    linkToWork={t.linkToWork}
                                    linkToGit={t.linkToGit}
                                />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}