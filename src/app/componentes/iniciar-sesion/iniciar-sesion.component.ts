import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  myForm: FormGroup;

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
