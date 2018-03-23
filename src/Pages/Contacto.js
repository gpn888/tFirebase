import React, { Component } from 'react';

import './../Layout/css/Contacto.css';

import { 
    MainDiv,
    HeroDiv
} from './../Layout/styled/Sections.styles'; 

class Contacto extends Component {
    render() {
        return (
            <MainDiv className="contacto">
                <HeroDiv className="hero">
					<div className="container">
						<div className="box">
							<h1>Contacto</h1>
							<p>Av. Increible 2390. San Isidro<br />Teléfono: 265-46-46</p>
						</div>
					</div>
				</HeroDiv>
                <div className="container"> 
                    <h4 className="text-center">Escríbanos, pronto le responderemos: </h4>
                    <form className="form col-md-8 col-md-push-2">
                        <div className="form-group">
                            <label for="names">Nombres:</label>
                            <input type="text" className="form-control" id="names" />
                        </div>
                        <div className="form-group">
                            <label for="email">Correo Electrónico:</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label for="pwd">Teléfono:</label>
                            <input type="number" className="form-control" id="pwd" />
                        </div>
                        <div className="form-group">
                            <label for="msg">Mensaje:</label>
                            <textarea type="email" className="form-control" id="msg"></textarea>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-default">Enviar</button>
                    </form>
                </div>
            </MainDiv>
        );
    }
}

export default Contacto;