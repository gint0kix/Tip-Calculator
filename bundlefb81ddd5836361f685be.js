/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/InputDataListCreator.js":
/*!************************************************!*\
  !*** ./src/components/InputDataListCreator.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inputDataListCreator)
/* harmony export */ });
/* harmony import */ var _functions_optionFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/optionFactory */ "./src/functions/optionFactory.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function inputDataListCreator(listOfNames, dataListId) {
  var newDataListElement = document.createElement('datalist');
  newDataListElement.id = dataListId;
  var _iterator = _createForOfIteratorHelper(listOfNames),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      var personName = name.split(' ');
      var newOption = (0,_functions_optionFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(personName[0], " ").concat(personName[1][0]), name);
      newDataListElement.appendChild(newOption);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return newDataListElement;
}

/***/ }),

/***/ "./src/components/PersonComponent.js":
/*!*******************************************!*\
  !*** ./src/components/PersonComponent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPersonComponent)
/* harmony export */ });
/* harmony import */ var _functions_deletePerson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/deletePerson */ "./src/functions/deletePerson.js");

function createPersonComponent(personObject, mapRemovingFrom) {
  var personContainer = document.createElement('div');
  var nameDiv = document.createElement('div');
  var hoursDiv = document.createElement('div');
  var tipsDiv = document.createElement('div');
  var deleteButton = document.createElement('button');
  nameDiv.classList.add('personName');
  hoursDiv.classList.add('personHours');
  tipsDiv.classList.add('personTips');
  personContainer.classList.add('personContainer');
  deleteButton.classList.add('deleteButton');
  nameDiv.textContent = personObject.name;
  hoursDiv.textContent = personObject.hoursWorked;
  tipsDiv.textContent = personObject.netTips;
  deleteButton.textContent = 'X';
  deleteButton.onclick = function (e) {
    (0,_functions_deletePerson__WEBPACK_IMPORTED_MODULE_0__["default"])(e, mapRemovingFrom);
  };
  personContainer.appendChild(nameDiv);
  personContainer.appendChild(hoursDiv);
  personContainer.appendChild(tipsDiv);
  personContainer.appendChild(deleteButton);
  personContainer.dataset.personID = personObject.personID;
  return personContainer;
}

/***/ }),

/***/ "./src/functions/PersonObjectFactory.js":
/*!**********************************************!*\
  !*** ./src/functions/PersonObjectFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPersonObject)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

function createPersonObject(name, hours) {
  return {
    'name': name,
    'hoursWorked': hours,
    'grossTips': 'N/A',
    'netTips': 'N/A',
    'personID': (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
  };
}

/***/ }),

/***/ "./src/functions/addPerson.js":
/*!************************************!*\
  !*** ./src/functions/addPerson.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addPerson)
/* harmony export */ });
/* harmony import */ var _PersonObjectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonObjectFactory */ "./src/functions/PersonObjectFactory.js");
/* harmony import */ var _components_PersonComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PersonComponent */ "./src/components/PersonComponent.js");


function addPerson(e, mapAppendingTo) {
  var newPersonNameInput = document.getElementById('nameInput');
  var newPersonHoursInput = document.getElementById('hourInput');
  var containerDisplay = document.getElementById('container');
  var newPersonNameValue = newPersonNameInput.value;
  var newPersonHourValue = newPersonHoursInput.value;
  if (newPersonNameValue === "" || newPersonHourValue === "") {
    alert('Please Enter Both Fields before adding');
    return;
  }
  if (newPersonHourValue < 0) {
    alert('Please Enter an hour value greator than 0');
    return;
  }
  var newPersonObject = (0,_PersonObjectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(newPersonNameValue, newPersonHourValue);
  mapAppendingTo.set(newPersonObject.personID, newPersonObject);
  var newPersonComponent = (0,_components_PersonComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(newPersonObject, mapAppendingTo);
  containerDisplay.appendChild(newPersonComponent);
  newPersonNameInput.value = '';
  newPersonHoursInput.value = '';
}

/***/ }),

/***/ "./src/functions/calculateTips.js":
/*!****************************************!*\
  !*** ./src/functions/calculateTips.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calculateTips)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function calculateTips(mapOfPeople) {
  var personMap = mapOfPeople;
  var TOTAL_TIPS = document.getElementById('totalTipsInput').value;
  var TOTAL_EXPECTED_HOURS = Number(document.getElementById('totalHoursInput').value);
  var TOTAL_ACTUAL_HOURS = 0;
  var _iterator = _createForOfIteratorHelper(personMap.values()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var person = _step.value;
      TOTAL_ACTUAL_HOURS += Number(person.hoursWorked);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (TOTAL_ACTUAL_HOURS !== TOTAL_EXPECTED_HOURS) {
    return alert('Please Check Inputed Hours');
  }
  if (TOTAL_TIPS === "") {
    return alert('Please Enter Amount of Tips');
  }
  function truncateTwoSpaces(num) {
    return Number(num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
  }
  //Truncates anything past the 2nd decimal space
  var spaces = 2;
  var RATE_PER_HOUR = truncateTwoSpaces(TOTAL_TIPS / TOTAL_EXPECTED_HOURS);
  var _iterator2 = _createForOfIteratorHelper(personMap.values()),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _person = _step2.value;
      var grossTips = truncateTwoSpaces(Number(_person.hoursWorked) * RATE_PER_HOUR);
      _person.grossTips = grossTips;
    }

    //Determine NetTips
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var personArr = _toConsumableArray(personMap);
  var TotalNetTips = 0;
  personArr.map(function (person) {
    person[1].netTips = Math.floor(person[1].grossTips);
    TotalNetTips += person[1].netTips;
  });

  //Sorting from highest grosstips -> lowest grosstips
  personArr.sort(function (a, b) {
    var personAGrossDecimal = a[1].grossTips - a[1].netTips;
    var personBGrossDecimal = b[1].grossTips - b[1].netTips;
    if (personAGrossDecimal === personBGrossDecimal) {
      return b[1].netTips - a[1].netTips;
    }
    return personBGrossDecimal - personAGrossDecimal;
  });
  var remainingTips = TOTAL_TIPS - TotalNetTips;
  var personArrLength = personArr.length - 1;
  var personIndex = 0;
  while (remainingTips != 0) {
    personArr[personIndex % personArrLength][1].netTips += 1;
    personIndex++;
    remainingTips--;
  }
  mapOfPeople = new Map(personArr);
}

/***/ }),

/***/ "./src/functions/deletePerson.js":
/*!***************************************!*\
  !*** ./src/functions/deletePerson.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deletePerson)
/* harmony export */ });
function deletePerson(e, mapRemovingFrom) {
  var personRow = e.target.parentElement;
  var userID = personRow.dataset.personID;
  mapRemovingFrom["delete"](userID);
  personRow.remove();
}

/***/ }),

/***/ "./src/functions/optionFactory.js":
/*!****************************************!*\
  !*** ./src/functions/optionFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ optionFactory)
/* harmony export */ });
function optionFactory(value, text) {
  var newOption = document.createElement('option');
  newOption.value = value;
  newOption.textContent = text;
  return newOption;
}

/***/ }),

/***/ "./src/functions/updateDisplay.js":
/*!****************************************!*\
  !*** ./src/functions/updateDisplay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateDisplay)
/* harmony export */ });
function updateDisplay(mapOfPeople) {
  var container = document.getElementById('container');
  mapOfPeople.forEach(function (value, key) {
    var currentUserId = key;
    var currentUserTips = value.netTips;
    console.log("Current User=".concat(currentUserId, " Tips=").concat(currentUserTips));
    var currentUserTipDiv = document.querySelector("[data-person-i-d='".concat(currentUserId, "'] .personTips"));
    currentUserTipDiv.textContent = "$".concat(currentUserTips);
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,body{\n    max-width: 100%;\n    overflow-x: hidden;\n}\nhtml{\n    height:100%\n}\ndiv{\n    min-height: 100%;\n    min-width: 100%;\n    margin:0;\n}\nbody{\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    background-color: rgb(242 240 235);\n    align-items: center;\n    font-size: 1rem;\n    margin:0;\n}\n#inputForm{\n    align-self: flex-end;\n    display: flex;\n    width:clamp(325px,95%,492px);\n    flex-direction: column;\n    justify-content: space-around;\n    bottom:1%;\n    border:1px solid black;\n    border-radius: .5rem;\n    background-color: rgb(213 233 226);\n    font-weight: bold;\n    overflow: auto;\n    overflow-x:hidden;\n    margin:auto auto 0 auto;\n    padding-bottom: .5rem;\n    align-items: center;\n    font-size: 1rem;\n}\n#inputForm input{\n    border-radius: .5rem;\n    font-size:1.1rem;\n}\n#inputForm button{\n    background-color: rgb(0 117 74);\n    color:white;\n    border-radius: .5rem;\n    font-size:1.3rem;\n}\n#newPersonForm{\n    flex:1;\n    width:93%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    border-bottom:1px grey solid;\n    margin-bottom: .5rem;\n    padding:.3rem;\n    align-items: center;\n    column-gap: 3%;\n}\n#nameInput{\n    width:clamp(5.5rem, 5.5rem, 11vw);\n}\ninput[type=\"number\"]{\n    width:13vw;\n} \n#addPerson-btn{\n    width:20%\n}\n#calculationForm{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin-bottom: .5rem;\n    border-bottom: 1px solid grey;\n    padding:.3rem;\n    align-items: center;\n    column-gap: 6%;\n}\n.personContainer{\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    grid-column:1/5;\n    border-bottom: 1px solid grey;\n    align-content: center;\n    box-sizing: border-box;\n    padding:.2rem 0;\n    justify-items: center;\n}\n#container{\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    grid-template-rows: 2rem;\n    grid-auto-flow: column;\n    row-gap: .3rem;\n    font-size:1rem;\n    padding:.2rem;\n    padding-top: 0;\n}\n#container-header{\n    grid-column: 1/5;\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    text-decoration: underline;\n    background:rgb(0 98 65);\n    color:rgb(242 240 235);\n    border:1px solid grey;\n}\n#container-header div{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\nimg{\n    max-width: 100%;\n    max-height: 100%;\n}\n.deleteButton{\n    border-radius:1rem;\n    background-color: rgb(248, 171, 148);\n    color:black;\n    width:75%;\n}\n\n#menu:active{\n        transform: scale(0.9);\n        background-color: rgb(0, 129, 81);\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI;AACJ;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,QAAQ;AACZ;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,kCAAkC;IAClC,mBAAmB;IACnB,eAAe;IACf,QAAQ;AACZ;AACA;IACI,oBAAoB;IACpB,aAAa;IACb,4BAA4B;IAC5B,sBAAsB;IACtB,6BAA6B;IAC7B,SAAS;IACT,sBAAsB;IACtB,oBAAoB;IACpB,kCAAkC;IAClC,iBAAiB;IACjB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,+BAA+B;IAC/B,WAAW;IACX,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,MAAM;IACN,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,4BAA4B;IAC5B,oBAAoB;IACpB,aAAa;IACb,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,iCAAiC;AACrC;AACA;IACI,UAAU;AACd;AACA;IACI;AACJ;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,oBAAoB;IACpB,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,eAAe;IACf,6BAA6B;IAC7B,qBAAqB;IACrB,sBAAsB;IACtB,eAAe;IACf,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,wBAAwB;IACxB,sBAAsB;IACtB,cAAc;IACd,cAAc;IACd,aAAa;IACb,cAAc;AAClB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,0BAA0B;IAC1B,uBAAuB;IACvB,sBAAsB;IACtB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,WAAW;IACX,SAAS;AACb;;AAEA;QACQ,qBAAqB;QACrB,iCAAiC;AACzC","sourcesContent":["html,body{\n    max-width: 100%;\n    overflow-x: hidden;\n}\nhtml{\n    height:100%\n}\ndiv{\n    min-height: 100%;\n    min-width: 100%;\n    margin:0;\n}\nbody{\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    background-color: rgb(242 240 235);\n    align-items: center;\n    font-size: 1rem;\n    margin:0;\n}\n#inputForm{\n    align-self: flex-end;\n    display: flex;\n    width:clamp(325px,95%,492px);\n    flex-direction: column;\n    justify-content: space-around;\n    bottom:1%;\n    border:1px solid black;\n    border-radius: .5rem;\n    background-color: rgb(213 233 226);\n    font-weight: bold;\n    overflow: auto;\n    overflow-x:hidden;\n    margin:auto auto 0 auto;\n    padding-bottom: .5rem;\n    align-items: center;\n    font-size: 1rem;\n}\n#inputForm input{\n    border-radius: .5rem;\n    font-size:1.1rem;\n}\n#inputForm button{\n    background-color: rgb(0 117 74);\n    color:white;\n    border-radius: .5rem;\n    font-size:1.3rem;\n}\n#newPersonForm{\n    flex:1;\n    width:93%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    border-bottom:1px grey solid;\n    margin-bottom: .5rem;\n    padding:.3rem;\n    align-items: center;\n    column-gap: 3%;\n}\n#nameInput{\n    width:clamp(5.5rem, 5.5rem, 11vw);\n}\ninput[type=\"number\"]{\n    width:13vw;\n} \n#addPerson-btn{\n    width:20%\n}\n#calculationForm{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin-bottom: .5rem;\n    border-bottom: 1px solid grey;\n    padding:.3rem;\n    align-items: center;\n    column-gap: 6%;\n}\n.personContainer{\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    grid-column:1/5;\n    border-bottom: 1px solid grey;\n    align-content: center;\n    box-sizing: border-box;\n    padding:.2rem 0;\n    justify-items: center;\n}\n#container{\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    grid-template-rows: 2rem;\n    grid-auto-flow: column;\n    row-gap: .3rem;\n    font-size:1rem;\n    padding:.2rem;\n    padding-top: 0;\n}\n#container-header{\n    grid-column: 1/5;\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    text-decoration: underline;\n    background:rgb(0 98 65);\n    color:rgb(242 240 235);\n    border:1px solid grey;\n}\n#container-header div{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\nimg{\n    max-width: 100%;\n    max-height: 100%;\n}\n.deleteButton{\n    border-radius:1rem;\n    background-color: rgb(248, 171, 148);\n    color:black;\n    width:75%;\n}\n\n#menu:active{\n        transform: scale(0.9);\n        background-color: rgb(0, 129, 81);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/imageAssets/menu_icon.svg":
/*!***************************************!*\
  !*** ./src/imageAssets/menu_icon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu_icon.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _functions_addPerson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/addPerson */ "./src/functions/addPerson.js");
/* harmony import */ var _components_InputDataListCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/InputDataListCreator */ "./src/components/InputDataListCreator.js");
/* harmony import */ var _imageAssets_menu_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageAssets/menu_icon.svg */ "./src/imageAssets/menu_icon.svg");
/* harmony import */ var _functions_calculateTips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/calculateTips */ "./src/functions/calculateTips.js");
/* harmony import */ var _functions_updateDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/updateDisplay */ "./src/functions/updateDisplay.js");






var peopleMap = new Map();
var employeeNames = ['Josh B', 'Daniela H', 'Dana M', 'Kyle F', 'Chris G', 'Adrien B', 'Kayla G', 'Naeem H', 'Will J', 'Habiba M', 'Zeshaan N', 'Mickey P', 'Jacob P', 'Sy P', 'Ash R', 'Emma S'];
var addButton = document.getElementById('addPerson-btn');
addButton.addEventListener('click', function (e) {
  (0,_functions_addPerson__WEBPACK_IMPORTED_MODULE_1__["default"])(e, peopleMap);
});
var newDataList = (0,_components_InputDataListCreator__WEBPACK_IMPORTED_MODULE_2__["default"])(employeeNames, 'nameDataList');
document.getElementById('nameInput').appendChild(newDataList);
document.getElementById('nameInput').setAttribute('list', 'nameDataList');
var menuUI = document.getElementById('menu');
menuUI.src = _imageAssets_menu_icon_svg__WEBPACK_IMPORTED_MODULE_3__;
menuUI.addEventListener('click', function () {});
var calculateButton = document.getElementById('calculationSubmitBtn');
calculateButton.addEventListener('click', function (e) {
  (0,_functions_calculateTips__WEBPACK_IMPORTED_MODULE_4__["default"])(peopleMap);
  (0,_functions_updateDisplay__WEBPACK_IMPORTED_MODULE_5__["default"])(peopleMap);
});
})();

/******/ })()
;
//# sourceMappingURL=bundlefb81ddd5836361f685be.js.map