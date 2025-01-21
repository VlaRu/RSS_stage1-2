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

/***/ "./nonograms/src/fillCells.js":
/*!************************************!*\
  !*** ./nonograms/src/fillCells.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleRowFieldClick: () => (/* binding */ handleRowFieldClick),\n/* harmony export */   toggleCrossCell: () => (/* binding */ toggleCrossCell)\n/* harmony export */ });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./nonograms/src/script.js\");\n\nfunction toggleFillCell(cell) {\n  if (cell.classList.contains('fill-cell')) {\n    cell.classList.remove('fill-cell');\n    cell.innerText = '';\n  } else {\n    cell.classList.add('fill-cell');\n  }\n}\nfunction toggleCrossCell(cell) {\n  if (cell.innerText === '') {\n    cell.innerText = 'X';\n    cell.classList.remove('fill-cell');\n  } else {\n    cell.innerText = '';\n  }\n}\nfunction getHintUser() {\n  var rowFieldElements = document.getElementsByClassName('row-field');\n  var hintUser = Array.from(rowFieldElements).map(function (cell) {\n    return cell.classList.contains('fill-cell') ? 1 : 0;\n  });\n  return hintUser;\n}\nfunction compareResults(hintUser) {\n  return hintUser.map(function (value, index) {\n    return value === _script__WEBPACK_IMPORTED_MODULE_0__.answerGame[index];\n  });\n}\nfunction areAllResultsTrue(results) {\n  return results.every(function (value) {\n    return value === true;\n  });\n}\nfunction displayGreat(isMatch) {\n  var modalContainer = document.querySelector('.modal-container');\n  if (isMatch) {\n    modalContainer.style.display = 'flex';\n  }\n}\nfunction checkUserInputAndDisplayResult() {\n  var hintUser = getHintUser();\n  var results = compareResults(hintUser);\n  var isMatch = areAllResultsTrue(results);\n  setTimeout(function () {\n    displayGreat(isMatch);\n  }, 500);\n}\nfunction handleRowFieldClick(event) {\n  if (event.target.classList.contains('row-field')) {\n    toggleFillCell(event.target);\n    checkUserInputAndDisplayResult();\n  }\n}\n\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/src/fillCells.js?");

/***/ }),

/***/ "./nonograms/src/fillSolutionField.js":
/*!********************************************!*\
  !*** ./nonograms/src/fillSolutionField.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillSolution: () => (/* binding */ fillSolution)\n/* harmony export */ });\nfunction fillSolution(answ) {\n  var fieldEl = document.querySelectorAll('.row-field');\n  if (fieldEl.length === answ.length) {\n    fieldEl.forEach(function (el, i) {\n      if (answ[i] === 1) {\n        el.classList.add('fill-cell');\n      }\n    });\n  } else {\n    console.error('Field and answer array lengths do not match.');\n  }\n  console.log('fill');\n}\n\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/src/fillSolutionField.js?");

/***/ }),

/***/ "./nonograms/src/modalWindow.js":
/*!**************************************!*\
  !*** ./nonograms/src/modalWindow.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createModal: () => (/* binding */ createModal)\n/* harmony export */ });\nfunction createModal(parent) {\n  var modalContainer = document.createElement('div');\n  modalContainer.className = 'modal-container';\n  parent.appendChild(modalContainer);\n  var modalWindow = document.createElement('div');\n  modalWindow.className = 'modal-window';\n  modalContainer.appendChild(modalWindow);\n  var closeModalButton = document.createElement('p');\n  closeModalButton.innerText = '+';\n  closeModalButton.className = 'close-modal';\n  modalWindow.appendChild(closeModalButton);\n  var modalWindowText = document.createElement(\"h2\");\n  modalWindowText.classList.add(\"modal-window__message\");\n  modalWindowText.innerText = 'Congratulations!!!!';\n  var winGameTime = document.createElement(\"h3\");\n  winGameTime.className = 'win-game-time';\n  modalWindow.appendChild(modalWindowText);\n  modalWindow.appendChild(winGameTime);\n  var buttonNextGame = document.createElement(\"button\");\n  buttonNextGame.classList.add('button', 'button_next-game');\n  buttonNextGame.textContent = \"next game\";\n  modalWindow.appendChild(buttonNextGame);\n}\n\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/src/modalWindow.js?");

/***/ }),

/***/ "./nonograms/src/nonogramData.js":
/*!***************************************!*\
  !*** ./nonograms/src/nonogramData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar nonogramData = [{\n  title: 'window',\n  gridSize: [5, 5],\n  clues: {\n    rows: [[5], [1, 1, 1], [5], [1, 1, 1], [5]],\n    columns: [[5], [1, 1, 1], [5], [1, 1, 1], [5]]\n  },\n  answer: [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1]\n}, {\n  title: \"lamb\",\n  gridSize: [5, 5],\n  clues: {\n    rows: [[2, 2], [1, 1], [1, 1], [1, 1], [2, 2]],\n    columns: [[5], [1, 1], [1, 1], [1, 1, 1], [1, 1]]\n  },\n  answer: [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1]\n}, {\n  title: 'stud',\n  gridSize: [5, 5],\n  clues: {\n    rows: [[1, 1], [1], [], [1], [1, 1]],\n    columns: [[1, 1], [], [1, 1], [], [1, 1]]\n  },\n  answer: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1]\n}, {\n  title: 'letter-H',\n  gridSize: [5, 5],\n  clues: {\n    rows: [[5], [1], [1], [1], [5]],\n    columns: [[1, 1], [1, 1], [5], [1, 1], [1, 1]]\n  },\n  answer: [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1]\n}, {\n  title: 'letter-G',\n  gridSize: [5, 5],\n  clues: {\n    rows: [[3], [1, 1], [1, 1, 1], [1, 1, 1], [2]],\n    columns: [[3], [1], [1, 3], [1, 1], [3]]\n  },\n  answer: [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0]\n}, {\n  title: 'mouse',\n  gridSize: [10, 10],\n  clues: {\n    rows: [[3], [2, 1], [1, 1, 5], [1, 8], [2, 6], [3, 4], [2, 6], [1, 8], [1, 1, 5], [2, 3]],\n    columns: [[2, 2], [1, 1, 1, 1], [1, 5, 1], [2, 1, 2], [5], [3, 3], [1, 8], [1, 8], [1, 8], [8]]\n  },\n  answer: [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]\n}, {\n  title: 'cup',\n  gridSize: [10, 10],\n  clues: {\n    rows: [[1], [5, 1], [2, 7], [1, 4], [2, 7], [7], [2, 7], [2, 5, 1], [1, 1, 1], [2, 1]],\n    columns: [[1, 1, 2], [1, 1, 2], [0], [7], [2, 6], [2, 4, 1], [8], [7], [1, 5, 1], [8]]\n  },\n  answer: [0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]\n}, {\n  title: 'leaf',\n  gridSize: [10, 10],\n  clues: {\n    rows: [[1], [4, 2], [1, 2], [6, 1], [1, 2, 1], [5, 1, 1], [1, 2, 1, 1], [3, 1, 2], [1, 5], [2]],\n    columns: [[6], [1, 1, 1, 1], [2, 1, 2], [1, 1, 2, 1], [1, 1, 4], [1, 2, 1], [8], [1, 1], [1, 4], [2]]\n  },\n  answer: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]\n}, {\n  title: 'tv',\n  gridSize: [10, 10],\n  clues: {\n    rows: [[7], [1, 1, 4], [1, 7], [3, 2], [1, 1], [1, 1], [2, 1], [1, 1, 1], [2, 3], [7]],\n    columns: [[1, 1], [1, 1], [10], [1, 2, 2], [3, 1], [1, 1, 1], [3, 1], [4, 2], [10], [1, 1]]\n  },\n  answer: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0]\n}, {\n  title: 'ballon',\n  gridSize: [10, 10],\n  clues: {\n    rows: [[10], [10], [1, 3], [1, 1], [2], [3], [2, 3], [1, 4], [10], [10]],\n    columns: [[3, 3], [2, 1, 2], [2, 1, 2], [2, 2], [2, 2], [2, 2], [3, 3], [4, 5], [3, 6], [2, 7]]\n  },\n  answer: [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1]\n}, {\n  title: 'dear',\n  gridSize: [15, 15],\n  clues: {\n    rows: [[2], [3, 3], [2, 2, 2], [4, 6], [5, 7], [2, 7], [3, 1, 4], [7], [2, 4], [2, 6, 2], [12], [15], [4, 10], [1, 9], [4, 8]],\n    columns: [[2, 2, 2, 1], [2, 2, 1, 1, 2, 1], [4, 1, 1, 2, 1], [5, 5], [2, 5], [7], [1, 1, 5], [11], [12], [13], [8, 5], [1, 3, 5], [5, 5], [3, 6], [6]]\n  },\n  answer: [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]\n}, {\n  title: 'duck',\n  gridSize: [15, 15],\n  clues: {\n    rows: [[3], [4], [5], [4], [5], [6], [3, 2, 1], [2, 2, 5], [4, 2, 6], [8, 2, 3], [8, 2, 1, 1], [2, 6, 2, 1], [4, 6], [2, 4], [1]],\n    columns: [[3], [5], [4, 3], [7], [5], [3], [5], [1, 8], [3, 3, 3], [7, 3, 2], [5, 4, 2], [8, 2], [10], [2, 3], [6]]\n  },\n  answer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]\n}, {\n  title: 'house',\n  gridSize: [15, 15],\n  clues: {\n    rows: [[1, 1], [8], [3, 1], [4, 2, 1], [4, 2, 1], [4, 2, 1], [4, 1], [1, 2, 4], [2, 1, 4], [3, 2, 1], [4, 1, 2, 1], [1, 1, 2, 2, 1], [1, 1, 1, 1], [1, 8], [1, 1]],\n    columns: [[1], [1], [1], [2], [2], [9], [5, 1, 1, 1], [7, 1, 1, 1], [15], [1, 1], [1, 3, 2, 1], [1, 3, 2, 2, 1], [1, 2, 1], [1, 2, 1], [15]]\n  },\n  answer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n}, {\n  title: 'flower',\n  gridSize: [15, 15],\n  clues: {\n    rows: [[15], [1, 1, 11], [1, 10], [2, 8, 2], [1, 5, 1], [1, 1, 3], [4], [7], [6, 2], [5, 1, 1, 1], [2, 1, 5, 2, 1], [1, 1, 5, 2], [3, 11], [1, 1, 9], [2, 1, 10]],\n    columns: [[2, 1, 10], [1, 1, 5, 1, 1], [3, 6, 1], [1, 1, 6, 2], [2, 1, 1, 3, 1], [6, 2, 1, 1, 1], [6, 1, 6], [5, 5], [5, 1, 5], [5, 1, 5], [4, 1, 4], [3, 1, 3], [3, 1, 3], [4, 1, 4], [5, 5]]\n  },\n  answer: [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]\n}, {\n  title: 'costle',\n  gridSize: [15, 15],\n  clues: {\n    rows: [[12], [2, 1], [1, 2, 1, 1], [2, 4, 1], [5, 1, 1], [1, 1], [8, 4], [2, 1, 5], [1, 1, 4], [1, 1], [5, 1, 1], [2, 4, 1], [1, 2, 1, 1], [2, 1], [12]],\n    columns: [[1], [2], [3], [2, 2, 1, 2, 2], [5, 1, 5], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 7, 1, 1], [1, 1], [1, 1, 1, 1], [1, 3, 1, 3, 1], [1, 1, 3, 1, 1], [1, 1, 3, 1, 1], [1, 3, 1], [15]]\n  },\n  answer: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nonogramData);\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/src/nonogramData.js?");

/***/ }),

/***/ "./nonograms/src/randomIndex.js":
/*!**************************************!*\
  !*** ./nonograms/src/randomIndex.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRandomIndex: () => (/* binding */ getRandomIndex)\n/* harmony export */ });\n/* harmony import */ var _nonogramData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nonogramData */ \"./nonograms/src/nonogramData.js\");\n\nfunction getRandomIndex() {\n  return Math.floor(Math.random() * _nonogramData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length);\n}\n\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/src/randomIndex.js?");

/***/ }),

/***/ "./nonograms/src/renderDataGame.js":
/*!*****************************************!*\
  !*** ./nonograms/src/renderDataGame.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderColClues: () => (/* binding */ renderColClues),\n/* harmony export */   renderDropElements: () => (/* binding */ renderDropElements),\n/* harmony export */   renderGameField: () => (/* binding */ renderGameField),\n/* harmony export */   renderRowClues: () => (/* binding */ renderRowClues)\n/* harmony export */ });\n/* harmony import */ var _nonogramData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nonogramData */ \"./nonograms/src/nonogramData.js\");\n\nfunction renderDropElements(perentNode) {\n  for (var i = 0; i < _nonogramData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n    var dataNon = _nonogramData__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i];\n    var dropElement = document.createElement('li');\n    dropElement.className = 'drop-element';\n    dropElement.setAttribute('data-index', [i]);\n    perentNode.appendChild(dropElement);\n    dropElement.textContent = \"\".concat(dataNon.title, \" \").concat(dataNon.gridSize[0], \" x \").concat(dataNon.gridSize[1]);\n  }\n}\nfunction renderRowClues(perentNode, indx) {\n  var cluesDataCol = _nonogramData__WEBPACK_IMPORTED_MODULE_0__[\"default\"][indx].clues.columns;\n  for (var i = 0; i < cluesDataCol.length; i += 1) {\n    var cluesRowsElementContainer = document.createElement('div');\n    perentNode.appendChild(cluesRowsElementContainer);\n    cluesRowsElementContainer.className = 'clues-rows__element-container';\n    if ([i] % 5 === 0 && i !== 0) {\n      cluesRowsElementContainer.style.borderTop = '3px solid #000';\n    }\n    for (var j = 0; j < cluesDataCol[i].length; j += 1) {\n      var clueRowsElement = document.createElement('div');\n      cluesRowsElementContainer.appendChild(clueRowsElement);\n      clueRowsElement.innerText = cluesDataCol[i][j];\n      clueRowsElement.className = 'clues-rows__element';\n    }\n  }\n}\nfunction renderColClues(perentNode, indx) {\n  var cluesDataRow = _nonogramData__WEBPACK_IMPORTED_MODULE_0__[\"default\"][indx].clues.rows;\n  for (var i = 0; i < cluesDataRow.length; i += 1) {\n    var cluesColumnElementContainer = document.createElement('div');\n    perentNode.appendChild(cluesColumnElementContainer);\n    cluesColumnElementContainer.className = 'clues-columns__element-container';\n    if ([i] % 5 === 0 && i !== 0) {\n      cluesColumnElementContainer.style.borderLeft = '3px solid #000';\n    }\n    for (var j = 0; j < cluesDataRow[i].length; j += 1) {\n      var clueColumnElement = document.createElement('div');\n      cluesColumnElementContainer.appendChild(clueColumnElement);\n      clueColumnElement.innerText = cluesDataRow[i][j];\n      clueColumnElement.className = 'clues-column__element';\n    }\n  }\n}\nfunction renderGameField(perentNode, indx) {\n  var gameFieldSize = _nonogramData__WEBPACK_IMPORTED_MODULE_0__[\"default\"][indx].gridSize;\n  for (var i = 0; i < gameFieldSize[0]; i += 1) {\n    var columnField = document.createElement('div');\n    columnField.className = 'column-field';\n    perentNode.appendChild(columnField);\n    if ([i] % 5 === 0 && i !== 0) {\n      columnField.style.borderTop = '3px solid #000';\n    }\n    for (var j = 0; j < gameFieldSize[1]; j += 1) {\n      var rowField = document.createElement('div');\n      rowField.className = 'row-field';\n      columnField.appendChild(rowField);\n      if ([j] % 5 === 0 && j !== 0) {\n        rowField.style.borderLeft = '3px solid #000';\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/src/renderDataGame.js?");

/***/ }),

/***/ "./nonograms/src/restoreGame.js":
/*!**************************************!*\
  !*** ./nonograms/src/restoreGame.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearContainer: () => (/* binding */ clearContainer),\n/* harmony export */   clearField: () => (/* binding */ clearField)\n/* harmony export */ });\nfunction clearField() {\n  document.querySelectorAll('.row-field').forEach(function (el) {\n    el.innerText = '';\n    el.classList.remove('fill-cell');\n  });\n}\nfunction clearContainer(container) {\n  while (container.firstChild) {\n    container.removeChild(container.firstChild);\n  }\n}\n\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/src/restoreGame.js?");

/***/ }),

/***/ "./nonograms/src/script.js":
/*!*********************************!*\
  !*** ./nonograms/src/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   answerGame: () => (/* binding */ answerGame)\n/* harmony export */ });\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./nonograms/sass/style.scss\");\n/* harmony import */ var _randomIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randomIndex */ \"./nonograms/src/randomIndex.js\");\n/* harmony import */ var _nonogramData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonogramData */ \"./nonograms/src/nonogramData.js\");\n/* harmony import */ var _fillCells__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fillCells */ \"./nonograms/src/fillCells.js\");\n/* harmony import */ var _showDropList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showDropList */ \"./nonograms/src/showDropList.js\");\n/* harmony import */ var _restoreGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restoreGame */ \"./nonograms/src/restoreGame.js\");\n/* harmony import */ var _fillSolutionField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fillSolutionField */ \"./nonograms/src/fillSolutionField.js\");\n/* harmony import */ var _switchTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./switchTheme */ \"./nonograms/src/switchTheme.js\");\n/* harmony import */ var _modalWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modalWindow */ \"./nonograms/src/modalWindow.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timer */ \"./nonograms/src/timer.js\");\n/* harmony import */ var _renderDataGame__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./renderDataGame */ \"./nonograms/src/renderDataGame.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar index = 0;\nvar titleGame = _nonogramData__WEBPACK_IMPORTED_MODULE_2__[\"default\"][index].title;\nvar answerGame = _nonogramData__WEBPACK_IMPORTED_MODULE_2__[\"default\"][index].answer;\nvar timerID = null;\nfunction createContainers() {\n  var mainContaner = document.createElement(\"div\");\n  mainContaner.className = \"main-container\";\n  var switchWrapperContainer = document.createElement(\"div\");\n  switchWrapperContainer.className = \"switch-wrapper-container\";\n  var labelForInput = document.createElement(\"label\");\n  labelForInput.className = \"switch-wrapper\";\n  var switchInput = document.createElement(\"input\");\n  switchInput.className = \"switch-input\";\n  switchInput.setAttribute(\"type\", \"checkbox\");\n  switchInput.setAttribute(\"id\", \"darkModeToggle\");\n  var switchSlider = document.createElement(\"span\");\n  switchSlider.classList.add(\"switch-slider\", \"switch-round\");\n  var gameToolsContainer = document.createElement(\"div\");\n  gameToolsContainer.className = \"container_game-tools\";\n  var heading = document.createElement(\"h1\");\n  heading.textContent = \"nonogram game\";\n  var nameGame = document.createElement(\"h2\");\n  nameGame.textContent = \"\".concat(titleGame);\n  var buttonContainer = document.createElement(\"div\");\n  buttonContainer.className = \"button-container\";\n  var randomGameButton = document.createElement(\"button\");\n  randomGameButton.innerText = \"random game\";\n  randomGameButton.classList.add(\"random-game_button\", \"button\");\n  var chooseButton = document.createElement(\"button\");\n  chooseButton.innerText = \"choose game\";\n  chooseButton.classList.add(\"choose-game_button\", \"button\");\n  var dropDawnContainer = document.createElement(\"div\");\n  dropDawnContainer.className = \"drop-down_container\";\n  var dropDownContent = document.createElement(\"ul\");\n  dropDownContent.className = \"drop-down_content\";\n  var restoreButton = document.createElement(\"button\");\n  var solutionButton = document.createElement(\"button\");\n  restoreButton.innerText = \"restore\";\n  restoreButton.classList.add(\"restore-game_button\", \"button\");\n  solutionButton.innerText = \"solution\";\n  solutionButton.classList.add(\"solution-game_button\", \"button\");\n  var burgerContainer = document.createElement(\"div\");\n  burgerContainer.className = \"burger-container\";\n  var burgerElement = document.createElement(\"div\");\n  var burgerElement2 = document.createElement(\"div\");\n  burgerElement.className = \"burger-element\";\n  burgerElement2.className = \"burger-element\";\n  var gameContainer = document.createElement(\"div\");\n  gameContainer.className = \"game-container\";\n  var cluesColumnContainer = document.createElement(\"div\");\n  cluesColumnContainer.className = \"clues-column_container\";\n  var gameFieldFixing = document.createElement(\"div\");\n  gameFieldFixing.className = \"game-field-fixing\";\n  var cluesRowsContainer = document.createElement(\"div\");\n  cluesRowsContainer.className = \"clues-rows_container\";\n  var gameFieldContainer = document.createElement(\"div\");\n  gameFieldContainer.className = \"game-field_container\";\n  (0,_renderDataGame__WEBPACK_IMPORTED_MODULE_10__.renderRowClues)(cluesRowsContainer, index);\n  (0,_renderDataGame__WEBPACK_IMPORTED_MODULE_10__.renderColClues)(cluesColumnContainer, index);\n  (0,_renderDataGame__WEBPACK_IMPORTED_MODULE_10__.renderGameField)(gameFieldContainer, index);\n  function startGameTimer() {\n    var counterEl = document.querySelector(\".counter\");\n    var seconds = 0;\n    timerID = setInterval(function () {\n      seconds += 1;\n      var minutes = Math.floor(seconds / 60);\n      var remainingSeconds = seconds % 60;\n      var display = \"\".concat(minutes, \":\").concat(remainingSeconds < 10 ? \"0\" : \"\").concat(remainingSeconds);\n      counterEl.innerText = display;\n    }, 1000);\n  }\n  function stopGameTimer() {\n    clearInterval(timerID);\n    var display = document.querySelector(\".counter\").innerText;\n    document.querySelector(\".win-game-time\").innerText = \"Great! You have solved the nonogram in \".concat(display, \" seconds!\");\n  }\n  function clearGameTimer() {\n    clearInterval(timerID);\n    document.querySelector(\".counter\").innerText = \"00:00\";\n  }\n  document.addEventListener(\"click\", function (event) {\n    if (event.target.classList.contains(\"drop-element\")) {\n      index = parseInt(event.target.dataset.index, 10);\n      renderGame(index);\n    } else if (event.target.classList.contains(\"random-game_button\")) {\n      index = (0,_randomIndex__WEBPACK_IMPORTED_MODULE_1__.getRandomIndex)();\n      renderGame(index);\n    } else if (event.target.classList.contains(\"restore-game_button\")) {\n      (0,_restoreGame__WEBPACK_IMPORTED_MODULE_5__.clearField)();\n    } else if (event.target.classList.contains(\"solution-game_button\")) {\n      answerGame = _nonogramData__WEBPACK_IMPORTED_MODULE_2__[\"default\"][index].answer;\n      (0,_fillSolutionField__WEBPACK_IMPORTED_MODULE_6__.fillSolution)(answerGame);\n    }\n  });\n  document.addEventListener(\"click\", function (event) {\n    if (event.target.classList.contains(\"row-field\")) {\n      if (!timerID) {\n        startGameTimer();\n      }\n    }\n  });\n  function renderGame(i) {\n    (0,_restoreGame__WEBPACK_IMPORTED_MODULE_5__.clearContainer)(cluesRowsContainer);\n    (0,_restoreGame__WEBPACK_IMPORTED_MODULE_5__.clearContainer)(cluesColumnContainer);\n    (0,_restoreGame__WEBPACK_IMPORTED_MODULE_5__.clearContainer)(gameFieldContainer);\n    (0,_renderDataGame__WEBPACK_IMPORTED_MODULE_10__.renderRowClues)(cluesRowsContainer, i);\n    (0,_renderDataGame__WEBPACK_IMPORTED_MODULE_10__.renderColClues)(cluesColumnContainer, i);\n    (0,_renderDataGame__WEBPACK_IMPORTED_MODULE_10__.renderGameField)(gameFieldContainer, i);\n    titleGame = _nonogramData__WEBPACK_IMPORTED_MODULE_2__[\"default\"][index].title;\n    nameGame.textContent = \"\".concat(titleGame);\n    answerGame = _nonogramData__WEBPACK_IMPORTED_MODULE_2__[\"default\"][index].answer;\n  }\n  function handleGameControlsClick(event) {\n    if (event.target.classList.contains(\"button_next-game\") || event.target.classList.contains(\"close-modal\") || event.target.classList.contains(\"modal-container\")) {\n      document.querySelector(\".modal-container\").style.display = \"none\";\n      event.stopPropagation();\n      if (index < _nonogramData__WEBPACK_IMPORTED_MODULE_2__[\"default\"].length - 1) {\n        index += 1;\n      } else {\n        index = 0;\n      }\n      stopGameTimer();\n      clearGameTimer();\n      startGameTimer();\n      renderGame(index);\n    }\n  }\n  document.addEventListener(\"click\", function (event) {\n    handleGameControlsClick(event);\n    var display = document.querySelector(\".counter\").innerText;\n    document.querySelector(\".win-game-time\").innerText = \"Great! You have solved the nonogram in \".concat(display, \" seconds!\");\n  });\n  (0,_modalWindow__WEBPACK_IMPORTED_MODULE_8__.createModal)(mainContaner);\n  gameFieldFixing.appendChild(cluesRowsContainer);\n  gameFieldFixing.appendChild(gameFieldContainer);\n  gameContainer.appendChild(cluesColumnContainer);\n  gameContainer.appendChild(gameFieldFixing);\n  burgerContainer.appendChild(burgerElement);\n  burgerContainer.appendChild(burgerElement2);\n  gameToolsContainer.appendChild(burgerContainer);\n  gameToolsContainer.appendChild(buttonContainer);\n  (0,_renderDataGame__WEBPACK_IMPORTED_MODULE_10__.renderDropElements)(dropDownContent);\n  buttonContainer.appendChild(dropDawnContainer);\n  dropDawnContainer.appendChild(chooseButton);\n  dropDawnContainer.appendChild(dropDownContent);\n  buttonContainer.appendChild(randomGameButton);\n  buttonContainer.appendChild(restoreButton);\n  buttonContainer.appendChild(solutionButton);\n  gameToolsContainer.appendChild(heading);\n  gameToolsContainer.appendChild(nameGame);\n  (0,_timer__WEBPACK_IMPORTED_MODULE_9__.createTimer)(gameToolsContainer);\n  labelForInput.appendChild(switchInput);\n  labelForInput.appendChild(switchSlider);\n  switchWrapperContainer.appendChild(labelForInput);\n  mainContaner.appendChild(switchWrapperContainer);\n  mainContaner.appendChild(gameToolsContainer);\n  mainContaner.appendChild(gameContainer);\n  document.body.appendChild(mainContaner);\n}\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  createContainers();\n  (0,_showDropList__WEBPACK_IMPORTED_MODULE_4__.showDropList)();\n  (0,_switchTheme__WEBPACK_IMPORTED_MODULE_7__.switchTheme)();\n  var btnContainer = document.querySelector(\".button-container\");\n  var burgerContainer = document.querySelector(\".burger-container\");\n  burgerContainer.addEventListener(\"click\", function () {\n    btnContainer.classList.toggle(\"hide\");\n  });\n  document.addEventListener(\"click\", _fillCells__WEBPACK_IMPORTED_MODULE_3__.handleRowFieldClick);\n  document.addEventListener(\"contextmenu\", function (event) {\n    event.preventDefault();\n    if (event.target.classList.contains(\"row-field\")) {\n      (0,_fillCells__WEBPACK_IMPORTED_MODULE_3__.toggleCrossCell)(event.target);\n    }\n  });\n});\n\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/src/script.js?");

/***/ }),

/***/ "./nonograms/src/showDropList.js":
/*!***************************************!*\
  !*** ./nonograms/src/showDropList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showDropList: () => (/* binding */ showDropList)\n/* harmony export */ });\nfunction showDropList() {\n  document.querySelector('.choose-game_button').addEventListener('click', function () {\n    document.querySelector('.drop-down_content').classList.toggle('show-drop-list');\n  });\n  document.addEventListener('click', function (event) {\n    if (!event.target.closest('.drop-down_container')) {\n      document.querySelector('.drop-down_content').classList.remove('show-drop-list');\n    }\n  });\n}\n\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/src/showDropList.js?");

/***/ }),

/***/ "./nonograms/src/switchTheme.js":
/*!**************************************!*\
  !*** ./nonograms/src/switchTheme.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   switchTheme: () => (/* binding */ switchTheme)\n/* harmony export */ });\nfunction switchTheme() {\n  var darkModeToggle = document.getElementById('darkModeToggle');\n  darkModeToggle.addEventListener('change', function () {\n    document.body.classList.toggle('dark-mode');\n    document.querySelector('.main-container').classList.toggle('dark-mode-bg');\n    document.querySelectorAll('.clues-columns__element-container').forEach(function (i) {\n      return i.classList.toggle('dark-clues');\n    });\n    document.querySelectorAll('.clues-rows__element-container').forEach(function (i) {\n      return i.classList.toggle('dark-clues');\n    });\n  });\n}\n;\n\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/src/switchTheme.js?");

/***/ }),

/***/ "./nonograms/src/timer.js":
/*!********************************!*\
  !*** ./nonograms/src/timer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTimer: () => (/* binding */ createTimer)\n/* harmony export */ });\nfunction createTimer(parent) {\n  var counter = document.createElement('span');\n  counter.className = 'counter';\n  counter.innerText = '00:00';\n  parent.appendChild(counter);\n}\n\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/src/timer.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./nonograms/sass/style.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./nonograms/sass/style.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg-japan-light.webp */ \"./nonograms/assets/bg-japan-light.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg-japan-dark.webp */ \"./nonograms/assets/bg-japan-dark.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*, *:before, *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:focus, :active {\n  outline: none;\n}\n\na:focus, a:active {\n  outline: none;\n}\n\nnav, footer, header, asider {\n  display: block;\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  font-size: 100%;\n  line-height: -1;\n  font-size: 14px;\n  -ms-text-size-adjust: -100%;\n  -moz-text-size-adjust: -100%;\n  -webkit-text-size-adjust: -100%;\n}\n\ninput, button, textarea {\n  font-family: inherit;\n}\n\ninput ::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na, a:visited {\n  text-decoration: none;\n  color: inherit;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n\nbody {\n  font-size: 22px;\n  box-sizing: border-box;\n  background-color: rgba(183, 238, 180, 0.6745098039);\n  transition: background-color 0.5s;\n}\n\nh1 {\n  font-size: 35px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #fff;\n}\n\nh2 {\n  font-size: 35px;\n}\n\n.main-container {\n  width: 100%;\n  height: 100%;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main-container.dark-mode-bg {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n.container_game-tools {\n  width: 80%;\n  height: 25%;\n  background-color: #f7bfe7;\n  text-align: center;\n  margin-bottom: 20px;\n  padding: 10px;\n  position: relative;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 780px) {\n  .container_game-tools {\n    height: 30%;\n  }\n}\n@media (max-width: 580px) {\n  .container_game-tools {\n    height: 40%;\n  }\n}\n\n.button-container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 780px) {\n  .button-container {\n    width: 80vw;\n    height: 150%;\n    position: absolute;\n    top: 20px;\n    z-index: 2;\n    background-color: #b2e5e1;\n    display: none;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n}\n\n.hide {\n  display: flex;\n}\n\n.drop-down_container {\n  width: 200px;\n  position: relative;\n  display: inline-block;\n}\n\n.drop-down_content {\n  width: 100%;\n  height: 300px;\n  position: absolute;\n  display: none;\n  text-align: left;\n  background-color: #f1f1f1;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  transition: all 0.7s;\n}\n\n.button {\n  background-color: transparent;\n  width: 200px;\n  height: 50px;\n  font-size: 22px;\n  font-weight: 600;\n  text-transform: uppercase;\n  transition: all 0.7s;\n  cursor: pointer;\n}\n.button:hover {\n  background-color: #f1f1f1;\n  color: #7b7474;\n}\n\n.drop-element {\n  width: 100%;\n  height: 40px;\n  padding-left: 20px;\n  color: #534545;\n  cursor: pointer;\n}\n.drop-element:hover {\n  background-color: #726e6e;\n}\n\n.show-drop-list {\n  display: block;\n}\n\n.counter {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n\n.game-container {\n  width: 30%;\n  height: 65%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n  background-color: #fff;\n  border: 1px solid #000;\n  margin-bottom: 40px;\n}\n@media (max-width: 1440px) {\n  .game-container {\n    width: 35%;\n    height: 60%;\n  }\n}\n@media (max-width: 1100px) {\n  .game-container {\n    width: 50%;\n    height: 60%;\n  }\n}\n@media (max-width: 780px) {\n  .game-container {\n    width: 80%;\n  }\n}\n@media (max-width: 680px) {\n  .game-container {\n    width: 85%;\n    height: 55%;\n  }\n}\n\n.clues-column_container {\n  background-color: rgb(172, 172, 172);\n  width: 80%;\n  height: 30%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.clues-rows_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n  width: 20%;\n  height: 100%;\n}\n\n.game-field_container {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n  border: 2px solid #000;\n}\n\n.game-field-fixing {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.clues-rows__element-container {\n  flex: 1;\n  background-color: rgb(214, 162, 162);\n  border: 1px solid #000;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding-right: 5px;\n}\n\n.clues-rows__element {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.clues-columns__element-container {\n  background-color: rgb(214, 162, 162);\n  border: 1px solid #000;\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding-bottom: 5px;\n}\n\n.clues-column__element {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  width: 100%;\n  height: 100%;\n}\n\n.column-field {\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n\n.row-field {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #000;\n  flex: 1;\n  font-size: 16px;\n  background-color: #fff;\n  cursor: pointer;\n}\n\n.fill-cell {\n  background-color: #000;\n  border: 1px solid #2c2b2b;\n}\n\n.switch-wrapper-container {\n  width: 80%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 10px 0 20px;\n}\n\n.switch-wrapper {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch-wrapper .switch-input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #c8bbbb;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n\n.switch-slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  border-radius: 50%;\n  border: 2px solid #777070;\n}\n\n.switch-wrapper .switch-input:checked + .switch-slider {\n  background-color: #010001;\n}\n\n.switch-wrapper .switch-input:checked + .switch-slider:before {\n  transform: translateX(26px);\n}\n\n.switch-slider.switch-round {\n  border-radius: 34px;\n}\n\n.dark-mode {\n  background-color: #16322d;\n}\n\n.dark-mode-bg {\n  background-color: #27927e;\n}\n\n.dark-clues {\n  background-color: #045457;\n  color: #fff;\n}\n\n.modal-container {\n  width: 100%;\n  height: 100%;\n  display: none;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  background-color: hsla(267, 16%, 11%, 0.46);\n}\n\n.modal-window {\n  position: relative;\n  width: 80%;\n  height: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  border-radius: 50px;\n  background-color: rgb(243, 184, 238);\n  padding: 30px;\n}\n\n.close-modal {\n  font-size: 60px;\n  font-weight: 800;\n  transform: rotate(45deg);\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n.close-modal:hover {\n  color: #7b7474;\n}\n\n@media (max-width: 780px) {\n  .burger-container {\n    width: 100px;\n    height: 20px;\n    z-index: 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .burger-element {\n    width: 100%;\n    height: 40%;\n    border-radius: 20px;\n    background-color: #057074;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./nonograms/sass/style.scss":
/*!***********************************!*\
  !*** ./nonograms/sass/style.scss ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./nonograms/sass/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n  var p;\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (!a[p]) {\n      return false;\n    }\n  }\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./nonograms/sass/style.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./nonograms/sass/style.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/sass/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./nonograms/assets/bg-japan-dark.webp":
/*!*********************************************!*\
  !*** ./nonograms/assets/bg-japan-dark.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e7e4ac0cd1effda8f36.webp\";\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/assets/bg-japan-dark.webp?");

/***/ }),

/***/ "./nonograms/assets/bg-japan-light.webp":
/*!**********************************************!*\
  !*** ./nonograms/assets/bg-japan-light.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"33b9a4538ba07776ee2a.webp\";\n\n//# sourceURL=webpack://vlaru-jsfe2023q4/./nonograms/assets/bg-japan-light.webp?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f4e16f740899b3465c78")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "vlaru-jsfe2023q4:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatevlaru_jsfe2023q4"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./nonograms/src/script.js");
/******/ 	
/******/ })()
;