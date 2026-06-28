export default function Slider() {
  new Swiper(".what-about-us .swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    navigation: {
      nextEl: ".what-about-us__button-right",
      prevEl: ".what-about-us__button--left",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },
    },
  });
}