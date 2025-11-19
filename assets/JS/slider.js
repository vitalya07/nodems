new Swiper('.swiper__teams', {
  direction: 'horizontal',
  loop: false,

  slidesPerView: 3,      // на больших экранах
  spaceBetween: -20,

  breakpoints: {
    // до 992px включительно
    0: {
      slidesPerView: 1,
      spaceBetween: -30,   // БОЛЬШИЙ отступ между 2 слайдами
    },
    765: {
      slidesPerView: 2,
      spaceBetween: -20,
    },
    // от 993px и выше
    993: {
      slidesPerView: 3,
      spaceBetween: -20,
    }
  }
});
