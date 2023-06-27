/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hero_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hero-swiper.js */ \"./src/js/modules/hero-swiper.js\");\n// Функция для открытия всплывающего окна\r\nfunction openPopup(popupId) {\r\n  closeAllPopups();\r\n\r\n  var popup = document.querySelector(popupId);\r\n  var popupBody = popup.querySelector('.popup__body');\r\n\r\n  popup.classList.add('show');\r\n  document.body.classList.add('no-scroll');\r\n\r\n  popup.addEventListener('click', function (event) {\r\n    if (!popupBody.contains(event.target)) {\r\n      closePopup(popup);\r\n    }\r\n  });\r\n\r\n  document.addEventListener('keydown', function (event) {\r\n    if (event.key === 'Escape') {\r\n      closePopup(popup);\r\n    }\r\n  });\r\n}\r\n\r\nfunction closePopup(popup) {\r\n  popup.classList.remove('show');\r\n\r\n  if (document.querySelectorAll('.popup.show').length === 0) {\r\n    document.body.classList.remove('no-scroll');\r\n  }\r\n}\r\n\r\nfunction closeAllPopups() {\r\n  var popups = document.querySelectorAll('.popup');\r\n  for (var i = 0; i < popups.length; i++) {\r\n    closePopup(popups[i]);\r\n  }\r\n}\r\n\r\nvar buttons = document.querySelectorAll('[data-popup], [data-close-popup]');\r\n\r\nfor (var i = 0; i < buttons.length; i++) {\r\n  buttons[i].addEventListener('click', function (event) {\r\n    event.preventDefault();\r\n\r\n    if (this.hasAttribute('data-popup')) {\r\n      var popupId = this.getAttribute('data-popup');\r\n      openPopup(popupId);\r\n    }\r\n\r\n    if (this.hasAttribute('data-close-popup')) {\r\n      var popup = this.closest('.popup');\r\n      closePopup(popup);\r\n    }\r\n  });\r\n}\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', _modules_hero_swiper_js__WEBPACK_IMPORTED_MODULE_0__.handleHeroResize);\r\nwindow.addEventListener('resize', _modules_hero_swiper_js__WEBPACK_IMPORTED_MODULE_0__.handleHeroResize);\r\n\r\n\r\nconst menuItems = document.querySelectorAll('.menu-item');\r\n\r\nmenuItems.forEach((menuItem) => {\r\n  const subMenu = menuItem.querySelector('.sub-menu');\r\n\r\n  if (subMenu) {\r\n    menuItem.addEventListener('mouseenter', () => {\r\n      subMenu.style.display = 'block';\r\n    });\r\n\r\n    menuItem.addEventListener('mouseleave', () => {\r\n      subMenu.style.display = 'none';\r\n    });\r\n\r\n    menuItem.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n      subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';\r\n    });\r\n  }\r\n});\r\n\r\nconst burgerButton = document.querySelector('.header__burger');\r\nconst menu = document.querySelector('.menu');\r\n\r\nburgerButton.addEventListener('click', function () {\r\n  burgerButton.classList.toggle('active');\r\n  menu.classList.toggle('menu--active');\r\n});\r\n\r\nconst feedbasksSlider = document.querySelector('.feedbacks__slider');\r\n\r\nif (feedbasksSlider != null) {\r\n  new Swiper(feedbasksSlider, {\r\n    spaceBetween: 15,\r\n    slidesPerView: 1,\r\n\r\n    pagination: {\r\n      el: '.feedbacks__pagination',\r\n      type: 'bullets',\r\n      clickable: true,\r\n    },\r\n\r\n    breakpoints: {\r\n      768: {\r\n        slidesPerView: \"auto\",\r\n        spaceBetween: 25\r\n      },\r\n      1200: {\r\n        slidesPerView: 2,\r\n        spaceBetween: 30\r\n      }\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/hero-swiper.js":
/*!***************************************!*\
  !*** ./src/js/modules/hero-swiper.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleHeroResize\": function() { return /* binding */ handleHeroResize; }\n/* harmony export */ });\nconst heroFeatures = document.querySelector('.hero-features');\r\nlet heroFeaturesWrapper = null\r\nlet heroFeatureSlide = null\r\nlet heroSwiper = undefined;\r\n\r\nif (heroFeatures != undefined) {\r\n  heroFeaturesWrapper = document.querySelector('.hero-features__wrapper');\r\n  heroFeatureSlide = heroFeatures.querySelectorAll('.hero-features__slide');\r\n}\r\n\r\n\r\nfunction destroyHeroSwiper() {\r\n  if (heroFeatureSlide.length > 0) {\r\n    heroFeatures.classList.remove('swiper-wrapper');\r\n\r\n    heroFeatureSlide.forEach((card) => {\r\n      card.classList.remove('swiper-slide');\r\n    });\r\n\r\n    if (heroSwiper) {\r\n      let pagination = document.querySelectorAll('.features-pagination');\r\n      let note = document.querySelectorAll('.swiper-notification');\r\n\r\n      pagination.forEach((el) => {\r\n        el.remove();\r\n      });\r\n      note.forEach((el) => {\r\n        el.remove();\r\n      });\r\n      heroSwiper.destroy();\r\n    }\r\n  }\r\n}\r\nfunction createHeroSwiper() {\r\n  if (heroFeatureSlide.length > 0) {\r\n    const swiperPagination = document.createElement('div')\r\n\r\n    swiperPagination.classList.add('swiper-pagination');\r\n    swiperPagination.classList.add('features-pagination');\r\n\r\n    heroFeaturesWrapper.classList.add('swiper-wrapper');\r\n\r\n    heroFeatureSlide.forEach((card) => {\r\n      card.classList.add('swiper-slide');\r\n    });\r\n\r\n    heroFeatures.appendChild(swiperPagination);\r\n\r\n    heroSwiper = new Swiper(heroFeatures, {\r\n      spaceBetween: 15,\r\n\r\n      pagination: {\r\n        el: swiperPagination,\r\n        clickable: true,\r\n        dynamicBullets: true\r\n      },\r\n    });\r\n  }\r\n}\r\n\r\nfunction handleHeroResize() {\r\n  if (heroFeatureSlide.length > 0) {\r\n    const screenWidth = window.innerWidth;\r\n    const isMobile = screenWidth < 768;\r\n\r\n    if (isMobile) {\r\n      createHeroSwiper();\r\n    } else {\r\n      destroyHeroSwiper();\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/hero-swiper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;