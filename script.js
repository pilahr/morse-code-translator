import { morseCode } from "./morse-code.js";
import { decoded } from "./morse-code.js";

export const lowerCaseString = (string) => {
  const words = string.split(" ");
  const lowerCase = words.map((word) => {
    return word.toLowerCase();
  });
  return lowerCase.join(" ");
};

export const englishToMorse = (string) => {
  const array = string.split(" ").toLowerCase();
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    for (const key in morseCode) {
      if (array[i] == key) {
        newArray.push(morseCode[key]);
      }
    }
  }
  return newArray.join(" ").toString("");
};

export const morseToEnglish = (string) => {
  const array = string.split("   ");
  const newArray = [];
  for (let i = 0; i < array.lenght; i++) {
    for (const key in decoded) {
      if (array[i] == key) {
        newArray.push(decoded[key]);
      }
    }
  }
  return newArray.join("").toString("");
};
