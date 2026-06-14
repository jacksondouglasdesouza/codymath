// tests/algebra/arithmetic.test.ts

import { constants } from "../../src/constants/constants";

/**
 * @fileoverview Unit tests for the core arithmetic module.
 * @version 0.7.0
 * @license MIT
 * @author Jackson Douglas de Souza
 * @date initial 2025-09-17 | Last updated test: 2026-06-13
 */

import { describe, it, expect } from "vitest";
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
   isNegativeZero,
   coprime,
   safeDiv,
   digits,
   sumOfSquares,
   divisors,
   fibonacci,
   inverseLerp,
   gcdMultiple,
   lcmMultiple,
   modPow,
   fromPercent,
   percentOf,
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
   cumulativeSum,
   deadzone,
   signedPow,
   roundToSignificant,
   normalizeToSum,
   geometricLerp,
   proportionalSplit,
} from "../../src/algebra/arithmetic";

describe("Function: sum", () => {
   it("should correctly sum a list of positive numbers", () => {
      expect(sum(1, 2, 3)).toBe(6);
      expect(sum(10, 20, 30, 40)).toBe(100);
   });

   it("should return the number itself when a single argument is provided", () => {
      expect(sum(42)).toBe(42);
      expect(sum(-5)).toBe(-5);
   });

   it("should pass a brutal stress test with mixed values and edge cases", () => {
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

describe("Function: subtract", () => {
   it("should correctly subtract positive numbers", () => {
      expect(subtract(10, 5)).toBe(5);
      expect(subtract(5, 10)).toBe(-5);
   });

   it("should produce a result consistent with the sum function (dogfooding)", () => {
      const a = 15;
      const b = 7;
      const result = subtract(a, b); // 8
      //
      expect(sum(result, b)).toBe(a);
   });

   it("should pass a brutal stress test with mixed values and edge cases", () => {
      expect(subtract(10, 0)).toBe(10);
      expect(subtract(0, 10)).toBe(-10);
      expect(subtract(0, 0)).toBe(0);
      expect(subtract(5, -3)).toBe(8);
      expect(subtract(-5, 3)).toBe(-8);
      expect(subtract(-5, -3)).toBe(-2);
   });
});

//--

describe("Function: multiply", () => {
   it("should correctly multiply a list of positive numbers", () => {
      expect(multiply(2, 3, 4)).toBe(24);
      expect(multiply(10, 5)).toBe(50);
      expect(multiply(7)).toBe(7);
   });

   it("should handle repeated multiplication correctly (as a basis for the power function)", () => {
      //
      expect(multiply(3, 3, 3)).toBe(27); // 3^3
      expect(multiply(10, 10)).toBe(100); // 10^2
   });

   it("should pass a brutal stress test with zeros, negatives, and the identity case", () => {
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

describe("Function: divide", () => {
   it("should correctly divide positive numbers", () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(100, 4)).toBe(25);
      expect(divide(10, 4)).toBe(2.5);
   });

   it("should correctly handle negative numbers and zero as a dividend", () => {
      expect(divide(-10, 2)).toBe(-5);
      expect(divide(10, -2)).toBe(-5);
      expect(divide(-10, -2)).toBe(5);
      expect(divide(0, 5)).toBe(0);
   });

   it("should produce a result consistent with the multiply function (dogfooding)", () => {
      const dividend = 42;
      const divisor = 6;
      const quotient = divide(dividend, divisor);

      //`multiply`
      expect(multiply(quotient, divisor)).toBeCloseTo(dividend);
   });

   it("should throw an error when dividing by zero (brutal stress test)", () => {
      //
      expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
      expect(() => divide(-5, 0)).toThrow("Division by zero is not allowed.");
      expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
   });
});

//--

describe("Function: mean", () => {
   it("should correctly calculate the mean of a list of positive numbers", () => {
      expect(mean(1, 2, 3, 4, 5)).toBe(3);
      expect(mean(10, 20, 30)).toBe(20);
   });

   it("should produce a result consistent with the sum and multiply functions (dogfooding)", () => {
      const numbers = [5, 10, 15, 20];
      const calculatedMean = mean(...numbers); // Should be 12.5
      const totalSum = sum(...numbers); // Should be 50
      //
      expect(multiply(calculatedMean, numbers.length)).toBeCloseTo(totalSum);
   });

   it("should pass a brutal stress test with mixed values and edge cases", () => {
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

describe("Function: power", () => {
   it("should correctly calculate the power for positive integer exponents", () => {
      expect(power(2, 3)).toBe(8);
      expect(power(10, 2)).toBe(100);
      expect(power(5, 1)).toBe(5);
   });

   it("should be consistent with the multiply function for integer exponents (dogfooding)", () => {
      // power(3, 4)
      expect(power(3, 4)).toBe(multiply(3, 3, 3, 3));
      expect(power(7, 2)).toBe(multiply(7, 7));
   });

   it("should pass a brutal stress test with negative, zero, and fractional exponents", () => {
      //
      expect(power(100, 0)).toBe(1);
      //
      expect(power(2, -1)).toBe(0.5);
      expect(power(4, -2)).toBe(0.0625);
      //
      expect(power(9, 0.5)).toBe(3);
      expect(power(27, 1 / 3)).toBeCloseTo(3);
      //
      expect(power(-2, 2)).toBe(4);
      expect(power(-2, 3)).toBe(-8);
      //0^0
      expect(power(0, 0)).toBe(1);
   });
});

//--

describe("Function: sqrt", () => {
   it("should correctly calculate the square root of perfect squares", () => {
      expect(sqrt(4)).toBe(2);
      expect(sqrt(9)).toBe(3);
      expect(sqrt(144)).toBe(12);
      expect(sqrt(0)).toBe(0);
   });

   it("should produce a result consistent with the power function (dogfooding)", () => {
      const number = 25;
      const result = sqrt(number); // 5

      //
      expect(power(result, 2)).toBe(number);

      const anotherNumber = 50;
      // User toBeCloseTo
      expect(power(sqrt(anotherNumber), 2)).toBeCloseTo(anotherNumber);
   });

   it("should pass a brutal stress test with non-integers and invalid inputs", () => {
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

describe("Function: cbrt", () => {
   it("should correctly calculate the cube root of perfect cubes", () => {
      expect(cbrt(8)).toBe(2);
      expect(cbrt(27)).toBe(3);
      expect(cbrt(0)).toBe(0);
      expect(cbrt(1)).toBe(1);
   });

   it("should produce a result consistent with the power function (dogfooding)", () => {
      const number = 64;
      const result = cbrt(number); // 4
      //
      expect(power(result, 3)).toBeCloseTo(number);

      const negativeNumber = -125;
      const negResult = cbrt(negativeNumber); // -5
      expect(power(negResult, 3)).toBeCloseTo(negativeNumber);
   });

   it("should pass a brutal stress test with negative numbers and non-integers", () => {
      //
      expect(cbrt(-8)).toBe(-2);
      expect(cbrt(-1000)).toBe(-10);
      expect(cbrt(15.625)).toBe(2.5);
      //
      expect(cbrt(10)).toBeCloseTo(2.154434690031884);
   });
});

//--

describe("Function: nthRoot", () => {
   it("should correctly calculate various integer roots", () => {
      expect(nthRoot(16, 4)).toBe(2); // 4th root of 16 is 2
      expect(nthRoot(32, 5)).toBe(2); // 5th root of 32 is 2
      expect(nthRoot(1, 10)).toBe(1); // Any root of 1 is 1
   });

   it("should be consistent with the sqrt and cbrt functions (dogfooding)", () => {
      // = sqrt()
      expect(nthRoot(81, 2)).toBe(sqrt(81));

      // = cbrt()
      expect(nthRoot(125, 3)).toBeCloseTo(cbrt(125)); // Usando toBeCloseTo
      expect(nthRoot(-27, 3)).toBe(cbrt(-27));
   });

   it("should pass a brutal stress test with negative bases and edge cases", () => {
      // Odd root of a negative number
      expect(nthRoot(-32, 5)).toBeCloseTo(-2);

      expect(nthRoot(-16, 4)).toBeNaN();
      expect(nthRoot(0, 7)).toBe(0);
      expect(nthRoot(0.0625, 4)).toBe(0.5);
      expect(nthRoot(1_000_000, 6)).toBeCloseTo(10); // 6th root of 1,000,000
   });
});

//--

describe("Function: exp", () => {
   it("should correctly handle base cases like exp(1) and exp(0)", () => {
      // exp(1) = Euler (e) Number
      expect(exp(1)).toBeCloseTo(constants.e);
      // exp(0) = 1
      expect(exp(0)).toBe(1);
   });

   it("should be consistent with multiply and divide functions (dogfooding)", () => {
      // exp(2) é e * e
      expect(exp(2)).toBeCloseTo(multiply(constants.e, constants.e));

      // exp(-1) é 1 / e
      expect(exp(-1)).toBeCloseTo(divide(1, constants.e));
   });

   it("should pass a brutal stress test by comparing with Math.exp()", () => {
      //
      expect(exp(5)).toBeCloseTo(Math.exp(5));
      //
      expect(exp(-3)).toBeCloseTo(Math.exp(-3));
      //
      expect(exp(1.5)).toBeCloseTo(Math.exp(1.5));
   });

   it("should handle edge cases and large exponents (key regression test)", () => {
      // exp(a + b) === exp(a) * exp(b)
      expect(exp(3)).toBeCloseTo(multiply(exp(1), exp(2)));
      expect(exp(10)).toBeCloseTo(multiply(exp(4), exp(6)));

      expect(exp(Infinity)).toBe(Infinity);
      expect(exp(-Infinity)).toBe(0);
      expect(exp(NaN)).toBeNaN();

      expect(exp(0.5)).toBeCloseTo(Math.sqrt(Math.E)); // e^0.5 === √e
   });
});

//--

describe("Function: ln", () => {
   it("should correctly handle base cases like ln(e) and ln(1)", () => {
      // 'e' = 1
      expect(ln(constants.e)).toBeCloseTo(1);

      // = 0
      expect(ln(1)).toBe(0);
   });

   it("should be the inverse of the exp function (dogfooding)", () => {
      // ln(exp(x)) = x.
      const value1 = 3;
      expect(ln(exp(value1))).toBeCloseTo(value1);

      const value2 = 0.5;
      expect(ln(exp(value2))).toBeCloseTo(value2);
   });

   it("should pass a brutal stress test with invalid and edge case inputs", () => {
      // 0 = -Infinity
      expect(ln(0)).toBe(-Infinity);

      // = (NaN).
      expect(ln(-1)).toBeNaN();
      expect(ln(-10)).toBeNaN();
   });
});

//--

describe("Function: log10", () => {
   it("should correctly calculate the logarithm of powers of 10", () => {
      expect(log10(100)).toBe(2);
      expect(log10(1000)).toBe(3);
      expect(log10(1)).toBe(0);
      expect(log10(0.1)).toBe(-1);
   });

   it("should be the inverse of powering 10 (dogfooding)", () => {
      // log10(10^x) = x.
      const exponent = 4;
      expect(log10(power(10, exponent))).toBeCloseTo(exponent);

      const negExponent = -2;
      expect(log10(power(10, negExponent))).toBeCloseTo(negExponent);
   });

   it("should pass a brutal stress test with invalid and edge case inputs", () => {
      // 0 = -Infinity
      expect(log10(0)).toBe(-Infinity);

      // = NaN.
      expect(log10(-10)).toBeNaN();

      // not a power of 10
      expect(log10(50)).toBeCloseTo(1.6989700043360187);
   });
});

//--

describe("Function: log2", () => {
   it("should correctly calculate the logarithm of powers of 2", () => {
      expect(log2(4)).toBe(2);
      expect(log2(8)).toBe(3);
      expect(log2(1)).toBe(0);
      expect(log2(0.5)).toBe(-1); // 2^-1
   });

   it("should be the inverse of powering 2 (dogfooding)", () => {
      // log2(2^x) = x.
      const exponent = 5;
      expect(log2(power(2, exponent))).toBeCloseTo(exponent);

      const negExponent = -3;
      expect(log2(power(2, negExponent))).toBeCloseTo(negExponent);
   });

   it("should pass a brutal stress test with invalid and edge case inputs", () => {
      // = -Infinity
      expect(log2(0)).toBe(-Infinity);

      // = NaN.
      expect(log2(-2)).toBeNaN();

      // Not a power of 2
      expect(log2(10)).toBeCloseTo(3.321928094887362);
   });
});

//--

describe("Function: log", () => {
   it("should correctly calculate logarithms for various integer bases", () => {
      expect(log(8, 2)).toBeCloseTo(3);
      expect(log(81, 3)).toBeCloseTo(4);
      expect(log(100, 10)).toBeCloseTo(2);
   });

   it("should be consistent with ln, log10, and log2 functions (dogfooding)", () => {
      const value = 50;
      // log(n, base e) = ln(n)
      expect(log(value, constants.e)).toBeCloseTo(ln(value));

      // log(n, base 10) = log10(n)
      expect(log(value, 10)).toBeCloseTo(log10(value));

      // log(n, base 2) = log2(n)
      expect(log(value, 2)).toBeCloseTo(log2(value));
   });

   it("should pass a brutal stress test with invalid bases and edge cases", () => {
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

describe("Function: gcd", () => {
   it("should correctly find the GCD of two positive integers", () => {
      expect(gcd(48, 18)).toBe(6);
      expect(gcd(54, 24)).toBe(6);
      // Test with co-prime numbers
      expect(gcd(17, 13)).toBe(1);
      // Test where one number is a multiple of the other
      expect(gcd(100, 20)).toBe(20);
   });

   it("should correctly handle cases involving zero", () => {
      // The GCD of a number and 0 is the number itself.
      expect(gcd(10, 0)).toBe(10);
      expect(gcd(0, 5)).toBe(5);
      expect(gcd(0, 0)).toBe(0);
   });

   it("should pass a brutal stress test with negative numbers and floats", () => {
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

   it("should handle large numbers without performance degradation (key regression test)", () => {
      // Primes — GCD must be 1, forces maximum Euclidean iterations
      expect(gcd(999999937, 999999929)).toBe(1);
      // Large numbers with a known GCD
      expect(gcd(94906267 * 17, 94906249 * 17)).toBe(17);
   });

   it("should return NaN for non-finite inputs instead of hanging (key regression test)", () => {
      // Antes da guarda, estes inputs causavam LOOP INFINITO no algoritmo euclidiano
      expect(gcd(Infinity, 12)).toBeNaN();
      expect(gcd(12, Infinity)).toBeNaN();
      expect(gcd(-Infinity, 12)).toBeNaN();
      expect(gcd(NaN, 12)).toBeNaN();
      expect(gcd(12, NaN)).toBeNaN();
      expect(gcd(NaN, NaN)).toBeNaN();
   });
});

//--

describe("Function: lcm", () => {
   it("should correctly find the LCM of two positive integers", () => {
      expect(lcm(21, 6)).toBe(42);
      expect(lcm(48, 18)).toBe(144);
      // Test where one number is a multiple of the other
      expect(lcm(10, 5)).toBe(10);
   });

   it("should be consistent with the gcd and multiply functions (dogfooding)", () => {
      const a = 12;
      const b = 15;
      const resultLcm = lcm(a, b); // Should be 60
      const resultGcd = gcd(a, b); // Should be 3

      // Verify the property: |a * b| = gcd(a, b) * lcm(a, b)
      expect(multiply(resultGcd, resultLcm)).toBe(Math.abs(multiply(a, b)));
   });

   it("should pass a brutal stress test with zeros, negatives, and floats", () => {
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

   it("should correctly calculate the LCM of common numbers", () => {
      expect(lcm(4, 6)).toBe(12);
      expect(lcm(3, 5)).toBe(15);
      expect(lcm(12, 18)).toBe(36);
   });

   it("should return 0 if either argument is 0", () => {
      expect(lcm(0, 5)).toBe(0);
      expect(lcm(5, 0)).toBe(0);
      expect(lcm(0, 0)).toBe(0);
   });

   it("should handle negative numbers and floats correctly", () => {
      expect(lcm(-4, 6)).toBe(12);
      expect(lcm(4, -6)).toBe(12);
      expect(lcm(-4, -6)).toBe(12);
      expect(lcm(4.9, 6.9)).toBe(12);
   });

   it("should handle large numbers without overflow (key regression test)", () => {
      expect(lcm(94906267, 94906249)).toBe(9007197807562483);
   });
});

//--

describe("Function: isPrime", () => {
   it("should correctly identify prime and non-prime numbers", () => {
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

   it("should correctly handle fundamental cases (0, 1, 2)", () => {
      // Numbers less than or equal to 1 are not prime.
      expect(isPrime(1)).toBe(false);
      expect(isPrime(0)).toBe(false);
      expect(isPrime(-10)).toBe(false);

      // 2 is the only even prime number.
      expect(isPrime(2)).toBe(true);
   });

   it("should pass a brutal stress test with larger numbers and floats", () => {
      // A larger prime
      expect(isPrime(997)).toBe(true); // 997 is the 168th prime number

      // A larger non-prime (square of a prime)
      expect(isPrime(9409)).toBe(false); // 97 * 97

      // A large even number
      expect(isPrime(10000)).toBe(false);

      // Test with floating-point numbers (should truncate them)
      expect(isPrime(7.9)).toBe(true); // Should test isPrime(7)
      expect(isPrime(15.5)).toBe(false); // Should test isPrime(15)
   });

   it("should stay correct on large prime-squares and primes (key regression test)", () => {
      // Quadrados de primos grandes: o ponto exato onde Math.sqrt poderia falhar
      // e classificar um composto como primo. Com i*i <= num, é aritmética inteira pura.
      expect(isPrime(1000003 * 1000003)).toBe(false); // composto (primo²)
      expect(isPrime(99991 * 99991)).toBe(false); // composto (primo²)
      expect(isPrime(3037 * 3037)).toBe(false); // composto (primo²)

      // Primos grandes de verdade: forçam o loop até o limite (pior caso)
      expect(isPrime(1000003)).toBe(true); // primo
      expect(isPrime(99991)).toBe(true); // primo
      expect(isPrime(7919)).toBe(true); // primo (o 1000º primo)

      // Vizinhos imediatos de um primo² (garante que não para cedo nem tarde)
      expect(isPrime(1000003 * 1000003 - 2)).toBe(false);
   });
});

//--

describe("Function: isEven", () => {
   it("should correctly identify even numbers", () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(100)).toBe(true);
      expect(isEven(0)).toBe(true);
   });

   it("should return false for odd numbers", () => {
      expect(isEven(3)).toBe(false);
      expect(isEven(99)).toBe(false);
   });

   it("should pass a brutal stress test with negative numbers and floats", () => {
      expect(isEven(-2)).toBe(true);
      expect(isEven(-3)).toBe(false);
      // Should truncate the float before checking
      expect(isEven(4.9)).toBe(true); // isEven(4)
      expect(isEven(5.1)).toBe(false); // isEven(5)
   });
});

//--

describe("Function: isOdd", () => {
   it("should correctly identify odd numbers", () => {
      expect(isOdd(3)).toBe(true);
      expect(isOdd(99)).toBe(true);
      expect(isOdd(-5)).toBe(true);
   });

   it("should be the exact inverse of isEven (dogfooding)", () => {
      // Must always be the opposite of isEven
      expect(isOdd(10)).toBe(!isEven(10)); // false
      expect(isOdd(11)).toBe(!isEven(11)); // true
      expect(isOdd(0)).toBe(!isEven(0)); // false
   });

   it("should pass a brutal stress test with negative numbers and floats", () => {
      expect(isOdd(-3)).toBe(true);
      expect(isOdd(-4)).toBe(false);
      // Should truncate the float before checking
      expect(isOdd(5.9)).toBe(true); // isOdd(5)
      expect(isOdd(6.1)).toBe(false); // isOdd(6)
   });
});

//--

describe("Function: factorial", () => {
   it("should correctly handle the base cases of 0! and 1!", () => {
      // The factorial of 0 is 1 by definition.
      expect(factorial(0)).toBe(1);
      // The factorial of 1 is 1.
      expect(factorial(1)).toBe(1);
   });

   it("should correctly calculate the factorial of positive integers", () => {
      expect(factorial(3)).toBe(6); // 3 * 2 * 1
      expect(factorial(5)).toBe(120); // 5 * 4 * 3 * 2 * 1
      expect(factorial(10)).toBe(3628800);
   });

   it("should pass a brutal stress test with invalid inputs and limits", () => {
      // Factorial is not defined for negative numbers.
      expect(factorial(-1)).toBeNaN();
      expect(factorial(-10)).toBeNaN();

      // Should truncate floats before calculating.
      expect(factorial(5.9)).toBe(120); // Should be treated as 5!

      // Test the limit of standard JavaScript numbers.
      expect(factorial(170)).toBe(7.257415615307994e306);
      // Above 170, the result should be Infinity.
      expect(factorial(171)).toBe(Infinity);
   });

   it("should document the exactness boundary of factorial (precision regression test)", () => {
      // Casos base e valores exatos pequenos
      expect(factorial(0)).toBe(1);
      expect(factorial(5)).toBe(120);
      expect(factorial(10)).toBe(3628800);

      // 18! é o ULTIMO valor exato (ainda cabe em MAX_SAFE_INTEGER)
      expect(factorial(18)).toBe(6402373705728000);
      expect(factorial(18)).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);

      // 19! ja passou de MAX_SAFE_INTEGER (mas ainda coincide com o exato por ter zeros binarios)
      expect(factorial(19)).toBeGreaterThan(Number.MAX_SAFE_INTEGER);

      // 171! transborda para Infinity (limite documentado)
      expect(factorial(170)).toBeLessThan(Infinity);
      expect(factorial(171)).toBe(Infinity);

      // Entradas negativas: nao definido
      expect(factorial(-5)).toBeNaN();
   });
}); //--

describe("Function: absolute", () => {
   it("should return the same number for positive inputs", () => {
      expect(absolute(5)).toBe(5);
      expect(absolute(100)).toBe(100);
   });

   it("should return the positive equivalent for negative inputs", () => {
      expect(absolute(-5)).toBe(5);
      expect(absolute(-100)).toBe(100);
   });

   it("should pass a brutal stress test with zero and floating-point numbers", () => {
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

describe("Function: round", () => {
   it("should round to the nearest integer when no decimal place is specified", () => {
      expect(round(5.2)).toBe(5);
      expect(round(5.8)).toBe(6);
      expect(round(5.5)).toBe(6);
   });

   it("should round to the specified number of positive decimal places", () => {
      expect(round(3.14159, 2)).toBe(3.14);
      expect(round(2.71828, 4)).toBe(2.7183);
      expect(round(1.2345, 0)).toBe(1);
   });

   it("should pass a brutal stress test with negative decimal places", () => {
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

   it("should correctly round IEEE-754 float edge cases (key regression test)", () => {
      // Esses são os casos que quebravam antes do EPSILON — o clássico problema binário
      expect(round(1.005, 2)).toBe(1.01); // sem EPSILON retornava 1.00
      expect(round(1.045, 2)).toBe(1.05); // sem EPSILON retornava 1.04
      expect(round(1.055, 2)).toBe(1.06); // sem EPSILON retornava 1.05
      expect(round(2.675, 2)).toBe(2.68); // clássico caso IEEE-754
      // EPSILON scaling stress — casos onde EPSILON fixo falhava
      expect(round(1.0005, 3)).toBe(1.001); // escala 1000x
      expect(round(1.00005, 4)).toBe(1.0001); // escala 10000x
      expect(round(10.045, 2)).toBe(10.05); // número maior, mesmo problema
      expect(round(100.005, 2)).toBe(100.01); // escala ainda maior
   });

   it("should handle negative numbers and zero correctly", () => {
      expect(round(-1.5)).toBe(-2); // simétrico (half away from zero)
      expect(round(-1.6)).toBe(-2);
      expect(round(0)).toBe(0);
      expect(round(0.0000001, 6)).toBe(0);
   });

   it("should round symmetrically for positive and negative values (key regression test)", () => {
      // Mesma magnitude, sinais opostos -> resultados espelhados
      expect(round(2.675, 2)).toBe(2.68);
      expect(round(-2.675, 2)).toBe(-2.68);

      expect(round(1.045, 2)).toBe(1.05);
      expect(round(-1.045, 2)).toBe(-1.05);

      expect(round(1.005, 2)).toBe(1.01);
      expect(round(-1.005, 2)).toBe(-1.01);

      // Propriedade geral: round(-n) === -round(n)
      expect(round(-3.14159, 2)).toBe(-round(3.14159, 2));
      expect(round(-1.05, 1)).toBe(-1.1);
   });
});

//--

describe("Function: floor", () => {
   it("should round numbers down to the nearest integer", () => {
      expect(floor(5.95)).toBe(5);
      expect(floor(5.05)).toBe(5);
      expect(floor(-5.05)).toBe(-6); // Note the behavior for negatives
      expect(floor(7)).toBe(7);
   });
});

//--

describe("Function: ceil", () => {
   it("should round numbers up to the nearest integer", () => {
      expect(ceil(5.95)).toBe(6);
      expect(ceil(5.05)).toBe(6);
      expect(ceil(-5.95)).toBe(-5); // Note the behavior for negatives
      expect(ceil(7)).toBe(7);
   });
});

//--

describe("Function: trunc", () => {
   it("should remove the fractional part of a number", () => {
      expect(trunc(5.95)).toBe(5);
      expect(trunc(5.05)).toBe(5);
      expect(trunc(-5.95)).toBe(-5); // Different from floor() for negatives
      expect(trunc(7)).toBe(7);
   });
});

//--

describe("Function: sign", () => {
   it("should return 1 for positive numbers", () => {
      expect(sign(10)).toBe(1);
      expect(sign(0.5)).toBe(1);
   });

   it("should return -1 for negative numbers", () => {
      expect(sign(-10)).toBe(-1);
      expect(sign(-0.5)).toBe(-1);
   });

   it("should pass a brutal stress test with zero, Infinity, and NaN", () => {
      // Test with zero and negative zero
      expect(sign(0)).toBe(0);
      expect(sign(-0)).toBe(-0); // JavaScript distinguishes 0 and -0

      // Test with Infinity
      expect(sign(Infinity)).toBe(1);
      expect(sign(-Infinity)).toBe(-1);

      // Test with NaN
      expect(sign(NaN)).toBeNaN();
   });
});

//--

describe("Function: clamp", () => {
   it("should return the original value if it is within the range", () => {
      expect(clamp(5, 0, 10)).toBe(5);
      expect(clamp(0, 0, 10)).toBe(0); // Inclusive of min
      expect(clamp(10, 0, 10)).toBe(10); // Inclusive of max
   });

   it("should clamp the value to the lower bound if it is less than the minimum", () => {
      expect(clamp(-5, 0, 10)).toBe(0);
      expect(clamp(90, 100, 200)).toBe(100);
   });

   it("should clamp the value to the upper bound if it is greater than the maximum", () => {
      expect(clamp(15, 0, 10)).toBe(10);
      expect(clamp(300, 100, 200)).toBe(200);
   });

   it("should pass a brutal stress test with negative and floating-point numbers", () => {
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

describe("Function: lerp", () => {
   it("should return the start point when t = 0", () => {
      expect(lerp(0, 10, 0)).toBe(0);
      expect(lerp(-10, 10, 0)).toBe(-10);
   });

   it("should return the end point when t = 1", () => {
      expect(lerp(0, 10, 1)).toBe(10);
      expect(lerp(-10, 10, 1)).toBe(10);
   });

   it("should correctly interpolate between two points", () => {
      // Midpoint
      expect(lerp(0, 10, 0.5)).toBe(5);
      // Quarter point
      expect(lerp(10, 20, 0.25)).toBe(12.5);
   });

   it("should pass a brutal stress test with extrapolation (t outside 0-1)", () => {
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

describe("Function: isInRange", () => {
   it("should return true for numbers within the range", () => {
      expect(isInRange(5, 0, 10)).toBe(true);
      expect(isInRange(0.5, 0, 1)).toBe(true);
   });

   it("should return false for numbers outside the range", () => {
      expect(isInRange(15, 0, 10)).toBe(false);
      expect(isInRange(-5, 0, 10)).toBe(false);
   });

   it("should be inclusive of the start and end values", () => {
      expect(isInRange(0, 0, 10)).toBe(true);
      expect(isInRange(10, 0, 10)).toBe(true);
   });

   it("should pass a brutal stress test with negative and floating-point ranges", () => {
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

describe("Function: mod", () => {
   it("should behave like the remainder operator for positive numbers", () => {
      expect(mod(10, 3)).toBe(1);
      expect(mod(12, 4)).toBe(0);
   });

   it("should correctly calculate the mathematical modulo for negative numbers", () => {
      // This is the key difference from the % operator
      expect(mod(-10, 3)).toBe(2); // In contrast to -10 % 3 === -1
      expect(mod(-1, 3)).toBe(2);
      expect(mod(10, -3)).toBe(-2); // Result sign should match the divisor
   });

   it("should pass a brutal stress test with zeros and floats", () => {
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

describe("Function: isNegativeZero", () => {
   it("should return true only for negative zero", () => {
      expect(isNegativeZero(-0)).toBe(true);
   });

   it("should return false for positive zero", () => {
      expect(isNegativeZero(0)).toBe(false);
   });

   it("should pass a brutal stress test with other non-zero values", () => {
      expect(isNegativeZero(1)).toBe(false);
      expect(isNegativeZero(-1)).toBe(false);
      expect(isNegativeZero(Infinity)).toBe(false);
      expect(isNegativeZero(-Infinity)).toBe(false);
      expect(isNegativeZero(NaN)).toBe(false);
      expect(isNegativeZero(Number.MIN_VALUE)).toBe(false);
   });
});

//--

describe("Function: coprime", () => {
   // ── BÁSICO ──
   it("should identify simple coprime and non-coprime pairs", () => {
      expect(coprime(8, 15)).toBe(true); // sem fator comum
      expect(coprime(7, 13)).toBe(true); // dois primos
      expect(coprime(4, 6)).toBe(false); // ambos pares (fator 2)
      expect(coprime(10, 15)).toBe(false); // fator comum 5
   });

   // ── MÉDIO ──
   it("should handle ones, equal numbers, and consecutive integers", () => {
      // 1 é coprimo com qualquer inteiro (gcd = 1 sempre)
      expect(coprime(1, 999)).toBe(true);
      expect(coprime(1, 1)).toBe(true);

      // Um número nunca é coprimo consigo mesmo (exceto 1)
      expect(coprime(12, 12)).toBe(false);

      // Inteiros consecutivos são SEMPRE coprimos (propriedade clássica)
      expect(coprime(14, 15)).toBe(true);
      expect(coprime(99, 100)).toBe(true);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with the gcd function (dogfooding)", () => {
      const pairs: [number, number][] = [
         [8, 15],
         [12, 18],
         [17, 51],
         [35, 64],
      ];
      for (const [a, b] of pairs) {
         expect(coprime(a, b)).toBe(gcd(a, b) === 1);
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with negatives, floats, and zeros", () => {
      // Negativos: coprimalidade é sobre valor absoluto
      expect(coprime(-8, 15)).toBe(true);
      expect(coprime(8, -15)).toBe(true);
      expect(coprime(-8, -15)).toBe(true);
      expect(coprime(-4, 6)).toBe(false);

      // Floats truncados (herdado do gcd)
      expect(coprime(8.9, 15.7)).toBe(true); // coprime(8, 15)
      expect(coprime(4.2, 6.9)).toBe(false); // coprime(4, 6)

      // Zeros: gcd(0,0)=0, gcd(0,n)=|n|
      expect(coprime(0, 0)).toBe(false);
      expect(coprime(0, 1)).toBe(true); // único coprimo do zero
      expect(coprime(0, -1)).toBe(true);
      expect(coprime(0, 5)).toBe(false);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with large primes and prime powers", () => {
      // Primos grandes distintos: sempre coprimos
      expect(coprime(999999937, 999999929)).toBe(true);

      // Mesmo primo dos dois lados: nunca coprimos
      expect(coprime(999999937, 999999937)).toBe(false);

      // Potências do MESMO primo: nunca coprimas
      expect(coprime(8, 32)).toBe(false); // 2³ vs 2⁵
      expect(coprime(27, 81)).toBe(false); // 3³ vs 3⁴

      // Potências de primos DIFERENTES: sempre coprimas
      expect(coprime(1024, 6561)).toBe(true); // 2¹⁰ vs 3⁸
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (mathematical properties at scale)", () => {
      // Simetria: coprime(a,b) === coprime(b,a) — varredura
      for (let a = 1; a <= 30; a++) {
         for (let b = 1; b <= 30; b++) {
            expect(coprime(a, b)).toBe(coprime(b, a));
         }
      }

      // Primos gigantes no limite do isPrime testado
      expect(coprime(1000003, 99991)).toBe(true);

      // Produto de primos vs um dos fatores: nunca coprimos
      expect(coprime(1000003 * 3, 3)).toBe(false);
      expect(coprime(94906267 * 17, 17)).toBe(false);

      // Fatoriais consecutivos compartilham TODOS os fatores do menor
      expect(coprime(factorial(10), factorial(9))).toBe(false);

      // n! e n+1: coprimos quando n+1 é primo (Wilson vibes)
      expect(coprime(factorial(10), 11)).toBe(true); // 11 é primo
      expect(coprime(factorial(10), 10)).toBe(false); // 10 divide 10!
   });
});

//--

describe("Function: safeDiv", () => {
   // ── BÁSICO ──
   it("should divide normally when the divisor is not zero", () => {
      expect(safeDiv(10, 2)).toBe(5);
      expect(safeDiv(100, 4)).toBe(25);
      expect(safeDiv(10, 4)).toBe(2.5);
      expect(safeDiv(0, 5)).toBe(0);
   });

   // ── MÉDIO ──
   it("should return the fallback on division by zero", () => {
      // Default fallback = 0
      expect(safeDiv(10, 0)).toBe(0);
      expect(safeDiv(-10, 0)).toBe(0);
      expect(safeDiv(0, 0)).toBe(0);

      // Fallback customizado
      expect(safeDiv(10, 0, -1)).toBe(-1);
      expect(safeDiv(10, 0, NaN)).toBeNaN();
      expect(safeDiv(10, 0, Infinity)).toBe(Infinity);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with the divide function when safe (dogfooding)", () => {
      const pairs: [number, number][] = [
         [42, 6],
         [-10, 2],
         [7, 3],
         [1, 8],
      ];
      for (const [a, b] of pairs) {
         expect(safeDiv(a, b)).toBe(divide(a, b));
      }

      // E NUNCA lança, diferente da divide
      expect(() => safeDiv(10, 0)).not.toThrow();
      expect(() => divide(10, 0)).toThrow();
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with negatives, floats, and negative zero", () => {
      expect(safeDiv(-10, 2)).toBe(-5);
      expect(safeDiv(10, -2)).toBe(-5);
      expect(safeDiv(-10, -2)).toBe(5);
      expect(safeDiv(5.5, 2)).toBe(2.75);

      // -0 como divisor TAMBEM aciona o fallback (b === 0 captura -0)
      expect(safeDiv(5, -0)).toBe(0);
      expect(safeDiv(5, -0, 99)).toBe(99);

      // -0 como dividendo: divisão normal, e IEEE preserva o zero negativo
      expect(safeDiv(-0, 5)).toBe(-0);
      expect(isNegativeZero(safeDiv(-0, 5))).toBe(true); // dogfooding com isNegativeZero!
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with extreme magnitudes", () => {
      expect(safeDiv(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
      expect(safeDiv(1, Number.MAX_SAFE_INTEGER)).toBeCloseTo(0, 15);
      expect(safeDiv(Infinity, 2)).toBe(Infinity);
      expect(safeDiv(-Infinity, 2)).toBe(-Infinity);
      expect(safeDiv(10, Infinity)).toBe(0);

      // Infinity / Infinity = NaN (matemática IEEE, NÃO é fallback)
      expect(safeDiv(Infinity, Infinity)).toBeNaN();

      // NaN propaga (divisor NaN não é zero, então divide normalmente)
      expect(safeDiv(NaN, 5)).toBeNaN();
      expect(safeDiv(5, NaN)).toBeNaN();
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (invariants at scale)", () => {
      // Invariante 1: para b != 0, safeDiv === divide — varredura
      for (let a = -20; a <= 20; a++) {
         for (let b = -10; b <= 10; b++) {
            if (b !== 0) {
               expect(safeDiv(a, b)).toBe(divide(a, b));
            } else {
               expect(safeDiv(a, b)).toBe(0); // fallback default
            }
         }
      }

      // Invariante 2: roundtrip — safeDiv(a, b) * b === a (b != 0)
      expect(multiply(safeDiv(42, 6), 6)).toBeCloseTo(42);
      expect(multiply(safeDiv(-35, 7), 7)).toBeCloseTo(-35);

      // Invariante 3: o fallback NUNCA vaza para divisões válidas
      expect(safeDiv(10, 2, 999)).toBe(5); // fallback ignorado
      expect(safeDiv(0, 5, 999)).toBe(0); // 0/5 é válido, não usa fallback
   });
});

//--

describe("Function: digits", () => {
   // ── BÁSICO ──
   it("should count digits of simple positive integers", () => {
      expect(digits(5)).toBe(1);
      expect(digits(42)).toBe(2);
      expect(digits(123)).toBe(3);
      expect(digits(1000)).toBe(4);
   });

   // ── MÉDIO ──
   it("should handle zero, negatives, and floats", () => {
      // Zero tem exatamente 1 dígito
      expect(digits(0)).toBe(1);
      expect(digits(-0)).toBe(1);

      // Sinal não é dígito
      expect(digits(-5)).toBe(1);
      expect(digits(-12345)).toBe(5);

      // Floats truncados
      expect(digits(45.9)).toBe(2); // digits(45)
      expect(digits(-99.99)).toBe(2); // digits(-99 -> 99)
      expect(digits(0.5)).toBe(1); // digits(0)
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with powers of 10 (dogfooding with power)", () => {
      // 10^k tem exatamente k+1 dígitos
      for (let k = 0; k <= 15; k++) {
         expect(digits(power(10, k))).toBe(k + 1);
      }

      // E 10^k - 1 tem exatamente k dígitos (999... com k noves)
      for (let k = 1; k <= 15; k++) {
         expect(digits(power(10, k) - 1)).toBe(k);
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with non-finite inputs", () => {
      // A guarda explícita: sem ela, String(Infinity).length daria 8!
      expect(digits(Infinity)).toBeNaN();
      expect(digits(-Infinity)).toBeNaN();
      expect(digits(NaN)).toBeNaN();
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality at the boundaries of safe integers", () => {
      // MAX_SAFE_INTEGER = 9007199254740991 -> 16 dígitos
      expect(digits(Number.MAX_SAFE_INTEGER)).toBe(16);
      expect(digits(-Number.MAX_SAFE_INTEGER)).toBe(16);
      expect(digits(Number.MAX_SAFE_INTEGER - 1)).toBe(16);

      // O clássico que MATA a abordagem via log10: fronteiras exatas de potência
      expect(digits(999999999999999)).toBe(15);
      expect(digits(1000000000000000)).toBe(16);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (invariants at scale)", () => {
      // Invariante 1: simetria de sinal — digits(n) === digits(-n), varredura
      for (let n = 0; n <= 2000; n += 7) {
         expect(digits(-n)).toBe(digits(n));
      }

      // Invariante 2: multiplicar por 10 adiciona EXATAMENTE 1 dígito
      let value = 3;
      for (let step = 1; step <= 14; step++) {
         const next = value * 10;
         expect(digits(next)).toBe(digits(value) + 1);
         value = next;
      }

      // Invariante 3: invariância sob truncamento — digits(n + 0.999) === digits(n)
      expect(digits(99 + 0.999)).toBe(digits(99)); // 99.999 -> 99, NÃO 100
      expect(digits(9999 + 0.999)).toBe(digits(9999));
   });
});

//--

describe("Function: sumOfSquares", () => {
   // ── BÁSICO ──
   it("should sum the squares of simple positive numbers", () => {
      expect(sumOfSquares(3, 4)).toBe(25); // 9 + 16
      expect(sumOfSquares(1, 2, 3)).toBe(14); // 1 + 4 + 9
      expect(sumOfSquares(5)).toBe(25);
      expect(sumOfSquares(10, 10)).toBe(200);
   });

   // ── MÉDIO ──
   it("should handle zeros, negatives, and the empty identity", () => {
      // Quadrado anula o sinal
      expect(sumOfSquares(-3, 4)).toBe(25);
      expect(sumOfSquares(-3, -4)).toBe(25);
      expect(sumOfSquares(-1, -2, -3)).toBe(14);

      // Zeros não contribuem
      expect(sumOfSquares(0, 0, 0)).toBe(0);
      expect(sumOfSquares(0, 5)).toBe(25);

      // Identidade vazia (consistente com sum())
      expect(sumOfSquares()).toBe(0);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with sum, multiply, and power (dogfooding)", () => {
      // sumOfSquares(a, b) === sum(a², b²)
      expect(sumOfSquares(3, 4)).toBe(sum(power(3, 2), power(4, 2)));
      expect(sumOfSquares(2, 5, 7)).toBe(
         sum(multiply(2, 2), multiply(5, 5), multiply(7, 7)),
      );

      // sumOfSquares(n) === power(n, 2) para um único argumento
      for (let n = -10; n <= 10; n++) {
         expect(sumOfSquares(n)).toBe(power(n, 2));
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with floats and special values", () => {
      expect(sumOfSquares(0.5, 0.5)).toBe(0.5); // 0.25 + 0.25
      expect(sumOfSquares(1.5, 2.5)).toBe(8.5); // 2.25 + 6.25
      expect(sumOfSquares(0.1, 0.2)).toBeCloseTo(0.05, 10); // float clássico

      // NaN propaga
      expect(sumOfSquares(NaN, 2)).toBeNaN();

      // Infinity domina
      expect(sumOfSquares(Infinity, 1)).toBe(Infinity);
      expect(sumOfSquares(-Infinity, 1)).toBe(Infinity); // (-Inf)² = +Inf
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with Pythagorean structures", () => {
      // Triplas pitagóricas: sumOfSquares(a, b) === c²
      const triples: [number, number, number][] = [
         [3, 4, 5],
         [5, 12, 13],
         [8, 15, 17],
         [7, 24, 25],
         [20, 21, 29],
      ];
      for (const [a, b, c] of triples) {
         expect(sumOfSquares(a, b)).toBe(power(c, 2));
      }

      // Quádrupla pitagórica: 1² + 2² + 2² = 3²
      expect(sumOfSquares(1, 2, 2)).toBe(9);

      // Identidade de soma de potências: 3³+4³+5³ = 6³ NÃO vale pra quadrados,
      // mas 10² + 11² + 12² = 13² + 14² vale! (365 dos dois lados)
      expect(sumOfSquares(10, 11, 12)).toBe(sumOfSquares(13, 14));
      expect(sumOfSquares(10, 11, 12)).toBe(365);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (invariants at scale)", () => {
      // Invariante 1: resultado NUNCA é negativo — varredura com negativos
      for (let a = -30; a <= 30; a += 3) {
         for (let b = -30; b <= 30; b += 3) {
            expect(sumOfSquares(a, b)).toBeGreaterThanOrEqual(0);
         }
      }

      // Invariante 2: simetria de sinal — sumOfSquares(a,b) === sumOfSquares(-a,-b)
      for (let n = 1; n <= 50; n += 7) {
         expect(sumOfSquares(-n, n + 1)).toBe(sumOfSquares(n, -(n + 1)));
      }

      // Invariante 3: invariância de ordem (comutatividade da soma)
      expect(sumOfSquares(1, 2, 3, 4, 5)).toBe(sumOfSquares(5, 4, 3, 2, 1));
      expect(sumOfSquares(7, -3, 11)).toBe(sumOfSquares(11, 7, -3));

      // Invariante 4: aditividade — sumOfSquares(a,b,c) === sumOfSquares(a) + sumOfSquares(b,c)
      expect(sumOfSquares(2, 3, 6)).toBe(sumOfSquares(2) + sumOfSquares(3, 6));
      expect(sumOfSquares(2, 3, 6)).toBe(49); // e é 7², bônus pitagórico

      // Escala: soma dos quadrados de 1..100 === n(n+1)(2n+1)/6 (fórmula fechada)
      const seq = Array.from({ length: 100 }, (_, i) => i + 1);
      expect(sumOfSquares(...seq)).toBe((100 * 101 * 201) / 6); // 338350
   });
});

//--

describe("Function: divisors", () => {
   // ── BÁSICO ──
   it("should find divisors of simple numbers", () => {
      expect(divisors(12)).toEqual([1, 2, 3, 4, 6, 12]);
      expect(divisors(7)).toEqual([1, 7]); // primo
      expect(divisors(1)).toEqual([1]);
      expect(divisors(10)).toEqual([1, 2, 5, 10]);
   });

   // ── MÉDIO ──
   it("should handle perfect squares, zero, negatives, and floats", () => {
      // Quadrados perfeitos: a raiz aparece UMA vez só
      expect(divisors(36)).toEqual([1, 2, 3, 4, 6, 9, 12, 18, 36]);
      expect(divisors(16)).toEqual([1, 2, 4, 8, 16]);
      expect(divisors(9)).toEqual([1, 3, 9]);

      // Zero: conjunto infinito -> []
      expect(divisors(0)).toEqual([]);

      // Sinal ignorado
      expect(divisors(-12)).toEqual([1, 2, 3, 4, 6, 12]);

      // Floats truncados
      expect(divisors(12.9)).toEqual([1, 2, 3, 4, 6, 12]);
      expect(divisors(-7.5)).toEqual([1, 7]);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with isPrime, isEven, and mod (dogfooding)", () => {
      // Primos têm EXATAMENTE 2 divisores
      for (const p of [2, 3, 5, 7, 11, 13, 97, 997]) {
         expect(divisors(p).length).toBe(2);
         expect(isPrime(p)).toBe(true);
      }

      // Todo divisor de fato divide: mod(n, d) === 0 para todos
      for (const n of [12, 36, 100, 360]) {
         for (const d of divisors(n)) {
            expect(mod(n, d)).toBe(0);
         }
      }

      // Números pares têm 2 como divisor; ímpares não
      expect(divisors(40)).toContain(2);
      expect(divisors(35)).not.toContain(2);
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with non-finite inputs and highly composite numbers", () => {
      expect(divisors(NaN)).toEqual([]);
      expect(divisors(Infinity)).toEqual([]);
      expect(divisors(-Infinity)).toEqual([]);

      // 360: altamente composto, 24 divisores
      expect(divisors(360).length).toBe(24);
      expect(divisors(360)).toEqual([
         1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72,
         90, 120, 180, 360,
      ]);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with primes squared and large numbers", () => {
      // primo²: exatamente 3 divisores [1, p, p²]
      expect(divisors(9409)).toEqual([1, 97, 9409]); // 97²
      expect(divisors(3037 * 3037)).toEqual([1, 3037, 9223369]);

      // Primo grande: só [1, p] — força o loop O(√n) inteiro
      expect(divisors(999999937)).toEqual([1, 999999937]);

      // Produto de dois primos grandes: 4 divisores (estrutura RSA!)
      expect(divisors(99991 * 99989)).toEqual([1, 99989, 99991, 99991 * 99989]);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (invariants at scale)", () => {
      for (let n = 1; n <= 500; n++) {
         const divs = divisors(n);

         // Invariante 1: começa em 1 e termina em n
         expect(divs[0]).toBe(1);
         expect(divs[divs.length - 1]).toBe(n);

         // Invariante 2: estritamente crescente, sem duplicatas
         for (let i = 1; i < divs.length; i++) {
            expect(divs[i]).toBeGreaterThan(divs[i - 1]);
         }

         // Invariante 3: divisores vêm em pares (d, n/d) — ambos presentes
         for (const d of divs) {
            expect(divs).toContain(n / d);
         }

         // Invariante 4: quantidade ímpar de divisores <=> quadrado perfeito
         const isSquare = Number.isInteger(Math.sqrt(n));
         expect(isOdd(divs.length)).toBe(isSquare);
      }

      // Invariante 5 (fechamento): d(p*q) = 4 para primos distintos p, q
      expect(divisors(3 * 5).length).toBe(4);
      expect(divisors(11 * 13).length).toBe(4);
      expect(divisors(997 * 991).length).toBe(4);
   });
});

//--

describe("Function: fibonacci", () => {
   // ── BÁSICO ──
   it("should return the first Fibonacci numbers correctly", () => {
      expect(fibonacci(0)).toBe(0);
      expect(fibonacci(1)).toBe(1);
      expect(fibonacci(2)).toBe(1);
      expect(fibonacci(3)).toBe(2);
      expect(fibonacci(4)).toBe(3);
      expect(fibonacci(5)).toBe(5);
      expect(fibonacci(6)).toBe(8);
      expect(fibonacci(10)).toBe(55);
   });

   // ── MÉDIO ──
   it("should handle floats, negatives, and non-finite inputs", () => {
      // Floats truncados
      expect(fibonacci(10.9)).toBe(55); // fibonacci(10)
      expect(fibonacci(5.5)).toBe(5); // fibonacci(5)

      // Negativos: não definido nesta implementação
      expect(fibonacci(-1)).toBeNaN();
      expect(fibonacci(-10)).toBeNaN();

      // Não-finitos
      expect(fibonacci(NaN)).toBeNaN();
      expect(fibonacci(Infinity)).toBeNaN();
      expect(fibonacci(-Infinity)).toBeNaN();
   });

   // ── INTERMEDIÁRIO ──
   it("should satisfy the recurrence F(n) = F(n-1) + F(n-2) (dogfooding with sum)", () => {
      for (let n = 2; n <= 30; n++) {
         expect(fibonacci(n)).toBe(sum(fibonacci(n - 1), fibonacci(n - 2)));
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with known landmark values", () => {
      expect(fibonacci(20)).toBe(6765);
      expect(fibonacci(30)).toBe(832040);
      expect(fibonacci(50)).toBe(12586269025);
      expect(fibonacci(70)).toBe(190392490709135);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality at the exactness boundary", () => {
      // F(78) é o ÚLTIMO Fibonacci exato (cabe em MAX_SAFE_INTEGER)
      expect(fibonacci(78)).toBe(8944394323791464);
      expect(fibonacci(78)).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);

      // F(79) já ultrapassa a fronteira
      expect(fibonacci(79)).toBeGreaterThan(Number.MAX_SAFE_INTEGER);

      // Mesmo aproximado, NUNCA explode a pilha (iterativo!) e nunca dá Infinity cedo
      expect(Number.isFinite(fibonacci(1000))).toBe(true);
      expect(fibonacci(1476)).toBeLessThan(Infinity); // último finito em float64
      expect(fibonacci(1477)).toBe(Infinity); // primeiro overflow
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (mathematical identities)", () => {
      // Identidade 1: gcd(F(m), F(n)) === F(gcd(m, n)) — a joia de Fibonacci!
      const pairs: [number, number][] = [
         [10, 15],
         [12, 18],
         [14, 21],
         [20, 30],
      ];
      for (const [m, n] of pairs) {
         expect(gcd(fibonacci(m), fibonacci(n))).toBe(fibonacci(gcd(m, n)));
      }

      // Identidade 2 (Cassini): F(n-1)*F(n+1) - F(n)² === (-1)^n
      for (let n = 1; n <= 30; n++) {
         const cassini =
            fibonacci(n - 1) * fibonacci(n + 1) - power(fibonacci(n), 2);
         expect(cassini).toBe(power(-1, n));
      }

      // Identidade 3: soma dos n primeiros === F(n+2) - 1
      for (const n of [5, 10, 20, 25]) {
         const seq = Array.from({ length: n + 1 }, (_, i) => fibonacci(i));
         expect(sum(...seq)).toBe(fibonacci(n + 2) - 1);
      }

      // Identidade 4: F(n) divide F(kn) — dogfooding com mod
      expect(mod(fibonacci(20), fibonacci(10))).toBe(0);
      expect(mod(fibonacci(30), fibonacci(15))).toBe(0);
      expect(mod(fibonacci(28), fibonacci(7))).toBe(0);

      // Razão áurea: F(n+1)/F(n) -> φ
      const phi = (1 + Math.sqrt(5)) / 2;
      expect(divide(fibonacci(40), fibonacci(39))).toBeCloseTo(phi, 10);
   });
});

//--

describe("Function: inverseLerp", () => {
   // ── BÁSICO ──
   it("should return 0 at the start and 1 at the end of the range", () => {
      expect(inverseLerp(0, 10, 0)).toBe(0);
      expect(inverseLerp(0, 10, 10)).toBe(1);
      expect(inverseLerp(0, 10, 5)).toBe(0.5);
      expect(inverseLerp(10, 20, 12.5)).toBe(0.25);
   });

   // ── MÉDIO ──
   it("should handle negative, inverted, and degenerate ranges", () => {
      // Intervalos negativos
      expect(inverseLerp(-10, 0, -5)).toBe(0.5);
      expect(inverseLerp(-20, -10, -15)).toBe(0.5);

      // Intervalo INVERTIDO (b < a): t cresce na direção contrária
      expect(inverseLerp(10, 0, 7.5)).toBe(0.25);
      expect(inverseLerp(10, 0, 0)).toBe(1);

      // Intervalo degenerado (a === b): NaN documentado
      expect(inverseLerp(5, 5, 5)).toBeNaN();
      expect(inverseLerp(5, 5, 7)).toBeNaN();

      // Extrapolação fora de [a, b]
      expect(inverseLerp(0, 10, 20)).toBe(2);
      expect(inverseLerp(0, 10, -5)).toBe(-0.5);
   });

   // ── INTERMEDIÁRIO ──
   it("should be the exact inverse of lerp (dogfooding roundtrip)", () => {
      // lerp(a, b, inverseLerp(a, b, v)) === v
      const ranges: [number, number][] = [
         [0, 10],
         [-5, 5],
         [100, 200],
         [3, 7],
      ];
      for (const [a, b] of ranges) {
         for (const v of [a, b, (a + b) / 2, a + (b - a) * 0.3]) {
            expect(lerp(a, b, inverseLerp(a, b, v))).toBeCloseTo(v, 10);
         }
      }

      // E na direção oposta: inverseLerp(a, b, lerp(a, b, t)) === t
      for (const t of [0, 0.25, 0.5, 0.75, 1]) {
         expect(inverseLerp(0, 10, lerp(0, 10, t))).toBeCloseTo(t, 10);
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with floats and special values", () => {
      expect(inverseLerp(0, 0.1, 0.05)).toBeCloseTo(0.5, 10);
      expect(inverseLerp(0.1, 0.3, 0.2)).toBeCloseTo(0.5, 10);

      // NaN propaga
      expect(inverseLerp(0, 10, NaN)).toBeNaN();
      expect(inverseLerp(NaN, 10, 5)).toBeNaN();

      // Infinity no value
      expect(inverseLerp(0, 10, Infinity)).toBe(Infinity);
      expect(inverseLerp(0, 10, -Infinity)).toBe(-Infinity);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with extreme ranges", () => {
      // Intervalos gigantes
      expect(
         inverseLerp(0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER / 2),
      ).toBeCloseTo(0.5, 10);

      // Intervalos minúsculos (precisão de float)
      expect(inverseLerp(0, 1e-10, 5e-11)).toBeCloseTo(0.5, 10);

      // Atravessando o zero
      expect(inverseLerp(-1e6, 1e6, 0)).toBe(0.5);
      expect(
         inverseLerp(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 0),
      ).toBe(0.5);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (roundtrip at scale)", () => {
      // Varredura: roundtrip lerp ∘ inverseLerp em grade de intervalos × valores
      for (let a = -50; a <= 50; a += 17) {
         for (let b = -50; b <= 50; b += 13) {
            if (a === b) {
               expect(inverseLerp(a, b, a)).toBeNaN(); // degenerado sempre NaN
               continue;
            }
            for (let k = 0; k <= 4; k++) {
               const t = k / 4;
               const v = lerp(a, b, t);
               expect(inverseLerp(a, b, v)).toBeCloseTo(t, 9);
            }
         }
      }

      // Antissimetria: inverseLerp(a, b, v) === 1 - inverseLerp(b, a, v)
      expect(inverseLerp(0, 10, 3)).toBeCloseTo(1 - inverseLerp(10, 0, 3), 10);
      expect(inverseLerp(-5, 15, 7)).toBeCloseTo(
         1 - inverseLerp(15, -5, 7),
         10,
      );

      // Invariância afim: deslocar a, b e v pela mesma constante não muda t
      expect(inverseLerp(0, 10, 3)).toBeCloseTo(inverseLerp(100, 110, 103), 10);
      expect(inverseLerp(0, 10, 3)).toBeCloseTo(inverseLerp(-50, -40, -47), 10);
   });
});

//--

describe("Function: gcdMultiple", () => {
   // ── BÁSICO ──
   it("should find the GCD of multiple positive integers", () => {
      expect(gcdMultiple(12, 18, 24)).toBe(6);
      expect(gcdMultiple(10, 20, 30, 40)).toBe(10);
      expect(gcdMultiple(7, 14, 21)).toBe(7);
      expect(gcdMultiple(17, 13, 11)).toBe(1); // primos distintos
   });

   // ── MÉDIO ──
   it("should handle the identity, single arguments, and zeros", () => {
      // Lista vazia: identidade 0
      expect(gcdMultiple()).toBe(0);

      // Um único argumento: |trunc(n)|
      expect(gcdMultiple(12)).toBe(12);
      expect(gcdMultiple(-12)).toBe(12);

      // Dois argumentos: idêntico ao gcd
      expect(gcdMultiple(48, 18)).toBe(gcd(48, 18));

      // Zeros no meio não contaminam: gcd(0, x) === x
      expect(gcdMultiple(0, 12, 18)).toBe(6);
      expect(gcdMultiple(12, 0, 18)).toBe(6);
      expect(gcdMultiple(0, 0, 0)).toBe(0);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with a manual gcd reduction (dogfooding)", () => {
      const lists: number[][] = [
         [12, 18, 24],
         [100, 75, 50, 25],
         [9, 27, 81],
         [14, 21, 35, 49],
      ];
      for (const list of lists) {
         const manual = list.reduce((acc, n) => gcd(acc, n), 0);
         expect(gcdMultiple(...list)).toBe(manual);
      }

      // Associatividade: gcd(a, b, c) === gcd(gcd(a, b), c) === gcd(a, gcd(b, c))
      expect(gcdMultiple(24, 36, 60)).toBe(gcd(gcd(24, 36), 60));
      expect(gcdMultiple(24, 36, 60)).toBe(gcd(24, gcd(36, 60)));
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with negatives, floats, and non-finite inputs", () => {
      // Sinais ignorados (herdado do gcd)
      expect(gcdMultiple(-12, 18, -24)).toBe(6);
      expect(gcdMultiple(-7, -14, -21)).toBe(7);

      // Floats truncados
      expect(gcdMultiple(12.9, 18.5, 24.1)).toBe(6);

      // Não-finitos: NaN imediato
      expect(gcdMultiple(12, NaN, 18)).toBeNaN();
      expect(gcdMultiple(Infinity, 12)).toBeNaN();
      expect(gcdMultiple(12, 18, -Infinity)).toBeNaN();
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with large lists and the absorbing early exit", () => {
      // Lista grande com GCD conhecido: 1000 múltiplos de 7
      const multiplesOf7 = Array.from({ length: 1000 }, (_, i) => (i + 1) * 7);
      expect(gcdMultiple(...multiplesOf7)).toBe(7);

      // Early exit: dois coprimos no início + 10000 números depois
      // (se o early exit funciona, nem processa o resto)
      const huge = [
         3,
         5,
         ...Array.from({ length: 10000 }, (_, i) => (i + 1) * 1000),
      ];
      expect(gcdMultiple(...huge)).toBe(1);

      // Primos grandes
      expect(gcdMultiple(999999937, 999999929, 99991)).toBe(1);
      expect(gcdMultiple(999999937 * 2, 999999937 * 3)).toBe(999999937);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (invariants at scale)", () => {
      // Invariante 1: ordem não importa (comutatividade + associatividade)
      expect(gcdMultiple(12, 18, 24)).toBe(gcdMultiple(24, 12, 18));
      expect(gcdMultiple(100, 75, 50)).toBe(gcdMultiple(50, 100, 75));

      // Invariante 2: o resultado divide TODOS os números da lista
      const lists: number[][] = [
         [36, 48, 60],
         [105, 70, 35],
         [128, 96, 64, 32],
      ];
      for (const list of lists) {
         const g = gcdMultiple(...list);
         for (const n of list) {
            expect(mod(n, g)).toBe(0);
         }
      }

      // Invariante 3: nenhum múltiplo do resultado maior que ele divide todos
      // (g é de fato o MAIOR divisor comum: 2g não pode dividir todos)
      for (const list of lists) {
         const g = gcdMultiple(...list);
         const doubled = g * 2;
         const dividesAll = list.every((n) => mod(n, doubled) === 0);
         expect(dividesAll).toBe(false);
      }

      // Invariante 4: idempotência — gcdMultiple(n, n, n) === n
      for (const n of [1, 7, 100, 999]) {
         expect(gcdMultiple(n, n, n)).toBe(n);
      }

      // Invariante 5: distributividade com escala — gcd(ka, kb, kc) === k * gcd(a, b, c)
      expect(gcdMultiple(5 * 12, 5 * 18, 5 * 24)).toBe(
         5 * gcdMultiple(12, 18, 24),
      );
      expect(gcdMultiple(11 * 4, 11 * 6, 11 * 10)).toBe(
         11 * gcdMultiple(4, 6, 10),
      );
   });
});

//--

describe("Function: lcmMultiple", () => {
   // ── BÁSICO ──
   it("should find the LCM of multiple positive integers", () => {
      expect(lcmMultiple(4, 6)).toBe(12);
      expect(lcmMultiple(2, 3, 4)).toBe(12);
      expect(lcmMultiple(3, 5, 7)).toBe(105); // coprimos: produto
      expect(lcmMultiple(10, 20, 30)).toBe(60);
   });

   // ── MÉDIO ──
   it("should handle the identity, single arguments, and absorbing zeros", () => {
      // Lista vazia: identidade 1
      expect(lcmMultiple()).toBe(1);

      // Um único argumento: |trunc(n)|
      expect(lcmMultiple(12)).toBe(12);
      expect(lcmMultiple(-12)).toBe(12);

      // Dois argumentos: idêntico ao lcm
      expect(lcmMultiple(4, 6)).toBe(lcm(4, 6));

      // Zero absorve TUDO
      expect(lcmMultiple(0, 12, 18)).toBe(0);
      expect(lcmMultiple(12, 0, 18)).toBe(0);
      expect(lcmMultiple(12, 18, 0)).toBe(0);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with a manual lcm reduction and gcd duality (dogfooding)", () => {
      const lists: number[][] = [
         [4, 6, 8],
         [3, 5, 7, 9],
         [12, 18, 24],
         [2, 4, 8, 16],
      ];
      for (const list of lists) {
         const manual = list.reduce((acc, n) => lcm(acc, n), 1);
         expect(lcmMultiple(...list)).toBe(manual);
      }

      // Associatividade
      expect(lcmMultiple(4, 6, 10)).toBe(lcm(lcm(4, 6), 10));
      expect(lcmMultiple(4, 6, 10)).toBe(lcm(4, lcm(6, 10)));

      // Dualidade clássica (para DOIS números): gcd * lcm === |a * b|
      expect(gcd(12, 18) * lcmMultiple(12, 18)).toBe(12 * 18);
      expect(gcd(21, 6) * lcmMultiple(21, 6)).toBe(21 * 6);
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with negatives, floats, and non-finite inputs", () => {
      expect(lcmMultiple(-4, 6)).toBe(12);
      expect(lcmMultiple(-3, -5, -7)).toBe(105);
      expect(lcmMultiple(4.9, 6.5)).toBe(12); // trunca para 4, 6

      expect(lcmMultiple(4, NaN, 6)).toBeNaN();
      expect(lcmMultiple(Infinity, 4)).toBeNaN();
      expect(lcmMultiple(4, 6, -Infinity)).toBeNaN();
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with landmark LCMs and large values", () => {
      // lcm(1..10) = 2520 — o menor número divisível por todos de 1 a 10
      expect(lcmMultiple(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(2520);

      // lcm(1..20) = 232792560 — clássico do Project Euler
      const oneToTwenty = Array.from({ length: 20 }, (_, i) => i + 1);
      expect(lcmMultiple(...oneToTwenty)).toBe(232792560);

      // Primos grandes coprimos: lcm é o produto exato (dentro do safe range)
      expect(lcmMultiple(99991, 99989)).toBe(99991 * 99989);

      // Potências do mesmo primo: vence a maior
      expect(lcmMultiple(2, 4, 8, 16, 32)).toBe(32);
      expect(lcmMultiple(3, 9, 27, 81)).toBe(81);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (invariants at scale)", () => {
      // Invariante 1: ordem não importa
      expect(lcmMultiple(4, 6, 10)).toBe(lcmMultiple(10, 4, 6));
      expect(lcmMultiple(3, 7, 11)).toBe(lcmMultiple(11, 3, 7));

      // Invariante 2: o resultado é múltiplo de TODOS os números da lista
      const lists: number[][] = [
         [4, 6, 9],
         [5, 7, 11],
         [8, 12, 20],
         [13, 26, 39],
      ];
      for (const list of lists) {
         const l = lcmMultiple(...list);
         for (const n of list) {
            expect(mod(l, n)).toBe(0);
         }
      }

      // Invariante 3: é o MENOR múltiplo comum — l/p não pode ser múltiplo
      // de todos, para cada fator primo p de l (testamos com metade: l/2 quando par)
      for (const list of lists) {
         const l = lcmMultiple(...list);
         if (isEven(l)) {
            const half = l / 2;
            const allDivide = list.every((n) => mod(half, n) === 0);
            expect(allDivide).toBe(false);
         }
      }

      // Invariante 4: idempotência — lcmMultiple(n, n, n) === n
      for (const n of [1, 7, 100, 999]) {
         expect(lcmMultiple(n, n, n)).toBe(n);
      }

      // Invariante 5: dualidade com gcdMultiple — para listas onde
      // gcdMultiple === 1 e números são dois-a-dois coprimos, lcm === produto
      expect(lcmMultiple(3, 5, 7, 11)).toBe(multiply(3, 5, 7, 11));
      expect(gcdMultiple(3, 5, 7, 11)).toBe(1);

      // Invariante 6: absorção — 0 no INÍCIO aciona o early exit imediato,
      // mesmo numa lista de 5001 números (sem acumular nada)
      const bigList = [0, ...Array.from({ length: 5000 }, (_, i) => i + 1)];
      expect(lcmMultiple(...bigList)).toBe(0);

      // Caso patológico que descobriu o bug do gcd: o acumulado estoura para
      // Infinity no meio da redução — antes da guarda no gcd isso TRAVAVA o
      // processo em loop infinito; agora degrada para NaN de forma segura
      const overflowing = Array.from({ length: 1000 }, (_, i) => i + 1);
      expect(Number.isFinite(lcmMultiple(...overflowing))).toBe(false);
   });
});

//--

describe("Function: modPow", () => {
   // ── BÁSICO ──
   it("should compute simple modular exponentiations", () => {
      expect(modPow(2, 10, 1000)).toBe(24); // 1024 % 1000
      expect(modPow(3, 4, 5)).toBe(1); // 81 % 5
      expect(modPow(5, 3, 13)).toBe(8); // 125 % 13
      expect(modPow(10, 2, 7)).toBe(2); // 100 % 7
   });

   // ── MÉDIO ──
   it("should handle exponent zero, base zero, modulus one, and negative bases", () => {
      // e = 0: resultado 1 (até 0^0, convenção da power)
      expect(modPow(7, 0, 13)).toBe(1);
      expect(modPow(0, 0, 5)).toBe(1);

      // base 0 com expoente > 0: sempre 0
      expect(modPow(0, 5, 7)).toBe(0);

      // mod 1: tudo é 0
      expect(modPow(123, 456, 1)).toBe(0);

      // Base negativa normalizada: (-2)³ = -8 ≡ 2 (mod 5)
      expect(modPow(-2, 3, 5)).toBe(2);
      expect(modPow(-3, 2, 7)).toBe(2); // 9 % 7

      // Resultado SEMPRE em [0, m)
      expect(modPow(-5, 3, 7)).toBeGreaterThanOrEqual(0);
   });

   // ── INTERMEDIÁRIO ──
   it("should match the naive power + mod for small inputs (dogfooding)", () => {
      for (let b = 0; b <= 10; b++) {
         for (let e = 0; e <= 8; e++) {
            for (const m of [2, 3, 5, 7, 13]) {
               expect(modPow(b, e, m)).toBe(mod(power(b, e), m));
            }
         }
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with invalid inputs", () => {
      // Não-finitos
      expect(modPow(NaN, 2, 5)).toBeNaN();
      expect(modPow(2, Infinity, 5)).toBeNaN();
      expect(modPow(2, 3, NaN)).toBeNaN();

      // Expoente negativo: requer modInverse (Fase 2)
      expect(modPow(2, -3, 5)).toBeNaN();

      // Módulo inválido
      expect(modPow(2, 3, 0)).toBeNaN();
      expect(modPow(2, 3, -7)).toBeNaN();

      // Fronteira do limite seguro: √MAX_SAFE_INTEGER
      expect(modPow(2, 10, 94906265)).toBe(1024); // último módulo aceito
      expect(modPow(2, 10, 94906266)).toBeNaN(); // primeiro rejeitado
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with astronomically large exponents", () => {
      // O ponto da função: expoentes que a power jamais aguentaria
      // 7^(10^15) mod 13 — por Fermat: 7^12 ≡ 1, e 10^15 ≡ 4 (mod 12) -> 7^4 ≡ 9
      expect(modPow(7, 1e15, 13)).toBe(9);

      // power(7, 1e15) seria Infinity; modPow nem pisca
      expect(Number.isFinite(modPow(7, 1e15, 13))).toBe(true);

      // Expoente no limite do safe integer
      expect(modPow(2, Number.MAX_SAFE_INTEGER, 13)).toBeGreaterThanOrEqual(0);
      expect(modPow(2, Number.MAX_SAFE_INTEGER, 13)).toBeLessThan(13);

      // Módulo grande próximo do limite, base grande
      expect(modPow(94906264, 2, 94906265)).toBe(1); // (m-1)² ≡ 1 (mod m)
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (Fermat, RSA, and identities)", () => {
      // 1. PEQUENO TEOREMA DE FERMAT: a^(p-1) ≡ 1 (mod p) para p primo, gcd(a,p)=1
      for (const p of [5, 7, 11, 13, 97]) {
         for (let a = 1; a < p; a++) {
            expect(modPow(a, p - 1, p)).toBe(1);
         }
      }

      // 2. RSA DE VERDADE (exemplo clássico): p=61, q=53, n=3233, e=17, d=2753
      const n = 3233;
      const e = 17;
      const d = 2753;
      const message = 65;
      const encrypted = modPow(message, e, n);
      expect(encrypted).toBe(2790); // criptografa
      expect(modPow(encrypted, d, n)).toBe(message); // descriptografa de volta!

      // Roundtrip RSA para várias mensagens
      for (const msg of [1, 42, 100, 1000, 3232]) {
         expect(modPow(modPow(msg, e, n), d, n)).toBe(msg);
      }

      // 3. Identidade dos expoentes: b^(e1+e2) ≡ b^e1 * b^e2 (mod m)
      for (const [b, e1, e2, m] of [
         [3, 5, 7, 11],
         [2, 10, 20, 13],
         [5, 4, 9, 23],
      ] as const) {
         const lhs = modPow(b, e1 + e2, m);
         const rhs = mod(modPow(b, e1, m) * modPow(b, e2, m), m);
         expect(lhs).toBe(rhs);
      }

      // 4. Identidade da base: (a*b)^e ≡ a^e * b^e (mod m)
      expect(modPow(3 * 5, 7, 11)).toBe(
         mod(modPow(3, 7, 11) * modPow(5, 7, 11), 11),
      );

      // 5. Coprimalidade com o módulo preservada (dogfooding com coprime)
      // Se gcd(a, m) = 1, então gcd(a^e mod m, m) = 1
      expect(coprime(modPow(7, 100, 13), 13)).toBe(true);
      expect(coprime(modPow(2, 1000, 97), 97)).toBe(true);
   });
});

//--

describe("Function: percentOf", () => {
   // ── BÁSICO ──
   it("should calculate simple percentages", () => {
      expect(percentOf(25, 200)).toBe(12.5);
      expect(percentOf(50, 100)).toBe(50);
      expect(percentOf(1, 4)).toBe(25);
      expect(percentOf(200, 100)).toBe(200); // mais que o total: > 100%
   });

   // ── MÉDIO ──
   it("should handle zeros, negatives, and identity cases", () => {
      // 0 de qualquer total é 0%
      expect(percentOf(0, 50)).toBe(0);

      // value === total é sempre 100%
      expect(percentOf(7, 7)).toBe(100);
      expect(percentOf(0.3, 0.3)).toBe(100);

      // Negativos
      expect(percentOf(-25, 200)).toBe(-12.5);
      expect(percentOf(25, -200)).toBe(-12.5);
      expect(percentOf(-25, -200)).toBe(12.5);

      // total === 0: propaga o throw da divide (decisão de design)
      expect(() => percentOf(10, 0)).toThrow(
         "Division by zero is not allowed.",
      );
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with divide and multiply (dogfooding)", () => {
      for (const [v, t] of [
         [25, 200],
         [3, 8],
         [150, 60],
         [1, 3],
      ] as const) {
         expect(percentOf(v, t)).toBe(multiply(divide(v, t), 100));
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with floats and special values", () => {
      expect(percentOf(1, 3)).toBeCloseTo(33.333333333333336, 10);
      expect(percentOf(0.1, 0.2)).toBeCloseTo(50, 10);

      expect(percentOf(NaN, 100)).toBeNaN();
      expect(percentOf(Infinity, 100)).toBe(Infinity);
      expect(percentOf(100, Infinity)).toBe(0);
   });
});

//--

describe("Function: fromPercent", () => {
   // ── BÁSICO ──
   it("should calculate values from simple percentages", () => {
      expect(fromPercent(12.5, 200)).toBe(25);
      expect(fromPercent(50, 100)).toBe(50);
      expect(fromPercent(25, 4)).toBe(1);
      expect(fromPercent(200, 100)).toBe(200); // 200% do total
   });

   // ── MÉDIO ──
   it("should handle zeros, negatives, and the 100% identity", () => {
      // 0% de qualquer coisa é 0; qualquer % de 0 é 0
      expect(fromPercent(0, 500)).toBe(0);
      expect(fromPercent(50, 0)).toBe(0); // NÃO lança: divide por 100, não por total

      // 100% é identidade
      expect(fromPercent(100, 7)).toBe(7);
      expect(fromPercent(100, -3.5)).toBe(-3.5);

      // Negativos
      expect(fromPercent(-50, 200)).toBe(-100);
      expect(fromPercent(50, -200)).toBe(-100);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with divide and multiply (dogfooding)", () => {
      for (const [p, t] of [
         [12.5, 200],
         [33, 9],
         [7, 1000],
         [0.5, 80],
      ] as const) {
         expect(fromPercent(p, t)).toBe(multiply(divide(p, 100), t));
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with floats and special values", () => {
      expect(fromPercent(33.333333333333336, 3)).toBeCloseTo(1, 10);
      expect(fromPercent(0.001, 1000000)).toBeCloseTo(10, 10);

      expect(fromPercent(NaN, 100)).toBeNaN();
      expect(fromPercent(Infinity, 100)).toBe(Infinity);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA (roundtrip do par) ──
   it("should withstand the definitive nuclear explosion (inverse pair at scale)", () => {
      // Invariante central: fromPercent(percentOf(v, t), t) === v — varredura
      for (let v = -100; v <= 100; v += 13) {
         for (const t of [1, 3, 7, 50, 200, -80, 0.5]) {
            expect(fromPercent(percentOf(v, t), t)).toBeCloseTo(v, 9);
         }
      }

      // E na direção oposta: percentOf(fromPercent(p, t), t) === p
      for (const p of [0, 12.5, 50, 100, 250, -30]) {
         for (const t of [4, 9, 100, -16]) {
            expect(percentOf(fromPercent(p, t), t)).toBeCloseTo(p, 9);
         }
      }

      // Aditividade: x% de t + y% de t === (x+y)% de t
      expect(fromPercent(30, 200) + fromPercent(20, 200)).toBeCloseTo(
         fromPercent(50, 200),
         10,
      );

      // Composição: 50% de 50% === 25%
      expect(fromPercent(50, fromPercent(50, 400))).toBe(100);

      // Sanidade do mundo real: desconto de 15% em R$ 89,90
      const price = 89.9;
      const discount = fromPercent(15, price);
      expect(round(price - discount, 2)).toBe(76.42);
   });
});

//--

describe("Function: sumOfDigits", () => {
   // ── BÁSICO ──
   it("should sum the digits of simple positive integers", () => {
      expect(sumOfDigits(12345)).toBe(15); // 1+2+3+4+5
      expect(sumOfDigits(999)).toBe(27); // 9+9+9
      expect(sumOfDigits(1000)).toBe(1); // 1+0+0+0
      expect(sumOfDigits(7)).toBe(7);
   });

   // ── MÉDIO ──
   it("should handle zero, negatives, and floats", () => {
      // Zero
      expect(sumOfDigits(0)).toBe(0);
      expect(sumOfDigits(-0)).toBe(0);

      // Sinal ignorado
      expect(sumOfDigits(-12345)).toBe(15);
      expect(sumOfDigits(-999)).toBe(27);

      // Floats truncados
      expect(sumOfDigits(45.9)).toBe(9); // sumOfDigits(45)
      expect(sumOfDigits(-99.99)).toBe(18); // sumOfDigits(99)
      expect(sumOfDigits(0.7)).toBe(0); // sumOfDigits(0)
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with digits and mod (dogfooding)", () => {
      // A soma máxima possível é 9 * digits(n)
      for (const n of [5, 99, 12345, 999999, 1000001]) {
         expect(sumOfDigits(n)).toBeLessThanOrEqual(9 * digits(n));
         expect(sumOfDigits(n)).toBeGreaterThanOrEqual(1);
      }

      // Repunits e repdigits: sumOfDigits(ddd...d) = d * digits
      expect(sumOfDigits(1111)).toBe(4);
      expect(sumOfDigits(7777777)).toBe(multiply(7, digits(7777777)));
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with non-finite inputs", () => {
      // Sem a guarda, String(Infinity) somaria charCodes de letras!
      expect(sumOfDigits(Infinity)).toBeNaN();
      expect(sumOfDigits(-Infinity)).toBeNaN();
      expect(sumOfDigits(NaN)).toBeNaN();
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality at the boundaries of safe integers", () => {
      // MAX_SAFE_INTEGER = 9007199254740991 -> 9+0+0+7+1+9+9+2+5+4+7+4+0+9+9+1 = 76
      expect(sumOfDigits(Number.MAX_SAFE_INTEGER)).toBe(76);
      expect(sumOfDigits(-Number.MAX_SAFE_INTEGER)).toBe(76);

      // Maior soma possível em 15 dígitos: 999999999999999
      expect(sumOfDigits(999999999999999)).toBe(135); // 9 * 15
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (digit-sum theorems at scale)", () => {
      // Teorema 1: congruência módulo 9 — n ≡ sumOfDigits(n) (mod 9)
      // É a base da "prova dos nove" e das regras de divisibilidade por 3 e 9
      for (let n = 0; n <= 3000; n += 7) {
         expect(mod(sumOfDigits(n), 9)).toBe(mod(n, 9));
      }

      // Teorema 2: divisível por 9 <=> soma dos dígitos divisível por 9
      expect(mod(sumOfDigits(9 * 12345), 9)).toBe(0);
      expect(mod(sumOfDigits(9 * 987654), 9)).toBe(0);

      // Teorema 3: divisível por 3 <=> soma divisível por 3 (dogfooding com mod)
      for (const n of [3, 33, 123, 12345, 999999, 3000003]) {
         expect(mod(sumOfDigits(n), 3)).toBe(mod(n, 3));
      }

      // Propriedade: multiplicar por 10 NÃO muda a soma (só acrescenta zeros)
      let value = 123;
      for (let step = 1; step <= 10; step++) {
         value = value * 10;
         expect(sumOfDigits(value)).toBe(sumOfDigits(123));
      }

      // Invariância de sinal — varredura
      for (let n = 0; n <= 1000; n += 13) {
         expect(sumOfDigits(-n)).toBe(sumOfDigits(n));
      }
   });
});

//--

describe("Function: isPerfectSquare", () => {
   // ── BÁSICO ──
   it("should identify simple perfect squares and non-squares", () => {
      expect(isPerfectSquare(4)).toBe(true);
      expect(isPerfectSquare(9)).toBe(true);
      expect(isPerfectSquare(36)).toBe(true);
      expect(isPerfectSquare(144)).toBe(true);

      expect(isPerfectSquare(2)).toBe(false);
      expect(isPerfectSquare(10)).toBe(false);
      expect(isPerfectSquare(35)).toBe(false);
      expect(isPerfectSquare(37)).toBe(false);
   });

   // ── MÉDIO ──
   it("should handle zero, one, negatives, and non-integers", () => {
      // 0 = 0² e 1 = 1²
      expect(isPerfectSquare(0)).toBe(true);
      expect(isPerfectSquare(-0)).toBe(true);
      expect(isPerfectSquare(1)).toBe(true);

      // Negativos nunca são quadrados perfeitos (nos reais)
      expect(isPerfectSquare(-4)).toBe(false);
      expect(isPerfectSquare(-9)).toBe(false);

      // Floats NÃO são truncados: propriedade de inteiros
      expect(isPerfectSquare(36.5)).toBe(false);
      expect(isPerfectSquare(35.99999)).toBe(false);
      expect(isPerfectSquare(4.0)).toBe(true); // 4.0 É inteiro em JS
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with power, divisors, and isOdd (dogfooding)", () => {
      // Todo power(k, 2) é quadrado perfeito — varredura
      for (let k = 0; k <= 100; k++) {
         expect(isPerfectSquare(power(k, 2))).toBe(true);
      }

      // Teorema: n é quadrado perfeito <=> tem quantidade ÍMPAR de divisores
      for (let n = 1; n <= 200; n++) {
         expect(isPerfectSquare(n)).toBe(isOdd(divisors(n).length));
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with non-finite inputs and neighbors", () => {
      expect(isPerfectSquare(NaN)).toBe(false);
      expect(isPerfectSquare(Infinity)).toBe(false);
      expect(isPerfectSquare(-Infinity)).toBe(false);

      // Vizinhos imediatos de quadrados: o teste clássico de off-by-one
      for (const k of [5, 12, 50, 100, 1000]) {
         const sq = k * k;
         expect(isPerfectSquare(sq)).toBe(true);
         expect(isPerfectSquare(sq - 1)).toBe(false);
         expect(isPerfectSquare(sq + 1)).toBe(false);
      }
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with giant squares near the float limit", () => {
      // Quadrados de números grandes: onde Math.sqrt sozinho tropeçaria
      expect(isPerfectSquare(94906265 * 94906265)).toBe(true); // maior raiz segura
      expect(isPerfectSquare(94906265 * 94906265 - 1)).toBe(false);
      expect(isPerfectSquare(99991 * 99991)).toBe(true);
      expect(isPerfectSquare(999999937 * 4)).toBe(false); // 4·primo: nunca quadrado

      // Quadrado de primo grande (estrutura p²)
      expect(isPerfectSquare(1000003 * 1000003)).toBe(true);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (square theorems at scale)", () => {
      // Teorema 1: soma dos k primeiros ímpares = k² (Gauss pitagórico!)
      // 1 = 1², 1+3 = 2², 1+3+5 = 3², ...
      let acc = 0;
      for (let k = 1; k <= 200; k++) {
         acc += 2 * k - 1;
         expect(isPerfectSquare(acc)).toBe(true);
         expect(acc).toBe(power(k, 2));
      }

      // Teorema 2: quadrados perfeitos terminam só em 0,1,4,5,6,9 (base 10)
      for (let k = 1; k <= 300; k++) {
         const lastDigit = mod(power(k, 2), 10);
         expect([0, 1, 4, 5, 6, 9]).toContain(lastDigit);
      }

      // Teorema 3: produto de dois quadrados é quadrado
      expect(isPerfectSquare(4 * 9)).toBe(true); // 36
      expect(isPerfectSquare(16 * 25)).toBe(true); // 400
      expect(isPerfectSquare(49 * 121)).toBe(true); // 5929

      // Densidade: entre 10000 e 10200 existem EXATAMENTE 1 quadrado (10000 = 100²)
      let count = 0;
      for (let n = 10000; n <= 10200; n++) {
         if (isPerfectSquare(n)) count++;
      }
      expect(count).toBe(1);

      // Quadrado de Fibonacci: F(12) = 144 = 12² (o ÚNICO Fibonacci > 1 que é quadrado!)
      expect(isPerfectSquare(fibonacci(12))).toBe(true);
      expect(isPerfectSquare(fibonacci(11))).toBe(false);
      expect(isPerfectSquare(fibonacci(13))).toBe(false);
   });
});

//--

describe("Function: hypot", () => {
   // ── BÁSICO ──
   it("should calculate the hypotenuse of classic right triangles", () => {
      expect(hypot(3, 4)).toBe(5);
      expect(hypot(5, 12)).toBe(13);
      expect(hypot(8, 15)).toBe(17);
      expect(hypot(7, 24)).toBe(25);
   });

   // ── MÉDIO ──
   it("should handle single arguments, zeros, negatives, and the empty case", () => {
      // Um único argumento: |n|
      expect(hypot(5)).toBe(5);
      expect(hypot(-5)).toBe(5);

      // Zeros não contribuem
      expect(hypot(0, 0)).toBe(0);
      expect(hypot(3, 0, 4)).toBe(5);

      // Sinais são irrelevantes (quadrado anula)
      expect(hypot(-3, 4)).toBe(5);
      expect(hypot(3, -4)).toBe(5);
      expect(hypot(-3, -4)).toBe(5);

      // Vazio: sqrt(0) = 0, consistente com sumOfSquares()
      expect(hypot()).toBe(0);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with sumOfSquares, sqrt, and Math.hypot (dogfooding)", () => {
      // Definição: hypot(...) === sqrt(sumOfSquares(...))
      const cases: number[][] = [
         [3, 4],
         [1, 2, 2],
         [5, 12],
         [1, 1, 1, 1],
      ];
      for (const c of cases) {
         expect(hypot(...c)).toBe(sqrt(sumOfSquares(...c)));
      }

      // Paridade com o nativo na faixa normal
      expect(hypot(3, 4)).toBe(Math.hypot(3, 4));
      expect(hypot(1.5, 2.5)).toBeCloseTo(Math.hypot(1.5, 2.5), 12);
      expect(hypot(1, 2, 3, 4, 5)).toBeCloseTo(Math.hypot(1, 2, 3, 4, 5), 12);
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with 3D, irrationals, and special values", () => {
      // Quádrupla pitagórica 3D: 1² + 2² + 2² = 3²
      expect(hypot(1, 2, 2)).toBe(3);
      expect(hypot(2, 3, 6)).toBe(7);
      expect(hypot(1, 4, 8)).toBe(9);

      // Diagonais irracionais clássicas
      expect(hypot(1, 1)).toBeCloseTo(Math.SQRT2, 12); // diagonal do quadrado
      expect(hypot(1, 1, 1)).toBeCloseTo(Math.sqrt(3), 12); // diagonal do cubo

      // Especiais
      expect(hypot(NaN, 3)).toBeNaN();
      expect(hypot(Infinity, 1)).toBe(Infinity);
      expect(hypot(-Infinity, 1)).toBe(Infinity);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with scaled Pythagorean triples", () => {
      // Escalar uma tripla por k mantém ela pitagórica: (3k, 4k, 5k)
      for (const k of [2, 10, 100, 1000, 100000]) {
         expect(hypot(3 * k, 4 * k)).toBe(5 * k);
         expect(hypot(5 * k, 12 * k)).toBe(13 * k);
      }

      // Componentes minúsculos (precisão na ponta de baixo)
      expect(hypot(3e-8, 4e-8)).toBeCloseTo(5e-8, 18);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (Euclidean geometry at scale)", () => {
      // Fórmula de Euclides gera TODAS as triplas: a=m²-n², b=2mn, c=m²+n²
      for (let m = 2; m <= 15; m++) {
         for (let n = 1; n < m; n++) {
            const a = power(m, 2) - power(n, 2);
            const b = 2 * m * n;
            const c = power(m, 2) + power(n, 2);
            expect(hypot(a, b)).toBe(c);
         }
      }

      // Desigualdade triangular: hypot(a, b) <= |a| + |b| — varredura
      for (let a = -20; a <= 20; a += 4) {
         for (let b = -20; b <= 20; b += 4) {
            expect(hypot(a, b)).toBeLessThanOrEqual(
               absolute(a) + absolute(b) + 1e-12,
            );
            // E nunca menor que o maior componente
            expect(hypot(a, b)).toBeGreaterThanOrEqual(
               Math.max(absolute(a), absolute(b)),
            );
         }
      }

      // Invariância de ordem e homogeneidade: hypot(ka, kb) === k * hypot(a, b)
      expect(hypot(4, 3)).toBe(hypot(3, 4));
      expect(hypot(6, 8)).toBeCloseTo(2 * hypot(3, 4), 12);
      expect(hypot(30, 40)).toBeCloseTo(10 * hypot(3, 4), 12);

      // Composição dimensional: hypot(a, b, c) === hypot(hypot(a, b), c)
      expect(hypot(1, 2, 2)).toBeCloseTo(hypot(hypot(1, 2), 2), 12);
      expect(hypot(2, 3, 6)).toBeCloseTo(hypot(hypot(2, 3), 6), 12);
   });
});

//--

describe("Function: clampedLerp", () => {
   // ── BÁSICO ──
   it("should interpolate normally when t is within [0, 1]", () => {
      expect(clampedLerp(0, 10, 0)).toBe(0);
      expect(clampedLerp(0, 10, 0.5)).toBe(5);
      expect(clampedLerp(0, 10, 1)).toBe(10);
      expect(clampedLerp(0, 10, 0.75)).toBe(7.5);
   });

   // ── MÉDIO ──
   it("should clamp t outside [0, 1] instead of extrapolating", () => {
      // t > 1: trava em b
      expect(clampedLerp(0, 10, 2)).toBe(10);
      expect(clampedLerp(0, 10, 100)).toBe(10);

      // t < 0: trava em a
      expect(clampedLerp(0, 10, -1)).toBe(0);
      expect(clampedLerp(0, 10, -50)).toBe(0);

      // Intervalos invertidos (b < a) também travam corretamente
      expect(clampedLerp(10, 0, 2)).toBe(0);
      expect(clampedLerp(10, 0, -1)).toBe(10);

      // Negativos
      expect(clampedLerp(-10, -5, 0.5)).toBe(-7.5);
      expect(clampedLerp(-10, -5, 5)).toBe(-5);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with lerp, clamp, and inverseLerp (dogfooding)", () => {
      // Dentro de [0,1]: idêntica à lerp pura
      for (const t of [0, 0.1, 0.25, 0.5, 0.9, 1]) {
         expect(clampedLerp(3, 17, t)).toBe(lerp(3, 17, t));
      }

      // Definição: clampedLerp(a, b, t) === lerp(a, b, clamp(t, 0, 1))
      for (const t of [-2, -0.5, 0.3, 1.5, 7]) {
         expect(clampedLerp(2, 8, t)).toBe(lerp(2, 8, clamp(t, 0, 1)));
      }

      // Roundtrip com inverseLerp dentro do intervalo
      const v = clampedLerp(0, 20, 0.35);
      expect(inverseLerp(0, 20, v)).toBeCloseTo(0.35, 12);
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with special values", () => {
      // a === b: sempre retorna o próprio valor, qualquer t
      expect(clampedLerp(5, 5, 0.5)).toBe(5);
      expect(clampedLerp(5, 5, 100)).toBe(5);
      expect(clampedLerp(5, 5, -100)).toBe(5);

      // t infinito: clamp domestica para 0 ou 1
      expect(clampedLerp(0, 10, Infinity)).toBe(10);
      expect(clampedLerp(0, 10, -Infinity)).toBe(0);

      // NaN propaga
      expect(clampedLerp(NaN, 10, 0.5)).toBeNaN();
      expect(clampedLerp(0, 10, NaN)).toBeNaN();
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality and NEVER overshoot", () => {
      // A garantia central: resultado SEMPRE dentro de [min(a,b), max(a,b)]
      // — varredura com t selvagem, intervalos normais e invertidos
      const wildT = [-1e9, -777, -1.001, 1.001, 42, 1e9];
      const ranges: [number, number][] = [
         [0, 10],
         [10, 0],
         [-5, 5],
         [100, -100],
      ];

      for (const [a, b] of ranges) {
         const lo = Math.min(a, b);
         const hi = Math.max(a, b);
         for (const t of wildT) {
            const result = clampedLerp(a, b, t);
            expect(result).toBeGreaterThanOrEqual(lo);
            expect(result).toBeLessThanOrEqual(hi);
         }
      }
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (interpolation laws at scale)", () => {
      // Lei 1: monotonicidade — t maior nunca diminui o resultado (a < b)
      let prev = clampedLerp(0, 100, -1);
      for (let t = -1; t <= 2; t += 0.05) {
         const current = clampedLerp(0, 100, t);
         expect(current).toBeGreaterThanOrEqual(prev);
         prev = current;
      }

      // Lei 2: simetria — clampedLerp(a, b, t) === clampedLerp(b, a, 1 - t) para t em [0,1]
      for (let t = 0; t <= 1; t += 0.1) {
         expect(clampedLerp(3, 13, t)).toBeCloseTo(
            clampedLerp(13, 3, 1 - t),
            12,
         );
      }

      // Lei 3: saturação total — fora de [0,1] o resultado é EXATAMENTE a ou b
      for (const t of [1.0001, 2, 50, 1e6]) {
         expect(clampedLerp(7, 21, t)).toBe(21);
      }
      for (const t of [-0.0001, -2, -50, -1e6]) {
         expect(clampedLerp(7, 21, t)).toBe(7);
      }

      // Lei 4: composição com mapas afins — escalar o intervalo escala o resultado
      for (let t = -0.5; t <= 1.5; t += 0.25) {
         expect(clampedLerp(0, 50, t)).toBeCloseTo(
            5 * clampedLerp(0, 10, t),
            12,
         );
      }

      // Simulação real: barra de progresso alimentada com valores caóticos
      // (o caso de uso que justifica a função existir)
      const chaos = [-3, 0.2, 0.7, 1.4, 0.99, 2.5, -0.1, 1];
      for (const t of chaos) {
         const percent = clampedLerp(0, 100, t);
         expect(percent).toBeGreaterThanOrEqual(0);
         expect(percent).toBeLessThanOrEqual(100);
      }
   });
});

//--

describe("Function: mapRange", () => {
   // ── BÁSICO ──
   it("should map values between simple ranges", () => {
      expect(mapRange(5, 0, 10, 0, 100)).toBe(50);
      expect(mapRange(0, 0, 10, 0, 100)).toBe(0);
      expect(mapRange(10, 0, 10, 0, 100)).toBe(100);
      expect(mapRange(2.5, 0, 10, 0, 100)).toBe(25);
   });

   // ── MÉDIO ──
   it("should handle inverted ranges, negatives, and offsets", () => {
      // Range de saída invertido (espelhar)
      expect(mapRange(2, 0, 10, 100, 0)).toBe(80);
      expect(mapRange(0, 0, 10, 100, 0)).toBe(100);

      // Range de entrada invertido
      expect(mapRange(8, 10, 0, 0, 100)).toBe(20);

      // Ranges negativos e com offset
      expect(mapRange(0, -10, 10, 0, 100)).toBe(50);
      expect(mapRange(-5, -10, 0, 0, 1)).toBe(0.5);
      expect(mapRange(15, 10, 20, 100, 200)).toBe(150);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with lerp and inverseLerp (dogfooding)", () => {
      // Definição: mapRange === lerp(outMin, outMax, inverseLerp(inMin, inMax, v))
      for (const v of [0, 2.5, 5, 7.5, 10, -3, 13]) {
         expect(mapRange(v, 0, 10, 50, 150)).toBe(
            lerp(50, 150, inverseLerp(0, 10, v)),
         );
      }

      // Mapear [0,1] -> [a,b] é exatamente lerp
      for (const t of [0, 0.25, 0.5, 0.75, 1]) {
         expect(mapRange(t, 0, 1, 30, 70)).toBe(lerp(30, 70, t));
      }

      // Mapear [a,b] -> [0,1] é exatamente inverseLerp
      for (const v of [0, 5, 10]) {
         expect(mapRange(v, 0, 10, 0, 1)).toBe(inverseLerp(0, 10, v));
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with extrapolation and special values", () => {
      // Extrapolação proporcional (sem clamp, como a lerp)
      expect(mapRange(20, 0, 10, 0, 100)).toBe(200);
      expect(mapRange(-10, 0, 10, 0, 100)).toBe(-100);

      // Range de entrada degenerado: NaN (herdado da inverseLerp)
      expect(mapRange(5, 5, 5, 0, 100)).toBeNaN();

      // Range de SAÍDA degenerado: todo input vai pro mesmo ponto (válido!)
      expect(mapRange(3, 0, 10, 42, 42)).toBe(42);
      expect(mapRange(9.7, 0, 10, 42, 42)).toBe(42);

      // NaN propaga
      expect(mapRange(NaN, 0, 10, 0, 100)).toBeNaN();
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with real-world conversions", () => {
      // Celsius -> Fahrenheit: mapRange(c, 0, 100, 32, 212)
      expect(mapRange(0, 0, 100, 32, 212)).toBe(32);
      expect(mapRange(100, 0, 100, 32, 212)).toBe(212);
      expect(mapRange(37, 0, 100, 32, 212)).toBeCloseTo(98.6, 10);
      expect(mapRange(-40, 0, 100, 32, 212)).toBeCloseTo(-40, 10);

      // Sensor 10-bit (Arduino analogRead) -> PWM 8-bit
      expect(mapRange(1023, 0, 1023, 0, 255)).toBe(255);
      expect(mapRange(0, 0, 1023, 0, 255)).toBe(0);
      expect(mapRange(511.5, 0, 1023, 0, 255)).toBeCloseTo(127.5, 10);

      // Nota de prova [0,10] -> escala SAT [400,1600]
      expect(mapRange(7, 0, 10, 400, 1600)).toBeCloseTo(1240, 10);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (affine map laws at scale)", () => {
      // Lei 1: roundtrip — mapear ida e volta devolve o valor original
      for (let v = -20; v <= 40; v += 3) {
         const mapped = mapRange(v, 0, 10, 100, 500);
         expect(mapRange(mapped, 100, 500, 0, 10)).toBeCloseTo(v, 10);
      }

      // Lei 2: composição — A->B->C === A->C direto
      for (let v = 0; v <= 10; v += 0.5) {
         const viaB = mapRange(mapRange(v, 0, 10, 0, 100), 0, 100, 32, 212);
         const direct = mapRange(v, 0, 10, 32, 212);
         expect(viaB).toBeCloseTo(direct, 10);
      }

      // Lei 3: preservação de proporção — o ponto médio vai no ponto médio
      for (const [inMin, inMax, outMin, outMax] of [
         [0, 10, 0, 100],
         [-5, 5, 200, 300],
         [10, 20, -1, 1],
      ]) {
         const midIn = (inMin + inMax) / 2;
         const midOut = (outMin + outMax) / 2;
         expect(mapRange(midIn, inMin, inMax, outMin, outMax)).toBeCloseTo(
            midOut,
            10,
         );
      }

      // Lei 4: identidade — mapear um range nele mesmo não muda nada
      // (toBeCloseTo: t = v/20 gera dízimas binárias, ex. 0.7)
      for (let v = -10; v <= 10; v += 2) {
         expect(mapRange(v, -10, 10, -10, 10)).toBeCloseTo(v, 12);
      }

      // Lei 5: linearidade — espaçamentos iguais na entrada geram
      // espaçamentos iguais na saída (varredura com diferenças)
      const step = mapRange(1, 0, 10, 0, 70) - mapRange(0, 0, 10, 0, 70);
      for (let v = 1; v < 10; v++) {
         const diff = mapRange(v + 1, 0, 10, 0, 70) - mapRange(v, 0, 10, 0, 70);
         expect(diff).toBeCloseTo(step, 10);
      }
   });
});

//--

describe("Function: isPerfectNumber", () => {
   // ── BÁSICO ──
   it("should identify the first perfect numbers", () => {
      expect(isPerfectNumber(6)).toBe(true); // 1+2+3
      expect(isPerfectNumber(28)).toBe(true); // 1+2+4+7+14
      expect(isPerfectNumber(496)).toBe(true);
      expect(isPerfectNumber(8128)).toBe(true);
   });

   // ── MÉDIO ──
   it("should reject non-perfect numbers, edge values, and non-integers", () => {
      // Vizinhos e números comuns
      expect(isPerfectNumber(5)).toBe(false);
      expect(isPerfectNumber(7)).toBe(false);
      expect(isPerfectNumber(27)).toBe(false);
      expect(isPerfectNumber(29)).toBe(false);
      expect(isPerfectNumber(100)).toBe(false);

      // Casos de borda: 0 e 1 não são perfeitos
      expect(isPerfectNumber(0)).toBe(false);
      expect(isPerfectNumber(1)).toBe(false);

      // Negativos nunca (definição exige positivo)
      expect(isPerfectNumber(-6)).toBe(false);
      expect(isPerfectNumber(-28)).toBe(false);

      // Floats NÃO truncam (consistente com isPerfectSquare)
      expect(isPerfectNumber(6.5)).toBe(false);
      expect(isPerfectNumber(28.0)).toBe(true); // 28.0 É inteiro em JS
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with divisors and sum (dogfooding)", () => {
      // Definição manual: soma dos divisores próprios === n
      for (const n of [6, 28, 496]) {
         const proper = divisors(n);
         proper.pop();
         expect(sum(...proper)).toBe(n);
      }

      // Deficientes (soma < n) e abundantes (soma > n) — as outras duas castas
      const proper12 = divisors(12);
      proper12.pop();
      expect(sum(...proper12)).toBeGreaterThan(12); // 12 é abundante (16)
      expect(isPerfectNumber(12)).toBe(false);

      const proper8 = divisors(8);
      proper8.pop();
      expect(sum(...proper8)).toBeLessThan(8); // 8 é deficiente (7)
      expect(isPerfectNumber(8)).toBe(false);
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with special values and primes", () => {
      expect(isPerfectNumber(NaN)).toBe(false);
      expect(isPerfectNumber(Infinity)).toBe(false);
      expect(isPerfectNumber(-Infinity)).toBe(false);

      // Nenhum primo é perfeito (divisor próprio único: 1)
      for (const p of [2, 3, 5, 7, 11, 13, 97, 7919]) {
         expect(isPerfectNumber(p)).toBe(false);
      }

      // Nenhuma potência de 2 é perfeita (soma = 2^k - 1, sempre deficiente por 1!)
      for (let k = 1; k <= 20; k++) {
         expect(isPerfectNumber(power(2, k))).toBe(false);
      }
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with the 5th perfect number", () => {
      // O salto gigante: do 8128 direto pro 33.550.336
      expect(isPerfectNumber(33550336)).toBe(true);
      expect(isPerfectNumber(33550335)).toBe(false);
      expect(isPerfectNumber(33550337)).toBe(false);

      // Deserto absoluto: NENHUM perfeito entre 8129 e 33550335
      // (amostragem em pontos espalhados do deserto)
      for (const n of [10000, 123456, 1000000, 8000000, 20000000, 33000000]) {
         expect(isPerfectNumber(n)).toBe(false);
      }
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (Euclid's 2300-year-old theorem)", () => {
      // Teorema de Euclides (Elementos, IX.36): se 2^p - 1 é primo (Mersenne),
      // então 2^(p-1) × (2^p - 1) é perfeito. Dogfooding: isPrime + power!
      for (const p of [2, 3, 5, 7, 13]) {
         const mersenne = power(2, p) - 1;
         expect(isPrime(mersenne)).toBe(true); // confirma que é Mersenne primo
         const perfect = power(2, p - 1) * mersenne;
         expect(isPerfectNumber(perfect)).toBe(true);
      }
      // Gera exatamente: 6, 28, 496, 8128, 33550336 ✨

      // E o contrário: expoentes onde 2^p - 1 NÃO é primo geram NÃO-perfeitos
      for (const p of [4, 6, 8, 9, 11]) {
         const mersenne = power(2, p) - 1;
         expect(isPrime(mersenne)).toBe(false);
         expect(isPerfectNumber(power(2, p - 1) * mersenne)).toBe(false);
      }

      // Censo completo: até 10.000 existem EXATAMENTE 4 perfeitos
      const found: number[] = [];
      for (let n = 1; n <= 10000; n++) {
         if (isPerfectNumber(n)) found.push(n);
      }
      expect(found).toEqual([6, 28, 496, 8128]);

      // Todo perfeito par é triangular: 6 = 1+2+3, 28 = 1+...+7, 496 = 1+...+31
      // n é triangular <=> 8n + 1 é quadrado perfeito (dogfooding!)
      for (const perfect of [6, 28, 496, 8128, 33550336]) {
         expect(isPerfectSquare(8 * perfect + 1)).toBe(true);
      }
   });
});

//--

describe("Function: primeFactors", () => {
   // ── BÁSICO ──
   it("should factorize simple composite numbers", () => {
      expect(primeFactors(12)).toEqual([2, 2, 3]);
      expect(primeFactors(60)).toEqual([2, 2, 3, 5]);
      expect(primeFactors(100)).toEqual([2, 2, 5, 5]);
      expect(primeFactors(7)).toEqual([7]); // primo: fatoração é ele mesmo
   });

   // ── MÉDIO ──
   it("should handle edge values, negatives, and floats", () => {
      // n < 2: sem fatoração canônica
      expect(primeFactors(0)).toEqual([]);
      expect(primeFactors(1)).toEqual([]);
      expect(primeFactors(-12)).toEqual([]);

      // Floats truncam (padrão da família divisors/digits)
      expect(primeFactors(12.9)).toEqual([2, 2, 3]);
      expect(primeFactors(60.0001)).toEqual([2, 2, 3, 5]);

      // Potências puras
      expect(primeFactors(8)).toEqual([2, 2, 2]);
      expect(primeFactors(81)).toEqual([3, 3, 3, 3]);
      expect(primeFactors(1024)).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with isPrime and multiplyMultiple (dogfooding)", () => {
      // Todo fator retornado DEVE ser primo — varredura
      for (let n = 2; n <= 500; n++) {
         for (const f of primeFactors(n)) {
            expect(isPrime(f)).toBe(true);
         }
      }

      // Primos têm fatoração unitária: [p]
      for (const p of [2, 3, 5, 7, 11, 13, 97, 101]) {
         expect(primeFactors(p)).toEqual([p]);
      }

      // Fatores vêm em ordem crescente
      const factors = primeFactors(2310); // 2×3×5×7×11
      expect(factors).toEqual([2, 3, 5, 7, 11]);
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with special values and semiprimes", () => {
      expect(primeFactors(NaN)).toEqual([]);
      expect(primeFactors(Infinity)).toEqual([]);
      expect(primeFactors(-Infinity)).toEqual([]);

      // Semiprimos RSA-style: produto de dois primos
      expect(primeFactors(3233)).toEqual([53, 61]); // o módulo RSA dos nossos testes!
      expect(primeFactors(15)).toEqual([3, 5]);
      expect(primeFactors(9991)).toEqual([97, 103]);

      // Primo grande sozinho (o caminho "remainder > 1")
      expect(primeFactors(7919)).toEqual([7919]);
      expect(primeFactors(999983)).toEqual([999983]);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with large factorizations", () => {
      // Primorial: 2×3×5×7×11×13×17×19 = 9699690
      expect(primeFactors(9699690)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);

      // Altamente composto: 720720 = 2^4 × 3^2 × 5 × 7 × 11 × 13
      expect(primeFactors(720720)).toEqual([2, 2, 2, 2, 3, 3, 5, 7, 11, 13]);

      // Quadrado de primo grande: estrutura p² no limite do loop ímpar
      expect(primeFactors(1000003 * 1000003)).toEqual([1000003, 1000003]);

      // Potência de 10 gigante: 10^15 = 2^15 × 5^15 (30 fatores)
      const trillion = primeFactors(1e15);
      expect(trillion.length).toBe(30);
      expect(trillion.slice(0, 15)).toEqual(Array(15).fill(2));
      expect(trillion.slice(15)).toEqual(Array(15).fill(5));
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (Fundamental Theorem of Arithmetic)", () => {
      // O TEOREMA FUNDAMENTAL: todo n >= 2 é o produto único dos seus primos.
      // Reconstrução total via multiplyMultiple — varredura de 2 a 2000
      for (let n = 2; n <= 2000; n++) {
         const factors = primeFactors(n);
         expect(multiplyMultiple(...factors)).toBe(n);
      }

      // Multiplicatividade: factors(a×b) = factors(a) ∪ factors(b) (ordenado)
      for (const [a, b] of [
         [12, 35],
         [8, 27],
         [100, 77],
         [13, 169],
      ]) {
         const combined = [...primeFactors(a), ...primeFactors(b)].sort(
            (x, y) => x - y,
         );
         expect(primeFactors(a * b)).toEqual(combined);
      }

      // Ponte com gcd: gcd(a,b) = 1 <=> nenhum fator primo em comum (dogfooding coprime!)
      for (const [a, b] of [
         [8, 15],
         [14, 15],
         [9, 28],
         [12, 18],
         [100, 75],
      ]) {
         const setA = new Set(primeFactors(a));
         const shared = primeFactors(b).some((f) => setA.has(f));
         expect(coprime(a, b)).toBe(!shared);
      }

      // Contagem de divisores via fatoração: d(n) = produto de (expoente + 1)
      // — ponte com a divisors()! Ex: 60 = 2²×3×5 -> (2+1)(1+1)(1+1) = 12 divisores
      for (const n of [60, 100, 720, 1024, 9991]) {
         const counts = new Map<number, number>();
         for (const f of primeFactors(n)) {
            counts.set(f, (counts.get(f) ?? 0) + 1);
         }
         let dCount = 1;
         for (const exp of counts.values()) {
            dCount = dCount * (exp + 1);
         }
         expect(divisors(n).length).toBe(dCount);
      }
   });
});

//--

describe("Function: multiplyMultiple", () => {
   // ── BÁSICO ──
   it("should multiply simple sequences of numbers", () => {
      expect(multiplyMultiple(2, 3)).toBe(6);
      expect(multiplyMultiple(2, 3, 4)).toBe(24);
      expect(multiplyMultiple(1, 2, 3, 4, 5)).toBe(120);
      expect(multiplyMultiple(10, 10, 10)).toBe(1000);
   });

   // ── MÉDIO ──
   it("should handle identities, zeros, negatives, and fractions", () => {
      // Produto vazio: identidade multiplicativa
      expect(multiplyMultiple()).toBe(1);

      // Um único fator: ele mesmo
      expect(multiplyMultiple(7)).toBe(7);
      expect(multiplyMultiple(-7)).toBe(-7);

      // Zero anula tudo (early exit)
      expect(multiplyMultiple(5, 0, 99)).toBe(0);
      expect(multiplyMultiple(0)).toBe(0);

      // Regra dos sinais: quantidade par de negativos -> positivo
      expect(multiplyMultiple(-2, -3)).toBe(6);
      expect(multiplyMultiple(-2, -3, -4)).toBe(-24);
      expect(multiplyMultiple(-1, -1, -1, -1)).toBe(1);

      // Frações
      expect(multiplyMultiple(0.5, 4)).toBe(2);
      expect(multiplyMultiple(0.1, 0.1)).toBeCloseTo(0.01, 12);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with multiply, power, and factorial (dogfooding)", () => {
      // Dois argumentos === multiply puro
      for (const [a, b] of [
         [3, 7],
         [-2, 9],
         [0.5, 8],
         [12, 12],
      ]) {
         expect(multiplyMultiple(a, b)).toBe(multiply(a, b));
      }

      // Fator repetido === power: multiplyMultiple(k, k, k) = k³
      expect(multiplyMultiple(2, 2, 2, 2)).toBe(power(2, 4));
      expect(multiplyMultiple(3, 3, 3)).toBe(power(3, 3));
      expect(multiplyMultiple(5, 5)).toBe(power(5, 2));

      // Sequência 1..n === factorial(n)! A ponte perfeita
      expect(multiplyMultiple(1, 2, 3, 4, 5)).toBe(factorial(5));
      expect(multiplyMultiple(1, 2, 3, 4, 5, 6, 7)).toBe(factorial(7));
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with special values", () => {
      // NaN propaga (sem zero presente)
      expect(multiplyMultiple(2, NaN, 3)).toBeNaN();

      // Infinity propaga
      expect(multiplyMultiple(2, Infinity)).toBe(Infinity);
      expect(multiplyMultiple(-2, Infinity)).toBe(-Infinity);

      // Early exit: zero vence até NaN e Infinity (decisão documentada,
      // consistente com lcmMultiple)
      expect(multiplyMultiple(0, NaN)).toBe(0);
      expect(multiplyMultiple(Infinity, 0)).toBe(0);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with large products", () => {
      // 2^50 via 50 fatores: ainda exato (abaixo de 2^53)
      expect(multiplyMultiple(...Array(50).fill(2))).toBe(power(2, 50));

      // Primorial de 19 (reconstruindo o teste da primeFactors ao contrário)
      expect(multiplyMultiple(2, 3, 5, 7, 11, 13, 17, 19)).toBe(9699690);

      // Estouro consciente para Infinity (sem zero pra salvar)
      expect(multiplyMultiple(1e200, 1e200)).toBe(Infinity);

      // Muitos fatores fracionários: (1/2)^30
      const halves = Array(30).fill(0.5);
      expect(multiplyMultiple(...halves)).toBeCloseTo(power(2, -30), 15);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (product laws at scale)", () => {
      // Lei 1: comutatividade — a ordem dos fatores não altera o produto
      // (o ditado popular como invariante de teste!)
      const base = [3, 7, 2, 9, 4];
      const shuffles = [
         [7, 3, 9, 2, 4],
         [9, 4, 7, 3, 2],
         [2, 9, 4, 7, 3],
      ];
      const expected = multiplyMultiple(...base);
      for (const s of shuffles) {
         expect(multiplyMultiple(...s)).toBe(expected);
      }

      // Lei 2: associatividade — agrupar não muda nada
      expect(multiplyMultiple(2, 3, 4, 5)).toBe(
         multiply(multiplyMultiple(2, 3), multiplyMultiple(4, 5)),
      );

      // Lei 3: identidade — encher de 1s não altera o produto
      expect(multiplyMultiple(7, 1, 1, 1, 1, 1)).toBe(7);
      expect(multiplyMultiple(1, 1, 1)).toBe(1);

      // Lei 4: roundtrip com divide — varredura
      for (let k = 1; k <= 50; k++) {
         const product = multiplyMultiple(k, k + 1, k + 2);
         expect(divide(product, multiply(k, k + 1))).toBeCloseTo(k + 2, 10);
      }

      // Lei 5: a GRANDE PONTE — primeFactors e multiplyMultiple são inversas!
      // (re-validação cruzada, agora do lado da multiplyMultiple)
      for (const n of [60, 100, 720, 1024, 3233, 9699690]) {
         expect(multiplyMultiple(...primeFactors(n))).toBe(n);
      }

      // E o produto vazio fecha o ciclo: primeFactors(1) = [] -> produto = 1
      expect(multiplyMultiple(...primeFactors(1))).toBe(1);
   });
});

//--

describe("Function: binomial", () => {
   // ── BÁSICO ──
   it("should calculate simple binomial coefficients", () => {
      expect(binomial(5, 2)).toBe(10);
      expect(binomial(6, 3)).toBe(20);
      expect(binomial(10, 4)).toBe(210);
      expect(binomial(52, 5)).toBe(2598960); // mãos de pôquer!
   });

   // ── MÉDIO ──
   it("should handle edges, out-of-range k, negatives, and floats", () => {
      // Bordas do triângulo: C(n, 0) = C(n, n) = 1
      expect(binomial(7, 0)).toBe(1);
      expect(binomial(7, 7)).toBe(1);
      expect(binomial(0, 0)).toBe(1); // o topo do triângulo

      // Segunda coluna: C(n, 1) = n
      expect(binomial(42, 1)).toBe(42);

      // k fora do intervalo: zero maneiras
      expect(binomial(5, 6)).toBe(0);
      expect(binomial(5, -1)).toBe(0);

      // n negativo: domínio inválido
      expect(binomial(-5, 2)).toBeNaN();

      // Floats truncam
      expect(binomial(5.9, 2.7)).toBe(10); // C(5, 2)
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with factorial and the symmetry law (dogfooding)", () => {
      // Na zona segura do factorial, as duas fórmulas coincidem
      for (const [n, k] of [
         [5, 2],
         [10, 3],
         [12, 6],
         [15, 7],
      ]) {
         const viaFactorial = divide(
            factorial(n),
            multiply(factorial(k), factorial(n - k)),
         );
         expect(binomial(n, k)).toBe(viaFactorial);
      }

      // Simetria: C(n, k) === C(n, n - k) — varredura
      for (let n = 0; n <= 30; n++) {
         for (let k = 0; k <= n; k++) {
            expect(binomial(n, k)).toBe(binomial(n, n - k));
         }
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with special values", () => {
      expect(binomial(NaN, 2)).toBeNaN();
      expect(binomial(5, NaN)).toBeNaN();
      expect(binomial(Infinity, 2)).toBeNaN();
      expect(binomial(5, -Infinity)).toBeNaN();

      // C(n, 2) = número triangular: n(n-1)/2 — varredura
      for (let n = 2; n <= 100; n++) {
         expect(binomial(n, 2)).toBe(divide(multiply(n, n - 1), 2));
      }
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality FAR beyond factorial's reach", () => {
      // factorial(n)/() morre em n=18; o cancelamento progressivo segue firme:
      expect(binomial(30, 15)).toBe(155117520);
      expect(binomial(40, 20)).toBe(137846528820);
      expect(binomial(50, 25)).toBe(126410606437752);
      expect(binomial(60, 30)).toBe(118264581564861424); // ~1.18e17, EXATO

      // Loteria real: Mega-Sena = C(60, 6)
      expect(binomial(60, 6)).toBe(50063860);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (Pascal's triangle at scale)", () => {
      // Lei 1: RECORRÊNCIA DE PASCAL — C(n,k) = C(n-1,k-1) + C(n-1,k)
      // Construindo o triângulo INTEIRO até a linha 40 só com a recorrência
      for (let n = 1; n <= 40; n++) {
         for (let k = 1; k < n; k++) {
            expect(binomial(n, k)).toBe(
               sum(binomial(n - 1, k - 1), binomial(n - 1, k)),
            );
         }
      }

      // Lei 2: soma da linha n = 2^n (teorema binomial com x=y=1)
      for (let n = 0; n <= 30; n++) {
         let rowSum = 0;
         for (let k = 0; k <= n; k++) {
            rowSum = sum(rowSum, binomial(n, k));
         }
         expect(rowSum).toBe(power(2, n));
      }

      // Lei 3: soma alternada da linha = 0 (n >= 1)
      for (let n = 1; n <= 25; n++) {
         let altSum = 0;
         for (let k = 0; k <= n; k++) {
            altSum += (k % 2 === 0 ? 1 : -1) * binomial(n, k);
         }
         expect(altSum).toBe(0);
      }

      // Lei 4: identidade do hóquei (hockey stick) —
      // soma da diagonal C(r,r)+C(r+1,r)+...+C(n,r) = C(n+1, r+1)
      for (const [n, r] of [
         [10, 3],
         [15, 5],
         [20, 2],
      ]) {
         let diag = 0;
         for (let i = r; i <= n; i++) {
            diag = sum(diag, binomial(i, r));
         }
         expect(diag).toBe(binomial(n + 1, r + 1));
      }

      // Lei 5: ponte com Fibonacci! Somas das diagonais "rasas" do triângulo
      // de Pascal = números de Fibonacci: Σ C(n-k, k) = F(n+1)
      for (let n = 0; n <= 30; n++) {
         let shallow = 0;
         for (let k = 0; k <= Math.floor(n / 2); k++) {
            shallow = sum(shallow, binomial(n - k, k));
         }
         expect(shallow).toBe(fibonacci(n + 1));
      }
   });
});

//--

describe("Function: modInverse", () => {
   // ── BÁSICO ──
   it("should find simple modular inverses", () => {
      expect(modInverse(3, 7)).toBe(5); // 3×5 = 15 ≡ 1 (mod 7)
      expect(modInverse(2, 5)).toBe(3); // 2×3 = 6 ≡ 1 (mod 5)
      expect(modInverse(7, 11)).toBe(8); // 7×8 = 56 ≡ 1 (mod 11)
      expect(modInverse(1, 9)).toBe(1); // 1 é sempre seu próprio inverso
   });

   // ── MÉDIO ──
   it("should handle negatives, floats, and non-invertible cases", () => {
      // Negativos normalizam: -4 ≡ 3 (mod 7)
      expect(modInverse(-4, 7)).toBe(modInverse(3, 7));

      // Floats truncam
      expect(modInverse(3.9, 7.9)).toBe(modInverse(3, 7));

      // Inverso NÃO existe quando gcd(a, m) > 1
      expect(modInverse(4, 8)).toBeNaN(); // gcd = 4
      expect(modInverse(6, 9)).toBeNaN(); // gcd = 3
      expect(modInverse(0, 7)).toBeNaN(); // 0 nunca tem inverso

      // Módulo inválido
      expect(modInverse(3, 1)).toBeNaN();
      expect(modInverse(3, 0)).toBeNaN();
      expect(modInverse(3, -7)).toBeNaN();
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with mod, multiply, and coprime (dogfooding)", () => {
      // A DEFINIÇÃO: mod(a × modInverse(a, m), m) === 1 — varredura
      for (const [a, m] of [
         [3, 7],
         [5, 12],
         [7, 26],
         [11, 100],
         [17, 3120],
      ]) {
         const inv = modInverse(a, m);
         expect(mod(multiply(a, inv), m)).toBe(1);
      }

      // Existe inverso <=> coprime(a, m) — varredura completa mod 12
      for (let a = 1; a < 12; a++) {
         const exists = !Number.isNaN(modInverse(a, 12));
         expect(exists).toBe(coprime(a, 12));
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with special values and primes", () => {
      expect(modInverse(NaN, 7)).toBeNaN();
      expect(modInverse(3, NaN)).toBeNaN();
      expect(modInverse(Infinity, 7)).toBeNaN();
      expect(modInverse(3, -Infinity)).toBeNaN();

      // Módulo primo: TODO a em [1, p) tem inverso (corpo finito!)
      for (let a = 1; a < 13; a++) {
         const inv = modInverse(a, 13);
         expect(inv).toBeGreaterThanOrEqual(1);
         expect(inv).toBeLessThan(13);
         expect(mod(multiply(a, inv), 13)).toBe(1);
      }

      // a ≡ 1 (mod m): inverso é 1
      expect(modInverse(8, 7)).toBe(1);
      expect(modInverse(101, 100)).toBe(1);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with large moduli", () => {
      // Primo grande: inverso via Fermat bate com Euclides estendido
      // a^(p-2) mod p === modInverse(a, p) — ponte com modPow!
      const p = 1000003;
      for (const a of [2, 7, 123456, 999999]) {
         expect(modInverse(a, p)).toBe(modPow(a, p - 2, p));
      }

      // Módulo composto gigante
      expect(coprime(12345, 67890124)).toBe(true);
      const inv = modInverse(12345, 67890124);
      expect(mod(multiply(12345, inv), 67890124)).toBe(1);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (RSA key generation!)", () => {
      // p = 53, q = 61 (descobertos pela primeFactors!), n = 3233
      // φ(n) = (p-1)(q-1) = 52 × 60 = 3120, e = 17
      // d = modInverse(e, φ) — a chave privada NASCE aqui:
      const phi = multiply(53 - 1, 61 - 1);
      expect(phi).toBe(3120);
      const d = modInverse(17, phi);
      expect(d).toBe(2753);

      // E o ciclo completo: encriptar e decriptar com a chave recém-criada
      const message = 65;
      const encrypted = modPow(message, 17, 3233);
      expect(encrypted).toBe(2790);
      expect(modPow(encrypted, d, 3233)).toBe(message);

      // Lei 1: involução — o inverso do inverso é o próprio número
      for (let a = 1; a < 26; a++) {
         if (coprime(a, 26)) {
            expect(modInverse(modInverse(a, 26), 26)).toBe(a);
         }
      }

      // Lei 2: multiplicatividade — inv(a×b) ≡ inv(a)×inv(b) (mod m)
      const m = 101; // primo
      for (const [a, b] of [
         [3, 7],
         [12, 45],
         [88, 99],
      ]) {
         const left = modInverse(mod(multiply(a, b), m), m);
         const right = mod(multiply(modInverse(a, m), modInverse(b, m)), m);
         expect(left).toBe(right);
      }

      // Lei 3: teorema de Wilson via pareamento — em módulo primo p,
      // cada elemento de [2, p-2] pareia com inverso DIFERENTE de si,
      // exceto 1 e p-1 (auto-inversos)
      const prime = 23;
      expect(modInverse(1, prime)).toBe(1);
      expect(modInverse(prime - 1, prime)).toBe(prime - 1);
      let selfInverse = 0;
      for (let a = 1; a < prime; a++) {
         if (modInverse(a, prime) === a) selfInverse++;
      }
      expect(selfInverse).toBe(2); // só 1 e 22

      // Lei 4: divisão modular finalmente possível!
      // "15 / 7" mod 26 = 15 × inv(7) — e multiplicar de volta recupera 15
      const quotient = mod(multiply(15, modInverse(7, 26)), 26);
      expect(mod(multiply(quotient, 7), 26)).toBe(15);
   });
});

//--

describe("Function: permutations", () => {
   // ── BÁSICO ──
   it("should calculate simple permutation counts", () => {
      expect(permutations(5, 2)).toBe(20); // 5 × 4
      expect(permutations(6, 3)).toBe(120); // 6 × 5 × 4
      expect(permutations(10, 1)).toBe(10);
      expect(permutations(4, 4)).toBe(24); // arranjo completo = 4!
   });

   // ── MÉDIO ──
   it("should handle edges, out-of-range k, negatives, and floats", () => {
      // k = 0: arranjo vazio, exatamente 1 maneira
      expect(permutations(7, 0)).toBe(1);
      expect(permutations(0, 0)).toBe(1);

      // k fora do intervalo: zero maneiras
      expect(permutations(5, 6)).toBe(0);
      expect(permutations(5, -1)).toBe(0);

      // n negativo: domínio inválido
      expect(permutations(-5, 2)).toBeNaN();

      // Floats truncam
      expect(permutations(5.9, 2.7)).toBe(20); // P(5, 2)
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with factorial and binomial (dogfooding)", () => {
      // P(n, n) === factorial(n) — arranjo completo
      for (let n = 0; n <= 15; n++) {
         expect(permutations(n, n)).toBe(factorial(n));
      }

      // A TRÍADE SAGRADA: P(n, k) === C(n, k) × k!
      for (let n = 0; n <= 20; n++) {
         for (let k = 0; k <= n; k++) {
            expect(permutations(n, k)).toBe(
               multiply(binomial(n, k), factorial(k)),
            );
         }
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with special values", () => {
      expect(permutations(NaN, 2)).toBeNaN();
      expect(permutations(5, NaN)).toBeNaN();
      expect(permutations(Infinity, 2)).toBeNaN();
      expect(permutations(5, -Infinity)).toBeNaN();

      // P(n, 1) = n e P(n, 2) = n(n-1) — varreduras
      for (let n = 1; n <= 50; n++) {
         expect(permutations(n, 1)).toBe(n);
         expect(permutations(n, 2)).toBe(multiply(n, n - 1));
      }
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality beyond factorial's exact range", () => {
      // factorial(19) já não é exato; P(50, 5) passa LONGE do fatorial:
      expect(permutations(50, 5)).toBe(254251200);
      expect(permutations(100, 4)).toBe(94109400);
      expect(permutations(1000, 3)).toBe(997002000);

      // Pódio da Fórmula 1: 20 pilotos, 3 posições
      expect(permutations(20, 3)).toBe(6840);

      // Senha de 4 dígitos sem repetição
      expect(permutations(10, 4)).toBe(5040);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (arrangement laws at scale)", () => {
      // Lei 1: recorrência multiplicativa — P(n, k) = P(n, k-1) × (n - k + 1)
      for (let n = 1; n <= 30; n++) {
         for (let k = 1; k <= n; k++) {
            expect(permutations(n, k)).toBe(
               multiply(permutations(n, k - 1), n - k + 1),
            );
         }
      }

      // Lei 2: recorrência em n — P(n, k) = P(n-1, k) × n / (n - k)
      // reescrita sem divisão: P(n, k) × (n - k) === P(n-1, k) × n
      // (n <= 18 mantém tudo na zona de inteiros exatos, abaixo de 2^53)
      for (let n = 2; n <= 18; n++) {
         for (let k = 0; k < n; k++) {
            expect(multiply(permutations(n, k), n - k)).toBe(
               multiply(permutations(n - 1, k), n),
            );
         }
      }

      // Lei 3: razão entre vizinhos — P(n, k) / C(n, k) === k! (varredura)
      for (let n = 1; n <= 18; n++) {
         for (let k = 0; k <= n; k++) {
            expect(divide(permutations(n, k), binomial(n, k))).toBe(
               factorial(k),
            );
         }
      }

      // Lei 4: P(n, k) é sempre divisível por P(m, k) quando os intervalos
      // se aninham... versão simples: P(n, 2) é sempre PAR (n e n-1: um é par!)
      for (let n = 2; n <= 100; n++) {
         expect(isEven(permutations(n, 2))).toBe(true);
      }

      // Lei 5: contagem manual — gerar TODOS os arranjos de k=2 num conjunto
      // pequeno e conferir que a contagem bate (prova por força bruta!)
      const set = [1, 2, 3, 4, 5, 6, 7];
      let count = 0;
      for (const a of set) {
         for (const b of set) {
            if (a !== b) count++;
         }
      }
      expect(permutations(7, 2)).toBe(count); // 42 arranjos de verdade
   });
});

//--

describe("Function: totient", () => {
   // ── BÁSICO ──
   it("should calculate simple totient values", () => {
      expect(totient(9)).toBe(6); // 1,2,4,5,7,8
      expect(totient(10)).toBe(4); // 1,3,7,9
      expect(totient(12)).toBe(4); // 1,5,7,11
      expect(totient(1)).toBe(1); // convenção
   });

   // ── MÉDIO ──
   it("should handle primes, prime powers, edges, and floats", () => {
      // Primos: φ(p) = p - 1 (todos abaixo são coprimos)
      expect(totient(7)).toBe(6);
      expect(totient(13)).toBe(12);
      expect(totient(97)).toBe(96);

      // Potências de primo: φ(p^k) = p^k - p^(k-1)
      expect(totient(8)).toBe(4); // 2³ - 2²
      expect(totient(27)).toBe(18); // 3³ - 3²
      expect(totient(625)).toBe(500); // 5⁴ - 5³

      // Domínio inválido
      expect(totient(0)).toBeNaN();
      expect(totient(-10)).toBeNaN();

      // Floats truncam
      expect(totient(9.9)).toBe(6);
   });

   // ── INTERMEDIÁRIO ──
   it("should match the brute-force definition via coprime (dogfooding)", () => {
      // A DEFINIÇÃO LITERAL: contar coprimos em [1, n] — varredura 1 a 100
      for (let n = 1; n <= 100; n++) {
         let count = 0;
         for (let k = 1; k <= n; k++) {
            if (coprime(k, n)) count++;
         }
         expect(totient(n)).toBe(count);
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with special values and parity", () => {
      expect(totient(NaN)).toBeNaN();
      expect(totient(Infinity)).toBeNaN();
      expect(totient(-Infinity)).toBeNaN();

      // φ(n) é PAR para todo n > 2 (coprimos pareiam: k com n-k)
      for (let n = 3; n <= 200; n++) {
         expect(isEven(totient(n))).toBe(true);
      }

      // Multiplicatividade: φ(a×b) = φ(a)×φ(b) quando coprime(a, b)
      for (const [a, b] of [
         [9, 10],
         [7, 8],
         [25, 12],
         [11, 13],
      ]) {
         expect(coprime(a, b)).toBe(true);
         expect(totient(multiply(a, b))).toBe(multiply(totient(a), totient(b)));
      }
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with large arguments", () => {
      // Primorial 9699690 = 2×3×5×7×11×13×17×19
      // φ = 1×2×4×6×10×12×16×18 = 1658880
      expect(totient(9699690)).toBe(1658880);

      // Potência de 2 gigante: φ(2^40) = 2^39
      expect(totient(power(2, 40))).toBe(power(2, 39));

      // Primo grande: φ(p) = p - 1
      expect(totient(1000003)).toBe(1000002);

      // Quadrado de primo grande: φ(p²) = p² - p
      expect(totient(1000003 * 1000003)).toBe(1000003 * 1000003 - 1000003);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (Euler's theorem & RSA reunion)", () => {
      // ★ O REENCONTRO: φ(3233) = 3120 — o número que ontem calculamos
      // NA MÃO como (53-1)×(61-1), agora a lib descobre SOZINHA ★
      expect(totient(3233)).toBe(3120);

      // E a cadeia RSA inteira, agora 100% automática:
      // totient -> modInverse -> modPow -> roundtrip
      const phi = totient(3233);
      const d = modInverse(17, phi);
      expect(d).toBe(2753);
      expect(modPow(modPow(65, 17, 3233), d, 3233)).toBe(65);

      // TEOREMA DE EULER: a^φ(n) ≡ 1 (mod n) para todo a coprimo com n
      // — a generalização de Fermat, validada em varredura via modPow
      for (const n of [9, 10, 15, 21, 35, 100]) {
         const phiN = totient(n);
         for (let a = 2; a < n; a++) {
            if (coprime(a, n)) {
               expect(modPow(a, phiN, n)).toBe(1);
            }
         }
      }

      // TEOREMA DE GAUSS: Σ φ(d) sobre todos os divisores d de n === n
      // — a identidade mais elegante da teoria, via divisors + sum!
      for (const n of [12, 36, 60, 100, 360, 1000]) {
         const phiSum = sum(...divisors(n).map((d) => totient(d)));
         expect(phiSum).toBe(n);
      }

      // Caso especial de Fermat: para primo p, Euler vira o pequeno teorema
      expect(totient(13)).toBe(12);
      expect(modPow(7, 12, 13)).toBe(1);
   });
});

//--

describe("Function: median", () => {
   // ── BÁSICO ──
   it("should find the median of simple datasets", () => {
      expect(median(1, 2, 3)).toBe(2);
      expect(median(3, 1, 2)).toBe(2); // ordem irrelevante
      expect(median(1, 2, 3, 4)).toBe(2.5); // par: média dos dois do meio
      expect(median(7)).toBe(7); // único elemento
   });

   // ── MÉDIO ──
   it("should handle negatives, duplicates, floats, and string-sort traps", () => {
      // A ARMADILHA DO SORT PADRÃO: como strings, [10, 2, 1] -> [1, 10, 2]!
      expect(median(10, 2, 1)).toBe(2);
      expect(median(100, 20, 3)).toBe(20);
      expect(median(1, 5, 10, 100)).toBe(7.5);

      // Negativos
      expect(median(-5, -1, -3)).toBe(-3);
      expect(median(-10, 0, 10)).toBe(0);

      // Duplicatas
      expect(median(2, 2, 2, 2)).toBe(2);
      expect(median(1, 2, 2, 3)).toBe(2);

      // Floats
      expect(median(1.5, 2.5, 3.5)).toBe(2.5);
      expect(median(0.1, 0.2)).toBeCloseTo(0.15, 12);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with mean, min, and max (dogfooding)", () => {
      // Para 2 elementos, mediana === média
      for (const [a, b] of [
         [3, 7],
         [-2, 9],
         [0.5, 8.5],
         [100, 200],
      ]) {
         expect(median(a, b)).toBe(mean(a, b));
      }

      // Mediana sempre entre min e max — varredura com datasets variados
      const datasets = [
         [4, 8, 15, 16, 23, 42],
         [-50, 3, 99, 1, 7],
         [3.14, 2.71, 1.41, 1.61],
      ];
      for (const data of datasets) {
         const m = median(...data);
         expect(m).toBeGreaterThanOrEqual(min(...data));
         expect(m).toBeLessThanOrEqual(max(...data));
      }

      // Dataset simétrico: mediana === média (sem assimetria)
      expect(median(1, 2, 3, 4, 5)).toBe(mean(1, 2, 3, 4, 5));
      expect(median(10, 20, 30)).toBe(mean(10, 20, 30));
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with special values and immutability", () => {
      // Vazio e NaN
      expect(median()).toBeNaN();
      expect(median(1, NaN, 3)).toBeNaN();

      // Infinity é ordenável e honesto
      expect(median(1, 2, Infinity)).toBe(2);
      expect(median(-Infinity, 5, 10)).toBe(5);
      expect(median(-Infinity, Infinity)).toBeNaN(); // (−∞+∞)/2 = NaN, correto!

      // IMUTABILIDADE: o array original NÃO pode ser tocado
      const original = [5, 1, 4, 2, 3];
      const snapshot = [...original];
      median(...original);
      expect(original).toEqual(snapshot);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with outliers (the median's superpower)", () => {
      // O SUPERPODER: outliers não movem a mediana
      expect(median(1, 2, 3, 1000)).toBe(2.5);
      expect(median(1, 2, 3, 1e15)).toBe(2.5);
      expect(median(-1e15, 1, 2, 3, 1e15)).toBe(2);

      // Compare com a média, que é arrastada:
      expect(mean(1, 2, 3, 1000)).toBe(251.5); // distorcida!
      expect(median(1, 2, 3, 1000)).toBe(2.5); // firme!

      // Dataset grande: 1001 valores, mediana exata no meio
      const big = Array.from({ length: 1001 }, (_, i) => i); // 0..1000
      expect(median(...big)).toBe(500);

      // Mesmo embaralhado (ordem reversa)
      const reversed = [...big].reverse();
      expect(median(...reversed)).toBe(500);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (median laws at scale)", () => {
      // Lei 1: invariância por embaralhamento — qualquer permutação, mesma mediana
      const data = [13, 7, 42, 1, 99, 8, 23];
      const expected = median(...data);
      const shuffles = [
         [7, 13, 1, 42, 8, 99, 23],
         [99, 42, 23, 13, 8, 7, 1],
         [1, 99, 7, 23, 42, 13, 8],
      ];
      for (const s of shuffles) {
         expect(median(...s)).toBe(expected);
      }

      // Lei 2: equivariância afim — median(a×x + b) === a×median(x) + b
      for (const [a, b] of [
         [2, 0],
         [1, 10],
         [-3, 5],
         [0.5, -7],
      ]) {
         const transformed = data.map((x) => sum(multiply(a, x), b));
         expect(median(...transformed)).toBeCloseTo(
            sum(multiply(a, expected), b),
            10,
         );
      }

      // Lei 3: a mediana minimiza a soma das distâncias absolutas
      // (a média minimiza quadrados; a mediana, módulos!)
      const points = [1, 3, 7, 12, 30];
      const m = median(...points);
      const sumAbsDist = (c: number) =>
         sum(...points.map((p) => absolute(p - c)));
      const atMedian = sumAbsDist(m);
      for (const candidate of [m - 2, m - 1, m + 1, m + 2, mean(...points)]) {
         expect(atMedian).toBeLessThanOrEqual(sumAbsDist(candidate));
      }

      // Lei 4: partição — no máximo metade está estritamente abaixo,
      // no máximo metade estritamente acima (varredura com datasets ímpares)
      for (const ds of [
         [5, 1, 9, 3, 7],
         [10, 20, 30],
         [2, 4, 6, 8, 10, 12, 14],
      ]) {
         const md = median(...ds);
         const below = ds.filter((x) => x < md).length;
         const above = ds.filter((x) => x > md).length;
         expect(below).toBeLessThanOrEqual(ds.length / 2);
         expect(above).toBeLessThanOrEqual(ds.length / 2);
      }

      // Lei 5: concatenar o dataset com ele mesmo não muda a mediana
      expect(median(...data, ...data)).toBe(expected);
   });
});

//--

describe("Function: min", () => {
   // ── BÁSICO ──
   it("should find the smallest of simple numbers", () => {
      expect(min(3, 1, 4)).toBe(1);
      expect(min(10, 20)).toBe(10);
      expect(min(7)).toBe(7);
      expect(min(5, 5, 5)).toBe(5);
   });

   // ── MÉDIO ──
   it("should handle negatives, floats, zeros, and the empty case", () => {
      expect(min(-3, -1, -4)).toBe(-4);
      expect(min(-10, 0, 10)).toBe(-10);
      expect(min(0.1, 0.01, 0.001)).toBe(0.001);
      expect(min(0, -0)).toBe(-0);

      // Vazio: NaN (NÃO Infinity como Math.min!)
      expect(min()).toBeNaN();
      expect(Math.min()).toBe(Infinity); // a surpresa que evitamos
   });

   // ── BRUTO / BRUTALIDADE ──
   it("should pass a brutal stress test with special values and scale", () => {
      expect(min(1, NaN, 3)).toBeNaN();
      expect(min(-Infinity, 0, 5)).toBe(-Infinity);
      expect(min(Infinity, 42)).toBe(42);

      // 10001 valores
      const big = Array.from({ length: 10001 }, (_, i) => i - 5000);
      expect(min(...big)).toBe(-5000);
   });
});

//--

describe("Function: max", () => {
   // ── BÁSICO ──
   it("should find the largest of simple numbers", () => {
      expect(max(3, 1, 4)).toBe(4);
      expect(max(10, 20)).toBe(20);
      expect(max(7)).toBe(7);
      expect(max(5, 5, 5)).toBe(5);
   });

   // ── MÉDIO ──
   it("should handle negatives, floats, zeros, and the empty case", () => {
      expect(max(-3, -1, -4)).toBe(-1);
      expect(max(-10, 0, 10)).toBe(10);
      expect(max(0.1, 0.01, 0.001)).toBe(0.1);
      expect(max(0, -0)).toBe(0);

      // Vazio: NaN (NÃO -Infinity como Math.max!)
      expect(max()).toBeNaN();
      expect(Math.max()).toBe(-Infinity); // a surpresa que evitamos
   });

   // ── BRUTO / BRUTALIDADE ──
   it("should pass a brutal stress test with special values and scale", () => {
      expect(max(1, NaN, 3)).toBeNaN();
      expect(max(Infinity, 0, 5)).toBe(Infinity);
      expect(max(-Infinity, 42)).toBe(42);

      const big = Array.from({ length: 10001 }, (_, i) => i - 5000);
      expect(max(...big)).toBe(5000);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA (das duas juntas) ──
   it("should withstand the definitive nuclear explosion (order duality laws)", () => {
      const datasets = [
         [4, 8, 15, 16, 23, 42],
         [-50, 3, 99, 1, 7],
         [3.14, -2.71, 1.41],
         [7],
      ];

      for (const data of datasets) {
         const lo = min(...data);
         const hi = max(...data);

         // Lei 1: min <= max sempre, e ambos pertencem ao dataset
         expect(lo).toBeLessThanOrEqual(hi);
         expect(data).toContain(lo);
         expect(data).toContain(hi);

         // Lei 2: DUALIDADE — min(x) === -max(-x)
         expect(lo).toBe(-max(...data.map((x) => -x)));
         expect(hi).toBe(-min(...data.map((x) => -x)));

         // Lei 3: sanduíche — todo elemento está em [min, max]
         for (const x of data) {
            expect(x).toBeGreaterThanOrEqual(lo);
            expect(x).toBeLessThanOrEqual(hi);
         }

         // Lei 4: idempotência — min/max do próprio resultado
         expect(min(lo, hi)).toBe(lo);
         expect(max(lo, hi)).toBe(hi);

         // Lei 5: ponte com a família — mean e median entre min e max
         expect(mean(...data)).toBeGreaterThanOrEqual(lo);
         expect(mean(...data)).toBeLessThanOrEqual(hi);
         expect(median(...data)).toBeGreaterThanOrEqual(lo);
         expect(median(...data)).toBeLessThanOrEqual(hi);

         // Lei 6: clamp com [min, max] é identidade para membros do dataset
         for (const x of data) {
            expect(clamp(x, lo, hi)).toBe(x);
         }
      }

      // Lei 7: invariância por concatenação duplicada
      expect(min(1, 5, 3, 1, 5, 3)).toBe(1);
      expect(max(1, 5, 3, 1, 5, 3)).toBe(5);
   });
});

//--

describe("Function: variance", () => {
   // ── BÁSICO ──
   it("should calculate the variance of simple datasets", () => {
      expect(variance(2, 4, 4, 4, 5, 5, 7, 9)).toBe(4); // o clássico da Wikipédia
      expect(variance(1, 2, 3, 4, 5)).toBe(2);
      expect(variance(10, 10, 10)).toBe(0); // sem dispersão
      expect(variance(7)).toBe(0); // único valor: zero espalhamento
   });

   // ── MÉDIO ──
   it("should handle negatives, floats, and symmetric datasets", () => {
      // Variância nunca é negativa, e ignora o "lado" dos desvios
      expect(variance(-2, 2)).toBe(4);
      expect(variance(-1, -2, -3, -4, -5)).toBe(2); // espelho de 1..5: MESMA variância

      // Floats
      expect(variance(0.5, 1.5)).toBe(0.25);
      expect(variance(1.5, 2.5, 3.5)).toBeCloseTo(variance(1, 2, 3), 12);

      // Vazio e NaN
      expect(variance()).toBeNaN();
      expect(variance(1, NaN, 3)).toBeNaN();
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with mean and sumOfSquares (dogfooding)", () => {
      // Definição: média dos desvios ao quadrado
      const data = [4, 8, 15, 16, 23, 42];
      const avg = mean(...data);
      const manual = divide(
         sumOfSquares(...data.map((x) => x - avg)),
         data.length,
      );
      expect(variance(...data)).toBe(manual);

      // A média dos desvios é SEMPRE zero (por isso elevamos ao quadrado!)
      expect(mean(...data.map((x) => x - avg))).toBeCloseTo(0, 10);

      // Identidade E[X²] - E[X]²: válida na zona numérica segura
      expect(variance(...data)).toBeCloseTo(
         mean(...data.map((x) => x * x)) - power(avg, 2),
         8,
      );
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with special values", () => {
      expect(variance(Infinity, 1)).toBeNaN(); // desvio infinito: ∞ - ∞ aparece
      expect(variance(-Infinity, 5)).toBeNaN();

      // Constantes deslocadas: variância zero em qualquer patamar
      for (const c of [0, -50, 1e6, 0.001]) {
         expect(variance(c, c, c, c)).toBe(0);
      }

      // Dois pontos: variância = (d/2)² onde d é a distância
      for (const [a, b] of [
         [0, 10],
         [-5, 5],
         [100, 104],
      ]) {
         const half = divide(b - a, 2);
         expect(variance(a, b)).toBeCloseTo(power(half, 2), 10);
      }
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality where one-pass formulas DIE", () => {
      // ★ O CANCELAMENTO CATASTRÓFICO ★
      // Valores ~1e8 com dispersão minúscula: E[X²]-E[X]² subtrairia
      // ~1e16 de ~1e16 e devolveria lixo. O two-pass é imune:
      expect(variance(1e8, 1e8 + 1, 1e8 + 2)).toBeCloseTo(2 / 3, 6);

      // Pior ainda: 1e12 com desvios unitários
      expect(variance(1e12, 1e12 + 2)).toBeCloseTo(1, 4);

      // E a prova de que a one-pass quebraria (cálculo manual do desastre):
      const data = [1e8, 1e8 + 1, 1e8 + 2];
      const onePass = mean(...data.map((x) => x * x)) - power(mean(...data), 2);
      // one-pass dá um valor degradado; two-pass dá 2/3 exato até 6 casas.
      // Documentamos que elas DIVERGEM nessa escala:
      expect(Math.abs(onePass - 2 / 3)).toBeGreaterThan(1e-7);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (variance laws at scale)", () => {
      const data = [13, 7, 42, 1, 99, 8, 23];
      const baseVar = variance(...data);

      // Lei 1: invariância por TRANSLAÇÃO — deslocar tudo não muda a dispersão
      for (const shift of [10, -50, 1e6, 0.5]) {
         expect(variance(...data.map((x) => x + shift))).toBeCloseTo(
            baseVar,
            6,
         );
      }

      // Lei 2: ESCALA QUADRÁTICA — multiplicar por k multiplica σ² por k²
      for (const k of [2, -3, 0.5, 10]) {
         expect(variance(...data.map((x) => multiply(x, k)))).toBeCloseTo(
            multiply(baseVar, power(k, 2)),
            6,
         );
      }

      // Lei 3: não-negatividade — varredura com datasets aleatórios fixos
      const randomish = [
         [3, 1, 4, 1, 5, 9, 2, 6],
         [-7, 0, 7, 14, -14],
         [0.1, 0.2, 0.3],
         [1000, 2000, 1500],
      ];
      for (const ds of randomish) {
         expect(variance(...ds)).toBeGreaterThanOrEqual(0);
      }

      // Lei 4: duplicar o dataset preserva a variância populacional
      expect(variance(...data, ...data)).toBeCloseTo(baseVar, 10);

      // Lei 5: a média MINIMIZA a soma dos desvios quadrados
      // (a propriedade variacional gêmea da que vimos na median!)
      const points = [1, 3, 7, 12, 30];
      const m = mean(...points);
      const sumSq = (c: number) => sumOfSquares(...points.map((p) => p - c));
      const atMean = sumSq(m);
      for (const candidate of [m - 2, m - 1, m + 1, m + 2, median(...points)]) {
         expect(atMean).toBeLessThanOrEqual(sumSq(candidate));
      }

      // Lei 6: ponte com hypot! σ²×n = hypot(desvios)²
      const avg = mean(...data);
      const devs = data.map((x) => x - avg);
      expect(multiply(baseVar, data.length)).toBeCloseTo(
         power(hypot(...devs), 2),
         8,
      );
   });
});

//--

describe("Function: standardDeviation", () => {
   // ── BÁSICO ──
   it("should calculate the standard deviation of simple datasets", () => {
      expect(standardDeviation(2, 4, 4, 4, 5, 5, 7, 9)).toBe(2);
      expect(standardDeviation(10, 10, 10)).toBe(0);
      expect(standardDeviation(7)).toBe(0);
      expect(standardDeviation(-2, 2)).toBe(2);
   });

   // ── MÉDIO ──
   it("should handle negatives, floats, and edge cases", () => {
      // Mesma unidade dos dados: dois pontos a distância d -> σ = d/2
      expect(standardDeviation(0, 10)).toBe(5);
      expect(standardDeviation(-5, 5)).toBe(5);
      expect(standardDeviation(100, 104)).toBe(2);

      // Espelho: mesma dispersão
      expect(standardDeviation(1, 2, 3)).toBeCloseTo(
         standardDeviation(-1, -2, -3),
         12,
      );

      // Vazio e NaN
      expect(standardDeviation()).toBeNaN();
      expect(standardDeviation(1, NaN, 3)).toBeNaN();
      expect(standardDeviation(Infinity, 1)).toBeNaN();
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with variance and sqrt (dogfooding)", () => {
      // Definição: σ === sqrt(σ²) — varredura
      const datasets = [
         [4, 8, 15, 16, 23, 42],
         [-7, 0, 7, 14, -14],
         [3.14, 2.71, 1.41, 1.61],
         [1e8, 1e8 + 1, 1e8 + 2], // herdando a imunidade ao cancelamento!
      ];
      for (const data of datasets) {
         expect(standardDeviation(...data)).toBe(sqrt(variance(...data)));
      }

      // Roundtrip: σ² de volta via power
      const data = [13, 7, 42, 1, 99];
      expect(power(standardDeviation(...data), 2)).toBeCloseTo(
         variance(...data),
         8,
      );
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with translation invariance", () => {
      const data = [3, 1, 4, 1, 5, 9, 2, 6];
      const baseSigma = standardDeviation(...data);

      // Translação não muda σ (igual à variance)
      for (const shift of [10, -50, 1e6]) {
         expect(standardDeviation(...data.map((x) => x + shift))).toBeCloseTo(
            baseSigma,
            6,
         );
      }

      // σ nunca é negativo nem NaN em dados válidos
      expect(baseSigma).toBeGreaterThanOrEqual(0);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with LINEAR scaling (the key contrast)", () => {
      const data = [13, 7, 42, 1, 99, 8, 23];
      const baseSigma = standardDeviation(...data);

      // ★ O CONTRASTE-CHAVE: σ escala LINEAR (|k|), variância escala k² ★
      for (const k of [2, -3, 0.5, 10]) {
         expect(
            standardDeviation(...data.map((x) => multiply(x, k))),
         ).toBeCloseTo(multiply(baseSigma, absolute(k)), 6);
      }

      // k negativo NÃO inverte σ (dispersão não tem sinal!)
      expect(standardDeviation(...data.map((x) => -x))).toBeCloseTo(
         baseSigma,
         10,
      );
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (z-scores & Chebyshev)", () => {
      const data = [13, 7, 42, 1, 99, 8, 23, 56, 31, 18];
      const mu = mean(...data);
      const sigma = standardDeviation(...data);

      // Lei 1: Z-SCORES — padronizar (x-μ)/σ produz dataset com μ=0 e σ=1
      // (a transformação fundamental de TODA a estatística!)
      const zScores = data.map((x) => divide(x - mu, sigma));
      expect(mean(...zScores)).toBeCloseTo(0, 10);
      expect(standardDeviation(...zScores)).toBeCloseTo(1, 10);

      // Lei 2: DESIGUALDADE DE CHEBYSHEV — no máximo 1/k² dos pontos
      // ficam a mais de k desvios da média (vale pra QUALQUER distribuição)
      for (const k of [1.5, 2, 3]) {
         const far = data.filter(
            (x) => absolute(x - mu) > multiply(k, sigma),
         ).length;
         expect(far / data.length).toBeLessThanOrEqual(1 / power(k, 2) + 1e-12);
      }

      // Lei 3: σ <= metade da amplitude (range) — sempre
      const range = max(...data) - min(...data);
      expect(sigma).toBeLessThanOrEqual(divide(range, 2));

      // Lei 4: desigualdade média-σ — σ >= |média dos desvios absolutos|...
      // versão testável: MAD (desvio absoluto médio) <= σ (Cauchy-Schwarz!)
      const mad = mean(...data.map((x) => absolute(x - mu)));
      expect(mad).toBeLessThanOrEqual(sigma + 1e-12);

      // Lei 5: ponte tripla com hypot — σ = hypot(desvios) / sqrt(n)
      const devs = data.map((x) => x - mu);
      expect(sigma).toBeCloseTo(divide(hypot(...devs), sqrt(data.length)), 10);

      // Lei 6: concatenação dupla preserva σ (população)
      expect(standardDeviation(...data, ...data)).toBeCloseTo(sigma, 10);
   });
});

//--

describe("Function: mode", () => {
   // ── BÁSICO ──
   it("should find the most frequent value in simple datasets", () => {
      expect(mode(1, 2, 2, 3)).toEqual([2]);
      expect(mode(5, 5, 5, 1, 2)).toEqual([5]);
      expect(mode(7)).toEqual([7]);
      expect(mode(3, 3, 3, 3)).toEqual([3]);
   });

   // ── MÉDIO ──
   it("should handle multimodal datasets, ties, negatives, and floats", () => {
      // Bimodal: DUAS modas, ordenadas
      expect(mode(1, 1, 2, 2, 3)).toEqual([1, 2]);
      expect(mode(9, 9, 4, 4)).toEqual([4, 9]); // ordenação crescente!

      // Todos distintos: todos são moda (empate universal)
      expect(mode(1, 2, 3)).toEqual([1, 2, 3]);

      // Negativos e floats
      expect(mode(-1, -1, 5)).toEqual([-1]);
      expect(mode(0.5, 0.5, 1.5)).toEqual([0.5]);

      // 2 e 2.0 são o mesmo número em JS
      expect(mode(2, 2.0, 3)).toEqual([2]);

      // Vazio e NaN
      expect(mode()).toEqual([]);
      expect(mode(1, NaN, 1)).toEqual([]);
   });

   // ── INTERMEDIÁRIO ──
   it("should be consistent with the counting definition (dogfooding by brute force)", () => {
      // Contagem manual independente: a frequência da moda é máxima
      const data = [4, 7, 4, 9, 7, 4, 1, 9, 9, 4];
      const result = mode(...data);
      const countOf = (v: number) => data.filter((x) => x === v).length;

      // A moda retornada tem a maior contagem do dataset
      const topCount = countOf(result[0]);
      for (const x of data) {
         expect(countOf(x)).toBeLessThanOrEqual(topCount);
      }
      expect(result).toEqual([4]); // 4 aparece 4 vezes

      // Toda moda retornada tem a MESMA contagem (definição de empate)
      const multi = mode(8, 8, 3, 3, 5);
      for (const m of multi) {
         expect(countOf2(m)).toBe(countOf2(multi[0]));
      }
      function countOf2(v: number) {
         return [8, 8, 3, 3, 5].filter((x) => x === v).length;
      }
   });

   // ── BRUTO ──
   it("should pass a brutal stress test with special values and immutability", () => {
      // Infinity é contável como qualquer valor
      expect(mode(Infinity, Infinity, 1)).toEqual([Infinity]);
      expect(mode(-Infinity, -Infinity, 5, 5)).toEqual([-Infinity, 5]);

      // 0 e -0 colapsam (SameValueZero do Map)
      expect(mode(0, -0, 1)).toEqual([0]);

      // Ordem de chegada é irrelevante
      expect(mode(3, 1, 3, 2)).toEqual(mode(2, 3, 1, 3));

      // IMUTABILIDADE: input intocado
      const original = [5, 1, 5, 2];
      const snapshot = [...original];
      mode(...original);
      expect(original).toEqual(snapshot);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive maximum brutality with large skewed datasets", () => {
      // 10000 valores: 0..9998 distintos + um 42 extra -> moda única [42]
      const big = Array.from({ length: 9999 }, (_, i) => i);
      big.push(42);
      expect(mode(...big)).toEqual([42]);

      // Empate triplo no meio de milhares
      const tri = Array.from({ length: 3000 }, (_, i) => i);
      tri.push(7, 77, 777);
      expect(mode(...tri)).toEqual([7, 77, 777]);

      // Dataset constante gigante
      expect(mode(...Array(5000).fill(13))).toEqual([13]);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (mode laws & the trio reunion)", () => {
      // Lei 1: a moda sempre pertence ao dataset (mean e median podem não pertencer!)
      const datasets = [[3, 7, 3, 9, 3], [1, 1, 2, 2], [42], [5, -5, 5, 0]];
      for (const ds of datasets) {
         for (const m of mode(...ds)) {
            expect(ds).toContain(m);
         }
      }

      // Lei 2: invariância por embaralhamento
      const data = [4, 7, 4, 9, 7, 4];
      const expected = mode(...data);
      expect(mode(7, 4, 9, 4, 7, 4)).toEqual(expected);
      expect(mode(9, 7, 7, 4, 4, 4)).toEqual(expected);

      // Lei 3: equivariância afim — mode(a·x + b) === a·mode(x) + b (a > 0)
      for (const [a, b] of [
         [2, 0],
         [1, 10],
         [3, -5],
      ]) {
         const transformed = data.map((x) => sum(multiply(a, x), b));
         expect(mode(...transformed)).toEqual(
            expected.map((m) => sum(multiply(a, m), b)),
         );
      }

      // Lei 4: duplicar o dataset preserva as modas
      expect(mode(...data, ...data)).toEqual(expected);

      // Lei 5: adicionar uma cópia da moda NÃO muda a moda única
      expect(mode(...data, 4)).toEqual([4]);

      // ★ Lei 6: A REUNIÃO DO TRIO — num dataset simétrico unimodal,
      // mean === median === moda única (o retrato da normalidade!) ★
      const symmetric = [1, 2, 2, 3, 3, 3, 4, 4, 5]; // pirâmide centrada no 3
      expect(mode(...symmetric)).toEqual([3]);
      expect(median(...symmetric)).toBe(3);
      expect(mean(...symmetric)).toBe(3);

      // E num dataset ASSIMÉTRICO, os três se separam na ordem clássica:
      // moda < mediana < média (cauda à direita puxa a média)
      const skewed = [1, 1, 1, 2, 3, 10];
      const [theMode] = mode(...skewed);
      expect(theMode).toBeLessThan(median(...skewed));
      expect(median(...skewed)).toBeLessThan(mean(...skewed));
   });
});

//--

describe("Function: cumulativeSum", () => {
   // ── BÁSICO ──
   it("should return the running totals of simple positive integers", () => {
      expect(cumulativeSum(1, 2, 3, 4)).toEqual([1, 3, 6, 10]);
      expect(cumulativeSum(10, 20, 30)).toEqual([10, 30, 60]);
      expect(cumulativeSum(5)).toEqual([5]);
   });

   it("should return an empty array for an empty call", () => {
      // Vazio = [] — sem dados, sem totais (mesma semântica do numpy)
      expect(cumulativeSum()).toEqual([]);
   });

   it("should handle zeros without changing the running total", () => {
      expect(cumulativeSum(0, 0, 0)).toEqual([0, 0, 0]);
      expect(cumulativeSum(1, 0, 2, 0)).toEqual([1, 1, 3, 3]);
   });

   // ── MÉDIO ──
   it("should handle negative numbers and sign changes in the totals", () => {
      expect(cumulativeSum(-1, -2, -3)).toEqual([-1, -3, -6]);
      // Saldo que sobe e desce — caso clássico de extrato bancário
      expect(cumulativeSum(10, -5, 3, -8)).toEqual([10, 5, 8, 0]);
      expect(cumulativeSum(-10, 10, -10, 10)).toEqual([-10, 0, -10, 0]);
   });

   it("should accumulate floats with binary drift tolerance", () => {
      // 0.1 + 0.2 ≠ 0.3 exato em IEEE 754 — toBeCloseTo obrigatório
      const result = cumulativeSum(0.1, 0.2, 0.3);
      expect(result[0]).toBeCloseTo(0.1);
      expect(result[1]).toBeCloseTo(0.3);
      expect(result[2]).toBeCloseTo(0.6);
   });

   it("should preserve the length of the input sequence", () => {
      expect(cumulativeSum(1, 2, 3, 4, 5)).toHaveLength(5);
      expect(cumulativeSum(7)).toHaveLength(1);
      expect(cumulativeSum()).toHaveLength(0);
   });

   // ── INTERMEDIÁRIO ── (dogfooding com outras funções da lib)
   it("should end exactly at the total given by sum()", () => {
      // O último acumulado É a soma total — sum() como oráculo
      const values = [3, 7, 11, 19, 23];
      const result = cumulativeSum(...values);
      expect(result.at(-1)).toBe(sum(...values));
   });

   it("should relate its last element to mean() times the count", () => {
      // mean = total / n, logo último acumulado = mean × n
      const values = [4, 8, 15, 16, 23, 42];
      const result = cumulativeSum(...values);
      expect(result.at(-1)).toBe(mean(...values) * values.length);
   });

   it("should produce non-decreasing totals for non-negative inputs", () => {
      // Monotonicidade: somando só não-negativos, a série nunca desce
      const result = cumulativeSum(2, 0, 5, 1, 0, 9);
      for (let i = 1; i < result.length; i++) {
         expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
      }
   });

   // ── BRUTO ──
   it("should propagate NaN honestly from the first NaN onward", () => {
      const result = cumulativeSum(1, 2, NaN, 4);
      // Antes do NaN os totais permanecem válidos — informação preservada
      expect(result[0]).toBe(1);
      expect(result[1]).toBe(3);
      // A partir do dado podre, tudo é honestamente NaN
      expect(result[2]).toBeNaN();
      expect(result[3]).toBeNaN();
   });

   it("should propagate Infinity and yield NaN on opposing infinities", () => {
      const result = cumulativeSum(1, Infinity, 5);
      expect(result[0]).toBe(1);
      expect(result[1]).toBe(Infinity);
      expect(result[2]).toBe(Infinity);
      // Infinity + (-Infinity) é indeterminação → NaN honesto do IEEE 754
      const clash = cumulativeSum(Infinity, -Infinity);
      expect(clash[0]).toBe(Infinity);
      expect(clash[1]).toBeNaN();
   });

   it("should not mutate the spread source array", () => {
      // Imutabilidade: espalhar um array do usuário não pode alterá-lo
      const source = [3, 1, 4, 1, 5];
      const frozen = [...source];
      cumulativeSum(...source);
      expect(source).toEqual(frozen);
   });

   it("should stay exact inside the safe integer zone", () => {
      // 3 × 10^15 cada, total 9 × 10^15 < 2^53 ≈ 9.007 × 10^15 — toBe vale
      const big = 3_000_000_000_000_000;
      expect(cumulativeSum(big, big, big)).toEqual([big, big * 2, big * 3]);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive a 10,000-element series with exact totals", () => {
      // Série constante: acumulado em i deve ser exatamente 7 × (i+1)
      const values = new Array(10_000).fill(7);
      const result = cumulativeSum(...values);
      expect(result).toHaveLength(10_000);
      expect(result[0]).toBe(7);
      expect(result[4_999]).toBe(7 * 5_000);
      expect(result.at(-1)).toBe(70_000);
   });

   it("should cancel perfectly on large alternating values", () => {
      // +X, -X repetidos: acumulado oscila entre X e 0 sem drift (inteiros)
      const x = 1_000_000_000;
      const result = cumulativeSum(x, -x, x, -x, x, -x);
      expect(result).toEqual([x, 0, x, 0, x, 0]);
   });

   it("should recover every input via finite differences (inverse op)", () => {
      // diff(cumsum(xs)) === xs — as duas operações são inversas
      const values = [13, -7, 0, 42, -99, 3.5, 8];
      const result = cumulativeSum(...values);
      expect(result[0]).toBeCloseTo(values[0]);
      for (let i = 1; i < values.length; i++) {
         expect(result[i] - result[i - 1]).toBeCloseTo(values[i]);
      }
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (Fibonacci partial sums identity, triangular numbers and the cumsum↔diff inversion)", () => {
      // TEOREMA 1 — Identidade das somas parciais de Fibonacci:
      // F(1) + F(2) + ... + F(n) = F(n+2) − 1
      // O acumulado da série de Fibonacci é auditado pela própria
      // fibonacci() da lib como oráculo, em varredura até n = 70
      // (F(72) ainda está dentro da zona exata, < F(78) ≈ 2^53).
      const fibs: number[] = [];
      for (let n = 1; n <= 70; n++) {
         fibs.push(fibonacci(n));
      }
      const fibTotals = cumulativeSum(...fibs);
      for (let n = 1; n <= 70; n++) {
         expect(fibTotals[n - 1]).toBe(fibonacci(n + 2) - 1);
      }

      // TEOREMA 2 — Números triangulares via binomial():
      // 1 + 2 + ... + k = k(k+1)/2 = C(k+1, 2)
      // Cada posição do cumsum de 1..200 é um número triangular,
      // auditado pelo binomial() da lib (combinatória ↔ aritmética).
      const naturals: number[] = [];
      for (let k = 1; k <= 200; k++) {
         naturals.push(k);
      }
      const triangulars = cumulativeSum(...naturals);
      for (let k = 1; k <= 200; k++) {
         expect(triangulars[k - 1]).toBe(binomial(k + 1, 2));
      }

      // TEOREMA 3 — Inversão cumsum↔diff em varredura pseudo-aleatória:
      // para 100 séries de inteiros (gerador determinístico, sem flake),
      // as diferenças finitas recuperam a entrada e o último acumulado
      // coincide com o oráculo sum().
      let seed = 42;
      const nextInt = () => {
         // LCG simples e determinístico (Numerical Recipes)
         seed = (seed * 1_664_525 + 1_013_904_223) % 4_294_967_296;
         return (seed % 2_001) - 1_000; // inteiros em [-1000, 1000]
      };
      for (let run = 0; run < 100; run++) {
         const series: number[] = [];
         const length = 5 + (run % 46); // tamanhos variados: 5 a 50
         for (let i = 0; i < length; i++) {
            series.push(nextInt());
         }
         const totals = cumulativeSum(...series);

         // Último acumulado === soma total (oráculo: sum da lib)
         expect(totals.at(-1)).toBe(sum(...series));

         // Diferenças recuperam a série original (inteiros → toBe exato)
         expect(totals[0]).toBe(series[0]);
         for (let i = 1; i < length; i++) {
            expect(totals[i] - totals[i - 1]).toBe(series[i]);
         }
      }
   });
});

//--

describe("Function: deadzone", () => {
   // ── BÁSICO ──
   it("should collapse values inside the dead zone to zero", () => {
      expect(deadzone(0.05, 0.1)).toBe(0);
      expect(deadzone(-0.05, 0.1)).toBe(0);
      expect(deadzone(0, 0.25)).toBe(0);
   });

   it("should rescale values outside the dead zone continuously", () => {
      // (0.55 − 0.1) / (1 − 0.1) = 0.45 / 0.9 = 0.5
      expect(deadzone(0.55, 0.1)).toBeCloseTo(0.5);
      // (0.6 − 0.2) / 0.8 = 0.5
      expect(deadzone(0.6, 0.2)).toBeCloseTo(0.5);
   });

   it("should preserve full deflection at the ends of the axis", () => {
      // (1 − t)/(1 − t) é o MESMO valor float dividido por ele mesmo → 1 exato
      expect(deadzone(1, 0.1)).toBe(1);
      expect(deadzone(-1, 0.1)).toBe(-1);
      expect(deadzone(1, 0.5)).toBe(1);
   });

   it("should act as identity within [-1, 1] when threshold is zero", () => {
      // t = 0: (|v| − 0)/(1 − 0) = |v| — eixo intocado
      expect(deadzone(0.7, 0)).toBeCloseTo(0.7);
      expect(deadzone(-0.3, 0)).toBeCloseTo(-0.3);
      expect(deadzone(0, 0)).toBe(0);
   });

   // ── MÉDIO ──
   it("should return exactly zero at the threshold boundary", () => {
      // |v| === t pertence à zona morta (<=) — borda fechada
      expect(deadzone(0.1, 0.1)).toBe(0);
      expect(deadzone(-0.1, 0.1)).toBe(0);
   });

   it("should be symmetric in magnitude for opposite inputs", () => {
      // Simetria ímpar: o stick pra esquerda espelha o stick pra direita
      expect(absolute(deadzone(-0.73, 0.15))).toBeCloseTo(
         absolute(deadzone(0.73, 0.15)),
      );
      expect(deadzone(-0.55, 0.1)).toBeCloseTo(-0.5);
   });

   it("should handle typical gamepad drift scenarios", () => {
      // Drift real de analógico: ruído de ±0.08 com deadzone de 0.12
      expect(deadzone(0.08, 0.12)).toBe(0);
      expect(deadzone(-0.03, 0.12)).toBe(0);
      // Empurrão de verdade passa e é reescalado
      expect(deadzone(0.56, 0.12)).toBeCloseTo(0.5);
   });

   // ── INTERMEDIÁRIO ── (dogfooding com outras funções da lib)
   it("should match mapRange() as the rescaling oracle outside the zone", () => {
      // Fora da zona, deadzone(v, t) ≡ mapRange(v, t, 1, 0, 1):
      // a reescala contínua É um remapeamento linear de [t,1] → [0,1]
      const t = 0.2;
      for (const v of [0.25, 0.4, 0.5, 0.75, 0.9, 1]) {
         expect(deadzone(v, t)).toBeCloseTo(mapRange(v, t, 1, 0, 1));
      }
   });

   it("should agree with sign() for every output outside the zone", () => {
      // O sinal do output reproduz o sinal do input — sign() como oráculo
      expect(sign(deadzone(0.8, 0.1))).toBe(sign(0.8));
      expect(sign(deadzone(-0.8, 0.1))).toBe(sign(-0.8));
      expect(sign(deadzone(-0.4, 0.25))).toBe(-1);
   });

   it("should never exceed the magnitude given by absolute()", () => {
      // |deadzone(v, t)| <= |v| pra |v| <= 1: a reescala só encolhe
      for (const v of [-1, -0.7, -0.3, 0.3, 0.7, 1]) {
         expect(absolute(deadzone(v, 0.2))).toBeLessThanOrEqual(absolute(v));
      }
   });

   // ── BRUTO ──
   it("should return NaN for non-finite inputs", () => {
      expect(deadzone(NaN, 0.1)).toBeNaN();
      expect(deadzone(Infinity, 0.1)).toBeNaN();
      expect(deadzone(-Infinity, 0.1)).toBeNaN();
      expect(deadzone(0.5, NaN)).toBeNaN();
      expect(deadzone(0.5, Infinity)).toBeNaN();
   });

   it("should return NaN for invalid thresholds instead of lying", () => {
      // t >= 1 colapsaria o eixo inteiro (divisão por zero) → NaN honesto
      expect(deadzone(0.5, 1)).toBeNaN();
      expect(deadzone(0.5, 1.5)).toBeNaN();
      // t negativo não tem semântica de raio → NaN
      expect(deadzone(0.5, -0.1)).toBeNaN();
   });

   it("should clamp magnitudes beyond the nominal range to full deflection", () => {
      // Hardware reportando 1.0000001 (ou 2!) não pode vazar do range
      expect(deadzone(2, 0.1)).toBe(1);
      expect(deadzone(-5, 0.2)).toBe(-1);
      expect(deadzone(1.0000001, 0.1)).toBe(1);
   });

   it("should treat negative zero as plain zero inside the zone", () => {
      // -0 tem magnitude 0 → dentro da zona → 0 simples, sem -0 vazando
      expect(deadzone(-0, 0.1)).toBe(0);
      expect(Object.is(deadzone(-0, 0.1), -0)).toBe(false);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should remain strictly inside [-1, 1] across a dense axis sweep", () => {
      // 2.001 pontos de -1 a 1, três thresholds — output jamais vaza
      for (const t of [0.05, 0.3, 0.8]) {
         for (let i = -1000; i <= 1000; i++) {
            const v = i / 1000;
            const out = deadzone(v, t);
            expect(out).toBeGreaterThanOrEqual(-1);
            expect(out).toBeLessThanOrEqual(1);
         }
      }
   });

   it("should be monotonically non-decreasing along the whole axis", () => {
      // Stick mais empurrado JAMAIS produz output menor — exigência de UX
      const t = 0.25;
      let previous = deadzone(-1, t);
      for (let i = -999; i <= 1000; i++) {
         const current = deadzone(i / 1000, t);
         expect(current).toBeGreaterThanOrEqual(previous);
         previous = current;
      }
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (edge continuity limit, mapRange equivalence sweep and odd symmetry across 99 thresholds)", () => {
      // TEOREMA 1 — Continuidade na borda da zona morta:
      // lim(v → t⁺) deadzone(v, t) = 0. É ESSA propriedade que separa
      // a reescala contínua do deadzone ingênuo (que salta de 0 pra ~t).
      // Aproximação por 6 ordens de grandeza decrescentes de ε.
      for (const t of [0.1, 0.25, 0.5, 0.75, 0.9]) {
         for (let k = 3; k <= 8; k++) {
            const epsilon = 10 ** -k;
            const out = deadzone(t + epsilon, t);
            // O output deve encolher junto com ε (sem degrau): pra um
            // remap linear, deadzone(t + ε, t) = ε/(1 − t) EXATO —
            // auditamos contra o valor teórico em vez de um teto frouxo
            expect(out).toBeGreaterThan(0);
            expect(out).toBeCloseTo(epsilon / (1 - t), 12);
         }
      }

      // TEOREMA 2 — Equivalência total com mapRange em varredura:
      // 99 thresholds × 200 pontos fora da zona. A reescala contínua
      // é EXATAMENTE o remapeamento linear [t, 1] → [0, 1].
      for (let ti = 1; ti <= 99; ti++) {
         const t = ti / 100;
         for (let vi = 1; vi <= 200; vi++) {
            // v varre (t, 1] uniformemente
            const v = t + (vi / 200) * (1 - t);
            expect(deadzone(v, t)).toBeCloseTo(mapRange(v, t, 1, 0, 1), 12);
         }
      }

      // TEOREMA 3 — Simetria ímpar f(−v) = −f(v) fora da zona,
      // auditada por sign() e absolute() em varredura:
      for (let ti = 1; ti <= 99; ti += 7) {
         const t = ti / 100;
         for (let vi = 1; vi <= 100; vi++) {
            const v = t + (vi / 100) * (1 - t);
            const positive = deadzone(v, t);
            const negative = deadzone(-v, t);
            expect(negative).toBeCloseTo(-positive, 12);
            expect(sign(negative)).toBe(-sign(positive));
            expect(absolute(negative)).toBeCloseTo(absolute(positive), 12);
         }
      }
   });
});

//--

describe("Function: signedPow", () => {
   // ── BÁSICO ──
   it("should solve the classic NaN of fractional powers on negatives", () => {
      // (-4) ** 0.5 nativo dá NaN — a razão de existir desta função
      expect((-4) ** 0.5).toBeNaN();
      expect(signedPow(-4, 0.5)).toBeCloseTo(-2);
      expect(signedPow(4, 0.5)).toBeCloseTo(2);
   });

   it("should compute integer powers with the sign restored", () => {
      expect(signedPow(2, 10)).toBe(1024);
      expect(signedPow(-2, 10)).toBe(-1024);
      expect(signedPow(3, 3)).toBe(27);
      expect(signedPow(-3, 3)).toBe(-27);
   });

   it("should preserve the sign even for even exponents (the feature!)", () => {
      // Diferente do nativo: (-3)**2 = 9, mas signedPow(-3, 2) = -9.
      // É isso que mantém o stick indo pra esquerda após o easing.
      expect(signedPow(-3, 2)).toBe(-9);
      expect(signedPow(3, 2)).toBe(9);
      expect(signedPow(-5, 4)).toBe(-625);
   });

   it("should handle cube roots on negatives via fractional exponent", () => {
      expect(signedPow(-8, 1 / 3)).toBeCloseTo(-2);
      expect(signedPow(-27, 1 / 3)).toBeCloseTo(-3);
   });

   // ── MÉDIO ──
   it("should support negative exponents with sign preserved", () => {
      expect(signedPow(2, -2)).toBeCloseTo(0.25);
      expect(signedPow(-2, -2)).toBeCloseTo(-0.25);
      expect(signedPow(-4, -1)).toBeCloseTo(-0.25);
   });

   it("should return the sign of the base for exponent zero", () => {
      // |x|^0 = 1, logo signedPow(x, 0) = sign(x) — consequência honesta
      expect(signedPow(7, 0)).toBe(1);
      expect(signedPow(-7, 0)).toBe(-1);
      expect(signedPow(0, 0)).toBe(0);
   });

   it("should keep zero at zero for positive exponents", () => {
      expect(signedPow(0, 2) === 0).toBe(true);
      expect(signedPow(0, 0.5) === 0).toBe(true);
      expect(signedPow(-0, 2) === 0).toBe(true);
   });

   it("should soften extremes symmetrically with exponents below one", () => {
      // Easing de suavização: |x| < 1 sobe, |x| > 1 desce — nos dois lados
      expect(signedPow(0.25, 0.5)).toBeCloseTo(0.5);
      expect(signedPow(-0.25, 0.5)).toBeCloseTo(-0.5);
   });

   // ── INTERMEDIÁRIO ── (dogfooding com outras funções da lib)
   it("should match power() exactly on the positive half-axis", () => {
      // Pra base > 0 não há sinal a restaurar: signedPow ≡ power
      for (const x of [0.5, 1, 2, 3.7, 10]) {
         for (const k of [0.5, 1, 2, 3]) {
            expect(signedPow(x, k)).toBe(power(x, k));
         }
      }
   });

   it("should have its magnitude given by power() of absolute()", () => {
      // |signedPow(x, k)| === power(|x|, k) — decomposição da definição
      for (const x of [-7, -2.5, -1, 1, 2.5, 7]) {
         expect(absolute(signedPow(x, 2))).toBeCloseTo(power(absolute(x), 2));
      }
   });

   it("should agree with sign() of the base for every nonzero result", () => {
      expect(sign(signedPow(-9, 0.5))).toBe(-1);
      expect(sign(signedPow(9, 0.5))).toBe(1);
      expect(sign(signedPow(-0.5, 3))).toBe(-1);
   });

   // ── BRUTO ──
   it("should return NaN for non-finite inputs", () => {
      expect(signedPow(NaN, 2)).toBeNaN();
      expect(signedPow(2, NaN)).toBeNaN();
      expect(signedPow(Infinity, 2)).toBeNaN();
      expect(signedPow(-Infinity, 2)).toBeNaN();
      expect(signedPow(2, Infinity)).toBeNaN();
      expect(signedPow(2, -Infinity)).toBeNaN();
   });

   it("should return an honest NaN for zero base with negative exponent", () => {
      // 0^(-k) = Infinity e sign(0) × Infinity = 0 × ∞ → indeterminação
      expect(signedPow(0, -1)).toBeNaN();
      expect(signedPow(0, -0.5)).toBeNaN();
      expect(signedPow(-0, -2)).toBeNaN();
   });

   it("should stay exact for large integer powers inside the safe zone", () => {
      // 2^50 = 1125899906842624 < 2^53 — toBe vale
      expect(signedPow(2, 50)).toBe(2 ** 50);
      expect(signedPow(-2, 50)).toBe(-(2 ** 50));
   });

   it("should handle tiny magnitudes without losing the sign", () => {
      expect(signedPow(-1e-8, 2)).toBeCloseTo(-1e-16, 20);
      expect(sign(signedPow(-1e-8, 2))).toBe(-1);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should keep easing outputs inside [-1, 1] across a dense sweep", () => {
      // Caso de uso real: |x| <= 1 com exp >= 1 jamais vaza do range
      for (const k of [1, 1.5, 2, 3, 5]) {
         for (let i = -1000; i <= 1000; i++) {
            const x = i / 1000;
            const out = signedPow(x, k);
            expect(out).toBeGreaterThanOrEqual(-1);
            expect(out).toBeLessThanOrEqual(1);
         }
      }
   });

   it("should be monotonically non-decreasing across the whole axis", () => {
      // Easing simétrico não pode inverter a direção do controle
      for (const k of [0.5, 2, 3]) {
         let previous = signedPow(-2, k);
         for (let i = -1999; i <= 2000; i++) {
            const current = signedPow(i / 1000, k);
            expect(current).toBeGreaterThanOrEqual(previous);
            previous = current;
         }
      }
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (power oracle sweep, odd symmetry across thousands of points and the round-trip inversion)", () => {
      // TEOREMA 1 — Oráculo power() no semieixo positivo em varredura:
      // 200 bases × 7 expoentes. Pra x > 0, signedPow degenera em power
      // — qualquer desvio aqui denuncia corrupção na decomposição.
      for (let xi = 1; xi <= 200; xi++) {
         const x = xi / 10; // 0.1 a 20
         for (const k of [-2, -0.5, 0.5, 1, 1.5, 2, 3]) {
            expect(signedPow(x, k)).toBe(power(x, k));
         }
      }

      // TEOREMA 2 — Simetria ímpar f(−x) = −f(x) POR CONSTRUÇÃO:
      // 2.000 pontos × 5 expoentes (incluindo os pares! é o que separa
      // signedPow da potência clássica), auditada por sign e absolute.
      for (const k of [0.5, 1, 2, 3, 4]) {
         for (let i = 1; i <= 2000; i++) {
            const x = i / 100; // 0.01 a 20
            const positive = signedPow(x, k);
            const negative = signedPow(-x, k);
            expect(negative).toBeCloseTo(-positive, 10);
            expect(sign(negative)).toBe(-sign(positive));
            expect(absolute(negative)).toBeCloseTo(absolute(positive), 10);
         }
      }

      // TEOREMA 3 — Inversão round-trip: signedPow(signedPow(x, k), 1/k)
      // recupera x no eixo INTEIRO, inclusive negativos — a prova de que
      // a curva de easing tem inversa bem definida (bijeção), coisa que
      // a potência nativa não consegue oferecer pra x < 0.
      for (const k of [0.5, 1.5, 2, 3, 5]) {
         for (let i = -500; i <= 500; i++) {
            const x = i / 25; // -20 a 20, passo 0.04
            const roundTrip = signedPow(signedPow(x, k), 1 / k);
            expect(roundTrip).toBeCloseTo(x, 9);
         }
      }
   });
});

//--

describe("Function: roundToSignificant", () => {
   // ── BÁSICO ──
   it("should round large integers to the requested significant figures", () => {
      expect(roundToSignificant(123456, 2)).toBe(120000);
      expect(roundToSignificant(123456, 3)).toBe(123000);
      expect(roundToSignificant(987654, 2)).toBe(990000);
   });

   it("should round tiny decimals keeping only the leading digits", () => {
      // O mesmo sigFigs serve qualquer magnitude — toFixed jamais faria isso
      expect(roundToSignificant(0.00012345, 3)).toBeCloseTo(0.000123, 9);
      expect(roundToSignificant(0.00012345, 2)).toBeCloseTo(0.00012, 9);
      expect(roundToSignificant(0.0777, 1)).toBeCloseTo(0.08, 9);
   });

   it("should round ordinary numbers near unity", () => {
      expect(roundToSignificant(9.876, 2)).toBeCloseTo(9.9);
      expect(roundToSignificant(3.14159, 3)).toBeCloseTo(3.14);
      expect(roundToSignificant(777, 1)).toBe(800);
   });

   it("should return the number unchanged when sigFigs covers all digits", () => {
      expect(roundToSignificant(123, 3)).toBe(123);
      expect(roundToSignificant(5, 1)).toBe(5);
      expect(roundToSignificant(42, 2)).toBe(42);
   });

   // ── MÉDIO ──
   it("should mirror negatives symmetrically", () => {
      expect(roundToSignificant(-123456, 2)).toBe(-120000);
      expect(roundToSignificant(-9.876, 2)).toBeCloseTo(-9.9);
      expect(roundToSignificant(-0.00012345, 3)).toBeCloseTo(-0.000123, 9);
   });

   it("should keep zero at zero regardless of sigFigs", () => {
      // Zero não tem algarismo significativo pra contar
      expect(roundToSignificant(0, 1)).toBe(0);
      expect(roundToSignificant(0, 7)).toBe(0);
      expect(roundToSignificant(-0, 3) === 0).toBe(true);
   });

   it("should bump to the next magnitude at the rounding boundary", () => {
      // 99.5 com 2 algarismos vira 100 (= 1.0e2) — autocorreção natural
      expect(roundToSignificant(99.5, 2)).toBe(100);
      expect(roundToSignificant(999, 1)).toBe(1000);
      expect(roundToSignificant(0.0995, 2)).toBeCloseTo(0.1, 9);
   });

   it("should round ties half away from zero on both sides", () => {
      // Simetria científica: -12.5 espelha +12.5 (sem o viés do nativo)
      expect(roundToSignificant(12.5, 2)).toBe(13);
      expect(roundToSignificant(-12.5, 2)).toBe(-13);
      expect(roundToSignificant(1250, 2)).toBe(1300);
      expect(roundToSignificant(-1250, 2)).toBe(-1300);
   });

   // ── INTERMEDIÁRIO ── (dogfooding com outras funções da lib)
   it("should agree with round() when sigFigs matches the integer digits", () => {
      // Com 3 algarismos pra um número de 3 dígitos, vira round comum
      for (const x of [123.4, 567.5, 899.9, 250.5]) {
         expect(roundToSignificant(x, 3)).toBe(round(x));
      }
   });

   it("should preserve the sign() of every nonzero input", () => {
      // O dígito líder arredondado nunca zera → sinal sempre sobrevive
      for (const x of [-98765, -0.04, -1.5, 2.5, 0.007, 31415]) {
         expect(sign(roundToSignificant(x, 2))).toBe(sign(x));
      }
   });

   it("should keep the magnitude given by log10() stable or bump it by one", () => {
      // floor(log10) do resultado é o mesmo do input — ou +1 na borda 99.5→100
      for (const x of [4321, 8.76, 0.0456, 99.5]) {
         const before = floor(log10(absolute(x)));
         const after = floor(log10(absolute(roundToSignificant(x, 2))));
         expect(after === before || after === before + 1).toBe(true);
      }
   });

   // ── BRUTO ──
   it("should return NaN for non-finite inputs", () => {
      expect(roundToSignificant(NaN, 2)).toBeNaN();
      expect(roundToSignificant(Infinity, 2)).toBeNaN();
      expect(roundToSignificant(-Infinity, 2)).toBeNaN();
      expect(roundToSignificant(123, NaN)).toBeNaN();
      expect(roundToSignificant(123, Infinity)).toBeNaN();
   });

   it("should return NaN for invalid significant figure counts", () => {
      // "2.5 algarismos significativos" não existe — NaN honesto
      expect(roundToSignificant(123, 0)).toBeNaN();
      expect(roundToSignificant(123, -1)).toBeNaN();
      expect(roundToSignificant(123, 2.5)).toBeNaN();
   });

   it("should stay exact at the top of the safe integer zone", () => {
      // 9.007e15 < 2^53 — arredondar pra 2 algarismos dá 9.0e15 exato
      expect(roundToSignificant(9_007_199_254_740_000, 2)).toBe(9e15);
      expect(roundToSignificant(-9_007_199_254_740_000, 1)).toBe(-9e15);
   });

   it("should handle extreme magnitudes far from unity", () => {
      expect(roundToSignificant(1.2345e-10, 2)).toBeCloseTo(1.2e-10, 14);
      expect(roundToSignificant(6.789e12, 2)).toBe(6.8e12);
   });

   it("should tolerate sigFigs far beyond the available digits", () => {
      // Pedir 10 algarismos de "123" devolve 123 (com drift de scale 1e-7)
      expect(roundToSignificant(123, 10)).toBeCloseTo(123, 9);
      expect(roundToSignificant(0.5, 8)).toBeCloseTo(0.5, 9);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should be a perfect identity for all 900 three-digit integers", () => {
      // scale = 10^0 = 1 → divisão e volta exatas, toBe sem medo
      for (let n = 100; n <= 999; n++) {
         expect(roundToSignificant(n, 3)).toBe(n);
         expect(roundToSignificant(-n, 3)).toBe(-n);
      }
   });

   it("should stay within one scale step of the input across a sweep", () => {
      // |resultado − input| <= metade do degrau da escala (round de verdade)
      for (let i = 1; i <= 2000; i++) {
         const x = i * 7.77;
         const out = roundToSignificant(x, 2);
         const magnitude = floor(log10(absolute(x)));
         const step = power(10, magnitude - 1);
         expect(absolute(out - x)).toBeLessThanOrEqual(step / 2 + step * 1e-9);
      }
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (scale invariance across 14 orders of magnitude, idempotence and the digit-count invariant)", () => {
      // TEOREMA 1 — Invariância de escala: arredondar não enxerga a
      // vírgula. f(x · 10^k, s) = f(x, s) · 10^k pra k de -7 a +7.
      // Auditado por RAZÃO (≈ 1) pra esquivar do drift absoluto de float.
      for (const x of [1.2341, 9.8763, 6.6261, 2.71828]) {
         for (let s = 1; s <= 4; s++) {
            const base = roundToSignificant(x, s);
            for (let k = -7; k <= 7; k++) {
               const scaled = roundToSignificant(x * power(10, k), s);
               expect(scaled / (base * power(10, k))).toBeCloseTo(1, 10);
            }
         }
      }

      // TEOREMA 2 — Idempotência: arredondar o já-arredondado não muda
      // nada. f(f(n, s), s) === f(n, s) EXATO em varredura inteira
      // (outputs inteiros → comparação bit a bit sem medo).
      for (let n = 1; n <= 5000; n += 7) {
         for (let s = 1; s <= 3; s++) {
            const once = roundToSignificant(n * 13, s);
            const twice = roundToSignificant(once, s);
            expect(twice).toBe(once);
         }
      }

      // TEOREMA 3 — Invariante da contagem de dígitos, auditado pela
      // própria lib: a mantissa do resultado, out / 10^(m − s + 1),
      // deve ser um INTEIRO entre 10^(s−1) e 10^s — ou seja, o
      // resultado tem no máximo s algarismos significativos de verdade.
      let seed = 2026;
      const nextFloat = () => {
         seed = (seed * 1_664_525 + 1_013_904_223) % 4_294_967_296;
         return 1 + (seed % 8_999) / 1_000; // mantissas em [1, 9.999]
      };
      for (let run = 0; run < 300; run++) {
         const exponent = (run % 13) - 6; // magnitudes de -6 a +6
         const x = nextFloat() * power(10, exponent);
         for (let s = 1; s <= 4; s++) {
            const out = roundToSignificant(x, s);
            const m = floor(log10(absolute(out)));
            const mantissa = out / power(10, m - s + 1);
            // Mantissa é inteira (tolerância só pro drift da divisão)
            expect(mantissa).toBeCloseTo(round(mantissa), 6);
            // E vive na janela [10^(s−1), 10^s] dos s algarismos
            expect(round(mantissa)).toBeGreaterThanOrEqual(power(10, s - 1));
            expect(round(mantissa)).toBeLessThanOrEqual(power(10, s));
         }
      }
   });
});

//--

describe("Function: normalizeToSum", () => {
   // ── BÁSICO ──
   it("should turn weights into a probability distribution by default", () => {
      const result = normalizeToSum([2, 3, 5]);
      expect(result[0]).toBeCloseTo(0.2);
      expect(result[1]).toBeCloseTo(0.3);
      expect(result[2]).toBeCloseTo(0.5);
   });

   it("should rescale to an explicit target like percentages", () => {
      // ratio = 100/4 = 25 exato → toBe sem medo
      expect(normalizeToSum([1, 1, 2], 100)).toEqual([25, 25, 50]);
   });

   it("should map a single element straight to the target", () => {
      expect(normalizeToSum([7])).toEqual([1]);
      expect(normalizeToSum([3], 42)).toEqual([42]);
   });

   it("should return an empty array for an empty list", () => {
      // Nada pra normalizar — [] honesto, padrão da lib
      expect(normalizeToSum([])).toEqual([]);
      expect(normalizeToSum([], 100)).toEqual([]);
   });

   // ── MÉDIO ──
   it("should handle negative values while preserving proportions", () => {
      // ratio = 1/2 exato: [-1, 3] vira [-0.5, 1.5] e soma 1
      expect(normalizeToSum([-1, 3])).toEqual([-0.5, 1.5]);
   });

   it("should keep zeros at zero in the rescaled list", () => {
      const result = normalizeToSum([0, 5, 5]);
      expect(result[0]).toBe(0);
      expect(result[1]).toBeCloseTo(0.5);
      expect(result[2]).toBeCloseTo(0.5);
   });

   it("should collapse everything to zero for a zero target", () => {
      expect(normalizeToSum([1, 2, 3], 0)).toEqual([0, 0, 0]);
   });

   it("should leave an already-normalized distribution untouched", () => {
      const result = normalizeToSum([0.25, 0.75]);
      expect(result[0]).toBeCloseTo(0.25, 12);
      expect(result[1]).toBeCloseTo(0.75, 12);
   });

   it("should rescale to a negative target by flipping the scale", () => {
      // target negativo é válido: proporções mantidas, total = -10
      const result = normalizeToSum([2, 3], -10);
      expect(result[0]).toBeCloseTo(-4);
      expect(result[1]).toBeCloseTo(-6);
   });

   // ── INTERMEDIÁRIO ── (dogfooding com outras funções da lib)
   it("should sum to the target according to sum()", () => {
      // O contrato inteiro da função, auditado pelo agregador da lib
      expect(sum(...normalizeToSum([3, 7, 11]))).toBeCloseTo(1, 12);
      expect(sum(...normalizeToSum([5, 5, 5], 99))).toBeCloseTo(99, 9);
      expect(sum(...normalizeToSum([-2, 5, 4], 10))).toBeCloseTo(10, 9);
   });

   it("should produce mean 1 when normalized to the element count", () => {
      // Normalizar pra somar n ⟹ média = n/n = 1 — ponte com mean()
      const values = [4, 8, 15, 16, 23, 42];
      const normalized = normalizeToSum(values, values.length);
      expect(mean(...normalized)).toBeCloseTo(1, 12);
   });

   it("should preserve the sign() of every entry for a positive ratio", () => {
      // total > 0 e target > 0 ⟹ ratio > 0 ⟹ nenhum sinal vira
      const values = [-3, 7, -1, 11];
      const normalized = normalizeToSum(values, 5);
      for (let i = 0; i < values.length; i++) {
         expect(sign(normalized[i])).toBe(sign(values[i]));
      }
   });

   // ── BRUTO ──
   it("should return all-NaN when the values sum to zero", () => {
      // Não existe fator que mude o total de 0 — direção indefinida
      const result = normalizeToSum([-2, 2]);
      expect(result).toHaveLength(2);
      expect(result[0]).toBeNaN();
      expect(result[1]).toBeNaN();
      for (const v of normalizeToSum([0, 0, 0])) {
         expect(v).toBeNaN();
      }
   });

   it("should return all-NaN when any entry is non-finite", () => {
      // Um Infinity zeraria os demais silenciosamente — mentira vetada
      for (const poison of [NaN, Infinity, -Infinity]) {
         const result = normalizeToSum([1, poison, 3]);
         expect(result).toHaveLength(3);
         for (const v of result) {
            expect(v).toBeNaN();
         }
      }
   });

   it("should return all-NaN for a non-finite target", () => {
      for (const badTarget of [NaN, Infinity, -Infinity]) {
         for (const v of normalizeToSum([1, 2, 3], badTarget)) {
            expect(v).toBeNaN();
         }
      }
   });

   it("should never mutate the input array", () => {
      const input = [9, 1, 5];
      const frozen = [...input];
      normalizeToSum(input, 100);
      expect(input).toEqual(frozen);
   });

   it("should normalize tiny magnitudes without underflow surprises", () => {
      const result = normalizeToSum([1e-12, 3e-12]);
      expect(result[0]).toBeCloseTo(0.25, 12);
      expect(result[1]).toBeCloseTo(0.75, 12);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should survive a 10,000-element normalization summing to target", () => {
      const values: number[] = [];
      for (let i = 1; i <= 10_000; i++) {
         values.push((i % 97) + 1); // pesos 1..97 ciclando
      }
      const normalized = normalizeToSum(values, 1000);
      expect(normalized).toHaveLength(10_000);
      expect(sum(...normalized)).toBeCloseTo(1000, 6);
   });

   it("should hold proportions across wildly mixed magnitudes", () => {
      // 1e-6 convivendo com 1e6: razão entre saídas = razão entre entradas
      const values = [1e-6, 1, 1e6];
      const normalized = normalizeToSum(values, 7);
      expect(normalized[2] / normalized[0]).toBeCloseTo(1e12, 0);
      expect(normalized[1] / normalized[0]).toBeCloseTo(1e6, 4);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (mean bridge across 200 random lists, pairwise proportion invariance and the cumulativeSum composition)", () => {
      // Gerador determinístico (LCG) — varredura pseudo-aleatória sem flake
      let seed = 777;
      const nextInt = () => {
         seed = (seed * 1_664_525 + 1_013_904_223) % 4_294_967_296;
         return (seed % 200) + 1; // pesos em [1, 200]
      };

      for (let run = 0; run < 200; run++) {
         const length = 3 + (run % 48); // tamanhos 3 a 50
         const values: number[] = [];
         for (let i = 0; i < length; i++) {
            values.push(nextInt());
         }

         // TEOREMA 1 — Ponte com mean(): normalizar pra somar n
         // força média exatamente 1, pra QUALQUER lista de pesos.
         const toCount = normalizeToSum(values, length);
         expect(mean(...toCount)).toBeCloseTo(1, 10);

         // TEOREMA 2 — Invariância das proporções: o fator único
         // não mexe em razão. out[i]/out[j] === values[i]/values[j]
         // pra TODO par — auditado em varredura de pares adjacentes
         // e do primeiro contra todos.
         const normalized = normalizeToSum(values, 42);
         for (let i = 1; i < length; i++) {
            expect(normalized[i] / normalized[i - 1]).toBeCloseTo(
               values[i] / values[i - 1],
               10,
            );
            expect(normalized[i] / normalized[0]).toBeCloseTo(
               values[i] / values[0],
               10,
            );
         }

         // TEOREMA 3 — Composição com cumulativeSum(): o acumulado
         // de uma distribuição normalizada é monótono (pesos > 0) e
         // termina EXATAMENTE no alvo — três funções da Fase 4
         // se auditando mutuamente.
         const trajectory = cumulativeSum(...normalized);
         expect(trajectory.at(-1)).toBeCloseTo(42, 9);
         for (let i = 1; i < trajectory.length; i++) {
            expect(trajectory[i]).toBeGreaterThan(trajectory[i - 1]);
         }

         // BÔNUS — Idempotência: normalizar o já-normalizado é no-op
         const twice = normalizeToSum(normalized, 42);
         for (let i = 0; i < length; i++) {
            expect(twice[i]).toBeCloseTo(normalized[i], 10);
         }
      }
   });
});

//--

describe("Function: geometricLerp", () => {
   // ── BÁSICO ──
   it("should return the geometric mean at the midpoint", () => {
      // O meio de 1 e 100 é 10 (√(1·100)), não 50.5
      expect(geometricLerp(1, 100, 0.5)).toBeCloseTo(10);
      expect(geometricLerp(4, 9, 0.5)).toBeCloseTo(6); // √36
      expect(geometricLerp(2, 8, 0.5)).toBeCloseTo(4); // √16
   });

   it("should hit both endpoints exactly", () => {
      // Contrato sagrado de lerp: t=0 → a, t=1 → b, sem drift
      expect(geometricLerp(1, 100, 0)).toBe(1);
      expect(geometricLerp(1, 100, 1)).toBe(100);
      expect(geometricLerp(3, 7, 0)).toBe(3);
      expect(geometricLerp(3, 7, 1)).toBe(7);
   });

   it("should interpolate octaves for audio frequencies", () => {
      // 220→880 Hz: o meio é 440 (A4), uma oitava de cada lado
      expect(geometricLerp(220, 880, 0.5)).toBeCloseTo(440);
      // Um quarto do caminho = meia oitava abaixo de 440
      expect(geometricLerp(220, 880, 0.25)).toBeCloseTo(311.127, 2);
   });

   it("should return a for equal endpoints regardless of t", () => {
      expect(geometricLerp(5, 5, 0)).toBeCloseTo(5);
      expect(geometricLerp(5, 5, 0.5)).toBeCloseTo(5);
      expect(geometricLerp(5, 5, 1)).toBeCloseTo(5);
   });

   // ── MÉDIO ──
   it("should extrapolate beyond the unit interval geometrically", () => {
      // t=2 de 1→10 segue a progressão: 1, 10, 100
      expect(geometricLerp(1, 10, 2)).toBeCloseTo(100);
      expect(geometricLerp(1, 10, 3)).toBeCloseTo(1000);
      // t negativo vai pro outro lado: 1, 10 → t=-1 dá 0.1
      expect(geometricLerp(1, 10, -1)).toBeCloseTo(0.1);
   });

   it("should descend when b is smaller than a", () => {
      expect(geometricLerp(100, 1, 0.5)).toBeCloseTo(10);
      expect(geometricLerp(880, 220, 0.5)).toBeCloseTo(440);
   });

   it("should handle fractional values below one", () => {
      expect(geometricLerp(0.01, 1, 0.5)).toBeCloseTo(0.1);
      expect(geometricLerp(0.25, 4, 0.5)).toBeCloseTo(1); // √1
   });

   it("should split a zoom range into multiplicative steps", () => {
      // Zoom 1×→16× em quartos: cada passo multiplica por 2
      expect(geometricLerp(1, 16, 0.25)).toBeCloseTo(2);
      expect(geometricLerp(1, 16, 0.5)).toBeCloseTo(4);
      expect(geometricLerp(1, 16, 0.75)).toBeCloseTo(8);
   });

   // ── INTERMEDIÁRIO ── (dogfooding com outras funções da lib)
   it("should equal the two-power form using power()", () => {
      // A definição em si, auditada pelo power() da lib
      for (const t of [0, 0.2, 0.5, 0.8, 1]) {
         expect(geometricLerp(3, 12, t)).toBeCloseTo(
            power(3, 1 - t) * power(12, t),
            10,
         );
      }
   });

   it("should match power() for the canonical base-from-1 case", () => {
      // geometricLerp(1, b, t) ≡ b^t — interpolar a partir de 1 é potência
      for (const t of [0, 0.3, 0.5, 0.7, 1, 1.5]) {
         expect(geometricLerp(1, 8, t)).toBeCloseTo(power(8, t), 10);
      }
   });

   it("should square the midpoint back to the product of endpoints", () => {
      // (√(a·b))² = a·b — o meio geométrico ao quadrado via power()
      const mid = geometricLerp(7, 28, 0.5);
      expect(power(mid, 2)).toBeCloseTo(7 * 28, 8);
   });

   // ── BRUTO ──
   it("should return NaN for non-finite inputs", () => {
      expect(geometricLerp(NaN, 10, 0.5)).toBeNaN();
      expect(geometricLerp(1, NaN, 0.5)).toBeNaN();
      expect(geometricLerp(1, 10, NaN)).toBeNaN();
      expect(geometricLerp(Infinity, 10, 0.5)).toBeNaN();
      expect(geometricLerp(1, Infinity, 0.5)).toBeNaN();
      expect(geometricLerp(1, 10, Infinity)).toBeNaN();
   });

   it("should return NaN for non-positive endpoints", () => {
      // Zero é buraco negro (razão infinita); negativo não tem log real
      expect(geometricLerp(0, 10, 0.5)).toBeNaN();
      expect(geometricLerp(10, 0, 0.5)).toBeNaN();
      expect(geometricLerp(-1, 10, 0.5)).toBeNaN();
      expect(geometricLerp(1, -10, 0.5)).toBeNaN();
      expect(geometricLerp(-2, -8, 0.5)).toBeNaN();
   });

   it("should keep endpoints exact even with awkward float values", () => {
      // A forma de dois powers blinda o endpoint: t=1 → a^0 × b = b cravado
      expect(geometricLerp(0.1, 0.7, 1)).toBe(0.7);
      expect(geometricLerp(0.1, 0.7, 0)).toBe(0.1);
      expect(geometricLerp(3.14159, 2.71828, 1)).toBe(2.71828);
   });

   it("should stay positive across the whole parameter range", () => {
      // a, b > 0 ⟹ saída > 0 sempre (não há cruzamento de zero)
      for (let i = -50; i <= 150; i++) {
         expect(geometricLerp(2, 50, i / 100)).toBeGreaterThan(0);
      }
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should be monotonic along t for an ascending range", () => {
      // b > a ⟹ função estritamente crescente em t
      let previous = geometricLerp(1.5, 90, -0.5);
      for (let i = -49; i <= 150; i++) {
         const current = geometricLerp(1.5, 90, i / 100);
         expect(current).toBeGreaterThan(previous);
         previous = current;
      }
   });

   it("should reconstruct a geometric progression over many steps", () => {
      // 1→1024 em 10 passos: cada um multiplica por 2 (2^10 = 1024)
      for (let k = 0; k <= 10; k++) {
         expect(geometricLerp(1, 1024, k / 10)).toBeCloseTo(power(2, k), 6);
      }
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (equal-ratio defining property, scale invariance and the 12-tone equal temperament of the piano)", () => {
      // TEOREMA 1 — Propriedade definidora: passos iguais em t
      // multiplicam a saída por uma RAZÃO constante (a marca registrada
      // da interpolação geométrica vs a aritmética). Varremos 200 pares
      // com passo fixo d e exigimos razão constante ao longo de todo t.
      let seed = 1234;
      const nextPair = () => {
         seed = (seed * 1_664_525 + 1_013_904_223) % 4_294_967_296;
         const a = 1 + (seed % 500);
         seed = (seed * 1_664_525 + 1_013_904_223) % 4_294_967_296;
         const b = 1 + (seed % 500);
         return [a, b] as const;
      };
      for (let run = 0; run < 200; run++) {
         const [a, b] = nextPair();
         if (a === b) continue; // razão 1 é trivial, pula
         const d = 0.1;
         // A razão entre passos consecutivos = (b/a)^d, constante
         const expectedRatio = power(b / a, d);
         for (let i = 0; i < 8; i++) {
            const t = i / 10;
            const here = geometricLerp(a, b, t);
            const there = geometricLerp(a, b, t + d);
            expect(there / here).toBeCloseTo(expectedRatio, 8);
         }
      }

      // TEOREMA 2 — Invariância de escala: multiplicar ambos os
      // extremos por k multiplica a saída por k.
      // geometricLerp(k·a, k·b, t) = k · geometricLerp(a, b, t),
      // porque (ka)^(1−t)(kb)^t = k^(1−t+t) · a^(1−t)b^t = k · (...).
      for (let run = 0; run < 100; run++) {
         const [a, b] = nextPair();
         const k = 1 + (run % 50);
         for (const t of [0, 0.25, 0.5, 0.75, 1]) {
            const base = geometricLerp(a, b, t);
            const scaled = geometricLerp(a * k, b * k, t);
            expect(scaled).toBeCloseTo(base * k, 6);
         }
      }

      // TEOREMA 3 — Temperamento igual de 12 tons: dividir uma oitava
      // (f → 2f) em 12 passos geométricos reproduz EXATAMENTE os
      // semitons do piano, cada um a 2^(1/12) do anterior. A4 = 440 Hz,
      // varrido contra power(2, n/12) como oráculo (Bach aprovaria 🎹).
      const a4 = 440;
      const octaveUp = 880;
      const semitone = power(2, 1 / 12);
      for (let n = 0; n <= 12; n++) {
         const note = geometricLerp(a4, octaveUp, n / 12);
         // Cada semitom é 440 × 2^(n/12)
         expect(note).toBeCloseTo(a4 * power(semitone, n), 6);
         // E a razão entre semitons vizinhos é sempre a mesma
         if (n > 0) {
            const previous = geometricLerp(a4, octaveUp, (n - 1) / 12);
            expect(note / previous).toBeCloseTo(semitone, 8);
         }
      }
      // Fecho: 12 semitons completam exatamente a oitava (endpoint exato)
      expect(geometricLerp(a4, octaveUp, 1)).toBe(880);
   });
});

//--

describe("Function: proportionalSplit", () => {
   // ── BÁSICO ──
   it("should split a total into equal whole parts that sum exactly", () => {
      // O caso clássico: R$1,00 em 3 → [34,33,33], soma 100 (não 99.99!)
      expect(proportionalSplit(100, 1, 1, 1)).toEqual([34, 33, 33]);
      expect(proportionalSplit(10, 1, 2, 2)).toEqual([2, 4, 4]);
      expect(proportionalSplit(9, 1, 1, 1)).toEqual([3, 3, 3]);
   });

   it("should hand the odd unit to the largest remainder", () => {
      // 7 dividido 50/50: ambos pedem 3.5; o ímpar vai pro 1º (empate→índice)
      expect(proportionalSplit(7, 50, 50)).toEqual([4, 3]);
      // 5 em três iguais: restos 0.66 cada, dois primeiros levam
      expect(proportionalSplit(5, 1, 1, 1)).toEqual([2, 2, 1]);
   });

   it("should return clean parts when weights divide the total evenly", () => {
      expect(proportionalSplit(100, 1, 4)).toEqual([20, 80]);
      expect(proportionalSplit(60, 1, 1, 1, 1, 1, 1)).toEqual([
         10, 10, 10, 10, 10, 10,
      ]);
   });

   it("should map a single weight to the whole total", () => {
      expect(proportionalSplit(42, 7)).toEqual([42]);
      expect(proportionalSplit(1000, 1)).toEqual([1000]);
   });

   // ── MÉDIO ──
   it("should split by proportional weights of different sizes", () => {
      // 100 em 1:2:7 → 10:20:70
      expect(proportionalSplit(100, 1, 2, 7)).toEqual([10, 20, 70]);
      // 200 em 3:1 → 150:50
      expect(proportionalSplit(200, 3, 1)).toEqual([150, 50]);
   });

   it("should only care about weight ratios, not their scale", () => {
      // Pesos 1,1,1 e 50,50,50 são a MESMA proporção → mesmo resultado
      expect(proportionalSplit(100, 1, 1, 1)).toEqual(
         proportionalSplit(100, 50, 50, 50),
      );
      expect(proportionalSplit(100, 1, 3)).toEqual(
         proportionalSplit(100, 25, 75),
      );
   });

   it("should handle zero weights by giving them nothing", () => {
      // Peso 0 não participa do rateio, mas conta no comprimento
      expect(proportionalSplit(100, 1, 0, 1)).toEqual([50, 0, 50]);
      expect(proportionalSplit(10, 0, 0, 5)).toEqual([0, 0, 10]);
   });

   it("should split a total of zero into all zeros", () => {
      expect(proportionalSplit(0, 1, 2, 3)).toEqual([0, 0, 0]);
   });

   it("should split negative totals symmetrically (debt sharing)", () => {
      // Dívida também rateia: -100 em três iguais
      const parts = proportionalSplit(-100, 1, 1, 1);
      expect(sum(...parts)).toBe(-100);
      expect(parts).toEqual([-33, -33, -34]);
   });

   // ── INTERMEDIÁRIO ── (dogfooding com outras funções da lib)
   it("should sum to exactly the total according to sum()", () => {
      // O invariante sagrado, auditado pelo agregador da lib
      expect(sum(...proportionalSplit(100, 1, 1, 1))).toBe(100);
      expect(sum(...proportionalSplit(777, 3, 5, 11, 2))).toBe(777);
      expect(sum(...proportionalSplit(1, 1, 1, 1, 1, 1, 1))).toBe(1);
   });

   it("should never deviate from the floor() share by more than one", () => {
      // Cada parte é seu floor OU floor+1 — propriedade do maior resto
      const total = 1000;
      const weights = [3, 7, 13, 2, 9];
      const weightSum = sum(...weights);
      const parts = proportionalSplit(total, ...weights);
      for (let i = 0; i < weights.length; i++) {
         const exact = (total * weights[i]) / weightSum;
         const base = floor(exact);
         expect(parts[i] === base || parts[i] === base + 1).toBe(true);
      }
   });

   it("should approximate the continuous normalizeToSum allocation", () => {
      // proportionalSplit é a versão inteira de normalizeToSum:
      // cada parte fica a menos de 1 unidade da alocação contínua
      const total = 100;
      const weights = [2, 3, 5, 7, 11];
      const integer = proportionalSplit(total, ...weights);
      const continuous = normalizeToSum(weights, total);
      for (let i = 0; i < weights.length; i++) {
         expect(absolute(integer[i] - continuous[i])).toBeLessThan(1);
      }
   });

   // ── BRUTO ──
   it("should return NaN-filled array for non-integer totals", () => {
      // Dinheiro se rateia em centavos (inteiros), nunca em floats
      const result = proportionalSplit(100.5, 1, 1);
      expect(result).toHaveLength(2);
      expect(result[0]).toBeNaN();
      expect(result[1]).toBeNaN();
   });

   it("should return NaN-filled array for non-finite totals", () => {
      for (const bad of [NaN, Infinity, -Infinity]) {
         const result = proportionalSplit(bad, 1, 2, 3);
         expect(result).toHaveLength(3);
         for (const v of result) expect(v).toBeNaN();
      }
   });

   it("should return NaN-filled array for negative or non-finite weights", () => {
      // Proporção negativa não tem sentido de rateio
      for (const v of proportionalSplit(100, 1, -1)) expect(v).toBeNaN();
      for (const v of proportionalSplit(100, 1, NaN)) expect(v).toBeNaN();
      for (const v of proportionalSplit(100, 1, Infinity)) {
         expect(v).toBeNaN();
      }
   });

   it("should return NaN-filled array when all weights are zero", () => {
      // Soma de pesos zero → divisão por zero → direção indefinida
      const result = proportionalSplit(100, 0, 0, 0);
      expect(result).toHaveLength(3);
      for (const v of result) expect(v).toBeNaN();
   });

   it("should return an empty array for no weights", () => {
      expect(proportionalSplit(100)).toEqual([]);
      expect(proportionalSplit(0)).toEqual([]);
   });

   it("should not mutate anything and stay deterministic", () => {
      // Mesmo input → mesmo output, sempre (auditoria contábil exige)
      const first = proportionalSplit(100, 3, 3, 3, 1);
      const second = proportionalSplit(100, 3, 3, 3, 1);
      expect(first).toEqual(second);
   });

   // ── BRUTALIDADE MÁXIMA ──
   it("should reconcile to the total across a huge allocation", () => {
      // 1.000 partes de pesos variados, somando exatamente 1 milhão
      const weights: number[] = [];
      for (let i = 1; i <= 1000; i++) weights.push((i % 13) + 1);
      const parts = proportionalSplit(1_000_000, ...weights);
      expect(parts).toHaveLength(1000);
      expect(sum(...parts)).toBe(1_000_000);
   });

   it("should give every leftover unit to a distinct part", () => {
      // O resto R distribui no máximo +1 por parte — nunca +2 no mesmo
      const total = 100;
      const weights = [1, 1, 1, 1, 1, 1, 1]; // 7 partes, 100/7 = 14.28...
      const parts = proportionalSplit(total, ...weights);
      expect(sum(...parts)).toBe(100);
      // floor(100/7)=14; resto 100-98=2 unidades em 2 partes distintas
      const fourteens = parts.filter((p) => p === 14).length;
      const fifteens = parts.filter((p) => p === 15).length;
      expect(fourteens).toBe(5);
      expect(fifteens).toBe(2);
   });

   // ── 💣 BOMBA NUCLEAR — EXPLOSÃO MÁXIMA DEFINITIVA ──
   it("should withstand the definitive nuclear explosion (the sacred sum invariant, proportional monotonicity, the floor-bounded apportionment and determinism across 500 random splits)", () => {
      // Gerador determinístico (LCG) — 500 cenários sem flake
      let seed = 31_337;
      const nextInt = (mod: number) => {
         seed = (seed * 1_664_525 + 1_013_904_223) % 4_294_967_296;
         return seed % mod;
      };

      for (let run = 0; run < 500; run++) {
         const length = 2 + nextInt(30); // 2 a 31 partes
         const total = nextInt(1_000_000) + 1; // 1 a 1.000.000
         const weights: number[] = [];
         for (let i = 0; i < length; i++) {
            weights.push(nextInt(100) + 1); // pesos 1 a 100
         }

         const parts = proportionalSplit(total, ...weights);
         const weightSum = sum(...weights);

         // TEOREMA 1 — INVARIANTE SAGRADO: as partes somam EXATAMENTE
         // o total. Este é o teorema que define a função inteira —
         // nenhum centavo perdido, nenhum inventado, jamais.
         expect(sum(...parts)).toBe(total);

         // TEOREMA 2 — Limite do maior resto: cada parte é seu floor
         // ou floor+1 da alocação exata. Nunca mais, nunca menos.
         for (let i = 0; i < length; i++) {
            const exact = (total * weights[i]) / weightSum;
            const base = floor(exact);
            expect(parts[i] === base || parts[i] === base + 1).toBe(true);
            // E nenhuma parte é negativa (total e pesos positivos)
            expect(parts[i]).toBeGreaterThanOrEqual(0);
         }

         // TEOREMA 3 — Monotonicidade proporcional: peso maior nunca
         // recebe parte MENOR. Ordenamos pelos pesos e conferimos que
         // as partes respeitam a ordem (com tolerância de 1 unidade,
         // o jogo do arredondamento do maior resto).
         const paired = weights
            .map((w, i) => ({ w, part: parts[i] }))
            .sort((p, q) => p.w - q.w);
         for (let i = 1; i < paired.length; i++) {
            // parte do peso maior >= parte do menor − 1 (folga do resto)
            expect(paired[i].part).toBeGreaterThanOrEqual(
               paired[i - 1].part - 1,
            );
         }

         // TEOREMA 4 — Determinismo total: rodar de novo dá IDÊNTICO.
         // Auditoria contábil não tolera resultado que muda sozinho.
         const again = proportionalSplit(total, ...weights);
         expect(again).toEqual(parts);
      }

      // COROAÇÃO — O problema do centavo, exato: dividir 1 centavo
      // entre 3 sócios. Soma tem que ser 1, e a unidade indivisível
      // vai pra um só (determinístico: o primeiro).
      const penny = proportionalSplit(1, 1, 1, 1);
      expect(sum(...penny)).toBe(1);
      expect(penny).toEqual([1, 0, 0]);

      // E a maior parte recebe pelo menos a média (sanidade via max)
      const big = proportionalSplit(1000, 1, 2, 3, 4);
      expect(max(...big)).toBeGreaterThanOrEqual(1000 / 4);
   });
});

//--
