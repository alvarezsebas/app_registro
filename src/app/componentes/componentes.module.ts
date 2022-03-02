import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosComponent } from './registros/registros.component';
import { RegistroComponent } from './registro/registro.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    RegistroComponent,
    RegistrosComponent,
    HeaderComponent
  ],
  exports: [
    RegistrosComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }