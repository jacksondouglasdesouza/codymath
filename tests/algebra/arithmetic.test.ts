// tests/algebra/arithmetic.test.ts

import { constants } from '../../src/constants/constants';

/**
 * @fileoverview Unit tests for the core arithmetic module.
 * @version 0.3.0
 * @license MIT
 * @author Jackson Douglas de Souza
 * @date 2025-09-17
 */

import { describe, it, expect } from 'vitest';
import { sum, subtract, multiply, divide, mean, power, sqrt, cbrt, nthRoot, exp, ln, log10, log2, log } from '../../src/algebra/arithmetic';

describe('Function: sum', () => {
    
    it('should correctly sum a list of positive numbers', () => {
        expect(sum(1, 2, 3)).toBe(6);
        expect(sum(10, 20, 30, 40)).toBe(100);
    });

    it('should return the number itself when a single argument is provided', () => {
        expect(sum(42)).toBe(42);
        expect(sum(-5)).toBe(-5);
    });

    it('should pass a brutal stress test with mixed values and edge cases', () => {
        // Test with negative numbers
        expect(sum(-1, -2, -3)).toBe(-6);
        
        // Test with a mix of positive and negative numbers
        expect(sum(-10, 10, 5, -5)).toBe(0);
        
        // Test with zeros
        expect(sum(0, 0, 0, 0)).toBe(0);

        // Test with no arguments (this verifies the additive identity property)
        expect(sum()).toBe(0);
    });

});

//--

describe('Function: subtract', () => {

    it('should correctly subtract positive numbers', () => {
        expect(subtract(10, 5)).toBe(5);
        expect(subtract(5, 10)).toBe(-5);
    });

    it('should produce a result consistent with the sum function (dogfooding)', () => {
        const a = 15;
        const b = 7;
        const result = subtract(a, b); // 8
        //
        expect(sum(result, b)).toBe(a);
    });

    it('should pass a brutal stress test with mixed values and edge cases', () => {
        expect(subtract(10, 0)).toBe(10);
        expect(subtract(0, 10)).toBe(-10);
        expect(subtract(0, 0)).toBe(0);
        expect(subtract(5, -3)).toBe(8);
        expect(subtract(-5, 3)).toBe(-8);
        expect(subtract(-5, -3)).toBe(-2);
    });

});

//--

describe('Function: multiply', () => {

    it('should correctly multiply a list of positive numbers', () => {
        expect(multiply(2, 3, 4)).toBe(24);
        expect(multiply(10, 5)).toBe(50);
        expect(multiply(7)).toBe(7);
    });

    it('should handle repeated multiplication correctly (as a basis for the power function)', () => {
        //
        expect(multiply(3, 3, 3)).toBe(27); // 3^3
        expect(multiply(10, 10)).toBe(100);  // 10^2
    });

    it('should pass a brutal stress test with zeros, negatives, and the identity case', () => {
        // Test with a zero
        expect(multiply(5, 10, 0, 100)).toBe(0);
        
        // Test with negative numbers
        expect(multiply(-2, 5)).toBe(-10);
        expect(multiply(-2, -5)).toBe(10);
        expect(multiply(-2, -5, -3)).toBe(-30);

        // Test with no arguments (this verifies the multiplicative identity)
        expect(multiply()).toBe(1);
    });

});

//--

describe('Function: divide', () => {

    it('should correctly divide positive numbers', () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(100, 4)).toBe(25);
        expect(divide(10, 4)).toBe(2.5);
    });

    it('should correctly handle negative numbers and zero as a dividend', () => {
        expect(divide(-10, 2)).toBe(-5);
        expect(divide(10, -2)).toBe(-5);
        expect(divide(-10, -2)).toBe(5);
        expect(divide(0, 5)).toBe(0);
    });

    it('should produce a result consistent with the multiply function (dogfooding)', () => {
        const dividend = 42;
        const divisor = 6;
        const quotient = divide(dividend, divisor);

        //`multiply`
        expect(multiply(quotient, divisor)).toBeCloseTo(dividend);
    });
    
    it('should throw an error when dividing by zero (brutal stress test)', () => {
        //
        expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
        expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed.');
        expect(() => divide(0, 0)).toThrow('Division by zero is not allowed.');
    });

});

//--

describe('Function: mean', () => {

    it('should correctly calculate the mean of a list of positive numbers', () => {
        expect(mean(1, 2, 3, 4, 5)).toBe(3);
        expect(mean(10, 20, 30)).toBe(20);
    });

    it('should produce a result consistent with the sum and multiply functions (dogfooding)', () => {
        const numbers = [5, 10, 15, 20];
        const calculatedMean = mean(...numbers); // Should be 12.5
        const totalSum = sum(...numbers);       // Should be 50
        //
        expect(multiply(calculatedMean, numbers.length)).toBeCloseTo(totalSum);
    });

    it('should pass a brutal stress test with mixed values and edge cases', () => {
        // Test with a mix of positive and negative numbers
        expect(mean(-10, 10, -20, 20, 0)).toBe(0);

        // Test with a single number
        expect(mean(42)).toBe(42);

        // Test with floating-point numbers
        expect(mean(2.5, 7.5)).toBe(5);

        // Test with no arguments (this verifies the undefined mean case)
        expect(mean()).toBeNaN();
    });

});

//--

//--

describe('Function: power', () => {

    it('should correctly calculate the power for positive integer exponents', () => {
        expect(power(2, 3)).toBe(8);
        expect(power(10, 2)).toBe(100);
        expect(power(5, 1)).toBe(5);
    });

    it('should be consistent with the multiply function for integer exponents (dogfooding)', () => {
        // power(3, 4)
        expect(power(3, 4)).toBe(multiply(3, 3, 3, 3));
        expect(power(7, 2)).toBe(multiply(7, 7));
    });

    it('should pass a brutal stress test with negative, zero, and fractional exponents', () => {
        // 
        expect(power(100, 0)).toBe(1);
        // 
        expect(power(2, -1)).toBe(0.5);
        expect(power(4, -2)).toBe(0.0625);
        // 
        expect(power(9, 0.5)).toBe(3);
        expect(power(27, 1/3)).toBeCloseTo(3);
        // 
        expect(power(-2, 2)).toBe(4);
        expect(power(-2, 3)).toBe(-8);
        //0^0
        expect(power(0, 0)).toBe(1);
    });

});

//--

describe('Function: sqrt', () => {

    it('should correctly calculate the square root of perfect squares', () => {
        expect(sqrt(4)).toBe(2);
        expect(sqrt(9)).toBe(3);
        expect(sqrt(144)).toBe(12);
        expect(sqrt(0)).toBe(0);
    });

    it('should produce a result consistent with the power function (dogfooding)', () => {
        const number = 25;
        const result = sqrt(number); // 5

        //
        expect(power(result, 2)).toBe(number);

        const anotherNumber = 50;
        // User toBeCloseTo
        expect(power(sqrt(anotherNumber), 2)).toBeCloseTo(anotherNumber);
    });

    it('should pass a brutal stress test with non-integers and invalid inputs', () => {
        //
        expect(sqrt(6.25)).toBe(2.5);
        //
        expect(sqrt(1e10)).toBe(1e5);
        //
        expect(sqrt(-1)).toBeNaN();
        expect(sqrt(-100)).toBeNaN();
    });

});

//--

describe('Function: cbrt', () => {

    it('should correctly calculate the cube root of perfect cubes', () => {
        expect(cbrt(8)).toBe(2);
        expect(cbrt(27)).toBe(3);
        expect(cbrt(0)).toBe(0);
        expect(cbrt(1)).toBe(1);
    });

    it('should produce a result consistent with the power function (dogfooding)', () => {
        const number = 64;
        const result = cbrt(number); // 4
        //
        expect(power(result, 3)).toBeCloseTo(number);

        const negativeNumber = -125;
        const negResult = cbrt(negativeNumber); // -5
        expect(power(negResult, 3)).toBeCloseTo(negativeNumber);
    });

    it('should pass a brutal stress test with negative numbers and non-integers', () => {
        //
        expect(cbrt(-8)).toBe(-2);
        expect(cbrt(-1000)).toBe(-10);
        expect(cbrt(15.625)).toBe(2.5);
        //
        expect(cbrt(10)).toBeCloseTo(2.154434690031884);
    });

});

//--

describe('Function: nthRoot', () => {

    it('should correctly calculate various integer roots', () => {
        expect(nthRoot(16, 4)).toBe(2); // 4th root of 16 is 2
        expect(nthRoot(32, 5)).toBe(2); // 5th root of 32 is 2
        expect(nthRoot(1, 10)).toBe(1); // Any root of 1 is 1
    });

    it('should be consistent with the sqrt and cbrt functions (dogfooding)', () => {
        // = sqrt()
        expect(nthRoot(81, 2)).toBe(sqrt(81));

        // = cbrt()
        expect(nthRoot(125, 3)).toBeCloseTo(cbrt(125)); // Usando toBeCloseTo
        expect(nthRoot(-27, 3)).toBe(cbrt(-27));
    });

    it('should pass a brutal stress test with negative bases and edge cases', () => {
        // Odd root of a negative number
        expect(nthRoot(-32, 5)).toBeCloseTo(-2);
        
        expect(nthRoot(-16, 4)).toBeNaN();
        expect(nthRoot(0, 7)).toBe(0);
        expect(nthRoot(0.0625, 4)).toBe(0.5);
        expect(nthRoot(1_000_000, 6)).toBeCloseTo(10); // 6th root of 1,000,000
    });

});

//--

describe('Function: exp', () => {

    it('should correctly handle base cases like exp(1) and exp(0)', () => {
        // exp(1) = Euler (e) Number
        expect(exp(1)).toBe(constants.e);
        // exp(0) = 1
        expect(exp(0)).toBe(1);
    });

    it('should be consistent with multiply and divide functions (dogfooding)', () => {
        // exp(2) é e * e
        expect(exp(2)).toBeCloseTo(multiply(constants.e, constants.e));

        // exp(-1) é 1 / e
        expect(exp(-1)).toBeCloseTo(divide(1, constants.e));
    });

    it('should pass a brutal stress test by comparing with Math.exp()', () => {
        // 
        expect(exp(5)).toBeCloseTo(Math.exp(5));
        //
        expect(exp(-3)).toBeCloseTo(Math.exp(-3));
        //
        expect(exp(1.5)).toBeCloseTo(Math.exp(1.5));
    });

});

//--

describe('Function: ln', () => {

    it('should correctly handle base cases like ln(e) and ln(1)', () => {
        // 'e' = 1
        expect(ln(constants.e)).toBeCloseTo(1);

        // = 0
        expect(ln(1)).toBe(0);
    });

    it('should be the inverse of the exp function (dogfooding)', () => {
        // ln(exp(x)) = x.
        const value1 = 3;
        expect(ln(exp(value1))).toBeCloseTo(value1);

        const value2 = 0.5;
        expect(ln(exp(value2))).toBeCloseTo(value2);
    });

    it('should pass a brutal stress test with invalid and edge case inputs', () => {
        // 0 = -Infinity
        expect(ln(0)).toBe(-Infinity);

        // = (NaN).
        expect(ln(-1)).toBeNaN();
        expect(ln(-10)).toBeNaN();
    });

});

//--

describe('Function: log10', () => {

    it('should correctly calculate the logarithm of powers of 10', () => {
        expect(log10(100)).toBe(2);
        expect(log10(1000)).toBe(3);
        expect(log10(1)).toBe(0);
        expect(log10(0.1)).toBe(-1);
    });

    it('should be the inverse of powering 10 (dogfooding)', () => {
        // log10(10^x) = x.
        const exponent = 4;
        expect(log10(power(10, exponent))).toBeCloseTo(exponent);

        const negExponent = -2;
        expect(log10(power(10, negExponent))).toBeCloseTo(negExponent);
    });

    it('should pass a brutal stress test with invalid and edge case inputs', () => {
        // 0 = -Infinity
        expect(log10(0)).toBe(-Infinity);

        // = NaN.
        expect(log10(-10)).toBeNaN();

        // not a power of 10
        expect(log10(50)).toBeCloseTo(1.6989700043360187);
    });

});

//--

describe('Function: log2', () => {

    it('should correctly calculate the logarithm of powers of 2', () => {
        expect(log2(4)).toBe(2);
        expect(log2(8)).toBe(3);
        expect(log2(1)).toBe(0);
        expect(log2(0.5)).toBe(-1); // 2^-1
    });

    it('should be the inverse of powering 2 (dogfooding)', () => {
        // log2(2^x) = x.
        const exponent = 5;
        expect(log2(power(2, exponent))).toBeCloseTo(exponent);

        const negExponent = -3;
        expect(log2(power(2, negExponent))).toBeCloseTo(negExponent);
    });

    it('should pass a brutal stress test with invalid and edge case inputs', () => {
        // = -Infinity
        expect(log2(0)).toBe(-Infinity);

        // = NaN.
        expect(log2(-2)).toBeNaN();

        // Not a power of 2
        expect(log2(10)).toBeCloseTo(3.321928094887362);
    });

});

//--

describe('Function: log', () => {

    it('should correctly calculate logarithms for various integer bases', () => {
        expect(log(8, 2)).toBeCloseTo(3);
        expect(log(81, 3)).toBeCloseTo(4);
        expect(log(100, 10)).toBeCloseTo(2);
    });

    it('should be consistent with ln, log10, and log2 functions (dogfooding)', () => {
        const value = 50;
        // log(n, base e) = ln(n)
        expect(log(value, constants.e)).toBeCloseTo(ln(value));

        // log(n, base 10) = log10(n)
        expect(log(value, 10)).toBeCloseTo(log10(value));

        // log(n, base 2) = log2(n)
        expect(log(value, 2)).toBeCloseTo(log2(value));
    });

    it('should pass a brutal stress test with invalid bases and edge cases', () => {
        // return NaN
        expect(log(10, 1)).toBeNaN(); // 1
        expect(log(10, 0)).toBeNaN(); // 0
        expect(log(10, -2)).toBeNaN(); // Negative base

        // Input 'n' invalid
        expect(log(-10, 10)).toBeNaN();

        // Log | 1 = 0
        expect(log(1, 7)).toBe(0);
    });

});