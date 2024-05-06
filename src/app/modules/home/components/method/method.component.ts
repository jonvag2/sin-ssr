import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [],
  templateUrl: './method.component.html',
  styleUrl: './method.component.css'
})
export class MethodComponent {
  ngOnInit():void{
    AOS.init();
  }
}
