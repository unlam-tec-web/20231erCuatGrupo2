/*import { Component } from '@angular/core';
import {CursoService, Curso} from '../../SERVICES/curso.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private listaCursos : Curso[] = [];

  listaFiltrada: Curso[] = [];


// Obtener los últimos cuatro elementos
   ultimosCuatro = this.listaCursos.slice(this.listaCursos.length - 4);

  constructor(private CursoService:CursoService) {}

  ngOnInit(): void {
    this.listarUltimos4Cursos();
    this.prueba()
  }
  prueba(){console.log(this.ultimosCuatro)
                console.log(this.listaCursos)
                console.log(this.listaFiltrada)}


  listarUltimos4Cursos()
  {
    this.CursoService.getCursos().subscribe(
      res=>{
        console.log(res)
        this.listaCursos = <any>res;
        this.listaFiltrada = [...this.listaCursos];
      },
      err=>console.log(err)
    )
  }


}*/
// home.component.ts
import { Component, OnInit } from '@angular/core';
import { CursoService, Curso } from '../../SERVICES/curso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaCursos: Curso[] = [];
  listaFiltrada: Curso[] = [];
  ultimosCuatro: Curso[] = [];
  categoriaLista: any[] = [
    { id: 1, name: 'programacion' },
    { id: 2, name: 'diseno' },
    { id: 3, name: 'musica' }
  ];

  mostrarMensaje: { [key: string]: boolean } = {};
  mensajeCategoria: { [key: string]: string } = {};


  constructor(private CursoService: CursoService) { }

  ngOnInit(): void {
    this.listarUltimos4Cursos();
    this.prueba();
    this.listarCategorias();
  }
/*
  msjDetalle() {
    console.log("mensaje de que no puede ir si no esta registrado")
    const errorMessageElement = document.getElementById(
      'error-message'
    ) as HTMLInputElement;
    errorMessageElement.textContent = 'No puede ingresar si no esta registrado';
  } */

  msjDetalle(event: Event, curso: Curso) {
    event.preventDefault();
    curso.MostrarMensaje = true;
    curso.Mensaje = 'No puede ingresar si no está registrado';

    setTimeout(() => {
      curso.MostrarMensaje = false;
      curso.Mensaje = '';
    }, 5000); // Eliminar el mensaje después de 5 segundos (5000 milisegundos)
  }

  msjCategoria(event: Event, categoria: string): void {
    event.preventDefault();

    // Aquí verificas si el usuario está logueado o no.
    // Por ahora, asumamos que la variable 'estaLogueado' es un booleano que indica si el usuario está logueado.
    const estaLogueado: boolean = false;

    if (!estaLogueado) {
      this.mostrarMensaje[categoria] = true;
      this.mensajeCategoria[categoria] = 'Debe iniciar sesión para acceder a esta categoría';

      setTimeout(() => {
        this.mostrarMensaje[categoria] = false;
        this.mensajeCategoria[categoria] = '';
      }, 5000); // Eliminar el mensaje después de 5 segundos (5000 milisegundos)
    }
  }

  prueba() {
    console.log(this.ultimosCuatro);
    console.log(this.listaCursos);
    console.log(this.listaFiltrada);
    console.log(this.listarCategorias())
  }

  listarUltimos4Cursos() {
    this.CursoService.getCursos().subscribe(
      res => {
        console.log(res);
        this.listaCursos = res as Curso[];
        this.listaFiltrada = [...this.listaCursos];
        this.ultimosCuatro = this.listaCursos.slice(Math.max(this.listaCursos.length - 4, 0));
      },
      err => console.log(err)
    );
  }

  listarCategorias()
  {
    this.CursoService.getCategorias().subscribe(
      res=>{
        console.log(res)
        this.categoriaLista = res as Curso[];
        this.categoriaLista = [...this.categoriaLista]

      },
      err=>console.log(err)
    )
  }

}

