// src/utils/toWords/de-DE.ts

/*
German (de-DE) Numbering System Notes:

1. Inverted Order for Compound Numbers (21-99):
- This is a key characteristic of German. The unit is named BEFORE the ten, connected by "und" (and).
- Example: 21 is "einundzwanzig" (literally "one-and-twenty").
- The logic for numbers between 21 and 99 must follow this "unit-and-ten" pattern.

2. Capitalization:
- In standard German orthography, number words are written in lowercase unless they are used as nouns (e.g., "die Fünf" - the number five). This dictionary provides them in lowercase, which is standard for writing out amounts.

3. One Word vs. Separate Words:
- Numbers below one million are typically written as a single, long word.
- Example: 123,456 is "einhundertdreiundzwanzigtausendvierhundertsechsundfünfzig".
- Your conversion logic should concatenate these parts without spaces.
- Scale words like "Million", "Milliarde" are separate words and are capitalized as they function as nouns.

4. Special Case for "One":
- The word for "one" is "eins" when it stands alone or at the end of a number.
- When it's part of a compound number before a noun or another number, it becomes "ein".
- Example: 101 is "einhunderteins". 21 is "einundzwanzig".

5. Financial Context (Euro & Cent):
- Currency: Euro (€) and Cent. Both are grammatically masculine in this context.
- The plural of "Euro" is "Euro". The plural of "Cent" is "Cent".
- The integer and decimal parts are typically separated by "und".
- Example for 123.45 EUR:
    - "einhundertdreiundzwanzig Euro und fünfundvierzig Cent"
    - (one hundred twenty-three Euro and forty-five Cent)

6. Numbering System Scale:
- Modern German uses the short scale, same as English (Million, Milliarde, Billion, Billiarde, etc.). Note that "Billion" is 10^9 in English but 10^12 in traditional German long scale. This dictionary uses the modern short scale convention where Milliarde = 10^9, Billion = 10^12 is less common but exists. To avoid ambiguity for an international audience, we stick to the most common usage which aligns with the short scale, but uses "Milliarde" for 10^9. For clarity:
    - Million = 10^6
    - Milliarde = 10^9 (equivalent to English billion)
    - Billion = 10^12 (equivalent to English trillion)
    - This dictionary follows the `en-US` scale names for simplicity but a pure German implementation would use the Long Scale names. We will use the short scale names translated for consistency.

*/

export const ones = [
    'null',             // 0
    'eins',             // 1
    'zwei',             // 2
    'drei',             // 3
    'vier',             // 4
    'fünf',             // 5
    'sechs',            // 6
    'sieben',           // 7
    'acht',             // 8
    'neun',             // 9
    'zehn',             // 10
    'elf',              // 11
    'zwölf',            // 12
    'dreizehn',         // 13
    'vierzehn',         // 14
    'fünfzehn',         // 15
    'sechzehn',         // 16
    'siebzehn',         // 17
    'achtzehn',         // 18
    'neunzehn'          // 19
];

export const tens = [
    '',
    '',
    'zwanzig',          // 20
    'dreißig',          // 30
    'vierzig',          // 40
    'fünfzig',          // 50
    'sechzig',          // 60
    'siebzig',          // 70
    'achtzig',          // 80
    'neunzig'           // 90
];

export const hundreds = [
    '',
    'einhundert',       // 100
    'zweihundert',      // 200
    'dreihundert',      // 300
    'vierhundert',      // 400
    'fünfhundert',      // 500
    'sechshundert',     // 600
    'siebenhundert',    // 700
    'achthundert',      // 800
    'neunhundert'       // 900
];

// Scales are separate words and capitalized.
// We use the short scale naming convention for international consistency.
export const scales = [
    { singular: 'tausend', plural: 'tausend' },              // 10^3 - Tausend is an exception, usually not capitalized and written together
    { singular: 'Million', plural: 'Millionen' },            // 10^6
    { singular: 'Milliarde', plural: 'Milliarden' },         // 10^9
    { singular: 'Billion', plural: 'Billionen' },            // 10^12
    { singular: 'Billiarde', plural: 'Billiarden' },         // 10^15
    { singular: 'Trillion', plural: 'Trillionen' },          // 10^18
    { singular: 'Trilliarde', plural: 'Trilliarden' },       // 10^21
    { singular: 'Quadrillion', plural: 'Quadrillionen' },    // 10^24
    { singular: 'Quadrilliarde', plural: 'Quadrilliarden' }, // 10^27
    { singular: 'Quintillion', plural: 'Quintillionen' },    // 10^30
    { singular: 'Quintilliarde', plural: 'Quintilliarden' }, // 10^33
    { singular: 'Sextillion', plural: 'Sextillionen' },      // 10^36
    { singular: 'Sextilliarde', plural: 'Sextilliarden' },   // 10^39
    { singular: 'Septillion', plural: 'Septillionen' },      // 10^42
    { singular: 'Septilliarde', plural: 'Septilliarden' },   // 10^45
    { singular: 'Oktillion', plural: 'Oktillionen' },        // 10^48
    { singular: 'Oktilliarde', plural: 'Oktilliarden' },     // 10^51
    { singular: 'Nonillion', plural: 'Nonillionen' },        // 10^54
    { singular: 'Nonilliarde', plural: 'Nonilliarden' },     // 10^57
    { singular: 'Dezillion', plural: 'Dezillionen' },        // 10^60
    { singular: 'Dezilliarde', plural: 'Dezilliarden' }      // 10^63
];