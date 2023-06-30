import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CursoService, Curso} from '../../SERVICES/curso.service'

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {

  id: string | null;
  curso: Curso[] =[];

  constructor(private CursoService:CursoService, private router: Router, private aRouter: ActivatedRoute) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  
  ngOnInit(): void {
    this.obtenerCurso();
  }

  obtenerCurso() {
    if(this.id !== null) {
      this.CursoService.getUnCurso(this.id).subscribe(
        res=>{
          this.curso = <any>res;
        },
        err=>console.log(err)
      )
    }
  }

}
