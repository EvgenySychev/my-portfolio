import style from "./DownloadCV.module.scss"

// @ts-ignore
import myPDF from "../../assets/pdf/Resume_Evgeny_Sychev_Frontend-developer.pdf"

export const DownloadCV = () => {

    return (
        <a href={myPDF} download={"Resume_Evgeny_Sychev_Frontend-developer_2023"} className={style.downloadCvBlock}>
            <span className={style.animatedButton}>
                <span>DOWNLOAD CV</span>
                <div>CV</div>
            </span>
        </a>
    )
}