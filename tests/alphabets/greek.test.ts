/**
 * @fileoverview Unit tests for the Greek alphabet module.
 * @version 0.2.0
 * @license MIT
 * @author Jackson Douglas de Souza
 * @see {@link https://www.linkedin.com/in/jacksondouglasdsouza/|LinkedIn}
 * @see {@link https://github.com/jacksondouglasdesouza|GitHub}
 * @date 2025-09-15
 */

import { describe, it, expect } from 'vitest';
import { greekAlphabet } from '../../src/alphabets/greek';

describe('Module: greekAlphabet', () => {

    it('should be a valid, non-empty object', () => {
        // Check if the object is defined and not null
        expect(greekAlphabet).toBeDefined();
        // Check if the type is 'object'
        expect(typeof greekAlphabet).toBe('object');
        // Ensure the object is not empty
        expect(Object.keys(greekAlphabet).length).toBeGreaterThan(0);
    });

    it('should contain all 24 letters of the Greek alphabet', () => {
        // The most important check: it must contain exactly 24 letters
        const letterCount = Object.keys(greekAlphabet).length;
        expect(letterCount).toBe(24);
    });

    it('should have the correct properties for specific letters (alpha and omega)', () => {
        // Get the first letter, 'alpha', for a spot check
        const alpha = greekAlphabet.alpha;
        expect(alpha).toEqual({
        name: 'Alpha',
        lower: 'α',
        upper: 'Α',
        });

        // Get the last letter, 'omega', to ensure the data is complete
        const omega = greekAlphabet.omega;
        expect(omega).toEqual({
        name: 'Omega',
        lower: 'ω',
        upper: 'Ω',
        });
    });

    it('should not contain any undefined or null properties for any letter', () => {
        // A robustness test: iterate through all letters and verify data integrity
        for (const letterKey in greekAlphabet) {
        const letter = greekAlphabet[letterKey];
        expect(letter.name).toBeDefined();
        expect(letter.lower).toBeDefined();
        expect(letter.upper).toBeDefined();
        }
    });
    
});