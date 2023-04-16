"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.morseToEnglish = exports.englishToMorse = exports.lowerCaseString = void 0;

var _morseCode = require("./morse-code.js");

var lowerCaseString = function lowerCaseString(string) {
  var words = string.split(" ");
  var lowerCase = words.map(function (word) {
    return word.toLowerCase();
  });
  return lowerCase.join(" ");
};

exports.lowerCaseString = lowerCaseString;

var englishToMorse = function englishToMorse(string) {
  var array = string.split(" ").toLowerCase();
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    for (var key in _morseCode.morseCode) {
      if (array[i] == key) {
        newArray.push(_morseCode.morseCode[key]);
      }
    }
  }

  return newArray.join(" ").toString("");
};

exports.englishToMorse = englishToMorse;

var morseToEnglish = function morseToEnglish(string) {
  var array = string.split("   ");
  var newArray = [];

  for (var i = 0; i < array.lenght; i++) {
    for (var key in _morseCode.decoded) {
      if (array[i] == key) {
        newArray.push(_morseCode.decoded[key]);
      }
    }
  }

  return newArray.join("").toString("");
};

exports.morseToEnglish = morseToEnglish;