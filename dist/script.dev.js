"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lowerCaseString = void 0;

var _app = require("./app");

// TESTING ENGLISH TO MORSE CODE
// LOWER CASE
var lowerCaseString = function lowerCaseString(string) {
  var word = string.split("");
  var lowerCaseWord = word.map(function (word) {
    var lowerCase = word.toLowerCase();
    return lowerCase;
  });
};

exports.lowerCaseString = lowerCaseString;