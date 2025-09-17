// src/algebra/arithmetic.ts

import { constants } from '../constants/constants';

/**
 * @fileoverview Core arithmetic, number theory, and utility functions.
 * @version 0.3.1
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

