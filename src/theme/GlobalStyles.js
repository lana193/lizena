import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * { 
      margin: 0; 
      padding: 0; 
      font-family: Montserrat, Arial, Helvetica, sans-serif;
      color: rgb(71, 71, 71);
  }

  a {
      text-decoration: none;
  }

  @media only screen and (max-width: 767.98px){
    p {
        text-align: center;
    }

//   .ReactModal__Body--open {
//     overflow: hidden;
//   }
`;
