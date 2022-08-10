import React from 'react'
import style from 'src/remoteWork/RemoteWork.module.scss';

export function RemoteWork() {
    return (
        <div className={style.remoteWork}>
            <div className= {style.block}>
                <h3 className={style.title}> Рассматриваю варианты удаленной работы</h3>
                <button>Нанять меня</button>
            </div>

        </div>
    );
}