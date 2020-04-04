import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkContainer = styled.link`
    color: red;
`;

export const LinkElement = ({ name, nav }) => {
    return (
        <LinkContainer>
            <Link to={nav}>
{name}
            </Link>
        </LinkContainer>
    );
}
