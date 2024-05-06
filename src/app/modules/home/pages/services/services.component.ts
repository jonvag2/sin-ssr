import { Component } from '@angular/core';
import { NavComponent } from '../../../../shared/nav/nav.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
