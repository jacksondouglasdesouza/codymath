// src/algebra/arithmetic.ts

import { constants } from '../constants/constants';

/**
 * @fileoverview Core arithmetic, number theory, and utility functions.
 * @version 0.4.0
 * @license MIT
 * @author Jackson Douglas de Souza
 * @see {@link https://www.linkedin.com/in/jacksondouglasdsouza/|LinkedIn}
 * @see {@link https://github.com/jacksondouglasdesouza/codymath|GitHub}
 * @description
 * This module forms the foundational layer of the CodyMath library, providing a comprehensive
 * suite of basic arithmetic, number theory, and utility functions.
 *
 * The goal is to create robust, well-tested primitives that can be used to build
 * more complex mathematical functionalities in other modules, ensuring internal consistency
 * and reliability.
 * @see
 * Sources & References:
 * 1. National Institute of Standards and Technology (NIST). (2023). *Digital Library of Mathematical Functions*. U.S. Department of Commerce. Retrieved from https://dlmf.nist.gov/
 * 2. Wolfram Research, Inc. *Wolfram MathWorld*. Retrieved from https://mathworld.wolfram.com/
 * 3. Spiegel, M. R., et al. (2018). *Schaum's Outline of Mathematical Handbook of Formulas and Tables, 5th Edition*. McGraw-Hill Education.
 * 4. ECMA International. (2025). *ECMAScript® 2025 Language Specification*. Retrieved from https://tc39.es/ecma262/
 */

/**
 * Calculates the sum of a set of numbers.
 * @param {...number} numbers A list of numbers to sum.
 * @returns {number} The total sum. Returns 0 if no numbers are provided.
 */
export function sum(...numbers: number[]): number {
    return numbers.reduce((total, current) => total + current, 0);
}

/**
 * Calculates the difference between two numbers (a - b).
 * @param {number} a The number to subtract from (minuend).
 * @param {number} b The number to subtract (subtrahend).
 * @returns {number} The result of the subtraction.
 */
export function subtract(a: number, b: number): number {
    return a - b;
}

/**
 * Calculates the product of a set of numbers.
 * @param {...number} numbers A list of numbers to multiply.
 * @returns {number} The total product. Returns 1 if no numbers are provided (multiplicative identity).
 */
export function multiply(...numbers: number[]): number {
    return numbers.reduce((total, current) => total * current, 1);
}

/**
 * Divides one number by another (a / b).
 * Throws an error if division by zero is attempted.
 * @param {number} a The dividend.
 * @param {number} b The divisor.
 * @returns {number} The result of the division.
 * @throws {Error} If the divisor `b` is 0.
 */
export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

/**
 * Calculates the arithmetic mean (average) of a set of numbers.
 * @param {...number} numbers A list of numbers to average.
 * @returns {number} The arithmetic mean. Returns NaN if no numbers are provided.
 */
export function mean(...numbers: number[]): number {
    if (numbers.length === 0) {
        return NaN;
    }
    return sum(...numbers) / numbers.length;
}

/**
 * Calculates the value of a base raised to the power of an exponent ($base^{exponent}$).
 * @param {number} base The base number.
 * @param {number} exponent The exponent.
 * @returns {number} The result of the exponentiation.
 */
export function power(base: number, exponent: number): number {
    return base ** exponent;
}

/**
 * Calculates the square root of a non-negative number ($\sqrt{n}$).
 * @param {number} n The number to calculate the square root of. Must be non-negative.
 * @returns {number} The square root of `n`. Returns `NaN` if `n` is negative.
 */
export function sqrt(n: number): number {
    return Math.sqrt(n);
}

/**
 * Calculates the cube root of a number ($\sqrt[3]{n}$).
 * @param {number} n The number to calculate the cube root of.
 * @returns {number} The cube root of `n`.
 */
export function cbrt(n: number): number {
    return Math.cbrt(n);
}

/**
 * Calculates the nth root of a number ($ \sqrt[root]{n} $).
 * Handles negative numbers correctly for odd roots.
 * @param {number} n The radicand (the number to find the root of).
 * @param {number} root The degree of the root (e.g., 2 for square root).
 * @returns {number} The nth root of the number.
 */
export function nthRoot(n: number, root: number): number {
    if (n < 0 && root % 2 === 0) {
        return NaN;
    }

    if (n < 0) {
        return -power(-n, 1 / root);
    }

    return power(n, 1 / root);
}

/**
 * Calculates the value of Euler's number `e` raised to the power of `n` ($e^n$).
 * @param {number} n The exponent.
 * @returns {number} The result of e^n.
 */
export function exp(n: number): number {
    return power(constants.e, n);
}

/**
 * Calculates the natural logarithm (base e) of a number ($ln(n)$).
 * @param {number} n The number to calculate the logarithm of. Must be positive.
 * @returns {number} The natural logarithm of `n`. Returns `NaN` if `n` is negative and `-Infinity` if `n` is 0.
 */
export function ln(n: number): number {
    return Math.log(n);
}

/**
 * Calculates the common logarithm (base 10) of a number ($log_{10}(n)$).
 * @param {number} n The number to calculate the logarithm of. Must be positive.
 * @returns {number} The common logarithm of `n`. Returns `NaN` if `n` is negative and `-Infinity` if `n` is 0.
 */
export function log10(n: number): number {
    return Math.log10(n);
}

/**
 * Calculates the binary logarithm (base 2) of a number ($log_{2}(n)$).
 * @param {number} n The number to calculate the logarithm of. Must be positive.
 * @returns {number} The binary logarithm of `n`. Returns `NaN` if `n` is negative and `-Infinity` if `n` is 0.
 */
export function log2(n: number): number {
    return Math.log2(n);
}

/**
 * Calculates the logarithm of a number `n` with a custom `base` ($log_{base}(n)$).
 * @param {number} n The number to calculate the logarithm of. Must be positive.
 * @param {number} base The base of the logarithm. Must be positive and not equal to 1.
 * @returns {number} The logarithm of `n` with the specified `base`. Returns `NaN` for invalid bases.
 */
export function log(n: number, base: number): number {
    if (base <= 0 || base === 1) {
        return NaN;
    }

    return divide(ln(n), ln(base));
}

/**
 * Finds the Greatest Common Divisor (GCD) of two integers using the Euclidean algorithm.
 * Floats are truncated, and the absolute value of the numbers is used.
 * @param {number} a The first integer.
 * @param {number} b The second integer.
 * @returns {number} The greatest common divisor of a and b.
 */
export function gcd(a: number, b: number): number {
    let numA = Math.abs(Math.trunc(a));
    let numB = Math.abs(Math.trunc(b));

    while (numB) {
        [numA, numB] = [numB, numA % numB];
    }

    return numA;
}

/**
 * Finds the Least Common Multiple (LCM) of two integers.
 * The calculation is based on the formula: lcm(a, b) = (|a * b|) / gcd(a, b).
 * @param {number} a The first integer. Floats are truncated.
 * @param {number} b The second integer. Floats are truncated.
 * @returns {number} The least common multiple of a and b. Returns 0 if either a or b is 0.
 */
export function lcm(a: number, b: number): number {
    const numA = Math.abs(Math.trunc(a));
    const numB = Math.abs(Math.trunc(b));

    // The LCM of any number and 0 is 0.
    if (numA === 0 || numB === 0) {
        return 0;
    }

    // Using the formula: |a * b| / gcd(a, b)
    // We can use numA and numB directly in gcd because they are already processed.
    return (numA * numB) / gcd(numA, numB);
}

/**
 * Checks if a number is prime using an optimized trial division method.
 * A number is prime if it is greater than 1 and has no positive divisors other than 1 and itself.
 * @param {number} n The integer to check. Floats are truncated.
 * @returns {boolean} `true` if the number is prime, otherwise `false`.
 */
export function isPrime(n: number): boolean {
    const num = Math.trunc(n);

    if (num <= 1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    const limit = sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

/**
 * Checks if a number is even.
 * @param {number} n The integer to check. Floats are truncated.
 * @returns {boolean} `true` if the number is even, otherwise `false`.
 */
export function isEven(n: number): boolean {
    const num = Math.trunc(n);
    return num % 2 === 0;
}

/**
 * Checks if a number is odd.
 * @param {number} n The integer to check. Floats are truncated.
 * @returns {boolean} `true` if the number is odd, otherwise `false`.
 */
export function isOdd(n: number): boolean {
    // An odd number is simply not an even number.
    // This ensures internal consistency with isEven().
    return !isEven(n);
}

/**
 * Calculates the factorial of a non-negative integer (n!).
 * The factorial of n is the product of all positive integers up to n.
 * Note: Factorials grow very quickly. This function will return `Infinity` for n > 170.
 * @param {number} n The non-negative integer. Floats are truncated.
 * @returns {number} The factorial of n. Returns 1 for n = 0. Returns NaN for negative inputs.
 */
export function factorial(n: number): number {
    const num = Math.trunc(n);

    // Factorial is not defined for negative numbers.
    if (num < 0) {
        return NaN;
    }

    if (num === 0) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}

/**
 * Returns the absolute value of a number.
 * The absolute value of a number is its distance from zero, always non-negative.
 * @param {number} n The number to find the absolute value of.
 * @returns {number} The absolute value of the number.
 */
export function absolute(n: number): number {
    return Math.abs(n);
}

/**
 * Rounds a number to a specified number of decimal places.
 * Supports rounding to negative decimal places (e.g., rounding to the nearest 10 or 100).
 * @param {number} n The number to round.
 * @param {number} decimals The number of decimal places to round to. Can be negative. Defaults to 0.
 * @returns {number} The rounded number.
 */
export function round(n: number, decimals: number = 0): number {
    const d = Math.trunc(decimals);
    
    const factor = power(10, d);
    const rounded = Math.round(n * factor) / factor;
    
    return Number(rounded.toPrecision(15));
}

/**
 * Returns the largest integer less than or equal to a given number (rounding down).
 * @param {number} n The number to apply the floor operation to.
 * @returns {number} The largest integer less than or equal to n.
 */
export function floor(n: number): number {
    return Math.floor(n);
}

/**
 * Returns the smallest integer greater than or equal to a given number (rounding up).
 * @param {number} n The number to apply the ceil operation to.
 * @returns {number} The smallest integer greater than or equal to n.
 */
export function ceil(n: number): number {
    return Math.ceil(n);
}

/**
 * Returns the integer part of a number by removing any fractional digits.
 * @param {number} n The number to truncate.
 * @returns {number} The integer part of the number.
 */
export function trunc(n: number): number {
    return Math.trunc(n);
}

/**
 * Returns the sign of a number, indicating whether the number is positive, negative, or zero.
 * @param {number} n The number to check the sign of.
 * @returns {number} -1 if n is negative, 0 if n is zero, 1 if n is positive.
 */
export function sign(n: number): number {
    return Math.sign(n);
}

/**
 * Clamps a number within the inclusive lower and upper bounds.
 * @param {number} value The number to clamp.
 * @param {number} min The lower bound.
 * @param {number} max The upper bound.
 * @returns {number} The clamped number. Returns NaN if any argument is NaN.
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * Performs linear interpolation between two numbers.
 * @param {number} a The start point.
 * @param {number} b The end point.
 * @param {number} t The interpolation factor, typically between 0 and 1.
 * @returns {number} The interpolated value.
 */
export function lerp(a: number, b: number, t: number): number {
    return a * (1 - t) + b * t;
}

/**
 * Checks if a number is within a given range (inclusive).
 * @param {number} n The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} `true` if the number is within the range, otherwise `false`.
 */
export function isInRange(n: number, start: number, end: number): boolean {
    return n >= start && n <= end;
}

/**
 * Calculates the mathematical modulo of two numbers.
 * This differs from the JavaScript remainder operator (%) in its handling of negative numbers.
 * The result will always have the same sign as the divisor.
 * @param {number} a The dividend.
 * @param {number} b The divisor.
 * @returns {number} The result of the modulo operation.
 */
export function mod(a: number, b: number): number {
    return ((a % b) + b) % b;
}

/**
 * Checks if a number is negative zero (-0).
 * @param {number} n The number to check.
 * @returns {boolean} `true` if the number is negative zero, otherwise `false`.
 */
export function isNegativeZero(n: number): boolean {
    return n === 0 && (1 / n) === -Infinity;
}