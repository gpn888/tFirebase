import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import { 
    HeaderDiv
} from './styles/Header.styles'; 

const Header = () => (
    <HeaderDiv className="bs-docs-nav navbar navbar-static-top">
        <div className="container">
            <div className="navbar-header">
                <button 
                    aria-controls="bs-navbar" 
                    aria-expanded="false" 
                    className="collapsed navbar-toggle" 
                    data-target="#bs-navbar" 
                    data-toggle="collapse" 
                    type="button">  
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                </button>
                <NavLink to="/" className="navbar-brand">GPNA</NavLink>
            </div>
            <nav className="collapse navbar-collapse" id="bs-navbar"> 
                <ul className="nav navbar-nav"> 
                    <li><NavLink to="/platillos">Platillos</NavLink></li>
				    <li><NavLink to="/bebidas">Bebidas</NavLink></li>
                    <li><NavLink to="/contacto">Contacto</NavLink></li>
                </ul>
                <ul className="nav navbar-nav navbar-right"> 
				    <li><a href="">Login</a></li> 
                    <li><a href="https://admintorioux.firebaseapp.com/" target="_blank">Intranet</a></li>
                </ul>
            </nav>
        </div>
    </HeaderDiv>
)

export default Header;