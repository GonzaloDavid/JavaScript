import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
  MatExpansionModule, MatDatepickerModule, MatInputModule, MatTabsModule,
  MatTooltipModule, MatFormFieldModule, MatMenuModule, MatSnackBarModule} from '@angular/material';
import 'rxjs/add/observable/of';
import 'hammerjs';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AutorComponent } from './components/Ingresarautor/autor.component';
import { ListabotonesComponent } from './components/listabotones/listabotones.component';
import { LibroComponent } from './components/IngresarLibros/libro.component';
import { InfoautorComponent } from './components/CardAdvance/infoautor.component';
import { ListalibrosComponent } from './components/listalibros/listalibros.component';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    AutorComponent,
    ListabotonesComponent,
    LibroComponent,
    InfoautorComponent,
    ListalibrosComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,
      MatCardModule, MatMenuModule, MatExpansionModule, MatInputModule, MatTabsModule, MatTooltipModule,
      MatFormFieldModule, MatSnackBarModule,  ReactiveFormsModule, HttpClientModule, TableModule, InputTextModule,
    CardModule, ButtonModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
