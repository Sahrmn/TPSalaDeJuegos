import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'ppt':
          this.router.navigate(['/Juegos/ppt']);
        break;
      case 'anagrama':
          this.router.navigate(['/Juegos/anagrama']);
        break;
      case 'ahorcado':
          this.router.navigate(['/Juegos/ahorcado']);
        break;
      case 'tateti':
          this.router.navigate(['/Juegos/tateti']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
    }
  }

  salir(){
    localStorage.removeItem("usuarioActual");
    this.router.navigate(['Principal']);
  }

}
