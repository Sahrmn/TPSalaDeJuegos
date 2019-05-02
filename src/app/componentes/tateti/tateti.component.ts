import { Component, OnInit } from '@angular/core';
import { Tateti } from '../../clases/tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  IA_PLAYER = 1;
  USER_PLAYER = 2;
  nuevoJuego: Tateti;
  tablero;

  constructor() { 
  	this.nuevoJuego = new Tateti();
  	this.generarTablero();
  }

  ngOnInit() {
  }

  generarTablero(){
  	this.tablero = this.nuevoJuego.generateUIBoard();
  	//console.log(this.tablero);
  }

}
