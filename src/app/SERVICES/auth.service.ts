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
