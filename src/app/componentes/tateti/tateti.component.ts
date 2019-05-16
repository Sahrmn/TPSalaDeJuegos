import { Component, OnInit } from '@angular/core';
import { Tateti } from '../../clases/tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  nuevoJuego: Tateti;
  tableroVista = [
    ["","",""],
    ["","",""],
    ["","",""]
    ];
  tablero;
  ganoU: boolean = false;
  ganoUI: boolean = false;
  empate: boolean = false;
  enUso: boolean = false;

  constructor() { 
  	this.nuevoJuego = new Tateti();
  }

  ngOnInit() {
  }

  nuevo(){
    this.nuevoJuego.restart();
    this.ganoU = false;
    this.ganoUI = false;
    this.empate = false;
    this.tablero = this.nuevoJuego.tablero;
    this.tableroVista = [
    ["","",""],
    ["","",""],
    ["","",""]
    ];
  }

  tildar(number1, number2){
    if(this.tableroVista[number1][number2] == "")
    {
      if(this.ganoU != true && this.empate != true && this.ganoUI != true && this.enUso == false)
      {
        this.enUso = true;
        this.nuevoJuego.userMoves(number1, number2);
        this.tablero = this.nuevoJuego.tablero;
        //console.log(this.tablero);
        this.tableroVista[number1][number2] = "x";
        
        //verifico si alguien ganó
        this.verificoGanador();

        setTimeout(() => { 
            this.tablero = this.nuevoJuego.tablero;
            //console.log(this.tablero);
            this.verificarTildar();
            this.enUso = false;
          }, 1500);
        
      }
    }
  }

  verificarTildar(){
    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        if(this.tablero[row][col] == 1)
        {
          this.tableroVista[row][col] = "o";
        }
        else if(this.tablero[row][col] == 2)
        {
          this.tableroVista[row][col] = "x";
        }
      }
    }
  }

  verificoGanador(){
    //console.log("Estoy verificando si alguien ganó...");
    let retorno = this.nuevoJuego.verificarGanador();
        switch(retorno)
        {
          case -1:
          break;
          case 1:
            this.ganoUI = true;
          break;
          case 2:
            this.ganoU = true;
          break;
          case 0:
            this.empate = true;
          break;
        }

  }

  












}
