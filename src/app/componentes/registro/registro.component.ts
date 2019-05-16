import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Jugador } from '../../clases/jugador';
//para poder hacer las validaciones
import { ReactiveFormsModule, Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombre: string;
  email: string;
  clave: string;
  clave2: string;
  nuevoJugador: Jugador = new Jugador();
  formRegistro: any;
  errorPass: boolean = false;
  bien: boolean = false;

  constructor( private formBuilder:FormBuilder, private router: Router) { 
    
    this.formRegistro = this.formBuilder.group({
      'nombre': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'clave': ['', [Validators.required, Validators.minLength(4)]],
      'clave2': ['', [Validators.required, Validators.minLength(4)]]
    });
    

  }
  //constructor( ) { }

  ngOnInit() {
  }

  onSubmit(){

    //console.log(this.formRegistro.valid);
    this.errorPass = false;
    if(this.formRegistro.dirty && this.formRegistro.valid){

      if(this.formRegistro.value.clave == this.formRegistro.value.clave2)
      {
        this.nuevoJugador.nombre = this.formRegistro.value.nombre;
        this.nuevoJugador.email = this.formRegistro.value.email;
        this.nuevoJugador.clave = this.formRegistro.value.clave;
        
        let usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados"));
        //console.log(usuarios);
        if(usuarios){

          usuarios.push(this.nuevoJugador);
          localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));

        }
        else{
          let array_jugadores = [];
          array_jugadores.push(this.nuevoJugador);
          console.log(array_jugadores);
          localStorage.setItem('usuariosRegistrados', JSON.stringify(array_jugadores));
        }
        //usuario creado con exito!
        this.bien = true;
        document.getElementById('id01').style.display='none';
        this.router.navigate(['/Principal']);


      }
      else{
        console.log("las contraseñas no son iguales");  
        this.errorPass = true;
      }
    }
    else{
      console.log("registro incorrecto");
    }

   // let usuarios = JSON.parse(localStorage.getItem('usuariosRegistrados'));
     // console.warn(usuarios);


  }

}
