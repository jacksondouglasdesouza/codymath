// tests/algebra/arithmetic.test.ts

import { constants } from "../../src/constants/constants";

/**
 * @fileoverview Unit tests for the core arithmetic module.
 * @version 0.6.0
 * @license MIT
 * @author Jackson Douglas de Souza
 * @date initial 2025-09-17 | Last updated test: 2026-06-10
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
