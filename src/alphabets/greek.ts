/**
 * @fileoverview Initial module for CodyMath containing the Greek alphabet.
 * @version 0.4.0
 * @license MIT
 * * @author Jackson Douglas de Souza
 * @see {@link https://www.linkedin.com/in/jacksondouglasdsouza/|LinkedIn}
 * @see {@link https://github.com/jacksondouglasdesouza|GitHub}
 * * @description
 * This module is based on universally accepted mathematical constants and tables.
 * While the initial data is from Schaum's Outlines, the module is cross-referenced
 * with other major mathematical handbooks to ensure accuracy and completeness.
 * * @see
 * Sources & References:
 * 1. Spiegel, M. R., Lipschutz, S., & Liu, J. "Schaum's Outline of Mathematical Handbook of Formulas and Tables".
 * 2. National Institute of Standards and Technology (NIST). "Digital Library of Mathematical Functions (DLMF)".
 * 3. Abramowitz, M., & Stegun, I. A. "Handbook of Mathematical Functions".
 * 4. Gradshteyn, I. S., & Ryzhik, I. M. "Table of Integrals, Series, and Products".
 * 5. Wolfram Research. "Wolfram MathWorld".
 */

/**
 * Interface defining the structure of a Greek letter.
 */
interface GreekLetter {
  /** The English name of the letter. */
    name: string;
    /** The lowercase character. */
    lower: string;
    /** The uppercase character. */
    upper: string;
}

/**
 * An object containing all 24 letters of the Greek alphabet.
 * The keys are the English names of the letters for programmatic access.
 */
export const greekAlphabet: { [key: string]: GreekLetter } = {
    alpha:   { name: 'Alpha',   lower: 'α', upper: 'Α' },
    beta:    { name: 'Beta',    lower: 'β', upper: 'Β' },
    gamma:   { name: 'Gamma',   lower: 'γ', upper: 'Γ' },
    delta:   { name: 'Delta',   lower: 'δ', upper: 'Δ' },
    epsilon: { name: 'Epsilon', lower: 'ε', upper: 'Ε' },
    zeta:    { name: 'Zeta',    lower: 'ζ', upper: 'Ζ' },
    eta:     { name: 'Eta',     lower: 'η', upper: 'Η' },
    theta:   { name: 'Theta',   lower: 'θ', upper: 'Θ' },
    iota:    { name: 'Iota',    lower: 'ι', upper: 'Ι' },
    kappa:   { name: 'Kappa',   lower: 'κ', upper: 'Κ' },
    lambda:  { name: 'Lambda',  lower: 'λ', upper: 'Λ' },
    mu:      { name: 'Mu',      lower: 'μ', upper: 'Μ' },
    nu:      { name: 'Nu',      lower: 'ν', upper: 'Ν' },
    xi:      { name: 'Xi',      lower: 'ξ', upper: 'Ξ' },
    omicron: { name: 'Omicron', lower: 'ο', upper: 'Ο' },
    pi:      { name: 'Pi',      lower: 'π', upper: 'Π' },
    rho:     { name: 'Rho',     lower: 'ρ', upper: 'Ρ' },
    sigma:   { name: 'Sigma',   lower: 'σ', upper: 'Σ' },
    tau:     { name: 'Tau',     lower: 'τ', upper: 'Τ' },
    upsilon: { name: 'Upsilon', lower: 'υ', upper: 'Υ' },
    phi:     { name: 'Phi',     lower: 'φ', upper: 'Φ' },
    chi:     { name: 'Chi',     lower: 'χ', upper: 'Χ' },
    psi:     { name: 'Psi',     lower: 'ψ', upper: 'Ψ' },
    omega:   { name: 'Omega',   lower: 'ω', upper: 'Ω' }
};