"use strict";

var _script = require("./script.js");

var englishArea = document.querySelector(".englishInput");
var morseArea = document.querySelector(".morseInput");
var codeButton = document.querySelector(".englishInput__button");
var decodeButton = document.querySelector(".morseInput__button");

var handleEnglishOnClick = function handleEnglishOnClick() {
  morseArea.innerHTML = (0, _script.englishToMorse)(englishArea.value);
};

var handleMorseOnClick = function handleMorseOnClick() {
  englishArea.innerHTML = (0, _script.morseToEnglish)(morseArea.value);
};

codeButton.addEventListener("click", handleEnglishOnClick);
decodeButton.addEventListener("click", handleMorseOnClick);
