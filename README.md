<p align="center">
  <img src="./assets/logoCodyMath.svg" alt="CodyMath Logo" width="400">
</p>
<p align="center">
  <strong>The largest and most complete mathematics library for NPM, built for the global community.</strong>
</p>

---

*Current Status: Early Development (v0.2.0)*

<div style="display: flex; align-items: center; gap: 20px;">
  <a href="https://www.npmjs.com/package/codymath" target="_blank">
    <img src="./assets/Npm-logo.svg" alt="NPM Package" width="100">
  </a>
</div>

CodyMath is an ambitious open-source project to create a comprehensive, reliable, and easy-to-use mathematics library for the JavaScript/TypeScript ecosystem.
### Usage

#### Installation
```bash
npm install codymath
```
##### Or use CDN
```javascript
<script src="https://cdn.jsdelivr.net/npm/codymath@latest/dist/codymath.umd.js"></script>
```
##### HTML Usage Example
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
### Current Features
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

```javascript
    #### Usage Example
    // Import the constants object
    import { constants } from 'codymath';

    // 1. Pi
    console.log('Pi:', constants.pi); // 3.14159...

    // 2. Euler's Number
    console.log("e:", constants.e); // 2.71828...

    // 3. Euler-Mascheroni
    console.log('γ:', constants.eulerMascheroni); // 0.57721...

    // 4. e to the Gamma
    console.log('e^γ:', constants.eToTheGamma); // 1.78107...

    // 5. Square Root of e
    console.log('√e:', constants.sqrtE); // 1.64872...

    // 6. Square Root of Pi
    console.log('√π:', constants.sqrtPi); // 1.77245...

    // 7. Radians to Degrees
    const radians = 1;
    console.log(`1 radian is ${constants.radToDeg * radians} degrees.`); // 57.295...

    // 8. Degrees to Radians
    const degrees = 180;
    const conversionResult = constants.degToRad * degrees;
    console.log(`${degrees} degrees is ${conversionResult} radians.`); // 3.14159...
    console.log('Is this equal to constants.pi?', conversionResult === constants.pi); // true
```
--- 

## Author

- **Jackson Douglas de Souza**
  - [![LinkedIn](https://img.shields.io/badge/LinkedIn-Jackson%20Douglas-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/jacksondouglasdsouza/)
  - [![GitHub](https://img.shields.io/badge/GitHub-jacksondouglasdesouza-black?style=flat-square&logo=github)](https://github.com/jacksondouglasdesouza)

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
