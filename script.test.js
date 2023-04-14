import { lowerCaseString, englishToMorse } from "./script";

describe("testing letters", () => {
  it("should change the original string to lower case `rob` even the input is a capital letters", () => {
    const string = lowerCaseString("ROB");
    expect(string).toBe("rob");
  });

  it("should change the original string to lower case `rob` even the input is a capital letters", () => {
    const string = lowerCaseString("ROB IS HAPPY");
    expect(string).toBe("rob is happy");
  });

  it("should return .- when given the word of `a` ", () => {
    const string = englishToMorse("a");

    expect(string).toBe(".-");
  });

  it("should return .-. --- -... when given the string `rob` with no spaces ", () => {
    const string = englishToMorse("rob");
    expect(string).toBe(".-. --- -...");
  });

  it("shouldn't return a comma sign but return it in morse code", () => {
    const string = englishToMorse("hello,rob");
    expect(string).toBe(".... . .-.. .-.. --- --..-- .-. --- -...");
  });

  it("should has a space between each morse code", () => {
    const string = englishToMorse("hello");
    expect(string).toBe(".... . .-.. .-.. ---");
  });

  it("should return the letter that is not match with the letter that defined in englishToMorse variable", () => {
    const string = englishToMorse("=");
    expect(string).toBe("=");
  });

  it("should handle number correctly", () => {
    const string = englishToMorse("1234");
    expect(string).toBe(".---- ..--- ...-- ....-");
  });
});

describe("testing morse code", () => {
  it("should return piya when given the string of `.--. .. -.-- .-` ", () => {
    const string = morseToEnglish(".--. .. -.-- .-");
    expect(string).toBe("piya");
  });

  it("should return t when given the sting of `-`", () => {
    const string = morseToEnglish("-");
    expect(string).toBe("t");
  });

  it("shouldn't return a space between the letters", () => {
    const string = morseToEnglish(".... . .-.. .-.. ---");
    expect(string).toBe("hello");
  });

  it("shouldn't return a comma between the letters", () => {
    const string = morseToEnglish(".... . .-.. .-.. ---");
    expect(string).toBe("hello");
  });

  it("should handle space between words", () => {
    const string = morseToEnglish(".... ..  -- ..- --");
    expect(string).toBe("hi mum");
  });
});
