// src/utils/toWords/sw-KE.ts

/*
Swahili (Kiswahili) Numbering System Notes:

1. Core System and Construction:
- Swahili uses a standard decimal system.
- Compound numbers are formed logically using "na" (and).
- Example: 21 is "ishirini na moja" (twenty and one).
- Example: 123 is "mia moja na ishirini na tatu" (one hundred and twenty and three). Note: "mia" is common for 100.

2. Linguistic Origins (Bantu and Arabic):
- The number system is a fascinating mix of native Bantu roots and Arabic loanwords.
- Bantu origin: moja (1), mbili (2), tatu (3), nne (4), tano (5), nane (8), kumi (10).
- Arabic origin: sita (6), saba (7), tisa (9). The words for tens (ishirini, thelathini...) and scales (elfu, milioni) are also largely from Arabic.

3. Noun Classes:
- Swahili is a Bantu language famous for its noun class system (e.g., ki-/vi-, m-/wa-).
- However, for cardinal numbers (the words provided here), the form does not typically change based on the noun class of the object being counted. This simplifies the conversion logic significantly.

4. Financial Context (Kenyan Shilling):
- Currency: Kenyan Shilling (Shilingi) and Cent (Senti).
- Pluralization is simple: the words for the currency usually do not change in the plural.
    - 1 Shilingi / 1 Senti
    - 100 Shilingi / 50 Senti
- Example for 123.45 KES:
    - "Shilingi mia moja ishirini na tatu na senti arobaini na tano"
    - (One hundred twenty-three Shillings and forty-five Cents)

5. Zero:
- Zero is "sifuri" (from Arabic "sifr").

6. Large Numbers:
- "Thousand" is "elfu" (from Arabic).
- Larger scales are modern loanwords from English and are now standard.

*/

export const ones = [
    'sifuri',        // 0
    'moja',          // 1
    'mbili',         // 2
    'tatu',          // 3
    'nne',           // 4
    'tano',          // 5
    'sita',          // 6
    'saba',          // 7
    'nane',          // 8
    'tisa',          // 9
    'kumi',          // 10
    'kumi na moja',  // 11
    'kumi na mbili', // 12
    'kumi na tatu',  // 13
    'kumi na nne',   // 14
    'kumi na tano',  // 15
    'kumi na sita',  // 16
    'kumi na saba',  // 17
    'kumi na nane',  // 18
    'kumi na tisa'   // 19
];

export const tens = [
    '',
    '',
    'ishirini',      // 20
    'thelathini',    // 30
    'arobaini',      // 40
    'hamsini',       // 50
    'sitini',        // 60
    'sabini',        // 70
    'themanini',     // 80
    'tisini'         // 90
];

export const hundreds = [
    '',
    'mia',           // 100
    'mia mbili',     // 200
    'mia tatu',      // 300
    'mia nne',       // 400
    'mia tano',      // 500
    'mia sita',      // 600
    'mia saba',      // 700
    'mia nane',      // 800
    'mia tisa'       // 900
];

// Scales use singular and plural forms.
export const scales = [
    { singular: 'elfu', plural: 'elfu' },                  // 10^3 (Thousand)
    { singular: 'milioni', plural: 'milioni' },           // 10^6 (Million)
    { singular: 'bilioni', plural: 'bilioni' },           // 10^9 (Billion)
    { singular: 'trilioni', plural: 'trilioni' },         // 10^12 (Trillion)
    { singular: 'kuadrilioni', plural: 'kuadrilioni' },   // 10^15 (Quadrillion)
    { singular: 'kuintilioni', plural: 'kuintilioni' },   // 10^18 (Quintillion)
    { singular: 'sekstilioni', plural: 'sekstilioni' },   // 10^21 (Sextillion)
    { singular: 'septilioni', plural: 'septilioni' },     // 10^24 (Septillion)
    { singular: 'oktilioni', plural: 'oktilioni' },       // 10^27 (Octillion)
    { singular: 'nonilioni', plural: 'nonilioni' },       // 10^30 (Nonillion)
    { singular: 'desilioni', plural: 'desilioni' },       // 10^33 (Decillion)
    { singular: 'undesilioni', plural: 'undesilioni' },   // 10^36 (Undecillion)
    { singular: 'duodesilioni', plural: 'duodesilioni' }, // 10^39 (Duodecillion)
    { singular: 'tredesilioni', plural: 'tredesilioni' }, // 10^42 (Tredecillion)
    { singular: 'kuatordesilioni', plural: 'kuatordesilioni' }, // 10^45 (Quattuordecillion)
    { singular: 'kuindesilioni', plural: 'kuindesilioni' },   // 10^48 (Quindecillion)
    { singular: 'seksdesilioni', plural: 'seksdesilioni' },   // 10^51 (Sexdecillion)
    { singular: 'septendesilioni', plural: 'septendesilioni' },// 10^54 (Septendecillion)
    { singular: 'oktodesilioni', plural: 'oktodesilioni' },    // 10^57 (Octodecillion)
    { singular: 'novemdesilioni', plural: 'novemdesilioni' },  // 10^60 (Novemdecillion)
    { singular: 'vijintilioni', plural: 'vijintilioni' }       // 10^63 (Vigintillion)
];