import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Contacts} from "./contacts/Сontacts";
import {Footer} from "./footer/Footer";
import frontImg from './assets/image/SychFull.jpg'
import s from './App.module.scss'
import {FooterContacts} from "./footerContacts/FooterContacts";
import {Story} from "./story/Story";
import {Activities} from "./activities/Activities";
import {Achievements} from "./achivments/Achievements";
import {useState} from "react";
import {Preloader} from "./preloader/Preloader";

export type BackgroundImageType = {
    backgroundImage: string
}


export const App = () => {

    const front: BackgroundImageType = {backgroundImage: `url(${frontImg})`}
    const [indicator, setIndicator] = useState(true)

    const setIndicatorHandler = () => {
        setIndicator(false)
    }

    return (
        indicator
            ? <Preloader callBack={setIndicatorHandler}/>
            : <div className={s.container}>
                <header>
                    <Header/>
                </header>
                <div className={s.wrapper}>
                    <div className={s.frontImg}>
                        <div className={s.circle}>
                            <div className={s.backgroundImg} style={front}/>
                        </div>
                    </div>
                    <div>
                        <Main/>
                        <Story/>
                        <Skills/>
                        <Works/>
                        <Activities title={'Experience'}
                                    subTitle={'WORKING WITH'}/>
                        <Activities title={'Education'}
                                    subTitle={'STUDIED AT'}/>
                        <Achievements/>
                        <Contacts/>
                        <Footer/>
                    </div>
                </div>
                <footer>
                    <FooterContacts/>
                </footer>
            </div>
    );
}
