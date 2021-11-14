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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet component = {\n    contact: function(){\n        let element = document.createElement(`div`);\n        element.id = `page`;\n        let title = document.createElement(`div`);\n        title.textContent = `Contacts`;\n        let about = document.createElement(`div`);\n        about.textContent = `Contacts section`;\n        element.append(title, about);\n        return element;\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.contact());\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\nlet component = {\n    clear: function(){\n        while(document.body.firstChild){\n            document.body.removeChild(document.body.lastChild);\n        }\n    },\n    header: function(){\n        let header = document.createElement(`div`);\n        header.classList = `header`;\n        let nav = document.createElement(`nav`);\n        let home = document.createElement(`div`);\n        home.classList = `nav`;\n        home.textContent = `Home`;\n        home.addEventListener(`click`, () => {\n            this.clear();\n            document.body.append(this.header(), _home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].home());\n            _home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].scrollCreate();\n        });\n\n        let menu = document.createElement(`div`);\n        menu.textContent = `Menu`;\n        menu.classList = `nav`\n        menu.addEventListener(`click`, () => _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menu());\n\n        let contact = document.createElement(`div`);\n        contact.textContent = `Contact`;\n        contact.classList = `nav`\n        contact.addEventListener(`click`, () => _contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].contact());\n\n        let logoContainer = document.createElement(`div`);\n        logoContainer.classList = `logo-container`;\n        let logo = document.createElement(`a`);\n        logo.classList = `profile`;\n        logo.href = `https://github.com/TYLPHE`;\n        let img = document.createElement(`img`);\n        img.src = `https://avatars.githubusercontent.com/u/85977718?v=4`;\n        img.alt = `TYLPHE's Avatar`;\n        img.classList = `profile-img`;\n        logo.appendChild(img);\n\n        let title = document.createElement(`div`);\n        title.textContent = `TYLPHE's Steakhouse`;\n\n        logoContainer.append(logo, title)\n        nav.append(home, menu, contact);\n        header.append(logoContainer, nav);\n        return header;\n    },\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.header());\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background.jpg */ \"./src/background.jpg\");\n\nlet component = {\n    home: function(){\n        let element = document.createElement(`div`);\n        element.classList = `parallax`;\n\n        let group1 = document.createElement(`div`);\n        group1.classList = `parallax__group`;\n        let group2 = document.createElement(`div`);\n        group2.classList = `parallax__group`;\n\n        let title1 = document.createElement(`img`);\n        title1.classList = `parallax__layer parallax__layer--back background`;\n        title1.src = _background_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        title1.alt = `Image of steak.`;\n\n        let section1 = document.createElement(`div`);\n        section1.classList = `parallax__layer parallax__layer--base`;\n        let section1Content = document.createElement(`div`);\n        section1Content.classList = `section1`;\n        section1Content.textContent = `MEAT.`;\n        section1.appendChild(section1Content);\n\n        let title2 = document.createElement(`div`);\n        title2.classList = `parallax__layer parallax__layer--back`;\n        let title2Content = document.createElement(`div`);\n        title2Content.classList = `title`;\n        title2Content.textContent = `Restaurant by TYLPHE`;\n        title2.appendChild(title2Content);\n\n        let section2 = document.createElement(`div`);\n        section2.classList = `parallax__layer parallax__layer--base`;\n        let section2Content = document.createElement(`div`);\n        section2Content.classList = `section2`;\n        section2Content.textContent = `section2 section`;\n        section2.appendChild(section2Content);\n\n        group1.append(title1, section1, section2);\n        element.append(group1);\n        return element;\n    },\n    scrollCreate: function (){\n        document.querySelector(`.parallax`).onscroll = () => {\n            if(document.querySelector(`.parallax`).scrollTop > 1){\n                document.querySelector(`.section1`).classList.add(`show`);\n                // document.querySelector(`.section1`).scrollIntoView();\n                console.log(`scrolled ${document.querySelector(`.parallax`).scrollTop}`);\n            }\n            else if (document.querySelector(`.parallax`).scrollTop<  10){\n                document.querySelector(`.section1`).classList.remove(`show`);            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet component = {\n    menu: function(){\n        let element = document.createElement(`div`);\n        element.id = `page`;\n        let title = document.createElement(`div`);\n        title.textContent = `Menu`;\n        let about = document.createElement(`div`);\n        about.textContent = `Menu section`;\n        element.append(title, about);\n        return element;\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.menu());\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1c548026a763ba0ef08.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/background.jpg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/header.js");
/******/ 	
/******/ })()
;