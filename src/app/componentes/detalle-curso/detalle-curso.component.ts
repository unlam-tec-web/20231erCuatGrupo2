import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CursoService, Curso} from '../../SERVICES/curso.service';
import {CarritoService} from '../../SERVICES/carrito.service';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {
  id: string | null;
  curso: Curso[] = [];

  constructor(
    private cursoService: CursoService,
    private carritoService: CarritoService,
    private router: Router,
    private aRouter: ActivatedRoute,
    //private toastr: ToastrService
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
          this.curso = <any>res;
        },
        err => console.log(err)
      );
    }
  }

  agregarAlCarrito(curso: Curso) {
    this.carritoService.agregarAlCarrito(curso);
   // this.toastr.success('El curso se ha añadido al carrito.', '¡Éxito!');
    this.router.navigate(['/carrito']);
  }
}
