import { englishToMorse, morseToEnglish } from "./script.js";

const englishInput = document.querySelector(".englishInput");
const morseInput = document.querySelector(".morseInput");
const englishInputButton = document.querySelector(".englishInput__button");
const morseInputButton = document.querySelector(".morseInput__button");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");

const handleEnglishOnClick = () => {
  output1.innerHTML = englishToMorse(englishInput.value);
};

const handleMorseOnClick = () => {
  output2.innerHTML = morseToEnglish(morseInput.value);
};

englishInputButton.addEventListener("click", handleEnglishOnClick);
morseInputButton.addEventListener("click", handleMorseOnClick);
