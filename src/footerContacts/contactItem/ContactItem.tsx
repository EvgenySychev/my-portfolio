import React from "react";
import style from "./ContactItem.module.scss"
import telegrammImg from "../../assets/image/telegram-x.png"

//const telegram = {backgroundImage : `url(${telegrammImg})`}

export const ContactItem = () => {
    return (
        <div className={style.contactItem} >
            <a href={'https://t.me/easychev'}></a>
        </div>
    )
}