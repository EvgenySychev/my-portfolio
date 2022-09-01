import React from "react";
import preloaderGif from "../assets/gif/preloader small.gif";
import style from "./Preloader.module.scss"
import {Particle} from "../particle/Particle";
import {AnimatedButton} from "../common/Components/animatedButton/AnimatedButton";

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
            <AnimatedButton
                value={'Look anyway'}
                callBack={switchHandler}
            />
        </div>
    )
}