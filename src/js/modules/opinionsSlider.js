import $ from 'jquery';
import slick from 'slick-carousel';

export default function () {
  $('.opinions-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
};