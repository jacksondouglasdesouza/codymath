<p align="center">
  <img src="./assets/CodyMathLibBanner.png" alt="CodyMath Logo">
</p>
<div style="display: flex; align-items: center; gap: 20px;">
  <a href="https://www.npmjs.com/package/codymath" target="_blank">
    <img src="./assets/Npm-logo.svg" alt="NPM Package" width="100">
  </a>
  | <strong> Current Status: Early Development (v0.8.0)</strong>
</div>
CodyMath is on a mission to become the most complete open-source mathematics library for JavaScript and TypeScript. By implementing thousands of rigorously tested formulas from authoritative sources, we provide a universal toolbox for developers, students, and researchers worldwide.

---

## ❤️ Support the Project

**CodyMath** is an ambitious open-source project, built and maintained with dedication during free time. Our goal is to create the largest and most complete mathematics library for the global JavaScript and TypeScript community.

If you find this library useful and it helps you in your projects, please consider making a contribution. Every donation helps us dedicate more time to adding new features, improving documentation, and ensuring the project stays healthy and active for years to come.

Thank you for your support!

| Method                                                                                                      | Address / Link                                                                                     |
| :---------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| ![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)       | [`Click here to donate via PayPal`](https://www.paypal.com/donate/?hosted_button_id=8XYHYQNR2E27J) |
| ![Bitcoin](https://img.shields.io/badge/Bitcoin-000000?style=for-the-badge&logo=bitcoin&logoColor=white)    | `bc1q3zu0nng6765ptpmr86jcfn68h6e62sda7382e3`                                                       |
| ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white) | `0xF7Eb1D45cDD527b11BC49416DDfA51AD38e26ca1`                                                       |

## Usage

### Installation

```bash
npm install codymath
```

### Or use CDN

```javascript
<script src="https://cdn.jsdelivr.net/npm/codymath@latest/dist/codymath.umd.js"></script>
```

### Module: `algebra/arithmetic`

This module provides a comprehensive set of pure functions spanning fundamental arithmetic, exponentiation, roots, logarithms, number theory, combinatorics, statistics, interpolation, and signal shaping.

| Function                    | Syntax                                          | Description                                                           | Library Key          |
| :-------------------------- | :---------------------------------------------- | :-------------------------------------------------------------------- | :------------------- |
| **Sum**                     | `sum(...numbers)`                               | Returns the sum of a set of numbers.                                  | `sum`                |
| **Subtraction**             | `subtract(a, b)`                                | Returns the difference between two numbers (`a - b`).                 | `subtract`           |
| **Multiplication**          | `multiply(...numbers)`                          | Returns the product of a set of numbers.                              | `multiply`           |
| **Division**                | `divide(a, b)`                                  | Returns the division of `a` by `b`, handling division by zero.        | `divide`             |
| **Mean**                    | `mean(...numbers)`                              | Calculates the arithmetic mean of a set of numbers.                   | `mean`               |
| **Power**                   | `power(base, exp)`                              | Calculates a `base` number raised to an `exponent`.                   | `power`              |
| **Square Root**             | `sqrt(n)`                                       | Calculates the square root ($\sqrt{n}$) of a number.                  | `sqrt`               |
| **Cube Root**               | `cbrt(n)`                                       | Calculates the cube root ($\sqrt[3]{n}$) of a number.                 | `cbrt`               |
| **Nth Root**                | `nthRoot(n, root)`                              | Calculates the nth root ($\sqrt[root]{n}$) of a number.               | `nthRoot`            |
| **Exponential**             | `exp(n)`                                        | Calculates the value of `e` raised to the power of `n` ($e^n$).       | `exp`                |
| **Natural Log**             | `ln(n)`                                         | Calculates the natural logarithm (base `e`) of a number, $ln(n)$.     | `ln`                 |
| **Log Base 10**             | `log10(n)`                                      | Calculates the common logarithm (base 10), $log_{10}(n)$.             | `log10`              |
| **Log Base 2**              | `log2(n)`                                       | Calculates the binary logarithm (base 2), $log_{2}(n)$.               | `log2`               |
| **Generic Log**             | `log(n, base)`                                  | Calculates the logarithm of `n` in a custom `base`, $log_{base}(n)$.  | `log`                |
| **Greatest Common Divisor** | `gcd(a, b)`                                     | Finds the Greatest Common Divisor (GCD) of two integers.              | `gcd`                |
| **Least Common Multiple**   | `lcm(a, b)`                                     | Finds the Least Common Multiple (LCM) of two integers.                | `lcm`                |
| **Is Prime**                | `isPrime(n)`                                    | Checks if a number is prime.                                          | `isPrime`            |
| **Is Even**                 | `isEven(n)`                                     | Checks if a number is even.                                           | `isEven`             |
| **Is Odd**                  | `isOdd(n)`                                      | Checks if a number is odd.                                            | `isOdd`              |
| **Factorial**               | `factorial(n)`                                  | Calculates the factorial (`n!`) of a non-negative integer.            | `factorial`          |
| **Absolute**                | `absolute(n)`                                   | Returns the absolute value of a number.                               | `absolute`           |
| **Round**                   | `round(n, decimals)`                            | Rounds a number to a specified number of decimal places.              | `round`              |
| **Floor**                   | `floor(n)`                                      | Rounds a number down to the nearest integer.                          | `floor`              |
| **Ceiling**                 | `ceil(n)`                                       | Rounds a number up to the nearest integer.                            | `ceil`               |
| **Truncate**                | `trunc(n)`                                      | Removes the decimal part of a number.                                 | `trunc`              |
| **Sign**                    | `sign(n)`                                       | Returns the sign of a number (-1, 0, or 1).                           | `sign`               |
| **Clamp**                   | `clamp(value, min, max)`                        | Clamps a number within an inclusive range.                            | `clamp`              |
| **Lerp**                    | `lerp(a, b, t)`                                 | Performs linear interpolation between two points.                     | `lerp`               |
| **Is In Range**             | `isInRange(n, start, end)`                      | Checks if a number is within a given range (inclusive).               | `isInRange`          |
| **Modulo**                  | `mod(a, b)`                                     | Calculates the mathematical modulo (handles negatives correctly).     | `mod`                |
| **Is Negative Zero**        | `isNegativeZero(n)`                             | Checks if a number is strictly equal to `-0`.                         | `isNegativeZero`     |
| **Coprime**                 | `coprime(a, b)`                                 | Checks if two integers are coprime (their GCD is 1).                  | `coprime`            |
| **Safe Division**           | `safeDiv(a, b, fallback)`                       | Divides `a` by `b`, returning `fallback` instead of throwing on zero. | `safeDiv`            |
| **Digits**                  | `digits(n)`                                     | Counts the decimal digits of an integer, ignoring the sign.           | `digits`             |
| **Sum of Squares**          | `sumOfSquares(...numbers)`                      | Returns the sum of the squares of a set of numbers ($\sum x_i^2$).    | `sumOfSquares`       |
| **Divisors**                | `divisors(n)`                                   | Returns all positive divisors of an integer, in ascending order.      | `divisors`           |
| **Fibonacci**               | `fibonacci(n)`                                  | Returns the nth Fibonacci number (0-indexed), iteratively.            | `fibonacci`          |
| **Inverse Lerp**            | `inverseLerp(a, b, value)`                      | Returns the factor `t` such that `lerp(a, b, t)` equals `value`.      | `inverseLerp`        |
| **GCD (Multiple)**          | `gcdMultiple(...numbers)`                       | Finds the GCD of any quantity of integers.                            | `gcdMultiple`        |
| **LCM (Multiple)**          | `lcmMultiple(...numbers)`                       | Finds the LCM of any quantity of integers.                            | `lcmMultiple`        |
| **Modular Exponentiation**  | `modPow(base, exp, mod)`                        | Computes `(base^exp) % mod` efficiently — core of RSA-style crypto.   | `modPow`             |
| **Percent Of**              | `percentOf(value, total)`                       | Calculates what percentage `value` represents of `total`.             | `percentOf`          |
| **From Percent**            | `fromPercent(pct, total)`                       | Calculates the value corresponding to a percentage of a total.        | `fromPercent`        |
| **Sum of Digits**           | `sumOfDigits(n)`                                | Returns the sum of the decimal digits of an integer.                  | `sumOfDigits`        |
| **Is Perfect Square**       | `isPerfectSquare(n)`                            | Checks if an integer is a perfect square.                             | `isPerfectSquare`    |
| **Hypotenuse**              | `hypot(...values)`                              | Returns the n-dimensional hypotenuse, $\sqrt{\sum x_i^2}$.            | `hypot`              |
| **Clamped Lerp**            | `clampedLerp(a, b, t)`                          | Performs linear interpolation with `t` clamped to `[0, 1]`.           | `clampedLerp`        |
| **Map Range**               | `mapRange(value, inMin, inMax, outMin, outMax)` | Remaps a value from one numeric range to another.                     | `mapRange`           |
| **Is Perfect Number**       | `isPerfectNumber(n)`                            | Checks if an integer equals the sum of its proper divisors.           | `isPerfectNumber`    |
| **Prime Factors**           | `primeFactors(n)`                               | Returns the prime factorization of an integer as an array.            | `primeFactors`       |
| **Multiply (Multiple)**     | `multiplyMultiple(...numbers)`                  | Returns the product of any quantity of numbers (empty = 1).           | `multiplyMultiple`   |
| **Binomial Coefficient**    | `binomial(n, k)`                                | Computes the binomial coefficient $\binom{n}{k}$.                     | `binomial`           |
| **Modular Inverse**         | `modInverse(a, m)`                              | Finds the modular multiplicative inverse of `a` modulo `m`.           | `modInverse`         |
| **Permutations**            | `permutations(n, k)`                            | Returns the number of ordered arrangements, $P(n, k)$.                | `permutations`       |
| **Euler's Totient**         | `totient(n)`                                    | Counts the integers up to `n` that are coprime to it, $\varphi(n)$.   | `totient`            |
| **Median**                  | `median(...numbers)`                            | Returns the median (middle value) of a dataset.                       | `median`             |
| **Minimum**                 | `min(...numbers)`                               | Returns the smallest value, or `NaN` for an empty input.              | `min`                |
| **Maximum**                 | `max(...numbers)`                               | Returns the largest value, or `NaN` for an empty input.               | `max`                |
| **Variance**                | `variance(...numbers)`                          | Returns the population variance of a dataset.                         | `variance`           |
| **Standard Deviation**      | `standardDeviation(...numbers)`                 | Returns the population standard deviation of a dataset.               | `standardDeviation`  |
| **Mode**                    | `mode(...numbers)`                              | Returns the most frequent value(s) as an array.                       | `mode`               |
| **Cumulative Sum**          | `cumulativeSum(...numbers)`                     | Returns the running totals (partial sums) of a sequence.              | `cumulativeSum`      |
| **Dead Zone**               | `deadzone(value, threshold)`                    | Applies a dead zone with continuous rescaling to an axis value.       | `deadzone`           |
| **Signed Power**            | `signedPow(base, exp)`                          | Raises the magnitude of `base` to `exp` while preserving its sign.    | `signedPow`          |
| **Round to Significant**    | `roundToSignificant(n, sigFigs)`                | Rounds to a count of significant figures, not decimal places.         | `roundToSignificant` |
| **Normalize to Sum**        | `normalizeToSum(values, target)`                | Rescales a list to sum to `target`, preserving proportions.           | `normalizeToSum`     |
| **Geometric Lerp**          | `geometricLerp(a, b, t)`                        | Multiplicative interpolation; the midpoint is $\sqrt{a \cdot b}$.     | `geometricLerp`      |
| **Proportional Split**      | `proportionalSplit(total, ...weights)`          | Splits an integer total into whole parts that sum exactly to it.      | `proportionalSplit`  |

<details>
<summary><strong>🧪 Click here - Function tests executed in console.log</strong></summary>

```javascript
// Function tests executed in console.log
// #Usage Example
// #### 1. Fundamental Arithmetic

// 1.A) With NPM/Vite (Modern Bundlers)
// This is the recommended method for project development.
import { arithmetic, constants } from "codymath";

// 1.B) With a CDN (Directly in the Browser)
// <script src="https://cdn.jsdelivr.net/npm/codymath@latest/dist/codymath.umd.js"></script>
const { arithmetic, constants } = codymath;

// --- sum ---
console.log(`sum(5, 10, 15): ${arithmetic.sum(5, 10, 15)}`);
// Output: sum(5, 10, 15): 30

console.log(`sum(-10, 5, 2.5): ${arithmetic.sum(-10, 5, 2.5)}`);
// Output: sum(-10, 5, 2.5): -2.5

console.log(`sum(): ${arithmetic.sum()}`);
// Output: sum(): 0

// --- subtract ---
console.log(`subtract(20, 8): ${arithmetic.subtract(20, 8)}`);
// Output: subtract(20, 8): 12

console.log(`subtract(5, 10): ${arithmetic.subtract(5, 10)}`);
// Output: subtract(5, 10): -5

console.log(`subtract(-5, -3): ${arithmetic.subtract(-5, -3)}`);
// Output: subtract(-5, -3): -2

// --- multiply ---
console.log(`multiply(2, 3, 5): ${arithmetic.multiply(2, 3, 5)}`);
// Output: multiply(2, 3, 5): 30

console.log(`multiply(10, -2, 0, 50): ${arithmetic.multiply(10, -2, 0, 50)}`);
// Output: multiply(10, -2, 0, 50): 0

console.log(`multiply(0, 0): ${arithmetic.multiply(0, 0)}`);
// Output: multiply(): 0

// --- divide ---
console.log(`divide(100, 4): ${arithmetic.divide(100, 4)}`);
// Output: divide(100, 4): 25

console.log(`divide(-15, 2): ${arithmetic.divide(-15, 2)}`);
// Output: divide(-15, 2): -7.5

try {
   arithmetic.divide(10, 0);
} catch (e) {
   console.log(`divide(10, 0): ${e.message}`);
   // Output: divide(10, 0): Division by zero is not allowed.
}

// --- mean ---
console.log(`mean(1, 2, 3, 4, 5): ${arithmetic.mean(1, 2, 3, 4, 5)}`);
// Output: mean(1, 2, 3, 4, 5): 3

console.log(`mean(-10, 0, 10, 20): ${arithmetic.mean(-10, 0, 10, 20)}`);
// Output: mean(-10, 0, 10, 20): 5

console.log(`mean(): ${arithmetic.mean()}`);
// Output: mean(): NaN

// #### 2. Exponentiation & Roots

// --- power(base, exponent) ---

console.log(`power(2, 3): ${arithmetic.power(2, 3)}`);
// Output: power(2, 3): 8

console.log(`power(-3, 3): ${arithmetic.power(-3, 3)}`);
// Output: power(-3, 3): -27

console.log(`power(16, 0.5): ${arithmetic.power(16, 0.5)}`);
// Output: power(16, 0.5): 4

// --- sqrt(n) ---
console.log(`sqrt(25): ${arithmetic.sqrt(25)}`);
// Output: sqrt(25): 5

console.log(`sqrt(2): ${arithmetic.sqrt(2)}`);
// Output: sqrt(2): 1.4142135623730951

console.log(`sqrt(0): ${arithmetic.sqrt(0)}`);
// Output: sqrt(0): 0

// --- cbrt(n) ---
console.log(`cbrt(27): ${arithmetic.cbrt(27)}`);
// Output: cbrt(27): 3

console.log(`cbrt(-8): ${arithmetic.cbrt(-8)}`);
// Output: cbrt(-8): -2

console.log(`cbrt(0.125): ${arithmetic.cbrt(0.125)}`);
// Output: cbrt(0.125): 0.5

// --- nthRoot(n, root) ---
console.log(`nthRoot(16, 4): ${arithmetic.nthRoot(16, 4)}`);
// Output: nthRoot(16, 4): 2

console.log(`nthRoot(3125, 5): ${arithmetic.nthRoot(3125, 5)}`);
// Output: nthRoot(3125, 5): 5

console.log(`nthRoot(2, 10): ${arithmetic.nthRoot(2, 10)}`);
// Output: nthRoot(2, 10): 1.0717734625362931

// --- exp(n) ---
console.log(`exp(1): ${arithmetic.exp(1)}`);
// Output: exp(1): 2.718281828459045

console.log(`exp(2): ${arithmetic.exp(2)}`);
// Output: exp(2): 7.38905609893065

console.log(`exp(10): ${arithmetic.exp(10)}`);
// Output: exp(10): 22026.465794806718

// #### 3. Logarithms

// --- ln(n) ---
console.log(`ln(e): ${arithmetic.ln(Math.E)}`);
// Output: ln(e): 1

console.log(`ln(20): ${arithmetic.ln(20)}`);
// Output: ln(20): 2.995732273553991

console.log(`ln(0.5): ${arithmetic.ln(0.5)}`);
// Output: ln(0.5): -0.6931471805599453

// --- log10(n) ---
console.log(`log10(1000): ${arithmetic.log10(1000)}`);
// Output: log10(1000): 3

console.log(`log10(0.1): ${arithmetic.log10(0.1)}`);
// Output: log10(0.1): -1

console.log(`log10(1): ${arithmetic.log10(1)}`);
// Output: log10(1): 0

// --- log2(n) ---
// Simple: log base 2 of 8
console.log(`log2(8): ${arithmetic.log2(8)}`);
// Output: log2(8): 3

console.log(`log2(0.5): ${arithmetic.log2(0.5)}`);
// Output: log2(0.5): -1

console.log(`log2(1024): ${arithmetic.log2(1024)}`);
// Output: log2(1024): 10

// --- log(n, base) ---
console.log(`log(25, 5): ${arithmetic.log(25, 5)}`);
// Output: log(25, 5): 2

console.log(`log(32, 2): ${arithmetic.log(32, 2)}`);
// Output: log(32, 2): 5

console.log(`log(0.01, 10): ${arithmetic.log(0.01, 10)}`);
// Output: log(0.01, 10): -2

// #### 4. Number Theory & Divisibility

// --- gcd(a, b) ---
// Basic: GCD of two simple integers
console.log(`gcd(54, 24): ${arithmetic.gcd(54, 24)}`);
// Output: gcd(54, 24): 6

// Intermediate: GCD with negative numbers
console.log(`gcd(-54, -24): ${arithmetic.gcd(-54, -24)}`);
// Output: gcd(-54, -24): 6

// Advanced: GCD with float inputs (demonstrating robustness)
console.log(`gcd(48.9, 18.2): ${arithmetic.gcd(48.9, 18.2)}`);
// Output: gcd(48.9, 18.2): 6

// Note on gcd with Floats: The Codyme Academy gcd function is designed for robustness. It internally truncates any decimal inputs to integers (e.g.,
// 48.9 becomes 48) and uses their absolute values. This ensures the function always returns a valid integer result instead of throwing an error for
// non-integer inputs.

// --- lcm(a, b) ---
// Basic: LCM of two simple integers
console.log(`lcm(21, 6): ${arithmetic.lcm(21, 6)}`);
// Output: lcm(21, 6): 42

// Intermediate: LCM with negative numbers
console.log(`lcm(-7, 5): ${arithmetic.lcm(-7, 5)}`);
// Output: lcm(-7, 5): 35

// Advanced: LCM where one number is a multiple of the other
console.log(`lcm(10, 100): ${arithmetic.lcm(10, 100)}`);
// Output: lcm(10, 100): 100

// --- isPrime(n) ---
// Basic: Checking a known prime
console.log(`isPrime(29): ${arithmetic.isPrime(29)}`);
// Output: isPrime(29): true

// Intermediate: Checking a known non-prime
console.log(`isPrime(15): ${arithmetic.isPrime(15)}`);
// Output: isPrime(15): false

// Advanced: Checking edge cases like 1 and 2
console.log(`isPrime(1): ${arithmetic.isPrime(1)}`);
// Output: isPrime(1): false

// --- isEven(n) / isOdd(n) ---
// Basic: Checking an even and an odd number
console.log(`isEven(10): ${arithmetic.isEven(10)}`);
// Output: isEven(10): true
console.log(`isOdd(10): ${arithmetic.isOdd(10)}`);
// Output: isOdd(10): false

// Intermediate: Checking with negative numbers
console.log(`isEven(-4): ${arithmetic.isEven(-4)}`);
// Output: isEven(-4): true
console.log(`isOdd(-5): ${arithmetic.isOdd(-5)}`);
// Output: isOdd(-5): true

// Advanced: Checking the parity of zero
console.log(`isEven(0): ${arithmetic.isEven(0)}`);
// Output: isEven(0): true
console.log(`isOdd(0): ${arithmetic.isOdd(0)}`);
// Output: isOdd(0): false

// --- factorial(n) ---
// Basic: Factorial of a small number
console.log(`factorial(5): ${arithmetic.factorial(5)}`);
// Output: factorial(5): 120

// Intermediate: Factorial of zero
console.log(`factorial(0): ${arithmetic.factorial(0)}`);
// Output: factorial(0): 1

// Advanced: Factorial of a negative number (invalid case)
console.log(`factorial(-5): ${arithmetic.factorial(-5)}`);
// Output: factorial(-5): NaN

// #### 5. Rounding & Manipulation

// --- absolute(n) ---
// Basic: Absolute of a negative number
console.log(`absolute(-10): ${arithmetic.absolute(-10)}`);
// Output: absolute(-10): 10

// Intermediate: Absolute of a positive float
console.log(`absolute(3.14): ${arithmetic.absolute(3.14)}`);
// Output: absolute(3.14): 3.14

// Advanced: Absolute of zero
console.log(`absolute(0): ${arithmetic.absolute(0)}`);
// Output: absolute(0): 0

// --- round(n, decimals) ---
// Basic: Rounding to the nearest integer
console.log(`round(3.14159): ${arithmetic.round(3.14159)}`);
// Output: round(3.14159): 3

// Intermediate: Rounding to 2 decimal places
console.log(`round(3.14159, 2): ${arithmetic.round(3.14159, 2)}`);
// Output: round(3.14159, 2): 3.14

// Advanced: Rounding to the nearest hundred (negative decimals)
console.log(`round(1286, -2): ${arithmetic.round(1286, -2)}`);
// Output: round(1286, -2): 1300

// --- floor(n) / ceil(n) / trunc(n) ---
// Basic: Comparing the functions for a positive number
console.log(`floor(5.95): ${arithmetic.floor(5.95)}`); // Output: 5
console.log(`ceil(5.05): ${arithmetic.ceil(5.05)}`); // Output: 6
console.log(`trunc(5.5): ${arithmetic.trunc(5.5)}`); // Output: 5

// Intermediate: Comparing the functions for a negative number
console.log(`floor(-5.05): ${arithmetic.floor(-5.05)}`); // Output: -6
console.log(`ceil(-5.95): ${arithmetic.ceil(-5.95)}`); // Output: -5
console.log(`trunc(-5.5): ${arithmetic.trunc(-5.5)}`); // Output: -5

// Advanced: Applying to an integer
console.log(`floor(7): ${arithmetic.floor(7)}`); // Output: 7
console.log(`ceil(7): ${arithmetic.ceil(7)}`); // Output: 7
console.log(`trunc(7): ${arithmetic.trunc(7)}`); // Output: 7

// --- sign(n) ---
// Basic: Sign of a positive number
console.log(`sign(100): ${arithmetic.sign(100)}`);
// Output: sign(100): 1

// Intermediate: Sign of a negative number
console.log(`sign(-0.005): ${arithmetic.sign(-0.005)}`);
// Output: sign(-0.005): -1

// Advanced: Sign of zero
console.log(`sign(0): ${arithmetic.sign(0)}`);
// Output: sign(0): 0

// #### 6. Utilities & Interpolation

// --- clamp(value, min, max) ---
// Basic: Value is within range
console.log(`clamp(50, 0, 100): ${arithmetic.clamp(50, 0, 100)}`);
// Output: clamp(50, 0, 100): 50

// Intermediate: Value is below minimum
console.log(`clamp(-5, 0, 100): ${arithmetic.clamp(-5, 0, 100)}`);
// Output: clamp(-5, 0, 100): 0

// Advanced: Value is above maximum
console.log(`clamp(120, 0, 100): ${arithmetic.clamp(120, 0, 100)}`);
// Output: clamp(120, 0, 100): 100

// --- lerp(a, b, t) ---
// Basic: Interpolating to the midpoint (t=0.5)
console.log(`lerp(10, 20, 0.5): ${arithmetic.lerp(10, 20, 0.5)}`);
// Output: lerp(10, 20, 0.5): 15

// Intermediate: Interpolating 25% of the way
console.log(`lerp(10, 20, 0.25): ${arithmetic.lerp(10, 20, 0.25)}`);
// Output: lerp(10, 20, 0.25): 12.5

// Advanced: Extrapolating beyond the range (t > 1)
console.log(`lerp(10, 20, 2): ${arithmetic.lerp(10, 20, 2)}`);
// Output: lerp(10, 20, 2): 30

// --- isInRange(n, start, end) ---
// Basic: Checking a number that is inside
console.log(`isInRange(5, 0, 10): ${arithmetic.isInRange(5, 0, 10)}`);
// Output: isInRange(5, 0, 10): true

// Intermediate: Checking a number that is outside
console.log(`isInRange(15, 0, 10): ${arithmetic.isInRange(15, 0, 10)}`);
// Output: isInRange(15, 0, 10): false

// Advanced: Checking the inclusive boundaries
console.log(`isInRange(10, 0, 10): ${arithmetic.isInRange(10, 0, 10)}`);
// Output: isInRange(10, 0, 10): true

// --- mod(a, b) ---
// Basic: Modulo with positive numbers
console.log(`mod(10, 3): ${arithmetic.mod(10, 3)}`);
// Output: mod(10, 3): 1

// Intermediate: The key difference from % with negative dividend
console.log(`mod(-10, 3): ${arithmetic.mod(-10, 3)}`);
// Output: mod(-10, 3): 2

// Advanced: Result sign matches the divisor
console.log(`mod(10, -3): ${arithmetic.mod(10, -3)}`);
// Output: mod(10, -3): -2

// --- isNegativeZero(n) ---
// Basic: Checking positive zero
console.log(`isNegativeZero(0): ${arithmetic.isNegativeZero(0)}`);
// Output: isNegativeZero(0): false

// Intermediate: Checking negative zero
console.log(`isNegativeZero(-0): ${arithmetic.isNegativeZero(-0)}`);
// Output: isNegativeZero(-0): true

// Advanced: Checking a non-zero number
console.log(`isNegativeZero(-5): ${arithmetic.isNegativeZero(-5)}`);
// Output: isNegativeZero(-5): false

// #### 7. Number Theory & Divisibility (Extended)

// --- coprime(a, b) ---
// Basic: Two numbers with no common factor
console.log(`coprime(8, 15): ${arithmetic.coprime(8, 15)}`);
// Output: coprime(8, 15): true

// Intermediate: Two numbers sharing a factor (2)
console.log(`coprime(4, 6): ${arithmetic.coprime(4, 6)}`);
// Output: coprime(4, 6): false

// Advanced: Consecutive integers are always coprime
console.log(`coprime(14, 15): ${arithmetic.coprime(14, 15)}`);
// Output: coprime(14, 15): true

// --- divisors(n) ---
// Basic: All divisors of a composite number
console.log(`divisors(12): ${arithmetic.divisors(12)}`);
// Output: divisors(12): 1,2,3,4,6,12

// Intermediate: A prime number has exactly two divisors
console.log(`divisors(7): ${arithmetic.divisors(7)}`);
// Output: divisors(7): 1,7

// Advanced: Perfect squares list their root only once
console.log(`divisors(36): ${arithmetic.divisors(36)}`);
// Output: divisors(36): 1,2,3,4,6,9,12,18,36

// --- digits(n) ---
// Basic: Counting digits of a positive integer
console.log(`digits(12345): ${arithmetic.digits(12345)}`);
// Output: digits(12345): 5

// Intermediate: The sign is not a digit
console.log(`digits(-9876): ${arithmetic.digits(-9876)}`);
// Output: digits(-9876): 4

// Advanced: Zero has exactly one digit
console.log(`digits(0): ${arithmetic.digits(0)}`);
// Output: digits(0): 1

// --- fibonacci(n) ---
// Basic: The 10th Fibonacci number (0-indexed)
console.log(`fibonacci(10): ${arithmetic.fibonacci(10)}`);
// Output: fibonacci(10): 55

// Intermediate: The sequence starts at F(0) = 0
console.log(`fibonacci(0): ${arithmetic.fibonacci(0)}`);
// Output: fibonacci(0): 0

// Advanced: Large indices, iteratively — no stack overflow
console.log(`fibonacci(50): ${arithmetic.fibonacci(50)}`);
// Output: fibonacci(50): 12586269025

// --- gcdMultiple(...numbers) ---
// Basic: GCD of three integers
console.log(`gcdMultiple(12, 18, 24): ${arithmetic.gcdMultiple(12, 18, 24)}`);
// Output: gcdMultiple(12, 18, 24): 6

// Intermediate: GCD of four integers
console.log(
   `gcdMultiple(10, 20, 30, 40): ${arithmetic.gcdMultiple(10, 20, 30, 40)}`,
);
// Output: gcdMultiple(10, 20, 30, 40): 10

// Advanced: Distinct primes — GCD is 1 (early exit kicks in)
console.log(`gcdMultiple(17, 13, 11): ${arithmetic.gcdMultiple(17, 13, 11)}`);
// Output: gcdMultiple(17, 13, 11): 1

// --- lcmMultiple(...numbers) ---
// Basic: LCM of three integers
console.log(`lcmMultiple(2, 3, 4): ${arithmetic.lcmMultiple(2, 3, 4)}`);
// Output: lcmMultiple(2, 3, 4): 12

// Intermediate: Smallest number divisible by all of 1..10
console.log(
   `lcmMultiple(1, 2, 3, 4, 5, 6, 7, 8, 9, 10): ${arithmetic.lcmMultiple(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`,
);
// Output: lcmMultiple(1, 2, 3, 4, 5, 6, 7, 8, 9, 10): 2520

// Advanced: Zero absorbs everything
console.log(`lcmMultiple(4, 0, 6): ${arithmetic.lcmMultiple(4, 0, 6)}`);
// Output: lcmMultiple(4, 0, 6): 0

// --- modPow(base, exponent, modulus) ---
// Basic: (2^10) % 1000
console.log(`modPow(2, 10, 1000): ${arithmetic.modPow(2, 10, 1000)}`);
// Output: modPow(2, 10, 1000): 24

// Intermediate: Astronomical exponents without overflow — power() would return Infinity
console.log(`modPow(7, 1e15, 13): ${arithmetic.modPow(7, 1e15, 13)}`);
// Output: modPow(7, 1e15, 13): 9

// Advanced: Real RSA roundtrip (textbook keys: n=3233, e=17, d=2753)
const encrypted = arithmetic.modPow(65, 17, 3233);
console.log(`encrypt: ${encrypted}`);
// Output: encrypt: 2790
console.log(`decrypt: ${arithmetic.modPow(encrypted, 2753, 3233)}`);
// Output: decrypt: 65

// #### 8. Safe Operations & Aggregations

// --- safeDiv(a, b, fallback) ---
// Basic: Normal division
console.log(`safeDiv(10, 2): ${arithmetic.safeDiv(10, 2)}`);
// Output: safeDiv(10, 2): 5

// Intermediate: Division by zero returns the default fallback (0)
console.log(`safeDiv(10, 0): ${arithmetic.safeDiv(10, 0)}`);
// Output: safeDiv(10, 0): 0

// Advanced: Custom fallback value
console.log(`safeDiv(10, 0, -1): ${arithmetic.safeDiv(10, 0, -1)}`);
// Output: safeDiv(10, 0, -1): -1

// --- sumOfSquares(...numbers) ---
// Basic: Pythagorean pair — 3² + 4²
console.log(`sumOfSquares(3, 4): ${arithmetic.sumOfSquares(3, 4)}`);
// Output: sumOfSquares(3, 4): 25

// Intermediate: Multiple values
console.log(`sumOfSquares(1, 2, 3): ${arithmetic.sumOfSquares(1, 2, 3)}`);
// Output: sumOfSquares(1, 2, 3): 14

// Advanced: Squaring removes the sign
console.log(`sumOfSquares(-3, 4): ${arithmetic.sumOfSquares(-3, 4)}`);
// Output: sumOfSquares(-3, 4): 25

// #### 9. Interpolation & Percentages

// --- inverseLerp(a, b, value) ---
// Basic: Where does 7.5 sit between 0 and 10?
console.log(`inverseLerp(0, 10, 7.5): ${arithmetic.inverseLerp(0, 10, 7.5)}`);
// Output: inverseLerp(0, 10, 7.5): 0.75

// Intermediate: Values beyond the range extrapolate (t > 1)
console.log(`inverseLerp(0, 10, 20): ${arithmetic.inverseLerp(0, 10, 20)}`);
// Output: inverseLerp(0, 10, 20): 2

// Advanced: Degenerate range (a === b) has no meaningful t
console.log(`inverseLerp(5, 5, 5): ${arithmetic.inverseLerp(5, 5, 5)}`);
// Output: inverseLerp(5, 5, 5): NaN

// --- percentOf(value, total) ---
// Basic: What percentage is 25 of 200?
console.log(`percentOf(25, 200): ${arithmetic.percentOf(25, 200)}`);
// Output: percentOf(25, 200): 12.5

// Intermediate: A value equal to its total is always 100%
console.log(`percentOf(7, 7): ${arithmetic.percentOf(7, 7)}`);
// Output: percentOf(7, 7): 100

// Advanced: Repeating decimals are preserved
console.log(`percentOf(1, 3): ${arithmetic.percentOf(1, 3)}`);
// Output: percentOf(1, 3): 33.33333333333333

// --- fromPercent(percent, total) ---
// Basic: What is 12.5% of 200?
console.log(`fromPercent(12.5, 200): ${arithmetic.fromPercent(12.5, 200)}`);
// Output: fromPercent(12.5, 200): 25

// Intermediate: 100% is the identity
console.log(`fromPercent(100, 89.9): ${arithmetic.fromPercent(100, 89.9)}`);
// Output: fromPercent(100, 89.9): 89.9

// Advanced: Perfect inverse of percentOf (roundtrip)
console.log(
   `fromPercent(percentOf(25, 200), 200): ${arithmetic.fromPercent(arithmetic.percentOf(25, 200), 200)}`,
);
// Output: fromPercent(percentOf(25, 200), 200): 25

// #### 10. Statistics

// --- median(...numbers) ---
// Basic: Median of an odd-sized dataset
console.log(`median(1, 3, 5, 7, 9): ${arithmetic.median(1, 3, 5, 7, 9)}`);
// Output: median(1, 3, 5, 7, 9): 5
// Intermediate: Even size averages the two central values
console.log(`median(10, 2, 8, 4): ${arithmetic.median(10, 2, 8, 4)}`);
// Output: median(10, 2, 8, 4): 6
// Advanced: An empty dataset has no median
console.log(`median(): ${arithmetic.median()}`);
// Output: median(): NaN

// --- min(...numbers) ---
// Basic: Smallest of several values
console.log(`min(3, 1, 4, 1, 5): ${arithmetic.min(3, 1, 4, 1, 5)}`);
// Output: min(3, 1, 4, 1, 5): 1
// Intermediate: Works with negatives
console.log(`min(-10, -5, -20): ${arithmetic.min(-10, -5, -20)}`);
// Output: min(-10, -5, -20): -20
// Advanced: Empty input is NaN, never Infinity
console.log(`min(): ${arithmetic.min()}`);
// Output: min(): NaN

// --- max(...numbers) ---
// Basic: Largest of several values
console.log(`max(3, 1, 4, 1, 5): ${arithmetic.max(3, 1, 4, 1, 5)}`);
// Output: max(3, 1, 4, 1, 5): 5
// Intermediate: Works with negatives
console.log(`max(-10, -5, -20): ${arithmetic.max(-10, -5, -20)}`);
// Output: max(-10, -5, -20): -5
// Advanced: Empty input is NaN, never -Infinity
console.log(`max(): ${arithmetic.max()}`);
// Output: max(): NaN

// --- variance(...numbers) ---
// Basic: Population variance of a dataset
console.log(
   `variance(2, 4, 4, 4, 5, 5, 7, 9): ${arithmetic.variance(2, 4, 4, 4, 5, 5, 7, 9)}`,
);
// Output: variance(2, 4, 4, 4, 5, 5, 7, 9): 4
// Intermediate: Identical values have zero spread
console.log(`variance(5, 5, 5, 5): ${arithmetic.variance(5, 5, 5, 5)}`);
// Output: variance(5, 5, 5, 5): 0
// Advanced: An empty dataset is undefined
console.log(`variance(): ${arithmetic.variance()}`);
// Output: variance(): NaN

// --- standardDeviation(...numbers) ---
// Basic: Population standard deviation (sqrt of variance)
console.log(
   `standardDeviation(2, 4, 4, 4, 5, 5, 7, 9): ${arithmetic.standardDeviation(2, 4, 4, 4, 5, 5, 7, 9)}`,
);
// Output: standardDeviation(2, 4, 4, 4, 5, 5, 7, 9): 2
// Intermediate: No spread, no deviation
console.log(
   `standardDeviation(10, 10, 10): ${arithmetic.standardDeviation(10, 10, 10)}`,
);
// Output: standardDeviation(10, 10, 10): 0
// Advanced: An empty dataset is undefined
console.log(`standardDeviation(): ${arithmetic.standardDeviation()}`);
// Output: standardDeviation(): NaN

// --- mode(...numbers) ---
// Basic: The single most frequent value
console.log(`mode(1, 2, 2, 3, 4): ${arithmetic.mode(1, 2, 2, 3, 4)}`);
// Output: mode(1, 2, 2, 3, 4): 2
// Intermediate: Multimodal data returns every top value
console.log(`mode(1, 1, 2, 2, 3): ${arithmetic.mode(1, 1, 2, 2, 3)}`);
// Output: mode(1, 1, 2, 2, 3): 1,2
// Advanced: No data, no mode
console.log(`mode(): ${arithmetic.mode()}`);
// Output: mode():

// #### 11. Number Theory (Extended)

// --- sumOfDigits(n) ---
// Basic: Sum of the decimal digits
console.log(`sumOfDigits(12345): ${arithmetic.sumOfDigits(12345)}`);
// Output: sumOfDigits(12345): 15
// Intermediate: The sign is ignored
console.log(`sumOfDigits(-9876): ${arithmetic.sumOfDigits(-9876)}`);
// Output: sumOfDigits(-9876): 30
// Advanced: Floats are truncated before summing
console.log(`sumOfDigits(99.9): ${arithmetic.sumOfDigits(99.9)}`);
// Output: sumOfDigits(99.9): 18

// --- isPerfectSquare(n) ---
// Basic: 144 is 12 squared
console.log(`isPerfectSquare(144): ${arithmetic.isPerfectSquare(144)}`);
// Output: isPerfectSquare(144): true
// Intermediate: 150 is not a perfect square
console.log(`isPerfectSquare(150): ${arithmetic.isPerfectSquare(150)}`);
// Output: isPerfectSquare(150): false
// Advanced: Non-integers are never perfect squares (no truncation)
console.log(`isPerfectSquare(15.21): ${arithmetic.isPerfectSquare(15.21)}`);
// Output: isPerfectSquare(15.21): false

// --- isPerfectNumber(n) ---
// Basic: 6 = 1 + 2 + 3, the smallest perfect number
console.log(`isPerfectNumber(6): ${arithmetic.isPerfectNumber(6)}`);
// Output: isPerfectNumber(6): true
// Intermediate: 28 = 1 + 2 + 4 + 7 + 14
console.log(`isPerfectNumber(28): ${arithmetic.isPerfectNumber(28)}`);
// Output: isPerfectNumber(28): true
// Advanced: 12 is abundant, not perfect
console.log(`isPerfectNumber(12): ${arithmetic.isPerfectNumber(12)}`);
// Output: isPerfectNumber(12): false

// --- primeFactors(n) ---
// Basic: Factorization with multiplicity
console.log(`primeFactors(60): ${arithmetic.primeFactors(60)}`);
// Output: primeFactors(60): 2,2,3,5
// Intermediate: A prime factors into itself
console.log(`primeFactors(97): ${arithmetic.primeFactors(97)}`);
// Output: primeFactors(97): 97
// Advanced: 1 has no prime factors
console.log(`primeFactors(1): ${arithmetic.primeFactors(1)}`);
// Output: primeFactors(1):

// --- modInverse(a, m) ---
// Basic: 3 x 4 = 12 = 1 (mod 11)
console.log(`modInverse(3, 11): ${arithmetic.modInverse(3, 11)}`);
// Output: modInverse(3, 11): 4
// Intermediate: Inverse of 10 modulo 17
console.log(`modInverse(10, 17): ${arithmetic.modInverse(10, 17)}`);
// Output: modInverse(10, 17): 12
// Advanced: No inverse exists when a and m share a factor
console.log(`modInverse(2, 4): ${arithmetic.modInverse(2, 4)}`);
// Output: modInverse(2, 4): NaN

// --- totient(n) ---
// Basic: Six integers below 9 are coprime to it
console.log(`totient(9): ${arithmetic.totient(9)}`);
// Output: totient(9): 6
// Intermediate: For a prime p, the totient is p - 1
console.log(`totient(7): ${arithmetic.totient(7)}`);
// Output: totient(7): 6
// Advanced: totient(1) is 1 by convention
console.log(`totient(1): ${arithmetic.totient(1)}`);
// Output: totient(1): 1

// #### 12. Combinatorics

// --- binomial(n, k) ---
// Basic: Choose 2 from 5
console.log(`binomial(5, 2): ${arithmetic.binomial(5, 2)}`);
// Output: binomial(5, 2): 10
// Intermediate: There is exactly one way to choose nothing
console.log(`binomial(10, 0): ${arithmetic.binomial(10, 0)}`);
// Output: binomial(10, 0): 1
// Advanced: Distinct 5-card poker hands from 52
console.log(`binomial(52, 5): ${arithmetic.binomial(52, 5)}`);
// Output: binomial(52, 5): 2598960

// --- permutations(n, k) ---
// Basic: Ordered arrangements of 2 from 5
console.log(`permutations(5, 2): ${arithmetic.permutations(5, 2)}`);
// Output: permutations(5, 2): 20
// Intermediate: Arrangements of 3 from 10
console.log(`permutations(10, 3): ${arithmetic.permutations(10, 3)}`);
// Output: permutations(10, 3): 720
// Advanced: P(6, 6) equals 6 factorial
console.log(`permutations(6, 6): ${arithmetic.permutations(6, 6)}`);
// Output: permutations(6, 6): 720

// --- multiplyMultiple(...numbers) ---
// Basic: Product of several numbers
console.log(
   `multiplyMultiple(2, 3, 4): ${arithmetic.multiplyMultiple(2, 3, 4)}`,
);
// Output: multiplyMultiple(2, 3, 4): 24
// Intermediate: A negative factor flips the sign
console.log(
   `multiplyMultiple(5, -2, 10): ${arithmetic.multiplyMultiple(5, -2, 10)}`,
);
// Output: multiplyMultiple(5, -2, 10): -100
// Advanced: The empty product is the identity, 1
console.log(`multiplyMultiple(): ${arithmetic.multiplyMultiple()}`);
// Output: multiplyMultiple(): 1

// #### 13. Geometry, Interpolation & Signal Shaping

// --- hypot(...values) ---
// Basic: The classic 3-4-5 right triangle
console.log(`hypot(3, 4): ${arithmetic.hypot(3, 4)}`);
// Output: hypot(3, 4): 5
// Intermediate: Works in any dimension
console.log(`hypot(1, 2, 2): ${arithmetic.hypot(1, 2, 2)}`);
// Output: hypot(1, 2, 2): 3
// Advanced: The 5-12-13 triple
console.log(`hypot(5, 12): ${arithmetic.hypot(5, 12)}`);
// Output: hypot(5, 12): 13

// --- clampedLerp(a, b, t) ---
// Basic: Halfway between 0 and 100
console.log(`clampedLerp(0, 100, 0.5): ${arithmetic.clampedLerp(0, 100, 0.5)}`);
// Output: clampedLerp(0, 100, 0.5): 50
// Intermediate: t above 1 is clamped (no extrapolation)
console.log(`clampedLerp(0, 100, 1.5): ${arithmetic.clampedLerp(0, 100, 1.5)}`);
// Output: clampedLerp(0, 100, 1.5): 100
// Advanced: t below 0 is clamped to the start
console.log(
   `clampedLerp(0, 100, -0.5): ${arithmetic.clampedLerp(0, 100, -0.5)}`,
);
// Output: clampedLerp(0, 100, -0.5): 0

// --- mapRange(value, inMin, inMax, outMin, outMax) ---
// Basic: Remap 5 from [0,10] onto [0,100]
console.log(
   `mapRange(5, 0, 10, 0, 100): ${arithmetic.mapRange(5, 0, 10, 0, 100)}`,
);
// Output: mapRange(5, 0, 10, 0, 100): 50
// Intermediate: Remap a percentage onto [-1, 1]
console.log(
   `mapRange(25, 0, 100, -1, 1): ${arithmetic.mapRange(25, 0, 100, -1, 1)}`,
);
// Output: mapRange(25, 0, 100, -1, 1): -0.5
// Advanced: Map a normalized axis onto degrees
console.log(
   `mapRange(0, -1, 1, 0, 360): ${arithmetic.mapRange(0, -1, 1, 0, 360)}`,
);
// Output: mapRange(0, -1, 1, 0, 360): 180

// --- geometricLerp(a, b, t) ---
// Basic: The midpoint is the geometric mean
console.log(
   `geometricLerp(1, 100, 0.5): ${arithmetic.geometricLerp(1, 100, 0.5)}`,
);
// Output: geometricLerp(1, 100, 0.5): 10
// Intermediate: Each quarter-step multiplies the scale by 2
console.log(
   `geometricLerp(1, 16, 0.25): ${arithmetic.geometricLerp(1, 16, 0.25)}`,
);
// Output: geometricLerp(1, 16, 0.25): 2
// Advanced: Endpoints must be positive
console.log(
   `geometricLerp(-1, 10, 0.5): ${arithmetic.geometricLerp(-1, 10, 0.5)}`,
);
// Output: geometricLerp(-1, 10, 0.5): NaN

// --- signedPow(base, exp) ---
// Basic: Solves the (-4) ** 0.5 = NaN trap
console.log(`signedPow(-4, 0.5): ${arithmetic.signedPow(-4, 0.5)}`);
// Output: signedPow(-4, 0.5): -2
// Intermediate: The sign survives even an even exponent
console.log(`signedPow(-3, 2): ${arithmetic.signedPow(-3, 2)}`);
// Output: signedPow(-3, 2): -9
// Advanced: Softening a small positive value
console.log(`signedPow(0.25, 0.5): ${arithmetic.signedPow(0.25, 0.5)}`);
// Output: signedPow(0.25, 0.5): 0.5

// --- deadzone(value, threshold) ---
// Basic: Input inside the dead zone collapses to 0
console.log(`deadzone(0.05, 0.1): ${arithmetic.deadzone(0.05, 0.1)}`);
// Output: deadzone(0.05, 0.1): 0
// Intermediate: Output is continuously rescaled past the edge
console.log(`deadzone(0.75, 0.5): ${arithmetic.deadzone(0.75, 0.5)}`);
// Output: deadzone(0.75, 0.5): 0.5
// Advanced: Full deflection is preserved at the extreme
console.log(`deadzone(-1, 0.2): ${arithmetic.deadzone(-1, 0.2)}`);
// Output: deadzone(-1, 0.2): -1

// #### 14. Sequences, Allocation & Formatting

// --- cumulativeSum(...numbers) ---
// Basic: Running totals of a sequence
console.log(
   `cumulativeSum(1, 2, 3, 4): ${arithmetic.cumulativeSum(1, 2, 3, 4)}`,
);
// Output: cumulativeSum(1, 2, 3, 4): 1,3,6,10
// Intermediate: A bank-statement-style balance
console.log(`cumulativeSum(10, -5, 3): ${arithmetic.cumulativeSum(10, -5, 3)}`);
// Output: cumulativeSum(10, -5, 3): 10,5,8
// Advanced: An empty sequence yields an empty array
console.log(`cumulativeSum(): ${arithmetic.cumulativeSum()}`);
// Output: cumulativeSum():

// --- normalizeToSum(values, target) ---
// Basic: Turn weights into a distribution summing to 1
console.log(`normalizeToSum([1, 3]): ${arithmetic.normalizeToSum([1, 3])}`);
// Output: normalizeToSum([1, 3]): 0.25,0.75
// Intermediate: Rescale to percentages (target 100)
console.log(
   `normalizeToSum([1, 1, 2], 100): ${arithmetic.normalizeToSum([1, 1, 2], 100)}`,
);
// Output: normalizeToSum([1, 1, 2], 100): 25,25,50
// Advanced: A zero-sum list cannot be normalized
console.log(`normalizeToSum([2, -2]): ${arithmetic.normalizeToSum([2, -2])}`);
// Output: normalizeToSum([2, -2]): NaN,NaN

// --- roundToSignificant(n, sigFigs) ---
// Basic: Two significant figures of a large integer
console.log(
   `roundToSignificant(123456, 2): ${arithmetic.roundToSignificant(123456, 2)}`,
);
// Output: roundToSignificant(123456, 2): 120000
// Intermediate: Significant figures adapt to tiny magnitudes
console.log(
   `roundToSignificant(0.00098, 1): ${arithmetic.roundToSignificant(0.00098, 1)}`,
);
// Output: roundToSignificant(0.00098, 1): 0.001
// Advanced: Rounds figures, not decimal places
console.log(
   `roundToSignificant(9.876, 2): ${arithmetic.roundToSignificant(9.876, 2)}`,
);
// Output: roundToSignificant(9.876, 2): 9.9

// --- proportionalSplit(total, ...weights) ---
// Basic: Split 100 three ways with no cent lost
console.log(
   `proportionalSplit(100, 1, 1, 1): ${arithmetic.proportionalSplit(100, 1, 1, 1)}`,
);
// Output: proportionalSplit(100, 1, 1, 1): 34,33,33
// Intermediate: Split by proportional weights
console.log(
   `proportionalSplit(10, 1, 2, 2): ${arithmetic.proportionalSplit(10, 1, 2, 2)}`,
);
// Output: proportionalSplit(10, 1, 2, 2): 2,4,4
// Advanced: The odd unit goes to the largest remainder
console.log(
   `proportionalSplit(7, 50, 50): ${arithmetic.proportionalSplit(7, 50, 50)}`,
);
// Output: proportionalSplit(7, 50, 50): 4,3
```

</details>

<details>
<summary><strong>🧪 Click here to see the test results via CDN and direct installation 🌐</strong></summary>

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/codymath@latest/dist/codymath.umd.js"></script>
    <meta name="author" content="Jackson Douglas de Souza">
    <title>CodyMath CDN Test</title>
</head>
<body>
  <h1>CodyMath CDN Test</h1>
  <div id="output"></div>
  <div id="output1"></div>
  <div id="output2"></div>
  <div id="output3"></div>
  <div id="output4"></div>
  <div id="output5"></div>
  <div id="output6"></div>
  <div id="output7"></div>
  <div id="output8"></div>
  <div id="output9"></div>
  <div id="output10"></div>
  <div id="output11"></div>
  <div id="output12"></div>
  <div id="output13"></div>
  <div id="output14"></div>

  <script>
    // 2. You can now use the global 'CodyMath' object
    const { arithmetic } = CodyMath;

    // Example of how to display it on the page
    document.getElementById('output1').innerText = `sum(5, 10, 15): ${arithmetic.sum(5, 10, 15)}`;
    document.getElementById('output2').innerText = `subtract(20, 8): ${arithmetic.subtract(20, 8)}`;
    document.getElementById('output3').innerText = `multiply(2, 3, 5): ${arithmetic.multiply(2, 3, 5)}`;
    document.getElementById('output4').innerText = `divide(-15, 2): ${arithmetic.divide(-15, 2)}`;
    document.getElementById('output5').innerText = `mean(1, 2, 3, 4, 5): ${arithmetic.mean(1, 2, 3, 4, 5)}`;
    document.getElementById('output6').innerText = `power(-3, 3): ${arithmetic.power(-3, 3)}`;
    document.getElementById('output7').innerText = `sqrt(2): ${arithmetic.sqrt(2)}`;
    document.getElementById('output8').innerText = `cbrt(0.125): ${arithmetic.cbrt(0.125)}`;
    document.getElementById('output9').innerText = `nthRoot(2, 10): ${arithmetic.nthRoot(2, 10)}`;
    document.getElementById('output10').innerText = `exp(10): ${arithmetic.exp(10)}`;
    document.getElementById('output11').innerText = `ln(0.5): ${arithmetic.ln(0.5)}`;
    document.getElementById('output12').innerText = `log10(0.1): ${arithmetic.log10(0.1)}`;
    document.getElementById('output13').innerText = `log2(1024): ${arithmetic.log2(1024)}`;
    document.getElementById('output14').innerText = `log(0.01, 10): ${arithmetic.log(0.01, 10)}`;
  </script>
</body>
</html>

```

![CodyMath Logo][testAlgebra01]

[testAlgebra01]: ./assets/img/testsImgs/algebra/testAlgebra01.png

```javascript
import { arithmetic } from "codymath";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>CodyMath — Espiral de Fibonacci</h1>
  <div style="margin: 12px 0; display: flex; align-items: center; gap: 12px;">
    <label for="terms">Termos:</label>
    <input type="range" id="terms" min="2" max="12" step="1" value="8" />
    <strong id="terms-out">8</strong>
  </div>
  <p>Sequência: <code id="seq"></code></p>
  <p>F(n)/F(n−1) = <code id="ratio"></code> (φ ≈ 1.6180339887)</p>
  <canvas id="canvas" width="800" height="500" style="border: 1px solid #ccc; max-width: 100%;"></canvas>
`;

const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
const ctx = canvas.getContext("2d")!;
const slider = document.querySelector<HTMLInputElement>("#terms")!;
const out = document.querySelector<HTMLElement>("#terms-out")!;
const seqEl = document.querySelector<HTMLElement>("#seq")!;
const ratioEl = document.querySelector<HTMLElement>("#ratio")!;

interface Square {
   x: number;
   y: number;
   s: number;
   k: number;
}

// Calcula a posição de cada quadrado F(k) girando 90° a cada passo
function layout(n: number): {
   squares: Square[];
   bx: number;
   by: number;
   bw: number;
   bh: number;
} {
   let x = 0,
      y = 0,
      w = 1,
      h = 1;
   const squares: Square[] = [{ x: 0, y: 0, s: 1, k: 1 }];
   let dir = 0;

   for (let k = 2; k <= n; k++) {
      const s = arithmetic.fibonacci(k);
      let nx: number, ny: number;

      if (dir === 0) {
         nx = x + w;
         ny = y + h - s;
      } // direita
      else if (dir === 1) {
         nx = x;
         ny = y - s;
      } // cima
      else if (dir === 2) {
         nx = x - s;
         ny = y;
      } // esquerda
      else {
         nx = x + w - s;
         ny = y + h;
      } // baixo

      squares.push({ x: nx, y: ny, s, k });

      const minX = Math.min(x, nx),
         minY = Math.min(y, ny);
      const maxX = Math.max(x + w, nx + s),
         maxY = Math.max(y + h, ny + s);
      x = minX;
      y = minY;
      w = maxX - minX;
      h = maxY - minY;
      dir = (dir + 1) % 4;
   }

   return { squares, bx: x, by: y, bw: w, bh: h };
}

function render(n: number): void {
   const { squares, bx, by, bw, bh } = layout(n);
   const pad = 20;
   const scale = Math.min(
      (canvas.width - 2 * pad) / bw,
      (canvas.height - 2 * pad) / bh,
   );
   const ox = pad + (canvas.width - 2 * pad - bw * scale) / 2 - bx * scale;
   const oy = pad + (canvas.height - 2 * pad - bh * scale) / 2 - by * scale;

   ctx.clearRect(0, 0, canvas.width, canvas.height);

   // Quadrados
   for (const q of squares) {
      const px = ox + q.x * scale;
      const py = oy + q.y * scale;
      const side = q.s * scale;

      ctx.fillStyle = "#EEEDFE";
      ctx.strokeStyle = "#534AB7";
      ctx.fillRect(px, py, side, side);
      ctx.strokeRect(px, py, side, side);

      if (side >= 24) {
         ctx.fillStyle = "#3C3489";
         ctx.font = `${Math.min(26, side * 0.3)}px monospace`;
         ctx.textAlign = "center";
         ctx.textBaseline = "middle";
         ctx.fillText(
            String(arithmetic.fibonacci(q.k)),
            px + side / 2,
            py + side / 2,
         );
      }
   }

   // Espiral: um quarto de círculo por quadrado (centro e ângulos por direção)
   ctx.strokeStyle = "#D85A30";
   ctx.lineWidth = 2.5;
   ctx.beginPath();
   for (const q of squares) {
      // O quadrado-semente (k=1) se comporta como dir 3; os demais usam (k-2) % 4
      const da = q.k === 1 ? 3 : (q.k - 2) % 4;
      const r = q.s * scale;
      let cx: number, cy: number, a0: number, a1: number;

      if (da === 0) {
         cx = q.x;
         cy = q.y;
         a0 = 0.5 * Math.PI;
         a1 = 0;
      } // centro: canto sup. esquerdo
      else if (da === 1) {
         cx = q.x;
         cy = q.y + q.s;
         a0 = 0;
         a1 = 1.5 * Math.PI;
      } // centro: canto inf. esquerdo
      else if (da === 2) {
         cx = q.x + q.s;
         cy = q.y + q.s;
         a0 = 1.5 * Math.PI;
         a1 = Math.PI;
      } // centro: canto inf. direito
      else {
         cx = q.x + q.s;
         cy = q.y;
         a0 = Math.PI;
         a1 = 0.5 * Math.PI;
      } // centro: canto sup. direito

      ctx.arc(ox + cx * scale, oy + cy * scale, r, a0, a1, true);
   }
   ctx.stroke();
   ctx.lineWidth = 1;

   // Sequência e razão áurea — mais dogfooding da lib
   const seq = Array.from({ length: n }, (_, i) => arithmetic.fibonacci(i + 1));
   seqEl.textContent = seq.join(", ");
   const ratio = arithmetic.divide(
      arithmetic.fibonacci(n),
      arithmetic.fibonacci(n - 1),
   );
   ratioEl.textContent = arithmetic.round(ratio, 10).toString();
}

slider.addEventListener("input", () => {
   out.textContent = slider.value;
   render(Number(slider.value));
});

render(8);

```

![CodyMath Logo][testAlgebra02]

[testAlgebra02]: ./assets/img/testsImgs/algebra/fib.png/

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CodyMath CDN Test</title>
  <script src="https://cdn.jsdelivr.net/npm/codymath@latest/dist/codymath.umd.js"></script>
</head>
<body>
  <h1>CodyMath Test</h1>
  <div id="output1"></div>
  <div id="output2"></div>
  <div id="output3"></div>
  <div id="output4"></div>
  <div id="output5"></div>
  <div id="output6"></div>
  <div id="output7"></div>
  <div id="output8"></div>
  <div id="output9"></div>
  <div id="output10"></div>
  <div id="output11"></div>
  <div id="output12"></div>
  <div id="output13"></div>
  <div id="output14"></div>
  <div id="output15"></div>
  <div id="output16"></div>
  <div id="output17"></div>
  <div id="output18"></div>
  <div id="output19"></div>
  <div id="output20"></div>
  <div id="output21"></div>
  <div id="output22"></div>
  <div id="output23"></div>
  <div id="output24"></div>
  <div id="output25"></div>
  <div id="output26"></div>
  <div id="output27"></div>
  <div id="output28"></div>
  <div id="output29"></div>
  <div id="output30"></div>
  <div id="output31"></div>
  <div id="output32"></div>
  <div id="output33"></div>
  <div id="output34"></div>
  <div id="output35"></div>
  <div id="output36"></div>
  <div id="output37"></div>
</body>
</html>


//--

const { arithmetic } = CodyMath;

// #### 7. Number Theory & Divisibility (Extended)
// --- coprime(a, b) ---
// Basic: Two numbers with no common factor
 document.getElementById('output1').innerText = `coprime(8, 15): ${arithmetic.coprime(8, 15)}`;
// Output: coprime(8, 15): true

// Intermediate: Two numbers sharing a factor (2)
document.getElementById('output2').innerText = `coprime(4, 6): ${arithmetic.coprime(4, 6)}`;
// Output: coprime(4, 6): false

// Advanced: Consecutive integers are always coprime
document.getElementById('output3').innerText = `coprime(14, 15): ${arithmetic.coprime(14, 15)}`;
// Output: coprime(14, 15): true

// --- divisors(n) ---
// Basic: All divisors of a composite number
document.getElementById('output4').innerText = `divisors(12): ${arithmetic.divisors(12)}`;
// Output: divisors(12): 1,2,3,4,6,12

// Intermediate: A prime number has exactly two divisors
document.getElementById('output5').innerText = `divisors(7): ${arithmetic.divisors(7)}`;
// Output: divisors(7): 1,7

// Advanced: Perfect squares list their root only once
document.getElementById('output6').innerText = `divisors(36): ${arithmetic.divisors(36)}`;
// Output: divisors(36): 1,2,3,4,6,9,12,18,36

// --- digits(n) ---
// Basic: Counting digits of a positive integer
document.getElementById('output7').innerText = `digits(12345): ${arithmetic.digits(12345)}`;
// Output: digits(12345): 5

// Intermediate: The sign is not a digit
document.getElementById('output8').innerText = `digits(-9876): ${arithmetic.digits(-9876)}`;
// Output: digits(-9876): 4

// Advanced: Zero has exactly one digit
document.getElementById('output9').innerText = `digits(0): ${arithmetic.digits(0)}`;
// Output: digits(0): 1

// --- fibonacci(n) ---
// Basic: The 10th Fibonacci number (0-indexed)
document.getElementById('output10').innerText = `fibonacci(10): ${arithmetic.fibonacci(10)}`;
// Output: fibonacci(10): 55

// Intermediate: The sequence starts at F(0) = 0
document.getElementById('output11').innerText = `fibonacci(0): ${arithmetic.fibonacci(0)}`;
// Output: fibonacci(0): 0

// Advanced: Large indices, iteratively — no stack overflow
document.getElementById('output12').innerText = `fibonacci(50): ${arithmetic.fibonacci(50)}`;
// Output: fibonacci(50): 12586269025

// --- gcdMultiple(...numbers) ---
// Basic: GCD of three integers
document.getElementById('output13').innerText = `gcdMultiple(12, 18, 24): ${arithmetic.gcdMultiple(12, 18, 24)}`;
// Output: gcdMultiple(12, 18, 24): 6

// Intermediate: GCD of four integers
document.getElementById('output14').innerText = `gcdMultiple(10, 20, 30, 40): ${arithmetic.gcdMultiple(10, 20, 30, 40)}`;
// Output: gcdMultiple(10, 20, 30, 40): 10

// Advanced: Distinct primes — GCD is 1 (early exit kicks in)
document.getElementById('output15').innerText = `gcdMultiple(17, 13, 11): ${arithmetic.gcdMultiple(17, 13, 11)}`;
// Output: gcdMultiple(17, 13, 11): 1

// --- lcmMultiple(...numbers) ---
// Basic: LCM of three integers
document.getElementById('output16').innerText = `lcmMultiple(2, 3, 4): ${arithmetic.lcmMultiple(2, 3, 4)}`;
// Output: lcmMultiple(2, 3, 4): 12

// Intermediate: Smallest number divisible by all of 1..10
document.getElementById('output17').innerText = `lcmMultiple(1, 2, 3, 4, 5, 6, 7, 8, 9, 10): ${arithmetic.lcmMultiple(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`;
// Output: lcmMultiple(1, 2, 3, 4, 5, 6, 7, 8, 9, 10): 2520

// Advanced: Zero absorbs everything
document.getElementById('output18').innerText = `lcmMultiple(4, 0, 6): ${arithmetic.lcmMultiple(4, 0, 6)}`;
// Output: lcmMultiple(4, 0, 6): 0

// --- modPow(base, exponent, modulus) ---
// Basic: (2^10) % 1000
document.getElementById('output19').innerText = `modPow(2, 10, 1000): ${arithmetic.modPow(2, 10, 1000)}`;
// Output: modPow(2, 10, 1000): 24

// Intermediate: Astronomical exponents without overflow — power() would return Infinity
document.getElementById('output20').innerText = `modPow(7, 1e15, 13): ${arithmetic.modPow(7, 1e15, 13)}`;
// Output: modPow(7, 1e15, 13): 9

// Advanced: Real RSA roundtrip (textbook keys: n=3233, e=17, d=2753)
const encrypted = arithmetic.modPow(65, 17, 3233);
document.getElementById('output21').innerText = `encrypt: ${encrypted}`;
// Output: encrypt: 2790

document.getElementById('output22').innerText = `decrypt: ${arithmetic.modPow(encrypted, 2753, 3233)}`;
// Output: decrypt: 65

// #### 8. Safe Operations & Aggregations

// --- safeDiv(a, b, fallback) ---
// Basic: Normal division
document.getElementById('output23').innerText = `safeDiv(10, 2): ${arithmetic.safeDiv(10, 2)}`;
// Output: safeDiv(10, 2): 5

// Intermediate: Division by zero returns the default fallback (0)
document.getElementById('output24').innerText = `safeDiv(10, 0): ${arithmetic.safeDiv(10, 0)}`;
// Output: safeDiv(10, 0): 0

// Advanced: Custom fallback value
document.getElementById('output25').innerText = `safeDiv(10, 0, -1): ${arithmetic.safeDiv(10, 0, -1)}`;
// Output: safeDiv(10, 0, -1): -1

// --- sumOfSquares(...numbers) ---
// Basic: Pythagorean pair — 3² + 4²
document.getElementById('output26').innerText = `sumOfSquares(3, 4): ${arithmetic.sumOfSquares(3, 4)}`;
// Output: sumOfSquares(3, 4): 25

// Intermediate: Multiple values
document.getElementById('output27').innerText = `sumOfSquares(1, 2, 3): ${arithmetic.sumOfSquares(1, 2, 3)}`;
// Output: sumOfSquares(1, 2, 3): 14

// Advanced: Squaring removes the sign
document.getElementById('output28').innerText = `sumOfSquares(-3, 4): ${arithmetic.sumOfSquares(-3, 4)}`;
// Output: sumOfSquares(-3, 4): 25

// #### 9. Interpolation & Percentages

// --- inverseLerp(a, b, value) ---
// Basic: Where does 7.5 sit between 0 and 10?
document.getElementById('output29').innerText = `inverseLerp(0, 10, 7.5): ${arithmetic.inverseLerp(0, 10, 7.5)}`;
// Output: inverseLerp(0, 10, 7.5): 0.75

// Intermediate: Values beyond the range extrapolate (t > 1)
document.getElementById('output30').innerText = `inverseLerp(0, 10, 20): ${arithmetic.inverseLerp(0, 10, 20)}`;
// Output: inverseLerp(0, 10, 20): 2

// Advanced: Degenerate range (a === b) has no meaningful t
document.getElementById('output31').innerText = `inverseLerp(5, 5, 5): ${arithmetic.inverseLerp(5, 5, 5)}`;
// Output: inverseLerp(5, 5, 5): NaN

// --- percentOf(value, total) ---
// Basic: What percentage is 25 of 200?
document.getElementById('output32').innerText = `percentOf(25, 200): ${arithmetic.percentOf(25, 200)}`;
// Output: percentOf(25, 200): 12.5

// Intermediate: A value equal to its total is always 100%
document.getElementById('output33').innerText = `percentOf(7, 7): ${arithmetic.percentOf(7, 7)}`;
// Output: percentOf(7, 7): 100

// Advanced: Repeating decimals are preserved
document.getElementById('output34').innerText = `percentOf(1, 3): ${arithmetic.percentOf(1, 3)}`;
// Output: percentOf(1, 3): 33.33333333333333

// --- fromPercent(percent, total) ---
// Basic: What is 12.5% of 200?
document.getElementById('output35').innerText = `fromPercent(12.5, 200): ${arithmetic.fromPercent(12.5, 200)}`;
// Output: fromPercent(12.5, 200): 25

// Intermediate: 100% is the identity
document.getElementById('output36').innerText = `fromPercent(100, 89.9): ${arithmetic.fromPercent(100, 89.9)}`;
// Output: fromPercent(100, 89.9): 89.9

// Advanced: Perfect inverse of percentOf (roundtrip)
document.getElementById('output37').innerText = `fromPercent(percentOf(25, 200), 200): ${arithmetic.fromPercent(arithmetic.percentOf(25, 200), 200)}`;
// Output: fromPercent(percentOf(25, 200), 200): 25


```

![CodyMath Logo][testAlgebra03]

[testAlgebra03]: ./assets/img/testsImgs/algebra/cdn.png/

```javascript


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CodyMath CDN Test</title>
  <script src="https://cdn.jsdelivr.net/npm/codymath@latest/dist/codymath.umd.js"></script>
</head>
<body>
  <h1>CodyMath Test</h1>
  <div id="output1"></div>
  <div id="output2"></div>
  <div id="output3"></div>
  <div id="output4"></div>
  <div id="output5"></div>
  <div id="output6"></div>
  <div id="output7"></div>
  <div id="output8"></div>
  <div id="output9"></div>
  <div id="output10"></div>
  <div id="output11"></div>
  <div id="output12"></div>
  <div id="output13"></div>
  <div id="output14"></div>
  <div id="output15"></div>
  <div id="output16"></div>
  <div id="output17"></div>
  <div id="output18"></div>
  <div id="output19"></div>
  <div id="output20"></div>
  <div id="output21"></div>
  <div id="output22"></div>
  <div id="output23"></div>
  <div id="output24"></div>
  <div id="output25"></div>
  <div id="output26"></div>
  <div id="output27"></div>
  <div id="output28"></div>
  <div id="output29"></div>
  <div id="output30"></div>
  <div id="output31"></div>
  <div id="output32"></div>
  <div id="output33"></div>
  <div id="output34"></div>
  <div id="output35"></div>
  <div id="output36"></div>
  <div id="output37"></div>
  <div id="output38"></div>
  <div id="output39"></div>
  <div id="output40"></div>
  <div id="output41"></div>
  <div id="output42"></div>
  <div id="output43"></div>
  <div id="output44"></div>
  <div id="output45"></div>
  <div id="output46"></div>
  <div id="output47"></div>
  <div id="output48"></div>
  <div id="output49"></div>
  <div id="output50"></div>
  <div id="output51"></div>
  <div id="output52"></div>
  <div id="output53"></div>
  <div id="output54"></div>
  <div id="output55"></div>
  <div id="output56"></div>
  <div id="output57"></div>
  <div id="output58"></div>
  <div id="output59"></div>
  <div id="output60"></div>
  <div id="output61"></div>
  <div id="output62"></div>
  <div id="output63"></div>
  <div id="output64"></div>
  <div id="output65"></div>
  <div id="output66"></div>
  <div id="output67"></div>
  <div id="output68"></div>
  <div id="output69"></div>
  <div id="output70"></div>
  <div id="output71"></div>
  <div id="output72"></div>
  <div id="output73"></div>
  <div id="output74"></div>
  <div id="output75"></div>

</body>
</html>

//--


const { arithmetic } = CodyMath;

// #### 10. Statistics

// --- median(...numbers) ---
// Basic: Median of an odd-sized dataset
 document.getElementById('output1').innerText = `median(1, 3, 5, 7, 9): ${arithmetic.median(1, 3, 5, 7, 9)}`;
// Output: median(1, 3, 5, 7, 9): 5
// Intermediate: Even size averages the two central values

 document.getElementById('output2').innerText = `median(10, 2, 8, 4): ${arithmetic.median(10, 2, 8, 4)}`;
// Output: median(10, 2, 8, 4): 6
// Advanced: An empty dataset has no median

document.getElementById('output3').innerText = `median(): ${arithmetic.median()}`;
// Output: median(): NaN

// --- min(...numbers) ---
// Basic: Smallest of several values
document.getElementById('output4').innerText = `min(3, 1, 4, 1, 5): ${arithmetic.min(3, 1, 4, 1, 5)}`;
// Output: min(3, 1, 4, 1, 5): 1
// Intermediate: Works with negatives

document.getElementById('output5').innerText = `min(-10, -5, -20): ${arithmetic.min(-10, -5, -20)}`;
// Output: min(-10, -5, -20): -20
// Advanced: Empty input is NaN, never Infinity

document.getElementById('output6').innerText = `min(): ${arithmetic.min()}`;
// Output: min(): NaN

// --- max(...numbers) ---
// Basic: Largest of several values
document.getElementById('output7').innerText = `max(3, 1, 4, 1, 5): ${arithmetic.max(3, 1, 4, 1, 5)}`;
// Output: max(3, 1, 4, 1, 5): 5
// Intermediate: Works with negatives

document.getElementById('output8').innerText = `max(-10, -5, -20): ${arithmetic.max(-10, -5, -20)}`;
// Output: max(-10, -5, -20): -5
// Advanced: Empty input is NaN, never -Infinity

document.getElementById('output9').innerText = `max(): ${arithmetic.max()}`;
// Output: max(): NaN

// --- variance(...numbers) ---
// Basic: Population variance of a dataset
document.getElementById('output10').innerText = `variance(2, 4, 4, 4, 5, 5, 7, 9): ${arithmetic.variance(2, 4, 4, 4, 5, 5, 7, 9)}`;
// Output: variance(2, 4, 4, 4, 5, 5, 7, 9): 4
// Intermediate: Identical values have zero spread

document.getElementById('output11').innerText = `variance(5, 5, 5, 5): ${arithmetic.variance(5, 5, 5, 5)}`;
// Output: variance(5, 5, 5, 5): 0
// Advanced: An empty dataset is undefined

document.getElementById('output12').innerText = `variance(): ${arithmetic.variance()}`;
// Output: variance(): NaN

// --- standardDeviation(...numbers) ---
// Basic: Population standard deviation (sqrt of variance)
document.getElementById('output13').innerText = `standardDeviation(2, 4, 4, 4, 5, 5, 7, 9): ${arithmetic.standardDeviation(2, 4, 4, 4, 5, 5, 7, 9)}`;
// Output: standardDeviation(2, 4, 4, 4, 5, 5, 7, 9): 2
// Intermediate: No spread, no deviation


document.getElementById('output14').innerText = `standardDeviation(10, 10, 10): ${arithmetic.standardDeviation(10, 10, 10)}`;
// Output: standardDeviation(10, 10, 10): 0
// Advanced: An empty dataset is undefined

document.getElementById('output15').innerText = `standardDeviation(): ${arithmetic.standardDeviation()}`;
// Output: standardDeviation(): NaN

// --- mode(...numbers) ---
// Basic: The single most frequent value
document.getElementById('output16').innerText = `mode(1, 2, 2, 3, 4): ${arithmetic.mode(1, 2, 2, 3, 4)}`;
// Output: mode(1, 2, 2, 3, 4): 2

// Intermediate: Multimodal data returns every top value
document.getElementById('output16').innerText = `mode(1, 1, 2, 2, 3): ${arithmetic.mode(1, 1, 2, 2, 3)}`;
// Output: mode(1, 1, 2, 2, 3): 1,2
// Advanced: No data, no mode

document.getElementById('output17').innerText = `mode(): ${arithmetic.mode()}`;
// Output: mode():

// #### 11. Number Theory (Extended)

// --- sumOfDigits(n) ---
// Basic: Sum of the decimal digits
document.getElementById('output18').innerText = `sumOfDigits(12345): ${arithmetic.sumOfDigits(12345)}`;
// Output: sumOfDigits(12345): 15
// Intermediate: The sign is ignored

document.getElementById('output19').innerText = `sumOfDigits(-9876): ${arithmetic.sumOfDigits(-9876)}`;
// Output: sumOfDigits(-9876): 30
// Advanced: Floats are truncated before summing

document.getElementById('output20').innerText = `sumOfDigits(99.9): ${arithmetic.sumOfDigits(99.9)}`;
// Output: sumOfDigits(99.9): 18

// --- isPerfectSquare(n) ---
// Basic: 144 is 12 squared
document.getElementById('output21').innerText = `isPerfectSquare(144): ${arithmetic.isPerfectSquare(144)}`;
// Output: isPerfectSquare(144): true
// Intermediate: 150 is not a perfect square

document.getElementById('output22').innerText = `isPerfectSquare(150): ${arithmetic.isPerfectSquare(150)}`;
// Output: isPerfectSquare(150): false
// Advanced: Non-integers are never perfect squares (no truncation)

document.getElementById('output23').innerText = `isPerfectSquare(15.21): ${arithmetic.isPerfectSquare(15.21)}`;
// Output: isPerfectSquare(15.21): false

// --- isPerfectNumber(n) ---
// Basic: 6 = 1 + 2 + 3, the smallest perfect number
document.getElementById('output24').innerText = `isPerfectNumber(6): ${arithmetic.isPerfectNumber(6)}`;
// Output: isPerfectNumber(6): true
// Intermediate: 28 = 1 + 2 + 4 + 7 + 14

document.getElementById('output25').innerText = `isPerfectNumber(28): ${arithmetic.isPerfectNumber(28)}`;
// Output: isPerfectNumber(28): true
// Advanced: 12 is abundant, not perfect

document.getElementById('output26').innerText = `isPerfectNumber(12): ${arithmetic.isPerfectNumber(12)}`;
// Output: isPerfectNumber(12): false

// --- primeFactors(n) ---
// Basic: Factorization with multiplicity
document.getElementById('output27').innerText = `primeFactors(60): ${arithmetic.primeFactors(60)}`;
// Output: primeFactors(60): 2,2,3,5
// Intermediate: A prime factors into itself

document.getElementById('output28').innerText = `primeFactors(97): ${arithmetic.primeFactors(97)}`;
// Output: primeFactors(97): 97
// Advanced: 1 has no prime factors

document.getElementById('output29').innerText = `primeFactors(1): ${arithmetic.primeFactors(1)}`;
// Output: primeFactors(1):

// --- modInverse(a, m) ---
// Basic: 3 x 4 = 12 = 1 (mod 11)
document.getElementById('output30').innerText = `modInverse(3, 11): ${arithmetic.modInverse(3, 11)}`;
// Output: modInverse(3, 11): 4
// Intermediate: Inverse of 10 modulo 17

document.getElementById('output31').innerText = `modInverse(10, 17): ${arithmetic.modInverse(10, 17)}`;
// Output: modInverse(10, 17): 12
// Advanced: No inverse exists when a and m share a factor

document.getElementById('output32').innerText = `modInverse(2, 4): ${arithmetic.modInverse(2, 4)}`;
// Output: modInverse(2, 4): NaN

// --- totient(n) ---
// Basic: Six integers below 9 are coprime to it
document.getElementById('output33').innerText = `totient(9): ${arithmetic.totient(9)}`;
// Output: totient(9): 6
// Intermediate: For a prime p, the totient is p - 1

document.getElementById('output34').innerText = `totient(7): ${arithmetic.totient(7)}`;
// Output: totient(7): 6
// Advanced: totient(1) is 1 by convention

document.getElementById('output35').innerText = `totient(1): ${arithmetic.totient(1)}`;
// Output: totient(1): 1

// #### 12. Combinatorics

// --- binomial(n, k) ---
// Basic: Choose 2 from 5
document.getElementById('output36').innerText = `binomial(5, 2): ${arithmetic.binomial(5, 2)}`;
// Output: binomial(5, 2): 10
// Intermediate: There is exactly one way to choose nothing

document.getElementById('output37').innerText = `binomial(10, 0): ${arithmetic.binomial(10, 0)}`;
// Output: binomial(10, 0): 1
// Advanced: Distinct 5-card poker hands from 52

document.getElementById('output38').innerText = `binomial(52, 5): ${arithmetic.binomial(52, 5)}`;
// Output: binomial(52, 5): 2598960

// --- permutations(n, k) ---
// Basic: Ordered arrangements of 2 from 5
document.getElementById('output39').innerText = `permutations(5, 2): ${arithmetic.permutations(5, 2)}`;
// Output: permutations(5, 2): 20
// Intermediate: Arrangements of 3 from 10

document.getElementById('output40').innerText = `permutations(10, 3): ${arithmetic.permutations(10, 3)}`;
// Output: permutations(10, 3): 720
// Advanced: P(6, 6) equals 6 factorial

document.getElementById('output41').innerText = `permutations(6, 6): ${arithmetic.permutations(6, 6)}`;
// Output: permutations(6, 6): 720

// --- multiplyMultiple(...numbers) ---
// Basic: Product of several numbers
document.getElementById('output42').innerText = `multiplyMultiple(2, 3, 4): ${arithmetic.multiplyMultiple(2, 3, 4)}`;
// Output: multiplyMultiple(2, 3, 4): 24
// Intermediate: A negative factor flips the sign

document.getElementById('output43').innerText =  `multiplyMultiple(5, -2, 10): ${arithmetic.multiplyMultiple(5, -2, 10)}`;
// Output: multiplyMultiple(5, -2, 10): -100
// Advanced: The empty product is the identity, 1

document.getElementById('output44').innerText = `multiplyMultiple(): ${arithmetic.multiplyMultiple()}`;
// Output: multiplyMultiple(): 1

// #### 13. Geometry, Interpolation & Signal Shaping

// --- hypot(...values) ---
// Basic: The classic 3-4-5 right triangle
document.getElementById('output45').innerText = `hypot(3, 4): ${arithmetic.hypot(3, 4)}`;
// Output: hypot(3, 4): 5
// Intermediate: Works in any dimension

document.getElementById('output46').innerText = `hypot(1, 2, 2): ${arithmetic.hypot(1, 2, 2)}`;
// Output: hypot(1, 2, 2): 3
// Advanced: The 5-12-13 triple

document.getElementById('output47').innerText = `hypot(5, 12): ${arithmetic.hypot(5, 12)}`;
// Output: hypot(5, 12): 13

// --- clampedLerp(a, b, t) ---
// Basic: Halfway between 0 and 100
document.getElementById('output48').innerText = `clampedLerp(0, 100, 0.5): ${arithmetic.clampedLerp(0, 100, 0.5)}`;
// Output: clampedLerp(0, 100, 0.5): 50
// Intermediate: t above 1 is clamped (no extrapolation)

document.getElementById('output49').innerText = `clampedLerp(0, 100, 1.5): ${arithmetic.clampedLerp(0, 100, 1.5)}`;
// Output: clampedLerp(0, 100, 1.5): 100
// Advanced: t below 0 is clamped to the start

document.getElementById('output50').innerText = `clampedLerp(0, 100, -0.5): ${arithmetic.clampedLerp(0, 100, -0.5)}`;
// Output: clampedLerp(0, 100, -0.5): 0

// --- mapRange(value, inMin, inMax, outMin, outMax) ---
// Basic: Remap 5 from [0,10] onto [0,100]
document.getElementById('output51').innerText = `mapRange(5, 0, 10, 0, 100): ${arithmetic.mapRange(5, 0, 10, 0, 100)}`;
// Output: mapRange(5, 0, 10, 0, 100): 50
// Intermediate: Remap a percentage onto [-1, 1]

document.getElementById('output52').innerText = `mapRange(25, 0, 100, -1, 1): ${arithmetic.mapRange(25, 0, 100, -1, 1)}`;
// Output: mapRange(25, 0, 100, -1, 1): -0.5
// Advanced: Map a normalized axis onto degrees

document.getElementById('output53').innerText = `mapRange(0, -1, 1, 0, 360): ${arithmetic.mapRange(0, -1, 1, 0, 360)}`;
// Output: mapRange(0, -1, 1, 0, 360): 180

// --- geometricLerp(a, b, t) ---
// Basic: The midpoint is the geometric mean
document.getElementById('output54').innerText = `geometricLerp(1, 100, 0.5): ${arithmetic.geometricLerp(1, 100, 0.5)}`;
// Output: geometricLerp(1, 100, 0.5): 10
// Intermediate: Each quarter-step multiplies the scale by 2

document.getElementById('output55').innerText = `geometricLerp(1, 16, 0.25): ${arithmetic.geometricLerp(1, 16, 0.25)}`;
// Output: geometricLerp(1, 16, 0.25): 2
// Advanced: Endpoints must be positive

document.getElementById('output56').innerText = `geometricLerp(-1, 10, 0.5): ${arithmetic.geometricLerp(-1, 10, 0.5)}`;
// Output: geometricLerp(-1, 10, 0.5): NaN

// --- signedPow(base, exp) ---
// Basic: Solves the (-4) ** 0.5 = NaN trap
document.getElementById('output57').innerText = `signedPow(-4, 0.5): ${arithmetic.signedPow(-4, 0.5)}`;
// Output: signedPow(-4, 0.5): -2
// Intermediate: The sign survives even an even exponent

document.getElementById('output58').innerText = `signedPow(-3, 2): ${arithmetic.signedPow(-3, 2)}`;
// Output: signedPow(-3, 2): -9
// Advanced: Softening a small positive value

document.getElementById('output59').innerText = `signedPow(0.25, 0.5): ${arithmetic.signedPow(0.25, 0.5)}`;
// Output: signedPow(0.25, 0.5): 0.5

// --- deadzone(value, threshold) ---
// Basic: Input inside the dead zone collapses to 0
document.getElementById('output60').innerText = `deadzone(0.05, 0.1): ${arithmetic.deadzone(0.05, 0.1)}`;
// Output: deadzone(0.05, 0.1): 0
// Intermediate: Output is continuously rescaled past the edge

document.getElementById('output61').innerText = `deadzone(0.75, 0.5): ${arithmetic.deadzone(0.75, 0.5)}`;
// Output: deadzone(0.75, 0.5): 0.5
// Advanced: Full deflection is preserved at the extreme

document.getElementById('output62').innerText = `deadzone(-1, 0.2): ${arithmetic.deadzone(-1, 0.2)}`;
// Output: deadzone(-1, 0.2): -1

// #### 14. Sequences, Allocation & Formatting

// --- cumulativeSum(...numbers) ---
// Basic: Running totals of a sequence
document.getElementById('output63').innerText = `cumulativeSum(1, 2, 3, 4): ${arithmetic.cumulativeSum(1, 2, 3, 4)}`;
// Output: cumulativeSum(1, 2, 3, 4): 1,3,6,10
// Intermediate: A bank-statement-style balance

document.getElementById('output64').innerText = `cumulativeSum(10, -5, 3): ${arithmetic.cumulativeSum(10, -5, 3)}`;
// Output: cumulativeSum(10, -5, 3): 10,5,8
// Advanced: An empty sequence yields an empty array

document.getElementById('output65').innerText = `cumulativeSum(): ${arithmetic.cumulativeSum()}`;
// Output: cumulativeSum():

// --- normalizeToSum(values, target) ---
// Basic: Turn weights into a distribution summing to 1
document.getElementById('output66').innerText = `normalizeToSum([1, 3]): ${arithmetic.normalizeToSum([1, 3])}`;
// Output: normalizeToSum([1, 3]): 0.25,0.75
// Intermediate: Rescale to percentages (target 100)

document.getElementById('output67').innerText =  `normalizeToSum([1, 1, 2], 100): ${arithmetic.normalizeToSum([1, 1, 2], 100)}`;
// Output: normalizeToSum([1, 1, 2], 100): 25,25,50
// Advanced: A zero-sum list cannot be normalized

document.getElementById('output68').innerText = `normalizeToSum([2, -2]): ${arithmetic.normalizeToSum([2, -2])}`;
// Output: normalizeToSum([2, -2]): NaN,NaN

// --- roundToSignificant(n, sigFigs) ---
// Basic: Two significant figures of a large integer
document.getElementById('output69').innerText = `roundToSignificant(123456, 2): ${arithmetic.roundToSignificant(123456, 2)}`;

// Output: roundToSignificant(123456, 2): 120000
// Intermediate: Significant figures adapt to tiny magnitudes

document.getElementById('output70').innerText = `roundToSignificant(0.00098, 1): ${arithmetic.roundToSignificant(0.00098, 1)}`;
// Output: roundToSignificant(0.00098, 1): 0.001
// Advanced: Rounds figures, not decimal places

document.getElementById('output71').innerText =  `roundToSignificant(9.876, 2): ${arithmetic.roundToSignificant(9.876, 2)}`;
// Output: roundToSignificant(9.876, 2): 9.9

// --- proportionalSplit(total, ...weights) ---
// Basic: Split 100 three ways with no cent lost
document.getElementById('output72').innerText =  `proportionalSplit(100, 1, 1, 1): ${arithmetic.proportionalSplit(100, 1, 1, 1)}`;
// Output: proportionalSplit(100, 1, 1, 1): 34,33,33
// Intermediate: Split by proportional weights

document.getElementById('output73').innerText =  `proportionalSplit(10, 1, 2, 2): ${arithmetic.proportionalSplit(10, 1, 2, 2)}`;
// Output: proportionalSplit(10, 1, 2, 2): 2,4,4
// Advanced: The odd unit goes to the largest remainder

document.getElementById('output74').innerText =   `proportionalSplit(7, 50, 50): ${arithmetic.proportionalSplit(7, 50, 50)}`;
// Output: proportionalSplit(7, 50, 50): 4,3


```

![CodyMath Logo][testAlgebra04]

[testAlgebra04]: ./assets/img/testsImgs/algebra/test001.jpeg

![CodyMath Logo][testAlgebra05]

[testAlgebra05]: ./assets/img/testsImgs/algebra/test002.jpeg

![CodyMath Logo][testAlgebra06]

[testAlgebra06]: ./assets/img/testsImgs/algebra/test003.jpeg

![CodyMath Logo][testAlgebra07]

[testAlgebra07]: ./assets/img/testsImgs/algebra/test004.jpeg

```javascript

import { arithmetic } from "codymath";
import {
   cumulativeSum,
   deadzone,
   signedPow,
   roundToSignificant,
   normalizeToSum,
   geometricLerp,
   proportionalSplit,
   sumOfDigits,
   isPerfectSquare,
   hypot,
   clampedLerp,
   mapRange,
   isPerfectNumber,
   primeFactors,
   multiplyMultiple,
   binomial,
   modInverse,
   permutations,
   totient,
   median,
   min,
   max,
   variance,
   standardDeviation,
   mode,
} from "codymath";

// Map of the named imports so we can call them dynamically by name.
const named: Record<string, (...a: any[]) => unknown> = {
   cumulativeSum,
   deadzone,
   signedPow,
   roundToSignificant,
   normalizeToSum,
   geometricLerp,
   proportionalSplit,
   sumOfDigits,
   isPerfectSquare,
   hypot,
   clampedLerp,
   mapRange,
   isPerfectNumber,
   primeFactors,
   multiplyMultiple,
   binomial,
   modInverse,
   permutations,
   totient,
   median,
   min,
   max,
   variance,
   standardDeviation,
   mode,
};


const ns = arithmetic as unknown as Record<string, (...a: any[]) => unknown>;

type Case = {
   section: string;
   label: string;
   name: string;
   args: any[];
   expected: string;
};

const cases: Case[] = [
   {
      section: "Statistics",
      label: "median(1, 3, 5, 7, 9)",
      name: "median",
      args: [1, 3, 5, 7, 9],
      expected: "5",
   },
   {
      section: "Statistics",
      label: "median(10, 2, 8, 4)",
      name: "median",
      args: [10, 2, 8, 4],
      expected: "6",
   },
   {
      section: "Statistics",
      label: "median()",
      name: "median",
      args: [],
      expected: "NaN",
   },
   {
      section: "Statistics",
      label: "min(3, 1, 4, 1, 5)",
      name: "min",
      args: [3, 1, 4, 1, 5],
      expected: "1",
   },
   {
      section: "Statistics",
      label: "min(-10, -5, -20)",
      name: "min",
      args: [-10, -5, -20],
      expected: "-20",
   },
   {
      section: "Statistics",
      label: "min()",
      name: "min",
      args: [],
      expected: "NaN",
   },
   {
      section: "Statistics",
      label: "max(3, 1, 4, 1, 5)",
      name: "max",
      args: [3, 1, 4, 1, 5],
      expected: "5",
   },
   {
      section: "Statistics",
      label: "max(-10, -5, -20)",
      name: "max",
      args: [-10, -5, -20],
      expected: "-5",
   },
   {
      section: "Statistics",
      label: "max()",
      name: "max",
      args: [],
      expected: "NaN",
   },
   {
      section: "Statistics",
      label: "variance(2, 4, 4, 4, 5, 5, 7, 9)",
      name: "variance",
      args: [2, 4, 4, 4, 5, 5, 7, 9],
      expected: "4",
   },
   {
      section: "Statistics",
      label: "variance(5, 5, 5, 5)",
      name: "variance",
      args: [5, 5, 5, 5],
      expected: "0",
   },
   {
      section: "Statistics",
      label: "variance()",
      name: "variance",
      args: [],
      expected: "NaN",
   },
   {
      section: "Statistics",
      label: "standardDeviation(2, 4, 4, 4, 5, 5, 7, 9)",
      name: "standardDeviation",
      args: [2, 4, 4, 4, 5, 5, 7, 9],
      expected: "2",
   },
   {
      section: "Statistics",
      label: "standardDeviation(10, 10, 10)",
      name: "standardDeviation",
      args: [10, 10, 10],
      expected: "0",
   },
   {
      section: "Statistics",
      label: "standardDeviation()",
      name: "standardDeviation",
      args: [],
      expected: "NaN",
   },
   {
      section: "Statistics",
      label: "mode(1, 2, 2, 3, 4)",
      name: "mode",
      args: [1, 2, 2, 3, 4],
      expected: "2",
   },
   {
      section: "Statistics",
      label: "mode(1, 1, 2, 2, 3)",
      name: "mode",
      args: [1, 1, 2, 2, 3],
      expected: "1,2",
   },
   {
      section: "Statistics",
      label: "mode()",
      name: "mode",
      args: [],
      expected: "",
   },
   {
      section: "Number Theory (Extended)",
      label: "sumOfDigits(12345)",
      name: "sumOfDigits",
      args: [12345],
      expected: "15",
   },
   {
      section: "Number Theory (Extended)",
      label: "sumOfDigits(-9876)",
      name: "sumOfDigits",
      args: [-9876],
      expected: "30",
   },
   {
      section: "Number Theory (Extended)",
      label: "sumOfDigits(99.9)",
      name: "sumOfDigits",
      args: [99.9],
      expected: "18",
   },
   {
      section: "Number Theory (Extended)",
      label: "isPerfectSquare(144)",
      name: "isPerfectSquare",
      args: [144],
      expected: "true",
   },
   {
      section: "Number Theory (Extended)",
      label: "isPerfectSquare(150)",
      name: "isPerfectSquare",
      args: [150],
      expected: "false",
   },
   {
      section: "Number Theory (Extended)",
      label: "isPerfectSquare(15.21)",
      name: "isPerfectSquare",
      args: [15.21],
      expected: "false",
   },
   {
      section: "Number Theory (Extended)",
      label: "isPerfectNumber(6)",
      name: "isPerfectNumber",
      args: [6],
      expected: "true",
   },
   {
      section: "Number Theory (Extended)",
      label: "isPerfectNumber(28)",
      name: "isPerfectNumber",
      args: [28],
      expected: "true",
   },
   {
      section: "Number Theory (Extended)",
      label: "isPerfectNumber(12)",
      name: "isPerfectNumber",
      args: [12],
      expected: "false",
   },
   {
      section: "Number Theory (Extended)",
      label: "primeFactors(60)",
      name: "primeFactors",
      args: [60],
      expected: "2,2,3,5",
   },
   {
      section: "Number Theory (Extended)",
      label: "primeFactors(97)",
      name: "primeFactors",
      args: [97],
      expected: "97",
   },
   {
      section: "Number Theory (Extended)",
      label: "primeFactors(1)",
      name: "primeFactors",
      args: [1],
      expected: "",
   },
   {
      section: "Number Theory (Extended)",
      label: "modInverse(3, 11)",
      name: "modInverse",
      args: [3, 11],
      expected: "4",
   },
   {
      section: "Number Theory (Extended)",
      label: "modInverse(10, 17)",
      name: "modInverse",
      args: [10, 17],
      expected: "12",
   },
   {
      section: "Number Theory (Extended)",
      label: "modInverse(2, 4)",
      name: "modInverse",
      args: [2, 4],
      expected: "NaN",
   },
   {
      section: "Number Theory (Extended)",
      label: "totient(9)",
      name: "totient",
      args: [9],
      expected: "6",
   },
   {
      section: "Number Theory (Extended)",
      label: "totient(7)",
      name: "totient",
      args: [7],
      expected: "6",
   },
   {
      section: "Number Theory (Extended)",
      label: "totient(1)",
      name: "totient",
      args: [1],
      expected: "1",
   },
   {
      section: "Combinatorics",
      label: "binomial(5, 2)",
      name: "binomial",
      args: [5, 2],
      expected: "10",
   },
   {
      section: "Combinatorics",
      label: "binomial(10, 0)",
      name: "binomial",
      args: [10, 0],
      expected: "1",
   },
   {
      section: "Combinatorics",
      label: "binomial(52, 5)",
      name: "binomial",
      args: [52, 5],
      expected: "2598960",
   },
   {
      section: "Combinatorics",
      label: "permutations(5, 2)",
      name: "permutations",
      args: [5, 2],
      expected: "20",
   },
   {
      section: "Combinatorics",
      label: "permutations(10, 3)",
      name: "permutations",
      args: [10, 3],
      expected: "720",
   },
   {
      section: "Combinatorics",
      label: "permutations(6, 6)",
      name: "permutations",
      args: [6, 6],
      expected: "720",
   },
   {
      section: "Combinatorics",
      label: "multiplyMultiple(2, 3, 4)",
      name: "multiplyMultiple",
      args: [2, 3, 4],
      expected: "24",
   },
   {
      section: "Combinatorics",
      label: "multiplyMultiple(5, -2, 10)",
      name: "multiplyMultiple",
      args: [5, -2, 10],
      expected: "-100",
   },
   {
      section: "Combinatorics",
      label: "multiplyMultiple()",
      name: "multiplyMultiple",
      args: [],
      expected: "1",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "hypot(3, 4)",
      name: "hypot",
      args: [3, 4],
      expected: "5",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "hypot(1, 2, 2)",
      name: "hypot",
      args: [1, 2, 2],
      expected: "3",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "hypot(5, 12)",
      name: "hypot",
      args: [5, 12],
      expected: "13",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "clampedLerp(0, 100, 0.5)",
      name: "clampedLerp",
      args: [0, 100, 0.5],
      expected: "50",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "clampedLerp(0, 100, 1.5)",
      name: "clampedLerp",
      args: [0, 100, 1.5],
      expected: "100",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "clampedLerp(0, 100, -0.5)",
      name: "clampedLerp",
      args: [0, 100, -0.5],
      expected: "0",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "mapRange(5, 0, 10, 0, 100)",
      name: "mapRange",
      args: [5, 0, 10, 0, 100],
      expected: "50",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "mapRange(25, 0, 100, -1, 1)",
      name: "mapRange",
      args: [25, 0, 100, -1, 1],
      expected: "-0.5",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "mapRange(0, -1, 1, 0, 360)",
      name: "mapRange",
      args: [0, -1, 1, 0, 360],
      expected: "180",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "geometricLerp(1, 100, 0.5)",
      name: "geometricLerp",
      args: [1, 100, 0.5],
      expected: "10",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "geometricLerp(1, 16, 0.25)",
      name: "geometricLerp",
      args: [1, 16, 0.25],
      expected: "2",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "geometricLerp(-1, 10, 0.5)",
      name: "geometricLerp",
      args: [-1, 10, 0.5],
      expected: "NaN",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "signedPow(-4, 0.5)",
      name: "signedPow",
      args: [-4, 0.5],
      expected: "-2",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "signedPow(-3, 2)",
      name: "signedPow",
      args: [-3, 2],
      expected: "-9",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "signedPow(0.25, 0.5)",
      name: "signedPow",
      args: [0.25, 0.5],
      expected: "0.5",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "deadzone(0.05, 0.1)",
      name: "deadzone",
      args: [0.05, 0.1],
      expected: "0",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "deadzone(0.75, 0.5)",
      name: "deadzone",
      args: [0.75, 0.5],
      expected: "0.5",
   },
   {
      section: "Geometry, Interpolation & Signal Shaping",
      label: "deadzone(-1, 0.2)",
      name: "deadzone",
      args: [-1, 0.2],
      expected: "-1",
   },
   {
      section: "Sequences, Allocation & Formatting",
      label: "cumulativeSum(1, 2, 3, 4)",
      name: "cumulativeSum",
      args: [1, 2, 3, 4],
      expected: "1,3,6,10",
   },
   {
      section: "Sequences, Allocation & Formatting",
      label: "cumulativeSum(10, -5, 3)",
      name: "cumulativeSum",
      args: [10, -5, 3],
      expected: "10,5,8",
   },
   {
      section: "Sequences, Allocation & Formatting",
      label: "cumulativeSum()",
      name: "cumulativeSum",
      args: [],
      expected: "",
   },
   {
      section: "Sequences, Allocation & Formatting",
      label: "normalizeToSum([1, 3])",
      name: "normalizeToSum",
      args: [[1, 3]],
      expected: "0.25,0.75",
   },
   {
      section: "Sequences, Allocation & Formatting",
      label: "normalizeToSum([1, 1, 2], 100)",
      name: "normalizeToSum",
      args: [[1, 1, 2], 100],
      expected: "25,25,50",
   },
   {
      section: "Sequences, Allocation & Formatting",
      label: "normalizeToSum([2, -2])",
      name: "normalizeToSum",
      args: [[2, -2]],
      expected: "NaN,NaN",
   },
   {
      section: "Sequences, Allocation & Formatting",
      label: "roundToSignificant(123456, 2)",
      name: "roundToSignificant",
      args: [123456, 2],
      expected: "120000",
   },
   {
      section: "Sequences, Allocation & Formatting",
      label: "roundToSignificant(0.00098, 1)",
      name: "roundToSignificant",
      args: [0.00098, 1],
      expected: "0.001",
   },
   {
      section: "Sequences, Allocation & Formatting",
      label: "roundToSignificant(9.876, 2)",
      name: "roundToSignificant",
      args: [9.876, 2],
      expected: "9.9",
   },
   {
      section: "Sequences, Allocation & Formatting",
      label: "proportionalSplit(100, 1, 1, 1)",
      name: "proportionalSplit",
      args: [100, 1, 1, 1],
      expected: "34,33,33",
   },
   {
      section: "Sequences, Allocation & Formatting",
      label: "proportionalSplit(10, 1, 2, 2)",
      name: "proportionalSplit",
      args: [10, 1, 2, 2],
      expected: "2,4,4",
   },
   {
      section: "Sequences, Allocation & Formatting",
      label: "proportionalSplit(7, 50, 50)",
      name: "proportionalSplit",
      args: [7, 50, 50],
      expected: "4,3",
   },
];

// ---- run + render ----
const sections = [...new Set(cases.map((c) => c.section))];
let pass = 0;

const blocks = sections
   .map((section) => {
      const rows = cases
         .filter((c) => c.section === section)
         .map((c) => {
            const nsVal = String(ns[c.name](...c.args));
            const namedVal = String(named[c.name](...c.args));
            const ok =
               nsVal === c.expected &&
               namedVal === c.expected &&
               nsVal === namedVal;
            if (ok) pass++;
            const shown = nsVal === "" ? "[] (empty)" : nsVal;
            return `
      <div class="case ${ok ? "pass" : "fail"}">
        <span class="badge">${ok ? "PASS" : "FAIL"}</span>
        <code class="call">${c.label}</code>
        <span class="arrow">&rarr;</span>
        <code class="result">${shown}</code>
        ${ok ? "" : `<span class="exp">expected ${c.expected}</span>`}
      </div>`;
         })
         .join("");
      return `<section><h2>${section}</h2>${rows}</section>`;
   })
   .join("");

const total = cases.length;
const allGreen = pass === total;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="wrap">
    <header>
      <h1>codymath <span class="ver">0.7.0</span> — real-world test</h1>
      <div class="score ${allGreen ? "ok" : "bad"}">${pass} / ${total} passed</div>
      <p class="note">Each case runs in BOTH modes: namespace <code>arithmetic.X</code> and named <code>X</code>. A case passes only if both match the expected value and each other.</p>
    </header>
    ${blocks}
    <footer>codymath · tested by theorems</footer>
  </div>
`;

const style = document.createElement("style");
style.textContent = `
  :root { color-scheme: dark; }
  body { margin: 0; background: #0d1117; color: #e6edf3; font-family: system-ui, sans-serif; }
  .wrap { max-width: 920px; margin: 0 auto; padding: 32px 20px 64px; }
  header { margin-bottom: 28px; }
  h1 { font-size: 22px; margin: 0 0 12px; font-weight: 650; }
  .ver { color: #7ee787; font-weight: 600; }
  .score { display: inline-block; font-size: 20px; font-weight: 700; padding: 8px 16px; border-radius: 10px; }
  .score.ok { background: #15351f; color: #7ee787; border: 1px solid #2ea04366; }
  .score.bad { background: #3a1518; color: #ff7b72; border: 1px solid #f8514966; }
  .note { color: #8b949e; font-size: 13px; line-height: 1.5; margin: 14px 0 0; }
  .note code { background: #161b22; padding: 1px 6px; border-radius: 5px; color: #79c0ff; }
  section { margin-top: 26px; }
  h2 { font-size: 13px; text-transform: uppercase; letter-spacing: .08em; color: #8b949e; border-bottom: 1px solid #21262d; padding-bottom: 7px; margin: 0 0 10px; }
  .case { display: flex; align-items: center; gap: 10px; padding: 6px 10px; border-radius: 8px; font-size: 13.5px; flex-wrap: wrap; }
  .case.pass:hover { background: #11161d; }
  .case.fail { background: #2a1416; }
  .badge { font-size: 10.5px; font-weight: 700; padding: 2px 7px; border-radius: 5px; letter-spacing: .04em; }
  .pass .badge { background: #15351f; color: #7ee787; }
  .fail .badge { background: #3a1518; color: #ff7b72; }
  .call { font-family: ui-monospace, "SF Mono", Menlo, monospace; color: #d2a8ff; }
  .arrow { color: #6e7681; }
  .result { font-family: ui-monospace, "SF Mono", Menlo, monospace; color: #79c0ff; }
  .exp { color: #ff7b72; font-size: 12px; margin-left: 6px; }
  footer { margin-top: 40px; text-align: center; color: #6e7681; font-size: 12px; letter-spacing: .04em; }
`;
document.head.appendChild(style);

```

![CodyMath Logo][testAlgebra08]

[testAlgebra08]: ./assets/img/testsImgs/algebra/test0001.jpeg

![CodyMath Logo][testAlgebra09]

[testAlgebra09]: ./assets/img/testsImgs/algebra/test0002.jpeg

![CodyMath Logo][testAlgebra10]

[testAlgebra10]: ./assets/img/testsImgs/algebra/test0003.jpeg

![CodyMath Logo][testAlgebra011]

[testAlgebra011]: ./assets/img/testsImgs/algebra/test0004.jpeg

![CodyMath Logo][testAlgebra012]

[testAlgebra012]: ./assets/img/testsImgs/algebra/test0005.jpeg

</details>

[🚀 Click here to see a real mini-project using the library](https://jacksondouglasdesouza.github.io/mini-project-codymath-function-tests-01/)

---

### Module: `constants/constants`

**Usage**

```ts
import { constants } from "codymath";

constants.phi; // 1.618033988749895  (golden ratio)
constants.tau; // 6.283185307179586  (2π)
constants.catalan; // 0.915965594177219  (Catalan's G)
```

**Mathematical Constants** — a collection of **24 high-precision fundamental constants**, each verified bit-for-bit (zero-ULP) against high-precision references. In some cases the stored value is _more accurate_ than the naïve `Math.*` computation — for example, `sqrtPi` avoids the double-rounding error of `Math.sqrt(Math.PI)`.

**Circle & transcendental**

| Constant Name  | Symbol | Syntax          | Description                                            | Library Key |
| :------------- | :----: | :-------------- | :----------------------------------------------------- | :---------- |
| Pi             | $\pi$  | `constants.pi`  | The ratio of a circle's circumference to its diameter. | `pi`        |
| Euler's Number |  $e$   | `constants.e`   | The base of the natural logarithm.                     | `e`         |
| Tau            | $\tau$ | `constants.tau` | A full turn in radians, equal to 2π.                   | `tau`       |

**Roots**

| Constant Name        |        Symbol        | Syntax              | Description                                          | Library Key |
| :------------------- | :------------------: | :------------------ | :--------------------------------------------------- | :---------- |
| Square Root of 2     |      $\sqrt{2}$      | `constants.sqrt2`   | Pythagoras' constant; the diagonal of a unit square. | `sqrt2`     |
| Square Root of 3     |      $\sqrt{3}$      | `constants.sqrt3`   | Theodorus' constant; the space diagonal of a cube.   | `sqrt3`     |
| Square Root of 5     |      $\sqrt{5}$      | `constants.sqrt5`   | The core of the golden ratio: φ = (1 + √5)/2.        | `sqrt5`     |
| Reciprocal Root of 2 | $\frac{1}{\sqrt{2}}$ | `constants.sqrt1_2` | Equals √2/2; the value of sin(45°) = cos(45°).       | `sqrt1_2`   |
| Square Root of e     |      $\sqrt{e}$      | `constants.sqrtE`   | The square root of Euler's number.                   | `sqrtE`     |
| Square Root of Pi    |     $\sqrt{\pi}$     | `constants.sqrtPi`  | The square root of Pi, also equal to Γ(1/2).         | `sqrtPi`    |

**Logarithms**

| Constant Name     |    Symbol     | Syntax             | Description                                      | Library Key |
| :---------------- | :-----------: | :----------------- | :----------------------------------------------- | :---------- |
| Natural Log of 2  |    $\ln 2$    | `constants.ln2`    | The natural logarithm of 2.                      | `ln2`       |
| Natural Log of 10 |   $\ln 10$    | `constants.ln10`   | The natural logarithm of 10.                     | `ln10`      |
| Log Base 2 of e   |  $\log_2 e$   | `constants.log2e`  | Base-2 logarithm of e; the reciprocal of ln 2.   | `log2e`     |
| Log Base 10 of e  | $\log_{10} e$ | `constants.log10e` | Base-10 logarithm of e; the reciprocal of ln 10. | `log10e`    |

**Golden ratio & relatives**

| Constant Name  |  Symbol   | Syntax                    | Description                                            | Library Key     |
| :------------- | :-------: | :------------------------ | :----------------------------------------------------- | :-------------- |
| Golden Ratio   | $\varphi$ | `constants.phi`           | The golden ratio, the positive root of x² = x + 1.     | `phi`           |
| Golden Angle   | ≈ 137.5°  | `constants.goldenAngle`   | The golden angle in radians, π·(3 − √5).               | `goldenAngle`   |
| Plastic Number |  $\rho$   | `constants.plasticNumber` | The real root of x³ = x + 1; the "cubic" golden ratio. | `plasticNumber` |

**Number theory**

| Constant Name      |   Symbol   | Syntax                      | Description                                                     | Library Key       |
| :----------------- | :--------: | :-------------------------- | :-------------------------------------------------------------- | :---------------- |
| Euler-Mascheroni   |  $\gamma$  | `constants.eulerMascheroni` | The limiting difference between the harmonic series and ln(n).  | `eulerMascheroni` |
| e to the Gamma     | $e^\gamma$ | `constants.eToTheGamma`     | One of the Mertens' constants from number theory.               | `eToTheGamma`     |
| Catalan's Constant |    $G$     | `constants.catalan`         | Appears in combinatorics, definite integrals, and lattice sums. | `catalan`         |
| Apéry's Constant   | $\zeta(3)$ | `constants.apery`           | The zeta function at 3; proven irrational in 1979.              | `apery`           |

**Gamma function values**

| Constant Name |        Symbol         | Syntax                     | Description                             | Library Key      |
| :------------ | :-------------------: | :------------------------- | :-------------------------------------- | :--------------- |
| Gamma of 1/3  | $\Gamma(\frac{1}{3})$ | `constants.gammaOneThird`  | The value of the Gamma function at 1/3. | `gammaOneThird`  |
| Gamma of 1/4  | $\Gamma(\frac{1}{4})$ | `constants.gammaOneFourth` | The value of the Gamma function at 1/4. | `gammaOneFourth` |

**Conversion factors**

| Constant Name      |   Symbol    | Syntax               | Description                                            | Library Key |
| :----------------- | :---------: | :------------------- | :----------------------------------------------------- | :---------- |
| Radians to Degrees | `rad → deg` | `constants.radToDeg` | The conversion factor from radians to degrees (180/π). | `radToDeg`  |
| Degrees to Radians | `deg → rad` | `constants.degToRad` | The conversion factor from degrees to radians (π/180). | `degToRad`  |

<details>
<summary><strong>🧪 Click here - Function tests executed in console.log</strong></summary>

```javascript
// #### Usage Example (constants)
// Import the constants object
import { constants } from "codymath";

// 1. Pi (π)
console.log(`π = ${constants.pi}`);
// Output: π = 3.141592653589793

// 2. Euler's Number (e)
console.log(`e = ${constants.e}`);
// Output: e = 2.718281828459045

// 3. Golden Ratio (φ)
console.log(`φ = ${constants.phi}`);
// Output: φ = 1.618033988749895
console.log(`φ² === φ + 1 ? ${constants.phi ** 2 === constants.phi + 1}`);
// Output: φ² === φ + 1 ? true

// 4. Tau (τ = 2π)
console.log(`τ = ${constants.tau}`);
// Output: τ = 6.283185307179586
console.log(`τ === 2π ? ${constants.tau === 2 * constants.pi}`);
// Output: τ === 2π ? true

// 5. Square Root of 2 (√2)
console.log(`√2 = ${constants.sqrt2}`);
// Output: √2 = 1.4142135623730951

// 6. Square Root of 3 (√3)
console.log(`√3 = ${constants.sqrt3}`);
// Output: √3 = 1.7320508075688772

// 7. Square Root of 5 (√5)
console.log(`√5 = ${constants.sqrt5}`);
// Output: √5 = 2.23606797749979
console.log(
   `(1 + √5) / 2 === φ ? ${(1 + constants.sqrt5) / 2 === constants.phi}`,
);
// Output: (1 + √5) / 2 === φ ? true

// 8. Reciprocal Root of 2 (1/√2)
console.log(`1/√2 = ${constants.sqrt1_2}`);
// Output: 1/√2 = 0.7071067811865476
console.log(`√2 / 2 === 1/√2 ? ${constants.sqrt2 / 2 === constants.sqrt1_2}`);
// Output: √2 / 2 === 1/√2 ? true

// 9. Natural Logarithm of 2 (ln 2)
console.log(`ln 2 = ${constants.ln2}`);
// Output: ln 2 = 0.6931471805599453
console.log(`e^(ln 2) === 2 ? ${Math.exp(constants.ln2) === 2}`);
// Output: e^(ln 2) === 2 ? true

// 10. Natural Logarithm of 10 (ln 10)
console.log(`ln 10 = ${constants.ln10}`);
// Output: ln 10 = 2.302585092994046

// 11. Base-2 Logarithm of e (log₂ e)
console.log(`log₂ e = ${constants.log2e}`);
// Output: log₂ e = 1.4426950408889634
console.log(`log₂e · ln2 === 1 ? ${constants.log2e * constants.ln2 === 1}`);
// Output: log₂e · ln2 === 1 ? true

// 12. Base-10 Logarithm of e (log₁₀ e)
console.log(`log₁₀ e = ${constants.log10e}`);
// Output: log₁₀ e = 0.4342944819032518
console.log(`log₁₀e · ln10 === 1 ? ${constants.log10e * constants.ln10 === 1}`);
// Output: log₁₀e · ln10 === 1 ? true

// 13. Catalan's Constant (G)
console.log(`G = ${constants.catalan}`);
// Output: G = 0.915965594177219

// 14. Apéry's Constant (ζ(3))
console.log(`ζ(3) = ${constants.apery}`);
// Output: ζ(3) = 1.2020569031595942

// 15. Golden Angle (radians)
console.log(`golden angle = ${constants.goldenAngle} rad`);
// Output: golden angle = 2.399963229728653 rad
console.log(`= ${constants.goldenAngle * constants.radToDeg}°`);
// Output: = 137.50776405003785°

// 16. Plastic Number (ρ)
console.log(`ρ = ${constants.plasticNumber}`);
// Output: ρ = 1.324717957244746
console.log(
   `ρ³ === ρ + 1 ? ${constants.plasticNumber ** 3 === constants.plasticNumber + 1}`,
);
// Output: ρ³ === ρ + 1 ? true

// 17. Euler–Mascheroni Constant (γ)
console.log(`γ = ${constants.eulerMascheroni}`);
// Output: γ = 0.5772156649015329

// 18. e to the Gamma (e^γ)
console.log(`e^γ = ${constants.eToTheGamma}`);
// Output: e^γ = 1.781072417990198

// 19. Square Root of e (√e)
console.log(`√e = ${constants.sqrtE}`);
// Output: √e = 1.6487212707001282

// 20. Square Root of Pi (√π)
console.log(`√π = ${constants.sqrtPi}`);
// Output: √π = 1.772453850905516

// 21. Gamma(1/3)
console.log(`Γ(1/3) = ${constants.gammaOneThird}`);
// Output: Γ(1/3) = 2.6789385347077475

// 22. Gamma(1/4)
console.log(`Γ(1/4) = ${constants.gammaOneFourth}`);
// Output: Γ(1/4) = 3.625609908221908

// 23. Radians → Degrees
const radians = 1;
console.log(`${radians} rad = ${constants.radToDeg * radians}°`);
// Output: 1 rad = 57.29577951308232°

// 24. Degrees → Radians
const degrees = 180;
const rad = constants.degToRad * degrees;
console.log(`${degrees}° = ${rad} rad`);
// Output: 180° = 3.141592653589793 rad
console.log(`Equal to π? ${rad === constants.pi}`);
// Output: Equal to π? true
```

</details>

</details>

<details>
<summary><strong>🧪Click here to see the test result </strong></summary>

```js
function initializeTests() {
   const { constants } = CodyMath;
   const { greekAlphabet } = CodyMath;
   const resultsContainer = document.getElementById("test-results-container");
   const usageCodeBlock = document.getElementById("usage-code-block");

   const referenceValues = {
      pi: constants.pi,
      e: constants.e,
      eulerMascheroni: constants.eulerMascheroni,
      eToTheGamma: constants.eToTheGamma,
      sqrtE: constants.sqrtE,
      sqrtPi: constants.sqrtPi,
      radToDeg: constants.radToDeg,
      degToRad: constants.degToRad,
      gammaOneThird: constants.gammaOneThird,
      gammaOneFourth: constants.gammaOneFourth,
   };

   const constantsToTest = [
      { symbol: "π", key: "pi" },
      { symbol: "e", key: "e" },
      { symbol: "γ", key: "eulerMascheroni" },
      { symbol: "e^γ", key: "eToTheGamma" },
      { symbol: "√e", key: "sqrtE" },
      { symbol: "√π", key: "sqrtPi" },
      { symbol: "rad → deg", key: "radToDeg" },
      { symbol: "deg → rad", key: "degToRad" },
      { symbol: "Γ(1/3)", key: "gammaOneThird" },
      { symbol: "Γ(1/4)", key: "gammaOneFourth" },
   ];

   function runTests() {
      if (!resultsContainer) return;
      resultsContainer.innerHTML = "";

      constantsToTest.forEach((item, index) => {
         const libValue = constants[item.key];
         const refValue = referenceValues[item.key];
         const isApproved = libValue === refValue;

         const row = document.createElement("div");
         row.className = "test-result-row";
         row.style.animationDelay = `${index * 100}ms`;

         const symbolEl = document.createElement("span");
         symbolEl.className = "symbol";
         symbolEl.textContent = item.symbol;

         const progressContainer = document.createElement("div");
         progressContainer.className = "progress-bar-container";

         const progressBar = document.createElement("div");
         progressBar.className = `progress-bar ${
            isApproved ? "approved" : "rejected"
         }`;

         const statusIcon = document.createElement("span");
         statusIcon.className = `status-icon ${
            isApproved ? "approved" : "rejected"
         }`;
         statusIcon.textContent = isApproved ? "✔" : "❌";

         progressContainer.appendChild(progressBar);
         row.appendChild(symbolEl);
         row.appendChild(progressContainer);
         row.appendChild(statusIcon);
         resultsContainer.appendChild(row);

         setTimeout(
            () => {
               progressBar.style.width = "100%";
            },
            100 + index * 100,
         );
      });
   }

   function populateUsageExamples() {
      if (!usageCodeBlock) return;

      function runExample(codeSnippet, fn) {
         let result;
         try {
            result = fn();
         } catch (err) {
            result = `Error: ${err.message}`;
         }
         return `${codeSnippet}\n// Expected Output ➜ ${result}\n`;
      }

      const codeExamples = [
         runExample(
            `1. Pi (${greekAlphabet.pi.lower})\nconsole.log(\`\${greekAlphabet.pi.lower} = \${constants.pi}\`);`,
            () =>
               ` π = 3.141592653589793 // \n\n RESULT = ⟦ ${greekAlphabet.pi.lower} = ${constants.pi} ⟧`,
         ),
         runExample(
            `2. Euler's Number (e)\nconsole.log(\`e = \${constants.e}\`);`,
            () =>
               ` e = 2.718281828459045 // \n\n RESULT = ⟦ e = ${constants.e} ⟧`,
         ),
         runExample(
            `3. Euler–Mascheroni Constant (γ)\nconsole.log(\`γ = \${constants.eulerMascheroni}\`);`,
            () =>
               ` γ = ${constants.eulerMascheroni} // \n\n RESULT = ⟦ γ = ${constants.eulerMascheroni} ⟧`,
         ),
         runExample(
            `4. e to the Gamma (e^γ)\nconsole.log(\`e^γ = \${constants.eToTheGamma}\`);`,
            () =>
               ` e^γ = ${constants.eToTheGamma} // \n\n RESULT = ⟦ e^γ = ${constants.eToTheGamma} ⟧`,
         ),
         runExample(
            `5. Square Root of e (√e)\nconsole.log(\`√e = \${constants.sqrtE}\`);`,
            () =>
               ` √e = ${constants.sqrtE} // \n\n RESULT = ⟦ √e = ${constants.sqrtE} ⟧`,
         ),
         runExample(
            `6. Square Root of Pi (√π)\nconsole.log(\`√π = \${constants.sqrtPi}\`);`,
            () =>
               ` √π = ${constants.sqrtPi} // \n\n RESULT = ⟦ √π = ${constants.sqrtPi} ⟧`,
         ),
         runExample(
            `7. Radians → Degrees\nconst radians = 1;\nconsole.log(\`\${radians} rad = \${constants.radToDeg * radians}°\`);`,
            () => {
               const radians = 1;
               const result = `${radians} rad = ${constants.radToDeg * radians}°`;
               return ` ${result} // \n\n RESULT = ⟦ ${result} ⟧`;
            },
         ),
         runExample(
            `8. Degrees → Radians\nconst degrees = 180;\nconst rad = constants.degToRad * degrees;\nconsole.log(\`\${degrees}° = \${rad} rad\`);\nconsole.log(\`Equal to π? \${rad === constants.pi}\`);`,
            () => {
               const degrees = 180;
               const rad = constants.degToRad * degrees;
               const result = `${degrees}° = ${rad} rad\nEqual to π? ${rad === constants.pi}`;
               return ` ${result} // \n\n RESULT = ⟦ ${result} ⟧`;
            },
         ),
         runExample(
            `9. Gamma(1/3)\nconsole.log(\`Γ(1/3) = \${constants.gammaOneThird}\`);`,
            () =>
               ` Γ(1/3) = ${constants.gammaOneThird} // \n\n RESULT = ⟦ Γ(1/3) = ${constants.gammaOneThird} ⟧`,
         ),
         runExample(
            `10. Gamma(1/4)\nconsole.log(\`Γ(1/4) = \${constants.gammaOneFourth}\`);`,
            () =>
               ` Γ(1/4) = ${constants.gammaOneFourth} // \n\n RESULT = ⟦ Γ(1/4) = ${constants.gammaOneFourth} ⟧`,
         ),
      ];

      usageCodeBlock.textContent = codeExamples.join("\n");
   }

   runTests();
   populateUsageExamples();
}

const libraryCheckInterval = setInterval(() => {
   if (typeof CodyMath !== "undefined") {
      clearInterval(libraryCheckInterval);
      initializeTests();
   }
}, 100);
```

![constTest][ctTest]

[ctTest]: ./assets/img/testsImgs/constants/constantsTest01.png

![constTest01][ct01Test]

[ct01Test]: ./assets/img/testsImgs/constants/constantsTest02.png

![constTest02][ct02Test]

[ct02Test]: ./assets/img/testsImgs/constants/constantsTest03.png

![constTest03][ct03Test]

[ct03Test]: ./assets/img/testsImgs/constants/constantsTest04.png

![constTest04][ct04Test]

[ct04Test]: ./assets/img/testsImgs/constants/constantsTest05.png

</details>

## Current Features

### Module: `alphabets/greek`

- **Alphabets:** Provides the full 24 letters of the Greek alphabet for use in formulas and notation. Below is a complete list of the available letters.
  | Letter | Lowercase | Uppercase | Library Key |
  | :--- | :---: | :---: | :--- |
  | Alpha | α | Α | `alpha` |
  | Beta | β | Β | `beta` |
  | Gamma | γ | Γ | `gamma` |
  | Delta | δ | Δ | `delta` |
  | Epsilon | ε | Ε | `epsilon` |
  | Zeta | ζ | Ζ | `zeta` |
  | Eta | η | Η | `eta` |
  | Theta | θ | Θ | `theta` |
  | Iota | ι | Ι | `iota` |
  | Kappa | κ | Κ | `kappa` |
  | Lambda | λ | Λ | `lambda` |
  | Mu | μ | Μ | `mu` |
  | Nu | ν | Ν | `nu` |
  | Xi | ξ | Ξ | `xi` |
  | Omicron | ο | Ο | `omicron` |
  | Pi | π | Π | `pi` |
  | Rho | ρ | Ρ | `rho` |
  | Sigma | σ | Σ | `sigma` |
  | Tau | τ | Τ | `tau` |
  | Upsilon | υ | Υ | `upsilon` |
  | Phi | φ | Φ | `phi` |
  | Chi | χ | Χ | `chi` |
  | Psi | ψ | Ψ | `psi` |
  | Omega | ω | Ω | `omega` |

```javascript
//#### Usage Example
// Import the module
import { greekAlphabet } from "codymath";

// Access the properties of a specific letter.
// IMPORTANT: You MUST specify a property (.lower or .upper) to get the character.
// Calling the letter name directly (e.g., greekAlphabet.pi) will return an object, not the symbol.
console.log("The symbol for Pi is:", greekAlphabet.pi.upper);
// Output: The symbol for Pi is: Π
//OR
// Access the properties of a specific letter
console.log("The symbol for Pi is:", greekAlphabet.pi.lower);
// Output: The symbol for Pi is: π

// Use different properties in a sentence
const sigma = greekAlphabet.sigma;
console.log(
   `The letter ${sigma.name} is often used for summations (${sigma.upper}) and standard deviation (${sigma.lower}).`,
);
// Output: The letter Sigma is often used for summations (Σ) and standard deviation (σ).
```

<details>
<summary><strong>🧪Click here to see the test result via CDN 🌐</strong></summary>

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <title>CodyMath CDN Test</title>
      <script src="https://cdn.jsdelivr.net/npm/codymath@latest/dist/codymath.umd.js"></script>
      <link rel="stylesheet" href="./index.css" />
   </head>
   <body>
      <main>
         <h1>CodyMath CDN Test</h1>
         <div id="output1"></div>
         <div id="output2"></div>
         <div id="output3"></div>
         <div id="output4"></div>
         <div id="output5"></div>
         <div id="output6"></div>
         <div id="output7"></div>
         <div id="output8"></div>
         <div id="output9"></div>
         <div id="output10"></div>
         <div id="output11"></div>
         <div id="output12"></div>
         <div id="output13"></div>
         <div id="output14"></div>
         <div id="output15"></div>
         <div id="output16"></div>
         <div id="output17"></div>
         <div id="output18"></div>
         <div id="output19"></div>
         <div id="output20"></div>
         <div id="output21"></div>
         <div id="output22"></div>
         <div id="output23"></div>
         <div id="output24"></div>
         <div id="output25"></div>
      </main>
      <script src="./index.js"></script>
   </body>
</html>
```

---

```js
// 2. You can now use the global 'CodyMath' object
const { greekAlphabet } = CodyMath;

const alpha = greekAlphabet.alpha;
const beta = greekAlphabet.beta;
const gamma = greekAlphabet.gamma;
const delta = greekAlphabet.delta;
const epsilon = greekAlphabet.epsilon;
const zeta = greekAlphabet.zeta;
const eta = greekAlphabet.eta;
const theta = greekAlphabet.theta;
const iota = greekAlphabet.iota;
const kappa = greekAlphabet.kappa;
const lambda = greekAlphabet.lambda;
const mu = greekAlphabet.mu;
const nu = greekAlphabet.nu;
const xi = greekAlphabet.xi;
const omicron = greekAlphabet.omicron;
const pi = greekAlphabet.pi;
const rho = greekAlphabet.rho;
const sigma = greekAlphabet.sigma;
const tau = greekAlphabet.tau;
const upsilon = greekAlphabet.upsilon;
const phi = greekAlphabet.phi;
const chi = greekAlphabet.chi;
const psi = greekAlphabet.psi;
const omega = greekAlphabet.omega;

// Example of how to display it on the page
document.getElementById("output1").innerText =
   `The Greek letter is ${alpha.name} (${alpha.upper}, ${alpha.lower})`;
document.getElementById("output2").innerText =
   `The Greek letter is ${beta.name} (${beta.upper}, ${beta.lower})`;
document.getElementById("output3").innerText =
   `The Greek letter is ${gamma.name} (${gamma.upper}, ${gamma.lower})`;
document.getElementById("output4").innerText =
   `The Greek letter is ${delta.name} (${delta.upper}, ${delta.lower})`;
document.getElementById("output5").innerText =
   `The Greek letter is ${epsilon.name} (${epsilon.upper}, ${epsilon.lower})`;
document.getElementById("output6").innerText =
   `The Greek letter is ${zeta.name} (${zeta.upper}, ${zeta.lower})`;
document.getElementById("output7").innerText =
   `The Greek letter is ${eta.name} (${eta.upper}, ${eta.lower})`;
document.getElementById("output8").innerText =
   `The Greek letter is ${theta.name} (${theta.upper}, ${theta.lower})`;
document.getElementById("output9").innerText =
   `The Greek letter is ${iota.name} (${iota.upper}, ${iota.lower})`;
document.getElementById("output10").innerText =
   `The Greek letter is ${kappa.name} (${kappa.upper}, ${kappa.lower})`;
document.getElementById("output11").innerText =
   `The Greek letter is ${lambda.name} (${lambda.upper}, ${lambda.lower})`;
document.getElementById("output12").innerText =
   `The Greek letter is ${mu.name} (${mu.upper}, ${mu.lower})`;
document.getElementById("output13").innerText =
   `The Greek letter is ${nu.name} (${nu.upper}, ${nu.lower})`;
document.getElementById("output14").innerText =
   `The Greek letter is ${xi.name} (${xi.upper}, ${xi.lower})`;
document.getElementById("output15").innerText =
   `The Greek letter is ${omicron.name} (${omicron.upper}, ${omicron.lower})`;
document.getElementById("output16").innerText =
   `The Greek letter is ${pi.name} (${pi.upper}, ${pi.lower})`;
document.getElementById("output17").innerText =
   `The Greek letter is ${rho.name} (${rho.upper}, ${rho.lower})`;
document.getElementById("output18").innerText =
   `The Greek letter is ${sigma.name} (${sigma.upper}, ${sigma.lower})`;
document.getElementById("output19").innerText =
   `The Greek letter is ${tau.name} (${tau.upper}, ${tau.lower})`;
document.getElementById("output20").innerText =
   `The Greek letter is ${upsilon.name} (${upsilon.upper}, ${upsilon.lower})`;
document.getElementById("output21").innerText =
   `The Greek letter is ${phi.name} (${phi.upper}, ${phi.lower})`;
document.getElementById("output22").innerText =
   `The Greek letter is ${chi.name} (${chi.upper}, ${chi.lower})`;
document.getElementById("output23").innerText =
   `The Greek letter is ${psi.name} (${psi.upper}, ${psi.lower})`;
document.getElementById("output24").innerText =
   `The Greek letter is ${omega.name} (${omega.upper}, ${omega.lower})`;
```

---

![cdnTest][cdnTest]

[cdnTest]: ./assets/img/testsImgs/greek/cdnTestCodyMathLib.svg

</details>

<details>
<summary><strong>🧪Click here to see the test result locally via NPM package 📦</strong></summary>

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CodyMath Local NPM Package Test</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link
         href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
         rel="stylesheet"
      />
      <style>
         body {
            font-family: "Inter", sans-serif;
         }
         .logo-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
         }
      </style>
   </head>
   <body
      class="bg-gray-900 text-white flex items-center justify-center min-h-screen p-4"
   >
      <div
         class="w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700"
      >
         <div class="logo-container mb-6">
            <img
               src="./../img/logoCodyMath.svg"
               alt="CodyMath Logo"
               width="300px"
            />
         </div>
         <h1 class="text-2xl font-bold text-center mb-2">
            Local NPM Package Test
         </h1>
         <p class="text-center text-gray-400 mb-6">
            Testing `codymath` imported from `node_modules`.
         </p>

         <div class="bg-gray-900 rounded-md p-4 border border-gray-600">
            <h2 class="font-semibold text-lg mb-2 text-green-400">
               Test Results:
            </h2>
            <pre
               class="text-sm text-gray-300 whitespace-pre-wrap"
            ><code id="output">Loading and testing library...</code></pre>
         </div>

         <div class="mt-6 bg-gray-900 rounded-md p-4 border border-gray-600">
            <h2 class="font-semibold text-lg mb-4 text-green-400">
               Greek Alphabet:
            </h2>
            <div
               id="greek-alphabet-display"
               class="flex flex-wrap gap-x-4 gap-y-2 text-lg text-center"
            ></div>
         </div>
      </div>

      <script type="module" src="main.js"></script>
   </body>
</html>
```

---

```js
import { greekAlphabet } from "codymath";

const outputElement = document.getElementById("output");
let results = [];

try {
   if (greekAlphabet && typeof greekAlphabet === "object") {
      results.push("✅ SUCCESS: Module `greekAlphabet` loaded.");
   } else {
      throw new Error("Module `greekAlphabet` is not an object.");
   }

   const letterCount = Object.keys(greekAlphabet).length;
   if (letterCount === 24) {
      results.push(`✅ SUCCESS: All 24 letters found.`);
   } else {
      throw new Error(`FAILURE: Expected 24 letters, found ${letterCount}.`);
   }

   const pi = greekAlphabet.pi;
   if (pi && pi.name === "Pi" && pi.lower === "π") {
      results.push("✅ SUCCESS: Object `pi` is correct.");
   } else {
      results.push("❌ FAILURE: Object `pi` is incorrect!");
   }

   const omega = greekAlphabet.omega;
   results.push("");
   results.push("--- Usage Example ---");
   results.push(`Using Omega: ${omega.name} -> ${omega.upper} ${omega.lower}`);

   outputElement.textContent = results.join("\n");
   outputElement.style.color = "#6EE7B7";

   const alphabetContainer = document.getElementById("greek-alphabet-display");
   if (alphabetContainer) {
      const alphabetHTML = Object.values(greekAlphabet)
         .map((letter) => {
            return `<span class="w-20 flex items-center justify-center p-2 bg-gray-700 rounded-md" title="${letter.name}">${letter.upper} ${letter.lower}</span>`;
         })
         .join("");

      alphabetContainer.innerHTML = alphabetHTML;
   }
} catch (error) {
   results.push(`❌ CRITICAL ERROR: Could not run the tests.`);
   results.push(error.message);
   outputElement.textContent = results.join("\n");
   outputElement.style.color = "#F87171";
}
```

---

![cdnTest][packageTest]

[packageTest]: ./assets/img/testsImgs/greek/localNpmTestCodyMathLib.svg

</details>

---

---

### Module: `utils/utils`

This module provides a comprehensive toolkit of high-level utility functions, designed to tackle common, real-world problems across domains such as data formatting, geometry, and numerical analysis.
A standout feature is the powerful toWords function suite, offering robust number-to-word conversion for over 30 of the world's most spoken languages. Each translation is meticulously engineered to handle the complex grammatical and orthographic rules of its locale—from English and Spanish to Brazilian Portuguese and beyond—making it a truly global and reliable utility for any application.

| Function                  | Syntax                                     | Description                                                                              | Key                   |
| :------------------------ | :----------------------------------------- | :--------------------------------------------------------------------------------------- | :-------------------- |
| **Map**                   | `map(value, inMin, inMax, outMin, outMax)` | Remaps a number from one range to another.                                               | `map`                 |
| **Random**                | `random(min?, max?)`                       | Generates a pseudo-random floating-point number within a specified range.                | `random`              |
| **Random Float**          | `randomFloat()`                            | Generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). | `randomFloat`         |
| **Is Nearly Equal**       | `isNearlyEqual(a, b, epsilon?)`            | Compares two floating-point numbers for approximate equality within a tolerance.         | `isNearlyEqual`       |
| **Is Power of Two**       | `isPowerOfTwo(n)`                          | Checks if a number or BigInt is a power of two.                                          | `isPowerOfTwo`        |
| **Distance**              | `distance(x1, y1, x2, y2)`                 | Calculates the 2D Euclidean distance between two points.                                 | `distance`            |
| **Format Currency**       | `formatCurrency(n, options?)`              | Formats a number as a customizable currency string.                                      | `formatCurrency`      |
| **To Words (Pure)**       | `toWordsPure(n, lang?)`                    | Converts a number into its written-out 'pure' representation.                            | `toWordsPure`         |
| **To Words (Currency)**   | `toWordsCurrency(n, options?)`             | Converts a number into its written-out currency representation.                          | `toWordsCurrency`     |
| **Get Integer Part**      | `getIntegerPart(n)`                        | Returns the integer part of a number, with handling for unsafe integers.                 | `getIntegerPart`      |
| **Get Fractional Part**   | `getFractionalPart(n)`                     | Returns the fractional part of a number, with precision correction.                      | `getFractionalPart`   |
| **Count Digits**          | `countDigits(n)`                           | Counts the number of digits in the integer part of a number.                             | `countDigits`         |
| **Count Digits Detailed** | `countDigitsDetailed(n)`                   | Returns an object with the digit counts of the integer and fractional parts.             | `countDigitsDetailed` |
| **Pad Zeroes**            | `padZeroes(n, length)`                     | Pads the integer part of a number with leading zeros to a specified length.              | `padZeroes`           |

```javascript
import { utils } from "codymath";

// --- map ---
console.log(`map(50, 0, 100, 0, 1): ${utils.map(50, 0, 100, 0, 1)}`);
// Output: map(50, 0, 100, 0, 1): 0.5
console.log(`map(25, 0, 50, 100, 0): ${utils.map(25, 0, 50, 100, 0)}`);
// Output: map(25, 0, 50, 100, 0): 50
console.log(`map(10, -10, 30, 0, 1): ${utils.map(10, -10, 30, 0, 1)}`);
// Output: map(10, -10, 30, 0, 1): 0.5

// --- random ---
console.log(`random(): ${utils.random()}`);
// Output: random(): 0.763... (example)
console.log(`random(10, 20): ${utils.random(10, 20)}`);
// Output: random(10, 20): 15.234... (example)
console.log(`random(-50, -25): ${utils.random(-50, -25)}`);
// Output: random(-50, -25): -35.817... (example)

// --- randomFloat ---
console.log(`randomFloat(): ${utils.randomFloat()}`);
// Output: randomFloat(): 0.481... (example)
console.log(`randomFloat(): ${utils.randomFloat()}`);
// Output: randomFloat(): 0.915... (example)
console.log(`randomFloat(): ${utils.randomFloat()}`);
// Output: randomFloat(): 0.203... (example)

// --- isNearlyEqual ---
console.log(
   `isNearlyEqual(0.1 + 0.2, 0.3): ${utils.isNearlyEqual(0.1 + 0.2, 0.3)}`,
);
// Output: isNearlyEqual(0.1 + 0.2, 0.3): true
console.log(`isNearlyEqual(5, 5.01): ${utils.isNearlyEqual(5, 5.01)}`);
// Output: isNearlyEqual(5, 5.01): false
console.log(
   `isNearlyEqual(5, 5.01, 0.1): ${utils.isNearlyEqual(5, 5.01, 0.1)}`,
);
// Output: isNearlyEqual(5, 5.01, 0.1): true

// --- isPowerOfTwo ---
console.log(`isPowerOfTwo(16): ${utils.isPowerOfTwo(16)}`);
// Output: isPowerOfTwo(16): true
console.log(`isPowerOfTwo(15.999): ${utils.isPowerOfTwo(15.999)}`);
// Output: isPowerOfTwo(15.999): false
console.log(`isPowerOfTwo(2n ** 100n): ${utils.isPowerOfTwo(2n ** 100n)}`);
// Output: isPowerOfTwo(2n ** 100n): true

// --- distance ---
console.log(`distance(0, 0, 3, 4): ${utils.distance(0, 0, 3, 4)}`);
// Output: distance(0, 0, 3, 4): 5
console.log(`distance(-1, -1, 1, 1): ${utils.distance(-1, -1, 1, 1)}`);
// Output: distance(-1, -1, 1, 1): 2.8284271247461903
console.log(`distance(50, 50, 50, 50): ${utils.distance(50, 50, 50, 50)}`);
// Output: distance(50, 50, 50, 50): 0

// --- formatCurrency ---
console.log(`formatCurrency(1234.5): "${utils.formatCurrency(1234.5)}"`);
// Output: formatCurrency(1234.5): "$1,234.50"
console.log(
   `formatCurrency(1234.5, { currencySymbol: 'R$ ', thousandsSeparator: '.', decimalSeparator: ',' }): "${utils.formatCurrency(1234.5, { currencySymbol: "R$ ", thousandsSeparator: ".", decimalSeparator: "," })}"`,
);
// Output: formatCurrency(1234.5, { ... }): "R$ 1.234,50"
console.log(
   `formatCurrency(99.995, { decimals: 2, currencySymbol: '€' }): "${utils.formatCurrency(99.995, { decimals: 2, currencySymbol: "€" })}"`,
);
// Output: formatCurrency(99.995, { ... }): "€100.00"
```

#### Natural Language: `toWords`

The `toWords` suite is one of the most powerful features of CodyMath, offering highly detailed and grammatically correct number-to-word conversions. It is divided into two main functions to cover distinct use cases.

##### `toWordsPure(n, lang?)`

This function provides a "pure" or literal representation of a number in words. The fractional part is handled by spelling out each digit individually after the separator word (e.g., "point", "vírgula", "coma").

**Example:**
`toWordsPure(120.01, 'pt-BR')` returns `"cento e vinte vírgula zero um"`.

##### `toWordsCurrency(n, options?)`

This function converts a number into a proper currency representation, correctly handling rounding to two decimal places, singular vs. plural forms for both major and minor currency units, and the appropriate connectors.

**Example:**
`toWordsCurrency(1.01, { lang: 'es-ES' })` returns `"un euro con un céntimo"`.

##### Multi-Language Support

Our goal for this feature is ambitious: to provide grammatically accurate support for **over 30 of the world's most spoken languages**. This is an ongoing effort, and we will be rolling out new languages incrementally.

**Currently Supported Languages:**

- `en-US` (Default)
- `pt-BR` (Brazilian Portuguese)
- `es-ES` (Spanish)

##### A Note on Complexity & Community Contributions

Converting numbers to words is a deceptively complex task, as grammatical rules can be incredibly intricate and vary significantly between languages. We have strived for maximum accuracy based on formal grammar rules and extensive testing.

However, some regional variations or subtle exceptions may still exist. If you find any grammatical inconsistency or have a suggestion for improving a translation, **we kindly ask you to open an Issue on our GitHub repository**. Community feedback is invaluable in making this feature truly world-class and reliable for everyone.

```javascript
// --- toWordsPure ---
console.log(`toWordsPure(-99.01): "${utils.toWordsPure(-99.01)}"`);
// Output: toWordsPure(-99.01): "minus ninety nine point zero one"
console.log(
   `toWordsPure(1001, 'pt-BR'): "${utils.toWordsPure(1001, "pt-BR")}"`,
);
// Output: toWordsPure(1001, 'pt-BR'): "mil e um"
console.log(
   `toWordsPure(21000000, 'es-ES'): "${utils.toWordsPure(21000000, "es-ES")}"`,
);
// Output: toWordsPure(21000000, 'es-ES'): "veintiún millones"

// --- toWordsCurrency ---
console.log(`toWordsCurrency(1.01): "${utils.toWordsCurrency(1.01)}"`);
// Output: toWordsCurrency(1.01): "one dollar and one cent"
console.log(
   `toWordsCurrency(25.995, { lang: 'pt-BR' }): "${utils.toWordsCurrency(25.995, { lang: "pt-BR" })}"`,
);
// Output: toWordsCurrency(25.995, { lang: 'pt-BR' }): "vinte e seis reais"
console.log(
   `toWordsCurrency(1, { lang: 'es-ES', majorSingular: 'peso', majorPlural: 'pesos' }): "${utils.toWordsCurrency(1, { lang: "es-ES", majorSingular: "peso", majorPlural: "pesos" })}"`,
);
// Output: toWordsCurrency(1, { ... }): "un peso"

// --- getIntegerPart ---
console.log(`getIntegerPart(123.45): ${utils.getIntegerPart(123.45)}`);
// Output: getIntegerPart(123.45): 123
console.log(`getIntegerPart(-99.99): ${utils.getIntegerPart(-99.99)}`);
// Output: getIntegerPart(-99.99): -99
try {
   utils.getIntegerPart(Number.MAX_SAFE_INTEGER + 10);
} catch (e) {
   console.log(`getIntegerPart(unsafe): ${e.message}`);
}
// Output: getIntegerPart(unsafe): Input number is outside the safe integer range and may cause precision loss.

// --- getFractionalPart ---
console.log(`getFractionalPart(-99.99): ${utils.getFractionalPart(-99.99)}`);
// Output: getFractionalPart(-99.99): -0.99
console.log(
   `getFractionalPart(0.1 + 0.2): ${utils.getFractionalPart(0.1 + 0.2)}`,
);
// Output: getFractionalPart(0.1 + 0.2): 0.3
console.log(`getFractionalPart(50): ${utils.getFractionalPart(50)}`);
// Output: getFractionalPart(50): 0

// --- countDigits ---
console.log(`countDigits(12345): ${utils.countDigits(12345)}`);
// Output: countDigits(12345): 5
console.log(`countDigits(-123.45): ${utils.countDigits(-123.45)}`);
// Output: countDigits(-123.45): 3
console.log(`countDigits(0): ${utils.countDigits(0)}`);
// Output: countDigits(0): 1

// --- countDigitsDetailed ---
console.log(`countDigitsDetailed(123.45):`, utils.countDigitsDetailed(123.45));
// Output: countDigitsDetailed(123.45): { integer: 3, fractional: 2 }
console.log(`countDigitsDetailed(-987):`, utils.countDigitsDetailed(-987));
// Output: countDigitsDetailed(-987): { integer: 3, fractional: 0 }
console.log(
   `countDigitsDetailed(0.12345):`,
   utils.countDigitsDetailed(0.12345),
);
// Output: countDigitsDetailed(0.12345): { integer: 1, fractional: 5 }

// --- padZeroes ---
console.log(`padZeroes(42, 5): "${utils.padZeroes(42, 5)}"`);
// Output: padZeroes(42, 5): "00042"
console.log(`padZeroes(-42.8, 5): "${utils.padZeroes(-42.8, 5)}"`);
// Output: padZeroes(-42.8, 5): "-00042"
console.log(`padZeroes(12345, 3): "${utils.padZeroes(12345, 3)}"`);
// Output: padZeroes(12345, 3): "12345"
```

---

## Author

- **Jackson Douglas de Souza**
   - [![LinkedIn](https://img.shields.io/badge/LinkedIn-Jackson%20Douglas-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/jacksondouglasdsouza/)
   - [![GitHub](https://img.shields.io/badge/GitHub-jacksondouglasdesouza-black?style=flat-square&logo=github)](https://github.com/jacksondouglasdesouza)

If you find this library useful and it helps you in your projects, please consider making a contribution. Every donation helps us dedicate more time to adding new features, improving documentation, and ensuring the project stays healthy and active for years to come.

Thank you for your support!

| Method                                                                                                      | Address / Link                                                                                     |
| :---------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| ![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)       | [`Click here to donate via PayPal`](https://www.paypal.com/donate/?hosted_button_id=8XYHYQNR2E27J) |
| ![Bitcoin](https://img.shields.io/badge/Bitcoin-000000?style=for-the-badge&logo=bitcoin&logoColor=white)    | `bc1q3zu0nng6765ptpmr86jcfn68h6e62sda7382e3`                                                       |
| ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white) | `0xF7Eb1D45cDD527b11BC49416DDfA51AD38e26ca1`                                                       |

## Acknowledgements & References

This library is built upon the foundational knowledge established by generations of mathematicians and programmers. The data and formulas are cross-referenced with the following major works to ensure accuracy:

- Spiegel, M. R., et al. _Schaum's Outline of Mathematical Handbook of Formulas and Tables_.
- The [NIST Digital Library of Mathematical Functions (DLMF)](https://dlmf.nist.gov/), the modern successor to Abramowitz & Stegun.
- The [National Institute of Standards and Technology (NIST) | _Digital Library of Mathematical Functions_. U.S. Department of Commerce. Retrieved ](https://dlmf.nist.gov/), the modern successor to Abramowitz & Stegun.
- The [Wolfram MathWorld](https://pt.wikipedia.org/wiki/MathWorld), a comprehensive online mathematical encyclopedia.
- Gradshteyn, I. S., & Ryzhik, I. M. _Table of Integrals, Series, and Products_.
- The [ECMA International. (2025). \*ECMAScript® 2025 Language Specification](https://tc39.es/ecma262/)
- Linguistic & Number-to-Word Rules | <strong>toWordsCurrency()</strong> | <strong>toWordsPure()</strong>
- Real Academia Española (RAE). _Diccionario panhispánico de dudas_. for Spanish numeral writing rules.
- Academia Brasileira de Letras (ABL). _Vocabulário Ortográfico da Língua Portuguesa_. for Portuguese vocabulary and standards.
- Cunha, C., & Cintra, L. F. L. _Nova Gramática do Português Contemporâneo_. for detailed Portuguese grammar rules.
- The University of Chicago. _The Chicago Manual of Style, 17th Edition_. for English numeral writing conventions.
- Knuth, D. E. (1997). _The Art of Computer Programming, Vol. 2: Seminumerical Algorithms, 3rd Edition_. Addison-Wesley.
- Cormen, T. H., et al. (2022). _Introduction to Algorithms, 4th Edition_. MIT Press.
- Goldberg, D. (1991). _What Every Computer Scientist Should Know About Floating-Point Arithmetic_. ACM Computing Surveys, 23(1), 5-48.
- OEIS Foundation Inc. _The On-Line Encyclopedia of Integer Sequences_. Retrieved from https://oeis.org/

## Security Policy

We take the security of this library seriously. If you find a security vulnerability, please refer to our [Security Policy](./SECURITY.md) for information on how to responsibly disclose it.

## License

CodyMath is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for more details.
