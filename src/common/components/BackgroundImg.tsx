import s from "../../App.module.scss";
import frontImg1 from "../../assets/image/firstFoto.jpg";
import frontImg2 from "../../assets/image/secondFoto.jpg";
import frontImg3 from "../../assets/image/SychFull.jpg";
import {useEffect, useState} from "react";

export const BackgroundImg = () => {

    const arrImg = [frontImg1,frontImg2,frontImg3]
    const [counter,setCounter] = useState(0)

    console.log("BackgroundImg")

    useEffect(()=>{
        setInterval(()=>{
            setCounter((prevIndex) =>
                prevIndex === arrImg.length - 1 ? 0 : prevIndex + 1)
        }, 5000)
    },[])

    return <div className={s.backgroundImg} style={{backgroundImage: `url(${arrImg[counter]})`}}/>
}