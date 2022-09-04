import React from "react";
import style from "./AnimatedButton.module.scss";
import {AscendingText} from "./ascendingText/AscendingText";


type TextInsideButtonPropsType = {
    value: string
    callBack?: () => void
    type?: "button" | "submit" | "reset"
}

export const AnimatedButton = ({value, callBack, type}: TextInsideButtonPropsType) => {
    return (
        <button type={type} onClick={callBack} className={style.button} >
            <AscendingText value={value}/>
        </button>
    )
}