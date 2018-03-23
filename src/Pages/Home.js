import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './../Layout/css/Home.css';

import { 
    MainDiv
} from './../Layout/styled/Sections.styles'; 

class Home extends Component {
    render() {
        return (
            <MainDiv className="home">
                <div className="container">
                    <div className="jumbotron text-center clearfix">
                        <h1>Placer gourmet que llega a tiempo a la puerta de tu casa</h1>
                        <div className="col-xs-12 col-md-8 col-md-push-2 clearfix">
                            <Link className="col-xs-6 home-button" to="/platillos">
                                <i className="fa fa-cutlery" aria-hidden="true"></i>
                                <h2>Platillos</h2>
                                <p>Lorem ipsum gorem atrium gut epsum eros tantrum</p>
                            </Link>
                            <Link className="col-xs-6 home-button" to="/bebidas">
                                <i className="fa fa-glass" aria-hidden="true"></i>
                                <h2>Bebidas</h2>
                                <p>Lorem ipsum gorem atrium gut epsum eros tantrum</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </MainDiv>
        );
    }
}

export default Home;