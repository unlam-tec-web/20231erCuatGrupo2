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
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cursosEnCarrito));
  }
}
