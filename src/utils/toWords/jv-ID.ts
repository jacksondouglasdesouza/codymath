// src/utils/toWords/jv-ID.ts

/*
Javanese (jv-ID) Numbering System Notes:

1. The Dual Register System: Ngoko and Krama
- This is the most critical feature of Javanese numbers. The language uses different words for numbers based on the level of politeness or formality.
- a) Ngoko: The informal, everyday register. Used with friends, family, and people of equal or lower social status.
- b) Krama: The formal, polite register. Used when speaking to elders, people of higher status, or in formal situations.
- This dictionary exports two objects, `ngoko` and `krama`, to provide both sets of words for your implementation.

2. Script:
- Javanese has its own traditional script (Aksara Jawa or Hanacaraka), but the Latin alphabet is now commonly used for most purposes. This file uses the Latin script.

3. Special Construction in Ngoko (-likur):
- The informal Ngoko register has a unique system for numbers from 21 to 29, using the suffix "-likur".
- 21 is "selikur", 22 is "rolikur", etc. This is a remnant of an older vigesimal (base-20) system.

4. Financial Context (Indonesian Rupiah):
- Javanese is spoken in Indonesia, so the currency is the Indonesian Rupiah (Rupiah).
- The choice between Ngoko and Krama would depend on the context of the transaction.
- Example (formal context) for 1,250 IDR: "sewu kalih atus seket Rupiah" (using Krama numbers).

5. Zero:
- Zero is "nol".

*/

// Ngoko - Informal/everyday Javanese
export const ngoko = {
    ones: [
        'nol',       // 0
        'siji',      // 1
        'loro',      // 2
        'telu',      // 3
        'papat',     // 4
        'lima',      // 5
        'enem',      // 6
        'pitu',      // 7
        'wolu',      // 8
        'sanga',     // 9
        'sepuluh'    // 10
    ],
    teens: [
        '',
        'sewelas',   // 11
        'rolas',     // 12
        'telulas',   // 13
        'patbelas',  // 14
        'limalas',   // 15
        'nembelas',  // 16
        'pitulas',   // 17
        'wolulas',   // 18
        'sangalas'   // 19
    ],
    // The unique '-likur' system for the 20s
    likuran: {
        20: 'rong puluh',
        21: 'selikur',
        22: 'rolikur',
        23: 'telulikur',
        24: 'patlikur',
        25: 'selawe', // Special form for 25
        26: 'nemlikur',
        27: 'pitulikur',
        28: 'wolulikur',
        29: 'sangalikur'
    },
    tens: [
        '',
        'sepuluh',     // 10
        'rong puluh',  // 20
        'telung puluh',// 30
        'patang puluh',// 40
        'seket',       // 50 (Special form)
        'sewidak',     // 60 (Special form)
        'pitung puluh',// 70
        'wolung puluh',// 80
        'sangang puluh'// 90
    ]
};

// Krama - Formal/polite Javanese
export const krama = {
    ones: [
        'nol',        // 0
        'setunggal',  // 1
        'kalih',      // 2
        'tiga',       // 3
        'sekawan',    // 4
        'gangsal',    // 5
        'enem',       // 6
        'pitu',       // 7
        'wolu',       // 8
        'sanga',      // 9
        'sedasa'      // 10
    ],
    tens: [
        '',
        'sedasa',       // 10
        'kalih dasa',   // 20
        'tigang dasa',  // 30
        'sekawan dasa', // 40
        'gangsal dasa', // 50
        'enem dasa',    // 60 (the base is regular from here)
        'pitung dasa',  // 70
        'wolung dasa',  // 80
        'sangang dasa'  // 90
    ]
};

// Shared scales for hundred, thousand, and above
export const scales = {
    hundred: { ngoko: 'atus', krama: 'atus' }, // prefix with number, e.g., rong atus / kalih atus
    thousand: { ngoko: 'ewu', krama: 'ewu' },   // prefix with number, e.g., rong ewu / kalih ewu
    // Modern large scales are often borrowed and consistent
    million: { singular: 'yuta', plural: 'yuta' },             // 10^6
    billion: { singular: 'milyar', plural: 'milyar' },         // 10^9
    trillion: { singular: 'triliun', plural: 'triliun' },      // 10^12
    // Extended for project consistency
    quadrillion: { singular: 'kuadriliun', plural: 'kuadriliun' }, // 10^15
    quintillion: { singular: 'kuintiliun', plural: 'kuintiliun' }, // 10^18
    sextillion: { singular: 'sekstiliun', plural: 'sekstiliun' },  // 10^21
    septillion: { singular: 'septiliun', plural: 'septiliun' },    // 10^24
    octillion: { singular: 'oktiliun', plural: 'oktiliun' },       // 10^27
    nonillion: { singular: 'noniliun', plural: 'noniliun' },       // 10^30
    decillion: { singular: 'desiliun', plural: 'desiliun' },       // 10^33
    undecillion: { singular: 'undesiliun', plural: 'undesiliun' },      // 10^36
    duodecillion: { singular: 'duodesiliun', plural: 'duodesiliun' },     // 10^39
    tredecillion: { singular: 'tredesiliun', plural: 'tredesiliun' },     // 10^42
    quattuordecillion: { singular: 'kuattuordesiliun', plural: 'kuattuordesiliun' }, // 10^45
    quindecillion: { singular: 'kuindesiliun', plural: 'kuindesiliun' },   // 10^48
    sexdecillion: { singular: 'seksdesiliun', plural: 'seksdesiliun' },    // 10^51
    septendecillion: { singular: 'septendesiliun', plural: 'septendesiliun' },// 10^54
    octodecillion: { singular: 'oktodesiliun', plural: 'oktodesiliun' },    // 10^57
    novemdecillion: { singular: 'novemdesiliun', plural: 'novemdesiliun' },  // 10^60
    vigintillion: { singular: 'vigintiliun', plural: 'vigintiliun' }       // 10^63
};