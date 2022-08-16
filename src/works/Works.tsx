import React from 'react'
import style from './Works.module.scss';
import {Work} from './work/Work';
import {Title} from '../common/Components/title/Title';
import socialImg from './../assets/image/cs_networking.jpg'
import todoListImg from './../assets/image/Todolist.jpeg'
import counterImg from './../assets/image/counter.png'


export function Works() {

    const socialNetwork = {
        backgroundImage: `url(${socialImg})`
    }
    const todoList = {
        backgroundImage: `url(${todoListImg})`
    }
    const counter = {
        backgroundImage: `url(${counterImg})`
    }

    return (
        <div id={'works'} className={style.worksBlock}>
            <div className={style.worksContainer}>
                <Title title={'Portfolio'}
                       subTitle={'LATEST WORKS'}/>
                <div className={style.works}>
                    <Work title={"Social network"}
                          style={socialNetwork}
                          description={"Social network will be here Social network will be here Social network will be here Social network will be here"}/>
                    <Work title={"Todolist"}
                          style={todoList}
                          description={"Todolist will be here Todolist will be here Todolist will be here Todolist will be here"}/>
                    <Work title={"Counter"}
                          style={counter}
                          description={"Counter will be here Counter will be here Counter will be here Counter will be here"}/>
                </div>
            </div>
        </div>
    );
}