import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import { 
    FooterDiv
} from './styles/Footer.styles'; 

const Footer = () => (
    <FooterDiv className="bs-docs-footer">
        <div className="container text-center">
            <p>&copy;2018 - Gino Paul Nassi</p>
        </div>
    </FooterDiv>
)

export default Footer;