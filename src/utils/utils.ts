// src/utils/utils.ts

import { absolute, divide, floor, log2, multiply, power, round, sqrt, subtract, sum, trunc } from "../algebra/arithmetic";
import { dictionaries } from "./toWords/index";

/**
 * @fileoverview A collection of high-level utility, statistical, and real-world calculation functions.
 * @version 0.5.0
 * @license MIT
 * @author Jackson Douglas de Souza
 * @see {@link https://www.linkedin.com/in/jacksondouglasdsouza/|LinkedIn}
 * @see {@link https://github.com/jacksondouglasdesouza/codymath|GitHub}
 * @description
 * This module provides a wide range of high-level utility functions designed to solve
 * common, practical problems in domains like statistics, finance, animation, natural
 * language processing (number-to-word), and data formatting.
 * * @see
 * Sources & References:
 * * // Mathematical & Computational Foundations
 * 1. National Institute of Standards and Technology (NIST). (2023). *Digital Library of Mathematical Functions*. U.S. Department of Commerce.
 * 2. Wolfram Research, Inc. *Wolfram MathWorld*.
 * 3. Spiegel, M. R., et al. (2018). *Schaum's Outline of Mathematical Handbook of Formulas and Tables, 5th Edition*. McGraw-Hill Education.
 * 4. ECMA International. (2025). *ECMAScript® 2025 Language Specification*.
 * * // Linguistic & Number-to-Word Rules
 * 5. Real Academia Española (RAE). *Diccionario panhispánico de dudas*. for Spanish numeral writing rules.
 * 6. Academia Brasileira de Letras (ABL). *Vocabulário Ortográfico da Língua Portuguesa*. for Portuguese vocabulary and standards.
 * 7. Cunha, C., & Cintra, L. F. L. *Nova Gramática do Português Contemporâneo*. for detailed Portuguese grammar rules.
 * 8. The University of Chicago. *The Chicago Manual of Style, 17th Edition*. for English numeral writing conventions.
 */


/**
 * Re-maps a number from one range to another.
 * @param {number} value The incoming value to be converted.
 * @param {number} inMin The lower bound of the value's current range.
 * @param {number} inMax The upper bound of the value's current range.
 * @param {number} outMin The lower bound of the value's target range.
 * @param {number} outMax The upper bound of the value's target range.
 * @returns {number} The re-mapped number.
 */
export function map(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
    if (inMin === inMax) {
        return outMin;
    }
    const term1 = subtract(value, inMin);
    const term2 = subtract(outMax, outMin);
    const term3 = subtract(inMax, inMin);
    
    const multiplicationResult = multiply(term1, term2);
    const divisionResult = divide(multiplicationResult, term3);
    const finalResult = sum(divisionResult, outMin);

    return finalResult;
}


/**
 * Generates a pseudo-random floating-point number within a specified range.
 *
 * @param {number} [min=0] The lower bound of the range (inclusive).
 * @param {number} [max=1] The upper bound of the range (exclusive).
 * @returns {number} A random number such that min <= result < max.
 * @description
 * If no arguments are provided, it behaves identically to `Math.random()`,
 * returning a value between 0 (inclusive) and 1 (exclusive).
 * The implementation uses the library's own arithmetic functions for consistency.
 */
export function random(min: number = 0, max: number = 1): number {
    const baseRandom = Math.random();
    const range = subtract(max, min);
    const scaledRandom = multiply(baseRandom, range);
    return sum(scaledRandom, min);
}

/**
 * Generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).
 *
 * @returns {number} A random number in the range [0, 1).
 * @description
 * This is a direct wrapper for the standard `Math.random()` function,
 * providing a foundational random number generator for the library. It is
 * useful when a simple random float is needed without a specific range.
 */
export function randomFloat(): number {
    return Math.random();
}

/**
 * Checks if two floating-point numbers are approximately equal within a given tolerance.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @param {number} [epsilon=0.00001] The small tolerance within which the numbers are considered equal. Defaults to 1e-5.
 * @returns {boolean} `true` if the absolute difference between a and b is less than epsilon, otherwise `false`.
 */
export function isNearlyEqual(a: number, b: number, epsilon: number = 0.00001): boolean {
    const difference = subtract(a, b);
    const absoluteDifference = absolute(difference);

    return absoluteDifference < epsilon;
}

/**
 * Checks if a value is a power of two.
 * @param {number | bigint} n The number or BigInt to check.
 * @returns {boolean} `true` if the value is an integer power of two, otherwise `false`.
 * @description
 * This function is optimized for performance using bitwise operations and is robust for
 * both standard JavaScript numbers and arbitrarily large BigInts. It correctly

 * handles non-integers by returning false.
 */
export function isPowerOfTwo(n: number | bigint): boolean {
    // A primeira verificação, que funciona para ambos os tipos, é se o número é positivo.
    // Usamos `> 0` e `> 0n` para evitar erros de tipo.
    if (n <= 0) {
        return false;
    }

    // Se for do tipo 'number', primeiro garantimos que é um inteiro.
    if (typeof n === 'number') {
        if (!Number.isInteger(n)) {
            return false;
        }
        // Lógica bitwise para 'number'
        return (n & (n - 1)) === 0;
    }

    // Se chegou aqui, 'n' é um 'bigint'. A lógica bitwise é a mesma, mas com literais BigInt.
    // BigInts são sempre inteiros, então não precisamos da verificação isInteger.
    return (n & (n - 1n)) === 0n;
}

/**
 * Calculates the Euclidean distance between two points in a 2D plane.
 * @param {number} x1 The x-coordinate of the first point.
 * @param {number} y1 The y-coordinate of the first point.
 * @param {number} x2 The x-coordinate of the second point.
 * @param {number} y2 The y-coordinate of the second point.
 * @returns {number} The Euclidean distance between the two points.
 */
export function distance(x1: number, y1: number, x2: number, y2: number): number {

    const deltaX = subtract(x2, x1);
    const deltaY = subtract(y2, y1);
    const xSquared = power(deltaX, 2);
    const ySquared = power(deltaY, 2);
    const sumOfSquares = sum(xSquared, ySquared);
    
    return sqrt(sumOfSquares);
}

/**
 * Formats a number as a currency string.
 * @param {number} n The number to format.
 * @param {object} [options] Configuration options for formatting.
 * @param {string} [options.currencySymbol='$'] The currency symbol to prepend.
 * @param {string} [options.decimalSeparator='.'] The character to use for the decimal separator.
 * @param {string} [options.thousandsSeparator=','] The character to use for the thousands separator.
 * @param {number} [options.decimals=2] The number of decimal places.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(
    n: number,
    options: {
        currencySymbol?: string;
        decimalSeparator?: string;
        thousandsSeparator?: string;
        decimals?: number;
    } = {}
): string {
    const {
        currencySymbol = '$',
        decimalSeparator = '.',
        thousandsSeparator = ',',
        decimals = 2
    } = options;

    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
    
    let formatted = formatter.format(n);

    if (decimalSeparator !== '.' || thousandsSeparator !== ',') {
        const parts = formatted.split('.');
        parts[0] = parts[0].replace(/,/g, thousandsSeparator);
        formatted = parts.join(decimalSeparator);
    }
    
    return `${currencySymbol}${formatted}`;
}


//-- toWordsPure and theWordsCurrency functions --//

/**
 * @internal
 * Defines the required structure for a language dictionary.
 */
interface ToWordsDictionary {
    pureConverter: (n: number) => string;
    currencyConverter: (n: number, options: {
        majorSingular: string;
        majorPlural: string;
        minorSingular: string;
        minorPlural: string;
    }) => string;

    currencyDefaults: {
        majorSingular: string;
        majorPlural: string;
        minorSingular: string;
        minorPlural: string;
    };
}

//-- toWordsPure --//

/**
 * Converts a number into its written-out "pure" representation (e.g., 123.45 -> "one hundred twenty-three point four five").
 * @param {number} n The number to convert. The integer part must be a safe integer.
 * @param {string} [lang='en-US'] The target language code (e.g., 'en-US', 'pt-BR').
 * @returns {string} The number represented in words.
 */
export function toWordsPure(n: number, lang: string = 'en-US'): string {
    const dictionary: ToWordsDictionary = dictionaries[lang.toLowerCase() as keyof typeof dictionaries];

    if (!dictionary) {
        return `Language '${lang}' is not supported.`;
    }
    if (typeof n !== 'number' || !isFinite(n)) {
        return "Invalid number input.";
    }
    return dictionary.pureConverter(n);
}

//-- toWordsCurrency --// 

/**
 * Converts a number into its written-out currency representation.
 * @param {number} n The number to convert. The integer part must be a safe integer.
 * @param {object} [options] Configuration for the currency conversion.
 * @param {string} [options.lang='en-US'] The target language code.
 * @param {string} [options.majorSingular] The singular name for the main currency unit (e.g., 'dollar').
 * @param {string} [options.majorPlural] The plural name for the main currency unit (e.g., 'dollars').
 * @param {string} [options.minorSingular] The singular name for the fractional unit (e.g., 'cent').
 * @param {string} [options.minorPlural] The plural name for the fractional unit (e.g., 'cents').
 * @returns {string} The number represented in currency words.
 */
export function toWordsCurrency(
    n: number,
    options: {
        lang?: string;
        majorSingular?: string;
        majorPlural?: string;
        minorSingular?: string;
        minorPlural?: string;
    } = {}
): string {
    const { lang = 'en-US', ...currencyOptions } = options;
    const dictionary = dictionaries[lang.toLowerCase() as keyof typeof dictionaries];
    if (!dictionary || !dictionary.currencyConverter) {
        return `Currency conversion for language '${lang}' is not supported.`;
    }
    if (typeof n !== 'number' || !isFinite(n)) {
        return "Invalid number input.";
    }
    const finalCurrencyOptions = { ...dictionary.currencyDefaults, ...currencyOptions };
    return dictionary.currencyConverter(n, finalCurrencyOptions);
}

//-- 

/**
 * Returns the integer part of a number, throwing an error for unsafe integers.
 * @param {number} n The number to get the integer part from.
 * @returns {number} The integer part of the number.
 * @throws {Error} If the number is outside the safe integer range.
 * @description This function ensures safety by first checking if the number is within
 * JavaScript's safe integer bounds before returning the truncated value.
 * @see `trunc`
 */
export function getIntegerPart(n: number): number {
    if (n > Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER) {
        throw new Error('Input number is outside the safe integer range and may cause precision loss.');
    }
    return trunc(n);
}

//--

/**
 * Returns the fractional part of a number, correcting for floating-point inaccuracies.
 * @param {number} n The number to get the fractional part from.
 * @returns {number} The fractional part of the number.
 * @description This function calculates the fractional part and cleans the result
 * to avoid common floating-point precision errors, such as those that occur in `0.1 + 0.2`.
 * It leverages the library's own `getIntegerPart` and `subtract`.
 */
export function getFractionalPart(n: number): number {
    // Para números fora da faixa segura, a parte fracionária já foi perdida, então retornamos 0.
    if (n > Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER) {
        return 0;
    }

    const integerPart = getIntegerPart(n);
    const fractional = subtract(n, integerPart);
    
    return parseFloat(fractional.toFixed(12));
}

//--

/**
 * Counts the number of digits in the integer part of a number.
 * @param {number} n The number to count the digits of.
 * @returns {number} The number of digits in the integer part.
 * @description This function counts the digits of the integer part of a number,
 * ignoring the sign and any fractional digits, as per our agreed-upon rules.
 * It leverages the library's own `absolute` and `getIntegerPart` functions.
 * @see `absolute`
 * @see `getIntegerPart`
 */
export function countDigits(n: number): number {
    const absNum = absolute(n);
    const integerPart = getIntegerPart(absNum);
    return integerPart.toString().length;
}

//--

/**
 * Counts the number of digits in both the integer and fractional parts of a number.
 * @param {number} n The number to analyze.
 * @returns {{integer: number, fractional: number}} An object containing the count of digits.
 * @description Returns an object with the count of digits for the integer and fractional
 * parts of a number, ignoring the sign.
 * e.g., `countDigitsDetailed(-123.45)` returns `{ integer: 3, fractional: 2 }`.
 * @see `countDigits`
 */
export function countDigitsDetailed(n: number): { integer: number, fractional: number } {
    const absNum = absolute(n);
    const integerCount = countDigits(absNum);
    let fractionalCount = 0;
    const parts = absNum.toString().split('.');
    
    if (parts.length > 1) {
        fractionalCount = parts[1].length;
    }
    
    return {
        integer: integerCount,
        fractional: fractionalCount
    };
}

//--


/**
 * Pads the integer part of a number with leading zeros to a specified length.
 * @param {number} n The number to pad.
 * @param {number} length The total desired length of the number's integer part as a string.
 * @returns {string} The zero-padded number as a string.
 * @description
 * Handles negative numbers by placing the sign before the padding (e.g., -15 -> "-0015").
 * Ignores the fractional part of the number, considering only the integer part.
 * If the number's integer part is already longer than the target length,
 * it returns the number as a string without modification.
 * @see `absolute`
 * @see `getIntegerPart`
 */
export function padZeroes(n: number, length: number): string {
    const isNegative = n < 0;
    
    // Usamos nossas funções para tratar negativos e decimais, como combinado (dogfooding).
    const absNum = absolute(n);
    const integerPart = getIntegerPart(absNum);
    
    const numberString = integerPart.toString();
    const paddedString = numberString.padStart(length, '0');
    
    return isNegative ? `-${paddedString}` : paddedString;
}

//--

