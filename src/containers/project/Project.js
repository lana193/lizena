import React, { useEffect } from 'react';
import styled from 'styled-components';

import ProjectGallery from './ProjectGallery';
import DeleteProjectModal from './DeleteProjectModal';
import UpdateProjectModal from './UpdateProjectModal';
import { H3, P2 } from '../../theme/StyledElements';

const ProjectWrapper = styled.div`
    padding: 10% 3%;

    @media only screen and (max-width: 767.98px) {
        grid-template-columns: 1fr;
        padding: 6em 0;
        grid-gap: 20px 0;
        padding-top: 20%;
        padding-bottom: 10%;
    }
`;

const Project = (props) => {
    const { handleGetProject, match, selectedProject, handleDeleteProject, handleUpdateProject } = props;
    const currentUserToken = localStorage.getItem('jwtToken');

    useEffect(() => {
            handleGetProject(match.params.id)
    }, [handleGetProject, match.params.id])

    return(
        <ProjectWrapper>
            <div className='project-desc'>
                <H3>{selectedProject.project_name}</H3>
                <P2>{selectedProject.description}</P2>
            </div>
            <H3>Галерея</H3>
            <div className=''>
                <ProjectGallery photos={selectedProject.photos}/>
            </div>
            { currentUserToken && 
                <div>
                    <UpdateProjectModal 
                        handleUpdateProject={handleUpdateProject} 
                        projectId={match.params.id} 
                        selectedProject={selectedProject}
                        handleGetProject={handleGetProject}
                    />
                    <DeleteProjectModal handleDeleteProject={handleDeleteProject} projectId={match.params.id} />
                </div>
            }
        </ProjectWrapper>
    )
}

export default Project;