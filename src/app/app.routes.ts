import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {RegistrarComponent} from "./componentes/registrar/registrar.component";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
