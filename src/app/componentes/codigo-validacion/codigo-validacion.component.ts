import { Component } from '@angular/core';
import { CognitoService, IUser } from "../../SERVICES/cognito.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-codigo-validacion',
  templateUrl: './codigo-validacion.component.html',
  styleUrls: ['./codigo-validacion.component.css']
})
export class CodigoValidacionComponent {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private cognitoService: CognitoService) {

    this.user = {} as IUser;

  }

  public ngOnInit(): void {
    // enviar solicitud de codigo por correo electronico
    this.activatedRoute.queryParams.subscribe(params => {
      let email = params['email'];
      this.user.email = email;
      this.cognitoService.resendSignUp(this.user).then(() => {
        console.log("Codigo enviado");
      })
    })
  }

  public confirmSignUp(): void {
    // confirmar registro
    this.cognitoService.confirmSignUp(this.user).then(() => {
      this.router.navigate(['/iniciar-sesion']);
    });
  }

}
