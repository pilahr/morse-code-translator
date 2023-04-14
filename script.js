import { englishToMorse } from "./app";

// TESTING ENGLISH TO MORSE CODE
// LOWER CASE

export const lowerCaseString = (string) => {
  const word = string.split("");
  const lowerCaseWord = word.map((word) => {
    const lowerCase = word.toLowerCase();
    return lowerCase;
  });
};
