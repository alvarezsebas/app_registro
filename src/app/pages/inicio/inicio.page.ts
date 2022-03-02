import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Temperatura, Registros } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  status: any;
  tabs: boolean = false;
  inicio: boolean = false;
  contenido: boolean = true;
  cedula: string;
  habilitado = true;
  usuario = {};
  registros: Temperatura[] = [];
  consulta={
    cc: ''
  }

  constructor( private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uiService: UiServiceService,
    private modalCtrl: ModalController,
    private router: Router) { }

    recargar( event? ) {
      this.siguientes ( event, true );
      this.habilitado = true;
        this.registros = [];
    }

    siguientes( event?, pull: boolean = false ){

      this.usuarioService.obtenerRegistros( pull, this.usuario['_id'] )
        .subscribe((resp: Registros)=> {
          // console.log(resp);
          this.registros.push(...resp.temperaturas);
          console.log(this.registros);
          
  
          if ( event ) {
            event.target.complete();
            if (resp.temperaturas.length === 0) {
              this.habilitado = false;
            }
          }
        });
    }


  ngOnInit() {

    
  }

  async envio( fLogin: NgForm) {
    console.log(fLogin.valid);
    

    if ( fLogin.invalid ) { return; };

    const valido = await this.usuarioService.login(this.consulta.cc)
    if (valido) {
      this.usuario= this.usuarioService.getUsuario();
      this.siguientes();
      this.tabs = !this.tabs;
      this.inicio = !this.inicio;
      this.contenido = !this.contenido;
      
    }else{
      this.uiService.alertaInformativa('Cédula no encontrada.');
    }
  }

}
