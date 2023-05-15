import './App.css';
import {Header} from "./header/Header";
import {Main} from "./portfolioSection/main/Main";
import {Skills} from "./portfolioSection/skills/Skills";
import {Works} from "./portfolioSection/works/Works";
import {Contacts} from "./portfolioSection/contacts/Сontacts";
import {Footer} from "./portfolioSection/footer/Footer";
import s from './App.module.scss'
import {FooterContacts} from "./footerContacts/FooterContacts";
import {Story} from "./portfolioSection/story/Story";
import {Activities} from "./portfolioSection/activities/Activities";
import {Achievements} from "./portfolioSection/achivments/Achievements";
import {Preloader} from "./preloader/Preloader";
import {BackgroundImg} from "./common/components/BackgroundImg";

export type BackgroundImageType = {
    backgroundImage: string
}

export const App = () => {

    return (
        //   indicator
        //     ? <Preloader callBack={setIndicatorHandler}/>:
        <div className={s.container}>
            <header>
                <Header/>
            </header>
            <div className={s.wrapper}>
                <div className={s.frontImg}>
                    <div className={s.circle}>
                        <BackgroundImg />
                    </div>
                </div>
                <div>
                    <Main/>
                    <Story/>
                    <Skills/>
                    <Works/>
                    <Activities
                        title={'Experience'}
                        subTitle={'WORKING WITH'}
                    />
                    <Activities
                        title={'Education'}
                        subTitle={'STUDIED AT'}
                    />
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
