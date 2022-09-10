import React from "react";
import style from "./TitleName.module.scss";

type TitleNamePropsType = {
    name: string
    surname: string
}

export const TitleName = ({name, surname}: TitleNamePropsType) => {
    return (
        <h1 className={style.titleName}>
            <span>
               {name}
                <br/>
                {surname}
            </span>
        </h1>
    )
}