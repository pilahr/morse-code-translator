"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.englishToMorse = exports.lowerCaseString = void 0;

var _morseCode = require("./morse-code");

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
  var arr1 = string.split("");
  var arr2 = arr1.map(function (word) {
    if (_morseCode.morseCode[word]) {
      return _morseCode.morseCode[word];
    } else {
      return word;
    }
  });
  var code = arr2.join(" ");
  return code;
}; // export const englishToMorse = (string) => {
//   const englishInput = document.querySelector(".englishInput");
//   const morseInput = document.querySelector(".morseInput");
//   const input = englishInput.value;
//   const lowerCaseInput = input.toLowerCase();
//   const englishInputArray = lowerCaseInput.split("").map((word) => {
//     if (morseCode[word]) {
//       return morseCode[word];
//     } else {
//       return word;
//     }
//   });
//   const result = englishInputArray.join(" ");
//   const code = morseInput.value;
//   return code;
// };
// const englishInputButton = document.querySelector(".englishInput__button");
// englishInputButton.addEventListener("click", () => {
//   return englishToMorse();
// });


exports.englishToMorse = englishToMorse;