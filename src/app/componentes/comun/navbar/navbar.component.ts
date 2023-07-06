import { Component } from '@angular/core';
import {Router} from "@angular/router";
//import {CognitoService} from "../../../SERVICES/cognito.service";
import {AuthService} from "../../../SERVICES/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  title = '20231erCuatGrupo9';
  public jwt: string | null;
  public rol: string | null;

  constructor( private router:Router, private authService: AuthService, protected httpClient: HttpClient,) {
    this.jwt = localStorage.getItem("jwt");
    this.rol = localStorage.getItem("rol");
  }

/*
  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

 */
  getJWT() {
    return this.jwt;
  }
  cerrarSesion() {
    const url = 'http://localhost:4500/cerrar-sesion';
    const body = {
      jwt: this.jwt
    };

    this.httpClient.post<Response>(url, body).subscribe(
      response => {
        console.log('Usuario deslogueado');
      },
      error => {
        console.error('Error al desloguear el usuario');
      }
    );
    localStorage.removeItem("jwt");
    localStorage.removeItem("rol");
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });;
  }




}
