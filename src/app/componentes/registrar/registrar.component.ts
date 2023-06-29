import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CognitoService, IUser } from "../../SERVICES/cognito.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  isConfirm: boolean;
  user: IUser;

  constructor(private router: Router, private cognitoService: CognitoService) {
    this.isConfirm = false;
    this.user = {} as IUser;
  }
  public signUp(): void {
    this.cognitoService.signUp(this.user).then(() => {
      this.isConfirm = true;
    }).catch(() => {
      console.log("Ocurrió algun error en el registro");
    })
  }
  public confirmSignUp(): void {
    this.cognitoService.confirmSignUp(this.user).then(() => {
      this.router.navigate(['/login'])
    }).catch(() => {
      console.log("Ocurrió algun error al confirmar el registro");
    })
  }


  /*myForm:FormGroup;

  constructor( public fb: FormBuilder ) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      contrasenia: ['', [Validators.required]],
      confirmar: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
    });
  }
  ngOnInit() { }

  saveData(){
    console.log(this.myForm.value);
  }*/

  /* Falta verificar que los datos esten pasando
  * Y poner si hay errores mensajes */



}
