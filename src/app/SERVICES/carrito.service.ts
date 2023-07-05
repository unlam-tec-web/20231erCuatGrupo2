import { Injectable } from '@angular/core';
import { Curso } from './curso.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private STORAGE_KEY = 'carrito';
  cursosEnCarrito: Curso[] = [];

  constructor() {
    this.cargarCarritoDesdeLocalStorage();
  }

  agregarAlCarrito(curso: Curso) {
    this.cursosEnCarrito.push(curso);
    this.guardarCarritoEnLocalStorage();
  }

  /*
  agregarAlCarrito(curso: Curso) {
    const cursoExistente = this.cursosEnCarrito.find(c => c.Identificador === curso.Identificador);

    if (cursoExistente) {
      cursoExistente.Cantidad ? cursoExistente.Cantidad++ : cursoExistente.Cantidad = 1;
    } else {
      curso.Cantidad = 1;
      this.cursosEnCarrito.push(curso);
    }

    this.guardarCarritoEnLocalStorage();
    this.mostrarMensajeAgregar = true;
    this.mensajeAgregar = 'El curso ha sido agregado al carrito';

    setTimeout(() => {
      this.mostrarMensajeAgregar = false;
      this.mensajeAgregar = '';
    }, 2000); // Ocultar el mensaje después de 2 segundos (2000 ms)
  }
 */


  vaciarCarrito() {
    this.cursosEnCarrito = [];
    this.guardarCarritoEnLocalStorage();
  }

  getCursosEnCarrito(): Curso[] {
    return this.cursosEnCarrito;
  }

  eliminarDelCarrito(indexCurso: number) {
    this.cursosEnCarrito.splice(indexCurso, 1);
    this.guardarCarritoEnLocalStorage();
  }

  private cargarCarritoDesdeLocalStorage() {
    const carrito = localStorage.getItem(this.STORAGE_KEY);
    if (carrito) {
      this.cursosEnCarrito = JSON.parse(carrito);
    }
  }

  private guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.cursosEnCarrito));
  }
}
