import React from "react";
import style from "./AnimatedButton.module.scss";
import {AscendingText} from "./ascendingText/AscendingText";


type TextInsideButtonPropsType = {
    value: string
    callBack?: () => void
}

export const AnimatedButton = ({value, callBack}: TextInsideButtonPropsType) => {
    return (
        <div onClick={callBack} className={style.button} >
            <AscendingText value={value}/>
        </div>
    )
}