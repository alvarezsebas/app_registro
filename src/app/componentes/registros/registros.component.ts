import { Component, OnInit, Input } from '@angular/core';
import { Temperatura } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss'],
})
export class RegistrosComponent implements OnInit {

  @Input() registros: Temperatura[] = [];
  
  constructor() { }

  ngOnInit() {

    console.log("esto llego jeje:",this.registros);
    
    
  }

}
