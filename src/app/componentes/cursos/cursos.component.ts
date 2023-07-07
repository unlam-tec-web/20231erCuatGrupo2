import { Component, OnInit } from '@angular/core';
import {CursoService, Curso} from '../../SERVICES/curso.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  private listarCurso: Curso[] =[];

  categoriaLista: any[] = [
    { id: 0, name: 'Todos los cursos' },
    { id: 1, name: 'programacion' },
    { id: 2, name: 'diseno' },
    { id: 3, name: 'musica' }
  ];

  listaFiltrada: Curso[] = [];

  constructor(private activatedRoute: ActivatedRoute,private CursoService:CursoService) {}

  ngOnInit(): void {
    //this.listarCursos();
    this.activatedRoute.queryParams.subscribe(params => {
      const categoria = params['categoria'];
      this.listarCursos(categoria);
    });
  }

  /*
  listarCursos()
  {
    this.CursoService.getCursos().subscribe(
      res=>{
        console.log(res)
        this.listarCurso=<any>res;
        this.listaFiltrada = [...this.listarCurso];
      },
      err=>console.log(err)
    )
  } */
  listarCursos(categoria: string): void {
    this.CursoService.getCursos().subscribe(
      res => {
        this.listarCurso = res as Curso[];

        if (categoria && categoria !== 'Todos los cursos') {
          this.listaFiltrada = this.listarCurso.filter(item => item.Categoria === categoria);
        } else {
          this.listaFiltrada = [...this.listarCurso];
        }
      },
      err => console.log(err)
    );
  }


  categoriasFiltradas(categoriaId: number): void {
    if (categoriaId === 0) {
      this.listaFiltrada = [...this.listarCurso]; // Mostrar todos los cursos
    } else {
      this.listaFiltrada = this.listarCurso.filter(item =>
        item.Categoria === this.categoriaLista.find(c => c.id === categoriaId).name
      );
    }
  }






}

