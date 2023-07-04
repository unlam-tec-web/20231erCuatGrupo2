import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService, Curso } from '../../SERVICES/curso.service';
import { CarritoService } from '../../SERVICES/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cursosEnCarrito: Curso[] = [];
  sumaTotal: number = 0;
  mostrarAviso: boolean = false;
  mensajeAviso: string = '';
  mostrarMensajeAgregar: boolean = false;
  mensajeAgregar: string = '';

  constructor(
    private cursoService: CursoService,
    public carritoService: CarritoService,
    private router: Router,
    private aRouter: ActivatedRoute
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
    this.calcularSumaTotal(); // Actualizar la suma total
    // Mostrar el aviso de carrito vaciado
    this.mostrarAviso = true;
    this.mensajeAviso = 'El carrito ha sido vaciado';
    setTimeout(() => {
      this.mostrarAviso = false;
      this.mensajeAviso = '';
    }, 2000); // Ocultar el aviso después de 2 segundos (2000 ms)
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

