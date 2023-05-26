import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  myForm:FormGroup;

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
  }

  /* Falta verificar que los datos esten pasando
  * Y poner si hay errores mensajes */



}
