import { getService, postService, deleteService, updateService } from '../../services';
import actionTypes from './actionTypes';

const getObjects = () => ({
    type: actionTypes.GET_OBJECTS,
    payload: getService('lizena/objects')
})

export const handleGetObjects = () => {
    return async(dispatch) => {
        await dispatch(getObjects());
    }
};

const getObject = (objectId) => ({
    type: actionTypes.GET_OBJECT,
    payload: getService(`lizena/object/${objectId}`)
})

export const handleGetObject = (objectId) => {
    return async(dispatch) => {
        await dispatch(getObject(objectId));
    }
};

const createObject = (objectData) => ({
    type: actionTypes.CREATE_OBJECT,
    payload: postService('lizena/object', objectData)
})

export const handleCreateObject = (objectData) => {
    return async(dispatch) => {
        await dispatch(createObject(objectData));
    }
};

const deleteObject = (objectId) => ({
    type: actionTypes.DELETE_Object,
    payload: deleteService(`lizena/object/${objectId}`)
})

export const handleDeleteObject = (objectId) => {
    return async(dispatch) => {
        await dispatch(deleteObject(objectId));
    }
};

const updateObject = (objectId, objectData) => ({
    type: actionTypes.UPDATE_OBJECT,
    payload: updateService(`lizena/object/${objectId}`, objectData)
})

export const handleUpdateObject = (objectId, objectData) => {
    return async(dispatch) => {
        await dispatch(updateObject(objectId, objectData));
    }
};
