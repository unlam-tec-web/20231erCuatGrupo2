import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CursoService, Curso } from '../../SERVICES/curso.service';
import { CarritoService } from '../../SERVICES/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  id: string | null;

  constructor(
    private cursoService: CursoService,
    public carritoService: CarritoService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerCurso();
  }

  obtenerCurso() {
    if (this.id !== null) {
      this.cursoService.getUnCurso(this.id).subscribe(
        res => {
          const curso: Curso = res as Curso;
          this.carritoService.agregarAlCarrito(curso);
        },
        err => console.log(err)
      );
    }
  }

}
