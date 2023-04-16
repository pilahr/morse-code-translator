"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.morseToEnglish = exports.englishToMorse = void 0;

var _morseCode = require("./morse-code.js");


  var englishToMorse = string.toLowerCase().split("").map(function (_char) {
    if (_morseCode.morseCode[_char]) {
      return _morseCode.morseCode[_char];
    } else {
      return _char;
    }
  });
  return englishToMorse.join(" ");
  return englishToMorse.join(" ");



exports.englishToMorse = englishToMorse;

var morseToEnglish = function morseToEnglish(string) {

  var morseCharacters = string.split(" ");
  var englishCharacters = morseCharacters.map(function (_char2) {
    return _morseCode.decoded[_char2];
  });
  return englishCharacters.join("");

};

exports.morseToEnglish = morseToEnglish;