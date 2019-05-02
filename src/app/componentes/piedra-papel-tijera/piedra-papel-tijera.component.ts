import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  nuevoJuego: JuegoPiedraPapelTijera;
  respuesta: string = 'Selecciona...';

  constructor() {
  	this.nuevoJuego = new JuegoPiedraPapelTijera();
  }

  ngOnInit() {
  }

  jugar(eleccion){
  	//console.log('nuevo juego');
  	this.nuevoJuego.decisionUsuario = eleccion;
  	//console.log(this.nuevoJuego.decisionUsuario);
  	this.nuevoJuego.tomarDecisionOrdenador();
  	//console.log(this.nuevoJuego.decisionOrdenador);
  	this.respuesta = this.nuevoJuego.logicaJuego(this.nuevoJuego.decisionUsuario, this.nuevoJuego.decisionOrdenador);
  	console.log(this.respuesta);
  }





}
