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
  puntaje: number;

  constructor() { 
  	this.nuevoJuego = new JuegoAnagrama();
  	//var arrAllPermutations = this.nuevoJuego.FindAllPermutations(this.nuevoJuego.palabra);
  	//console.log(arrAllPermutations);
  	this.palabra = this.nuevoJuego.elegirAnagrama();

    let user = JSON.parse(localStorage.getItem('usuarioActual'));
     if(!user.anagrama)
      this.puntaje = 0;
     else
      this.puntaje = user.anagrama;
  }

  ngOnInit() {
  }

  botonNuevo(){
    let user = JSON.parse(localStorage.getItem('usuarioActual'));
          user.anagrama--;
          localStorage.setItem('usuarioActual', JSON.stringify(user));
          this.puntaje = user.anagrama;
    this.nuevo();
  }

  nuevo(){
  	this.palabra = this.nuevoJuego.elegirAnagrama();
  }

  verificar(){
  	let resultado = this.nuevoJuego.comparacion(this.palabra, this.palabraUsuario);
  	this.gano = resultado;
    if(this.gano){
      this.palabraUsuario = "";
      this.setPuntos();
      this.nuevo();
    }
  }

  setPuntos(){
    let user = JSON.parse(localStorage.getItem('usuarioActual'));
    //console.log(user);
    //console.log(user.anagrama);
    if(user.anagrama){
      if(this.gano)
        user.anagrama++; 
      else
        user.anagrama--;
    }else{
      if(this.gano)
        user.anagrama = 1;
      else
        user.anagrama = 0;
    }
    this.puntaje = user.anagrama;
    localStorage.setItem('usuarioActual', JSON.stringify(user));
    //console.log(this.puntaje);

    let resultados = [];
    resultados =  JSON.parse(localStorage.getItem('resultados'));
    //console.log(resultados);
    //let resultados = JSON.parse(localStorage.getItem('resultados'));
    if(resultados){      
      let existe = false;
      for(var i = 0; i<resultados.length; i++){
        if(resultados[i].nombre == user.nombre)
        {
          resultados[i].anagrama = user.anagrama;
          existe = true;
          break;
        }
      }

      if(!existe){
        resultados.push(user);
      }
    }
    else{
      resultados = [];
      resultados.push(user);
    }
    localStorage.setItem('resultados', JSON.stringify(resultados));
    //console.log(JSON.parse(localStorage.getItem('resultados')));
  }

}
