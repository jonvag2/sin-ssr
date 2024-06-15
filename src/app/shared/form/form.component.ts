import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario.interface';
import { FormService } from '../../services/form.service';
import { TextSliderComponent } from "../text-slider/text-slider.component";

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
    imports: [CommonModule, FormsModule, TextSliderComponent]
})
export class FormComponent {

  usuarioService = inject(FormService);
  router = inject(Router);
  toastr = inject(ToastrService);

  perfil:Usuario = {
    nombre: '',
    email: '',
    description: ''
  }
  time:any | undefined ;
  buttonblock:boolean = true;
  loaderblock:boolean = false;

  constructor(){}
  ngOnInit(): void {
   }


  guardarDatosPerfil(){
    this.loaderblock = true;

    
    try {
      this.usuarioService.guardarDatos(this.perfil).subscribe({
        next: (respuesta) => {
          this.buttonblock = false;
          this.loaderblock = false;
          this.toastr.success('Su informacion se envió correctamente', 'Enviado!!');
          

          // Aquí puedes manejar la respuesta
        },
        error: (error) => {
          this.toastr.error('No se logro enviar su informacion', 'Error!!');
          console.error(error);
        }
      });
      // Aquí puedes manejar la respuesta
    } catch (error) {
      console.error(error);
    }

    /* this.router.navigate(["/"]) */
  }

  guardarDatosPerfilgetResponse(){
  }
}
