import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Autor} from '../../models/autor';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
Nombre: string;
  @Output() autorCreado: EventEmitter<Autor> = new EventEmitter<Autor>();
  @Input() Inombre: string;
  @Input() Iapellidos: string;
  @Input() Iimagen: string;
  @Input() InumeroLibros: number;
  @Input() Ifecha: string;
  @Input() IesEcuatoriano: boolean;
  constructor() { }
  ngOnInit() {
  }
  crearAutor() {
    const autor: Autor = new Autor();
    autor.nombre = this.Inombre;
    autor.apellidos = this.Iapellidos;
    autor.fechaNacimiento = this.Ifecha;
    autor.numeroLibros = this.InumeroLibros;
    autor.esEcuatoriano = this.IesEcuatoriano;
    autor.imagen = 'assets/ad.png';

    console.log('[NUEVO AUTOR]: ', autor);
    console.log('esta variable trae esto')
    this.autorCreado.emit(autor);
  }
  limpiar()
  {this.Inombre = undefined;
  this.Iapellidos = undefined;
  this.Iimagen = undefined;
  this.InumeroLibros = undefined;
   this.Ifecha = undefined;
  this.IesEcuatoriano = undefined;
  }

}
