import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projects = 50;
  hours = 1500;
  support = 120;
  coffe = 1550;

  ngOnInit():void{
    AOS.init();
  }
}
