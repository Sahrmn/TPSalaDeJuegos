import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  palabra:string = "ANAGRAMA";
  palabraUsuario: string = "";
  nuevoJuego: JuegoAnagrama;
  gano: boolean = false;

  constructor() { 
  	this.nuevoJuego = new JuegoAnagrama();
  	//var arrAllPermutations = this.nuevoJuego.FindAllPermutations(this.nuevoJuego.palabra);
  	//console.log(arrAllPermutations);
  	this.palabra = this.nuevoJuego.elegirAnagrama();
  }

  ngOnInit() {
  }

  nuevo(){
  	this.palabra = this.nuevoJuego.elegirAnagrama();
  }

  verificar(){
  	let resultado = this.nuevoJuego.comparacion(this.palabra, this.palabraUsuario);
  	this.gano = resultado;
  }

}
