import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import './styles.css';

const Knowledge = () => {

    const [knowledge, setKnowledge] = useState('HTML-CSS');

    const htmlText = "In this course i learned HTML and CSS. I also learned how to use SASS as a preprocessor and bootsrap's library as tools to improve my coding."
    const jsText = "In this course i learned Javascript's fundamentals and all it's tools making practical work. I got to work with different libraries, using promises, asynchrony and how to apply development techniques for modern apps with AJAX and Fetch."
    const reactText = "In this course i learned in depth how to use React JS and develop an app by components. I also used Firebase to store different type of information and act as backend."

    const changeFw = () => {
        if (knowledge === 'HTML-CSS') {
            setKnowledge('Javascript')
        } else if (knowledge === 'Javascript') {
            setKnowledge('React JS')
        } else {
            setKnowledge('HTML-CSS')
        }
    }

    const changeBw = () => {
        if (knowledge === 'HTML-CSS') {
            setKnowledge('React JS')
        } else if (knowledge === 'Javascript') {
            setKnowledge('HTML-CSS')
        } else {
            setKnowledge('Javascript')
        }
    }

    const [animate, setAnimate] = useState(0);
    const [visible, setVisible] = useState(false);
    const knowledgeRef = useRef();

    useEffect(()=>{
        const currentRef = knowledgeRef.current;
        const handleAnimate = ()=>{
            const { y } = currentRef.getBoundingClientRect();
            const html = document.querySelector('.html');
            const js = document.querySelector('.js');
            const react = document.querySelector('.react');
            if (y <= 530) {
                html.classList.add('animate');
                js.classList.add('animate');
                react.classList.add('animate');
                document.querySelector('.infoContainer').classList.add('animate');
                setAnimate(1);
            }
        }
        window.addEventListener('scroll', ()=>handleAnimate())

        return()=>{
            window.removeEventListener('scroll', ()=>handleAnimate())
        }

    }, [animate]);


    return (
        <div id='education' ref={knowledgeRef} className='knowledge'>
            <h2 className='knowledgeTitle'>Education</h2>
            <div className='courses'>
                <div className={knowledge==='HTML-CSS'&&animate===1? 'course html animate selected':animate===1?'course html animate':'course html'} 
                onClick={() => setKnowledge('HTML-CSS')}>HTML-CSS</div>
                <div className={knowledge === 'Javascript'&&animate===1?'course js animate selected':animate===1?'course js animate':'course js'} 
                onClick={() => setKnowledge('Javascript')}>Javascript</div>
                <div className={knowledge === 'React JS'&&animate===1?'course react animate selected':animate===1?'course react animate':'course react'} 
                onClick={() => setKnowledge('React JS')}>React JS</div>
            </div>
            <div className='infoContainer'>
                <img className='certificate' src={knowledge === 'HTML-CSS' ? './certificadoHTMLCSS.png' : knowledge === 'Javascript' ? "./certificado.jpg" : './certificadoReact.png'}
                    alt="certificado" />
                <div className='info'>
                    <h2>{knowledge}</h2>
                    <p className={knowledge === 'HTML-CSS' ? 'htmlTxt' : knowledge === 'Javascript' ? 'jsTxt' : 'reactTxt'} >
                        {knowledge === 'HTML-CSS' ? htmlText : knowledge === 'Javascript' ? jsText : reactText}
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