import { extendObservable } from 'mobx';
import datos from './firebaseController';

class TiendaController {
	constructor(){

		self = this;

		datos.bebidas.once('value').then(function(snapshot) {
			//console.log(snapshot);
			snapshot.forEach(function(childSnapshot) {
				//const key = childSnapshot.key;
				const valor = childSnapshot.val();
				self.bebidas.push(valor);
			})
		})

		datos.platillos.once('value').then(function(snapshot) {

			snapshot.forEach(function(childSnapshot) {
				//const key = childSnapshot.key;
				const valor = childSnapshot.val();
				self.platillos.push(valor);
			})
		})

		extendObservable(this,
			{
				platillos: [
				/*	{nombre: 'primerPlatillo',
						descripcion: 'platillo muy rico',
						precio: 100,
						cantidad: 0},
					{nombre: 'segundoPlatillo',
						descripcion: 'platillo muy rico',
						precio: 150,
						cantidad: 0},
					{nombre: 'tercerPlatillo',
						descripcion: 'platillo muy rico',
						precio: 200,
						cantidad: 0}*/
				],
				bebidas: [
				/*	{nombre: 'primerBebida',
						descripcion: 'bebida muy rica',
						precio: 20,
						cantidad: 0},
					{nombre: 'segundaBebida',
						descripcion: 'bebida muy rica',
						precio: 30,
						cantidad: 0},
					{nombre: 'tercerBebida',
						descripcion: 'bebida muy rica',
						precio: 40,
						cantidad: 0}*/
				]

			});
	}

	ponerEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.platillos.forEach((value, index)=>{
				if(indicePlatillo === index){
					this.platillos[index].cantidad = cantidadPlatillo;
				}
			}
		)
	}

	bebidasEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.bebidas.forEach((value, index)=>{
				if(indicePlatillo === index){
					this.bebidas[index].cantidad = cantidadPlatillo;
				}
			}
		)
	}
}

var VarTiendaController = new (TiendaController);

export default VarTiendaController;