// src/utils/toWords/it-IT.ts

/*
Italian (it-IT) Numbering System Notes:

1. Core System and Construction:
- Italian uses a standard decimal system and is highly regular.
- Numbers up to one hundred are typically written as a single word without spaces or hyphens.
- Example: 21 is "ventuno", 68 is "sessantotto".

2. Vowel Elision (Apocope):
- This is a key phonetic rule. The final vowel of a ten (like in "venti", "trenta", "quaranta") is dropped when the next number is "uno" (one) or "otto" (eight).
- `venti` + `uno` -> `ventuno`
- `quaranta` + `otto` -> `quarantotto`
- This does *not* happen with other numbers: `venti` + `due` -> `ventidue`.

3. Plural Forms of Scales:
- "Thousand": The singular is "mille" (1000). The plural root is "-mila" (e.g., "duemila" for 2000, "tremila" for 3000).
- Other scales have regular plurals:
    - milione (10^6) -> milioni
    - miliardo (10^9) -> miliardi

4. Financial Context (Euro & Centesimo):
- Currency: Euro and Centesimo (plural: Centesimi).
- The decimal separator is the comma.
- Example for 123,45 EUR:
    - "centoventitré Euro e quarantacinque centesimi"
    - (one hundred twenty-three Euro and forty-five cents)

5. Numbering System Scale:
- Modern Italian uses the short scale, but like German and French, uses "miliardo" for 10^9 (the English billion).
    - milione = 10^6
    - miliardo = 10^9
    - bilione = 10^12 (equivalent to English trillion)

6. Zero:
- Zero is "zero".

*/

export const ones = [
    'zero',             // 0
    'uno',              // 1
    'due',              // 2
    'tre',              // 3
    'quattro',          // 4
    'cinque',           // 5
    'sei',              // 6
    'sette',            // 7
    'otto',             // 8
    'nove',             // 9
    'dieci',            // 10
    'undici',           // 11
    'dodici',           // 12
    'tredici',          // 13
    'quattordici',      // 14
    'quindici',         // 15
    'sedici',           // 16
    'diciassette',      // 17
    'diciotto',         // 18
    'diciannove'        // 19
];

export const tens = [
    '',
    '',
    'venti',            // 20
    'trenta',           // 30
    'quaranta',         // 40
    'cinquanta',        // 50
    'sessanta',         // 60
    'settanta',         // 70
    'ottanta',          // 80
    'novanta'           // 90
];

export const hundreds = [
    '',
    'cento',            // 100
    'duecento',         // 200
    'trecento',         // 300
    'quattrocento',     // 400
    'cinquecento',      // 500
    'seicento',         // 600
    'settecento',       // 700
    'ottocento',        // 800
    'novecento'         // 900
];

// Scales require singular and plural forms.
export const scales = [
    { singular: 'mille', plural: 'mila' },               // 10^3
    { singular: 'milione', plural: 'milioni' },           // 10^6
    { singular: 'miliardo', plural: 'miliardi' },         // 10^9
    { singular: 'bilione', plural: 'bilioni' },           // 10^12
    { singular: 'biliardo', plural: 'biliardi' },         // 10^15
    { singular: 'trilione', plural: 'trilioni' },         // 10^18
    { singular: 'triliardo', plural: 'triliardi' },       // 10^21
    { singular: 'quadrilione', plural: 'quadrilioni' },   // 10^24
    { singular: 'quadriliardo', plural: 'quadriliardi' }, // 10^27
    { singular: 'quintilione', plural: 'quintilioni' },   // 10^30
    { singular: 'quintiliardo', plural: 'quintiliardi' }, // 10^33
    { singular: 'sestilione', plural: 'sestilioni' },     // 10^36
    { singular: 'sestiliardo', plural: 'sestiliardi' },   // 10^39
    { singular: 'settilione', plural: 'settilioni' },     // 10^42
    { singular: 'settiliardo', plural: 'settiliardi' },   // 10^45
    { singular: 'ottilione', plural: 'ottilioni' },       // 10^48
    { singular: 'ottiliardo', plural: 'ottiliardi' },     // 10^51
    { singular: 'nonilione', plural: 'nonilioni' },       // 10^54
    { singular: 'noniliardo', plural: 'noniliardi' },     // 10^57
    { singular: 'decilione', plural: 'decilioni' },       // 10^60
    { singular: 'deciliardo', plural: 'deciliardi' }      // 10^63
];