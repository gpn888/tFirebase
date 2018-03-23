import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import { 
    HeaderDiv
} from './styles/Header.styles'; 

const TopHeader = () => (
    <HeaderDiv className="navbar navbar-top">
        <div className="container">
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav navbar-right"> 
				    <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li> 
                    <li><a href=""><i className="fa fa-twitter"></i></a></li> 
                    <li><a href=""><i className="fa fa-instagram"></i></a></li> 
                    <li><a href=""><i className="fa fa-snapchat"></i></a></li> 
                </ul>
            </nav>
        </div>
    </HeaderDiv>
)

export default TopHeader;