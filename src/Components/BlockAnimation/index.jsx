import React from 'react'
import { useState } from 'react'
import './styles.css'

const BlockAnimation = (props) => {

    console.log(props.animate);

    const animate = props.animate;


    return (
        <div className={animate===false?'blockAnimation':'blockAnimation animated'}>
            <div className='blocksContainer'>
                <div className={animate===true?'block block1':'block'} ></div>
                <div className={animate===true?'block block2':'block'}></div>
                <div className={animate===true?'block block3':'block'}></div>
                <div className={animate===true?'block block4':'block'}></div>
                <div className={animate===true?'block block5':'block'}></div>
            </div>
            <div className='blocksContainer'>
                <div className={animate===true?'block block6':'block'}></div>
                <div className={animate===true?'block block7':'block'}></div>
                <div className={animate===true?'block block8':'block'}></div>
                <div className={animate===true?'block block9':'block'}></div>
                <div className={animate===true?'block block10':'block'}></div>
            </div>
            <div className='blocksContainer'>
                <div className={animate===true?'block block11':'block'}></div>
                <div className={animate===true?'block block12':'block'}></div>
                <div className={animate===true?'block block13':'block'}></div>
                <div className={animate===true?'block block14':'block'}></div>
                <div className={animate===true?'block block15':'block'}></div>
            </div>
            <div className='blocksContainer'>
                <div className={animate===true?'block block16':'block'}></div>
                <div className={animate===true?'block block17':'block'}></div>
                <div className={animate===true?'block block18':'block'}></div>
                <div className={animate===true?'block block19':'block'}></div>
                <div className={animate===true?'block block20':'block'}></div>
            </div>
            <div className='blocksContainer'>
                <div className={animate===true?'block block21':'block'}></div>
                <div className={animate===true?'block block22':'block'}></div>
                <div className={animate===true?'block block23':'block'}></div>
                <div className={animate===true?'block block24':'block'}></div>
                <div className={animate===true?'block block25':'block'}></div>
            </div>
        </div>
    )
}

export default BlockAnimation