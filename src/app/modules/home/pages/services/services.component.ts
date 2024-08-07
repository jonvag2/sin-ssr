import { Component } from '@angular/core';
import { NavComponent } from '../../../../shared/nav/nav.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { OurHistoryComponent } from '../../../../shared/our-history/our-history.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavComponent, FooterComponent, OurHistoryComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
