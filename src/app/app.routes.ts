import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {RegistrarComponent} from "./componentes/registrar/registrar.component";
import { IniciarSesionComponent } from "./componentes/iniciar-sesion/iniciar-sesion.component"; /*agregado*/

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },/*agregado*/
  { path: '**', pathMatch: 'full', redirectTo: 'home'},/*ultimo*/
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
