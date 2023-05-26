import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  categoryList: any[] = [
    { id: 0, name: 'Todos los cursos' },
    { id: 1, name: 'Programación' },
    { id: 2, name: 'Diseño' },
    { id: 3, name: 'Música' }
  ];

  dataList: any[] = [
    { id: 1, title: 'Curso de Programación', price: '3000,00$', description: 'En este curso se verá cómo crear aplicaciones y sitios web desde cero con PHP y MYSQL.', image: 'php-desde-cero.jpg' },
   // { id: 2, title: 'Curso de Diseño Gráfico', price: '2000,00$', description: 'Aprende las técnicas de diseño gráfico más populares y crea diseños increíbles.', image: 'diseno-grafico.jpg' },
    { id: 1, title: 'Curso Spring', price: '30,00$', description: 'Construye aplicaciones web con Spring Framework 5 & Spring Boot: Thymeleaf, JPA, Security, REST, MySQL, Angular, WebFlux.', image: 'curso-spring.jpg' },
    { id: 3, title: 'Curso de Piano', price: '1000,00$', description: 'Aprende a tocar el piano desde cero y mejora tus habilidades musicales.', image: 'curso-piano.jpg' }
  ];

  filteredList: any[] = [];

  ngOnInit(): void {
    this.filteredList = [...this.dataList];
  }

  categoriasFiltradas(categoryId: number): void {
    if (categoryId === 0) {
      this.filteredList = [...this.dataList]; // Mostrar todos los cursos
    } else {
      this.filteredList = this.dataList.filter(item =>
        item.id === categoryId
      );
    }
  }
}

