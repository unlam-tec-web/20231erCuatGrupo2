

import { Component, OnInit } from '@angular/core';
import { AuthService } from './SERVICES/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.authService.verifyToken().subscribe(
        () => {
          // Token válido, autenticar al usuario
          this.authService.setAuthenticated(true);
        },
        () => {
          // Token inválido, desautenticar al usuario
          this.authService.setAuthenticated(false);
          localStorage.removeItem('jwt');
          localStorage.removeItem('rol');
        }
      );
    }
  }



}


