// tests/constants/constants.test.ts

/**
 * @fileoverview Unit tests for the mathematical constants module.
 * @version 0.3.0
 * @license MIT
 * @author Jackson Douglas de Souza
 * @date 2025-09-16
 */

import { describe, it, expect } from 'vitest';
import { constants } from '../../src/constants/constants';

describe('Module: Mathematical Constants', () => {

    describe('Pi (π)', () => {
        it('should be the correct primitive type', () => {
            expect(typeof constants.pi).toBe('number');
        });

        it('should have the correct raw value', () => {
            expect(constants.pi).toBe(3.141592653589793);
        });

        it('should pass a brute-force Leibniz formula approximation', () => {
            let piApproximation = 0;
            // 
            for (let i = 0; i < 1000000; i++) {
                piApproximation += ((-1) ** i) / (2 * i + 1);
            }
            piApproximation *= 4;
            //
            expect(piApproximation).toBeCloseTo(constants.pi, 5);
        });
    });

    //--

    describe("Euler's number (e)", () => {
        it('should be the correct primitive type', () => {
            expect(typeof constants.e).toBe('number');
        });

        it('should have the correct raw value', () => {
            expect(constants.e).toBe(2.718281828459045);
        });

        it('should pass a brute-force sum of inverse factorials approximation', () => {
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

    describe('Euler-Mascheroni constant (γ)', () => {
        it('should be the correct primitive type', () => {
            expect(typeof constants.eulerMascheroni).toBe('number');
        });

        it('should have the correct raw value', () => {
            expect(constants.eulerMascheroni).toBe(0.5772156649015327);
        });

        it('should pass a brute-force harmonic series approximation', () => {
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

    describe('e to the power of gamma (e^γ)', () => {
        it('should be the correct primitive type', () => {
            expect(typeof constants.eToTheGamma).toBe('number');
        });

        it('should have the correct raw value', () => {
            expect(constants.eToTheGamma).toBe(1.781072417990198);
        });

        it('should be close to the computed value of e raised to gamma', () => {
            // This is a property-based test, checking against our other constants
            const computedValue = Math.exp(constants.eulerMascheroni);
            expect(constants.eToTheGamma).toBeCloseTo(computedValue);
        });
    });

    //--

    describe('Square root of e (√e)', () => {
        it('should be the correct primitive type', () => {
            expect(typeof constants.sqrtE).toBe('number');
        });

        it('should have the correct raw value', () => {
            // Value based on the source image: 1,64872 12707...
            expect(constants.sqrtE).toBe(1.6487212707001282);
        });

        it('should be close to the computed value of sqrt(e)', () => {
            const computedValue = Math.sqrt(constants.e);
            expect(constants.sqrtE).toBeCloseTo(computedValue);
        });
    });

    //--

    describe('Square root of Pi (√π)', () => {
        it('should be the correct primitive type', () => {
            expect(typeof constants.sqrtPi).toBe('number');
        });

        it('should have the correct raw value', () => {
            // Value based on the source image: 1,77245 38509...
            expect(constants.sqrtPi).toBe(1.772453850905516);
        });

        it('should be close to the computed value of sqrt(pi)', () => {
            const computedValue = Math.sqrt(constants.pi);
            expect(constants.sqrtPi).toBeCloseTo(computedValue);
        });
    });

    //-- 

    describe('Gamma function Γ(1/3)', () => {
        const expectedValue = 2.678938534707748;

        it('should be the correct primitive type', () => {
            expect(typeof constants.gammaOneThird).toBe('number');
        });

        it('should have the correct raw value', () => {
            expect(constants.gammaOneThird).toBe(expectedValue);
        });

        it('should have the correct high-precision string representation', () => {
            // A check to ensure floating point precision is maintained
            expect(constants.gammaOneThird.toPrecision(16)).toBe('2.678938534707748');
        });
    });

    //-- 

    describe('Gamma function Γ(1/4)', () => {
        const expectedValue = 3.625609908221908;

        it('should be the correct primitive type', () => {
            expect(typeof constants.gammaOneFourth).toBe('number');
        });

        it('should have the correct raw value', () => {
            expect(constants.gammaOneFourth).toBe(expectedValue);
        });

        it('should have the correct high-precision string representation', () => {
            // A check to ensure floating point precision is maintained
            expect(constants.gammaOneFourth.toPrecision(16)).toBe('3.625609908221908');
        });
    });

    //--

    describe('Radians to Degrees Conversion Factor', () => {
        it('should be the correct primitive type', () => {
            expect(typeof constants.radToDeg).toBe('number');
        });

        it('should have the correct raw value', () => {
            expect(constants.radToDeg).toBe(57.29577951308232);
        });

        it('should be close to the computed value of 180/pi', () => {
            const computedValue = 180 / constants.pi;
            expect(constants.radToDeg).toBeCloseTo(computedValue);
        });
    });

    //--

    describe('Degrees to Radians Conversion Factor', () => {
        it('should be the correct primitive type', () => {
            expect(typeof constants.degToRad).toBe('number');
        });

        it('should have the correct raw value', () => {
            expect(constants.degToRad).toBe(0.017453292519943295);
        });

        it('should be close to the computed value of pi/180', () => {
            const computedValue = constants.pi / 180;
            expect(constants.degToRad).toBeCloseTo(computedValue);
        });
    });

});