import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Autor} from '../../models/autor';
import {Libro} from '../../models/libro';
@Component({
  selector: 'app-listalibros',
  templateUrl: './listalibros.component.html',
  styleUrls: ['./listalibros.component.css']
})
export class ListalibrosComponent implements OnInit {
  @Output()_libro1: EventEmitter<Libro> = new EventEmitter<Libro>();
  @Input() autor: Autor;
  librr: Libro[];
  constructor() { }
  ngOnInit() {
  }
}
