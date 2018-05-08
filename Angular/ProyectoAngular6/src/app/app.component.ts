import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Gonzalo';
  apellido = 'Proaño';
  edad = 22;
  sueldo = 255578744.55555;
  fechaNacimiento = new Date('1989-06-10');
  nombreBoton = 'Cambiar color';
  nombreClase = 'sa-titulo';

  cambiarClaseDeTitulo() {
    const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
    if (nombreClaseEsTitulo) {
      this.nombreClase = 'sa-subtitulo';
    } else {
      this.nombreClase = 'sa-titulo';
    }
  }
  aplicarClase(algo){
    console.log('El texto es',algo.value);
  }
}
