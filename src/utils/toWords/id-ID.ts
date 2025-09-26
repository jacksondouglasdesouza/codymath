// src/utils/toWords/id-ID.ts

/*
Indonesian (Bahasa Indonesia) & Malay (Bahasa Melayu) Numbering System Notes:

1. Core System and High Regularity:
- The numbering system in both Indonesian and Malay is extremely regular and follows a simple decimal structure. There are very few exceptions.
- Construction is straightforward: `dua puluh satu` (21 - literally "two ten one").

2. Applicability to Indonesian & Malay:
- Indonesian and Malay are highly mutually intelligible. The number words are virtually identical. This file can be used for both `id-ID` and `ms-MY` locales.
- Minor spelling differences exist (e.g., "nol" (ID) vs "kosong" (MY) for zero), but "nol" is understood in both.

3. Special Prefixes/Suffixes:
- The prefix "se-" is used for the number one in scales:
    - `satu` (one) -> `seratus` (one hundred), `seribu` (one thousand).
- Numbers 11-19 use the "-belas" suffix.
    - "sebelas" for 11 is a unique form.
    - 12 is "dua belas", 13 is "tiga belas", etc.

4. Financial Context (Rupiah & Ringgit):
- This dictionary can serve both major currencies.
- a) Indonesian Rupiah (IDR):
    - Currency: Rupiah. No common fractional unit.
    - Example for 12,345 IDR: "dua belas ribu tiga ratus empat puluh lima Rupiah"
- b) Malaysian Ringgit (MYR):
    - Currency: Ringgit and Sen (100 sen = 1 Ringgit).
    - Example for 123.50 MYR: "seratus dua puluh tiga Ringgit dan lima puluh Sen"

5. Zero:
- "nol" (from Dutch) is the formal word for zero. "kosong" (meaning "empty") is also used.

*/

export const ones = [
    'nol',          // 0
    'satu',         // 1
    'dua',          // 2
    'tiga',         // 3
    'empat',        // 4
    'lima',         // 5
    'enam',         // 6
    'tujuh',        // 7
    'delapan',      // 8
    'sembilan',     // 9
    'sepuluh',      // 10
    'sebelas',      // 11
    'dua belas',    // 12
    'tiga belas',   // 13
    'empat belas',  // 14
    'lima belas',   // 15
    'enam belas',   // 16
    'tujuh belas',  // 17
    'delapan belas',// 18
    'sembilan belas'// 19
];

export const tens = [
    '',
    'sepuluh',      // 10
    'dua puluh',    // 20
    'tiga puluh',   // 30
    'empat puluh',  // 40
    'lima puluh',   // 50
    'enam puluh',   // 60
    'tujuh puluh',  // 70
    'delapan puluh',// 80
    'sembilan puluh'// 90
];

export const hundreds = [
    '',
    'seratus',      // 100
    'dua ratus',    // 200
    'tiga ratus',   // 300
    'empat ratus',  // 400
    'lima ratus',   // 500
    'enam ratus',   // 600
    'tujuh ratus',  // 700
    'delapan ratus',// 800
    'sembilan ratus'// 900
];

// Scales use the short scale system. The `se-` prefix for one is handled by the logic.
export const scales = [
    '',
    'ribu',         // 10^3 (Thousand)
    'juta',         // 10^6 (Million)
    'miliar',       // 10^9 (Billion - from Dutch 'miljard')
    'triliun',      // 10^12 (Trillion)
    'kuadriliun',   // 10^15 (Quadrillion)
    'kuintiliun',   // 10^18 (Quintillion)
    'sekstiliun',   // 10^21 (Sextillion)
    'septiliun',    // 10^24 (Septillion)
    'oktiliun',     // 10^27 (Octillion)
    'noniliun',     // 10^30 (Nonillion)
    'desiliun',     // 10^33 (Decillion)
    'undesiliun',   // 10^36 (Undecillion)
    'duodesiliun',  // 10^39 (Duodecillion)
    'tredesiliun',  // 10^42 (Tredecillion)
    'kuattuordesiliun',// 10^45
    'kuindesiliun', // 10^48
    'seksdesiliun', // 10^51
    'septendesiliun',// 10^54
    'oktodesiliun', // 10^57
    'novemdesiliun',// 10^60
    'vigintiliun'   // 10^63
];