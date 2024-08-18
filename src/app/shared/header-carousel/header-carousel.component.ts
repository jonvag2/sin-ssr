import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
// import function to register Swiper custom elements
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
// register Swiper custom elements
register();

@Component({
  selector: 'app-header-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header-carousel.component.html',
  template: `
  
  `,
  styleUrl: './header-carousel.component.css'
})
export class HeaderCarouselComponent {

  swiperElement = signal<SwiperContainer | null>(null);
  ngOnInit(): void{
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
    pagination:false,
    navigation:{
      enabled:true,
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      }

    },
    speed: 2000,
    };

    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
 }

}
