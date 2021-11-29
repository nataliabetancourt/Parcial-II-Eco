/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/firebase/app/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.esm.js ***!
  \*****************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nataliabetancourt/Documents/Visual Studio Code/Parcial II/node_modules/firebase/app/dist/index.esm.js'");

/***/ }),

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nataliabetancourt/Documents/Visual Studio Code/Parcial II/node_modules/firebase/auth/dist/index.esm.js'");

/***/ }),

/***/ "./src/firebase-config.js":
/*!********************************!*\
  !*** ./src/firebase-config.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFirebaseConfig\": () => (/* binding */ getFirebaseConfig)\n/* harmony export */ });\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBTtSK9MsE2eByauKIvu528U6OvJvXe1Kk\",\n    authDomain: \"eco-parcial-ii.firebaseapp.com\",\n    projectId: \"eco-parcial-ii\",\n    storageBucket: \"eco-parcial-ii.appspot.com\",\n    messagingSenderId: \"955781056111\",\n    appId: \"1:955781056111:web:75d717fe36c6947876ef9a\"\n};\n\nfunction getFirebaseConfig(){\n    if (!firebaseConfig || !firebaseConfig.apiKey){\n        throw new Error(\"Firebase configuration error\");\n    } else {\n        return firebaseConfig;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UtY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29fc2VtYW5hXzEwLy4vc3JjL2ZpcmViYXNlLWNvbmZpZy5qcz9kZmRkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lCVHRTSzlNc0UyZUJ5YXVLSXZ1NTI4VTZPdkp2WGUxS2tcIixcbiAgICBhdXRoRG9tYWluOiBcImVjby1wYXJjaWFsLWlpLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJlY28tcGFyY2lhbC1paVwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZWNvLXBhcmNpYWwtaWkuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NTU3ODEwNTYxMTFcIixcbiAgICBhcHBJZDogXCIxOjk1NTc4MTA1NjExMTp3ZWI6NzVkNzE3ZmUzNmM2OTQ3ODc2ZWY5YVwiXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlyZWJhc2VDb25maWcoKXtcbiAgICBpZiAoIWZpcmViYXNlQ29uZmlnIHx8ICFmaXJlYmFzZUNvbmZpZy5hcGlLZXkpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJlYmFzZSBjb25maWd1cmF0aW9uIGVycm9yXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmaXJlYmFzZUNvbmZpZztcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/firebase-config.js\n");

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase-config.js */ \"./src/firebase-config.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n\n\n\n\n//Firebase config\nconst firebaseConf = (0,_firebase_config_js__WEBPACK_IMPORTED_MODULE_0__.getFirebaseConfig)();\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConf);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n\n//Elements from login screen\nconst email = document.getElementById(\"email\");\nconst password = document.getElementById(\"password\");\nconst loginBtn = document.getElementById(\"loginBtn\");\n\n//Method for when login button clicked (sign in)\nfunction login (e, ev){\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, email.value, password.value)\n    .then((userCredentials) => {\n        console.log(userCredentials);\n        window.location.href = \"main.html\";\n    })\n    .catch((error) => {\n        console.log(error.message);\n    });\n}\n\nloginBtn.addEventListener(\"click\", login);\n\n//Open main page if user is already logged in\n(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user_account)=>{\n    if (user_account){\n        window.location.href = \"main.html\"\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF1RDtBQUNWO0FBQ3lDOztBQUV0RjtBQUNBLHFCQUFxQixzRUFBaUI7QUFDdEMsWUFBWSwyREFBYTtBQUN6QixhQUFhLHNEQUFPOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx5RUFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQSxpRUFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb19zZW1hbmFfMTAvLi9zcmMvbG9naW4uanM/MzUyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldEZpcmViYXNlQ29uZmlnfSBmcm9tICcuL2ZpcmViYXNlLWNvbmZpZy5qcyc7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7Z2V0QXV0aCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIG9uQXV0aFN0YXRlQ2hhbmdlZH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5cbi8vRmlyZWJhc2UgY29uZmlnXG5jb25zdCBmaXJlYmFzZUNvbmYgPSBnZXRGaXJlYmFzZUNvbmZpZygpO1xuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmYpO1xuY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcblxuLy9FbGVtZW50cyBmcm9tIGxvZ2luIHNjcmVlblxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpO1xuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpO1xuY29uc3QgbG9naW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luQnRuXCIpO1xuXG4vL01ldGhvZCBmb3Igd2hlbiBsb2dpbiBidXR0b24gY2xpY2tlZCAoc2lnbiBpbilcbmZ1bmN0aW9uIGxvZ2luIChlLCBldil7XG4gICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVxuICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codXNlckNyZWRlbnRpYWxzKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIm1haW4uaHRtbFwiO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICB9KTtcbn1cblxubG9naW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvZ2luKTtcblxuLy9PcGVuIG1haW4gcGFnZSBpZiB1c2VyIGlzIGFscmVhZHkgbG9nZ2VkIGluXG5vbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXJfYWNjb3VudCk9PntcbiAgICBpZiAodXNlcl9hY2NvdW50KXtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIm1haW4uaHRtbFwiXG4gICAgfVxufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/login.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/login.js");
/******/ 	
/******/ })()
;