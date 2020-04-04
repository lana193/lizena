import React from 'react';
import styled from 'styled-components';
import home from './medium.jpg';

import { Button } from '../../elements/Button';
import About from './About';
import WhyUs from './WhyUs';


const H1 = styled.h1`
    color: white;
    // font-family: 'Nunito Sans', sans-serif;
    // font-size: 20px;
    text-transform: uppercase;
    // font-family: 'Raleway, sans-serif',
    font-family: 'Ubuntu', sans-serif;
    // font-style: oblique 40deg;

`;

const sectionStyle = {
    width: '100%',
    height: '600px',
    backgroundImage: `url(${home})`,
    backgroundSize: '100% 100%',
    padding: '3%'
  };

const Home = () => {
    return (
        <div className='pt5'>
            <div style={sectionStyle}>
            <H1>Будівельно-ремонтна компанія ЛІЗЕНА</H1>
            <Button name={'Замовити безкоштовну консультацію'} />
            </div>
        <About />
        <WhyUs />
        </div>
    )
}

export default Home;