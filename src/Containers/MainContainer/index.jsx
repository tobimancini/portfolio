import React, { useContext, useState } from 'react';
import { Tools } from '../../Context';
import './styles.css'

const MainContainer = () => {

    const abroSigno = "<";
    const cierroSigno = "/>";

    const { time, setTime } = useContext(Tools);

    const [selectTime, setSelectTime] = useState(time);

    const setTimeTheme = setInterval(() => {
        if (time === "day" || time === "night") {
            setSelectTime(time);
            clearInterval(setTimeTheme);
        }
    }, 500);
    

    // const handleTime = (dayOrNight)=>{
    //     setSelectTime(dayOrNight);
    //     setTime(dayOrNight);
    // }


    return (
        <div id='mainContainer' className={time === "day" ? 'mainContainer day' : 'mainContainer night'}>
            <div className='welcomeContainer'>
                <div className='firstRow'>
                    <div className='welcomeText wel'>{abroSigno}WEL</div>
                    <div className='welcomeText come'>COME{cierroSigno}</div>

                    <h1 className="bigName">I'm TOBIAS MANCINI</h1>
                    <h2 className='bigSubtitle'>Frontend Developer</h2>
                </div>
                <div className='brandLogo'></div>
                <p className='scrollTxt seven'>Please scroll down</p>
            </div>
        </div>
    )
}

export default MainContainer