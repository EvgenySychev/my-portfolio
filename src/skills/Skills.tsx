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

    const react = {backgroundImage : `url(${reactImg})`}
    const redux = {backgroundImage : `url(${reduxImg})`}
    const ts = {backgroundImage : `url(${tsImg})`}
    const js = {backgroundImage : `url(${jsImg})`}
    const restAPI = {backgroundImage : `url(${restApiImg})`}
    const reduxThunk = {backgroundImage : `url(${reduxThunkImg})`}
    const axios = {backgroundImage : `url(${axiosImg})`}
    const postman = {backgroundImage : `url(${postmanImg})`}
    const tdd = {backgroundImage : `url(${tddImg})`}
    const css = {backgroundImage : `url(${cssImg})`}
    const html = {backgroundImage : `url(${htmlImg})`}
    const storybook = {backgroundImage : `url(${storybookImg})`}
    const materialUi = {backgroundImage : `url(${materialUiImg})`}
    const gitHub = {backgroundImage : `url(${gitHubImg})`}

    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title title ={'Skills'}
                       subTitle={'DEVELOPING ON'}/>
                <ul className={style.skills}>
                    <li> <Skill title = {"REACT"} style = {react} /></li>
                    <li><Skill title = {"REDUX"} style = {redux}/> </li>
                    <li><Skill title = {"TS"} style = {ts}/> </li>
                    <li><Skill title = {"JS"} style = {js}/></li>
                    <li><Skill title = {"REST API"} style = {restAPI}/> </li>
                    <li><Skill title = {"REDUX THUNK"} style = {reduxThunk}/> </li>
                    <li><Skill title = {"AXIOS"} style = {axios}/> </li>
                    <li><Skill title = {"POSTMAN"} style = {postman}/> </li>
                    <li><Skill title = {"TDD"} style = {tdd}/> </li>
                    <li> <Skill title = {"CSS"} style = {css}/></li>
                    <li> <Skill title = {"HTML"} style = {html} /></li>
                    <li><Skill title = {"STORYBOOK"} style = {storybook}/> </li>
                    <li><Skill title = {"Material UI"} style = {materialUi}/> </li>
                    <li><Skill title = {"GITHUB "} style = {gitHub}/> </li>
                </ul>
            </div>
        </div>
    );
}