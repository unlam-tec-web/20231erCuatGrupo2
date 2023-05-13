import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {RegistrarComponent} from "./componentes/registrar/registrar.component";
import {CarritoComponent} from "./componentes/carrito/carrito.component";
import {CursosComponent} from "./componentes/cursos/cursos.component";
import { IniciarSesionComponent } from "./componentes/iniciar-sesion/iniciar-sesion.component";
import {DetalleCursoComponent} from "./componentes/detalle-curso/detalle-curso.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'cursos', component: CursosComponent},
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'detalle-curso', component: DetalleCursoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
