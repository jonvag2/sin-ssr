import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../interfaces/contacto.interface';
import { formatDateTime } from '../../utils/date-utils';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent { 
  contactoService = inject(ContactoService);
  toastr = inject(ToastrService);

  dataFormulario:Contacto = {
    name: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje:'',
    id_evento: 0
  }

  buttonblock:boolean = true;
  loaderblock:boolean = false;
  currentDate: Date;
  fechaActual: string;


  constructor(private fb: FormBuilder){
    this.currentDate = new Date(); // Obtener la fecha y hora actual
    this.fechaActual = formatDateTime(this.currentDate);

  }
  firstLetterUppercase(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value && value.length > 0 && value[0] !== value[0].toUpperCase()) {
      return { firstLetterUppercase: true }; // Retorna un objeto de error si la validación falla
    }
    return null; // Retorna null si la validación pasa
  }

  guardarDatosSheety(){
    this.loaderblock = true;
    this.buttonblock = false;


    let contacto:any = {
      hoja1: {
        "name": "formulario email",
        "empresa": "",
        "email": this.dataFormulario.email,
        "telefono": "",
        "mensaje": "formulario email",
        "evento": 2,
        //"idEvento": this.dataFormulario.id_evento,
        "idEvento": 1,
        "createdAt": this.fechaActual,
        "updatedAt": this.fechaActual,
        "id": 1
      }
    }

    try {
      this.contactoService.guardarDatosSheety(contacto).subscribe({
        next: (respuesta) => {
          this.buttonblock = false;
          this.loaderblock = false;
          this.dataFormulario.email = "";
          this.toastr.success('Su información se envió correctamente', 'Enviado!!');

          // Aquí puedes manejar la respuesta
        },
        error: (error) => {
          if (error.status == 400 ) {
            this.toastr.error('Este correo ya se encuentra registrado', 'Error!!');
            this.buttonblock = true;
            this.loaderblock = false;
          } if (error.status == 0) {
            this.toastr.error('No se logro enviar su información, servicio backend caído intente mas tarde', 'Error!!');
            this.buttonblock = true;
            this.loaderblock = false;
            console.error("error: ", error);
          } else {
            this.toastr.error('No se logro enviar su información', 'Error!!');
            console.error("error: ", error);
          }
        }
      });
      // Aquí puedes manejar la respuesta
    } catch (error) {
      console.error(error);
    }
  }

}
