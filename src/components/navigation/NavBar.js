import React, { useState } from 'react';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

import { OpenMenuIcon, CloseMenuIcon } from '../../icons/Icons';
import { LinkElement } from '../../elements/LinkElement';

const NavBarContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    background-color: white;
    position: fixed;

    .nav-left {
        display: flex;
        justify-content: space-between;
    }
    
    .nav-right {
        display: flex;
        justify-content: flex-end;
    }

    .nav-link {
        text-decoration: none;
        margin-right: 2rem;
        text-transform: uppercase;
        font-family: ${(props) => props.theme.fonts.links};
        color:rgb(47,79,79);
        font-size: 15px;
        font-weight: 600;
        letter-spacing: 0px;
        opacity: 0,7;
        padding-top: 10px;
    }
    
    
    .nav-link:hover {
        // color: ${props => props.theme.colors.mediumseagreen };
        border-top: 2px solid rgb(0, 197, 105);
        color: rgb(0, 197, 105);
    }

    .nav-link:active {
        // color: ${props => props.theme.colors.mediumseagreen };
        border-top: 2px solid rgb(0, 197, 105);
        color: rgb(0, 197, 105);
    }

    .mobile-menu {
        display: flex;
        position: fixed;
        margin-top: 53px;
        /* height: calc(100vh - 70px); */
        flex-direction: column;
        flex-wrap: wrap;
        padding: 0;
        width: 100vw;
        background-color: #f9f9f9;
        opacity: 1;
        
        .mobile-nav-link {
            color: rgba(47,79,79,0.8);
            font-size: 12px;
            // border-color: #dadada;
            height: 35px;
            line-height: 35px;
            border-bottom: 0.1px solid 	rgb(143,188,143, 1);
            text-transform: uppercase;
            // font-family: 'Raleway, sans-serif';
            font-family: 'Source Sans Pro',sans-serif;
            // letter-spacing: 1px;
            padding: 0.5em 2em 0.5em 2em;
            font-size: 15px;
            font-weight: 100;
            height: 50px;
            vertical-align: middle;   

        }

        .mobile-nav-link:active {
            color: rgb(0, 197, 105, 0.8);
            // color: ${props => props.theme.colors.mediumseagreen };
        }
    }

`; 

const NavBar = () => {
    const [ showMobileMenu, setShowMobileMenu ] = useState(false);
    return (
        <NavBarContainer >
             <div className='nav-left v-mid pl4'>
                <Link to='/' className='v-mid mid-gray link'>
                    <img src={logo} className="w2 h2 br-100" alt="Site Name" />
                </ Link>
                <div className='pl2'>097000 00 00 <br />097000 00 00</div>
            </div>
            { isMobile ? 
                <div className='nav-right v-mid'>
                    <div onClick={() => setShowMobileMenu(!showMobileMenu)} className ='link dim dark-gray f6 f5-ns pr4'>
                        { showMobileMenu ? 
                            <div className='pt2'>
                               <CloseMenuIcon />
                            </div> 
                            :
                            <OpenMenuIcon /> 
                        }     
                    </div>
                    { showMobileMenu && 
                        <div className='mobile-menu'>
                            {/* <LinkElement name={'Проєкти'} nav={'/projects'} /> */}
                            <Link to='/projects' className ='mobile-nav-link'>Проєкти</Link>
                            <Link to='/services' className ='mobile-nav-link'>Послуги та розцінки</Link>
                            <Link to='' className ='mobile-nav-link'>Відгуки</Link>
                            <Link to='' className ='mobile-nav-link'>Контакти</Link>
                        </div>
                    }
                    </div>
                : 
                <div className ='nav-right v-mid'>
                    {/* <LinkElement name={'Проєкти'} nav={'/projects'} /> */}
                    <Link to='/projects' className ='nav-link'>Проєкти</Link>
                    <Link to='/services' className ='nav-link'>Послуги та розцінки</Link>
                    <Link to='' className ='nav-link'>Відгуки</Link>
                    <Link to='' className ='nav-link'>Контакти</Link>
                </div>
            }
            
        </NavBarContainer>
    ) 
}
    
export default NavBar;