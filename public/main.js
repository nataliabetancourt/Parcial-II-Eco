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

/***/ "./node_modules/firebase/database/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/firebase/database/dist/index.esm.js ***!
  \**********************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nataliabetancourt/Documents/Visual Studio Code/Parcial II/node_modules/firebase/database/dist/index.esm.js'");

/***/ }),

/***/ "./src/book-card.js":
/*!**************************!*\
  !*** ./src/book-card.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bookCard\": () => (/* binding */ bookCard)\n/* harmony export */ });\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/index.esm.js\");\n\n\nclass bookCard {\n    constructor(book) {\n        this.book = book;\n    }\n\n    render(){\n        //Box where the elements are\n        let card = document.createElement(\"div\");\n        card.className = \"cards\";\n\n        //Book title\n        let title = document.createElement(\"p\");\n        title.className = \"bookTitle\";\n        title.innerHTML = this.book.title;\n\n        //Book average\n        let average = document.createElement(\"p\");\n        average.className = \"average\";\n        average.innerHTML = this.book.average;\n\n        //Input to put in score\n        let addAverage = document.createElement(\"input\");\n        addAverage.className = \"averageInput\";\n        addAverage.placeholder = \"Ingresa el puntaje\"\n\n        //Button to add score\n        let addBtn = document.createElement(\"button\");\n        addBtn.className = \"addBtn\";\n        addBtn.innerHTML = \"Agregar\";\n\n        //Functions for when the button is pressed\n        //let sum = 0;\n        addBtn.addEventListener(\"click\", (e, ev)=>{\n            if(parseFloat(addAverage.value) >= 0 && parseFloat(addAverage.value) <= 5){\n                //Create score object\n                const score = {\n                    score: parseFloat(addAverage.value)\n                }\n\n                //Add score to database\n                const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\n                const newScoreRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.push)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'books/' + this.book.id + '/scores'));\n                (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)(newScoreRef, score);\n\n                //Calculate average\n                this.getAverage(average);\n                \n            } else {\n                alert(\"Solo ingresa valores de 0,0 a 5,0\");\n            }\n        })\n\n        card.appendChild(title);\n        card.appendChild(average);\n        card.appendChild(addAverage);\n        card.appendChild(addBtn);\n\n        return card;\n    }\n\n    getAverage(average){\n        let sum = 0;\n        const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\n        const scoreRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'books/' + this.book.id + '/scores');\n            (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(scoreRef, (snapshot)=>{\n                const scoreData = snapshot.val();\n                const total = Object.keys(scoreData).length;\n                    \n                //Go through data and add all scores for that book\n                Object.keys(scoreData).forEach((k, i)=>{\n                    sum += scoreData[k].score;\n                });\n\n                //Create average and show changes\n                let newAverage = sum/total;\n                let bookAverage = newAverage.toFixed(1);\n                average.innerHTML = bookAverage;\n                const bookRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'books/' + this.book.id);\n                (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.update)(bookRef, {\"average\": bookAverage});\n            });\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYm9vay1jYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlGOztBQUUxRTtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDhEQUFXO0FBQ3RDLG9DQUFvQyx1REFBSSxDQUFDLHNEQUFHO0FBQzVDLGdCQUFnQixzREFBRzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw4REFBVztBQUM5Qix5QkFBeUIsc0RBQUc7QUFDNUIsWUFBWSwwREFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNEQUFHO0FBQ25DLGdCQUFnQix5REFBTSxXQUFXLHVCQUF1QjtBQUN4RCxhQUFhO0FBQ2I7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29fc2VtYW5hXzEwLy4vc3JjL2Jvb2stY2FyZC5qcz9mYWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldERhdGFiYXNlLCByZWYsIHB1c2gsIG9uVmFsdWUsIHNldCwgdXBkYXRlIH0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnO1xuXG5leHBvcnQgY2xhc3MgYm9va0NhcmQge1xuICAgIGNvbnN0cnVjdG9yKGJvb2spIHtcbiAgICAgICAgdGhpcy5ib29rID0gYm9vaztcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgLy9Cb3ggd2hlcmUgdGhlIGVsZW1lbnRzIGFyZVxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gXCJjYXJkc1wiO1xuXG4gICAgICAgIC8vQm9vayB0aXRsZVxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gXCJib29rVGl0bGVcIjtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdGhpcy5ib29rLnRpdGxlO1xuXG4gICAgICAgIC8vQm9vayBhdmVyYWdlXG4gICAgICAgIGxldCBhdmVyYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGF2ZXJhZ2UuY2xhc3NOYW1lID0gXCJhdmVyYWdlXCI7XG4gICAgICAgIGF2ZXJhZ2UuaW5uZXJIVE1MID0gdGhpcy5ib29rLmF2ZXJhZ2U7XG5cbiAgICAgICAgLy9JbnB1dCB0byBwdXQgaW4gc2NvcmVcbiAgICAgICAgbGV0IGFkZEF2ZXJhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGFkZEF2ZXJhZ2UuY2xhc3NOYW1lID0gXCJhdmVyYWdlSW5wdXRcIjtcbiAgICAgICAgYWRkQXZlcmFnZS5wbGFjZWhvbGRlciA9IFwiSW5ncmVzYSBlbCBwdW50YWplXCJcblxuICAgICAgICAvL0J1dHRvbiB0byBhZGQgc2NvcmVcbiAgICAgICAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGFkZEJ0bi5jbGFzc05hbWUgPSBcImFkZEJ0blwiO1xuICAgICAgICBhZGRCdG4uaW5uZXJIVE1MID0gXCJBZ3JlZ2FyXCI7XG5cbiAgICAgICAgLy9GdW5jdGlvbnMgZm9yIHdoZW4gdGhlIGJ1dHRvbiBpcyBwcmVzc2VkXG4gICAgICAgIC8vbGV0IHN1bSA9IDA7XG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUsIGV2KT0+e1xuICAgICAgICAgICAgaWYocGFyc2VGbG9hdChhZGRBdmVyYWdlLnZhbHVlKSA+PSAwICYmIHBhcnNlRmxvYXQoYWRkQXZlcmFnZS52YWx1ZSkgPD0gNSl7XG4gICAgICAgICAgICAgICAgLy9DcmVhdGUgc2NvcmUgb2JqZWN0XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlOiBwYXJzZUZsb2F0KGFkZEF2ZXJhZ2UudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9BZGQgc2NvcmUgdG8gZGF0YWJhc2VcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IGdldERhdGFiYXNlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U2NvcmVSZWYgPSBwdXNoKHJlZihkYiwgJ2Jvb2tzLycgKyB0aGlzLmJvb2suaWQgKyAnL3Njb3JlcycpKTtcbiAgICAgICAgICAgICAgICBzZXQobmV3U2NvcmVSZWYsIHNjb3JlKTtcblxuICAgICAgICAgICAgICAgIC8vQ2FsY3VsYXRlIGF2ZXJhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLmdldEF2ZXJhZ2UoYXZlcmFnZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiU29sbyBpbmdyZXNhIHZhbG9yZXMgZGUgMCwwIGEgNSwwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGF2ZXJhZ2UpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZEF2ZXJhZ2UpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxuXG4gICAgZ2V0QXZlcmFnZShhdmVyYWdlKXtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoKTtcbiAgICAgICAgY29uc3Qgc2NvcmVSZWYgPSByZWYoZGIsICdib29rcy8nICsgdGhpcy5ib29rLmlkICsgJy9zY29yZXMnKTtcbiAgICAgICAgICAgIG9uVmFsdWUoc2NvcmVSZWYsIChzbmFwc2hvdCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBzY29yZURhdGEgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IE9iamVjdC5rZXlzKHNjb3JlRGF0YSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL0dvIHRocm91Z2ggZGF0YSBhbmQgYWRkIGFsbCBzY29yZXMgZm9yIHRoYXQgYm9va1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3JlRGF0YSkuZm9yRWFjaCgoaywgaSk9PntcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IHNjb3JlRGF0YVtrXS5zY29yZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vQ3JlYXRlIGF2ZXJhZ2UgYW5kIHNob3cgY2hhbmdlc1xuICAgICAgICAgICAgICAgIGxldCBuZXdBdmVyYWdlID0gc3VtL3RvdGFsO1xuICAgICAgICAgICAgICAgIGxldCBib29rQXZlcmFnZSA9IG5ld0F2ZXJhZ2UudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICBhdmVyYWdlLmlubmVySFRNTCA9IGJvb2tBdmVyYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tSZWYgPSByZWYoZGIsICdib29rcy8nICsgdGhpcy5ib29rLmlkKTtcbiAgICAgICAgICAgICAgICB1cGRhdGUoYm9va1JlZiwge1wiYXZlcmFnZVwiOiBib29rQXZlcmFnZX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/book-card.js\n");

/***/ }),

/***/ "./src/firebase-config.js":
/*!********************************!*\
  !*** ./src/firebase-config.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFirebaseConfig\": () => (/* binding */ getFirebaseConfig)\n/* harmony export */ });\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBTtSK9MsE2eByauKIvu528U6OvJvXe1Kk\",\n    authDomain: \"eco-parcial-ii.firebaseapp.com\",\n    projectId: \"eco-parcial-ii\",\n    storageBucket: \"eco-parcial-ii.appspot.com\",\n    messagingSenderId: \"955781056111\",\n    appId: \"1:955781056111:web:75d717fe36c6947876ef9a\"\n};\n\nfunction getFirebaseConfig(){\n    if (!firebaseConfig || !firebaseConfig.apiKey){\n        throw new Error(\"Firebase configuration error\");\n    } else {\n        return firebaseConfig;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UtY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29fc2VtYW5hXzEwLy4vc3JjL2ZpcmViYXNlLWNvbmZpZy5qcz9kZmRkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lCVHRTSzlNc0UyZUJ5YXVLSXZ1NTI4VTZPdkp2WGUxS2tcIixcbiAgICBhdXRoRG9tYWluOiBcImVjby1wYXJjaWFsLWlpLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJlY28tcGFyY2lhbC1paVwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZWNvLXBhcmNpYWwtaWkuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NTU3ODEwNTYxMTFcIixcbiAgICBhcHBJZDogXCIxOjk1NTc4MTA1NjExMTp3ZWI6NzVkNzE3ZmUzNmM2OTQ3ODc2ZWY5YVwiXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlyZWJhc2VDb25maWcoKXtcbiAgICBpZiAoIWZpcmViYXNlQ29uZmlnIHx8ICFmaXJlYmFzZUNvbmZpZy5hcGlLZXkpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJlYmFzZSBjb25maWd1cmF0aW9uIGVycm9yXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmaXJlYmFzZUNvbmZpZztcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/firebase-config.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase-config */ \"./src/firebase-config.js\");\n/* harmony import */ var _book_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-card */ \"./src/book-card.js\");\n\n\n\n\n\n\n// Inicializar firebase\nconst firebaseAppConfig = (0,_firebase_config__WEBPACK_IMPORTED_MODULE_2__.getFirebaseConfig)();\nconst firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseAppConfig);\n\n//Page elements\nconst bookSection = document.getElementById(\"bookSection\");\n\nfunction getBooks(){\n    //Get database\n    const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)();\n    const bookRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(db, 'books');\n\n    //Get updates from database info\n    (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.onValue)(bookRef, (snapshot) => {\n        const data = snapshot.val();\n        bookCards(data);\n    });\n}\n\nfunction bookCards(data){\n    if(data){\n        bookSection.innerHTML = \"\";\n        Object.keys(data).forEach((k, i) => {\n            const cards = new _book_card__WEBPACK_IMPORTED_MODULE_3__.bookCard(data[k]);\n            bookSection.appendChild(cards.render());\n        });\n    }\n}\n\ngetBooks();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2QztBQUNpQjs7QUFFUjtBQUNmOztBQUV2QztBQUNBLDBCQUEwQixtRUFBaUI7QUFDM0Msb0JBQW9CLDJEQUFhOztBQUVqQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDhEQUFXO0FBQzFCLG9CQUFvQixzREFBRzs7QUFFdkI7QUFDQSxJQUFJLDBEQUFPO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnREFBUTtBQUN0QztBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvX3NlbWFuYV8xMC8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmLCBvblZhbHVlIH0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnO1xuXG5pbXBvcnQgeyBnZXRGaXJlYmFzZUNvbmZpZyB9IGZyb20gJy4vZmlyZWJhc2UtY29uZmlnJztcbmltcG9ydCB7IGJvb2tDYXJkIH0gZnJvbSAnLi9ib29rLWNhcmQnO1xuXG4vLyBJbmljaWFsaXphciBmaXJlYmFzZVxuY29uc3QgZmlyZWJhc2VBcHBDb25maWcgPSBnZXRGaXJlYmFzZUNvbmZpZygpO1xuY29uc3QgZmlyZWJhc2VBcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQXBwQ29uZmlnKTtcblxuLy9QYWdlIGVsZW1lbnRzXG5jb25zdCBib29rU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9va1NlY3Rpb25cIik7XG5cbmZ1bmN0aW9uIGdldEJvb2tzKCl7XG4gICAgLy9HZXQgZGF0YWJhc2VcbiAgICBjb25zdCBkYiA9IGdldERhdGFiYXNlKCk7XG4gICAgY29uc3QgYm9va1JlZiA9IHJlZihkYiwgJ2Jvb2tzJyk7XG5cbiAgICAvL0dldCB1cGRhdGVzIGZyb20gZGF0YWJhc2UgaW5mb1xuICAgIG9uVmFsdWUoYm9va1JlZiwgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgICAgYm9va0NhcmRzKGRhdGEpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBib29rQ2FyZHMoZGF0YSl7XG4gICAgaWYoZGF0YSl7XG4gICAgICAgIGJvb2tTZWN0aW9uLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGssIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRzID0gbmV3IGJvb2tDYXJkKGRhdGFba10pO1xuICAgICAgICAgICAgYm9va1NlY3Rpb24uYXBwZW5kQ2hpbGQoY2FyZHMucmVuZGVyKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmdldEJvb2tzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;