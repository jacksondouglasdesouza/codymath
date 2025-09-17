<p align="center">
  <img src="./assets/logoCodyMath.svg" alt="CodyMath Logo" width="400">
</p>
<div style="display: flex; align-items: center; gap: 20px;">
  <a href="https://www.npmjs.com/package/codymath" target="_blank">
    <img src="./assets/Npm-logo.svg" alt="NPM Package" width="100">
  </a>
  <strong>Current Status: Early Development (v0.3.0)</strong>
</div>
CodyMath is on a mission to become the most complete open-source mathematics library for JavaScript and TypeScript. By implementing thousands of rigorously tested formulas from authoritative sources, we provide a universal toolbox for developers, students, and researchers worldwide.


---
## ❤️ Support the Project

**CodyMath** is an ambitious open-source project, built and maintained with dedication during free time. Our goal is to create the largest and most complete mathematics library for the global JavaScript and TypeScript community.

If you find this library useful and it helps you in your projects, please consider making a contribution. Every donation helps us dedicate more time to adding new features, improving documentation, and ensuring the project stays healthy and active for years to come.

Thank you for your support!

| Method | Address / Link |
| :--- | :--- |
| ![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white) | [`Click here to donate via PayPal`](https://www.paypal.com/donate/?hosted_button_id=8XYHYQNR2E27J) |
| ![Bitcoin](https://img.shields.io/badge/Bitcoin-000000?style=for-the-badge&logo=bitcoin&logoColor=white) | `bc1q3zu0nng6765ptpmr86jcfn68h6e62sda7382e3` |
| ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white) | `0xF7Eb1D45cDD527b11BC49416DDfA51AD38e26ca1` |
## Usage

### Installation
```bash
npm install codymath
```
### Or use CDN
```javascript
<script src="https://cdn.jsdelivr.net/npm/codymath@latest/dist/codymath.umd.js"></script>
```
### HTML Usage Example
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
  <div id="output"></div>

  <script>
    // 2. You can now use the global 'CodyMath' object
    const { greekAlphabet } = CodyMath;
    const omega = greekAlphabet.omega;

    // Example of how to display it on the page
    document.getElementById('output').innerText = `The Greek letter is ${omega.name} (${omega.upper}, ${omega.lower})`;
  </script>
</body>
</html>
```
---
## Current Features
### Module: `alphabets/greek`
* **Alphabets:** Provides the full 24 letters of the Greek alphabet for use in formulas and notation. Below is a complete list of the available letters.
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
#### Usage Example
// Import the module
import { greekAlphabet } from 'codymath';

// Access the properties of a specific letter
console.log('The symbol for Pi is:', greekAlphabet.pi.lower);
// Output: The symbol for Pi is: π

// Use different properties in a sentence
const sigma = greekAlphabet.sigma;
console.log(`The letter ${sigma.name} is often used for summations (${sigma.upper}) and standard deviation (${sigma.lower}).`);
// Output: The letter Sigma is often used for summations (Σ) and standard deviation (σ).
```
---
### Module: `constants/constants`
* **Mathematical Constants:** A collection of high-precision fundamental constants. Below is a list of the currently available values.

    | Constant Name | Symbol | Description | Library Key |
    | :--- | :---: | :--- | :--- |
    | Pi | $\pi$ | The ratio of a circle's circumference to its diameter. | `pi` |
    | Euler's Number | $e$ | The base of the natural logarithm. | `e` |
    | Euler-Mascheroni | $\gamma$ | The limiting difference between the harmonic series and `ln(n)`. | `eulerMascheroni` |
    | e to the Gamma | $e^\gamma$ | One of the Mertens' constants from number theory. | `eToTheGamma` |
    | Square Root of e | $\sqrt{e}$ | The square root of Euler's number. | `sqrtE` |
    | Square Root of Pi | $\sqrt{\pi}$ | The square root of Pi, also equal to Γ(1/2). | `sqrtPi` |
    | Radians to Degrees | `rad → deg` | The conversion factor from radians to degrees (180/π). | `radToDeg` |
    | Degrees to Radians | `deg → rad` | The conversion factor from degrees to radians (π/180). | `degToRad` |
    | Gamma of 1/3 | $\Gamma(\frac{1}{3})$ | The value of the Gamma function at 1/3. | `gammaOneThird` |
    | Gamma of 1/4 | $\Gamma(\frac{1}{4})$ | The value of the Gamma function at 1/4. | `gammaOneFourth` |

```javascript
// #### Usage Example (constants)
// Import the constants object
import { constants } from 'codymath';

// 1. Pi (π)
console.log(`π = ${constants.pi}`);
// Output: π = 3.141592653589793

// 2. Euler's Number (e)
console.log(`e = ${constants.e}`);
// Output: e = 2.718281828459045

// 3. Euler–Mascheroni Constant (γ)
console.log(`γ = ${constants.eulerMascheroni}`);
// Output: γ = 0.5772156649015329

// 4. e to the Gamma (e^γ)
console.log(`e^γ = ${constants.eToTheGamma}`);
// Output: e^γ = 1.7810724179901979

// 5. Square Root of e (√e)
console.log(`√e = ${constants.sqrtE}`);
// Output: √e = 1.6487212707001282

// 6. Square Root of Pi (√π)
console.log(`√π = ${constants.sqrtPi}`);
// Output: √π = 1.7724538509055159

// 7. Radians → Degrees
const radians = 1;
console.log(`${radians} rad = ${constants.radToDeg * radians}°`);
// Output: 1 rad = 57.29577951308232°

// 8. Degrees → Radians
const degrees = 180;
const rad = constants.degToRad * degrees;
console.log(`${degrees}° = ${rad} rad`);
// Output: 180° = 3.141592653589793 rad

console.log(`Equal to π? ${rad === constants.pi}`);
// Output: Equal to π? true

// 9. Gamma(1/3)
console.log(`Γ(1/3) = ${constants.gammaOneThird}`);
// Output: Γ(1/3) = 2.678938534707747

// 10. Gamma(1/4)
console.log(`Γ(1/4) = ${constants.gammaOneFourth}`);
// Output: Γ(1/4) = 3.6256099082219083

```
--- 

### Module: `algebra/arithmetic`

This module provides a comprehensive set of functions for fundamental arithmetic, exponentiation, roots, and logarithms.

| Function | Syntax | Description | Library Key |
| :--- | :--- | :--- | :--- |
| **Sum** | `sum(...numbers)` | Returns the sum of a set of numbers. | `sum` |
| **Subtraction** | `subtract(a, b)` | Returns the difference between two numbers (`a - b`). | `subtract` |
| **Multiplication** | `multiply(...numbers)` | Returns the product of a set of numbers. | `multiply` |
| **Division** | `divide(a, b)` | Returns the division of `a` by `b`, handling division by zero. | `divide` |
| **Mean** | `mean(...numbers)` | Calculates the arithmetic mean of a set of numbers. | `mean` |
| **Power** | `power(base, exp)` | Calculates a `base` number raised to an `exponent`. | `power` |
| **Square Root** | `sqrt(n)` | Calculates the square root ($\sqrt{n}$) of a number. | `sqrt` |
| **Cube Root** | `cbrt(n)` | Calculates the cube root ($\sqrt[3]{n}$) of a number. | `cbrt` |
| **Nth Root** | `nthRoot(n, root)` | Calculates the nth root ($\sqrt[root]{n}$) of a number. | `nthRoot` |
| **Exponential** | `exp(n)` | Calculates the value of `e` raised to the power of `n` ($e^n$). | `exp` |
| **Natural Log** | `ln(n)` | Calculates the natural logarithm (base `e`) of a number, $ln(n)$. | `ln` |
| **Log Base 10** | `log10(n)` | Calculates the common logarithm (base 10) of a number, $log_{10}(n)$. | `log10` |
| **Log Base 2** | `log2(n)` | Calculates the binary logarithm (base 2) of a number, $log_{2}(n)$. | `log2` |
| **Generic Log** | `log(n, base)` | Calculates the logarithm of `n` in a custom `base`, $log_{base}(n)$. | `log` |


```javascript

// #Usage Example 
// #### 1. Fundamental Arithmetic

// 1.A) With NPM/Vite (Modern Bundlers)
// This is the recommended method for project development.
import { arithmetic, constants } from 'codymath';

// 1.B) With a CDN (Directly in the Browser)
// <script src="https://cdn.jsdelivr.net/npm/codymath@0.3.0/dist/codymath.umd.js"></script>
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

```

## Author

- **Jackson Douglas de Souza**
  - [![LinkedIn](https://img.shields.io/badge/LinkedIn-Jackson%20Douglas-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/jacksondouglasdsouza/)
  - [![GitHub](https://img.shields.io/badge/GitHub-jacksondouglasdesouza-black?style=flat-square&logo=github)](https://github.com/jacksondouglasdesouza)
  

If you find this library useful and it helps you in your projects, please consider making a contribution. Every donation helps us dedicate more time to adding new features, improving documentation, and ensuring the project stays healthy and active for years to come.

Thank you for your support!

| Method | Address / Link |
| :--- | :--- |
| ![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white) | [`Click here to donate via PayPal`](https://www.paypal.com/donate/?hosted_button_id=8XYHYQNR2E27J) |
| ![Bitcoin](https://img.shields.io/badge/Bitcoin-000000?style=for-the-badge&logo=bitcoin&logoColor=white) | `bc1q3zu0nng6765ptpmr86jcfn68h6e62sda7382e3` |
| ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white) | `0xF7Eb1D45cDD527b11BC49416DDfA51AD38e26ca1` |

## Acknowledgements & References

This library is built upon the foundational knowledge established by generations of mathematicians and programmers. The data and formulas are cross-referenced with the following major works to ensure accuracy:

-   Spiegel, M. R., et al. *Schaum's Outline of Mathematical Handbook of Formulas and Tables*.
-   The [NIST Digital Library of Mathematical Functions (DLMF)](https://dlmf.nist.gov/), the modern successor to Abramowitz & Stegun.
-   The [National Institute of Standards and Technology (NIST) | *Digital Library of Mathematical Functions*. U.S. Department of Commerce. Retrieved ](https://dlmf.nist.gov/), the modern successor to Abramowitz & Stegun.
-   The [Wolfram MathWorld](https://pt.wikipedia.org/wiki/MathWorld), a comprehensive online mathematical encyclopedia.
-   Gradshteyn, I. S., & Ryzhik, I. M. *Table of Integrals, Series, and Products*.
-   The [ECMA International. (2025). *ECMAScript® 2025 Language Specification](https://tc39.es/ecma262/)

## License

CodyMath is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for more details.