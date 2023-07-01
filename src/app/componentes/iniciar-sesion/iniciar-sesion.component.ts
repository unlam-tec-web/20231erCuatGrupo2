import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { CognitoService, IUser} from "../../SERVICES/cognito.service";

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  user: IUser;

  constructor(private router: Router, private cognitoService: CognitoService ) {
    this.user = {} as IUser;
  }

  public signIn(): void {
    this.cognitoService.signIn(this.user).then(() => {
      this.router.navigate(['/home']);
    }).catch((error) => {
      switch(error.code){
        case 'UsuarioNoConfirmadoException':
          this.router.navigate(['/codigo-validacion'], { queryParams: {'email': this.user.email} });
          break;
        case 'NoAutorizadoException':
          console.log("Usuario no autorizado")
          break;

      }
    })
  }

  /*myForm: FormGroup;

  constructor(
    public fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      mail: ['', [Validators.required]],
      contrasenia: ['', [Validators.required]],

    });
  }
  ngOnInit() { }

  saveData(){
    console.log(this.myForm.value);
  }

  /* Falta verificar que los datos esten pasando
   * Y poner si hay errores mensajes */


}
