import React from 'react'
import Typed from 'typed.js';

const typeAnimate = (strings, el, typed) => {
    const options = {
        strings: strings
        ,
        typeSpeed: 50,
        backSpeed: 50,
        loop:true,
        backDelay: 1500,
        startDelay: 800
    };

    typed.current = new Typed(el.current, options);
    return () => {
        typed.current.destroy();
    }
}

export default typeAnimate