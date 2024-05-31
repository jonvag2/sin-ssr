import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import * as AOS from 'aos';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavComponent, SlickCarouselModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  slides = [
    {img: "linear-gradient(to right, rgb(42 47 41 / 26%), rgb(0 0 0 / 36%)), url(./../../assets/talentoactivo/aluminio_1.jpg)"},
    {img: "linear-gradient(to right, rgb(42 47 41 / 26%), rgb(0 0 0 / 36%)), url(../../../assets/talentoactivo/emprendimiento_mujer_1.jpg)"},
    {img: "linear-gradient(to right, rgb(42 47 41 / 26%), rgb(0 0 0 / 36%)), url(../../../assets/talentoactivo/aluminio_2.jpg)"}
    
    /* {img: "url(../../../assets/talentoactivo/emprendimiento_mujer_1.jpg)"},
    {img: "url(../../../assets/talentoactivo/aluminio_2.jpg)"} */
  ];
  color1:string= 'blue';
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,
  "autoplay": true,
  "autoplaySpeed" : 30000,
  "pauseOnHover" : true,
  "infinite" : true,
  "responsive" : [
    {
      "breakpoint" : 992,
      "settings" : {
        "arrows" : true,
        "infinite" : true,
        "slidesToShow": 3,
        "slidesToScroll": 3
      }
    },
    {
      "breakpoint" : 768,
      "settings" : {
        "arrows" : true,
        "infinite" : true,
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }

 ]
  };
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }
}
