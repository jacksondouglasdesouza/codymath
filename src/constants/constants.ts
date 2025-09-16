// src/constants/constants.ts

/**
 * @fileoverview Foundational mathematical constants for the CodyMath library.
 * @version 0.2.0
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
     * The Euler-Mascheroni constant (γ), often referred to as Euler's constant.
     * @value 0.5772156649015327
     */
    eulerMascheroni: 0.5772156649015327,

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
     * @value 2.678938534707748
     */
    gammaOneThird: 2.678938534707748,

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