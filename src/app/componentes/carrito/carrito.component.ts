import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CursoService, Curso } from '../../SERVICES/curso.service';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {






  id: string | null;
  cursoDentroDelCarrito: Curso[] = [];
  private listarCurso: Curso[] = [];



  constructor(private CursoService: CursoService, private router: Router, private aRouter: ActivatedRoute) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }



  ngOnInit(): void {
    this.obtenerCurso();
  }



  obtenerCurso() {
    if (this.id !== null) {
      this.CursoService.getUnCurso(this.id).subscribe(
        res => {
          const curso: Curso = <any>res;
          this.cursoDentroDelCarrito.push(curso);
        },
        err => console.log(err)
      );
    }
  }

}
/*import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CursoService, Curso} from '../../SERVICES/curso.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{

  id: string | null;
  curso: Curso[] =[];
  cursoDentroDelCarrito: Curso[] =[];
  constructor(private CursoService:CursoService, private router: Router, private aRouter: ActivatedRoute) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.obtenerCurso();
    this.prueba();
  }
  prueba() {
    console.log(this.curso);
  }
  obtenerCurso() {
    if (this.id !== null) {
      this.CursoService.getUnCurso(this.id).subscribe(
        res => {
          this.curso = <any>res;
          this.cursoDentroDelCarrito = this.curso;
        },
        err => console.log(err)
      )
    }
  }
}*/
