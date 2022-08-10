import style from "./DownloadCV.module.scss"

export const DownloadCV = () => {
    return (
        <div className={style.downloadCvBlock}>
            <a>
            <span className={style.animatedButton}>
                <span>DOWNLOAD CV</span>
            </span>
                <i className={style.icon}></i>
            </a>
        </div>
    )
}