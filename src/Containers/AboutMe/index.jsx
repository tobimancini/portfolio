import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './styles.css';
import Typed from 'typed.js';
import typeAnimate from '../../Utils/typeAnimate';

const AboutMe = () => {

    const [animate, setAnimate] = useState(0);
    const [animateDisplay, setAnimateDisplay] = useState(false);
    const aboutMeRef = useRef();

    useEffect(() => {
        const currentRef = aboutMeRef.current;
        const handleAnimate = () => {
            const { y } = currentRef.getBoundingClientRect();
            if (y <= 600) {
                setAnimate(1);
                setAnimateDisplay(true);
            }
            if (animateDisplay === true && y >= 600) {
                setAnimate(2);
            }
        }
        window.addEventListener('scroll', () => handleAnimate())

        return () => {
            window.removeEventListener('scroll', () => handleAnimate())
        }

    }, [animate, animateDisplay]);

    const el = useRef(null);
    const typed = useRef(null);
    const strings = [
        'About Tobias',
        'About Me'
    ]

    useEffect(() => {
        typeAnimate(strings, el, typed);
    }, []);

    return (
        <div id='aboutMe' ref={aboutMeRef} className='aboutMe'>
            <div className={animate === 0 ? 'aboutTitle' : animate === 1 ? 'aboutTitle animate' : 'aboutTitle animateBack'}>
                <div className="type-wrap typedContain">
                    <span className='typed' style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
                <span className={animate === 0 ? 'spanTitle' : animate === 1 ? 'spanTitle animate' : 'spanTitle animateBack'}></span>
            </div>
            <div className={animate === 0 ? 'aboutList' : animate === 1 ? 'aboutList animate' : 'aboutList animateBack'}>
                <p>Creative</p>
                <p>Problem-solving oriented</p>
                <p>Knwoledge driven</p>
                <p>Fast learner</p>
                <p>Great team-Work</p>
                <span className={animate === 0 ? 'spanList' : animate === 1 ? 'spanList animate' : 'spanList animateBack'}></span>
            </div>
        </div>
    )
}

export default AboutMe