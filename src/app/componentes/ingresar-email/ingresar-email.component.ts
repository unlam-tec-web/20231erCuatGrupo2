import { Component } from '@angular/core';
import { CognitoService, IUser } from "../../SERVICES/cognito.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-ingresar-email',
  templateUrl: './ingresar-email.component.html',
  styleUrls: ['./ingresar-email.component.css']
})
export class IngresarEmailComponent {

  user: IUser;

  constructor(private router: Router, private cognitoService: CognitoService) {
    this.user = {} as IUser;
  }

  public toForgotPassword(): void {
    if (this.user.email && this.user.email.length > 0){
      this.router.navigate(['/recuperar-contrasenia'], { queryParams: { 'email': this.user.email }})
    }
  }

}
