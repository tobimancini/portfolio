import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Typed from 'typed.js';
import './styles.css'

const MainContainer = () => {

    const [typing, setTyping] = useState(false);

    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'Tobias Mancini',
                'Frontend Developer'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop:true,
            backDelay: 1500
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
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
                    <span style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
                <img className='developerPng six' src="./developer.png" alt="developer" />
            </div>
        </div>
    )
}

export default MainContainer