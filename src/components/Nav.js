import React,{Fragment, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'
import {navvar}  from './nav-comp/comp.js'
import Button from '@material-ui/core/Button'
import Sidebar from './sidebar.js'



const Nav = ()=>{
    const name = 'John Doe'
    const [sidebar,setsidebar] = useState(false);

      function handleClick(e) {
            setsidebar(!sidebar);
        }
/* 

    <div class='topnav'>
     <i class="icon fa fa-bars"><Button color="primary" vertical-align='right' onClick={handleClick}></Button></i> 
        <nav>
        { navvar.map((v,i) => {
           return <Link to={v.url}>{v.title}</Link>
        })}
        </nav>
    </div>
    <Sidebar />
*/




    return (
<Fragment>
    <nav className="navbar">
        <ul className="navbar-nav">
        <li className="logo">
            <Link to='#' className="nav-link">
                <span className="link-text">Auctioneer</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-right" class="svg-inline--fa fa-angle-double-right fa-w-14 svg-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/" className="nav-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cat" className="svg-inline--fa fa-cat fa-w-16 svg-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z">
                </path>
                </svg>                          
                <span className="link-text">Cats</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/about/admin" className="nav-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="archway" className="svg-inline--fa fa-archway fa-w-18 svg-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M560 448h-16V96H32v352H16.02c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16H176c8.84 0 16-7.16 16-16V320c0-53.02 42.98-96 96-96s96 42.98 96 96l.02 160v16c0 8.84 7.16 16 16 16H560c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm0-448H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h544c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16z"></path></svg>                      
                <span className="link-text">Dog</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/contact" className="nav-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bahai" className="svg-inline--fa fa-bahai fa-w-16 svg-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496.25 202.52l-110-15.44 41.82-104.34c6.67-16.64-11.6-32.18-26.59-22.63L307.44 120 273.35 12.82C270.64 4.27 263.32 0 256 0c-7.32 0-14.64 4.27-17.35 12.82l-34.09 107.19-94.04-59.89c-14.99-9.55-33.25 5.99-26.59 22.63l41.82 104.34-110 15.43c-17.54 2.46-21.68 26.27-6.03 34.67l98.16 52.66-74.48 83.54c-10.92 12.25-1.72 30.93 13.29 30.93 1.31 0 2.67-.14 4.07-.45l108.57-23.65-4.11 112.55c-.43 11.65 8.87 19.22 18.41 19.22 5.15 0 10.39-2.21 14.2-7.18l68.18-88.9 68.18 88.9c3.81 4.97 9.04 7.18 14.2 7.18 9.54 0 18.84-7.57 18.41-19.22l-4.11-112.55 108.57 23.65c17.36 3.76 29.21-17.2 17.35-30.49l-74.48-83.54 98.16-52.66c15.64-8.39 11.5-32.2-6.04-34.66zM338.51 311.68l-51.89-11.3 1.97 53.79L256 311.68l-32.59 42.49 1.96-53.79-51.89 11.3 35.6-39.93-46.92-25.17 52.57-7.38-19.99-49.87 44.95 28.62L256 166.72l16.29 51.23 44.95-28.62-19.99 49.87 52.57 7.38-46.92 25.17 35.61 39.93z"></path></svg>
                <span className="link-text">Boom</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/" className="nav-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase-medical" className="svg-inline--fa fa-briefcase-medical fa-w-16 svg-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 128h-80V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM192 96h128v32H192V96zm160 248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48z"></path></svg>
                <span className="link-text">Settings</span>
            </Link>
        </li>
                <li className="nav-item">
            <Link to="/" className="nav-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase-medical" className="svg-inline--fa fa-briefcase-medical fa-w-16 svg-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 128h-80V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM192 96h128v32H192V96zm160 248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48z"></path></svg>
                <span className="link-text">Settings</span>
            </Link>
        </li>
        </ul>
    </nav>

</Fragment>
    );
}

export default Nav;