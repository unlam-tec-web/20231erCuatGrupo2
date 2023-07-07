import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent {

  total: string | null;

  constructor(private aRouter: ActivatedRoute) {
    this.total = this.aRouter.snapshot.paramMap.get('total');
  }

  /*cursos: any[] = [
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
  }*/

}
