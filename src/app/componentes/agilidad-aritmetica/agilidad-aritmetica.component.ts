import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

   @Output() enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;
  PrimerNum: number;
  SegundoNum: number;
  Operador: string;
  numeroIngresado;
  gano: boolean = false;


  ngOnInit() {
  }
   constructor() {
     this.ocultarVerificar=true;
     this.Tiempo=5; 
     this.nuevoJuego = new JuegoAgilidad();
     console.info("Inicio agilidad");  
  }




  NuevoJuego() {
    this.PrimerNum = 0;
    this.SegundoNum = 0;
    this.Operador = '';
    this.numeroIngresado = '';

    this.nuevoJuego.nuevaCuenta();
    //console.log(this.nuevoJuego);
    this.PrimerNum = this.nuevoJuego.primerNumero;
    this.SegundoNum = this.nuevoJuego.segundoNumero;
    this.Operador = this.nuevoJuego.operador;
    
    this.ocultarVerificar=false;
    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 900);

  }

  verificar()
  {
    //console.log("verificando...");
    this.ocultarVerificar=true;
    if(this.numeroIngresado == this.nuevoJuego.respuesta)
    {
      this.gano = true;
      this.setPuntos();
    }
    else{
      this.gano = false;
      this.setPuntos();
    }
    console.log("gano? " + this.gano);

    clearInterval(this.repetidor);
   

   
  }


  setPuntos(){
    let user = JSON.parse(localStorage.getItem('usuarioActual'));
    //console.log(user);
    if(user.agilidad){
      if(this.gano)
        user.agilidad++; 
      else
        user.agilidad--;
    }else{
      if(this.gano)
        user.agilidad = 1;
      else
        user.agilidad = 0;
    }
    localStorage.setItem('usuarioActual', JSON.stringify(user));
    //console.log(localStorage.getItem('usuarioActual'));
    //let resultados = [];
    let resultados =  JSON.parse(localStorage.getItem('resultados'));
    //console.log(resultados);
    //let resultados = JSON.parse(localStorage.getItem('resultados'));
    if(resultados){      
      let existe = false;
      console.log("en existe resultados");
      console.log(resultados.length);
      for(var i = 0; i<resultados.length; i++){
        console.log(resultados[i]);
        if(resultados[i].nombre == user.nombre)
        {
          resultados[i].agilidad = user.agilidad;
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
    console.log(JSON.parse(localStorage.getItem('resultados')));
    
  }




  







}
