import React, { Component } from 'react'; 
import VarTiendaController from './../Controller/tiendaController';
import Ordenar from './Ordenar/';
import Pedidos from './../Pedidos/';

import { 
	MainDiv,
	HeroDiv
} from './../Layout/styled/Sections.styles'; 
import './../Layout/css/Menu.css'

class Platillos extends Component{
	render(){
		let platillos_div = [];

		const llenar_array_platillos_div = VarTiendaController.platillos.forEach(
			(value, index)=>(
				platillos_div.push(
					<div className="list-group-item col-sm-6 clearfix" key={index}>
						<div className="panel-body">
							<div className="media">
								<div className="media-left media-middle"> 
									<img 
										role="presentation" 
										src={value.direccion} 
										className="media-object"
										height={80} width={80} />
								</div>
								<div className="media-body">
									<h4 className="media-heading"> {value.nombre} </h4> 
									<p> {value.descripcion} </p>
								</div> 
							</div> 
						</div>
						<Ordenar 
							precio={value.precio} 
							indice={index}
							hacerPedido={(indice_d, evento_d)=>
								{VarTiendaController.ponerEnLaOrden(indice_d, evento_d)}}/>
					</div>
				)
			)
		)

		return(
			<MainDiv className="platillos">
				<HeroDiv className="hero">
					<div className="container">
						<div className="box">
							<h1>Platillos</h1>
							<p>Es un hecho establecido hace demasiado tiempo que un lector se 
							distraerá con el contenido del texto de un sitio mientras que mira su diseño. </p>
						</div>
					</div>
				</HeroDiv>
				<div className="container">
					<div className="row clearfix">
						<h3 className="panel-titles col-xs-12">Elija sus platillos favoritos:</h3>
						<div className="col-md-9 col-xs-12">
							<div className="panel panel-primary clearfix">
								<div className="list-group">
									{platillos_div}
								</div>
							</div>
						</div>
						<Pedidos/>
					</div>
				</div>
			</MainDiv>
		);
	}
}

export default Platillos;