import React from 'react'
import {
    Link
  } from 'react-router-dom';
import DrawerToggleBtn from '../burger-menu/drawerToggleBtn';
import Weather from '../add-ons/weather/weather';


import './navbar.css';

export default function Navbar(){

    return(
        <div className="navigation-main">
            <nav className="navigation-bar">
                <div className="hamburger-icon">
                    <DrawerToggleBtn/>
                </div>
                <div className="logo">
                    {/* <img src={logoImg} alt="logoImg"/> */}
                    {/* <h1><span>c h a n &nbsp; n g h i e p<br/>n g u y e n</span></h1> */}
                    <h1>b r i a n &nbsp; n g u y e n</h1>

                </div>
                <div className="navbar-items">
                    <ul>
                            <li>
                        <Link to="/">
                            <a className="navbar-resume" href="/">r e s u m e
                                <svg fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                            </a>
                        </Link>
                            </li>
                            <li>
                        <Link to="/works">
                                <a className="navbar-resume" >w o r k s <svg fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                                </a>
                        </Link>
                            </li>
                        {/* <Link to="/contact">
                            <li><a className="navbar-resume" href="/">c o n t a c t
                            <svg fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></a></li>
                        </Link> */}
                    </ul>
                </div>
                <div style={{margin: '40px 20px 20px 20px'}}>
                    <Weather/>
                </div>
                {/* <a className="navbar-resume" href="/">my resume
                    <svg fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                </a> */}
                <div className="navbar-social">
                    <a href="https://www.linkedin.com/in/channghiep/">
                    <button className="navbar-linkedin">
                        {/* <img src={linkedinLogo} alt="linkedinLogo"/> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 24 31">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 
                            0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                        </svg>
                    </button>
                    </a>
                    <a href="https://github.com/channghiep">

                    <button className="navbar-behance">
                        {/* <img src={behanceLogo} alt="behanceLogo"/> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 
                            1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 
                            0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 
                            0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                        </svg> */}
                      
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 25 31">    
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                    </button>
                    </a>
                    {/* <button className="navbar-dribbble">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 
                            11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 
                            5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 
                            3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 
                            2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 
                            8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 
                            6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 
                            1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
                        </svg>
                        
                    </button> */}
                </div>
                {/* <SideDrawer/> */}
            </nav>
        </div>
    )
}