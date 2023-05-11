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
import { CursosComponent } from './componentes/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegistrarComponent,
    CursosComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
