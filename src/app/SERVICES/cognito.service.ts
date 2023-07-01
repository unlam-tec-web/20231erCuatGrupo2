import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
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
    this.authenticationSubject = new BehaviorSubject<boolean>(false);
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
}
