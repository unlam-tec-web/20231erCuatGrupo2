import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: '<h1>{{ message }}</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cursos';
  message: string;
  constructor(private http: HttpClient) {
    this.message = '';
  }
  ngOnInit() {

 //   this.http.get<any>('http://localhost:3000/api').subscribe(data => {

   //   this.message = data;

    //});

  }

}


