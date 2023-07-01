import { Injectable } from '@angular/core';
// es un tipo especial de observable que permite la transmisión múltiple de valores a muchos observadores simultáneos
// y donde siempre se almacena y permanece disponible el valor actual.
import { BehaviorSubject } from "rxjs";
// permite configurar rápidamente flujos de autenticación seguros
// con un directorio de usuarios completamente administrado.
import { Amplify, Auth } from "aws-amplify";
import { environment } from "../../../backend/environments/environment";

export interface IUser {
  email: string;
  password: string;
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  private authenticationSubject: BehaviorSubject<any>;

  constructor() {
    Amplify.configure({
      Auth: environment.cognito
    });
    this.authenticationSubject = new BehaviorSubject<boolean>(false); // Necesita un valor inicial (false)
  }

  public signUp(user: IUser): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });
  }

  public forgotPassword(user: IUser): Promise<any> {
    return Auth.forgotPassword(user.email);
  }

  public forgotPasswordSubmit(user: IUser): Promise<any> {
    return Auth.forgotPasswordSubmit(user.email, user.code, user.password);
  }

  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  public resendSignUp(user: IUser): Promise<any> {
    return Auth.resendSignUp(user.email);
  }

  public signIn(user: IUser): Promise<any> {
    return Auth.signIn(user.email, user.password).then(() => {
      this.authenticationSubject.next(true);
    })
  }

  public signOut(): Promise<any> {
    return Auth.signOut().then(() => {
      this.authenticationSubject.next(false);
    })
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public isAuthenticated(): boolean {
    return this.authenticationSubject.value
  }

  /*public updateUser(user: IUser): void {
    const userActual = Auth.currentAuthenticatedUser();
  }*/

}

// Observable: Transmite informacion entre componentes
// La única diferencia es que no se pueden enviar valores a un Observable usando el método next().
// En Angular, se recomienda usar BehaviorSubjectpara transferir datos, ya que un servicio a menudo se inicializa
// antes que un componente.
// BehaviorSubject garantiza que el componente que consume el Servicio reciba los últimos datos actualizados,
// incluso si no hay nuevas actualizaciones, debido a la suscripción del componente al Servicio.
