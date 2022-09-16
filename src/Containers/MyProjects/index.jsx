import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import typeAnimate from '../../Utils/typeAnimate';

const MyProjects = () => {
    const [animate, setAnimate] = useState(false);
    const projectsRef = useRef();

    useEffect(() => {
        const currentRef = projectsRef.current;
        const handleAnimate = () => {
            const { y } = currentRef.getBoundingClientRect();
            if (y <= 195) {
                setAnimate(true);
            }
        }
        window.addEventListener('scroll', () => handleAnimate())

        return () => {
            window.removeEventListener('scroll', () => handleAnimate())
        }

    }, [animate]);


    const el = useRef(null);
    const typed = useRef(null);
    const strings = [
        'My projects',
        'My WORK'
    ]

    useEffect(() => {
        typeAnimate(strings, el, typed);
    }, []);

    return (
        <div ref={projectsRef} id='myProjects' className='myProjects'>
            <div className='projectsTitle'>
                <div className="type-wrap typedTitle">
                    <span className='typed' style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
                <img src="./developApp.png" alt="developing" />
            </div>
            <div className='projects'>
                <span className={animate === false ? 'line racoon' : 'line racoon animate'}></span>
                <div className={animate === false ? 'project racoon' : 'project racoon animate'} >
                    <div className='projectInfo'>
                        <h3>RACOON</h3>
                        <p>This site was created to simulate a real e-commerce. It was developed with ReactJs, and it was my final project for ReactJs's course in Coderhouse.</p>
                        <a className='visit' href='https://tobimancini.github.io/proyecto-react/' target="_blank">MAKE A VISIT</a>
                    </div>
                    <span className='projectImg racoon'>
                        <img src="./racoonMarket2.png" alt="racoon" />
                    </span>
                    <span className='projectSpan racoon'></span>
                </div>
                <div className={animate === false ? 'project aq' : 'project aq animate'} >
                    <span className='projectImg aq'>
                        <img src="./adivina-quien.png" alt="aq" />
                    </span>
                    <div className='projectInfo'>
                        <h3>ADIVINA QUIÉN (GUESS WHO)</h3>
                        <p>This site was created to practice in depth pure Javascript. It consists on a game based on a real board game called Guess Who.</p>
                        <a className='visit' href='https://tobimancini.github.io/adivina-quien/' target="_blank">MAKE A VISIT</a>
                    </div>
                    <span className='projectSpan aq'></span>
                </div>
                <span className={animate === false ? 'line aq' : 'line aq animate'}></span>
            </div>
        </div>
    )
}

export default MyProjects