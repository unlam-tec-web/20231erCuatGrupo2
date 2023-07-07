import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import {AuthService} from "../../SERVICES/auth.service";

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authService:  AuthService
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  esValido() {
    const email = (document.getElementById('mail') as HTMLInputElement).value;
    console.log(email);
    const contrasenia = (document.getElementById(
      'contrasenia'
    ) as HTMLInputElement).value;
    console.log(contrasenia);
  
    let emailValido: boolean = false;
    if (email != null) {
      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      emailValido = emailRegex.test(email);
    }
  
    let contraseniaValida: boolean = false;
    if (contrasenia != null) {
      contraseniaValida = contrasenia.length >= 8;
    }
  
    const errorMessageElement = document.getElementById(
      'error-message'
    ) as HTMLInputElement;
  
    if (!emailValido) {
      errorMessageElement.textContent =
        'Ingrese una dirección de correo electrónico válida.';
      return;
    }
  
    if (!contraseniaValida) {
      errorMessageElement.textContent =
        'La contraseña debe tener al menos 8 caracteres.';
      return;
    }
  
    errorMessageElement.textContent = '';
  }
  

  iniciar() {
    const url = 'http://localhost:4500/apiRegistro/iniciar-sesion';

    const mail = (document.getElementById("mail") as HTMLInputElement).value;
    console.log(mail)
    const password = (document.getElementById("contrasenia") as HTMLInputElement).value;
    console.log(password)

    const body = {
      mail: mail,
      password: password
    };

    console.log(body);


    this.httpClient.post<Response>(url, body).subscribe(
      response => {
        console.log('Solicitud POST exitosa:', response);
        localStorage.setItem('jwt', response.result.idToken.jwtToken);
        if (response.result.idToken.payload['cognito:groups'] !== undefined) {
          localStorage.setItem('rol', response.result.idToken.payload['cognito:groups'][0]);
        }
        this.authService.setAuthenticated(true);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error en la solicitud POST:', error);
      }
    );

  }
}

export interface Response {
  result: {
    idToken: {
      jwtToken: string,
      payload: {
        sub: string,
        "cognito:groups": [string]
        email_verified: boolean,
        iss: string,
        "cognito:username": string,
        given_name: string,
        origin_jti: string,
        aud: string,
        event_id: string,
        token_use: string,
        auth_time: BigInteger,
        exp: BigInteger,
        iat: BigInteger,
        jti: string,
        email: string
      }
    },
    refreshToken: {
      token: string
    },
    accessToken: {
      jwtToken: string,
      payload: {
        sub: string,
        iss: string,
        client_id: string,
        scope: string,
        origin_jti: string,
        aud: string,
        event_id: string,
        token_use: string,
        auth_time: BigInteger,
        exp: BigInteger,
        iat: BigInteger,
        jti: string,
        username: string
      }
    },
    clockDrift: BigInteger
  }

}


 /* this.httpClient.post<Response>(url, body).subscribe(
  response => {
    console.log('Solicitud POST exitosa:', response);
    localStorage.setItem('jwt', response.result.idToken.jwtToken);
    if (response.result.idToken.payload['cognito:groups'] !== undefined) {
      localStorage.setItem('rol', response.result.idToken.payload['cognito:groups'][0]);
    }
    window.location.reload();
  },
  error => {
    console.error('Error en la solicitud POST:', error);

  }
); */
