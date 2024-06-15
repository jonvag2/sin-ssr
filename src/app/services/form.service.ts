import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'http://localhost:8000'; // URL de tu API
  private apiUrlPRD = 'https://api.jonapiscope.com'; // URL de tu API

  constructor(private http: HttpClient) { }

  guardarDatos(usuario:Usuario) {
    return this.http.post(`${this.apiUrl}/talento/usuarios`, usuario)
      
  }
  obtenerDatos() {
    this.http.get(`${this.apiUrl}/talento/usuarios`)
      .subscribe(response => {
        console.log(response);
      });
  }
}
