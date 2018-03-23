import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Lienzo from './Lienzo';
import 'bootstrap/dist/css/bootstrap.css';

const RouterDeLienzo = (
	<BrowserRouter>
		<Route path="/" component={Lienzo} />
	</BrowserRouter>
)

ReactDOM.render(
  RouterDeLienzo,
  document.getElementById('root')
);