// Функция для открытия всплывающего окна
function openPopup(popupId) {
  closeAllPopups();

  var popup = document.querySelector(popupId);
  var popupBody = popup.querySelector('.popup__body');

  popup.classList.add('show');
  document.body.classList.add('no-scroll');

  popup.addEventListener('click', function (event) {
    if (!popupBody.contains(event.target)) {
      closePopup(popup);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closePopup(popup);
    }
  });
}

function closePopup(popup) {
  popup.classList.remove('show');

  if (document.querySelectorAll('.popup.show').length === 0) {
    document.body.classList.remove('no-scroll');
  }
}

function closeAllPopups() {
  var popups = document.querySelectorAll('.popup');
  for (var i = 0; i < popups.length; i++) {
    closePopup(popups[i]);
  }
}

var buttons = document.querySelectorAll('[data-popup], [data-close-popup]');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (event) {
    event.preventDefault();

    if (this.hasAttribute('data-popup')) {
      var popupId = this.getAttribute('data-popup');
      openPopup(popupId);
    }

    if (this.hasAttribute('data-close-popup')) {
      var popup = this.closest('.popup');
      closePopup(popup);
    }
  });
}


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
