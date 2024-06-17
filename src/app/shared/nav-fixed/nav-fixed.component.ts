import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-fixed',
  standalone: true,
  imports: [NgClass],
  templateUrl:'./nav-fixed.component.html',
  styleUrl: './nav-fixed.component.css'
})
export class NavFixedComponent {
  navbarhidden:boolean = false

  @HostListener("window:scroll", ['$event'])
  doSomethingOnGlobalScroll($event: Event) {
    let scrollOffset = window.scrollY;
    if (scrollOffset > 100) {
      console.log("soy menor a cieen ")
      this.navbarhidden = true;

    } else {
      this.navbarhidden = false;

    }
  }

}
