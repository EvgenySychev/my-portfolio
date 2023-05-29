import s from './BackgroundImg.module.scss';
import frontImg1 from "../../assets/image/firstFoto.jpg";
import frontImg2 from "../../assets/image/secondFoto.jpg";
import frontImg3 from "../../assets/image/SychFull.jpg";
import {useEffect, useState} from "react";

export const BackgroundImg = () => {

    const arrImg = [
        {
            id: 1,
            imgUrl: frontImg1
        },
        {
            id: 2,
            imgUrl: frontImg2
        },
        {
            id: 3,
            imgUrl: frontImg3
        }
    ]
    const [backgroundImg, setBackgroundImg] = useState(arrImg)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const lastIndex = backgroundImg.length - 1
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex)
        }
        if (currentIndex > lastIndex) {
            setCurrentIndex(0)
        }
    }, [currentIndex, backgroundImg])

    useEffect(() => {
        let slider = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 2 ? 0 : prevIndex + 1)
        }, 15000)
        return () => clearInterval(slider)
    }, [currentIndex])

    return <div>
        {backgroundImg.map((currentImg, imgIndex: number) => {
            // const {id,imgUrl} = currentImg
            let position = 'nextSlide'
            if (imgIndex === currentIndex) {
                position = 'activeSlide'
            }
            if (imgIndex === currentIndex - 1 || (currentIndex === 0 && backgroundImg.length - 1)) {
                position = 'lastSlide'
            }
            return (
                <div className={position}>
                    <div className={s.backgroundImg}
                         style={{
                             backgroundImage: `url(${backgroundImg[currentIndex].imgUrl})`,
                         }}/>
                </div>
            )
        })}
    </div>

}
