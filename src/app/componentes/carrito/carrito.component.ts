import { Component, OnInit } from '@angular/core';
import {  Curso } from '../../SERVICES/curso.service';
import { CarritoService } from '../../SERVICES/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cursosEnCarrito: Curso[] = [];
  sumaTotal: number = 0;
  total: number = 0;
  msjCarrito: string = "El carrito se encuentra vacio.";

  constructor(
    public carritoService: CarritoService,
    private router: Router
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
    this.total = this.sumaTotal;
    this.carritoService.vaciarCarrito();
    this.cursosEnCarrito = this.carritoService.getCursosEnCarrito();
    this.calcularSumaTotal();
    this.router.navigate(['/comprar', this.total]);
  }

  private actualizarCarrito() {
    this.cursosEnCarrito = this.carritoService.getCursosEnCarrito();
    if (this.cursosEnCarrito.length != 0) {
      this.msjCarrito = "";
    }
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

