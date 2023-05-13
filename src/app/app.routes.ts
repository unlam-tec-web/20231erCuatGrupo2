import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {RegistrarComponent} from "./componentes/registrar/registrar.component";
import {CarritoComponent} from "./componentes/carrito/carrito.component";
import {CursosComponent} from "./componentes/cursos/cursos.component";
import { IniciarSesionComponent } from "./componentes/iniciar-sesion/iniciar-sesion.component"; /*agregado*/


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'cursos', component: CursosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
  { path: 'iniciar-sesion', component: IniciarSesionComponent },/*agregado*/
  { path: '**', pathMatch: 'full', redirectTo: 'home'},/*ultimo*/
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
