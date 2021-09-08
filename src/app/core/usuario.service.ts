import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../shared/models/usuario';

@Injectable({
  providedIn: 'root'
})
  
export class HomeService {
  private readonly url = 'http://localhost:3001/usuarios/';
  
  constructor(private http: HttpClient) { }
  
  buscarId(idBuscado: number){
    return this.http.get<Usuario>(this.url + idBuscado);
  }
}