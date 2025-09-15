<p align="center">
  <img src="./assets/logoCodyMath.svg" alt="CodyMath Logo" width="400">
</p>
<p align="center">
  <strong>The largest and most complete mathematics library for NPM, built for the global community.</strong>
</p>

---

*Current Status: Early Development (v0.1.0)*

### CodyMath
CodyMath is an ambitious open-source project to create a comprehensive, reliable, and easy-to-use mathematics library for the JavaScript/TypeScript ecosystem.
### Installation
```bash
npm install codymath
```
### Current Features
* **Alphabets:** Full Greek alphabet constants.

---
```bash

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

## Author

- **Jackson Douglas de Souza**
  - [![LinkedIn](https://img.shields.io/badge/LinkedIn-Jackson%20Douglas-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/jacksondouglasdsouza/)
  - [![GitHub](https://img.shields.io/badge/GitHub-jacksondouglasdesouza-black?style=flat-square&logo=github)](https://github.com/jacksondouglasdesouza)

## Acknowledgements & References

This library is built upon the foundational knowledge established by generations of mathematicians and programmers. The data and formulas are cross-referenced with the following major works to ensure accuracy:

-   Spiegel, M. R., et al. *Schaum's Outline of Mathematical Handbook of Formulas and Tables*.
-   The [NIST Digital Library of Mathematical Functions (DLMF)](https://dlmf.nist.gov/), the modern successor to Abramowitz & Stegun.
-   The [Wolfram MathWorld](https://pt.wikipedia.org/wiki/MathWorld), a comprehensive online mathematical encyclopedia.
-   Gradshteyn, I. S., & Ryzhik, I. M. *Table of Integrals, Series, and Products*.

## License

CodyMath is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
