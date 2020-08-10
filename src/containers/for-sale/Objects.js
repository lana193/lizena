import React, { useEffect } from 'react';
import styled from 'styled-components';

import ObjectCard from './ObjectCard';
import AddObjectModal from './AddObjectModal';

const ObjectsContainer = styled.div`
    padding: 100px 0 150px 0;
    width: 100%;

    @media only screen and (max-width: 767.98px) {
        padding: 60px 0 50px 0;
    }

    .objects-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const Objects = ({
    handleGetObjects,
    handleCreateObject,
    selectedObjects
}) => {

    const currentUserToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        handleGetObjects();
    }, [handleGetObjects])

    return (
        <ObjectsContainer>
            { currentUserToken && <AddObjectModal handleCreateObject={handleCreateObject} />}
                <div className='objects-wrapper'>
                    { selectedObjects.map((item, i) => (
                        <ObjectCard key={i} {...item} />
                        )
                    )}
                </div>
        </ObjectsContainer>
    )
}

export default Objects;