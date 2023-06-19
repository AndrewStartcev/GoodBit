import { handleHeroResize } from './modules/hero-swiper.js';

window.addEventListener('load', handleHeroResize);
window.addEventListener('resize', handleHeroResize);


const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((menuItem) => {
  const subMenu = menuItem.querySelector('.sub-menu');

  if (subMenu) {
    menuItem.addEventListener('mouseenter', () => {
      subMenu.style.display = 'block';
    });

    menuItem.addEventListener('mouseleave', () => {
      subMenu.style.display = 'none';
    });

    menuItem.addEventListener('click', (event) => {
      event.preventDefault();
      subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    });
  }
});

const burgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');

burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('active');
  menu.classList.toggle('menu--active');
});

const feedbasksSlider = document.querySelector('.feedbacks__slider');

if (feedbasksSlider != null) {
  new Swiper(feedbasksSlider, {
    spaceBetween: 15,
    slidesPerView: 1,

    pagination: {
      el: '.feedbacks__pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 25
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });
}
