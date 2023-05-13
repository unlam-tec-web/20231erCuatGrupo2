import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {RegistrarComponent} from "./componentes/registrar/registrar.component";
import {DetalleCursoComponent} from "./componentes/detalle-curso/detalle-curso.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'detalle-curso', component: DetalleCursoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
