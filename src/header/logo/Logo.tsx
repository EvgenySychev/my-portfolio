import style from "./Logo.module.scss"

export const Logo = () => {

    return (
        <div className={style.logoBlock}>
            <a className={style.logo}>
                <span>ES</span>
            </a>
        </div>
    )
}
