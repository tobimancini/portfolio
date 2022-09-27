import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Typed from 'typed.js';
import typeAnimate from '../../Utils/typeAnimate';
import './styles.css'

const MainContainer = () => {

    const abroSigno = "<";
    const cierroSigno = "/>"

    return (
        <div id='mainContainer' className='mainContainer'>
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