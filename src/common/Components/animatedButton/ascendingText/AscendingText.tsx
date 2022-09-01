import React from "react";
import style from "./AscendingText.module.scss";


type TextInsideButtonPropsType = {
    value: string
}

export const AscendingText = ({value}: TextInsideButtonPropsType) => {
    return (
        <div className={style.box}>
            <span className={style.animatedBtn}>
                <span>
                    {Array.from(value)
                        .map((t, i) => (
                            <em style={{transitionDelay: `${i * .025}s`}}>
                                {`${t}`}
                            </em>))
                    }
                </span>
            </span>
        </div>
    )
}