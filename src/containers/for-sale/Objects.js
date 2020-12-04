import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import ObjectCard from './ObjectCard';
import AddObjectModal from './AddObjectModal';

const ObjectsContainer = styled.div`
    padding: 70px 0 150px 0;
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
    handleGetObject,
    selectedObjects
}) => {

    const currentUserToken = localStorage && localStorage.getItem('jwtToken');

    useEffect(() => {
        !selectedObjects.length && handleGetObjects();
    }, [handleGetObjects, selectedObjects.length])

    return (
        <ObjectsContainer>
            <Helmet>
                <title>Лізена | Об'єкти під продаж</title>
                <meta name='description' content='Будівельно-ремонтна компанія Лізена | Продаж котеджів Львів' />
            </Helmet>
            { currentUserToken && <AddObjectModal handleCreateObject={handleCreateObject} handleGetObjects={handleGetObjects}/>}
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