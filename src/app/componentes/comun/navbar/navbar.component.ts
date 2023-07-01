import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CognitoService} from "../../../SERVICES/cognito.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( private router:Router, private cognitoService: CognitoService ) { }

  public isAuthenticated(): boolean {
    return this.cognitoService.isAuthenticated();
  }
}
