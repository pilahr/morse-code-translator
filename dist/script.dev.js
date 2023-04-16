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
  string = string.toLowerCase();
  var array = string.split(" ");
  var array2 = array.map(function (word) {
    if (_morseCode.morseCode[word]) {
      return _morseCode.morseCode[word];
    } else {
      return word;
    }
  });
  var code = array2.join(" ");
  return code;
};

exports.englishToMorse = englishToMorse;

var morseToEnglish = function morseToEnglish(string) {
  var words = string.split("   ");
  var letters = words.map(function (morseWord) {
    return morseWord.split(" ");
  });
  var result = [];

  for (var i = 0; i < letters.length; i++) {
    result[i] = [];

    for (var x = 0; x < letters[i].length; x++) {
      if (_morseCode.decoded[letters[i][x]]) {
        result[i].push(_morseCode.decoded[letters[i][x]]);
      }
    }
  }

  return result.map(function (array) {
    return array.join("");
  }).join(" ");
};

exports.morseToEnglish = morseToEnglish;