import React, { Component } from 'react';

class Ordenar extends Component{

	actualizarCantidad(evento){
		this.props.hacerPedido(this.props.indice, evento.target.value);
	}

	render(){
		return(
			<div className="panel-footer clearfix">
				<div className="col-xs-6 col-md-4"> 
					<label>Deseo</label>
					<input 
						className="form-control" 
						onChange={this.actualizarCantidad.bind(this)} 
						type="number" min="0" max="20"/>
				</div>
				<div className="col-xs-6 col-md-push-2 col-md-6 text-right"> 
					<span className="badge"><span>S/</span> {this.props.precio}</span>
				</div>
			</div>
			)
	}
}

export default Ordenar;