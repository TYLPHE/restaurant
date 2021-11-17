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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\nlet component = {\n    clear: function(){\n        while(document.body.firstChild){\n            document.body.removeChild(document.body.lastChild);\n        }\n    },\n    header: function(){\n        let header = document.createElement(`div`);\n        header.classList = `header`;\n        let nav = document.createElement(`nav`);\n        let home = document.createElement(`div`);\n        home.classList = `nav`;\n        home.textContent = `Home`;\n        home.addEventListener(`click`, () => {\n            this.clear();\n            document.body.append(this.header(), _home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].home());\n            _home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].scrollCreate();\n        });\n\n        let menu = document.createElement(`div`);\n        menu.textContent = `Menu`;\n        menu.classList = `nav`\n        menu.addEventListener(`click`, () => _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menu());\n\n        let contact = document.createElement(`div`);\n        contact.textContent = `Contact`;\n        contact.classList = `nav`\n        contact.addEventListener(`click`, () => _contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].contact());\n\n        nav.append(home, menu, contact);\n        header.append(nav);\n        return header;\n    },\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.header());\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _background1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background1.jpg */ \"./src/background1.jpg\");\n/* harmony import */ var _background2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background2.jpg */ \"./src/background2.jpg\");\n\n\nlet component = {\n    home: function(){\n        let element = document.createElement(`div`);\n        element.classList = `parallax`;\n        element.append(\n            this.groupTop(), \n            this.group1(), \n            this.group2(), \n            this.groupBot());\n        return element;\n    },\n    groupTop: function(){\n        //create a container to export\n        let group = document.createElement(`div`);\n        group.classList = `parallax_group`;\n        group.id = `groupTop`;\n\n        //create contents to display - top and bot dont need fore/back layer\n        let base = document.createElement(`div`);\n        base.classList = `parallax_layer parallax_layer-base`;\n        let content = document.createElement(`div`);\n        content.classList = `parallax-text`;\n        content.textContent = `Title.`;\n\n        let logoContainer = document.createElement(`div`);\n        logoContainer.classList = `logo-container`;\n        let logo = document.createElement(`a`);\n        logo.href = `https://github.com/TYLPHE`;\n        let img = document.createElement(`img`);\n        img.src = `https://avatars.githubusercontent.com/u/85977718?v=4`;\n        img.alt = `TYLPHE's Avatar`;\n        img.classList = `profile-img`;\n\n        let title = document.createElement(`div`);\n        title.classList = `logo-text`;\n        title.textContent = `TYLPHE's Restaurant`;\n        \n        let scrollText = document.createElement(`div`);\n        scrollText.classList = `scroll-text`;\n        scrollText.textContent = `(Scroll for meat.)`;\n        \n        //attach contents and export\n        logo.appendChild(img);\n        logoContainer.append(logo, title)\n        base.append(logoContainer, scrollText);\n        group.append(base);\n        return group;\n    },\n    group1: function(){\n        //create a container to export\n        let group = document.createElement(`div`);\n        group.classList = `parallax_group`;\n        group.id = `group1`;\n\n        //create contents to display - group 1 is base and back (background)\n        let base = document.createElement(`div`);\n        base.classList = `parallax_layer parallax_layer-base`;\n        let text = document.createElement(`div`);\n        text.classList = `parallax-text`;\n        text.textContent = `MEAT.`;\n        \n        let back = document.createElement(`div`);\n        back.classList = `parallax_layer parallax_layer-back`;\n        let img = document.createElement(`img`);\n        img.classList = `background`;\n        img.src = _background1_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        img.alt = `Image of steak.`;\n        \n        //attach contents and export\n        base.appendChild(text);\n        back.appendChild(img);\n        group.append(base, back);\n        return group;\n    },\n    group2: function(){\n        //create a container to export\n        let group = document.createElement(`div`);\n        group.classList = `parallax_group`;\n        group.id = `group2`;\n\n        //create contents to display - group 2 is base (background) and fore\n        let base = document.createElement(`div`);\n        base.classList = `parallax_layer parallax_layer-base`;\n        let back = document.createElement(`img`);\n        back.classList = `background`;\n        back.src = _background2_jpg__WEBPACK_IMPORTED_MODULE_1__;\n        back.alt = `Image of ribs.`;\n        \n        let fore = document.createElement(`div`);\n        fore.classList = `parallax_layer parallax_layer-fore`;\n        let text = document.createElement(`div`);\n        text.classList = `parallax-text`;\n        text.textContent = `MORE MEAT.`;\n        \n        //attach contents and export\n        base.appendChild(back);\n        fore.appendChild(text);\n        group.append(base, fore);\n        return group;\n    },\n    groupBot: function(){\n        //create container to export\n        let group = document.createElement(`div`);\n        group.classList = `parallax_group`;\n        group.id = `groupBot`;\n\n        //create contents to display - top and bot dont need fore/back layer\n        let base = document.createElement(`div`);\n        base.classList = `parallax_layer parallax_layer-base`;\n        let content = document.createElement(`div`);\n        content.classList = `parallax-text`;\n        content.textContent = `ALL YOU CAN EAT MEAT.`;\n\n        base.appendChild(content);\n        group.append(base);\n        return group;\n    },\n    scrollCreate: function (){\n        document.querySelector(`.parallax`).onscroll = () => {\n            if(document.querySelector(`.parallax`).scrollTop > 1){\n                document.querySelector(`.section1a`).classList.add(`show`);\n                // document.querySelector(`.section1`).scrollIntoView();\n                // console.log(`scrolled ${document.querySelector(`.parallax`).scrollTop}`);\n            }\n            else if (document.querySelector(`.parallax`).scrollTop <  10){\n                document.querySelector(`.section1a`).classList.remove(`show`);            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet component = {\n    menu: function(){\n        let element = document.createElement(`div`);\n        element.id = `page`;\n        let title = document.createElement(`div`);\n        title.textContent = `Menu`;\n        let about = document.createElement(`div`);\n        about.textContent = `Menu section`;\n        element.append(title, about);\n        return element;\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.menu());\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/background1.jpg":
/*!*****************************!*\
  !*** ./src/background1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"855f6f830ce487e5880f.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/background1.jpg?");

/***/ }),

/***/ "./src/background2.jpg":
/*!*****************************!*\
  !*** ./src/background2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7d2207db0f33784702e.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/background2.jpg?");

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