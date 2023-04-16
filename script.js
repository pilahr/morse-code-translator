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
  string = string.toLowerCase();
  const array = string.split(" ");

  const array2 = array.map((word) => {
    if (morseCode[word]) {
      return morseCode[word];
    } else {
      return word;
    }
  });
  let code = array2.join(" ");
  return code;
};

export const morseToEnglish = (string) => {
  const words = string.split("   ");
  const letters = words.map((morseWord) => morseWord.split(" "));
  const result = [];

  for (let i = 0; i < letters.length; i++) {
    result[i] = [];
    for (let x = 0; x < letters[i].length; x++) {
      if (decoded[letters[i][x]]) {
        result[i].push(decoded[letters[i][x]]);
      }
    }
  }
  return result.map((array) => array.join("")).join(" ");
};
