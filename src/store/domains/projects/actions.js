import { getService, postService, deleteService, updateService } from '../../services';
import actionTypes from './actionTypes';

const getProjects = () => ({
    type: actionTypes.GET_PROJECTS,
    payload: getService('lizena/projects')
})

export const handleGetProjects = () => {
    return async(dispatch) => {
        await dispatch(getProjects());
    }
};

const getProject = (projectId) => ({
    type: actionTypes.GET_PROJECT,
    payload: getService(`lizena/project/${projectId}`)
})

export const handleGetProject = (projectId) => {
    return async(dispatch) => {
        await dispatch(getProject(projectId));
    }
};

const createProject = (projectData) => ({
    type: actionTypes.CREATE_PROJECT,
    payload: postService('lizena/project', projectData)
})

export const handleCreateProject = (projectData) => {
    return async(dispatch) => {
        await dispatch(createProject(projectData));
    }
};

const deleteProject = (projectId) => ({
    type: actionTypes.DELETE_PROJECT,
    payload: deleteService(`lizena/project/${projectId}`)
})

export const handleDeleteProject = (projectId) => {
    return async(dispatch) => {
        await dispatch(deleteProject(projectId));
    }
};

const updateProject = (projectId, projectData) => ({
    type: actionTypes.UPDATE_PROJECT,
    payload: updateService(`lizena/project/${projectId}`, projectData)
})

export const handleUpdateProject = (projectId, projectData) => {
    return async(dispatch) => {
        await dispatch(updateProject(projectId, projectData));
    }
};
