import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  private token: string | null;

  constructor(private http: HttpClient) {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    this.token = localStorage.getItem('jwt') || '';
    this.checkTokenValidity();
  }

  public isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  public setAuthenticated(authenticated: boolean): void {
    this.isAuthenticatedSubject.next(authenticated);
  }

  public getAuthenticatedObservable(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  public login(email: string, password: string): Observable<any> {
    const url = 'http://localhost:4500/apiRegistro/iniciar-sesion';
    const body = { mail: email, password: password };

    return this.http.post<Response>(url, body);
  }

  public logout(): Observable<any> {
    const url = 'http://localhost:4500/apiRegistro/cerrar-sesion';
    const body = { jwt: this.token };

    return this.http.post<Response>(url, body);
  }

  private checkTokenValidity(): void {
    if (this.token) {
      this.verifyToken().subscribe(
        () => {
          // Token válido, autenticar al usuario
          this.setAuthenticated(true);
        },
        () => {
          // Token inválido, cierra la sesión
          this.setAuthenticated(false);
          this.logout();
        }
      );
    } else {
      // No se encontró un token, cierra la sesión
      this.setAuthenticated(false);
    }
  }

  public verifyToken(): Observable<any> {
    const url = 'http://localhost:4500/apiRegistro/verificar-token';
    const headers = { Authorization: this.token || '' }; // Convertir this.token en cadena vacía si es nulo
    return this.http.get<Response>(url, { headers });
  }


}

interface Response {
  // Definir la estructura de la respuesta del servidor
  // después de iniciar sesión o verificar el token
  // Puedes adaptar esto según la estructura real de tu respuesta
}




/* Esto funciona
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;

  constructor() {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  }

  public isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  public setAuthenticated(authenticated: boolean): void {
    this.isAuthenticatedSubject.next(authenticated);
  }

  public getAuthenticatedObservable(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
*/



