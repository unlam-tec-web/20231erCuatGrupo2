import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  /*verify : boolean  = false;

  constructor(protected router: Router, protected httpClient: HttpClient){ }

  registrarse(){
    const url = 'http://localhost:4500/registrar';

    const email = (document.getElementById("mail") as HTMLInputElement).value;
    console.log(email)
    const contrasenia = (document.getElementById("contrasenia") as HTMLInputElement).value;
    console.log(contrasenia)

    const body = {
      mail: email,
      password: contrasenia,
    };

    console.log(body)

    this.httpClient.post(url, body).subscribe(
      response => {
        console.log('Solicitud POST exitosa:', response);
        this.verify = true;

      },
      error => {
        console.log('Error en la solicitud POST')
        console.log('Error en la solicitud POST:', error);
        console.log(error.error.code);
        if(error.error.code=='UsernameExistsException'){
          this.verify=true;
        }


      }
    );
  }

  verifyCode(){
    const url = 'http://localhost:4500/verificar';

    const email = (document.getElementById("mail") as HTMLInputElement).value;
    console.log(email)
    /*const codigo = (document.getElementById("codigo") as HTMLInputElement).value;
    console.log(codigo)

    const body = {
      mail : email,
      //code : codigo
    };

    console.log(body)

    this.httpClient.post(url, body).subscribe(
      response => {
        console.log('Solicitud POST exitosa:', response);
        this.verify = true;
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error en la solicitud POST:', error);

      }
    );
  }*/
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

