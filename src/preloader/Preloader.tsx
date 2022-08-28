import React from "react";

type PreloaderPropsType = {
    callBack: () => void
}

export const Preloader = (props: PreloaderPropsType) => {

    const switchHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <span> Сайт в процессе разработки...</span>
            <button onClick={switchHandler}>Я работодатель. Хочу посмотреть, что уже сделано</button>
        </div>
    )
}