import { Component } from '@angular/core';
import { NavComponent } from '../../../../shared/nav/nav.component';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';

@Component({
  selector: 'app-ourservice',
  standalone: true,
  imports: [NavComponent, HeaderComponent, FooterComponent],
  templateUrl: './ourservice.component.html',
  styleUrl: './ourservice.component.css'
})
export class OurserviceComponent {

}
