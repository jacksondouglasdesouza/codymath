// tests/algebra/arithmetic.test.ts

import { constants } from '../../src/constants/constants';

/**
 * @fileoverview Unit tests for the core arithmetic module.
 * @version 0.4.0
 * @license MIT
 * @author Jackson Douglas de Souza
 * @date initial 2025-09-17 | Last updated test: 2025-09-19
 */

import { describe, it, expect } from 'vitest';
import { 
    sum,
    subtract, 
    multiply, 
    divide, 
    mean, 
    power, 
    sqrt, 
    cbrt, 
    nthRoot, 
    exp, 
    ln, 
    log10, 
    log2, 
    log, 
    gcd, 
    lcm, 
    isPrime, 
    isEven, 
    isOdd, 
    factorial, 
    absolute, 
    round, 
    floor, 
    ceil, 
    trunc, 
    sign,
    clamp,
    lerp,
    isInRange,
    mod,
    isNegativeZero

} from '../../src/algebra/arithmetic';

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

//--

describe('Function: gcd', () => {

    it('should correctly find the GCD of two positive integers', () => {
        expect(gcd(48, 18)).toBe(6);
        expect(gcd(54, 24)).toBe(6);
        // Test with co-prime numbers
        expect(gcd(17, 13)).toBe(1);
        // Test where one number is a multiple of the other
        expect(gcd(100, 20)).toBe(20);
    });

    it('should correctly handle cases involving zero', () => {
        // The GCD of a number and 0 is the number itself.
        expect(gcd(10, 0)).toBe(10);
        expect(gcd(0, 5)).toBe(5);
        expect(gcd(0, 0)).toBe(0);
    });

    it('should pass a brutal stress test with negative numbers and floats', () => {
        // Test with negative numbers (should use absolute values)
        expect(gcd(-48, 18)).toBe(6);
        expect(gcd(48, -18)).toBe(6);
        expect(gcd(-48, -18)).toBe(6);

        // Test with floating-point numbers (should truncate them)
        expect(gcd(48.9, 18.2)).toBe(6); // gcd(48, 18)
        expect(gcd(54.1, 24.9)).toBe(6); // gcd(54, 24)
        
        // Test with larger numbers
        expect(gcd(12345, 67890)).toBe(15);
    });

});

//--

describe('Function: lcm', () => {

    it('should correctly find the LCM of two positive integers', () => {
        expect(lcm(21, 6)).toBe(42);
        expect(lcm(48, 18)).toBe(144);
        // Test where one number is a multiple of the other
        expect(lcm(10, 5)).toBe(10);
    });

    it('should be consistent with the gcd and multiply functions (dogfooding)', () => {
        const a = 12;
        const b = 15;
        const resultLcm = lcm(a, b); // Should be 60
        const resultGcd = gcd(a, b); // Should be 3

        // Verify the property: |a * b| = gcd(a, b) * lcm(a, b)
        expect(multiply(resultGcd, resultLcm)).toBe(Math.abs(multiply(a, b)));
    });

    it('should pass a brutal stress test with zeros, negatives, and floats', () => {
        // Test with zero 
        expect(lcm(10, 0)).toBe(0);
        expect(lcm(0, 5)).toBe(0);
        expect(lcm(0, 0)).toBe(0);

        // Test with negative numbers (should use absolute values)
        expect(lcm(-21, 6)).toBe(42);
        expect(lcm(21, -6)).toBe(42);
        expect(lcm(-21, -6)).toBe(42);

        // Test with floating-point numbers (inputs should be truncated by gcd)
        expect(lcm(21.9, 6.2)).toBe(42); // lcm(21, 6)
    });

});

//--

describe('Function: isPrime', () => {

    it('should correctly identify prime and non-prime numbers', () => {
        // Known primes
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBe(true);
        expect(isPrime(13)).toBe(true);
        expect(isPrime(29)).toBe(true);
        
        // Known non-primes
        expect(isPrime(4)).toBe(false);
        expect(isPrime(9)).toBe(false);
        expect(isPrime(15)).toBe(false);
        expect(isPrime(25)).toBe(false);
    });

    it('should correctly handle fundamental cases (0, 1, 2)', () => {
        // Numbers less than or equal to 1 are not prime.
        expect(isPrime(1)).toBe(false);
        expect(isPrime(0)).toBe(false);
        expect(isPrime(-10)).toBe(false);

        // 2 is the only even prime number.
        expect(isPrime(2)).toBe(true);
    });

    it('should pass a brutal stress test with larger numbers and floats', () => {
        // A larger prime
        expect(isPrime(997)).toBe(true); // 997 is the 168th prime number

        // A larger non-prime (square of a prime)
        expect(isPrime(9409)).toBe(false); // 97 * 97

        // A large even number
        expect(isPrime(10000)).toBe(false);

        // Test with floating-point numbers (should truncate them)
        expect(isPrime(7.9)).toBe(true);  // Should test isPrime(7)
        expect(isPrime(15.5)).toBe(false); // Should test isPrime(15)
    });

});

//--

describe('Function: isEven', () => {

    it('should correctly identify even numbers', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(100)).toBe(true);
        expect(isEven(0)).toBe(true);
    });

    it('should return false for odd numbers', () => {
        expect(isEven(3)).toBe(false);
        expect(isEven(99)).toBe(false);
    });

    it('should pass a brutal stress test with negative numbers and floats', () => {
        expect(isEven(-2)).toBe(true);
        expect(isEven(-3)).toBe(false);
        // Should truncate the float before checking
        expect(isEven(4.9)).toBe(true);  // isEven(4)
        expect(isEven(5.1)).toBe(false); // isEven(5)
    });

});

//--

describe('Function: isOdd', () => {

    it('should correctly identify odd numbers', () => {
        expect(isOdd(3)).toBe(true);
        expect(isOdd(99)).toBe(true);
        expect(isOdd(-5)).toBe(true);
    });

    it('should be the exact inverse of isEven (dogfooding)', () => {
        // Must always be the opposite of isEven
        expect(isOdd(10)).toBe(!isEven(10));  // false
        expect(isOdd(11)).toBe(!isEven(11));  // true
        expect(isOdd(0)).toBe(!isEven(0));    // false
    });
    
    it('should pass a brutal stress test with negative numbers and floats', () => {
        expect(isOdd(-3)).toBe(true);
        expect(isOdd(-4)).toBe(false);
        // Should truncate the float before checking
        expect(isOdd(5.9)).toBe(true);  // isOdd(5)
        expect(isOdd(6.1)).toBe(false); // isOdd(6)
    });

});

//--

describe('Function: factorial', () => {

    it('should correctly handle the base cases of 0! and 1!', () => {
        // The factorial of 0 is 1 by definition.
        expect(factorial(0)).toBe(1);
        // The factorial of 1 is 1.
        expect(factorial(1)).toBe(1);
    });

    it('should correctly calculate the factorial of positive integers', () => {
        expect(factorial(3)).toBe(6); // 3 * 2 * 1
        expect(factorial(5)).toBe(120); // 5 * 4 * 3 * 2 * 1
        expect(factorial(10)).toBe(3628800);
    });

    it('should pass a brutal stress test with invalid inputs and limits', () => {
        // Factorial is not defined for negative numbers.
        expect(factorial(-1)).toBeNaN();
        expect(factorial(-10)).toBeNaN();

        // Should truncate floats before calculating.
        expect(factorial(5.9)).toBe(120); // Should be treated as 5!

        // Test the limit of standard JavaScript numbers.
        expect(factorial(170)).toBe(7.257415615307994e+306);
        // Above 170, the result should be Infinity.
        expect(factorial(171)).toBe(Infinity);
    });

});//--

describe('Function: absolute', () => {

    it('should return the same number for positive inputs', () => {
        expect(absolute(5)).toBe(5);
        expect(absolute(100)).toBe(100);
    });

    it('should return the positive equivalent for negative inputs', () => {
        expect(absolute(-5)).toBe(5);
        expect(absolute(-100)).toBe(100);
    });

    it('should pass a brutal stress test with zero and floating-point numbers', () => {
        // The absolute value of 0 is 0.
        expect(absolute(0)).toBe(0);

        // Test with floats
        expect(absolute(-3.14)).toBe(3.14);
        expect(absolute(2.71)).toBe(2.71);

        // The result of absolute should never be negative.
        expect(absolute(-9999)).toBeGreaterThanOrEqual(0);
    });

});

//--

describe('Function: round', () => {

    it('should round to the nearest integer when no decimal place is specified', () => {
        expect(round(5.2)).toBe(5);
        expect(round(5.8)).toBe(6);
        expect(round(5.5)).toBe(6);
    });

    it('should round to the specified number of positive decimal places', () => {
        expect(round(3.14159, 2)).toBe(3.14);
        expect(round(2.71828, 4)).toBe(2.7183);
        expect(round(1.2345, 0)).toBe(1);
    });

    it('should pass a brutal stress test with negative decimal places', () => {
        // Rounding to the nearest 10
        expect(round(1234, -1)).toBe(1230);
        expect(round(1238, -1)).toBe(1240);
        // Rounding to the nearest 100
        expect(round(1286, -2)).toBe(1300);
        expect(round(1234, -2)).toBe(1200);
        // Rounding to the nearest 1000
        expect(round(482, -3)).toBe(0);
        expect(round(501, -3)).toBe(1000);
    });

});

//--

describe('Function: floor', () => {

    it('should round numbers down to the nearest integer', () => {
        expect(floor(5.95)).toBe(5);
        expect(floor(5.05)).toBe(5);
        expect(floor(-5.05)).toBe(-6); // Note the behavior for negatives
        expect(floor(7)).toBe(7);
    });

});

//--

describe('Function: ceil', () => {

    it('should round numbers up to the nearest integer', () => {
        expect(ceil(5.95)).toBe(6);
        expect(ceil(5.05)).toBe(6);
        expect(ceil(-5.95)).toBe(-5); // Note the behavior for negatives
        expect(ceil(7)).toBe(7);
    });

});

//--

describe('Function: trunc', () => {

    it('should remove the fractional part of a number', () => {
        expect(trunc(5.95)).toBe(5);
        expect(trunc(5.05)).toBe(5);
        expect(trunc(-5.95)).toBe(-5); // Different from floor() for negatives
        expect(trunc(7)).toBe(7);
    });

});

//--

describe('Function: sign', () => {

    it('should return 1 for positive numbers', () => {
        expect(sign(10)).toBe(1);
        expect(sign(0.5)).toBe(1);
    });

    it('should return -1 for negative numbers', () => {
        expect(sign(-10)).toBe(-1);
        expect(sign(-0.5)).toBe(-1);
    });

    it('should pass a brutal stress test with zero, Infinity, and NaN', () => {
        // Test with zero and negative zero
        expect(sign(0)).toBe(0);
        expect(sign(-0)).toBe(-0); // JavaScript distinguishes 0 and -0

        // Test with Infinity
        expect(sign(Infinity)).toBe(1);
        expect(sign(-Infinity)).toBe(-1);

        // Test with NaN
        expect(sign(NaN)).toBe(NaN);
    });

});


//--

describe('Function: clamp', () => {

    it('should return the original value if it is within the range', () => {
        expect(clamp(5, 0, 10)).toBe(5);
        expect(clamp(0, 0, 10)).toBe(0); // Inclusive of min
        expect(clamp(10, 0, 10)).toBe(10); // Inclusive of max
    });

    it('should clamp the value to the lower bound if it is less than the minimum', () => {
        expect(clamp(-5, 0, 10)).toBe(0);
        expect(clamp(90, 100, 200)).toBe(100);
    });

    it('should clamp the value to the upper bound if it is greater than the maximum', () => {
        expect(clamp(15, 0, 10)).toBe(10);
        expect(clamp(300, 100, 200)).toBe(200);
    });

    it('should pass a brutal stress test with negative and floating-point numbers', () => {
        // Negative range
        expect(clamp(-5, -10, 0)).toBe(-5);
        expect(clamp(-15, -10, 0)).toBe(-10);
        expect(clamp(5, -10, 0)).toBe(0);

        // Floating-point range
        expect(clamp(3.14, 2.5, 4.5)).toBe(3.14);
        expect(clamp(1.2, 2.5, 4.5)).toBe(2.5);
        expect(clamp(5.8, 2.5, 4.5)).toBe(4.5);

        // Edge case: min > max (should return max, as per Math.min/max logic)
        expect(clamp(50, 100, 0)).toBe(0);
    });

});

//--

describe('Function: lerp', () => {

    it('should return the start point when t = 0', () => {
        expect(lerp(0, 10, 0)).toBe(0);
        expect(lerp(-10, 10, 0)).toBe(-10);
    });

    it('should return the end point when t = 1', () => {
        expect(lerp(0, 10, 1)).toBe(10);
        expect(lerp(-10, 10, 1)).toBe(10);
    });
    
    it('should correctly interpolate between two points', () => {
        // Midpoint
        expect(lerp(0, 10, 0.5)).toBe(5);
        // Quarter point
        expect(lerp(10, 20, 0.25)).toBe(12.5);
    });

    it('should pass a brutal stress test with extrapolation (t outside 0-1)', () => {
        // Extrapolating below the start point
        expect(lerp(10, 20, -0.5)).toBe(5);

        // Extrapolating beyond the end point
        expect(lerp(10, 20, 2)).toBe(30);

        // With negative values
        expect(lerp(-10, 0, 0.5)).toBe(-5);
        expect(lerp(-10, -20, 0.5)).toBe(-15);
    });

});

//--

describe('Function: isInRange', () => {

    it('should return true for numbers within the range', () => {
        expect(isInRange(5, 0, 10)).toBe(true);
        expect(isInRange(0.5, 0, 1)).toBe(true);
    });

    it('should return false for numbers outside the range', () => {
        expect(isInRange(15, 0, 10)).toBe(false);
        expect(isInRange(-5, 0, 10)).toBe(false);
    });

    it('should be inclusive of the start and end values', () => {
        expect(isInRange(0, 0, 10)).toBe(true);
        expect(isInRange(10, 0, 10)).toBe(true);
    });

    it('should pass a brutal stress test with negative and floating-point ranges', () => {
        // Negative range
        expect(isInRange(-5, -10, 0)).toBe(true);
        expect(isInRange(-15, -10, 0)).toBe(false);

        // Floating-point range
        expect(isInRange(3.14, 2.5, 4.5)).toBe(true);
        expect(isInRange(5.8, 2.5, 4.5)).toBe(false);

        // Edge case where start and end are the same
        expect(isInRange(5, 5, 5)).toBe(true);
        expect(isInRange(6, 5, 5)).toBe(false);
    });

});

//--

describe('Function: mod', () => {

    it('should behave like the remainder operator for positive numbers', () => {
        expect(mod(10, 3)).toBe(1);
        expect(mod(12, 4)).toBe(0);
    });

    it('should correctly calculate the mathematical modulo for negative numbers', () => {
        // This is the key difference from the % operator
        expect(mod(-10, 3)).toBe(2); // In contrast to -10 % 3 === -1
        expect(mod(-1, 3)).toBe(2);
        expect(mod(10, -3)).toBe(-2); // Result sign should match the divisor
    });

    it('should pass a brutal stress test with zeros and floats', () => {
        expect(mod(5, 1)).toBe(0);
        expect(mod(5, 5)).toBe(0);
        // Behavior with zero can be NaN, which is acceptable.
        expect(mod(5, 0)).toBeNaN();
        expect(mod(0, 5)).toBe(0);
        
        // Floats (behavior can vary, but we test for consistency)
        expect(mod(5.5, 2)).toBe(1.5);
        expect(mod(-5.5, 2)).toBe(0.5);
    });

});

//--

describe('Function: isNegativeZero', () => {

    it('should return true only for negative zero', () => {
        expect(isNegativeZero(-0)).toBe(true);
    });

    it('should return false for positive zero', () => {
        expect(isNegativeZero(0)).toBe(false);
    });

    it('should pass a brutal stress test with other non-zero values', () => {
        expect(isNegativeZero(1)).toBe(false);
        expect(isNegativeZero(-1)).toBe(false);
        expect(isNegativeZero(Infinity)).toBe(false);
        expect(isNegativeZero(-Infinity)).toBe(false);
        expect(isNegativeZero(NaN)).toBe(false);
        expect(isNegativeZero(Number.MIN_VALUE)).toBe(false);
    });

});