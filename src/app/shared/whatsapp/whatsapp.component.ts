import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css'
})
export class WhatsappComponent {

  message:string = "Hola, me gustaría saber más sobre sus servicios.";
  encodedMessage = encodeURIComponent(this.message);
  phoneNumber = "+584126071327"; // Reemplaza con tu número real
  whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${this.encodedMessage}`;

  constructor(){}

  ngOnInit():void{

    console.log("mensaje ws ", this.whatsappLink)
  }

}
