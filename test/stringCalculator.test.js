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

    test('handles unknown amount of comma-separated numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15);
    });

    test('handles newline as delimiter', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('supports custom single character delimiter', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('throws on negative numbers', () => {
        expect(() => add("1,-2,-4")).toThrow("negatives not allowed: -2,-4");
    });

    test('ignores numbers greater than 1000', () => {
        expect(add("2,1001")).toBe(2);
        expect(add("2,1000")).toBe(1002);
    });

    test('supports delimiters of any length', () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });

    test('supports multiple delimiters', () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

    test('supports multiple long delimiters', () => {
        expect(add("//[***][%%]\n1***2%%3")).toBe(6);
    });
});