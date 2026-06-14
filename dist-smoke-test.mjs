// dist-smoke-test.mjs
// Validates the 0.7.0 build: every new function must work BOTH as a
// namespace member (arithmetic.X) and as a named/tree-shakeable export (X),
// and the two paths must agree. Run from the repo root after `npm run build`:
//
//     node dist-smoke-test.mjs
//
import {
   arithmetic,
   cumulativeSum,
   deadzone,
   signedPow,
   roundToSignificant,
   normalizeToSum,
   geometricLerp,
   proportionalSplit,
   sumOfDigits,
   isPerfectSquare,
   hypot,
   clampedLerp,
   mapRange,
   isPerfectNumber,
   primeFactors,
   multiplyMultiple,
   binomial,
   modInverse,
   permutations,
   totient,
   median,
   min,
   max,
   variance,
   standardDeviation,
   mode,
} from "./dist/codymath.js";

const named = {
   cumulativeSum,
   deadzone,
   signedPow,
   roundToSignificant,
   normalizeToSum,
   geometricLerp,
   proportionalSplit,
   sumOfDigits,
   isPerfectSquare,
   hypot,
   clampedLerp,
   mapRange,
   isPerfectNumber,
   primeFactors,
   multiplyMultiple,
   binomial,
   modInverse,
   permutations,
   totient,
   median,
   min,
   max,
   variance,
   standardDeviation,
   mode,
};

// [functionName, argsArray, expectedStringifiedResult]
const cases = [
   ["cumulativeSum", [1, 2, 3, 4], "1,3,6,10"],
   ["deadzone", [0.75, 0.5], "0.5"],
   ["signedPow", [-4, 0.5], "-2"],
   ["roundToSignificant", [123456, 2], "120000"],
   ["normalizeToSum", [[1, 3]], "0.25,0.75"],
   ["geometricLerp", [1, 100, 0.5], "10"],
   ["proportionalSplit", [100, 1, 1, 1], "34,33,33"],
   ["sumOfDigits", [12345], "15"],
   ["isPerfectSquare", [144], "true"],
   ["hypot", [3, 4], "5"],
   ["clampedLerp", [0, 100, 0.5], "50"],
   ["mapRange", [5, 0, 10, 0, 100], "50"],
   ["isPerfectNumber", [28], "true"],
   ["primeFactors", [60], "2,2,3,5"],
   ["multiplyMultiple", [2, 3, 4], "24"],
   ["binomial", [5, 2], "10"],
   ["modInverse", [3, 11], "4"],
   ["permutations", [5, 2], "20"],
   ["totient", [9], "6"],
   ["median", [1, 3, 5, 7, 9], "5"],
   ["min", [3, 1, 4, 1, 5], "1"],
   ["max", [3, 1, 4, 1, 5], "5"],
   ["variance", [2, 4, 4, 4, 5, 5, 7, 9], "4"],
   ["standardDeviation", [2, 4, 4, 4, 5, 5, 7, 9], "2"],
   ["mode", [1, 2, 2, 3, 4], "2"],
];

let pass = 0;
let fail = 0;

for (const [name, args, expected] of cases) {
   const nsFn = arithmetic[name];
   const namedFn = named[name];

   // Both export paths must expose the function
   if (typeof nsFn !== "function" || typeof namedFn !== "function") {
      console.log(
         `FAIL  ${name.padEnd(20)} missing export ` +
            `(namespace: ${typeof nsFn}, named: ${typeof namedFn})`,
      );
      fail++;
      continue;
   }

   const ns = String(nsFn(...args));
   const nm = String(namedFn(...args));
   const ok = ns === expected && nm === expected && ns === nm;

   console.log(
      `${ok ? "PASS" : "FAIL"}  ${name.padEnd(20)} ` +
         `ns=${ns}  named=${nm}  (expected ${expected})`,
   );
   ok ? pass++ : fail++;
}

console.log("------------------------------------------------");
console.log(`${pass}/${cases.length} passed${fail ? `, ${fail} FAILED` : ""}`);

// Non-zero exit code on failure, so it can gate a release in CI later.
process.exit(fail === 0 ? 0 : 1);
