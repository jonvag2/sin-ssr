import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Talento Activo';

  ngOnInit():void{
    AOS.init();
  }
}
