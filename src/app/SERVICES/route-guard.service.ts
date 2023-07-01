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

// RouterStateSnapshot: Representa el estado del enrutador en un momento en el tiempo.

// ActivatedRoute: Proporciona acceso a información sobre una ruta asociada con un componente que se carga en una salida.
// Use para atravesar el árbol RouterState y extraer información de los nodos.

// CanActivate: Interfaz que una clase puede implementar para ser un guardia decidiendo si se puede activar una ruta.
// Si todos los guardias devuelven verdadero, la navegación continúa. Si algún guardia devuelve falso,
// se cancela la navegación. Si algún guardia devuelve un UrlTree, la navegación actual se cancela y
// comienza una nueva navegación al UrlTree devuelto por el guardia.
