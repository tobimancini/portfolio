import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Typed from 'typed.js';
import typeAnimate from '../../Utils/typeAnimate';
import './styles.css'

const MainContainer = () => {

    const el = useRef(null);
    const typed = useRef(null);
    const strings = [
        'Tobias Mancini',
        'Frontend Developer'
    ]

    useEffect(() => {
        typeAnimate(strings, el, typed);
    }, []);
    

    return (
        <div className='mainContainer'>
            <div className='welcomeCont'>
                <p className='welcomeTxt one'>WEL</p>
                <p className='welcomeTxt two'>COM</p>
                <p className='eLetter three'>E</p>
            </div>
            <h2 className='hugeI four'>i</h2>
            <div className='amContainer'>
                <h3 className='amTxt five'>AM</h3>
                <p className='scrollTxt seven'>Please scroll down</p>
            </div>
            <div className='whoContainer'>
                <div className="type-wrap rightTxt">
                    <span className='typed' style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
                <img className='developerPng six' src="./developer.png" alt="developer" />
            </div>
        </div>
    )
}

export default MainContainer