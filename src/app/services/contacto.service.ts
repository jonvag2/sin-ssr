import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../interfaces/contacto.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl = 'http://localhost:8000'; //URL LOCAL
  private apiUrlPRD = 'https://api.jonapiscope.com'; //URL PRD

  constructor(private http: HttpClient) { }

  guardarDatos(contacto:Contacto) {
    return this.http.post(`${this.apiUrl}/contactos/datos`, contacto)
      
  }
  obtenerDatos() {
    this.http.get(`${this.apiUrl}/contactos/datos`)
      .subscribe(response => {
        console.log(response);
      });
  }
}
