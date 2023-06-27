const heroFeatures = document.querySelector('.hero-features');
let heroFeaturesWrapper = null
let heroFeatureSlide = null
let heroSwiper = undefined;

if (heroFeatures != undefined) {
  heroFeaturesWrapper = document.querySelector('.hero-features__wrapper');
  heroFeatureSlide = heroFeatures.querySelectorAll('.hero-features__slide');
}


function destroyHeroSwiper() {
  if (heroFeatureSlide.length > 0) {
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
}
function createHeroSwiper() {
  if (heroFeatureSlide.length > 0) {
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
}

export function handleHeroResize() {
  if (heroFeatureSlide.length > 0) {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;

    if (isMobile) {
      createHeroSwiper();
    } else {
      destroyHeroSwiper();
    }

  }

}
