import React from 'react'
import style from './Works.module.scss';
import {Work} from './work/Work';
import {Title} from '../../common/components/title/Title';
import socialImg from './../../assets/image/cs_networking.jpg'
import todoListImg from './../../assets/image/Todolist.jpeg'
import counterImg from './../../assets/image/counter.png'
import cardsImg from './../../assets/image/cards.jpg'
import {BackgroundImageType} from "../../App";

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
            title: 'Todolist',
            worksImg: {backgroundImage: `url(${todoListImg})`},
            linkToWork: 'https://EvgenySychev.github.io/TO-DO_LIST',
            linkToGit: 'https://github.com/EvgenySychev/TO-DO_LIST',
            description: 'В приложении реализована логика классического Тудулиста. Пользователь имеет возможность добавления, редактирования и удаления задач. Разработана форма логинизации. Реализована обработка ошибок запросов на сервер. Проект написан с использованием функциональных компонент. Так же использовалась библиотека Material UI. Разработка приложения через TDD. Хранение состояния приложения с помощью Redux. Запросы на сервер с помощью библиотеки Axios. Валидация форм с помощью Formik. '
        },
        {
            title: 'Cards',
            worksImg: {backgroundImage: `url(${cardsImg})`},
            linkToWork: 'https://alexnewhere.github.io/friday-project/',
            linkToGit: 'https://github.com/EvgenySychev',
            description: "В разработке, обновляется. Командный проект. Приложение позволяет реализовать процесс самообучения по карточкам на интересующую Вас тему. Реализована возможность создавать, редактировать и удалять колоды карточек с вопросами и ответами. Реализованы формы регистрации, логонизации и восстановления пароля. Проект написан с использованием функциональных компонент. Первый опыт работы с Redux Toolkit. Использовалась библиотека Material UI. Валидация форм с помощью Formik. Работа с таблицами, а именно реализована сортировка, поиск по ключевым словам, фильтрация. Модальные окна. Axios, redux-thunk. " +
                "Для начала работы используйте " +
                "login: 'samara808@yandex.ru', " +
                "password: '123456789' "
        },
        {
            title: 'Social network',
            worksImg: {backgroundImage: `url(${socialImg})`},
            linkToWork: 'https://EvgenySychev.github.io/react-way-of-samurai',
            linkToGit: 'https://github.com/EvgenySychev/react-way-of-samurai',
            description: 'В разработке, обновляется. Проект написан с использованием функциональных и классовых компонент. Хранение состояние приложения с помощью Redux. Запросы на сервер с помощью библиотеки Axios. Работа с формами с помощью Formik. HOC, compose, redux-thunk'
        },
        // {
        //     title: 'Counter',
        //     worksImg: {backgroundImage: `url(${counterImg})`},
        //     linkToWork: 'https://EvgenySychev.github.io/counter',
        //     linkToGit: 'https://github.com/EvgenySychev/counter',
        //     description: 'Мой первый проект на React. Использовал функциональные компоненты. Сделал верстку. Реализовал логику работы приложения. Работа с Localstorage. Для эффективного хранения данных приложения использовал библиотеку Redux'
        // },
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