import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../interfaces/contacto.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl = 'http://localhost:8000'; //URL LOCAL
  private apiUrlPRD = 'https://api.jonapiscope.com'; //URL PRD
  private apiUrlSheety = 'https://api.sheety.co/37ed9d767d4e2b6f1cf231fd49e631c8/contactoTalento'; //hoja de calcuolo de jon pero a tra vez de api Sheety


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

  obtenerDatosSheety(){
    console.log("consumiendoapi sheety");
    return this.http.get(`${this.apiUrlSheety}/hoja1`); //hoja de googlesheet
  }

  guardarDatosSheety(contacto:Contacto) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Establecer el tipo de contenido
    });

    return this.http.post(`${this.apiUrlSheety}/hoja1`, contacto, { headers }); // Realiza la solicitud POST
  }

}
