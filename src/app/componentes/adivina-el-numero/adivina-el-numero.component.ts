
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
 
  constructor() { 
    this.nuevoJuego = new JuegoAdivina();
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    this.ocultarVerificar=false;
  }
  generarnumero() {
    this.nuevoJuego.generarnumero();
    this.contador=0;
  }
  verificar()
  {
    this.contador++;
    this.ocultarVerificar=true;
    console.info("numero Secreto:",this.nuevoJuego.gano);  
    if (this.nuevoJuego.verificar()){
      
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!",true);
      this.nuevoJuego.numeroSecreto=0;

    }else{

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido, animo";
          break;
          case 2:
          mensaje="Te estas acercando...";
          break;
          case 3:
          mensaje="No es, creí que la tercera era la vencida";
          break;
          case 4:
          mensaje="No era el "+this.nuevoJuego.numeroIngresado;
          break;
          case 5:
          mensaje= "No pasa nada...";
          break;
          case 6:
          mensaje="Afortunado en el amor";
          break;
      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
      }
      this.MostarMensaje("#"+this.contador+" "+mensaje+" ayuda :"+this.nuevoJuego.retornarAyuda());
     

    }
    //console.info("numero Secreto:",this.nuevoJuego.gano);  
    if(this.nuevoJuego.gano)
      this.setPuntos();
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }

  ngOnInit() {
  }

  setPuntos(){
    let user = JSON.parse(localStorage.getItem('usuarioActual'));
    if(user.adivina){
      if(this.nuevoJuego.gano)
        user.adivina++; 
      else
        user.adivina--;
    }else{
      if(this.nuevoJuego.gano)
        user.adivina = 1;
      else
        user.adivina = 0;
    }
    localStorage.setItem('usuarioActual', JSON.stringify(user));
    
    let resultados = [];
    resultados =  JSON.parse(localStorage.getItem('resultados'));
    //console.log(resultados);
    //let resultados = JSON.parse(localStorage.getItem('resultados'));
    if(resultados){      
      let existe = false;
      for(var i = 0; i<resultados.length; i++){
        if(resultados[i].nombre == user.nombre)
        {
          resultados[i].adivina = user.adivina;
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
