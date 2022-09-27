import React from 'react'
import Typed from 'typed.js';

const typeAnimate = (strings, el, typed, num) => {
    const options = {
        strings: strings
        ,
        typeSpeed: 90,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: num === 2 ? 1400 : 800,
        showCursor: false
    };

    typed.current = new Typed(el.current, options);
    return () => {
        typed.current.destroy();
    }
}

export default typeAnimate