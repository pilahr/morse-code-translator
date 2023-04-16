"use strict";

var _script = require("./script.js");

var englishInput = document.querySelector(".englishInput");
var morseInput = document.querySelector(".morseInput");
var englishInputButton = document.querySelector(".englishInput__button");
var morseInputButton = document.querySelector(".morseInput__button");
var output1 = document.querySelector(".output1");
var output2 = document.querySelector(".output2");

var handleEnglishOnClick = function handleEnglishOnClick() {
  output1.innerHTML = (0, _script.englishToMorse)(englishInput.value);
};

var handleMorseOnClick = function handleMorseOnClick() {
  output2.innerHTML = (0, _script.morseToEnglish)(morseInput.value);
};

englishInputButton.addEventListener("click", handleEnglishOnClick);
morseInputButton.addEventListener("click", handleMorseOnClick);