import { Component } from '@angular/core';
import {CognitoService, IUser} from "../../SERVICES/cognito.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css']
})
export class RecuperarContraseniaComponent {

  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private cognitoService: CognitoService) {
    this.user = {} as IUser;
  }

  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      let email = params['email'];
      this.user.email = email;
      this.cognitoService.forgotPassword(this.user).then(() => {
        console.log("Reseteando contraseña")
      }).catch(error => {
        console.log("Error", error.code);
      })
    })
  }

  public resetPassword(): void {
    this.cognitoService.forgotPasswordSubmit(this.user).then((resp) => {
      this.router.navigate(['/iniciar-sesion']);
    });
  }

}
