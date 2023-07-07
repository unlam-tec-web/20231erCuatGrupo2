

import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {RegistrarComponent} from "./componentes/registrar/registrar.component";
import {CarritoComponent} from "./componentes/carrito/carrito.component";
import {CursosComponent} from "./componentes/cursos/cursos.component";
import { IniciarSesionComponent } from "./componentes/iniciar-sesion/iniciar-sesion.component";
import {CerrarSesionComponent} from "./componentes/cerrar-sesion/cerrar-sesion.component";
import {DetalleCursoComponent} from "./componentes/detalle-curso/detalle-curso.component";
import {RouteGuardService} from "./SERVICES/route-guard.service";
import {ComprarComponent} from "./componentes/comprar/comprar.component";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'carrito', component: CarritoComponent,  canActivate: [RouteGuardService] },
  { path: 'cursos', component: CursosComponent,  canActivate: [RouteGuardService] },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'cerrar-sesion', component: CerrarSesionComponent },
  { path: 'detalle-curso/:id', component: DetalleCursoComponent,  canActivate: [RouteGuardService] },
  { path: 'comprar/:total', component: ComprarComponent,  canActivate: [RouteGuardService] },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

