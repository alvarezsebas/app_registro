/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { promise } from 'protractor';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  _storage: Storage | null = null;
  usuario = [];
  registro = [];
  paginaRegistros = 0;
  token: string = null;
  constructor(private  http: HttpClient,
              private storage: Storage){
                this.init();

  }

  login(cedula: string){
    const data = {cedula}
    return new Promise( resolve => {
      this.http.post(`${URL}/hojaVida/ingresoTemp`, data )
      .subscribe(resp => {

        if (resp['ok']) {
          this.guardarToken(resp['token']);
          this.usuario = resp['hv'];
          resolve(true);
        }else{
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
        
      });

    })
    

  }

  registros(id: string){
    const data = {id};
    return new Promise( resolve => {
      this.http.post(`${URL}/temperatura/prueba`, data)
      .subscribe(resp => {
        if (resp['ok']) {
          this.registro = resp['temperaturas']
          console.log(this.registro);
          resolve(true);          
          
        } else {
          resolve(false);
          
        }
      })
    })
  }

  obtenerRegistros( pull: boolean = false, id: string) {
   
    if (pull) {
      this.paginaRegistros = 0;
    }
    this.paginaRegistros ++;
    return this.http.get(`${ URL }/temperatura/prueba/${id}/?pagina=${ this.paginaRegistros}`);
  }

  async guardarToken(token: string){
    
    this.token = token;
    await this.storage.set('token',token);
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  getUsuario(){
    return{...this.usuario};
  }
  getRegistros(){
  return{...this.registro}
  }

    
}
