import React from 'react'
import style from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../common/Components/title/Title";
import reactImg from './../assets/image/react.jpg'
import reduxImg from './../assets/image/redux.png'
import tsImg from './../assets/image/ts.jpeg'
import jsImg from './../assets/image/js.png'
import restApiImg from './../assets/image/restapi.webp'
import reduxThunkImg from './../assets/image/reduxThunk.png'
import axiosImg from './../assets/image/axios.png'
import postmanImg from './../assets/image/postman.jpg'
import tddImg from './../assets/image/tdd.webp'
import cssImg from './../assets/image/css.png'
import htmlImg from './../assets/image/html.webp'
import storybookImg from './../assets/image/storybook.png'
import materialUiImg from './../assets/image/materialUI.png'
import gitHubImg from './../assets/image/gitHub.jpg'

export function Skills() {

    const skillsImg = [
        {title: "REACT", imgUrl: {backgroundImage: `url(${reactImg})`}},
        {title: "REDUX", imgUrl: {backgroundImage: `url(${reduxImg})`}},
        {title: "TS", imgUrl: {backgroundImage: `url(${tsImg})`}},
        {title: "JS", imgUrl: {backgroundImage: `url(${jsImg})`}},
        {title: "REST API", imgUrl: {backgroundImage: `url(${restApiImg})`}},
        {title: "AXIOS", imgUrl: {backgroundImage: `url(${axiosImg})`}},
        {title: "REDUX THUNK", imgUrl: {backgroundImage: `url(${reduxThunkImg})`}},
        {title: "POSTMAN", imgUrl: {backgroundImage: `url(${postmanImg})`}},
        {title: "TDD", imgUrl: {backgroundImage: `url(${tddImg})`}},
        {title: "CSS", imgUrl: {backgroundImage: `url(${cssImg})`}},
        {title: "REACT", imgUrl: {backgroundImage: `url(${htmlImg})`}},
        {title: "STORYBOOK", imgUrl: {backgroundImage: `url(${storybookImg})`}},
        {title: "Material UI", imgUrl: {backgroundImage: `url(${materialUiImg})`}},
        {title: "GITHUB", imgUrl: {backgroundImage: `url(${gitHubImg})`}},
    ]

    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title title={'Skills'}
                       subTitle={'DEVELOPING ON'}/>
                <ul className={style.skills}>
                    {skillsImg
                        .map((t) => (
                            <li id={t.title}>
                                <Skill title={t.title} style={t.imgUrl}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}