import { Component } from '@angular/core';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent {

  cursos: any[] = [
    {
      nombre: 'Spring Framework 5',
      precio: 2500.0
    },
    {
      nombre: 'Adobe Photoshop',
      precio: 1000.0
    }
  ];

  calcularTotal(): number {
    return this.cursos.reduce((total, curso) => total + curso.precio, 0);
  }

  aceptarCompra(): void {
    // Lógica para aceptar la compra
  }

  rechazarCompra(): void {
    // Lógica para rechazar la compra
  }
}
