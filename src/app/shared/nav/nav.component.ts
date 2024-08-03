import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(){
  }

  activarScroll:boolean = false;
  menuResponsive:boolean = true;

  ngOnInit():void{
    this.menuResponsive = true;

  }

  clickMenu():void{
    this.menuResponsive=!this.menuResponsive;
    console.log("estoy en click menu this.menuResponsive:", this.menuResponsive);
  }

  @HostListener("window:scroll", ['$event'])
  doSomethingOnGlobalScroll($event: Event) {
    let scrollOffset = window.scrollY;
    if (scrollOffset > 100) {
      this.activarScroll = true;
    } else {
      this.activarScroll = false;
    }
  }

}
