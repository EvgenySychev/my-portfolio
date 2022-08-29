import React from "react";
import preloaderGif from "../assets/gif/preloader small.gif";
import style from "./Preloader.module.scss"
import {Particle} from "../particle/Particle";

type PreloaderPropsType = {
    callBack: () => void
}

export const Preloader = (props: PreloaderPropsType) => {

    const switchHandler = () => {
        props.callBack()
    }

    return (
        <div className={style.preloaderBlock}>
            <Particle/>
            <span className={style.description}>
                portfolio in progress...
                <img src={preloaderGif} alt="preloader..."/>
            </span>
            <div className={style.button} onClick={switchHandler}>
                <span className={style.animatedBtn}>
                    <span>
                        <em>L</em>
                        <em>o</em>
                        <em>o</em>
                        <em>k</em>
                        <em> </em>
                        <em>a</em>
                        <em>n</em>
                        <em>y</em>
                        <em>w</em>
                        <em>a</em>
                        <em>y</em>
                    </span>
                </span>
            </div>
        </div>
    )
}