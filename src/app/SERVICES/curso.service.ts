import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url='/api';

  constructor(private http: HttpClient) {
  }

  //get Cursos
  getCursos(){
    return this.http.get(this.url);
  }

  //get un curso
  getUnCurso(id:string){
    return this.http.get(this.url+'/'+id);
  }

  //agregar curso
  addCurso(curso:Curso){
    return this.http.post(this.url, curso);
  }


  //eliminar curso
  deleteCurso(id:number){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar un curso
  editCurso(id:number,curso:Curso){
    return this.http.put(this.url+'/'+id, curso);
  }

  //obtener los ultimos 4 cursos
  getUltimos4Cursos(){
    return this.http.get(this.url);
  }

  //get Categorias
  getCategorias(){
    return this.http.get(this.url);
  }

}



export interface Curso{
  Identificador?:number;
  Categoria?:string;
  Descripcion?:string;
  Imagen?:string;
  Nombre?:string;
  Precio?:number;

}
