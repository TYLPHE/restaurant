/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _background1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background1.jpg */ \"./src/background1.jpg\");\n/* harmony import */ var _background2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background2.jpg */ \"./src/background2.jpg\");\n\n\nlet component = {\n    home: function(){\n        let element = document.createElement(`div`);\n        element.classList = `parallax`;\n\n        let groupTop = document.createElement(`div`);\n        groupTop.classList = `parallax_group`;\n        groupTop.id = `groupTop`;\n        let group1 = document.createElement(`div`);\n        group1.classList = `parallax_group`;\n        group1.id = `group1`;\n        let group2 = document.createElement(`div`);\n        group2.classList = `parallax_group`;\n        group2.id = `group2`;\n        let groupBot = document.createElement(`div`);\n        groupBot.classList = `parallax_group`;\n        groupBot.id = `groupBot`;\n        \n        let bg1Container = document.createElement(`div`);\n        bg1Container.classList = `parallax_layer parallax_layer-back`;\n        let bg1 = document.createElement(`img`);\n        bg1.classList = `background`;\n        // bg1.textContent = `background`;\n        bg1.src = _background1_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        bg1.alt = `Image of steak.`;\n        bg1Container.appendChild(bg1);\n        \n        let bg2Container = document.createElement(`div`);\n        bg2Container.classList = `parallax_layer parallax_layer-fore`;\n        let bg2 = document.createElement(`div`);\n        bg2.classList = `section1a`;\n        bg2.textContent = `MORE MEAT.`;\n        // bg2.src = background2;\n        // bg2.alt = `Image of steak.`;\n        bg2Container.appendChild(bg2);\n\n        let sectionCapa = document.createElement(`div`);\n        sectionCapa.classList = `parallax_layer parallax_layer-base`;\n        let sectionCapaContent = document.createElement(`div`);\n        sectionCapaContent.classList = `section1a`;\n        sectionCapaContent.textContent = `Title.`;\n        sectionCapa.appendChild(sectionCapaContent);\n\n        let section1a = document.createElement(`div`);\n        section1a.classList = `parallax_layer parallax_layer-base`;\n        let section1aContent = document.createElement(`div`);\n        section1aContent.classList = `section1a`;\n        section1aContent.textContent = `MEAT.`;\n        section1a.appendChild(section1aContent);\n\n        let section1b = document.createElement(`div`);\n        section1b.classList = `parallax_layer parallax_layer-base`;\n        let section1bContent = document.createElement(`div`);\n        section1bContent.classList = `section1b`;\n        section1bContent.textContent = `section1b section`;\n        section1b.appendChild(section1bContent);\n\n        // let section2a = document.createElement(`div`);\n        // section2a.classList = `parallax_layer parallax_layer-base`;\n        // let section2aContent = document.createElement(`div`);\n        // section2aContent.classList = `section2a`;\n        // section2aContent.textContent = `MORE MEAT.`;\n        // section2a.appendChild(section2aContent);\n        let section2a = document.createElement(`div`);\n        section2a.classList = `parallax_layer parallax_layer-base`;\n        let section2aContent = document.createElement(`img`);\n        section2aContent.src = _background2_jpg__WEBPACK_IMPORTED_MODULE_1__;\n        section2aContent.alt = `Image of steak.`;\n        // section2aContent.classList = `section2a`;\n        // section2aContent.textContent = `MORE MEAT.`;\n        section2a.appendChild(section2aContent);\n\n        let section2b = document.createElement(`div`);\n        section2b.classList = `parallax_layer parallax_layer-base`;\n        let section2bContent = document.createElement(`div`);\n        section2bContent.classList = `section2b`;\n        section2bContent.textContent = `section2b section`;\n        section2b.appendChild(section2bContent);\n\n        let sectionBota = document.createElement(`div`);\n        sectionBota.classList = `parallax_layer parallax_layer-base`;\n        let sectionBotaContent = document.createElement(`div`);\n        sectionBotaContent.classList = `section1a`;\n        sectionBotaContent.textContent = `Title.`;\n        sectionBota.appendChild(sectionBotaContent);\n\n        groupTop.append(sectionCapa);\n        group1.append(section1a, bg1Container);\n        group2.append(section2a, bg2Container);\n        groupBot.append(sectionBota);\n        element.append(groupTop, group1, group2, groupBot);\n        return element;\n    },\n    scrollCreate: function (){\n        document.querySelector(`.parallax`).onscroll = () => {\n            if(document.querySelector(`.parallax`).scrollTop > 1){\n                document.querySelector(`.section1a`).classList.add(`show`);\n                // document.querySelector(`.section1`).scrollIntoView();\n                // console.log(`scrolled ${document.querySelector(`.parallax`).scrollTop}`);\n            }\n            else if (document.querySelector(`.parallax`).scrollTop<  10){\n                document.querySelector(`.section1a`).classList.remove(`show`);            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/background1.jpg":
/*!*****************************!*\
  !*** ./src/background1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1c548026a763ba0ef08.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/background1.jpg?");

/***/ }),

/***/ "./src/background2.jpg":
/*!*****************************!*\
  !*** ./src/background2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ad266a3651cc3eda41bc.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/background2.jpg?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;