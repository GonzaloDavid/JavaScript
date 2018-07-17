import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  nombre = 'Gonzalo';
  apellido = 'Proaño';
  edad = 22;
  sueldo = 255578744.55555;
  fechaNacimiento = new Date('1989-06-10');
  nombreBoton = 'Cambiar color';
  nombreBoton1='Aplicar Clase';
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
  }*/
  mostrarHola = true;
  arregloNumeros = [1, 2, 3, 4, 5, 6];

  arregloPeliculas = [
    {
      nombre: 'Tomb Raider',
      descripcion: 'Alicia Vikander, Walton Goggins',
      esEstreno: false,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_FOh_xn19xgXf_Uq5OK3WWzAmoVoZLHCO2vjFd4LKaxijU59eg'
    },
    {
      nombre: 'Ready Player One',
      descripcion: 'Tye Sheridan, Olivia Cooke',
      esEstreno: false,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFQprASMSiRnRHYgQl5sHoGr8GiMI9IB2XVIQP_tmD61KFgUY'
    },
  ];


  alertar(evento) {
    console.log('Evento: ', evento); // true
    alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  }

}
