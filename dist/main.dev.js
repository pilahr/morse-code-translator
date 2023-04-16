"use strict";

var _script = require("./script.js");

var englishInput = document.querySelector(".englishInput");
var morseInput = document.querySelector(".morseInput");
var englishInputButton = document.querySelector(".englishInput__button");
var morseInputButton = document.querySelector(".morseInput__button");

var handleEnglishOnClick = function handleEnglishOnClick() {
  englishInput.innerHTML = (0, _script.morseToEnglish)(morseInput.value);
  englishInput.value = "";
};

var handleMorseOnClick = function handleMorseOnClick() {
  englishInput.innerHTML = (0, _script.englishToMorse)(morseInput.value);
};

englishInputButton.addEventListener("click", handleEnglishOnClick);
morseInputButton.addEventListener("click", handleMorseOnClick);