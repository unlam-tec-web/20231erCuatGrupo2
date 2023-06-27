import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../SERVICES/curso.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  constructor(private CursoService:CursoService) {}

  ngOnInit(): void {
    this.listarCursos();
  }

  listarCursos()
  {
    this.CursoService.getCursos().subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    )
  }





  /*
  categoriaLista: any[] = [
    { id: 0, name: 'Todos los cursos' },
    { id: 1, name: 'Programación' },
    { id: 2, name: 'Diseño' },
    { id: 3, name: 'Música' }
  ];

  datosLista: any[] = [
    { id: 1, title: 'Curso de Programación', price: '3000,00$', description: 'En este curso se verá cómo crear aplicaciones y sitios web desde cero con PHP y MYSQL.', image: 'php-desde-cero.jpg' },
   // { id: 2, title: 'Curso de Diseño Gráfico', price: '2000,00$', description: 'Aprende las técnicas de diseño gráfico más populares y crea diseños increíbles.', image: 'diseno-grafico.jpg' },
    { id: 1, title: 'Curso Spring', price: '30,00$', description: 'Construye aplicaciones web con Spring Framework 5 & Spring Boot: Thymeleaf, JPA, Security, REST, MySQL, Angular, WebFlux.', image: 'curso-spring.jpg' },
    { id: 3, title: 'Curso de Piano', price: '1000,00$', description: 'Aprende a tocar el piano desde cero y mejora tus habilidades musicales.', image: 'curso-piano.jpg' }
  ];

  listaFiltrada: any[] = [];

  ngOnInit(): void {
    this.listaFiltrada = [...this.datosLista];
  }

  categoriasFiltradas(categoriaId: number): void {
    if (categoriaId === 0) {
      this.listaFiltrada = [...this.datosLista]; // Mostrar todos los cursos
    } else {
      this.listaFiltrada = this.datosLista.filter(item =>
        item.id === categoriaId
      );
    }
  }  */

}

