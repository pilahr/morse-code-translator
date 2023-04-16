import { morseCode } from "./morse-code.js";
import { decoded } from "./morse-code.js";

export const englishToMorse = (string) => {
  const englishToMorse = string
    .toLowerCase()
    .split("")
    .map((char) => {
      if (morseCode[char]) {
        return morseCode[char];
      } else {
        return char;
      }
    });
  return englishToMorse.join(" ");
};

export const morseToEnglish = (string) => {
  const morseCharacters = string.split(" ");
  const englishCharacters = morseCharacters.map((char) => {
    return decoded[char];
  });
  return englishCharacters.join("");
};
