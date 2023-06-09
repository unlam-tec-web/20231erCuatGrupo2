
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/comun/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
// Rutas
import {APP_ROUTING} from './app.routes'
import {RouterOutlet} from "@angular/router";
import { FooterComponent } from './componentes/comun/footer/footer.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { CerrarSesionComponent } from "./componentes/cerrar-sesion/cerrar-sesion.component";
import { DetalleCursoComponent } from './componentes/detalle-curso/detalle-curso.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import{HttpClientModule} from '@angular/common/http';

import { ComprarComponent } from './componentes/comprar/comprar.component';

//animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegistrarComponent,
    CarritoComponent,
    CursosComponent,
    IniciarSesionComponent,
    ComprarComponent,
    CerrarSesionComponent,
    DetalleCursoComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}



