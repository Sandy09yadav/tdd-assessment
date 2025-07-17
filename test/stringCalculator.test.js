const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
    test('returns 0 for empty string', () => {
        expect(add("")).toBe(0);
    });

    test('returns number for single input', () => {
        expect(add("1")).toBe(1);
    });

    test('returns sum of two numbers', () => {
        expect(add("1,2")).toBe(3);
    });
});