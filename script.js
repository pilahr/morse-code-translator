import { morseCode } from "./morse-code";

export const lowerCaseString = (string) => {
  const words = string.split(" ");
  const lowerCase = words.map((word) => {
    return word.toLowerCase();
  });
  return lowerCase.join(" ");
};

export const englishToMorse = (string) => {
  string = string.toLowerCase();

  const arr1 = string.split("");

  const arr2 = arr1.map((word) => {
    if (morseCode[word]) {
      return morseCode[word];
    } else {
      return word;
    }
  });

  let code = arr2.join(" ");
  return code;
};


// export const englishToMorse = (string) => {
//   const englishInput = document.querySelector(".englishInput");
//   const morseInput = document.querySelector(".morseInput");
//   const input = englishInput.value;
//   const lowerCaseInput = input.toLowerCase();
//   const englishInputArray = lowerCaseInput.split("").map((word) => {
//     if (morseCode[word]) {
//       return morseCode[word];
//     } else {
//       return word;
//     }
//   });
//   const result = englishInputArray.join(" ");
//   const code = morseInput.value;
//   return code;
// };

// const englishInputButton = document.querySelector(".englishInput__button");

// englishInputButton.addEventListener("click", () => {
//   return englishToMorse();
// });
