const isEven = require('../IsEvenNumber');

describe("isEven" , () => {
    test("returns true is number is even", () => {
        expect(isEven(2)).toBe(true);
    });

    test('returns false if number is odd', () => {
        expect(isEven(3)).toBe(false);
    });

    test('throw an error if number is negative', () => {
        expect(() => isEven(-1)).toThrow();
    });

    test('throw an error if number is a number', () => {
        expect(() => isEven("1")).toThrow();
    });

});
