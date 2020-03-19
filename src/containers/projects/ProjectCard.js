import React from 'react';
import project from './project.jpg';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
    return(
        <article class="bg-white center mw5 ba b--black-10 mv4">
  <div class="pv2 ph3">
     <h1 class="f6 ttu tracked">Назва проєкту</h1>
  </div>
  <img src={project} class="w-100 db" alt="Closeup photo of a tabby cat yawning."/>
  <div class="pa3">
    <Link to='./projects/project' class="link dim lh-title">Детальніше про проєкт</Link>
    {/* <small class="gray db pv2">AMP - <time>6 hours ago</time></small> */}
  </div>
</article>
    )
}

export default ProjectCard;

