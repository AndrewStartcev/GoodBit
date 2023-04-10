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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hero_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hero-swiper.js */ \"./src/js/modules/hero-swiper.js\");\n\r\n\r\nwindow.addEventListener('load', _modules_hero_swiper_js__WEBPACK_IMPORTED_MODULE_0__.handleHeroResize);\r\nwindow.addEventListener('resize', _modules_hero_swiper_js__WEBPACK_IMPORTED_MODULE_0__.handleHeroResize);\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/hero-swiper.js":
/*!***************************************!*\
  !*** ./src/js/modules/hero-swiper.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleHeroResize\": function() { return /* binding */ handleHeroResize; }\n/* harmony export */ });\nconst heroFeatures = document.querySelector('.hero-features');\r\nconst heroFeaturesWrapper = document.querySelector('.hero-features__wrapper');\r\nconst heroFeatureSlide = heroFeatures.querySelectorAll('.hero-features__slide');\r\nlet heroSwiper = undefined;\r\n\r\nfunction createHeroSwiper() {\r\n  const swiperPagination = document.createElement('div')\r\n\r\n  swiperPagination.classList.add('swiper-pagination');\r\n  swiperPagination.classList.add('features-pagination');\r\n\r\n  heroFeaturesWrapper.classList.add('swiper-wrapper');\r\n\r\n  heroFeatureSlide.forEach((card) => {\r\n    card.classList.add('swiper-slide');\r\n  });\r\n\r\n  heroFeatures.appendChild(swiperPagination);\r\n\r\n  heroSwiper = new Swiper(heroFeatures, {\r\n    spaceBetween: 15,\r\n\r\n    pagination: {\r\n      el: swiperPagination,\r\n      clickable: true,\r\n      dynamicBullets: true\r\n    },\r\n  });\r\n}\r\n\r\nfunction destroyHeroSwiper() {\r\n\r\n  heroFeatures.classList.remove('swiper-wrapper');\r\n\r\n  heroFeatureSlide.forEach((card) => {\r\n    card.classList.remove('swiper-slide');\r\n  });\r\n\r\n  if (heroSwiper) {\r\n    let pagination = document.querySelectorAll('.features-pagination');\r\n    let note = document.querySelectorAll('.swiper-notification');\r\n\r\n    pagination.forEach((el) => {\r\n      el.remove();\r\n    });\r\n    note.forEach((el) => {\r\n      el.remove();\r\n    });\r\n    heroSwiper.destroy();\r\n  }\r\n}\r\n\r\nfunction handleHeroResize() {\r\n  const screenWidth = window.innerWidth;\r\n  const isMobile = screenWidth < 768;\r\n\r\n  if (isMobile) {\r\n    createHeroSwiper();\r\n  } else {\r\n    destroyHeroSwiper();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/hero-swiper.js?");

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