import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import background from './background.jpg';
import { KeyIcon, RightArrow } from '../../icons/Icons';
import About from './About'; 
import WhyUs from './WhyUs'; 
import ContactModal from './ContactModal';
import ByApartment from './ByApartment';

const HomePageWrapper = styled.div`
    .background-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        height: 800px;
        // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
        background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%), url(${background});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        padding: 5% 2% 2% 2%;
        background-attachment: fixed;

        .buy-appartment {
            align-self: flex-end;
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {
                display: flex;
                align-items: center;
                border: 5px solid transparent;
                background: rgb(60,179,113);
                color: rgb(240,255,240);
                border-radius: 40px;
                font-family: 'Source Sans Pro',sans-serif;
                font-size: 17px;
                text-transform: uppercase;
                padding: 10px 30px;
                overflow: hidden;
                cursor: pointer;
                width: 220px;
                transition: 
                all        1.2s,
                border     0.5s 1.2s,
                box-shadow 0.3s 1.5s;
                white-space: nowrap;
                text-indent: 23px;
                font-weight: bold;
                span {
                    display: inline-block;
                    transform: translateX(300px);
                    font-weight: normal;
                    font-family: 'Raleway, sans-serif';
                    font-size: 25px;
                    opacity: 0;
                    transition: 
                     opacity 0.1s 0.5s;
                     transform 0.4s 0.5s;
                }

                &:hover {
                text-indent: 0;
                background: #003018;
                color: white;
                width: 260px;
                border: 10px solid rgb(60,179,113);
                box-shadow: 3px 3px 2px rgba(black, 0.15);
                span {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        }
          
    }

    @media only screen and (max-width: 767.98px) {
        padding-top: 10%;
        height: 720px;
    }
`;


const H1 = styled.h1`
    color: rgb(240,255,240);
    padding: 0.5em 0;
    font-size: 2em;
    text-transform: uppercase;

    @media only screen and (max-width: 767.98px) {
        font-size: 1.5em;
    }
`;

const Home = () => {
    return (
        <HomePageWrapper>
            <div className='background-container'>
                <div className='header'>
                    <H1>Будівельно-ремонтна компанія ЛІЗЕНА</H1>
                    <ContactModal/>
                </div>
                <div className='buy-appartment'>
                    <Link to='/for-sale'>
                        <button>Придбати котедж  <span>   <RightArrow/></span></button>
                    </Link>
                    <KeyIcon/>
                </div>
            </div>
            <About />
            <WhyUs />
            <ByApartment />
        </HomePageWrapper>
    );
}

export default Home;