import styled from 'styled-components';

export const H2 = styled.h2`
    color: ${(props) => props.theme.colors.darkslategray};
    // font-family: 'Raleway, sans-serif';
    // font-family: 'Poiret One', cursive;
    // font-family: 'Didact Gothic', sans-serif;
    // font-family: 'Comfortaa', cursive;
    // font-family: 'Inria Sans', sans-serif;
    // font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 35px;
    // font-family: 'Ubuntu', sans-serif;
    // font-family: 'Old Standard TT', serif;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 1em 0;

    
    text-align: center;
    text-transform: uppercase;

    @media only screen and (max-width: 767.98px){
         {
            font-size: 30px;
        }

`;

export const P = styled.p`
   font-family: 'Didact Gothic', sans-serif;
   font-size: 18px;
   font-weight: 500;
//    letter-spacing: 0.1em;

    @media screen only and ()
`;

export const H5 = styled.h5`
    font-family: 'Didact Gothic', sans-serif;
    font-size: 23px;
    font-weight: 600px;
    color: ${(props) => props.theme.colors.darkslategray};
    padding: 0;
    margin: 0;
`;