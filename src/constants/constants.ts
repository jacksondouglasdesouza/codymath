// src/constants/constants.ts

/**
 * @fileoverview Foundational mathematical constants for the CodyMath library.
 * @version 0.8.0
 * @license MIT
 * @author Jackson Douglas de Souza
 * @see {@link https://www.linkedin.com/in/jacksondouglasdsouza/|LinkedIn}
 * @see {@link https://github.com/jacksondouglasdesouza|GitHub}
 * @description This module provides a centralized and reliable source for fundamental mathematical constants.
 * It includes transcendental numbers (like π and e), number-theoretic constants (like γ),
 * and essential conversion factors used across science, engineering, and mathematics.
 *
 * Each constant is defined to the highest possible precision within the standard
 * IEEE 754 double-precision format used by JavaScript numbers. The values are rigorously
 * cross-referenced with authoritative sources to ensure their accuracy and adherence
 * to international standards.
 * @see
 * Sources & References:
 * 1. National Institute of Standards and Technology (NIST). (2023). *Digital Library of Mathematical Functions*. U.S. Department of Commerce. Retrieved from https://dlmf.nist.gov/
 * 2. Wolfram Research, Inc. *Wolfram MathWorld*. Retrieved from https://mathworld.wolfram.com/
 * 3. Spiegel, M. R., et al. (2018). *Schaum's Outline of Mathematical Handbook of Formulas and Tables, 5th Edition*. McGraw-Hill Education.
 * 4. ECMA International. (2025). *ECMAScript® 2025 Language Specification*. Retrieved from https://tc39.es/ecma262/
 */

/**
 * An object containing fundamental mathematical constants.
 */
export const constants = {
   /**
    * Pi (π), the ratio of a circle's circumference to its diameter.
    * @value 3.141592653589793
    */
   pi: 3.141592653589793,

   /**
    * Euler's number (e), the base of the natural logarithm.
    * @value 2.718281828459045
    */
   e: 2.718281828459045,

   /**
    * The golden ratio (φ), the positive root of x^2 = x + 1.
    * Equals (1 + √5) / 2 and appears throughout geometry, art, and nature.
    * @value 1.618033988749895
    */
   phi: 1.618033988749895,

   /**
    * Tau (τ), the ratio of a circle's circumference to its radius (2π).
    * Represents one full turn in radians.
    * @value 6.283185307179586
    */
   tau: 6.283185307179586,

   /**
    * The square root of 2 (√2), known as Pythagoras' constant.
    * The diagonal of a unit square, and the first number proven irrational.
    * @value 1.4142135623730951
    */
   sqrt2: 1.4142135623730951,

   /**
    * The square root of 3 (√3), known as Theodorus' constant.
    * The space diagonal of a unit cube; also (√3)/2 is an equilateral triangle's height.
    * @value 1.7320508075688772
    */
   sqrt3: 1.7320508075688772,

   /**
    * The square root of 5 (√5).
    * The core of the golden ratio: φ = (1 + √5) / 2.
    * @value 2.23606797749979
    */
   sqrt5: 2.23606797749979,

   /**
    * The reciprocal square root of 2 (1/√2 = √½), equal to √2 / 2.
    * The value of sin(45°) = cos(45°); common in geometry and signal RMS.
    * @value 0.7071067811865476
    */
   sqrt1_2: 0.7071067811865476,

   /**
    * The natural logarithm of 2 (ln 2).
    * Key to half-life and decay, information theory, and logarithm base changes.
    * @value 0.6931471805599453
    */
   ln2: 0.6931471805599453,

   /**
    * The natural logarithm of 10 (ln 10).
    * Bridges natural and base-10 logs: log₁₀(x) = ln(x) / ln 10.
    * @value 2.302585092994046
    */
   ln10: 2.302585092994046,

   /**
    * The base-2 logarithm of e (log₂ e), the reciprocal of ln 2.
    * Converts natural logs to base 2: log₂(x) = ln(x) · log₂ e.
    * @value 1.4426950408889634
    */
   log2e: 1.4426950408889634,

   /**
    * The base-10 logarithm of e (log₁₀ e), the reciprocal of ln 10.
    * Converts natural logs to base 10: log₁₀(x) = ln(x) · log₁₀ e.
    * @value 0.4342944819032518
    */
   log10e: 0.4342944819032518,

   /**
    * Catalan's constant (G), defined by the series Σ (−1)ⁿ / (2n+1)².
    * Appears in combinatorics, definite integrals, and lattice sums.
    * Whether it is irrational is still an open problem.
    * @value 0.915965594177219
    */
   catalan: 0.915965594177219,

   /**
    * Apéry's constant (ζ(3)), the Riemann zeta function at 3: Σ 1/n³.
    * Proven irrational by Roger Apéry in 1979. Shows up in quantum
    * electrodynamics and in the statistics of random spanning trees.
    * @value 1.2020569031595942
    */
   apery: 1.2020569031595942,

   /**
    * The golden angle (in radians), π·(3 − √5) ≈ 137.5°.
    * The angle that divides a turn by the golden ratio; nature uses it to
    * pack leaves and seeds (phyllotaxis) without overlap.
    * @value 2.399963229728653
    */
   goldenAngle: 2.399963229728653,

   /**
    * The plastic number (ρ), the real root of x³ = x + 1.
    * The "three-dimensional" analogue of the golden ratio (which solves x² = x + 1).
    * Drives the Padovan and Perrin sequences; used in design and architecture.
    * @value 1.324717957244746
    */
   plasticNumber: 1.324717957244746,

   /**
    * The Euler-Mascheroni constant (γ), often referred to as Euler's constant.
    * @value 0.5772156649015329
    */
   eulerMascheroni: 0.5772156649015329,

   /**
    * The constant e to the power of gamma (e^γ).
    * It is one of the Mertens' constants, appearing in number theory.
    * @value 1.781072417990198
    */
   eToTheGamma: 1.781072417990198,

   /**
    * The square root of Euler's number (√e).
    * @value 1.6487212707001282
    */
   sqrtE: 1.6487212707001282,

   /**
    * The square root of Pi (√π), also related to the Gamma function as Γ(1/2).
    * @value 1.772453850905516
    */
   sqrtPi: 1.772453850905516,

   /**
    * The value of the Gamma function Γ(1/3).
    * @value 2.6789385347077475
    */
   gammaOneThird: 2.6789385347077475,

   /**
    * The value of the Gamma function Γ(1/4).
    * @value 3.625609908221908
    */
   gammaOneFourth: 3.625609908221908,

   /**
    * The conversion factor from radians to degrees (180/π).
    * @value 57.29577951308232
    */
   radToDeg: 57.29577951308232,

   /**
    * The conversion factor from degrees to radians (π/180).
    * @value 0.017453292519943295
    */
   degToRad: 0.017453292519943295,
};
