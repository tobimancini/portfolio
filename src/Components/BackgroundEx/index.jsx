import React, { useState } from 'react'
import BlockAnimation from '../BlockAnimation'
import './styles.css'

const BackgroundEx = () => {

    const [animate, setAnimate] = useState(false)

    return (
        <div className='bgExample' >
            <img className='imagen' src="./racoonMarket.png" alt="img" />

            <div className={animate === true ? 'animationBox animated' : 'animationBox'}>
                <div className={animate === true ? 'animationBox animated' : 'animationBox'}>
                <BlockAnimation animate={animate} />
                <BlockAnimation animate={animate} />
                </div>
                <div className={animate === true ? 'animationBox animated' : 'animationBox'}>
                <BlockAnimation animate={animate} />
                <BlockAnimation animate={animate} />
                </div>                    
            </div>
            <div className={animate === true ? 'animationBox animated' : 'animationBox'}>
                <div className={animate === true ? 'animationBox animated' : 'animationBox'}>
                <BlockAnimation animate={animate} />
                <BlockAnimation animate={animate} />
                </div>
                <div className={animate === true ? 'animationBox animated' : 'animationBox'}>
                <BlockAnimation animate={animate} />
                <BlockAnimation animate={animate} />
                </div>                    
            </div>
            <button className='button' onClick={() => setAnimate(true)}>PRESS</button>
        </div>
    )
}

export default BackgroundEx