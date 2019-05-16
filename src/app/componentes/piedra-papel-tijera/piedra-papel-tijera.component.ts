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
    this.setPuntos();
  }

  setPuntos(){
    let user = JSON.parse(localStorage.getItem('usuarioActual'));
    //console.log(user);
    if(user.ppt){
      if(this.respuesta == "Gana el usuario")
        user.ppt++; 
      else if(this.respuesta == "Gana el ordenador.")
        user.ppt--;
    }else{
      if(this.respuesta == "Gana el usuario")
        user.ppt = 1;
      else if(this.respuesta == "Gana el ordenador.")
        user.ppt = 0;
    }
    localStorage.setItem('usuarioActual', JSON.stringify(user));
    //console.log(localStorage.getItem('usuarioActual'));
    let resultados =  JSON.parse(localStorage.getItem('resultados'));
    //console.log(resultados);
    localStorage.removeItem("resultados");
    //let resultados = JSON.parse(localStorage.getItem('resultados'));
    if(resultados){      
      let existe = false;
      //console.log("en existe resultados");
      //console.log(resultados.length);
      for(var i = 0; i<resultados.length; i++){
        //console.log(resultados[i]);
        if(resultados[i].nombre == user.nombre)
        {
          resultados[i].ppt = user.ppt;
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
