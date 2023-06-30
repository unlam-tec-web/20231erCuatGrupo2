import { Component } from '@angular/core';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  private listarCurso: Curso[] =[];
  constructor(private carritoService: CarritoService) {}
  ngOnInit() {}
  agregarAlCarrito(Identificador: int)
  { this.carritoService.agregarCursoCarrito(Identificador)
    .subscribe( (response) => { console.log(response.message); },
    (error) => { console.error(error); } );
  }
}
