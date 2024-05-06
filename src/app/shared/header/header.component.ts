import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  ngOnInit():void{
    AOS.init();
  }
}
