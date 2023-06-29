import { Component } from '@angular/core';
import {CognitoService} from "../../SERVICES/cognito.service";

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent {

  constructor(private cognitoService: CognitoService) { }

  public ngOnInit(): void {
    this.cognitoService.signOut().then(() => {
      console.log("Cerrando sesión..")
    })
  }

}
