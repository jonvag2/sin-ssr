import { Component } from '@angular/core';
import { NavComponent } from '../../../../shared/nav/nav.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { OurHistoryComponent } from '../../../../shared/our-history/our-history.component';
import { RouterModule } from '@angular/router';
import { ContacUsComponent } from "../../../../shared/contac-us/contac-us.component";
import { PieFooterComponent } from "../../../../shared/pie-footer/pie-footer.component";
import { MessageComponent } from "../../components/message/message.component";
import { WhatsappComponent } from "../../../../shared/whatsapp/whatsapp.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavComponent, FooterComponent, OurHistoryComponent, RouterModule, ContacUsComponent, PieFooterComponent, MessageComponent, WhatsappComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
