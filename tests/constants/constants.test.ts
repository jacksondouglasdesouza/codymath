// tests/constants/constants.test.ts

/**
 * @fileoverview Unit tests for the mathematical constants module.
 * @version 0.8.0
 * @license MIT
 * @author Jackson Douglas de Souza
 * @date 2025-09-16  |  Last modified 2026/06/14
 */

import { describe, it, expect } from "vitest";
import { constants } from "../../src/constants/constants";

describe("Module: Mathematical Constants", () => {
   describe("Pi (π)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.pi).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.pi).toBe(3.141592653589793);
      });

      it("should pass a brute-force Leibniz formula approximation", () => {
         let piApproximation = 0;
         //
         for (let i = 0; i < 1000000; i++) {
            piApproximation += (-1) ** i / (2 * i + 1);
         }
         piApproximation *= 4;
         //
         expect(piApproximation).toBeCloseTo(constants.pi, 5);
      });
   });

   //--

   describe("Euler's number (e)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.e).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.e).toBe(2.718281828459045);
      });

      it("should pass a brute-force sum of inverse factorials approximation", () => {
         let eApproximation = 1.0; // Inicia com 1/0!
         let factorial = 1.0;
         //
         for (let i = 1; i < 20; i++) {
            factorial *= i;
            eApproximation += 1 / factorial;
         }
         //
         expect(eApproximation).toBeCloseTo(constants.e);
      });
   });

   //--

   describe("Golden ratio (φ)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.phi).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.phi).toBe(1.618033988749895);
      });

      it("should satisfy its defining identity φ² = φ + 1", () => {
         // The golden ratio is the positive root of x² = x + 1.
         // For this double the identity holds exactly.
         expect(constants.phi ** 2).toBe(constants.phi + 1);
      });
   });

   //--

   describe("Tau (τ)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.tau).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.tau).toBe(6.283185307179586);
      });

      it("should be exactly twice pi (τ = 2π)", () => {
         // Tau is defined as a full turn: 2π. Holds exactly in IEEE-754.
         expect(constants.tau).toBe(2 * constants.pi);
      });
   });

   //--

   describe("Square root of 2 (√2)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.sqrt2).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.sqrt2).toBe(1.4142135623730951);
      });

      it("should square back to 2", () => {
         // (√2)² = 2, up to one rounding step from squaring.
         expect(constants.sqrt2 ** 2).toBeCloseTo(2, 15);
      });
   });

   //--

   describe("Square root of 3 (√3)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.sqrt3).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.sqrt3).toBe(1.7320508075688772);
      });

      it("should square back to 3", () => {
         // (√3)² = 3, up to one rounding step from squaring.
         expect(constants.sqrt3 ** 2).toBeCloseTo(3, 15);
      });
   });

   //--

   describe("Square root of 5 (√5)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.sqrt5).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.sqrt5).toBe(2.23606797749979);
      });

      it("should square back to 5", () => {
         // (√5)² = 5, up to one rounding step from squaring.
         expect(constants.sqrt5 ** 2).toBeCloseTo(5, 14);
      });

      it("should reconstruct the golden ratio: (1 + √5)/2 = φ", () => {
         // Ties √5 to phi exactly in IEEE-754.
         expect((1 + constants.sqrt5) / 2).toBe(constants.phi);
      });
   });

   //--

   describe("Reciprocal square root of 2 (1/√2)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.sqrt1_2).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.sqrt1_2).toBe(0.7071067811865476);
      });

      it("should equal √2 / 2 exactly", () => {
         // 1/√2 = √2/2 — ties it to sqrt2 bit-for-bit.
         expect(constants.sqrt2 / 2).toBe(constants.sqrt1_2);
      });

      it("should square back to 1/2", () => {
         // (1/√2)² = 0.5, up to one rounding step.
         expect(constants.sqrt1_2 ** 2).toBeCloseTo(0.5, 15);
      });
   });

   //--

   describe("Natural logarithm of 2 (ln 2)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.ln2).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.ln2).toBe(0.6931471805599453);
      });

      it("should satisfy e^(ln 2) = 2", () => {
         // The natural log is the inverse of exp; holds exactly here.
         expect(Math.exp(constants.ln2)).toBe(2);
      });
   });

   //--

   describe("Natural logarithm of 10 (ln 10)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.ln10).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.ln10).toBe(2.302585092994046);
      });

      it("should satisfy e^(ln 10) = 10", () => {
         // Inverse of exp; one rounding step keeps it just shy of exact.
         expect(Math.exp(constants.ln10)).toBeCloseTo(10, 14);
      });
   });

   //--

   describe("Base-2 logarithm of e (log₂ e)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.log2e).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.log2e).toBe(1.4426950408889634);
      });

      it("should be the exact reciprocal of ln 2 (log₂e · ln2 = 1)", () => {
         // Ties log2e to ln2 bit-for-bit.
         expect(constants.log2e * constants.ln2).toBe(1);
      });

      it("should raise 2 back to e (2^log₂e = e)", () => {
         // 2 to the power log₂e returns Euler's number, exactly here.
         expect(2 ** constants.log2e).toBe(constants.e);
      });
   });

   //--

   describe("Base-10 logarithm of e (log₁₀ e)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.log10e).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.log10e).toBe(0.4342944819032518);
      });

      it("should be the exact reciprocal of ln 10 (log₁₀e · ln10 = 1)", () => {
         // Ties log10e to ln10 bit-for-bit.
         expect(constants.log10e * constants.ln10).toBe(1);
      });

      it("should raise 10 back to e (10^log₁₀e = e)", () => {
         // 10 to the power log₁₀e returns Euler's number, exactly here.
         expect(10 ** constants.log10e).toBe(constants.e);
      });
   });

   //--

   describe("Catalan's constant (G)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.catalan).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.catalan).toBe(0.915965594177219);
      });

      it("should pass a brute-force series approximation", () => {
         // G = Σ (−1)ⁿ / (2n+1)²
         let approximation = 0;
         for (let n = 0; n < 100000; n++) {
            approximation += (-1) ** n / (2 * n + 1) ** 2;
         }
         expect(approximation).toBeCloseTo(constants.catalan, 6);
      });
   });

   //--

   describe("Apéry's constant (ζ(3))", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.apery).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.apery).toBe(1.2020569031595942);
      });

      it("should pass a brute-force series approximation", () => {
         // ζ(3) = Σ 1/n³
         let approximation = 0;
         for (let n = 1; n <= 100000; n++) {
            approximation += 1 / n ** 3;
         }
         expect(approximation).toBeCloseTo(constants.apery, 6);
      });
   });

   //--

   describe("Golden angle (radians)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.goldenAngle).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.goldenAngle).toBe(2.399963229728653);
      });

      it("should equal π·(3 − √5) exactly", () => {
         // Ties the golden angle to pi and sqrt5 bit-for-bit.
         expect(constants.pi * (3 - constants.sqrt5)).toBe(
            constants.goldenAngle,
         );
      });
   });

   //--

   describe("Plastic number (ρ)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.plasticNumber).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.plasticNumber).toBe(1.324717957244746);
      });

      it("should satisfy its defining identity ρ³ = ρ + 1", () => {
         // The plastic number is the real root of x³ = x + 1.
         // For this double the identity holds exactly — the cubic mirror of φ.
         expect(constants.plasticNumber ** 3).toBe(constants.plasticNumber + 1);
      });
   });

   //--

   describe("Euler-Mascheroni constant (γ)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.eulerMascheroni).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.eulerMascheroni).toBe(0.5772156649015329);
      });

      it("should pass a brute-force harmonic series approximation", () => {
         let harmonicSum = 0;
         //
         const iterations = 500000;

         for (let i = 1; i <= iterations; i++) {
            harmonicSum += 1 / i;
         }

         const gammaApproximation = harmonicSum - Math.log(iterations);
         //
         expect(gammaApproximation).toBeCloseTo(constants.eulerMascheroni, 4);
      });
   });

   //--

   describe("e to the power of gamma (e^γ)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.eToTheGamma).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.eToTheGamma).toBe(1.781072417990198);
      });

      it("should be close to the computed value of e raised to gamma", () => {
         // This is a property-based test, checking against our other constants
         const computedValue = Math.exp(constants.eulerMascheroni);
         expect(constants.eToTheGamma).toBeCloseTo(computedValue);
      });
   });

   //--

   describe("Square root of e (√e)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.sqrtE).toBe("number");
      });

      it("should have the correct raw value", () => {
         // Value based on the source image: 1,64872 12707...
         expect(constants.sqrtE).toBe(1.6487212707001282);
      });

      it("should be close to the computed value of sqrt(e)", () => {
         const computedValue = Math.sqrt(constants.e);
         expect(constants.sqrtE).toBeCloseTo(computedValue);
      });
   });

   //--

   describe("Square root of Pi (√π)", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.sqrtPi).toBe("number");
      });

      it("should have the correct raw value", () => {
         // Value based on the source image: 1,77245 38509...
         expect(constants.sqrtPi).toBe(1.772453850905516);
      });

      it("should be close to the computed value of sqrt(pi)", () => {
         const computedValue = Math.sqrt(constants.pi);
         expect(constants.sqrtPi).toBeCloseTo(computedValue);
      });
   });

   //--

   describe("Gamma function Γ(1/3)", () => {
      const expectedValue = 2.6789385347077475;

      it("should be the correct primitive type", () => {
         expect(typeof constants.gammaOneThird).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.gammaOneThird).toBe(expectedValue);
      });

      it("should have the correct high-precision string representation", () => {
         // A check to ensure floating point precision is maintained
         expect(constants.gammaOneThird.toPrecision(16)).toBe(
            "2.678938534707747",
         );
      });
   });

   //--

   describe("Gamma function Γ(1/4)", () => {
      const expectedValue = 3.625609908221908;

      it("should be the correct primitive type", () => {
         expect(typeof constants.gammaOneFourth).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.gammaOneFourth).toBe(expectedValue);
      });

      it("should have the correct high-precision string representation", () => {
         // A check to ensure floating point precision is maintained
         expect(constants.gammaOneFourth.toPrecision(16)).toBe(
            "3.625609908221908",
         );
      });
   });

   //--

   describe("Radians to Degrees Conversion Factor", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.radToDeg).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.radToDeg).toBe(57.29577951308232);
      });

      it("should be close to the computed value of 180/pi", () => {
         const computedValue = 180 / constants.pi;
         expect(constants.radToDeg).toBeCloseTo(computedValue);
      });
   });

   //--

   describe("Degrees to Radians Conversion Factor", () => {
      it("should be the correct primitive type", () => {
         expect(typeof constants.degToRad).toBe("number");
      });

      it("should have the correct raw value", () => {
         expect(constants.degToRad).toBe(0.017453292519943295);
      });

      it("should be close to the computed value of pi/180", () => {
         const computedValue = constants.pi / 180;
         expect(constants.degToRad).toBeCloseTo(computedValue);
      });
   });
});

//--
