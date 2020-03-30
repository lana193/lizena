import React from 'react';
import project from './project.jpg';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
  return(
    <article class='bg-white center mw5 ba b--black-10 mv4 br4 shadow-5'>
      <div class="pv2 ph3">
        <h1 class="f6 ttu tracked">Назва проєкту</h1>
      </div>
      <img src={project} class="w-100 db" alt='Project item'/>
      <div class="pa3">
        <Link to='./projects/project' class="link dim lh-title">Детальніше про проєкт</Link>
      </div>
    </article>
  );
}

export default ProjectCard;

