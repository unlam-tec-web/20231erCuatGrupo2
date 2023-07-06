import { Component, OnInit } from '@angular/core';
import {  Curso } from '../../SERVICES/curso.service';
import { CarritoService } from '../../SERVICES/carrito.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cursosEnCarrito: Curso[] = [];
  sumaTotal: number = 0;

  constructor(
    public carritoService: CarritoService,
  ) {}

  ngOnInit(): void {
    this.cursosEnCarrito = this.carritoService.getCursosEnCarrito();
    this.actualizarCarrito();
  }

  eliminarCurso(indexCurso: number) {
    this.carritoService.eliminarDelCarrito(indexCurso);
    this.calcularSumaTotal();
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.cursosEnCarrito = this.carritoService.getCursosEnCarrito();
    this.calcularSumaTotal();
  }

  private actualizarCarrito() {
    this.cursosEnCarrito = this.carritoService.getCursosEnCarrito();
    this.calcularSumaTotal();
  }

  private calcularSumaTotal() {
    this.sumaTotal = this.cursosEnCarrito.reduce((total, curso) => {
      if (curso.Precio) {
        return total + curso.Precio;
      } else {
        return total;
      }
    }, 0);
  }

}

