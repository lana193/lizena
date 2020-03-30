import React, { useState } from 'react';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import './Navigation.css';

const NavBar = () => {
    const [ showMobileMenu, setShowMobileMenu ] = useState(false);
    return (
        <nav className='navigation-container v-mid w-100'>
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
                                <svg version="1.1" fill="#000000" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" width="25px" height="20px">
                            <g><path d="M500,442.7L79.3,22.6C63.4,6.7,37.7,6.7,21.9,22.5C6.1,38.3,6.1,64,22,79.9L442.6,500L22,920.1C6,936,6.1,961.6,21.9,977.5c15.8,15.8,41.6,15.8,57.4-0.1L500,557.3l420.7,420.1c16,15.9,41.6,15.9,57.4,0.1c15.8-15.8,15.8-41.5-0.1-57.4L557.4,500L978,79.9c16-15.9,15.9-41.5,0.1-57.4c-15.8-15.8-41.6-15.8-57.4,0.1L500,442.7L500,442.7z"/></g>
               </svg>
                                </div>

                            
                               
                            :
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/>
                        </svg>
                            
                }
                            
                        </div>
                    { showMobileMenu && 
                        <div className='mobile-menu pt3'>
                            <Link to='/projects' className ='link dim dark-gray f5 f5-ns b--light-silver pa2 bb b--light-green pl4'>Проєкти</Link>
                            <Link to='/services' className ='link dim dark-gray f5 f5-ns b--light-silver pa2 bb b--light-green pl4'>Послуги та розцінки</Link>
                            <a className ='link dim dark-gray f5 f5-ns b--light-silver pa2 bb b--light-green pl4' >Відгуки</a>
                            <a className ='link dim dark-gray f5 f5-ns b--light-silver pa2 pl4'>Контакти</a> 
                        </div>
                    }
                    </div>
                : 
                
                <div className ='nav-right v-mid'>
                    <Link to='/projects' className ='link dim dark-gray f6 f5-ns mr3 mr4-ns'>Проєкти</Link>
                    <Link to='/services' className ='link dim dark-gray f6 f5-ns mr3 mr4-ns'>Послуги та розцінки</Link>
                    <a className ="link dim dark-gray f6 f5-ns mr3 mr4-ns" >Відгуки</a>
                    <a className ="link dim dark-gray f6 f5-ns pr4" href="#" title="">Контакти</a> 
                </div>
            }
        </nav>
    ) 
}
    
export default NavBar;