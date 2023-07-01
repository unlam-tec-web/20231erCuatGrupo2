import { Injectable } from '@angular/core';
import { Curso } from './curso.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  cursosEnCarrito: Curso[][] = [];

  agregarAlCarrito(curso: Curso) {
    const subarray: Curso[] = [curso]; // Crear un nuevo subarreglo con el curso
    this.cursosEnCarrito.push(subarray); // Agregar el subarreglo al arreglo principal
    console.log(this.cursosEnCarrito); // Agregar este console.log para verificar los cursos
  }

  vaciarCarrito() {
    this.cursosEnCarrito = [];
  }
}
