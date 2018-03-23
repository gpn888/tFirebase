import React, { Component } from 'react';
import VarTiendaController from './../Controller/tiendaController';
import { observer } from 'mobx-react';

class Pedidos extends Component{
	render(){
		let PlatillosPedidos = [];
		let BebidasPedidas = [];

		const llenar_PlatillosPedidos = VarTiendaController.platillos.forEach(
			(value, index)=> {
				if(value.cantidad !== 0){
					PlatillosPedidos.push(
					<div className="list-group-item" key={index}> 
						<h4> {value.nombre} </h4>
						<div>
							<p>Llevo: <span>{value.cantidad}</span></p>
							<p>Por <span>S/ {value.cantidad*value.precio}</span></p>
						</div> 
					</div>
					)
				}
			}
		)
		const llenar_BebidasPedidas = VarTiendaController.bebidas.forEach(
			(value, index)=> {
				if(value.cantidad !== 0){
					BebidasPedidas.push(
					<div className="list-group-item" key={index}> 
						<h4> {value.nombre} </h4>
						<div>
							<p>Llevo: <span>{value.cantidad}</span></p>
							<p>Por <span>S/ {value.cantidad*value.precio}</span></p>
						</div> 
					</div>
					)
				}
			}
		)
		return(
			<div className="pedidos col-xs-12 col-md-3"> 
				<div className="panel panel-primary">
					<h3>¡Deseo!</h3>
					<div className="list-group" >
						{PlatillosPedidos}
						{BebidasPedidas}
					</div>
				</div> 
			</div>
		)
	}
}

export default observer(Pedidos);