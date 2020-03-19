import React from 'react';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="dt w-100 border-box pa3 ph5-ns">
            <div className="w-45">
            <Link to='/' className="dtc v-mid mid-gray link dim w-25">
                <img src={logo} class="dib w2 h2 br-100" alt="Site Name" />
            </ Link>
            <div className="dtc v-left mid-gray v-mid ml5 pl2">097000 00 00 <br />097000 00 00</div>
            </div>
            
            
            <div className ="dtc v-mid w-75 tr">
                <Link to='/projects' className ="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="">Проєкти</Link>
                <a className ="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="">Послуги та розцінки</a>
                <a className ="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="">Відгуки</a>
                <a className ="link dim dark-gray f6 f5-ns dib" href="#" title="">Контакти</a>
            </div>
        </nav>
    )
}

export default NavBar;