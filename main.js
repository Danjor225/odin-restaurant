/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about-page.js":
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAboutPage: () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nconst pageContent = document.querySelector('#content')\n\nlet aboutPageText = [ \"The Coolest Restaurant event as rated by noone\", \"Because we don't sell food\", \"but instead the greatest sustience of all time.\", \"Based in middle of london\", \n    \"most unique restaurant experience in the world\"\n]\n\nfunction loadAboutPage(){\n\n\n    aboutPageText.forEach(element => {\n        let textBodyContent = document.createElement('div')\n        textBodyContent.textContent = element\n        pageContent.appendChild(textBodyContent)\n   });\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQtcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWJvdXQtcGFnZS5qcz8wMWIwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG5sZXQgYWJvdXRQYWdlVGV4dCA9IFsgXCJUaGUgQ29vbGVzdCBSZXN0YXVyYW50IGV2ZW50IGFzIHJhdGVkIGJ5IG5vb25lXCIsIFwiQmVjYXVzZSB3ZSBkb24ndCBzZWxsIGZvb2RcIiwgXCJidXQgaW5zdGVhZCB0aGUgZ3JlYXRlc3Qgc3VzdGllbmNlIG9mIGFsbCB0aW1lLlwiLCBcIkJhc2VkIGluIG1pZGRsZSBvZiBsb25kb25cIiwgXG4gICAgXCJtb3N0IHVuaXF1ZSByZXN0YXVyYW50IGV4cGVyaWVuY2UgaW4gdGhlIHdvcmxkXCJcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBYm91dFBhZ2UoKXtcblxuXG4gICAgYWJvdXRQYWdlVGV4dC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgdGV4dEJvZHlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGV4dEJvZHlDb250ZW50LnRleHRDb250ZW50ID0gZWxlbWVudFxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0Qm9keUNvbnRlbnQpXG4gICB9KTtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about-page.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page.js */ \"./src/menu-page.js\");\n/* harmony import */ var _about_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page.js */ \"./src/about-page.js\");\n\n\n\n\nconst homeBtn = document.querySelector(\"#homeBtn\")\nconst menuBtn = document.querySelector(\"#menuBtn\")\nconst aboutBtn = document.querySelector('#aboutBtn')\n\nconst bodyContainer = document.querySelector('#content')\n\n;(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoadGenerate)()\n\nhomeBtn.addEventListener('click', () => {\n    clearPage()\n    ;(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoadGenerate)()\n})\n\nmenuBtn.addEventListener('click', () => {\n    clearPage()\n    ;(0,_menu_page_js__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)()\n\n})\n\naboutBtn.addEventListener('click', () => {\n    clearPage()\n    ;(0,_about_page_js__WEBPACK_IMPORTED_MODULE_2__.loadAboutPage)()\n})\n\n\n\nfunction clearPage(){\n\n    bodyContainer.textContent = \"\"\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUErQztBQUNKO0FBQ0U7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnRUFBZ0I7O0FBRWhCO0FBQ0E7QUFDQSxJQUFJLGdFQUFnQjtBQUNwQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLDREQUFZOztBQUVoQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLDhEQUFhO0FBQ2pCLENBQUM7Ozs7QUFJRDs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGFnZUxvYWRHZW5lcmF0ZX0gZnJvbSBcIi4vcGFnZS1sb2FkLmpzXCJcbmltcG9ydCB7bG9hZE1lbnVQYWdlfSBmcm9tIFwiLi9tZW51LXBhZ2UuanNcIlxuaW1wb3J0IHtsb2FkQWJvdXRQYWdlfSBmcm9tIFwiLi9hYm91dC1wYWdlLmpzXCJcblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZUJ0blwiKVxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudUJ0blwiKVxuY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXRCdG4nKVxuXG5jb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG5wYWdlTG9hZEdlbmVyYXRlKClcblxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhclBhZ2UoKVxuICAgIHBhZ2VMb2FkR2VuZXJhdGUoKVxufSlcblxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhclBhZ2UoKVxuICAgIGxvYWRNZW51UGFnZSgpXG5cbn0pXG5cbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyUGFnZSgpXG4gICAgbG9hZEFib3V0UGFnZSgpXG59KVxuXG5cblxuZnVuY3Rpb24gY2xlYXJQYWdlKCl7XG5cbiAgICBib2R5Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIlxuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nconst pageContent = document.querySelector(\"#content\")\nlet menuPageText = [ \"Option 1: Board Game 1\", \"Option 2: Board Game 2\", \"Option 3: Board Game 3\"]\n\nfunction loadMenuPage(){\n\n    \n \n    menuPageText.forEach(element => {\n         let textBodyContent = document.createElement('div')\n         textBodyContent.textContent = element\n         pageContent.appendChild(textBodyContent)\n    });\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS1wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWVudS1wYWdlLmpzP2QyOGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcbmxldCBtZW51UGFnZVRleHQgPSBbIFwiT3B0aW9uIDE6IEJvYXJkIEdhbWUgMVwiLCBcIk9wdGlvbiAyOiBCb2FyZCBHYW1lIDJcIiwgXCJPcHRpb24gMzogQm9hcmQgR2FtZSAzXCJdXG5cbmZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpe1xuXG4gICAgXG4gXG4gICAgbWVudVBhZ2VUZXh0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICBsZXQgdGV4dEJvZHlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgIHRleHRCb2R5Q29udGVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRcbiAgICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHRleHRCb2R5Q29udGVudClcbiAgICB9KTtcblxufVxuXG5leHBvcnQge2xvYWRNZW51UGFnZX0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu-page.js\n");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoadGenerate: () => (/* binding */ pageLoadGenerate)\n/* harmony export */ });\nconst pageContent = document.querySelector(\"#content\")\nlet headerOneTextContent = \"Welcome to the best Restaurant in the world!\"\nlet pageContentsText = [ \"What do we serve I hear you ask?\", \"No food, yep you heard that right. No food\", \"Instead you can fill youself up on the joy of playing ...\"\n    ,\"BOARD GAMES!\", \"Find our large array of board games and quench your competitive spirit!\"]\n\n\nfunction pageLoadGenerate(){\n    let headerOneText = document.createElement('h1')\n    headerOneText.textContent = headerOneTextContent\n    pageContent.appendChild(headerOneText)\n \n    pageContentsText.forEach(element => {\n         let textBodyContent = document.createElement('div')\n         textBodyContent.textContent = element\n         pageContent.appendChild(textBodyContent)\n    });\n\n\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZS1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7OztBQUlMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2UtbG9hZC5qcz9iZWNiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5sZXQgaGVhZGVyT25lVGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gdGhlIGJlc3QgUmVzdGF1cmFudCBpbiB0aGUgd29ybGQhXCJcbmxldCBwYWdlQ29udGVudHNUZXh0ID0gWyBcIldoYXQgZG8gd2Ugc2VydmUgSSBoZWFyIHlvdSBhc2s/XCIsIFwiTm8gZm9vZCwgeWVwIHlvdSBoZWFyZCB0aGF0IHJpZ2h0LiBObyBmb29kXCIsIFwiSW5zdGVhZCB5b3UgY2FuIGZpbGwgeW91c2VsZiB1cCBvbiB0aGUgam95IG9mIHBsYXlpbmcgLi4uXCJcbiAgICAsXCJCT0FSRCBHQU1FUyFcIiwgXCJGaW5kIG91ciBsYXJnZSBhcnJheSBvZiBib2FyZCBnYW1lcyBhbmQgcXVlbmNoIHlvdXIgY29tcGV0aXRpdmUgc3Bpcml0IVwiXVxuXG5cbmZ1bmN0aW9uIHBhZ2VMb2FkR2VuZXJhdGUoKXtcbiAgICBsZXQgaGVhZGVyT25lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBoZWFkZXJPbmVUZXh0LnRleHRDb250ZW50ID0gaGVhZGVyT25lVGV4dENvbnRlbnRcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJPbmVUZXh0KVxuIFxuICAgIHBhZ2VDb250ZW50c1RleHQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgIGxldCB0ZXh0Qm9keUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgdGV4dEJvZHlDb250ZW50LnRleHRDb250ZW50ID0gZWxlbWVudFxuICAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dEJvZHlDb250ZW50KVxuICAgIH0pO1xuXG5cblxufVxuXG5leHBvcnR7cGFnZUxvYWRHZW5lcmF0ZX0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/page-load.js\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;