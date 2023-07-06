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


/*
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationSubject: BehaviorSubject<any>;

  constructor() {
    this.authenticationSubject = new BehaviorSubject<boolean>(false);
     }

  public isAuthenticated(): boolean {
    return this.authenticationSubject.value
  }

}
 */
