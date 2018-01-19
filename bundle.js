(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _helpersHelpers = require('./helpers/helpers');

var Helpers = _interopRequireWildcard(_helpersHelpers);

var _dataData = require('./data/data');

var Data = _interopRequireWildcard(_dataData);

var upperCasedSentence = Helpers.getUpperCase('Time for a quick break then you can get back to work');
console.log(upperCasedSentence);

var moneyAfterRaise = Data.square(3);
var moneyAfterBuffet = Data.subtract(moneyAfterRaise, 5);

console.log(moneyAfterBuffet);
console.log(Data.greeting);

},{"./data/data":2,"./helpers/helpers":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.square = square;
exports.subtract = subtract;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _helpersHelpers = require('../helpers/helpers');

var Helpers = _interopRequireWildcard(_helpersHelpers);

var monthlyAllowance = square(5);
var greeting = 'Your monthly allowance is: $' + monthlyAllowance;

exports.greeting = greeting;

function square(num) {
  return num * num;
}

function subtract(num1, num2) {
  return num1 - num2;
}

},{"../helpers/helpers":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUpperCase = getUpperCase;

function getUpperCase(word) {
  return word.toUpperCase();
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9TaXRlcy9TaWRlIFByb2plY3RzL3Rlc3RpbmcvRVM2X2JvaWxlcnBsYXRlL2FwcC9tYWluLmpzIiwiQzovU2l0ZXMvU2lkZSBQcm9qZWN0cy90ZXN0aW5nL0VTNl9ib2lsZXJwbGF0ZS9hcHAvZGF0YS9kYXRhLmpzIiwiQzovU2l0ZXMvU2lkZSBQcm9qZWN0cy90ZXN0aW5nL0VTNl9ib2lsZXJwbGF0ZS9hcHAvaGVscGVycy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs4QkNBeUIsbUJBQW1COztJQUFoQyxPQUFPOzt3QkFDRyxhQUFhOztJQUF2QixJQUFJOztBQUVoQixJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsc0RBQXNELENBQUMsQ0FBQztBQUN4RyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7O0FBRWhDLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OzhCQ1ZGLG9CQUFvQjs7SUFBakMsT0FBTzs7QUFFbkIsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsSUFBTSxRQUFRLG9DQUFtQyxnQkFBZ0IsQUFBRSxDQUFDOzs7O0FBRXBFLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRTtBQUMxQixTQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7Q0FDbEI7O0FBRU0sU0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNuQyxTQUFPLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDcEI7Ozs7Ozs7Ozs7QUNYTSxTQUFTLFlBQVksQ0FBQyxJQUFJLEVBQUU7QUFDakMsU0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Q0FDM0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICogYXMgSGVscGVycyBmcm9tICcuL2hlbHBlcnMvaGVscGVycyc7XG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gJy4vZGF0YS9kYXRhJztcblxuY29uc3QgdXBwZXJDYXNlZFNlbnRlbmNlID0gSGVscGVycy5nZXRVcHBlckNhc2UoJ1RpbWUgZm9yIGEgcXVpY2sgYnJlYWsgdGhlbiB5b3UgY2FuIGdldCBiYWNrIHRvIHdvcmsnKTtcbmNvbnNvbGUubG9nKHVwcGVyQ2FzZWRTZW50ZW5jZSk7XG5cbmNvbnN0IG1vbmV5QWZ0ZXJSYWlzZSA9IERhdGEuc3F1YXJlKDMpO1xuY29uc3QgbW9uZXlBZnRlckJ1ZmZldCA9IERhdGEuc3VidHJhY3QobW9uZXlBZnRlclJhaXNlLCA1KTtcblxuY29uc29sZS5sb2cobW9uZXlBZnRlckJ1ZmZldCk7XG5jb25zb2xlLmxvZyhEYXRhLmdyZWV0aW5nKTtcbiIsImltcG9ydCAqIGFzIEhlbHBlcnMgZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuXHJcbmNvbnN0IG1vbnRobHlBbGxvd2FuY2UgPSBzcXVhcmUoNSk7XHJcbmV4cG9ydCBjb25zdCBncmVldGluZyA9ICBgWW91ciBtb250aGx5IGFsbG93YW5jZSBpczogJCR7bW9udGhseUFsbG93YW5jZX1gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZShudW0pIHtcclxuICByZXR1cm4gbnVtICogbnVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QobnVtMSwgbnVtMikge1xyXG4gIHJldHVybiBudW0xIC0gbnVtMjtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VXBwZXJDYXNlKHdvcmQpIHtcclxuICByZXR1cm4gd29yZC50b1VwcGVyQ2FzZSgpO1xyXG59XHJcbiJdfQ==
