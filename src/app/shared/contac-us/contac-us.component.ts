import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../interfaces/contacto.interface';
import { formatDateTime } from '../../utils/date-utils';

@Component({
  selector: 'app-contac-us',
  standalone: true, 
  templateUrl: './contac-us.component.html',
  styleUrl: './contac-us.component.css',
  imports: [CommonModule, FormsModule],
})
export class ContacUsComponent {
  
  contactoService = inject(ContactoService);
  toastr = inject(ToastrService);

  emailForm!: FormGroup;

  dataFormulario:Contacto = {
    name: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje:'',
    id_evento: 0
  }
  time:any | undefined ;
  buttonblock:boolean = true;
  loaderblock:boolean = false;
  currentDate: Date;
  fechaActual: string;

  constructor(private fb: FormBuilder){
    this.currentDate = new Date(); // Obtener la fecha y hora actual
    this.fechaActual = formatDateTime(this.currentDate);
  }
  ngOnInit(): void {
/* 
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]] */

   }


  guardarDatosPerfil(){
    this.loaderblock = true;

    try {
      this.contactoService.guardarDatos(this.dataFormulario).subscribe({
        next: (respuesta) => {
          this.buttonblock = false;
          this.loaderblock = false;
          console.log("respuesta ", respuesta)
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

    /* this.router.navigate(["/"]) */
  }

  guardarDatosPerfilgetResponse(){
  }

  obtenerDatosSheety(){
    try {
      this.contactoService.obtenerDatosSheety().subscribe({
        next: (respuesta) => {
          console.log("respuesta ", respuesta)
          this.toastr.success('Su información se envió correctamente', 'Enviado!!');
        },
        error: (error) => {
          if (error.status == 400 ) {
            this.toastr.error('Este correo ya se encuentra registrado', 'Error!!');

          } if (error.status == 0) {
            this.toastr.error('No se logro enviar su información, servicio backend caído intente mas tarde', 'Error!!');
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

  guardarDatosSheety(){
    this.loaderblock = true;

    let contacto:any = {
      hoja1: {
        "name": this.dataFormulario.name,
        "empresa": this.dataFormulario.empresa,
        "email": this.dataFormulario.email,
        "telefono": this.dataFormulario.telefono,
        "mensaje": this.dataFormulario.mensaje,
        "evento": this.dataFormulario.evento,
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
          console.log("respuesta ", respuesta)
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
