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
    }
    else{
      this.gano = false;
    }
    console.log("gano? " + this.gano);

    clearInterval(this.repetidor);
   

   
  }  





}
