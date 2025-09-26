// src/utils/toWords/tl-PH.ts

/*
Tagalog (Filipino) Numbering System Notes:

1. The Dual Number System:
- This is the most important feature. Filipino uses two parallel sets of numbers in daily life:
    a) Native Tagalog System: Used for basic counting (1-10), abstract concepts, and combined with native grammar.
    b) Spanish-Derived System: Heavily used for telling time, dates, age, and almost exclusively for currency. For numbers above 10, it is often more common than the native system.
- This file exports two objects, `native` and `spanish`, to provide both sets of words.

2. Native Tagalog Construction:
- Numbers are combined using linkers. The most common is "-'t" (a contraction of "at", meaning "and").
- Example: 21 is "dalawampu't isa" (twenty and one).
- Numbers from 11-19 have a special form using the "labing-" prefix, meaning "excess".
- Example: 11 is "labing-isa" (ten-excess-one).

3. Spanish-Derived Construction:
- The numbers are adaptations of Spanish words, with spelling conformed to Filipino phonology (e.g., "ocho" -> "otso", "veinte" -> "bente").
- The construction rules are similar to Spanish.

4. Financial Context (Philippine Peso):
- The **Spanish-derived system is used for currency**.
- Main unit: Piso (from Spanish "Peso").
- Subdivision: Sentimo (from Spanish "Céntimo").
- Example for 123.50 PHP, using Spanish-derived numbers: "siyento bente tres na Piso at singkwenta Sentimo".

5. Large Number Scales:
- Both systems have words for hundred and thousand.
- For million and above, modern Filipino uses Spanish/English loanwords like "milyon" and "bilyon", which are provided in a separate `modernScales` export.

6. Zero:
- Zero is "sero", derived from Spanish "cero". The native equivalent "wala" means "nothing" or "none".

*/

// Native Tagalog number words
export const native = {
    ones: [
        'wala', 'isa', 'dalawa', 'tatlo', 'apat', 'lima', 'anim', 'pito', 'walo', 'siyam', 'sampu'
    ],
    teens: [
        '', 'labing-isa', 'labindalawa', 'labintatlo', 'labing-apat', 'labinlima', 'labing-anim', 'labimpito', 'labingwalo', 'labinsiyam'
    ],
    tens: [
        '', 'sampu', 'dalawampu', 'tatlumpu', 'apatnapu', 'limampu', 'animnapu', 'pitumpu', 'walumpu', 'siyamnapu'
    ],
    scales: [
        { singular: 'daan', plural: 'daan' },    // Hundred
        { singular: 'libo', plural: 'libo' }     // Thousand
    ]
};

// Spanish-derived number words (Filipinized spelling)
export const spanish = {
    ones: [
        'sero', 'uno', 'dos', 'tres', 'kuwatro', 'singko', 'sais', 'siyete', 'otso', 'nuwebe', 'diyes',
        'onse', 'dose', 'trese', 'katorse', 'kinse', 'disisais', 'disisiyete', 'disiotso', 'disinuwebe'
    ],
    tens: [
        '', 'diyes', 'bente', 'trenta', 'kuwarenta', 'singkuwenta', 'sesenta', 'setenta', 'otsenta', 'nobenta'
    ],
    scales: [
        { singular: 'siyento', plural: 'siyento' } // Hundred
    ]
};

// Modern large scales, common to both systems
export const modernScales = [
    { singular: 'milyon', plural: 'milyon' },                // 10^6
    { singular: 'bilyon', plural: 'bilyon' },                // 10^9
    { singular: 'trilyon', plural: 'trilyon' },              // 10^12
    { singular: 'kuwadrilyon', plural: 'kuwadrilyon' },      // 10^15
    { singular: 'kuwintilyon', plural: 'kuwintilyon' },      // 10^18
    { singular: 'sekstilyon', plural: 'sekstilyon' },        // 10^21
    { singular: 'septilyon', plural: 'septilyon' },          // 10^24
    { singular: 'oktilyon', plural: 'oktilyon' },            // 10^27
    { singular: 'nonilyon', plural: 'nonilyon' },            // 10^30
    { singular: 'desilyon', plural: 'desilyon' },            // 10^33
    { singular: 'undesilyon', plural: 'undesilyon' },        // 10^36
    { singular: 'duodesilyon', plural: 'duodesilyon' },      // 10^39
    { singular: 'tredesilyon', plural: 'tredesilyon' },      // 10^42
    { singular: 'kuwatordesilyon', plural: 'kuwatordesilyon' },// 10^45
    { singular: 'kindesilyon', plural: 'kindesilyon' },      // 10^48
    { singular: 'seksdesilyon', plural: 'seksdesilyon' },    // 10^51
    { singular: 'septendesilyon', plural: 'septendesilyon' },// 10^54
    { singular: 'oktodesilyon', plural: 'oktodesilyon' },    // 10^57
    { singular: 'nobendesilyon', plural: 'nobendesilyon' },  // 10^60
    { singular: 'bihintilyon', plural: 'bihintilyon' }        // 10^63
];
