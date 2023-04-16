"use strict";

var _script = require("./script");

describe("testing letters", function () {
  it("should return .- when given the word of `a` ", function () {
    var string = (0, _script.englishToMorse)("a");
    expect(string).toBe(".-");
  });
  it("should return .-. --- -... when given the string `rob` with no spaces ", function () {
    var string = (0, _script.englishToMorse)("rob");
    expect(string).toBe(".-. --- -...");
  });
  it("shouldn't return a comma sign but return it in morse code", function () {
    var string = (0, _script.englishToMorse)("hello,rob");
    expect(string).toBe(".... . .-.. .-.. --- --..-- .-. --- -...");
  });
  it("should has a space between each morse code", function () {
    var string = (0, _script.englishToMorse)("hello");
    expect(string).toBe(".... . .-.. .-.. ---");
  });
  it("should return the letter that is not match with the letter that defined in englishToMorse variable", function () {
    var string = (0, _script.englishToMorse)("=");
    expect(string).toBe("=");
  });
  it("should handle number correctly", function () {
    var string = (0, _script.englishToMorse)("1234");
    expect(string).toBe(".---- ..--- ...-- ....-");
  });
});
describe("testing morse code", function () {
  it("should return piya when given the string of `.--. .. -.-- .-` ", function () {
    var string = (0, _script.morseToEnglish)(".--. .. -.-- .-");
    expect(string).toBe("piya");
  });
  it("should return t when given the sting of `-`", function () {
    var string = (0, _script.morseToEnglish)("-");
    expect(string).toBe("t");
  });
  it("shouldn't return a space between the letters", function () {
    var string = (0, _script.morseToEnglish)(".... . .-.. .-.. ---");
    expect(string).toBe("hello");
  });
  it("shouldn't return a comma between the letters", function () {
    var string = (0, _script.morseToEnglish)(".... . .-.. .-.. ---");
    expect(string).toBe("hello");
  });
  it("should handle space between words", function () {
    var string = (0, _script.morseToEnglish)(".... .. / -- ..- --");
    expect(string).toBe("hi mum");
  });
});