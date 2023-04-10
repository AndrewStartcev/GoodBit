const heroFeatures = document.querySelector('.hero-features');
const heroFeaturesWrapper = document.querySelector('.hero-features__wrapper');
const heroFeatureSlide = heroFeatures.querySelectorAll('.hero-features__slide');
let heroSwiper = undefined;

function createHeroSwiper() {
  const swiperPagination = document.createElement('div')

  swiperPagination.classList.add('swiper-pagination');
  swiperPagination.classList.add('features-pagination');

  heroFeaturesWrapper.classList.add('swiper-wrapper');

  heroFeatureSlide.forEach((card) => {
    card.classList.add('swiper-slide');
  });

  heroFeatures.appendChild(swiperPagination);

  heroSwiper = new Swiper(heroFeatures, {
    spaceBetween: 15,

    pagination: {
      el: swiperPagination,
      clickable: true,
      dynamicBullets: true
    },
  });
}

function destroyHeroSwiper() {

  heroFeatures.classList.remove('swiper-wrapper');

  heroFeatureSlide.forEach((card) => {
    card.classList.remove('swiper-slide');
  });

  if (heroSwiper) {
    let pagination = document.querySelectorAll('.features-pagination');
    let note = document.querySelectorAll('.swiper-notification');

    pagination.forEach((el) => {
      el.remove();
    });
    note.forEach((el) => {
      el.remove();
    });
    heroSwiper.destroy();
  }
}

export function handleHeroResize() {
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth < 768;

  if (isMobile) {
    createHeroSwiper();
  } else {
    destroyHeroSwiper();
  }
}
