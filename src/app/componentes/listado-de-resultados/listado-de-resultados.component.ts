
import { Component, OnInit , Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input() listado = [];
 mostrarLista = [];


  constructor() {
    //this.ver();
    this.traerTodos();
   }

  ngOnInit() {

  }

  ver() {
    console.info(this.mostrarLista);
  }

  traerTodos(){
    let lista = JSON.parse(localStorage.getItem("resultados"));
    let user = JSON.parse(localStorage.getItem("usuarioActual"));
    //console.log(lista);
    for(let i=0; i<lista.length; i++){
      let array = {
      'jugador': lista[i].nombre,
      'juego': 'Anagrama',
      'puntaje': lista[i].anagrama
      }
      this.mostrarLista.push(array);
      
      array = {
        'jugador': lista[i].nombre,
        'juego': 'Adivina el numero',
        'puntaje': lista[i].adivina
      }
      this.mostrarLista.push(array);

      array = {
        'jugador': lista[i].nombre,
        'juego': 'Agilidad Aritmetica',
        'puntaje': lista[i].agilidad
      }
      this.mostrarLista.push(array);

      array = {
        'jugador': lista[i].nombre,
        'juego': 'Piedra, Papel, Tijera',
        'puntaje': lista[i].ppt
      }
      this.mostrarLista.push(array);

      array = {
        'jugador': lista[i].nombre,
        'juego': 'Tateti',
        'puntaje': lista[i].tateti
      }
      this.mostrarLista.push(array);

      array = {
        'jugador': lista[i].nombre,
        'juego': 'Ahorcado',
        'puntaje': lista[i].ahorcado
      }
      this.mostrarLista.push(array);

    }
    console.log(this.mostrarLista);
  }

}
