// tests/utils/utils.test.ts

/**
 * @fileoverview Unit tests for the high-level utility functions module. 
 * @version 0.5.0
 * @license MIT
 * @author Jackson Douglas de Souza
 * @date 2025-09-22 | Last tested on: 2025-09-24 | 2025-09-26
 */

import { describe, it, expect } from 'vitest';
import { distance, formatCurrency, isNearlyEqual, isPowerOfTwo, map, random, randomFloat, toWordsCurrency, toWordsPure } from '../../src/utils/utils';
import { absolute, divide, floor, multiply, power, round, sqrt, subtract, sum } from '../../src/algebra/arithmetic';

describe('map', () => {
    it('should perform basic linear mapping', () => {
        expect(map(5, 0, 10, 0, 100)).toBe(50);
        expect(map(0, 0, 10, 0, 100)).toBe(0);
        expect(map(10, 0, 10, 0, 100)).toBe(100);
        expect(map(25, 0, 50, 0, 1)).toBe(0.5);
    });

    it('should map to an inverted range correctly', () => {
        expect(map(2, 0, 10, 100, 0)).toBe(80);
        expect(map(10, 0, 10, 100, 0)).toBe(0);
        expect(map(0, 0, 10, 100, 0)).toBe(100);
    });

    it('should handle ranges with negative numbers', () => {
        expect(map(0, -10, 10, 0, 100)).toBe(50);
        expect(map(-10, -10, 10, 0, 100)).toBe(0);
        expect(map(5, 0, 10, -100, 100)).toBe(0);
        expect(map(-25, -50, 0, 0, 100)).toBe(50);
    });

    it('should work correctly with floating-point numbers', () => {
        expect(map(0.5, 0, 1, 0, 10)).toBe(5);
        expect(map(2.5, 0, 5, -1, 1)).toBe(0);
        // Use toBeCloseTo for potential floating point inaccuracies
        expect(map(3, 2, 4, 0.5, 1.5)).toBeCloseTo(1);
    });

    it('should handle the edge case where input range is zero', () => {
        // If inMin === inMax, it should return outMin.
        expect(map(5, 10, 10, 100, 200)).toBe(100);
        expect(map(0, 0, 0, -50, 50)).toBe(-50);
    });

    it('should perform consistently under a brutal stress test', () => {
        const iterations = 5000;
        for (let i = 0; i < iterations; i++) {
            const value = random(-1000, 1000);
            const inMin = random(-2000, 0);
            // Ensure inMax > inMin to avoid division by zero in the test logic
            const inMax = random(inMin + 1, 2000); 
            const outMin = random(-10000, 10000);
            const outMax = random(-10000, 10000);
            // Manual calculation using our own library functions (dogfooding)
            const term1 = subtract(value, inMin);
            const term2 = subtract(outMax, outMin);
            const term3 = subtract(inMax, inMin);
            const expected = sum(divide(multiply(term1, term2), term3), outMin);
            const result = map(value, inMin, inMax, outMin, outMax);
            expect(result).toBeCloseTo(expected);
        }
    });
});

//-- 

describe('randomFloat', () => {
    it('should always return a number greater than or equal to 0', () => {
        for (let i = 0; i < 1000; i++) {
            expect(randomFloat()).toBeGreaterThanOrEqual(0);
        }
    });

    it('should always return a number less than 1', () => {
        for (let i = 0; i < 1000; i++) {
            expect(randomFloat()).toBeLessThan(1);
        }
    });

    it('should return different numbers on subsequent calls', () => {
        const results = Array(100).fill(0).map(() => randomFloat());
        const uniqueResults = new Set(results);
        expect(uniqueResults.size).toBeGreaterThan(1);
    });
});

//--

describe('random', () => {
    it('should behave like randomFloat when called with no arguments', () => {
        for (let i = 0; i < 1000; i++) {
            const result = random();
            expect(result).toBeGreaterThanOrEqual(0);
            expect(result).toBeLessThan(1);
        }
    });

    it('should generate a number within a positive integer range', () => {
        for (let i = 0; i < 1000; i++) {
            const result = random(10, 20);
            expect(result).toBeGreaterThanOrEqual(10);
            expect(result).toBeLessThan(20);
        }
    });

    it('should generate a number within a range that includes negatives', () => {
        for (let i = 0; i < 1000; i++) {
            const result = random(-50, -10);
            expect(result).toBeGreaterThanOrEqual(-50);
            expect(result).toBeLessThan(-10);
        }
    });

    it('should handle floating-point ranges correctly', () => {
        for (let i = 0; i < 1000; i++) {
            const result = random(-2.5, 2.5);
            expect(result).toBeGreaterThanOrEqual(-2.5);
            expect(result).toBeLessThan(2.5);
        }
    });

    it('should handle the edge case where min and max are the same', () => {
        expect(random(5, 5)).toBe(5);
        expect(random(-10, -10)).toBe(-10);
    });

    it('should perform consistently under a brutal stress test with varied ranges', () => {
        const iterations = 5000;
        for (let i = 0; i < iterations; i++) {
            const min = random(-1000, 1000);
            const max = random(min, 1000);

            const result = random(min, max);

            expect(result).toBeGreaterThanOrEqual(min);
            expect(result).toBeLessThanOrEqual(max);
        }
    });
});

//-- 

describe('isNearlyEqual', () => {
    it('should return true for numbers that are very close (using default epsilon)', () => {
        expect(isNearlyEqual(10, 10.000001)).toBe(true);
        expect(isNearlyEqual(0, 0.0000001)).toBe(true);
        expect(isNearlyEqual(0.1 + 0.2, 0.3)).toBe(true);
    });

    it('should return false for numbers that are not close enough (using default epsilon)', () => {
        expect(isNearlyEqual(10, 10.001)).toBe(false);
        expect(isNearlyEqual(1, 2)).toBe(false);
        expect(isNearlyEqual(0.1, 0.2)).toBe(false);
    });

    it('should respect a custom epsilon value', () => {
        expect(isNearlyEqual(1.1, 1.2, 0.2)).toBe(true);
        expect(isNearlyEqual(1.1, 1.2, 0.05)).toBe(false);
        expect(isNearlyEqual(5.000005, 5.000006, 1e-7)).toBe(false);
    });

    it('should work correctly with negative numbers', () => {
        expect(isNearlyEqual(-10, -10.000001)).toBe(true);
        expect(isNearlyEqual(-0.1 - 0.2, -0.3)).toBe(true);
        expect(isNearlyEqual(-5, 5)).toBe(false);
        expect(isNearlyEqual(-1.0001, 1.0001)).toBe(false);
    });

    it('should handle zero correctly', () => {
        expect(isNearlyEqual(0, 0)).toBe(true);
        expect(isNearlyEqual(0, -0)).toBe(true);
        expect(isNearlyEqual(0.000001, 0)).toBe(true);
        expect(isNearlyEqual(-0.000001, 0)).toBe(true);
        expect(isNearlyEqual(1, 0)).toBe(false);
    });

    it('should perform consistently under a brutal stress test', () => {
        const iterations = 5000;
        const epsilon = 0.00001;

        for (let i = 0; i < iterations; i++) {
            const baseNum = random(-1e6, 1e6);
            const smallDelta = random(0, epsilon / 2);
            const nearlyEqualNum = sum(baseNum, smallDelta); // Dogfooding
            expect(isNearlyEqual(baseNum, nearlyEqualNum)).toBe(true);
            const largeDelta = random(epsilon * 2, epsilon * 10);
            const notNearlyEqualNum = sum(baseNum, largeDelta); // Dogfooding
            expect(isNearlyEqual(baseNum, notNearlyEqualNum)).toBe(false);
        }
    });
});

//-- 

describe('isPowerOfTwo', () => {
    describe('with "number" type inputs', () => {
        it('should return true for positive integer powers of two', () => {
            expect(isPowerOfTwo(1)).toBe(true); // 2^0
            expect(isPowerOfTwo(2)).toBe(true);
            expect(isPowerOfTwo(1024)).toBe(true); // 2^10
            expect(isPowerOfTwo(2 ** 30)).toBe(true); // 2^30
        });

        it('should return false for positive integers that are not powers of two', () => {
            expect(isPowerOfTwo(3)).toBe(false);
            expect(isPowerOfTwo(100)).toBe(false);
            expect(isPowerOfTwo(Number.MAX_SAFE_INTEGER)).toBe(false);
        });

        it('should return false for zero and negative integers', () => {
            expect(isPowerOfTwo(0)).toBe(false);
            expect(isPowerOfTwo(-2)).toBe(false);
            expect(isPowerOfTwo(-16)).toBe(false);
        });

        it('should return false for any non-integer number', () => {
            expect(isPowerOfTwo(4.1)).toBe(false);
            expect(isPowerOfTwo(15.999)).toBe(false);
            expect(isPowerOfTwo(0.5)).toBe(false);
            expect(isPowerOfTwo(-2.5)).toBe(false);
        });

        it('should return true for floating-point numbers that are whole (e.g., 4.0)', () => {
            expect(isPowerOfTwo(4.0)).toBe(true);
            expect(isPowerOfTwo(16.0)).toBe(true);
            expect(isPowerOfTwo(17.0)).toBe(false);
        });

    });

    describe('with "bigint" type inputs', () => {

        it('should return true for positive BigInt powers of two', () => {
            expect(isPowerOfTwo(1n)).toBe(true);
            expect(isPowerOfTwo(2n)).toBe(true);
            expect(isPowerOfTwo(2n ** 100n)).toBe(true);
        });

        it('should return false for positive BigInts that are not powers of two', () => {
            expect(isPowerOfTwo(3n)).toBe(false);
            expect(isPowerOfTwo(100n)).toBe(false);
            expect(isPowerOfTwo((2n ** 100n) - 1n)).toBe(false);
        });

        it('should return false for zero and negative BigInts', () => {
            expect(isPowerOfTwo(0n)).toBe(false);
            expect(isPowerOfTwo(-2n)).toBe(false);
            expect(isPowerOfTwo(-16n)).toBe(false);
        });

        it('should perform consistently under a brutal stress test', () => {
            for (let i = 2; i < 500; i++) {
                const powerOfTwo = 2n ** BigInt(i);
                expect(isPowerOfTwo(powerOfTwo)).toBe(true);
                expect(isPowerOfTwo(powerOfTwo - 1n)).toBe(false);
                expect(isPowerOfTwo(powerOfTwo + 1n)).toBe(false);
            }
        });
    });
});

//--

describe('distance', () => {
    it('should return 0 for the distance between a point and itself', () => {
        expect(distance(0, 0, 0, 0)).toBe(0);
        expect(distance(10, 5, 10, 5)).toBe(0);
        expect(distance(-100, -50, -100, -50)).toBe(0);
    });

    it('should calculate the distance correctly for horizontal and vertical lines', () => {
        expect(distance(0, 0, 5, 0)).toBe(5);
        expect(distance(10, 0, 5, 0)).toBe(5);
        expect(distance(0, 0, 0, 10)).toBe(10);
        expect(distance(0, 2, 0, -2)).toBe(4);
    });

    it('should calculate the distance correctly for diagonal lines (Pythagorean theorem)', () => {
        expect(distance(0, 0, 3, 4)).toBe(5);
        expect(distance(1, 1, 4, 5)).toBe(5);
        // Triângulo 5-12-13
        expect(distance(0, 0, 5, 12)).toBe(13);
    });

    it('should handle negative coordinates correctly', () => {
        expect(distance(-3, -4, 0, 0)).toBe(5);
        expect(distance(-1, -1, 1, 1)).toBeCloseTo(2.8284271247461903);
        expect(distance(10, 10, -10, -10)).toBeCloseTo(28.284271247461902);
    });

    it('should work with floating-point coordinates', () => {
        expect(distance(0.5, 0.5, 1.5, 1.5)).toBeCloseTo(1.414213562373095);
        expect(distance(-2.5, 1, 2.5, -11)).toBeCloseTo(13);
    });

    it('should perform consistently under a brutal stress test', () => {
        const iterations = 5000;
        for (let i = 0; i < iterations; i++) {
            const x1 = random(-1000, 1000);
            const y1 = random(-1000, 1000);
            const x2 = random(-1000, 1000);
            const y2 = random(-1000, 1000);
            // dofrooding - calculating expected using our own library functions
            const deltaX = subtract(x2, x1);
            const deltaY = subtract(y2, y1);
            const xSquared = power(deltaX, 2);
            const ySquared = power(deltaY, 2);
            const expected = sqrt(sum(xSquared, ySquared));
            const result = distance(x1, y1, x2, y2);
            expect(result).toBeCloseTo(expected);
        }
    });
});

//-- 

describe('formatCurrency', () => {
    it('should format numbers correctly with default options', () => {
        expect(formatCurrency(1234.56)).toBe('$1,234.56');
        expect(formatCurrency(1234.5)).toBe('$1,234.50');
        expect(formatCurrency(1234)).toBe('$1,234.00');
        expect(formatCurrency(0.99)).toBe('$0.99');
        expect(formatCurrency(1234567.89)).toBe('$1,234,567.89');
    });

    it('should handle the custom currencySymbol option', () => {
        expect(formatCurrency(100, { currencySymbol: 'R$ ' })).toBe('R$ 100.00');
        expect(formatCurrency(50.25, { currencySymbol: '€' })).toBe('€50.25');
        expect(formatCurrency(10.1, { currencySymbol: '' })).toBe('10.10');
    });

    it('should handle custom decimalSeparator and thousandsSeparator options', () => {
        // EU style
        expect(formatCurrency(1234.56, { decimalSeparator: ',', thousandsSeparator: '.' })).toBe('$1.234,56');
        // R$ Brazilian style
        expect(formatCurrency(98765.43, { currencySymbol: 'R$ ', decimalSeparator: ',', thousandsSeparator: '.' }))
            .toBe('R$ 98.765,43');
        // LIBRA UK style
        expect(formatCurrency(1234567.89, { currencySymbol: '£', decimalSeparator: '.', thousandsSeparator: ',' }))
            .toBe('£1,234,567.89');
        // YEN Japan style
        expect(formatCurrency(5000, { currencySymbol: '¥', decimalSeparator: '.', thousandsSeparator: ',' }))
            .toBe('¥5,000.00');
    });

    it('should handle the custom decimals option and round correctly', () => {
        expect(formatCurrency(123.45, { decimals: 0 })).toBe('$123');
        expect(formatCurrency(123.456, { decimals: 2 })).toBe('$123.46');
        expect(formatCurrency(123.454, { decimals: 2 })).toBe('$123.45'); 
        expect(formatCurrency(123.4, { decimals: 4 })).toBe('$123.4000');
    });

    it('should handle negative numbers correctly with all options', () => {
        expect(formatCurrency(-500.75)).toBe('$-500.75');
        expect(formatCurrency(-12345.6, { currencySymbol: '€', decimalSeparator: ',', thousandsSeparator: '.' }))
            .toBe('€-12.345,60');
    });

    it('should perform consistently under a brutal stress test', () => {
        const iterations = 5000;
        const symbols = ['$', '€', 'R$ ', '£', '¥', '₹', '₩', '₽', '₺', '₪', '₫', '₴', '₦', '₱', '฿'];

        for (let i = 0; i < iterations; i++) {
            const randomNum = random(-1e6, 1e6);
            const decimals = Math.floor(random(0, 5));
            const symbol = symbols[Math.floor(random(0, symbols.length))];
            
            const options = {
                currencySymbol: symbol,
                decimals: decimals,
                decimalSeparator: ',',
                thousandsSeparator: '.'
            };

            const result = formatCurrency(randomNum, options);
            expect(typeof result).toBe('string');
            expect(result.startsWith(symbol)).toBe(true);
            if (decimals > 0) {
                const parts = result.split(',');
                expect(parts[1].length).toBe(decimals);
            }
        }
    });
});

//--

describe('toWordsPure', () => {

    it('should convert basic integers correctly', () => {
        expect(toWordsPure(0)).toBe('zero');
        expect(toWordsPure(1)).toBe('one');
        expect(toWordsPure(19)).toBe('nineteen');
        expect(toWordsPure(20)).toBe('twenty');
        expect(toWordsPure(21)).toBe('twenty one');
        expect(toWordsPure(100)).toBe('one hundred');
        expect(toWordsPure(101)).toBe('one hundred one');
        expect(toWordsPure(999)).toBe('nine hundred ninety nine');
    });

    it('should convert numbers with decimals correctly', () => {
        expect(toWordsPure(0.5)).toBe('zero point five');
        expect(toWordsPure(123.45)).toBe('one hundred twenty three point four five');
        expect(toWordsPure(99.001)).toBe('ninety nine point zero zero one');
        expect(toWordsPure(0.123456789)).toBe('zero point one two three four five six seven eight nine');
    });

    it('should handle negative numbers correctly', () => {
        expect(toWordsPure(-1)).toBe('minus one');
        expect(toWordsPure(-999)).toBe('minus nine hundred ninety nine');
        expect(toWordsPure(-123.45)).toBe('minus one hundred twenty three point four five');
        expect(toWordsPure(-0.5)).toBe('minus zero point five');
    });

    it('should handle large scale numbers correctly up to the safe limit', () => {
        expect(toWordsPure(1000)).toBe('one thousand');
        expect(toWordsPure(1001)).toBe('one thousand one');
        expect(toWordsPure(2500)).toBe('two thousand five hundred');
        expect(toWordsPure(1000000)).toBe('one million');
        expect(toWordsPure(123456789)).toBe('one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine');
        expect(toWordsPure(1_000_000_000_000_000)).toBe('one quadrillion');
    });

    it('should handle edge cases and invalid inputs gracefully', () => {
        expect(toWordsPure(Number.MAX_SAFE_INTEGER))
            .toBe('nine quadrillion seven trillion one hundred ninety nine billion two hundred fifty four million seven hundred forty thousand nine hundred ninety one');
        expect(toWordsPure(Number.MAX_SAFE_INTEGER + 1))
            .toBe('Integer part is too large or not a safe integer.');
        expect(toWordsPure(-Number.MAX_SAFE_INTEGER - 1))
        expect(toWordsPure(10, 'xx-XX')).toBe("Language 'xx-XX' is not supported.");
        
        // @ts-ignore
        expect(toWordsPure('hello')).toBe('Invalid number input.');
        // @ts-ignore
        expect(toWordsPure(NaN)).toBe('Invalid number input.');
        // @ts-ignore
        expect(toWordsPure(Infinity)).toBe('Invalid number input.');
    });

    it('should perform consistently under a brutal stress test', () => {
        const iterations = 10000;
        
        for (let i = 0; i < iterations; i++) {
            const randomNum = (Math.random() * 2 - 1) * Number.MAX_SAFE_INTEGER;
            expect(() => toWordsPure(randomNum)).not.toThrow();
            const result = toWordsPure(randomNum);
            expect(typeof result).toBe('string');
            expect(result.length).toBeGreaterThan(0);
            if (randomNum < 0) {
                expect(result.startsWith('minus')).toBe(true);
            }
        }
    });
});

//--

describe('toWordsCurrency', () => {
    it('should convert numbers correctly with default options (USD)', () => {
        expect(toWordsCurrency(0)).toBe('zero dollars');
        expect(toWordsCurrency(123.45)).toBe('one hundred twenty three dollars and forty five cents');
        expect(toWordsCurrency(10.00)).toBe('ten dollars');
        expect(toWordsCurrency(0.50)).toBe('fifty cents');
        expect(toWordsCurrency(45.678)).toBe('forty five dollars and sixty eight cents');
    });

    it('should handle singular vs. plural currency names correctly', () => {
        expect(toWordsCurrency(1)).toBe('one dollar');
        expect(toWordsCurrency(2)).toBe('two dollars');
        expect(toWordsCurrency(0.01)).toBe('one cent');
        expect(toWordsCurrency(0.02)).toBe('two cents');
        expect(toWordsCurrency(1.01)).toBe('one dollar and one cent');
        expect(toWordsCurrency(2.50)).toBe('two dollars and fifty cents');
    });

    it('should work correctly with custom currency options', () => {
        const brlOptions = {
            majorSingular: 'real',
            majorPlural: 'reais',
            minorSingular: 'centavo',
            minorPlural: 'centavos'
        };
        expect(toWordsCurrency(123.45, brlOptions)).toBe('one hundred twenty three reais and forty five centavos');
        expect(toWordsCurrency(1.01, brlOptions)).toBe('one real and one centavo');
        expect(toWordsCurrency(2, brlOptions)).toBe('two reais');
    });

    it('should handle negative numbers correctly', () => {
        expect(toWordsCurrency(-10.50)).toBe('minus ten dollars and fifty cents');
        expect(toWordsCurrency(-0.25)).toBe('minus twenty five cents');
        expect(toWordsCurrency(-1)).toBe('minus one dollar');
    });

    it('should handle large numbers and safe integer limits', () => {
        expect(toWordsCurrency(1_234_567.89))
            .toBe('one million two hundred thirty four thousand five hundred sixty seven dollars and eighty nine cents');
        
        expect(toWordsCurrency(Number.MAX_SAFE_INTEGER / 100).length).toBeGreaterThan(50);
        
        expect(toWordsCurrency(Number.MAX_SAFE_INTEGER + 1))
            .toBe('Integer part is too large or not a safe integer.');
    });

    it('should perform consistently under a brutal stress test', () => {
        console.log('Running stress test for toWordsCurrency...');
        const iterations = 5000;
        for (let i = 0; i < iterations; i++) {
            const randomNum = random(-1e6, 1e6);
            const result = toWordsCurrency(randomNum);

            expect(typeof result).toBe('string');
            expect(result.length).toBeGreaterThan(0);

            if (randomNum < 0) {
                expect(result.startsWith('minus')).toBe(true);
            }
            if (Math.trunc(randomNum) === 1) {
                expect(result).toContain('dollar');
                expect(result).not.toContain('dollars');
            }
            if (Math.trunc(randomNum) > 1) {
                expect(result).toContain('dollars');
            }
        }
        console.log('Stress test for toWordsCurrency completed successfully!');
    });
});

//-- 

describe('toWordsPure and toWordsCurrency for pt-BR', () => {

    describe('toWordsPure (pt-BR)', () => {

        it('should convert basic integers and hundreds correctly', () => {
            expect(toWordsPure(0, 'pt-BR')).toBe('zero');
            expect(toWordsPure(21, 'pt-BR')).toBe('vinte e um');
            expect(toWordsPure(100, 'pt-BR')).toBe('cem');
            expect(toWordsPure(101, 'pt-BR')).toBe('cento e um');
            expect(toWordsPure(404, 'pt-BR')).toBe('quatrocentos e quatro');
            expect(toWordsPure(999, 'pt-BR')).toBe('novecentos e noventa e nove');
        });

        it('should handle large scale numbers with correct conjunctions', () => {
            expect(toWordsPure(1001, 'pt-BR')).toBe('mil e um');
            expect(toWordsPure(1500, 'pt-BR')).toBe('mil e quinhentos');
            expect(toWordsPure(1200000, 'pt-BR')).toBe('um milhão e duzentos mil');
        });

        it('should handle decimals with "vírgula" by spelling digits individually', () => {
            expect(toWordsPure(123.45, 'pt-BR')).toBe('cento e vinte e três vírgula quatro cinco');
            expect(toWordsPure(120.01, 'pt-BR')).toBe('cento e vinte vírgula zero um');
            expect(toWordsPure(999.99, 'pt-BR')).toBe('novecentos e noventa e nove vírgula nove nove');
        });

        it('should handle negative numbers correctly', () => {
            expect(toWordsPure(-50.1, 'pt-BR')).toBe('menos cinquenta vírgula um');
        });

        it('should perform consistently under a brutal stress test', () => {
            const iterations = 5000;
            for (let i = 0; i < iterations; i++) {
                const randomNum = round(random(-100000, 100000), 5);
                expect(() => toWordsPure(randomNum, 'pt-BR')).not.toThrow();
                const result = toWordsPure(randomNum, 'pt-BR');
                if (randomNum < 0) {
                    expect(result.startsWith('menos')).toBe(true);
                }
                if (!Number.isInteger(randomNum)) {
                    expect(result).toContain('vírgula');
                }
            }
        });
    });

    describe('toWordsCurrency (pt-BR)', () => {
        const brlOptions = { lang: 'pt-BR' };

        it('should convert varied currency values correctly', () => {
            expect(toWordsCurrency(0, brlOptions)).toBe('zero reais');
            expect(toWordsCurrency(0.50, brlOptions)).toBe('cinquenta centavos');
            expect(toWordsCurrency(25.50, brlOptions)).toBe('vinte e cinco reais e cinquenta centavos');
            expect(toWordsCurrency(999.99, brlOptions)).toBe('novecentos e noventa e nove reais e noventa e nove centavos');
            expect(toWordsCurrency(1200000, brlOptions)).toBe('um milhão e duzentos mil reais');
        });

        it('should handle singular vs. plural for BRL correctly', () => {
            expect(toWordsCurrency(1, brlOptions)).toBe('um real');
            expect(toWordsCurrency(2, brlOptions)).toBe('dois reais');
            expect(toWordsCurrency(0.01, brlOptions)).toBe('um centavo');
            expect(toWordsCurrency(0.02, brlOptions)).toBe('dois centavos');
            expect(toWordsCurrency(1.01, brlOptions)).toBe('um real e um centavo');
            expect(toWordsCurrency(2.01, brlOptions)).toBe('dois reais e um centavo');
        });

        it('should handle rounding correctly for 3 and 4 decimal places', () => {
            // Arredondamento para baixo
            expect(toWordsCurrency(10.554, brlOptions)).toBe('dez reais e cinquenta e cinco centavos');
            // Arredondamento para cima
            expect(toWordsCurrency(10.555, brlOptions)).toBe('dez reais e cinquenta e seis centavos');
            // Casos de "virada" de Real
            expect(toWordsCurrency(25.995, brlOptions)).toBe('vinte e seis reais');
            expect(toWordsCurrency(0.999, brlOptions)).toBe('um real');
        });

        it('should handle negative currency values correctly', () => {
            expect(toWordsCurrency(-1, brlOptions)).toBe('menos um real');
            expect(toWordsCurrency(-0.50, brlOptions)).toBe('menos cinquenta centavos');
            expect(toWordsCurrency(-125.45, brlOptions)).toBe('menos cento e vinte e cinco reais e quarenta e cinco centavos');
        });

        it('should perform consistently under a brutal stress test', () => {
            const iterations = 5000;
            for (let i = 0; i < iterations; i++) {
                const randomNum = random(-1e6, 1e6);
                const result = toWordsCurrency(randomNum, brlOptions);

                expect(typeof result).toBe('string');
                if (randomNum < 0) {
                    expect(result.startsWith('menos')).toBe(true);
                }

                const roundedNum = divide(round(multiply(absolute(randomNum), 100)), 100);
                const integerPart = floor(roundedNum);
                const fractionalPart = round(multiply(subtract(roundedNum, integerPart), 100));

                if (integerPart === 1) {
                    expect(result).toContain('real');
                } else {
                    expect(result).toContain('reais');
                }

                if (fractionalPart === 1) {
                    expect(result).toContain('centavo');
                } else if (fractionalPart > 1) {
                    expect(result).toContain('centavos');
                }
            }
        });
    });
});

//--

describe('toWordsPure (es-ES)', () => {

    it('should convert basic integers correctly in Spanish', () => {
        expect(toWordsPure(0, 'es-ES')).toBe('cero');
        expect(toWordsPure(1, 'es-ES')).toBe('uno');
        expect(toWordsPure(15, 'es-ES')).toBe('quince');
        //
        expect(toWordsPure(20, 'es-ES')).toBe('veinte');
        expect(toWordsPure(21, 'es-ES')).toBe('veintiuno');
        expect(toWordsPure(29, 'es-ES')).toBe('veintinueve');
        //
        expect(toWordsPure(30, 'es-ES')).toBe('treinta');
        expect(toWordsPure(31, 'es-ES')).toBe('treinta y uno');
        expect(toWordsPure(88, 'es-ES')).toBe('ochenta y ocho');
    });

    it('should handle hundreds correctly, including "cien" vs "ciento"', () => {
        expect(toWordsPure(100, 'es-ES')).toBe('cien');
        expect(toWordsPure(101, 'es-ES')).toBe('ciento uno');
        expect(toWordsPure(115, 'es-ES')).toBe('ciento quince');
        expect(toWordsPure(200, 'es-ES')).toBe('doscientos');
        expect(toWordsPure(555, 'es-ES')).toBe('quinientos cincuenta y cinco');
        expect(toWordsPure(999, 'es-ES')).toBe('novecientos noventa y nueve');
    });

    it('should handle large scale numbers and special cases like "un millón"', () => {
        expect(toWordsPure(1000, 'es-ES')).toBe('mil');
        expect(toWordsPure(1001, 'es-ES')).toBe('mil uno');
        expect(toWordsPure(2021, 'es-ES')).toBe('dos mil veintiuno');
        // Testa a regra de apócope: "uno" vira "un" antes de "millón"
        expect(toWordsPure(1000000, 'es-ES')).toBe('un millón');
        expect(toWordsPure(2000000, 'es-ES')).toBe('dos millones');
        expect(toWordsPure(21000000, 'es-ES')).toBe('veintiún millones');
    });

    it('should handle decimals with "coma" by spelling digits individually', () => {
        expect(toWordsPure(1.5, 'es-ES')).toBe('uno coma cinco');
        expect(toWordsPure(120.01, 'es-ES')).toBe('ciento veinte coma cero uno');
        expect(toWordsPure(99.99, 'es-ES')).toBe('noventa y nueve coma nueve nueve');
    });

    it('should handle negative numbers with "menos"', () => {
        expect(toWordsPure(-10, 'es-ES')).toBe('menos diez');
        expect(toWordsPure(-1500.25, 'es-ES')).toBe('menos mil quinientos coma dos cinco');
    });

    it('should perform consistently under a brutal stress test', () => {
        const iterations = 5000;
        for (let i = 0; i < iterations; i++) {
            const randomNum = round(random(-1e6, 1e6), 4);
            
            expect(() => toWordsPure(randomNum, 'es-ES')).not.toThrow();
            const result = toWordsPure(randomNum, 'es-ES');
            
            if (randomNum < 0) {
                expect(result.startsWith('menos')).toBe(true);
            }
            if (!Number.isInteger(randomNum)) {
                expect(result).toContain('coma');
            }
        }
    });
});

//--

describe('toWordsCurrency (es-ES)', () => {
    const esOptions = { lang: 'es-ES' };

    it('should convert currency correctly with default Spanish options (Euros)', () => {
        expect(toWordsCurrency(0, esOptions)).toBe('cero euros');
        expect(toWordsCurrency(25.50, esOptions)).toBe('veinticinco euros con cincuenta céntimos');
        expect(toWordsCurrency(0.75, esOptions)).toBe('setenta y cinco céntimos');
    });

    it('should handle singular vs. plural for Euros correctly', () => {
        expect(toWordsCurrency(1, esOptions)).toBe('un euro');
        expect(toWordsCurrency(2, esOptions)).toBe('dos euros');
        expect(toWordsCurrency(0.01, esOptions)).toBe('un céntimo');
        expect(toWordsCurrency(0.02, esOptions)).toBe('dos céntimos');
        expect(toWordsCurrency(1.01, esOptions)).toBe('un euro con un céntimo');
    });
    
    it('should handle rounding correctly', () => {
        expect(toWordsCurrency(10.555, esOptions)).toBe('diez euros con cincuenta y seis céntimos');
        expect(toWordsCurrency(25.995, esOptions)).toBe('veintiséis euros');
    });

    it('should handle special cases with "un millón"', () => {
        // "un" é usado antes de "euro" e "millón"
        expect(toWordsCurrency(1000000, esOptions)).toBe('un millón de euros');
    });

    it('should work correctly with custom currency names in Spanish', () => {
        const customOptions = { 
            lang: 'es-ES',
            majorSingular: 'dólar',
            majorPlural: 'dólares',
            minorSingular: 'centavo',
            minorPlural: 'centavos'
        };
        expect(toWordsCurrency(5.50, customOptions)).toBe('cinco dólares con cincuenta centavos');
        expect(toWordsCurrency(1.01, customOptions)).toBe('un dólar con un centavo');
    });

    it('should perform consistently under a brutal stress test', () => {
        const iterations = 5000;
        for (let i = 0; i < iterations; i++) {
            const randomNum = round(random(-1e6, 1e6), 4);
            const result = toWordsCurrency(randomNum, esOptions);

            expect(typeof result).toBe('string');
            if (randomNum < 0) {
                expect(result.startsWith('menos')).toBe(true);
            }
            
            const roundedNum = divide(round(multiply(absolute(randomNum), 100)), 100);
            const integerPart = floor(roundedNum);
            
            if (integerPart === 1) {
                expect(result).toContain('euro');
            } else {
                expect(result).toContain('euros');
            }
        }
    });
});

