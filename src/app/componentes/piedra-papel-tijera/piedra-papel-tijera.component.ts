import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
declare var $: any;

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  nuevoJuego: JuegoPiedraPapelTijera;
  respuesta: string = 'Selecciona...';
  puntaje: number = 0;

  constructor() {
  	this.nuevoJuego = new JuegoPiedraPapelTijera();

    //traigo puntaje
    let user = JSON.parse(localStorage.getItem('usuarioActual'));
     if(!user.ppt)
      this.puntaje = 0;
     else
      this.puntaje = user.ppt;
  }

  ngOnInit() {
    document.getElementById('piedra').style.display = "none";
    document.getElementById('papel').style.display = "none";
    document.getElementById('tijera').style.display = "none";
  }

  jugar(eleccion){
  	//console.log('nuevo juego');
  	this.nuevoJuego.decisionUsuario = eleccion;
  	//console.log(this.nuevoJuego.decisionUsuario);
  	this.nuevoJuego.tomarDecisionOrdenador();
  	//console.log(this.nuevoJuego.decisionOrdenador);
  	this.respuesta = this.nuevoJuego.logicaJuego(this.nuevoJuego.decisionUsuario, this.nuevoJuego.decisionOrdenador);
  	setTimeout(this.mostrarEleccionOrdenador(), 500);
    this.mostrarEleccionOrdenador();
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
    this.puntaje = user.ppt;
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


  mostrarEleccionOrdenador(){
    let decision = this.nuevoJuego.decisionOrdenador;
    //console.log(decision);
    switch(decision){
      case 'Piedra':
        $('#piedra').fadeIn();

        setTimeout(function(){
          $('#piedra').fadeOut();          
        },1000);
      break;
      case 'Papel':
        $('#papel').fadeIn();
        setTimeout(function(){
          $('#papel').fadeOut();          
        },1000);
      break;
      case 'Tijera':
        $('#tijera').fadeIn();
        setTimeout(function(){
          $('#tijera').fadeOut();          
        },1000);
      break;
      default:
      break;
    }
  }

  






}
