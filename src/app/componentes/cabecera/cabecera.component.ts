import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../clases/jugador';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  nombreUsuario: string;

  constructor() { }

  ngOnInit() {
  	this.hayUsuarioLogeado();
  }

  hayUsuarioLogeado(){
  	//console.log(localStorage.getItem("usuarioActual"));
  	if(!localStorage.getItem("usuarioActual")){
  		this.nombreUsuario = "";
  		//console.log("nada");
  	}
  	else{
  		//console.log("hay algo");
  		let usuario = JSON.parse(localStorage.getItem("usuarioActual"));
  		this.nombreUsuario = usuario.nombre.toUpperCase();
  	}
  }

  salir(){
  	localStorage.removeItem("usuarioActual");
  	location.reload();
  }

}
