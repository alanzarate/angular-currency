import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { ResponseCurrencyDto } from './dto/response.currency.dto';
import { CurrencyService } from './service/currency.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Arquitectura";
 
  navLinks = [
    {
        label: 'Servicio',
        link: '.',
        index: 0
    }, {
        label: 'Historico',
        link: './datasecond',
        index: 1
    },  {
        label: 'TIme Series',
        link: './timeserie',
        index: 2
    }
  ];
  activeLink = this.navLinks[0];

  constructor(private router: Router, private keycloakservice: KeycloakService){
     
  }
  logout(){
    this.keycloakservice.logout("http://localhost:4200");
  }

   
 
}
