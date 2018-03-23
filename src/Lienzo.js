import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Platillos from './Pages/Platillos';
import Bebidas from './Pages/Bebidas';
import Contacto from './Pages/Contacto';

import TopHeader from './Layout/TopHeader';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

import './Layout/css/Styles.css';
import './Layout/css/Hero.css';

class Lienzo extends Component{
	render(){
		return(
			<div id="mainApp">
				<TopHeader />
				<Header />
				{this.props.children}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/platillos" component={Platillos} />
					<Route path="/bebidas" component={Bebidas} />
					<Route path="/contacto" component={Contacto} />
				</Switch>
				<Footer />
			</div>
		)
	}
}

export default Lienzo;