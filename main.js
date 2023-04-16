import { englishToMorse, morseToEnglish } from "./script.js";

const englishArea = document.querySelector(".englishInput");
const morseArea = document.querySelector(".morseInput");
const codeButton = document.querySelector(".englishInput__button");
const decodeButton = document.querySelector(".morseInput__button");

const handleEnglishOnClick = () => {
  morseArea.innerHTML = englishToMorse(englishArea.value);
  morseArea.innerHTML += "";
};

const handleMorseOnClick = () => {
  englishArea.innerHTML = morseToEnglish(morseArea.value);
  englishArea.innerHTML += "";
};

codeButton.addEventListener("click", handleEnglishOnClick);
decodeButton.addEventListener("click", handleMorseOnClick);
