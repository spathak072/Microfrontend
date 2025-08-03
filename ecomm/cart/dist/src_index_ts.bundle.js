"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcart"] = self["webpackChunkcart"] || []).push([["src_index_ts"],{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/chunk-KZPPZA2C.js\");\n\nlet cartText = `<div>You have ${_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.number.int()}</div>`;\nconsole.log(\"Cart\", _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.number.int());\nconst devProductsEl = document.querySelector('#dev-cart');\nif (devProductsEl) {\n    devProductsEl.innerHTML = cartText;\n}\n\n\n//# sourceURL=webpack://cart/./src/index.ts?\n}");

/***/ })

}]);