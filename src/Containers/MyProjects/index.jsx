import React from 'react';
import './styles.css';

const MyProjects = () => {

    return (
        <div id='myProjects' className='myProjects'>
            <div className='projectsTitle'>
            <h2>My projects</h2>
            <img src="./developApp.png" alt="developing" />
            </div>
            <div className='projects'>
                <div className='projectInfo racoon'></div>
                <div className='project racoon'>
                    <span className='projectImg racoon'></span>
                </div>
                <div className='project aq'>
                    <span className='projectImg aq'></span>
                </div>
                <div className='projectInfo aq'></div>
            </div>
        </div>
    )
}

export default MyProjects