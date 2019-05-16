import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  nombreUsuario: string;

  constructor(private router: Router) { 
  	this.verificarUsuario();
  }

  ngOnInit() {
  }

  verificarUsuario(){
  	if(!localStorage.getItem("usuarioActual")){
  		this.router.navigate(['Login']);
  	}
  	else{
  		let usuario = JSON.parse(localStorage.getItem("usuarioActual"));
  		this.nombreUsuario = usuario.nombre.toUpperCase();
  	}
  }

}
