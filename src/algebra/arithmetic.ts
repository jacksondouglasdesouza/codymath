// src/algebra/arithmetic.ts

import { constants } from "../constants/constants";

/**
 * @fileoverview Core arithmetic, number theory, and utility functions.
 * @version 0.6.0
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
