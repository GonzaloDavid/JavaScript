import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Libro} from '../../models/libro';
import {Autor} from '../../models/autor';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Output() libroCreado: EventEmitter<Libro> = new EventEmitter<Libro>();
  @Input() Iicbn: number;
  @Input() Inombre: string;
  @Input() InumeroPaginas: number;
  @Input() Iedicion: number;
  @Input() IfechaP: string;
  @Input() InombreEditorial: string;
  @Input() IautorID: string;
  constructor() { }

  ngOnInit() {
  }
  crearLibro() {
    const libro1: Libro = new Libro();
    libro1.ICBN = this.Iicbn;
      libro1.nombre = this.Inombre;
        libro1.numeroPaginas = this.InumeroPaginas;
          libro1.edicion = this.Iedicion;
            libro1.fechaPublicacion = this.IfechaP;
              libro1.nombreEditorial = this.InombreEditorial;
                libro1.autorId = this.IautorID;
                console.log('se crea libro', libro1);
    this.libroCreado.emit(libro1);
  }
  limpiar()
  {
    this.Iicbn = undefined;
    this.Inombre = undefined;
    this.InumeroPaginas = undefined;
    this.Iedicion = undefined;
    this.IfechaP = undefined;
    this.InombreEditorial = undefined;
    this.IautorID = undefined;
  }

}
