import React from 'react';
import './styles.css';

const MyProjects = () => {

    return (
        <div className='myProjects'>
            <div className='projectsTitle'>
            <h2>My projects</h2>
            <img src="./developApp.png" alt="developing" />
            </div>
            <div className='projects'>
                <div className='project'>Proyecto 1</div>
                <div className='project'>Proyecto 2</div>
            </div>
        </div>
    )
}

export default MyProjects