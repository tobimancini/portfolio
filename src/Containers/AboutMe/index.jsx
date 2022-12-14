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
            const title = document.querySelector('.aboutMeTitle');
            if (y <= 600) {
                setAnimate(1);
                setAnimateDisplay(true);
                title.classList.add('animate');
                title.classList.remove('notAnimate');
            }
            if (animateDisplay === true && y >= 600) {
                setAnimate(2);
                title.classList.add('notAnimate');
                title.classList.remove('animate');
            }
        }
        window.addEventListener('scroll', () => handleAnimate())

        return () => {
            window.removeEventListener('scroll', () => handleAnimate())
        }

    }, [animate, animateDisplay]);

    return (
        <div id='aboutMe' ref={aboutMeRef} className='aboutMe'>
            <h2 className='sectionTitle aboutMeTitle'>ABOUT ME</h2>
            <div className='aboutBody'>
                <div className={animate === 0 ? 'aboutTitle' : animate === 1 ? 'aboutTitle animate' : 'aboutTitle animateBack'}>
                    <span className={animate === 0 ? 'spanTitle' : animate === 1 ? 'spanTitle animate' : 'spanTitle animateBack'}></span>
                </div>
                <div className={animate === 0 ? 'aboutList' : animate === 1 ? 'aboutList animate' : 'aboutList animateBack'}>
                    <p>Creative</p>
                    <p>Problem-solving oriented</p>
                    <p>Knwoledge driven</p>
                    <p>Fast learner</p>
                    <p>Great team-Work</p>
                    {/* <span className={animate === 0 ? 'spanList' : animate === 1 ? 'spanList animate' : 'spanList animateBack'}></span> */}
                </div>
                {/* <span className='aboutDoodles'></span> */}
            </div>
        </div>
    )
}

export default AboutMe