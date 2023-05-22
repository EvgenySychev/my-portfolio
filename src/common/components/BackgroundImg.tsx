import s from "../../App.module.scss";
import frontImg1 from "../../assets/image/firstFoto.jpg";
import frontImg2 from "../../assets/image/secondFoto.jpg";
import frontImg3 from "../../assets/image/SychFull.jpg";
import {useEffect, useState} from "react";

export const BackgroundImg = () => {

    // const arrImg = [frontImg1, frontImg2, frontImg3]
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCounter((prevIndex) =>
                prevIndex === 3 ? 1 : prevIndex + 1)
        }, 3000)
    }, [])

    return <div>
        <div className={s.backgroundImg}
            style={{
                backgroundImage: `url(${frontImg1})`,
                display: counter === 1 ? '' : 'none'
            }}/>
        <div className={s.backgroundImg}
            style={{
                backgroundImage: `url(${frontImg2})`,
                display: counter === 2 ? '' : 'none'
            }}/>
        <div className={s.backgroundImg}
            style={{
                backgroundImage: `url(${frontImg3})`,
                display: counter === 3 ? '' : 'none'
            }}/>
    </div>
}

//https://medium.com/suyeonme/react-how-to-build-an-image-slider-with-hooks-in-react-decd4a3ab152