import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Temperatura } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  @Input() registro: Temperatura[] = []; 
    
  constructor( private router: Router) { }



  ngOnInit() {
    console.log('Registro cargado: ', this.registro);
   }

}
