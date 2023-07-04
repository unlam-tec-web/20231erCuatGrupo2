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

  constructor(
    private cursoService: CursoService,
    public carritoService: CarritoService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cursosEnCarrito = this.carritoService.getCursosEnCarrito();
  }

  eliminarCurso(indexCurso: number) {
    this.carritoService.eliminarDelCarrito(indexCurso);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.cursosEnCarrito = this.carritoService.getCursosEnCarrito();
  }
}

