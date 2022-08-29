import React, {useCallback} from "react";
import Particles from "react-tsparticles";
import style from "./Particle.module.scss"
import {loadFull} from "tsparticles";
import {Container} from "react-dom";

const particlesOptions = {
    "particles": {
        "links": {
            "enable": true
        },
        "shape": {
            "type": "star",
            "options": {
                "sides": 5
            }
        },
        "move": {
            "enable": true
        },
        "size": {
            "value": 3
        }
    }
}

export const Particle = () => {

    const particlesInit = useCallback(async (engine: any) => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles className={style.particles} id="tsparticles"
                   init={particlesInit}
            // @ts-ignore
                   options={particlesOptions}
            // @ts-ignore
                   loaded={particlesLoaded}/>
    )
}