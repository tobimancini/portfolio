import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import './styles.css';
import typeAnimate from '../../Utils/typeAnimate';
import { DiCss3, DiHtml5, DiJavascript, DiReact } from 'react-icons/di';

const Knowledge = () => {

    const [knowledge, setKnowledge] = useState('HTML-CSS');

    const htmlText = "In this course I learned HTML and CSS. I also learned how to use SASS as a preprocessor and bootsrap's library as tools to improve my coding."
    const jsText = "In this course I learned Javascript's fundamentals and all it's tools making practical work. I got to work with different libraries, using promises, asynchrony and learned how to apply development techniques for modern apps with AJAX and Fetch."
    const reactText = "In this course I learned in depth how to use React JS and develop an app by components. I also used Firebase to store different type of information and act as backend."

    const changeFw = () => {
        if (knowledge === 'HTML-CSS') {
            setKnowledge('JAVASCRIPT')
        } else if (knowledge === 'JAVASCRIPT') {
            setKnowledge('REACT JS')
        } else {
            setKnowledge('HTML-CSS')
        }
    }

    const changeBw = () => {
        if (knowledge === 'HTML-CSS') {
            setKnowledge('REACT JS')
        } else if (knowledge === 'JAVASCRIPT') {
            setKnowledge('HTML-CSS')
        } else {
            setKnowledge('JAVASCRIPT')
        }
    }

    const [animate, setAnimate] = useState(0);
    const knowledgeRef = useRef();

    useEffect(() => {
        const currentRef = knowledgeRef.current;
        const handleAnimate = () => {
            const { y } = currentRef.getBoundingClientRect();
            const html = document.querySelector('.html');
            const js = document.querySelector('.js');
            const react = document.querySelector('.react');
            const title = document.querySelector('.educationTitle')
            if (y <= 530) {
                html.classList.add('animate');
                js.classList.add('animate');
                react.classList.add('animate');
                title.classList.remove('notAnimate');
                title.classList.add('animate');
                document.querySelector('.infoContainer').classList.add('animate');
                setAnimate(1);
            }
            else{
                title.classList.remove('animate');
                title.classList.add('notAnimate');
            }
        }
        window.addEventListener('scroll', () => handleAnimate())

        return () => {
            window.removeEventListener('scroll', () => handleAnimate())
        }

    }, [animate]);

    return (
        <div id='education' ref={knowledgeRef} className='knowledge'>
            <h2 className='sectionTitle educationTitle'>EDUCATION</h2>
            <div className='courses'>
                <div className={knowledge === 'HTML-CSS' && animate === 1 ? 'course html animate selected' : animate === 1 ? 'course html animate' : 'course html'}
                    onClick={() => setKnowledge('HTML-CSS')}>
                    <div className='courseContain'>
                        <DiHtml5 className='htmlCss'/>
                        <DiCss3 className='htmlCss'/>
                    </div>
                    <h3>HTML-CSS</h3>
                    <span className='courseSpan'></span>
                </div>
                <div className={knowledge === 'JAVASCRIPT' && animate === 1 ? 'course js animate selected' : animate === 1 ? 'course js animate' : 'course js'}
                    onClick={() => setKnowledge('JAVASCRIPT')}>
                    <div className='courseContain'>
                    <DiJavascript className='jsReact'/>
                    </div>
                    <h3>JAVASCRIPT</h3>
                    <span className='courseSpan'></span>
                </div>
                <div className={knowledge === 'REACT JS' && animate === 1 ? 'course react animate selected' : animate === 1 ? 'course react animate' : 'course react'}
                    onClick={() => setKnowledge('REACT JS')}>
                    <div className='courseContain'>
                        <DiReact className='jsReact'/>
                    </div>
                    <h3>REACT JS</h3>
                    <span className='courseSpan'></span>
                </div>
            </div>
            <div className='infoContainer'>
                <div className={knowledge === 'HTML-CSS' ? 'certificate html' : knowledge === 'JAVASCRIPT' ? "certificate js" : 'certificate react'} ></div>
                <div className='info'>
                    <h2>{knowledge}</h2>
                    <p className={knowledge === 'HTML-CSS' ? 'htmlTxt' : knowledge === 'JAVASCRIPT' ? 'jsTxt' : 'reactTxt'} >
                        {knowledge === 'HTML-CSS' ? htmlText : knowledge === 'JAVASCRIPT' ? jsText : reactText}
                    </p>
                </div>
            </div>
            <div className='bgKnowledge'>
                <div className='styleContainer'>
                    <div className='styleElement'></div>
                </div>
            </div>
            <div className='bgYellow'></div>
            <img className='signo1' src="./signo2.png" alt="signo1" onClick={() => changeBw()} />
            <img className='signo2' src="./signo1.png" alt="signo2" onClick={() => changeFw()} />
        </div>
    )
}

export default Knowledge