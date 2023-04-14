import {englishToMorse} from "./app"

describe("testing letters", ()=> {

    it("should return .- when given the string of `a` ", () => {
        const string = englishToMorse("a")

        expect(string).toBe(".-")
    })

    it("should return .-. --- -... when given the string `rob` with no spaces ", () => {
        const string = englishToMorse("rob")
        expect(string).toBe(".-. --- -...")
    })

    it("should still return the morse code .-. --- -... even the input is a capital letters", ()=> {
        const string = englishToMorse("ROB")
        expect(string).toBe(".-. --- -...")
    })

    it("shouldn't return a comma" , () => {
        const string = englishToMorse("hello")
        expect(string).toBe(".... . .-.. .-.. ---")
    })

})

