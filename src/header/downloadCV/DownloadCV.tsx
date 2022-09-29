import style from "./DownloadCV.module.scss"

// @ts-ignore
import myPDF from "../../assets/pdf/resume-SychevEA-Frontend-Developer.pdf"

export const DownloadCV = () => {

    return (
        <a href={myPDF} download={"resume-SychevEA-Frontend-Developer.pdf"} className={style.downloadCvBlock}>
            <span className={style.animatedButton}>
                <span>DOWNLOAD CV</span>
                <div>CV</div>
            </span>
        </a>
    )
}