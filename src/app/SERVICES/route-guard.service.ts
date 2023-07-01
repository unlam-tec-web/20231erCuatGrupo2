import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from "@angular/router";
import { CognitoService } from "./cognito.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private cognitoService: CognitoService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if(this.cognitoService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }

  }

}
