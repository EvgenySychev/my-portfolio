import style from "./NavigateBtn.module.scss"

export const NavigateBtn = () => {
    return (
        <div className={style.navs}>
            <span className={style.navsBtn}>{'<'}</span>
            <span className={style.navsBtn}>{'>'}</span>
        </div>
    )
}