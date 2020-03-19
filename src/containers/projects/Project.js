import React from 'react';
import photo from './project-photo.jpg';
import './projects.css';

const Project = () => {
    return(
        <div className='mt5 mb3'>
            <a className="background f6 link dim ba ph3 pv2 mb2 dib dark-green bg-white" href="#0"> Тут буде назва проєкту</a>
            <p>Опис проєкту...</p>
            <h3>Галерея </h3>
            <div className='photo'></div>
            <img className='w5' src={ photo } />
            <img className='w5' src={ photo } />
            <img className='w5' src={ photo } />
            <p>*Буде можливість додавати новий проєкт, фото та опис до нього, коли заходиш як адмін. </p>
        </div>

    )
}

export default Project;