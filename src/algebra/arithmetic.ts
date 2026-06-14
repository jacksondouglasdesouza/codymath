// src/algebra/arithmetic.ts

import { constants } from "../constants/constants";

/**
 * @fileoverview Core arithmetic, number theory, and utility functions.
 * @version 0.7.0
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
 *
 * Sources & References:
 * 1. National Institute of Standards and Technology (NIST). (2023). *Digital Library of Mathematical Functions*. U.S. Department of Commerce. Retrieved from https://dlmf.nist.gov/
 * 2. Wolfram Research, Inc. *Wolfram MathWorld*. Retrieved from https://mathworld.wolfram.com/
 * 3. Spiegel, M. R., et al. (2018). *Schaum's Outline of Mathematical Handbook of Formulas and Tables, 5th Edition*. McGraw-Hill Education.
 * 4. ECMA International. (2025). *ECMAScript® 2025 Language Specification*. Retrieved from https://tc39.es/ecma262/
 * 5. Knuth, D. E. (1997). *The Art of Computer Programming, Vol. 2: Seminumerical Algorithms, 3rd Edition*. Addison-Wesley.
 * 6. Cormen, T. H., et al. (2022). *Introduction to Algorithms, 4th Edition*. MIT Press.
 * 7. Goldberg, D. (1991). *What Every Computer Scientist Should Know About Floating-Point Arithmetic*. ACM Computing Surveys, 23(1), 5-48.
 * 8. OEIS Foundation Inc. *The On-Line Encyclopedia of Integer Sequences*. Retrieved from https://oeis.org/
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
      throw new Error("Division by zero is not allowed.");
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
 * Uses the native Math.exp for maximum floating-point precision.
 * @param {number} n The exponent.
 * @returns {number} The result of e^n.
 */
export function exp(n: number): number {
   return Math.exp(n);
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
 * Non-finite inputs (NaN, ±Infinity) return NaN — without this guard, the
 * Euclidean loop would never terminate, since NaN propagates through the
 * % operator and NaN !== 0 is always true.
 * @param {number} a The first integer.
 * @param {number} b The second integer.
 * @returns {number} The greatest common divisor of a and b. Returns NaN if
 *                   either input is NaN or ±Infinity.
 */
export function gcd(a: number, b: number): number {
   // Non-finite inputs would make the % operator produce NaN, and since
   // NaN !== 0 is always true, the Euclidean loop would never terminate.
   if (!Number.isFinite(a) || !Number.isFinite(b)) {
      return NaN;
   }

   let numA = Math.abs(Math.trunc(a));
   let numB = Math.abs(Math.trunc(b));

   while (numB !== 0) {
      // Using a temp variable instead of array destructuring for better GC performance.
      let temp = numB;
      numB = numA % numB;
      numA = temp;
   }

   return numA;
}

/**
 * Finds the Least Common Multiple (LCM) of two integers.
 * The calculation is based on the formula: lcm(a, b) = (|a| / gcd(a, b)) * |b|.
 * @param {number} a The first integer. Floats are truncated.
 * @param {number} b The second integer. Floats are truncated.
 * @returns {number} The least common multiple of a and b. Returns 0 if either
 *                   a or b is 0, or NaN if either input is non-finite
 *                   (inherited from gcd).
 */
export function lcm(a: number, b: number): number {
   const numA = Math.abs(Math.trunc(a));
   const numB = Math.abs(Math.trunc(b));

   if (numA === 0 || numB === 0) {
      return 0;
   }

   // Dividing before multiplying avoids premature overflow beyond Number.MAX_SAFE_INTEGER.
   // Since gcd(a, b) always divides a exactly, (numA / gcd) is guaranteed to be an integer.
   return (numA / gcd(numA, numB)) * numB;
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

   // Using i * i <= num instead of i <= Math.sqrt(num) avoids any floating-point
   // imprecision from Math.sqrt and keeps the comparison in pure integer arithmetic.
   for (let i = 3; i * i <= num; i += 2) {
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
 *
 * Precision note: results are exact only up to 18! (the last value that fits within
 * Number.MAX_SAFE_INTEGER). From 23! onward the returned value is an approximation due to
 * IEEE-754 limits, and the function returns Infinity for n > 170. For exact large factorials,
 * a BigInt-based implementation would be required.
 *
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
 * Uses Number.EPSILON to correct binary floating-point representation errors, applied to the
 * magnitude so that rounding is symmetric ("half away from zero") for both positive and negative
 * values. toPrecision(15) cleans up any residual noise in the output.
 * @param {number} n The number to round.
 * @param {number} decimals The number of decimal places to round to. Can be negative. Defaults to 0.
 * @returns {number} The rounded number.
 */
export function round(n: number, decimals: number = 0): number {
   const d = Math.trunc(decimals);
   const factor = power(10, d);

   // EPSILON is applied to the magnitude and the sign is reapplied afterwards,
   // guaranteeing symmetric "half away from zero" rounding on both sides.
   const rounded =
      (Math.sign(n) *
         Math.round(Math.abs(n) * factor + Number.EPSILON * factor)) /
      factor;

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
 * If min > max, max takes precedence (Math.min/Math.max semantics) — e.g.,
 * clamp(50, 100, 0) returns 0.
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
 * @returns {number} The result of the modulo operation. Returns NaN if the
 *                   divisor is 0.
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
   return n === 0 && 1 / n === -Infinity;
}

/**
 * Checks if two integers are coprime (relatively prime).
 * Two numbers are coprime when their only common positive divisor is 1,
 * i.e., gcd(a, b) === 1. This is a fundamental concept in number theory,
 * used in cryptography (e.g., RSA key generation), modular arithmetic,
 * and irreducible fractions.
 *
 * Note: coprimality is defined on the absolute values, so coprime(-3, 4)
 * is true. Since gcd(0, 0) === 0, coprime(0, 0) returns false; and because
 * gcd(0, n) === |n|, zero is only coprime with 1 and -1.
 *
 * @param {number} a The first integer. Floats are truncated.
 * @param {number} b The second integer. Floats are truncated.
 * @returns {boolean} `true` if a and b are coprime, otherwise `false`.
 */
export function coprime(a: number, b: number): boolean {
   return gcd(a, b) === 1;
}

/**
 * Safely divides one number by another, returning a fallback value instead of
 * throwing when the divisor is 0. This is the non-throwing counterpart of divide(),
 * useful in data pipelines, statistics, and UI code where a division by zero
 * should degrade gracefully instead of interrupting execution.
 *
 * @param {number} a The dividend.
 * @param {number} b The divisor.
 * @param {number} fallback The value returned when `b` is 0. Defaults to 0.
 * @returns {number} The result of a / b, or `fallback` if b is 0.
 */
export function safeDiv(a: number, b: number, fallback: number = 0): number {
   if (b === 0) {
      return fallback;
   }
   return divide(a, b);
}

/**
 * Returns the number of digits of an integer, ignoring the sign.
 * Floats are truncated before counting (e.g., digits(45.9) counts digits(45) = 2).
 * Zero has exactly one digit.
 *
 * Implementation note: counting is done via string conversion of the truncated
 * absolute value, which is exact for all safe integers — unlike log10-based
 * approaches, which suffer from floating-point edge cases (e.g., log10(1000)
 * can evaluate to 2.9999...).
 *
 * Range note: results are guaranteed only within Number.MAX_SAFE_INTEGER
 * (up to 16 digits). For |n| >= 1e21, JavaScript serializes numbers in
 * exponential notation (e.g., "1e+21"), so the returned count would not
 * reflect the actual decimal digits.
 *
 * @param {number} n The integer to count digits of. Floats are truncated, sign is ignored.
 * @returns {number} The number of digits. Returns NaN if `n` is NaN or ±Infinity.
 */
export function digits(n: number): number {
   if (!Number.isFinite(n)) {
      return NaN;
   }

   return String(Math.abs(Math.trunc(n))).length;
}

/**
 * Calculates the sum of the squares of a set of numbers ($\sum x_i^2$).
 * This is a fundamental building block in statistics (variance, standard
 * deviation) and geometry (Euclidean distance, hypotenuse via hypot).
 *
 * Note: squaring makes every term non-negative, so the result is always >= 0
 * for real inputs. Returns 0 if no numbers are provided (empty sum identity,
 * consistent with sum()).
 *
 * @param {...number} numbers A list of numbers to square and sum.
 * @returns {number} The sum of the squares. Returns 0 if no numbers are provided.
 */
export function sumOfSquares(...numbers: number[]): number {
   return numbers.reduce((total, current) => total + power(current, 2), 0);
}

/**
 * Returns all positive divisors of an integer, in ascending order.
 * The sign is ignored and floats are truncated (e.g., divisors(-12.9) returns
 * the divisors of 12). Divisors are found in O(√n) by iterating only up to
 * the square root and collecting each divisor pair (i, n/i) at once.
 *
 * Edge cases: divisors(0) returns [] (every positive integer divides 0, so the
 * set is infinite and cannot be enumerated); divisors(1) returns [1].
 *
 * @param {number} n The integer to find the divisors of. Floats are truncated, sign is ignored.
 * @returns {number[]} An array with all positive divisors in ascending order.
 *                     Returns [] for 0 and non-finite inputs.
 */
export function divisors(n: number): number[] {
   if (!Number.isFinite(n)) {
      return [];
   }

   const num = Math.abs(Math.trunc(n));

   if (num === 0) {
      return [];
   }

   const small: number[] = [];
   const large: number[] = [];

   // O(√n): each i <= √num that divides num yields the pair (i, num / i).
   for (let i = 1; i * i <= num; i++) {
      if (num % i === 0) {
         small.push(i);
         const pair = num / i;
         if (pair !== i) {
            large.push(pair); // avoids duplicating the square root of perfect squares
         }
      }
   }

   // small is ascending; large was collected descending-pair-wise, so reverse it.
   return small.concat(large.reverse());
}

/**
 * Returns the nth Fibonacci number (0-indexed: F(0) = 0, F(1) = 1).
 * The sequence is defined by F(n) = F(n-1) + F(n-2).
 *
 * Implemented iteratively for O(n) time and O(1) space — no recursion,
 * so there is no risk of stack overflow for large n.
 *
 * Precision note: F(78) = 8944394323791464 is the last Fibonacci number that
 * fits within Number.MAX_SAFE_INTEGER. From F(79) onward, results are
 * approximations due to IEEE-754 limits.
 *
 * @param {number} n The 0-based index in the Fibonacci sequence. Floats are truncated.
 * @returns {number} The nth Fibonacci number. Returns NaN for negative or non-finite inputs.
 */
export function fibonacci(n: number): number {
   if (!Number.isFinite(n)) {
      return NaN;
   }

   const num = Math.trunc(n);

   if (num < 0) {
      return NaN;
   }

   if (num === 0) {
      return 0;
   }

   let prev = 0;
   let curr = 1;

   for (let i = 2; i <= num; i++) {
      // Same temp-variable pattern as gcd: avoids array destructuring allocations.
      const next = prev + curr;
      prev = curr;
      curr = next;
   }

   return curr;
}

/**
 * Performs the inverse of linear interpolation: given a value, returns the
 * interpolation factor `t` such that lerp(a, b, t) === value.
 * For value === a returns 0; for value === b returns 1; values outside [a, b]
 * extrapolate to t < 0 or t > 1 (mirroring lerp's extrapolation behavior).
 *
 * This is the foundation of mapRange and of any normalization of a value
 * within a known interval (progress bars, gradients, sensor calibration).
 *
 * Edge case: when a === b the interval is degenerate (zero length), so no
 * meaningful t exists — returns NaN rather than an arbitrary value.
 *
 * @param {number} a The start of the range.
 * @param {number} b The end of the range.
 * @param {number} value The value to find the interpolation factor of.
 * @returns {number} The factor t such that lerp(a, b, t) === value. Returns NaN if a === b.
 */
export function inverseLerp(a: number, b: number, value: number): number {
   if (a === b) {
      return NaN;
   }

   return (value - a) / (b - a);
}

/**
 * Finds the Greatest Common Divisor (GCD) of any quantity of integers.
 * Built on top of gcd() via reduction, leveraging the associativity of the
 * GCD operation: gcd(a, b, c) === gcd(gcd(a, b), c).
 *
 * Floats are truncated and signs are ignored (inherited from gcd).
 * Early exit: if the running GCD reaches 1, no further number can change it,
 * so the reduction stops immediately (1 is the absorbing element).
 *
 * @param {...number} numbers The integers to find the GCD of.
 * @returns {number} The GCD of all numbers. Returns 0 if no numbers are
 *                   provided (identity element: gcd(0, x) === x) or NaN if
 *                   any input is non-finite.
 */
export function gcdMultiple(...numbers: number[]): number {
   if (numbers.some((n) => !Number.isFinite(n))) {
      return NaN;
   }

   let result = 0; // identity: gcd(0, x) === x

   for (const n of numbers) {
      result = gcd(result, n);

      // 1 is absorbing: gcd(1, anything) === 1 — no point continuing.
      if (result === 1) {
         return 1;
      }
   }

   return result;
}

/**
 * Finds the Least Common Multiple (LCM) of any quantity of integers.
 * Built on top of lcm() via reduction, leveraging the associativity of the
 * LCM operation: lcm(a, b, c) === lcm(lcm(a, b), c).
 *
 * Floats are truncated and signs are ignored (inherited from lcm).
 * Early exit: if any number is 0, the LCM is immediately 0 (0 is the
 * absorbing element of LCM, mirroring how 1 absorbs in gcdMultiple).
 *
 * Precision note: the LCM grows multiplicatively, so results for many
 * pairwise-coprime numbers can exceed Number.MAX_SAFE_INTEGER and lose
 * exactness — e.g., lcmMultiple of the primes up to 53 already overflows.
 *
 * @param {...number} numbers The integers to find the LCM of.
 * @returns {number} The LCM of all numbers. Returns 1 if no numbers are
 *                   provided (identity element: lcm(1, x) === x), 0 if any
 *                   number is 0, or NaN if any input is non-finite.
 */
export function lcmMultiple(...numbers: number[]): number {
   if (numbers.some((n) => !Number.isFinite(n))) {
      return NaN;
   }

   let result = 1; // identity: lcm(1, x) === x

   for (const n of numbers) {
      result = lcm(result, n);

      // 0 is absorbing: lcm(0, anything) === 0 — no point continuing.
      if (result === 0) {
         return 0;
      }
   }

   return result;
}

/**
 * Calculates (base ^ exponent) % modulus efficiently using the
 * square-and-multiply algorithm (binary exponentiation), reducing modulo at
 * every step. This computes modular exponentiation in O(log exponent)
 * multiplications WITHOUT ever materializing base^exponent — power(base, exp)
 * would overflow Number.MAX_SAFE_INTEGER almost immediately, while modPow
 * keeps every intermediate value below modulus².
 *
 * This is the core primitive of modular arithmetic in cryptography
 * (RSA encryption/decryption, Diffie-Hellman key exchange, primality tests).
 *
 * Safety limit: intermediate products reach (modulus - 1)², so results are
 * only exact while modulus <= 94906265 (√MAX_SAFE_INTEGER). Larger moduli
 * would require BigInt.
 *
 * The result is always non-negative (uses mod(), so negative bases are
 * normalized: modPow(-2, 3, 5) === mod(-8, 5) === 2).
 *
 * @param {number} base The base. Floats are truncated.
 * @param {number} exponent The exponent. Must be a non-negative integer. Floats are truncated.
 * @param {number} modulus The modulus. Must be a positive integer. Floats are truncated.
 * @returns {number} (base ^ exponent) % modulus, in the range [0, modulus).
 *                   Returns NaN for non-finite inputs, negative exponents,
 *                   modulus <= 0, or modulus > 94906265.
 */
export function modPow(
   base: number,
   exponent: number,
   modulus: number,
): number {
   if (
      !Number.isFinite(base) ||
      !Number.isFinite(exponent) ||
      !Number.isFinite(modulus)
   ) {
      return NaN;
   }

   let b = Math.trunc(base);
   let e = Math.trunc(exponent);
   const m = Math.trunc(modulus);

   // Negative exponents would require modular inverse (modInverse, Fase 2).
   if (e < 0) {
      return NaN;
   }

   // Modulus must be positive, and (m - 1)² must stay within MAX_SAFE_INTEGER.
   if (m <= 0 || m > 94906265) {
      return NaN;
   }

   // Anything mod 1 is 0.
   if (m === 1) {
      return 0;
   }

   // Normalize the base into [0, m) — handles negative bases correctly.
   b = mod(b, m);

   let result = 1;

   // Square-and-multiply: consume the exponent bit by bit.
   while (e > 0) {
      // If the current lowest bit is 1, multiply the result by the current base.
      if (e % 2 === 1) {
         result = (result * b) % m;
      }

      // Square the base and move to the next bit.
      b = (b * b) % m;
      e = Math.trunc(e / 2);
   }

   return result;
}

/**
 * Calculates what percentage `value` represents of `total`.
 * Example: percentOf(25, 200) === 12.5 (25 is 12.5% of 200).
 *
 * @param {number} value The partial value.
 * @param {number} total The total (reference) value. Must not be 0.
 * @returns {number} The percentage of `total` that `value` represents.
 * @throws {Error} If `total` is 0 (inherited from divide).
 */
export function percentOf(value: number, total: number): number {
   return multiply(divide(value, total), 100);
}

/**
 * Calculates the value that corresponds to a given percentage of a total.
 * This is the inverse of percentOf. Example: fromPercent(12.5, 200) === 25
 * (12.5% of 200 is 25).
 *
 * @param {number} percent The percentage to apply.
 * @param {number} total The total (reference) value.
 * @returns {number} The value corresponding to `percent` of `total`.
 */
export function fromPercent(percent: number, total: number): number {
   return multiply(divide(percent, 100), total);
}

/**
 * Calculates the sum of the decimal digits of an integer, ignoring the sign.
 * Floats are truncated before summing (e.g., sumOfDigits(45.9) sums 4 + 5 = 9).
 * Example: sumOfDigits(12345) = 1 + 2 + 3 + 4 + 5 = 15.
 *
 * This is the building block of digital roots, checksum algorithms, and
 * divisibility rules (a number is divisible by 3 or 9 iff its digit sum is).
 *
 * Range note: like digits(), results are guaranteed only within
 * Number.MAX_SAFE_INTEGER, since the implementation iterates over the
 * decimal string representation of the truncated absolute value.
 *
 * @param {number} n The integer to sum the digits of. Floats are truncated, sign is ignored.
 * @returns {number} The sum of the decimal digits. Returns NaN if `n` is NaN or ±Infinity.
 */
export function sumOfDigits(n: number): number {
   if (!Number.isFinite(n)) {
      return NaN;
   }

   const str = String(Math.abs(Math.trunc(n)));

   let total = 0;
   for (let i = 0; i < str.length; i++) {
      total += str.charCodeAt(i) - 48; // '0' is charCode 48 — avoids per-digit Number() parsing
   }

   return total;
}

/**
 * Checks if a number is a perfect square — an integer that is the square of
 * another integer (e.g., 36 = 6²).
 *
 * The check uses Math.sqrt followed by an exact integer verification: the
 * rounded candidate root is squared back and compared to the original number,
 * eliminating any floating-point imprecision from the square root itself.
 *
 * Edge cases: 0 is a perfect square (0²); negative numbers never are;
 * floats are NOT truncated — 36.5 is not a perfect square, even though
 * trunc(36.5) would be. Only true integers can be perfect squares.
 *
 * @param {number} n The number to check.
 * @returns {boolean} `true` if n is a perfect square, otherwise `false`.
 *                    Returns `false` for negatives, non-integers, and non-finite inputs.
 */
export function isPerfectSquare(n: number): boolean {
   if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n)) {
      return false;
   }

   const root = Math.round(sqrt(n));

   // Verify by squaring back — immune to sqrt's floating-point noise.
   return root * root === n;
}

/**
 * Calculates the Euclidean norm — the square root of the sum of the squares
 * of the arguments ($\sqrt{x_1^2 + x_2^2 + \dots}$).
 *
 * For two arguments this is the hypotenuse of a right triangle (Pythagorean
 * theorem); for any quantity it is the Euclidean distance from the origin in
 * n-dimensional space — the foundation of distance calculations, vector
 * magnitudes, and physics simulations.
 *
 * Built on sumOfSquares() and sqrt() for full internal consistency.
 *
 * Precision note: unlike Math.hypot, this implementation can overflow to
 * Infinity for inputs whose squares exceed Number.MAX_VALUE (around 1e154).
 * For everyday magnitudes the results are equivalent.
 *
 * @param {...number} numbers The components (e.g., the legs of a triangle, vector coordinates).
 * @returns {number} The Euclidean norm. Returns 0 if no numbers are provided.
 */
export function hypot(...numbers: number[]): number {
   return sqrt(sumOfSquares(...numbers));
}

/**
 * Performs a linear interpolation with `t` clamped to the [0, 1] range —
 * the result is guaranteed to stay between `a` and `b`.
 *
 * Standard lerp() extrapolates beyond the endpoints when t is outside [0, 1]
 * (by design). clampedLerp() locks the result inside the segment, which is
 * what UI animations, progress bars, color blending, and game movement
 * almost always want: lerp that never overshoots.
 *
 * Built on clamp() and lerp() for full internal consistency.
 *
 * @param {number} a The start value (returned when t <= 0).
 * @param {number} b The end value (returned when t >= 1).
 * @param {number} t The interpolation factor, clamped to [0, 1] before interpolating.
 * @returns {number} The interpolated value, always within [min(a,b), max(a,b)].
 */
export function clampedLerp(a: number, b: number, t: number): number {
   return lerp(a, b, clamp(t, 0, 1));
}

/**
 * Maps a value from one range to another, preserving its relative position —
 * e.g., 5 in [0, 10] maps to 50 in [0, 100].
 *
 * This is the famous map() from Arduino/Processing: the workhorse of sensor
 * readings, coordinate conversions, audio normalization, and data
 * visualization scales.
 *
 * Built as the composition of the two interpolation primitives:
 * inverseLerp() extracts the relative position t from the input range, and
 * lerp() applies that t to the output range.
 *
 * Note: like lerp(), values outside the input range extrapolate
 * proportionally (no clamping). Degenerate input range (inMin === inMax)
 * returns NaN, propagated from inverseLerp().
 *
 * @param {number} value The value to remap.
 * @param {number} inMin The lower bound of the source range.
 * @param {number} inMax The upper bound of the source range.
 * @param {number} outMin The lower bound of the target range.
 * @param {number} outMax The upper bound of the target range.
 * @returns {number} The value remapped to the target range. Returns NaN if the input range is degenerate.
 */
export function mapRange(
   value: number,
   inMin: number,
   inMax: number,
   outMin: number,
   outMax: number,
): number {
   return lerp(outMin, outMax, inverseLerp(inMin, inMax, value));
}

/**
 * Checks if a number is a perfect number — a positive integer that equals
 * the sum of its proper divisors (all divisors except itself).
 * Example: 28 = 1 + 2 + 4 + 7 + 14.
 *
 * Perfect numbers have fascinated mathematicians since Euclid: only 52 are
 * known to exist, they grow astronomically fast (the 5th is 33,550,336),
 * and every known one is even — whether odd perfect numbers exist remains
 * one of the oldest unsolved problems in mathematics.
 *
 * Built on divisors() and sum() for full internal consistency.
 *
 * Performance note: inherits the O(√n) divisor enumeration from divisors().
 * Fine for any realistic input — only 8 perfect numbers fit in the safe
 * integer range anyway.
 *
 * @param {number} n The number to check.
 * @returns {boolean} `true` if n is a perfect number, otherwise `false`.
 *                    Returns `false` for n < 2, non-integers, and non-finite inputs.
 */
export function isPerfectNumber(n: number): boolean {
   if (!Number.isFinite(n) || n < 2 || !Number.isInteger(n)) {
      return false;
   }

   const properDivisors = divisors(n);
   properDivisors.pop(); // remove the number itself (always the last element)

   return sum(...properDivisors) === n;
}

/**
 * Decomposes a positive integer into its prime factorization, returning the
 * prime factors in ascending order with repetition.
 * Example: primeFactors(60) = [2, 2, 3, 5] (60 = 2² × 3 × 5).
 *
 * By the Fundamental Theorem of Arithmetic, this decomposition exists and is
 * unique for every integer >= 2 — making it the DNA of a number. It powers
 * Euler's totient, radical/squarefree analysis, and fraction simplification.
 *
 * Algorithm: trial division by 2, then odd candidates up to √remainder —
 * the same i*i <= n hardening used in isPrime(). Whatever remains > 1 at the
 * end is itself prime (the largest prime factor).
 *
 * @param {number} n The integer to factorize. Floats are truncated.
 * @returns {number[]} The prime factors in ascending order, with multiplicity.
 *                     Returns [] for n < 2, NaN, and ±Infinity.
 */
export function primeFactors(n: number): number[] {
   if (!Number.isFinite(n)) {
      return [];
   }

   let remainder = Math.trunc(n);

   if (remainder < 2) {
      return [];
   }

   const factors: number[] = [];

   // Extract all factors of 2 first, so the main loop can skip evens.
   while (remainder % 2 === 0) {
      factors.push(2);
      remainder = remainder / 2;
   }

   // Trial division by odd candidates up to √remainder.
   for (let i = 3; i * i <= remainder; i += 2) {
      while (remainder % i === 0) {
         factors.push(i);
         remainder = remainder / i;
      }
   }

   // Whatever survived is itself a prime (the largest factor).
   if (remainder > 1) {
      factors.push(remainder);
   }

   return factors;
}

/**
 * Multiplies an arbitrary quantity of numbers together, reducing them with
 * multiply(). The variadic sibling of sum() for products.
 * Example: multiplyMultiple(2, 3, 4) = 24.
 *
 * Called with no arguments it returns 1 — the empty product, the
 * multiplicative identity (the same convention that makes factorial(0) = 1
 * and primeFactors(1) = [] mutually consistent).
 *
 * Includes an early exit: if any factor is 0, the result is 0 immediately
 * (mirroring the optimization in lcmMultiple()).
 *
 * @param {...number} numbers The factors to multiply.
 * @returns {number} The product of all numbers. Returns 1 if no numbers are provided.
 */
export function multiplyMultiple(...numbers: number[]): number {
   if (numbers.includes(0)) {
      return 0;
   }

   return numbers.reduce((acc, current) => multiply(acc, current), 1);
}

/**
 * Calculates the binomial coefficient C(n, k) — "n choose k" — the number of
 * ways to choose k elements from a set of n, ignoring order.
 * Example: binomial(5, 2) = 10 (ten possible pairs out of five items).
 *
 * This is the engine of combinatorics: Pascal's triangle, probability
 * distributions, polynomial expansion (binomial theorem), and lottery odds.
 *
 * Algorithm: multiplicative formula with progressive cancellation —
 * result = result × (n - k + i) / i, iterating i from 1 to k. Each
 * intermediate value is itself a smaller binomial coefficient (and therefore
 * an integer), which keeps precision exact FAR beyond what factorial(n)/
 * (factorial(k) × factorial(n-k)) could reach: that formula dies at n = 18
 * (factorial overflow), while this one handles C(60, 30) exactly.
 *
 * Symmetry shortcut: k is replaced by min(k, n - k), halving the loop.
 *
 * @param {number} n The size of the set. Floats are truncated.
 * @param {number} k The number of elements to choose. Floats are truncated.
 * @returns {number} The binomial coefficient C(n, k). Returns 0 when k < 0 or
 *                   k > n (no ways to choose). Returns NaN for non-finite inputs or n < 0.
 */
export function binomial(n: number, k: number): number {
   if (!Number.isFinite(n) || !Number.isFinite(k)) {
      return NaN;
   }

   const numN = Math.trunc(n);
   let numK = Math.trunc(k);

   if (numN < 0) {
      return NaN;
   }

   if (numK < 0 || numK > numN) {
      return 0;
   }

   // Symmetry: C(n, k) === C(n, n - k) — always walk the shorter side.
   if (numK > numN - numK) {
      numK = numN - numK;
   }

   let result = 1;

   // Progressive cancellation: each step yields C(n - k + i, i), an integer.
   for (let i = 1; i <= numK; i++) {
      result = (result * (numN - numK + i)) / i;
   }

   return result;
}

/**
 * Calculates the modular multiplicative inverse of `a` modulo `m` — the
 * number x in [1, m) such that (a × x) mod m = 1.
 * Example: modInverse(3, 7) = 5, because 3 × 5 = 15 and 15 mod 7 = 1.
 *
 * This is division's stand-in in modular arithmetic (where true division
 * does not exist): multiplying by modInverse(a, m) "undoes" multiplying
 * by a. It is the heart of RSA key generation — the private exponent d is
 * literally modInverse(e, totient(n)) — and of hash functions and CRT.
 *
 * Algorithm: iterative extended Euclidean algorithm, tracking only the
 * Bézout coefficient of `a` (O(log m), no recursion). The inverse exists
 * if and only if gcd(a, m) = 1 (a and m coprime); otherwise returns NaN.
 *
 * Inputs are truncated and `a` is normalized with mod() first, so negative
 * `a` works naturally: modInverse(-4, 7) === modInverse(3, 7).
 *
 * @param {number} a The number to invert. Floats are truncated, negatives normalized.
 * @param {number} m The modulus. Floats are truncated. Must be >= 2.
 * @returns {number} The modular inverse in [1, m). Returns NaN if it does not
 *                   exist (gcd(a, m) !== 1), if m < 2, or for non-finite inputs.
 */
export function modInverse(a: number, m: number): number {
   if (!Number.isFinite(a) || !Number.isFinite(m)) {
      return NaN;
   }

   const modulus = Math.trunc(m);

   if (modulus < 2) {
      return NaN;
   }

   // Normalize a into [0, modulus) — handles negatives via our mod().
   let remainder = mod(Math.trunc(a), modulus);
   let prevRemainder = modulus;

   // Bézout coefficients of `a` (we only need this column).
   let coef = 1;
   let prevCoef = 0;

   while (remainder !== 0) {
      const quotient = Math.trunc(prevRemainder / remainder);

      const tempRemainder = prevRemainder - quotient * remainder;
      prevRemainder = remainder;
      remainder = tempRemainder;

      const tempCoef = prevCoef - quotient * coef;
      prevCoef = coef;
      coef = tempCoef;
   }

   // prevRemainder now holds gcd(a, m): inverse exists only if it's 1.
   if (prevRemainder !== 1) {
      return NaN;
   }

   return mod(prevCoef, modulus);
}

/**
 * Calculates the number of permutations P(n, k) — the number of ways to
 * arrange k elements chosen from a set of n, where ORDER MATTERS.
 * Example: permutations(5, 2) = 20 (podium positions, passwords, rankings).
 *
 * The contrast with binomial(): C(n, k) counts subsets (order ignored),
 * P(n, k) counts arrangements. They relate by P(n, k) = C(n, k) × k! —
 * every subset of k elements can be arranged in k! different orders.
 *
 * Algorithm: direct falling factorial n × (n-1) × ... × (n-k+1), computed
 * iteratively. Like binomial(), this avoids the factorial-quotient formula
 * (which would overflow at n = 19) — every intermediate value here is an
 * exact integer until the result itself exceeds MAX_SAFE_INTEGER.
 *
 * @param {number} n The size of the set. Floats are truncated.
 * @param {number} k The number of elements to arrange. Floats are truncated.
 * @returns {number} The number of permutations P(n, k). Returns 0 when k < 0
 *                   or k > n. Returns NaN for non-finite inputs or n < 0.
 */
export function permutations(n: number, k: number): number {
   if (!Number.isFinite(n) || !Number.isFinite(k)) {
      return NaN;
   }

   const numN = Math.trunc(n);
   const numK = Math.trunc(k);

   if (numN < 0) {
      return NaN;
   }

   if (numK < 0 || numK > numN) {
      return 0;
   }

   let result = 1;

   // Falling factorial: n × (n-1) × ... × (n-k+1)
   for (let i = 0; i < numK; i++) {
      result = result * (numN - i);
   }

   return result;
}

/**
 * Calculates Euler's totient φ(n) — the count of integers in [1, n] that
 * are coprime with n.
 * Example: totient(9) = 6, because 1, 2, 4, 5, 7, 8 share no factor with 9.
 *
 * The totient is the backbone of modular arithmetic: it gives the size of
 * the multiplicative group mod n, powers Euler's theorem
 * (a^φ(n) ≡ 1 mod n for coprime a — the generalization of Fermat's little
 * theorem), and defines the RSA private key: d = modInverse(e, φ(n)).
 *
 * Algorithm: Euler's product formula φ(n) = n × Π(1 - 1/p) over the
 * distinct prime factors p of n, computed as n × (p - 1) / p per unique
 * prime. Every intermediate division is exact (p always divides the
 * accumulated value), so the result stays integer-precise throughout.
 * Built on primeFactors() for full internal consistency.
 *
 * @param {number} n The number to evaluate. Floats are truncated.
 * @returns {number} φ(n), the count of coprimes with n in [1, n].
 *                   Returns 1 for n = 1 (by convention), and NaN for n < 1
 *                   or non-finite inputs.
 */
export function totient(n: number): number {
   if (!Number.isFinite(n)) {
      return NaN;
   }

   const num = Math.trunc(n);

   if (num < 1) {
      return NaN;
   }

   if (num === 1) {
      return 1;
   }

   let result = num;
   let previousPrime = 0;

   // Euler's product over DISTINCT primes: φ = n × Π (p - 1) / p.
   // primeFactors() returns sorted factors, so repeats are adjacent.
   for (const p of primeFactors(num)) {
      if (p !== previousPrime) {
         result = (result / p) * (p - 1);
         previousPrime = p;
      }
   }

   return result;
}

/**
 * Calculates the median — the middle value of a sorted dataset, the point
 * that splits it into two equal halves.
 * Example: median(1, 3, 2) = 2; median(1, 2, 3, 4) = 2.5.
 *
 * Unlike the mean, the median is robust to outliers: median(1, 2, 3, 1000)
 * is 2.5, not 251.5 — which is why income, house prices, and response times
 * are reported as medians. Mean and median together reveal skewness.
 *
 * Algorithm: numeric sort on a copy (the input is never mutated), then the
 * middle element (odd count) or the mean of the two middle elements (even
 * count).
 *
 * @param {...number} numbers The dataset (order irrelevant).
 * @returns {number} The median value. Returns NaN if called with no numbers
 *                   or if any value is NaN.
 */
export function median(...numbers: number[]): number {
   if (numbers.length === 0) {
      return NaN;
   }

   if (numbers.some((n) => Number.isNaN(n))) {
      return NaN;
   }

   // Numeric sort on a COPY — never mutate the caller's data.
   const sorted = [...numbers].sort((a, b) => a - b);

   const middle = Math.trunc(sorted.length / 2);

   if (isOdd(sorted.length)) {
      return sorted[middle];
   }

   return divide(sum(sorted[middle - 1], sorted[middle]), 2);
}

/**
 * Returns the smallest of the provided numbers.
 * Example: min(3, 1, 4) = 1.
 *
 * Unlike Math.min (which returns Infinity for no arguments — a surprising
 * identity value), this returns NaN when called with no numbers, treating
 * "the minimum of nothing" as undefined — consistent with mean() and
 * median() in this library.
 *
 * @param {...number} numbers The numbers to compare.
 * @returns {number} The smallest value. Returns NaN if called with no
 *                   numbers or if any value is NaN.
 */
export function min(...numbers: number[]): number {
   if (numbers.length === 0) {
      return NaN;
   }

   return Math.min(...numbers);
}

/**
 * Returns the largest of the provided numbers.
 * Example: max(3, 1, 4) = 4.
 *
 * Unlike Math.max (which returns -Infinity for no arguments — a surprising
 * identity value), this returns NaN when called with no numbers, treating
 * "the maximum of nothing" as undefined — consistent with mean() and
 * median() in this library.
 *
 * @param {...number} numbers The numbers to compare.
 * @returns {number} The largest value. Returns NaN if called with no
 *                   numbers or if any value is NaN.
 */
export function max(...numbers: number[]): number {
   if (numbers.length === 0) {
      return NaN;
   }

   return Math.max(...numbers);
}

/**
 * Calculates the population variance σ² — the mean of the squared
 * deviations from the mean, measuring how spread out a dataset is.
 * Example: variance(2, 4, 4, 4, 5, 5, 7, 9) = 4.
 *
 * Zero variance means all values are identical; larger variance means
 * wider dispersion. Variance is the foundation of standard deviation,
 * z-scores, regression, and virtually all of statistics.
 *
 * This is the POPULATION variance (divides by n), treating the input as
 * the complete dataset. For SAMPLE variance (divides by n - 1, Bessel's
 * correction for estimating from a sample), multiply the result by
 * n / (n - 1).
 *
 * Algorithm: two-pass — first the mean, then sumOfSquares of the
 * deviations, divided by n. The two-pass approach is numerically stabler
 * than the one-pass E[X²] - E[X]² formula, which suffers catastrophic
 * cancellation for large values with small spread.
 * Built on mean(), sumOfSquares(), and divide().
 *
 * @param {...number} numbers The complete dataset (population).
 * @returns {number} The population variance σ². Returns NaN if called with
 *                   no numbers or if any value is NaN.
 */
export function variance(...numbers: number[]): number {
   if (numbers.length === 0) {
      return NaN;
   }

   const avg = mean(...numbers);
   const deviations = numbers.map((n) => n - avg);

   return divide(sumOfSquares(...deviations), numbers.length);
}

/**
 * Calculates the population standard deviation σ — the square root of the
 * variance, measuring dispersion in the SAME UNIT as the data.
 * Example: standardDeviation(2, 4, 4, 4, 5, 5, 7, 9) = 2.
 *
 * This is variance made interpretable: if heights are in centimeters, σ is
 * in centimeters too (variance would be in cm², which nobody can picture).
 * It powers the 68-95-99.7 rule, z-scores, error bars, and volatility.
 *
 * Population flavor (divides by n), inherited directly from variance().
 * For the sample version, multiply variance by n/(n-1) before the root.
 *
 * Built as sqrt(variance(...)) — pure composition.
 *
 * @param {...number} numbers The complete dataset (population).
 * @returns {number} The population standard deviation σ. Returns NaN if
 *                   called with no numbers or if any value is NaN.
 */
export function standardDeviation(...numbers: number[]): number {
   return sqrt(variance(...numbers));
}

/**
 * Finds the mode — the value(s) that appear most frequently in a dataset.
 * Example: mode(1, 2, 2, 3) = [2]; mode(1, 1, 2, 2, 3) = [1, 2].
 *
 * The third pillar of central tendency (with mean and median), and the only
 * one defined for ANY data — it needs counting, not arithmetic. It is also
 * the only one that can be plural: bimodal and multimodal datasets are
 * common (and statistically meaningful), so this returns an ARRAY.
 *
 * Returns ALL tied values in ascending order. When every value appears the
 * same number of times (e.g., all distinct), every value is technically a
 * mode — the array simply contains them all, sorted.
 *
 * Counting uses a Map keyed by the numeric value itself, so 2 and 2.0
 * collapse (same number in JS) while 0 and -0 also collapse (Map treats
 * them as the same key — SameValueZero).
 *
 * @param {...number} numbers The dataset (order irrelevant).
 * @returns {number[]} The most frequent value(s), sorted ascending.
 *                     Returns [] if called with no numbers or if any value is NaN.
 */
export function mode(...numbers: number[]): number[] {
   if (numbers.length === 0) {
      return [];
   }

   if (numbers.some((n) => Number.isNaN(n))) {
      return [];
   }

   const counts = new Map<number, number>();
   let highest = 0;

   for (const n of numbers) {
      const count = (counts.get(n) ?? 0) + 1;
      counts.set(n, count);

      if (count > highest) {
         highest = count;
      }
   }

   const modes: number[] = [];
   for (const [value, count] of counts) {
      if (count === highest) {
         modes.push(value);
      }
   }

   return modes.sort((a, b) => a - b);
}

/**
 * Returns the running totals (partial sums) of a sequence of numbers.
 * Equivalent to numpy's cumsum: each element i is the sum of all
 * inputs from index 0 up to i.
 *
 * Example: cumulativeSum(1, 2, 3, 4) returns [1, 3, 6, 10].
 *
 * Useful for time series (accumulated balances, running scores),
 * prefix-sum algorithms, and converting deltas into absolute values.
 *
 * Algorithm note: single O(n) pass with an accumulator (conceptually
 * repeated sum, but without calling sum() per element, which would
 * be O(n²)).
 *
 * Precision note: partial sums are exact within the safe integer
 * zone (|sum| < 2^53). With binary fractions (0.1, 0.7...) the usual
 * float drift applies — compare with tolerance in that range.
 *
 * @param {...number} numbers - Sequence of numbers (variadic).
 *     Floats and negatives are accepted as-is (no truncation).
 * @returns {number[]} Array of partial sums, same length as the
 *     input. Empty call returns [] (no data, no totals). Non-finite
 *     values propagate honestly through JS arithmetic: from the
 *     first NaN onward every total is NaN; an Infinity turns the
 *     following totals into Infinity (and Infinity + -Infinity
 *     yields NaN).
 */
export function cumulativeSum(...numbers: number[]): number[] {
   const result: number[] = [];
   let acc = 0;

   for (const n of numbers) {
      acc += n;
      result.push(acc);
   }

   return result;
}

/**
 * Applies a dead zone to a normalized axis value with continuous
 * rescaling: inputs whose magnitude is at or below the threshold
 * collapse to 0, and the remaining range is linearly remapped so
 * the output still spans the full [-1, 1] — with NO jump at the
 * threshold edge.
 *
 * Example: deadzone(0.05, 0.1) returns 0 (inside the dead zone);
 * deadzone(0.55, 0.1) returns 0.5; deadzone(1, 0.1) returns 1;
 * deadzone(-0.55, 0.1) returns -0.5 (symmetric by sign).
 *
 * Useful for joystick/gamepad drift filtering, robotics control
 * sticks and analog sensor noise gates. The naive approach (just
 * zeroing below the threshold) creates a discontinuity: the output
 * jumps from 0 to ~threshold as soon as the stick leaves the zone.
 * This implementation rescales sign(v) × (|v| − t) / (1 − t), which
 * is continuous at the edge and preserves full output range.
 *
 * Algorithm note: dogfooding with sign(), absolute() and min() from
 * this library. Input magnitude is clamped to 1 before remapping,
 * matching real-world axis APIs where hardware may report values
 * slightly outside the nominal range (e.g. 1.0000001).
 *
 * @param {number} value - Normalized axis value, expected in
 *     [-1, 1]. Magnitudes above 1 are clamped to 1. Floats and
 *     negatives are the normal use case. Non-finite returns NaN.
 * @param {number} threshold - Dead zone radius, valid in [0, 1).
 *     0 disables the dead zone (identity within [-1, 1]). Values
 *     below 0, equal to or above 1, or non-finite return NaN
 *     (a threshold of 1 would collapse the whole axis and divide
 *     by zero — honest NaN instead of a silent lie).
 * @returns {number} Remapped value in [-1, 1]; exactly 0 inside
 *     the dead zone (|value| <= threshold); NaN for invalid inputs.
 */
export function deadzone(value: number, threshold: number): number {
   if (!Number.isFinite(value) || !Number.isFinite(threshold)) {
      return NaN;
   }

   if (threshold < 0 || threshold >= 1) {
      return NaN;
   }

   const magnitude = min(absolute(value), 1);

   if (magnitude <= threshold) {
      return 0;
   }

   return sign(value) * ((magnitude - threshold) / (1 - threshold));
}

/**
 * Raises the magnitude of the base to the exponent while preserving
 * the original sign: sign(base) × |base|^exp. Solves the classic
 * JavaScript trap where (-4) ** 0.5 yields NaN — fractional powers
 * of negative numbers are undefined in the reals, but in practice
 * what callers almost always want is the symmetric curve.
 *
 * Example: signedPow(-4, 0.5) returns -2; signedPow(4, 0.5)
 * returns 2; signedPow(-8, 1/3) returns -2; signedPow(-3, 2)
 * returns -9 (sign preserved even for even exponents — this is
 * the defining feature, not a bug).
 *
 * Useful for symmetric easing/response curves: signedPow(x, 2)
 * gives a quadratic joystick response that still pushes left when
 * the stick goes left; signedPow(x, 0.5) softens extremes in both
 * directions. Also used in audio waveshaping and signed gamma
 * correction.
 *
 * Algorithm note: dogfooding with sign(), absolute() and power()
 * from this library. The identity signedPow(x, k) = -signedPow(-x, k)
 * holds for every valid input (odd symmetry by construction).
 *
 * @param {number} base - Any finite number. Negatives are the whole
 *     point: their magnitude is raised and the sign is restored.
 *     Non-finite returns NaN.
 * @param {number} exp - Any finite exponent, including fractional
 *     and negative. Non-finite returns NaN.
 * @returns {number} sign(base) × |base|^exp. Edge cases:
 *     signedPow(x, 0) returns sign(x) (1, -1 or 0) since |x|^0 = 1;
 *     signedPow(0, exp) returns 0 for exp > 0; signedPow(0, exp)
 *     with exp < 0 returns NaN (0 × Infinity is an honest
 *     indeterminate, not a silent 0); NaN for non-finite inputs.
 */
export function signedPow(base: number, exp: number): number {
   if (!Number.isFinite(base) || !Number.isFinite(exp)) {
      return NaN;
   }

   return sign(base) * power(absolute(base), exp);
}

/**
 * Rounds a number to a given count of significant figures — the
 * leading digits that carry measurement information — instead of
 * a fixed count of decimal places.
 *
 * Example: roundToSignificant(123456, 2) returns 120000;
 * roundToSignificant(0.00012345, 3) returns 0.000123;
 * roundToSignificant(9.876, 2) returns 9.9. Note how the same
 * sigFigs adapts to any magnitude — toFixed(2) could never do the
 * first two.
 *
 * Useful for science and engineering output (lab reports, sensor
 * readings), display formatting of measurements, and honest
 * uncertainty: 0.00012345 measured with 3-digit confidence IS
 * 0.000123, no matter where the decimal point sits.
 *
 * Algorithm note: finds the magnitude with floor(log10(|n|)),
 * scales the number so the requested digits sit left of the
 * decimal point, rounds, and scales back: sign(n) × round(|n| /
 * scale) × scale, with scale = 10^(magnitude − sigFigs + 1).
 * Dogfooding: sign(), absolute(), floor(), log10(), round() and
 * power() from this library. Rounding away from a power-of-ten
 * boundary self-corrects: 99.5 at 2 figures becomes 100 (= 1.0e2)
 * naturally.
 *
 * Precision note: results are the closest IEEE 754 double to the
 * decimal value (0.000123 is stored as the nearest binary float,
 * as with any decimal literal). Ties round half away from zero
 * symmetrically: roundToSignificant(-12.5, 2) mirrors
 * roundToSignificant(12.5, 2).
 *
 * @param {number} n - The number to round. Floats and negatives
 *     are first-class (sign is preserved by symmetric decomposition).
 *     Non-finite returns NaN.
 * @param {number} sigFigs - How many significant figures to keep.
 *     Must be an integer >= 1; fractional, zero, negative or
 *     non-finite values return NaN (there is no such thing as
 *     "2.5 significant digits" — honest NaN instead of a guess).
 * @returns {number} The rounded value; 0 stays 0 (zero has no
 *     significant digits to count); NaN for invalid inputs.
 */
export function roundToSignificant(n: number, sigFigs: number): number {
   if (!Number.isFinite(n) || !Number.isFinite(sigFigs)) {
      return NaN;
   }

   if (!Number.isInteger(sigFigs) || sigFigs < 1) {
      return NaN;
   }

   if (n === 0) {
      return 0;
   }

   const magnitude = floor(log10(absolute(n)));
   const scale = power(10, magnitude - sigFigs + 1);

   return sign(n) * round(absolute(n) / scale) * scale;
}

/**
 * Rescales a list of numbers so they sum to a target value while
 * preserving their relative proportions. The default target of 1
 * turns any list of weights into a probability distribution.
 *
 * Example: normalizeToSum([2, 3, 5]) returns [0.2, 0.3, 0.5];
 * normalizeToSum([1, 1, 2], 100) returns [25, 25, 50] (percentages);
 * normalizeToSum([-1, 3]) returns [-0.5, 1.5] (negatives are fine
 * as long as the total is nonzero — proportions still hold).
 *
 * Useful for probability/weight normalization (softmax-free),
 * percentage breakdowns, portfolio allocations, and converting
 * arbitrary scores into shares of a whole.
 *
 * Algorithm note: single uniform scaling by target / sum(values),
 * with sum() from this library as the aggregator. Proportions are
 * preserved exactly: output[i] / output[j] === values[i] / values[j]
 * for every pair (same ratio, same signs).
 *
 * Precision note: the rescaled values sum to the target up to
 * normal IEEE 754 accumulation drift (use tolerance when comparing;
 * for integer-exact partitioning of a total, see proportionalSplit).
 *
 * @param {number[]} values - The list to rescale. Floats and
 *     negatives are accepted; the input array is never mutated.
 *     Empty list returns [] (nothing to normalize).
 * @param {number} [target=1] - The desired total after rescaling.
 *     0 is valid (collapses every entry to 0). Non-finite returns
 *     all-NaN.
 * @returns {number[]} New array, same length, scaled to sum to the
 *     target. If the values sum to 0 the direction of scaling is
 *     undefined (division by zero) and every entry is an honest NaN;
 *     likewise any non-finite entry or target yields all-NaN —
 *     a half-scaled list would be a silent lie.
 */
export function normalizeToSum(values: number[], target = 1): number[] {
   if (!Number.isFinite(target) || values.some((v) => !Number.isFinite(v))) {
      return new Array(values.length).fill(NaN);
   }

   const total = sum(...values);

   if (total === 0) {
      return new Array(values.length).fill(NaN);
   }

   const ratio = target / total;

   return values.map((v) => v * ratio);
}

/**
 * Multiplicative (geometric) interpolation between two positive
 * values: instead of moving in equal DIFFERENCES like the ordinary
 * lerp, it moves in equal RATIOS. The midpoint of 1 and 100 is 10
 * (the geometric mean), not 50.5.
 *
 * Example: geometricLerp(1, 100, 0.5) returns 10;
 * geometricLerp(220, 880, 0.5) returns 440 — the note A4, exactly
 * one octave above A3 and one below A5, because pitch perception
 * is multiplicative; geometricLerp(1, 100, 0) returns 1 and
 * geometricLerp(1, 100, 1) returns 100 (exact endpoints).
 *
 * Useful wherever the quantity lives on a log scale: audio
 * frequencies and volume, zoom levels (each step multiplies the
 * scale), animation of scale factors, log-axis charting, and
 * compound growth between two known states.
 *
 * Algorithm note: computed as power(a, 1 - t) × power(b, t) rather
 * than a × power(b / a, t) — the two-power form makes BOTH
 * endpoints exact (t = 0 gives a × 1, t = 1 gives 1 × b, with no
 * b/a division drift). Dogfooding with power() from this library.
 * Defining property: equal steps in t multiply the output by equal
 * ratios — geometricLerp(a, b, t + d) / geometricLerp(a, b, t) is
 * constant for fixed d.
 *
 * @param {number} a - Start value. Must be strictly positive:
 *     geometric interpolation crosses zero never and sign flips
 *     have no geometric meaning. Zero, negatives or non-finite
 *     return NaN.
 * @param {number} b - End value. Same constraint: > 0, finite,
 *     otherwise NaN.
 * @param {number} t - Interpolation parameter. 0 returns exactly a,
 *     1 returns exactly b, 0.5 returns the geometric mean √(a·b).
 *     Values outside [0, 1] extrapolate along the same geometric
 *     progression (t = 2 with a=1, b=10 gives 100). Non-finite
 *     returns NaN.
 * @returns {number} a^(1−t) × b^t. NaN for invalid inputs; may
 *     overflow to Infinity under extreme extrapolation (IEEE 754
 *     limit, ~1.8e308).
 */
export function geometricLerp(a: number, b: number, t: number): number {
   if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(t)) {
      return NaN;
   }

   if (a <= 0 || b <= 0) {
      return NaN;
   }

   return power(a, 1 - t) * power(b, t);
}

/**
 * Splits an integer total into whole-number parts proportional to
 * the given weights, guaranteeing the parts sum to EXACTLY the
 * total — no cent lost, no cent invented. Uses the largest
 * remainder method (a.k.a. Hamilton's method).
 *
 * Example: proportionalSplit(100, 1, 1, 1) returns [34, 33, 33]
 * (not [33.33, 33.33, 33.33] that sums to 99.99); splitting R$ 100
 * three ways gives someone the extra cent honestly;
 * proportionalSplit(10, 1, 2, 2) returns [2, 4, 4];
 * proportionalSplit(7, 50, 50) returns [4, 3] (the odd unit goes
 * to the largest remainder, then to the earliest index on a tie).
 *
 * Useful for dividing money (the classic "split the bill" cent
 * problem), allocating discrete seats by proportion (apportionment),
 * distributing inventory, or any integer rationing where the parts
 * must reconcile to the whole.
 *
 * Algorithm note (largest remainder / Hamilton): give each part its
 * floor(total × weight / weightSum); this leaves a remainder R =
 * total − Σfloors of whole units undistributed. Hand those R units
 * out one each to the parts with the largest fractional remainders,
 * breaking ties by lowest index (stable, deterministic). The result
 * provably sums to the total. Dogfooding with sum() and floor().
 *
 * Range note: total must be a safe integer (|total| < 2^53) for the
 * floors to stay exact.
 *
 * @param {number} total - The integer amount to divide. Must be a
 *     finite integer (in cents for money — never split floats).
 *     Negative totals split symmetrically (parts are negated).
 *     Non-integer or non-finite returns NaN-filled array.
 * @param {...number} weights - Proportional weights (variadic).
 *     Need not sum to anything special; only their ratios matter.
 *     Must be finite and non-negative. Empty weights, all-zero
 *     weights, or any negative/non-finite weight returns an array
 *     of NaN (matching the weight count, or [] for empty) — a
 *     fabricated split would be a silent accounting lie.
 * @returns {number[]} Integer parts, same length as weights,
 *     summing to exactly total. [] for no weights; NaN-filled for
 *     invalid input.
 */
export function proportionalSplit(
   total: number,
   ...weights: number[]
): number[] {
   if (weights.length === 0) {
      return [];
   }

   const invalid =
      !Number.isInteger(total) ||
      weights.some((w) => !Number.isFinite(w) || w < 0);

   if (invalid) {
      return new Array(weights.length).fill(NaN);
   }

   const weightSum = sum(...weights);

   if (weightSum === 0) {
      return new Array(weights.length).fill(NaN);
   }

   const exactShares = weights.map((w) => (total * w) / weightSum);
   const floors = exactShares.map((share) => floor(share));
   const distributed = sum(...floors);
   const remainder = total - distributed;

   // Pair each part with its fractional remainder, then hand out the
   // leftover units to the largest remainders (ties → lowest index).
   const order = exactShares
      .map((share, index) => ({ index, frac: share - floors[index] }))
      .sort((a, b) => b.frac - a.frac || a.index - b.index);

   const result = [...floors];
   for (let i = 0; i < remainder; i++) {
      result[order[i].index] += 1;
   }

   return result;
}
