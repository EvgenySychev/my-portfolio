import React from 'react'
import style from './Works.module.scss';
import {Work} from './work/Work';
import {Title} from '../common/Components/title/Title';
import socialImg from './../assets/image/cs_networking.jpg'
import todoListImg from './../assets/image/Todolist.jpeg'
import counterImg from './../assets/image/counter.png'
import cardsImg from './../assets/image/cards.jpg'


export function Works() {

    const backgroundImageForWorks = {
        socialNetwork : {backgroundImage: `url(${socialImg})`},
        todoList : {backgroundImage: `url(${todoListImg})`},
        counter : {backgroundImage: `url(${counterImg})`},
        cards : {backgroundImage: `url(${cardsImg})`}
    }

    return (
        <div id={'works'} className={style.worksBlock}>
            <div className={style.worksContainer}>
                <Title title={'Portfolio'}
                       subTitle={'LATEST WORKS'}/>
                <div className={style.works}>
                    <Work title={"Counter"}
                          style={backgroundImageForWorks.counter}
                          linkToWork={"https://EvgenySychev.github.io/counter"}
                          description={"Мой первый проект на React. Использовал функциональные компоненты. Сделал верстку. Реализовал логику работы приложения. Работа с Localstorage. Для эффективного хранения данных приложения использовал библиотеку Redux"}/>
                    <Work title={"Social network"}
                          style={backgroundImageForWorks.socialNetwork}
                          linkToWork={""}
                          description={"Учебный проект. Написан с использованием классовых и функциональных компонент. Верстка с помощью Grid. Маршрутизация, route, browser-router. Хранение состояние приложения с помощью Redux. Запросы на сервер с помощью библиотеки Axios"}/>
                    <Work title={"Todolist"}
                          style={backgroundImageForWorks.todoList}
                          linkToWork={"https://EvgenySychev.github.io/TO-DO_LIST"}
                          description={"Учебный проект. Написан с использованием функциональных компонент. Так же использовалась библиотека Material UI. Разработка приложения через тестирование TDD. Хранение состояние приложения с помощью Redux. Запросы на сервер с помощью библиотеки Axios. Разработка формы логинизации, обработка ошибок запросов на сервер"}/>
                    <Work title={"Card"}
                          style={backgroundImageForWorks.cards}
                          linkToWork={""}
                          description={"В разработке"}/>
                </div>
            </div>
        </div>
    );
}