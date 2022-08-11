import style from "./DownloadCV.module.scss"

export const DownloadCV = () => {
    return (

        <a className={style.downloadCvBlock}>
            <span className={style.animatedButton}>
                <span>DOWNLOAD CV</span>
            </span>
            <i className={style.icon}></i>
        </a>

    )
}