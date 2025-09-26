// src/utils/toWords/ha-NG.ts

/*
Hausa (ha-NG) Numbering System Notes:

1. Core System and Construction:
- Hausa uses a standard decimal system.
- Numbers from 11-19 are formed with "goma sha" (ten plus...). Example: 11 is "goma sha ɗaya".
- Compound numbers from 21+ are formed with "da" (and). Example: 21 is "ashirin da ɗaya" (twenty and one).

2. Special Characters:
- Hausa uses the Latin script but includes three additional consonants, the hooked letters:
    - ɓ (B with a hook)
    - ɗ (D with a hook)
    - ƙ (K with a hook)

3. Grammatical Gender:
- Hausa has masculine and feminine grammatical gender.
- However, its effect on cardinal numbers is minimal for a number-to-text library, as the primary number words do not change. The word "guda", meaning "unit" or "item", is often used after a number when counting, but is not part of the number word itself.

4. Financial Context (Nigerian Naira):
- The currency of Nigeria, a major Hausa-speaking country, is the Naira and Kobo.
- Example for 123.45 NGN:
    - "Naira ɗari da ashirin da uku da Kobo arba'in da biyar"
    - (Naira one hundred and twenty and three and Kobo forty and five)

5. Zero:
- Zero is "sifili".

6. Large Numbers:
- Hausa has native words for hundred ("ɗari") and thousand ("dubu").
- For larger scales (million, billion), modern Hausa uses loanwords from English.

*/

export const ones = [
    'sifili',         // 0
    'ɗaya',           // 1
    'biyu',           // 2
    'uku',            // 3
    'huɗu',           // 4
    'biyar',          // 5
    'shida',          // 6
    'bakwai',         // 7
    'takwas',         // 8
    'tara',           // 9
    'goma',           // 10
    'goma sha ɗaya',  // 11
    'goma sha biyu',  // 12
    'goma sha uku',   // 13
    'goma sha huɗu',  // 14
    'goma sha biyar', // 15
    'goma sha shida', // 16
    'goma sha bakwai',// 17
    'goma sha takwas',// 18
    'goma sha tara'   // 19
];

export const tens = [
    '',
    '',
    'ashirin',        // 20
    'talatin',        // 30
    'arba\'in',       // 40
    'hamsin',         // 50
    'sittin',         // 60
    'saba\'in',       // 70
    'tamanin',        // 80
    'casa\'in'        // 90
];

export const hundreds = [
    '',
    'ɗari',           // 100
    'ɗari biyu',      // 200
    'ɗari uku',       // 300
    'ɗari huɗu',      // 400
    'ɗari biyar',     // 500
    'ɗari shida',     // 600
    'ɗari bakwai',    // 700
    'ɗari takwas',    // 800
    'ɗari tara'       // 900
];

// Scales use a native word for thousand and English loanwords for larger scales.
export const scales = [
    '',
    'dubu',             // 10^3 (Thousand)
    'miliyan',          // 10^6 (Million)
    'biliyan',          // 10^9 (Billion)
    'tiriliyan',        // 10^12 (Trillion)
    'kwadriliyan',      // 10^15 (Quadrillion)
    'kwantiliyan',      // 10^18 (Quintillion)
    'sekstiliyan',      // 10^21 (Sextillion)
    'septiliyan',       // 10^24 (Septillion)
    'oktiliyan',        // 10^27 (Octillion)
    'noniliyan',        // 10^30 (Nonillion)
    'desiliyan',        // 10^33 (Decillion)
    'undesiliyan',      // 10^36 (Undecillion)
    'duwodesiliyan',    // 10^39 (Duodecillion)
    'tredesiliyan',     // 10^42 (Tredecillion)
    'kwattordesiliyan', // 10^45 (Quattuordecillion)
    'kwindesiliyan',    // 10^48 (Quindecillion)
    'seksdesiliyan',    // 10^51 (Sexdecillion)
    'septendesiliyan',  // 10^54 (Septendecillion)
    'oktodesiliyan',    // 10^57 (Octodecillion)
    'novemdesiliyan',   // 10^60 (Novemdecillion)
    'vijintiliyan'      // 10^63 (Vigintillion)
];