import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {RegistrarComponent} from "./componentes/registrar/registrar.component";
import {CarritoComponent} from "./componentes/carrito/carrito.component";
import {CursosComponent} from "./componentes/cursos/cursos.component";
import { IniciarSesionComponent } from "./componentes/iniciar-sesion/iniciar-sesion.component";
import {CerrarSesionComponent} from "./componentes/cerrar-sesion/cerrar-sesion.component";
import {DetalleCursoComponent} from "./componentes/detalle-curso/detalle-curso.component";

import {ComprarComponent} from "./componentes/comprar/comprar.component";

import {RouteGuardService} from "./SERVICES/route-guard.service";
import {CodigoValidacionComponent} from "./componentes/codigo-validacion/codigo-validacion.component";
import {IngresarEmailComponent} from "./componentes/ingresar-email/ingresar-email.component";
import {RecuperarContraseniaComponent} from "./componentes/recuperar-contrasenia/recuperar-contrasenia.component";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'carrito', component: CarritoComponent, canActivate: [RouteGuardService] },
  { path: 'cursos', component: CursosComponent, canActivate: [RouteGuardService]},
  { path: 'iniciar-sesion', component: IniciarSesionComponent },


  { path: 'comprar', component: ComprarComponent },
  { path: 'cerrar-sesion', component: CerrarSesionComponent, canActivate: [RouteGuardService] },
  { path: 'detalle-curso/:id', component: DetalleCursoComponent, canActivate: [RouteGuardService] },
  { path: 'codigo-validacion', component: CodigoValidacionComponent },
  { path: 'ingresar-email', component: IngresarEmailComponent },
  { path: 'recuperar-contrasenia', component: RecuperarContraseniaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
