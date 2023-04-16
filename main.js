import { englishToMorse, morseToEnglish } from "./script.js";

const englishInput = document.querySelector(".englishInput");
const morseInput = document.querySelector(".morseInput");
const englishInputButton = document.querySelector(".englishInput__button");
const morseInputButton = document.querySelector(".morseInput__button");

const handleEnglishOnClick = () => {
  morseInput.innerHTML = englishToMorse(englishInput.value);
};

const handleMorseOnClick = () => {
  englishInput.innerHTML = morseToEnglish(morseInput.value);
};

englishInputButton.addEventListener("click", handleEnglishOnClick);
morseInputButton.addEventListener("click", handleMorseOnClick);
