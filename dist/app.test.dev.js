"use strict";

var _app = require("./app");

var _script = require("./script");

describe("testing letters", function () {
  it("should change the original string to lower case `rob` even the input is a capital letters", function () {
    var string = (0, _script.lowerCaseString)("ROB");
    expect(string).toBe("rob");
  });
  it("should change the original string to lower case `rob` even the input is a capital letters", function () {
    var string = (0, _script.lowerCaseString)("ROB IS HAPPY");
    expect(string).toBe("rob is happy");
  });
  it("should return .- when given the string of `a` ", function () {
    var string = englishToMorse("a");
    expect(string).toBe(".-");
  });
  it("should return .-. --- -... when given the string `rob` with no spaces ", function () {
    var string = englishToMorse("rob");
    expect(string).toBe(".-. --- -...");
  });
  it("shouldn't return a comma", function () {
    var string = englishToMorse("hello");
    expect(string).toBe(".... . .-.. .-.. ---");
  });
  it("should has a space between each morse code", function () {
    var string = englishToMorse("hello");
    expect(string).toBe(".... . .-.. .-.. ---");
  });
  it("should return the letter that is not match with the letter that defined in englishToMorse variable", function () {
    var string = englishToMorse("=");
    expect(string).toBe("=");
  });
});
describe("testing morse code", function () {
  it("should return piya when given the string of `.--. .. -.-- .-` ", function () {
    var string = morseToEnglish(".--. .. -.-- .-");
    expect(string).toBe("piya");
  });
  it("should return t when given the sting of `-`", function () {
    var string = morseToEnglish("-");
    expect(string).toBe("t");
  });
  it("shouldn't return a space between the letters", function () {
    var string = morseToEnglish(".... . .-.. .-.. ---");
    expect(string).toBe("hello");
  });
  it("shouldn't return a comma between the letters", function () {
    var string = morseToEnglish(".... . .-.. .-.. ---");
    expect(string).toBe("hello");
  });
});