// import $ from 'jquery';
// import slick from 'slick-carousel';

import Swiper, { Navigation } from 'swiper';


export default function () {
  const swiper = new Swiper('.production-slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 0,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.production-slider__navgation-next',
      prevEl: '.production-slider__navgation-prev',
    },
  });
  
};






  // $('.production-slider').slick({
  //   centerMode: true,
  //   centerPadding: '10px',
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   infinite: false,
  //   prevArrow: '<button type="button" class="slick-prev"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.8004 0.76418L0.959718 7.60486L7.8004 14.4456" /></svg></button>',
  //   nextArrow: '<button type="button" class="slick-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.989848 14.9424L7.83057 8.10171L0.989847 1.26099" /></svg></button>',
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     }
  //   ]
  // });