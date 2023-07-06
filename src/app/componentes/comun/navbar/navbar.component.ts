import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../../SERVICES/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isAuthenticated: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getAuthenticatedObservable().subscribe((authenticated: boolean) => {
      this.isAuthenticated = authenticated;
    });
  }

  cerrarSesion(): void {
    this.authService.setAuthenticated(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("rol");

    this.router.navigate(['/home']);
  }

  /*
  cerrarSesion(): void {
    // Realizar las acciones necesarias para cerrar sesión, como eliminar el token JWT y restablecer el estado de autenticación
    this.authService.setAuthenticated(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("rol");

    // Redirigir al usuario a la página de inicio
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
  */


}


/*
import { Component } from '@angular/core';
import {Router} from "@angular/router";
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


  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }


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
 */
