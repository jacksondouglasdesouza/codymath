// src/utils/toWords/tr-TR.ts

/*
Turkish (tr-TR) Numbering System Notes:

1. Core System and Regularity:
- The Turkish numbering system is highly regular and based on a simple decimal structure.
- There are no grammatical genders for numbers, and almost no irregular forms, making it very predictable.
- Construction is straightforward: `yirmi bir` (21), `otuz iki` (32).

2. Agglutination and Spacing:
- While Turkish is an agglutinative language, number words are generally written separately.
- Example: 123,456 is "yüz yirmi üç bin dört yüz elli altı".

3. Plurals with Numbers:
- A key feature of Turkish grammar is that nouns following a number greater than one remain in the singular form.
- Correct: "beş elma" (five apple)
- Incorrect: "beş elmalar" (five apples)
- This rule does not apply to the scale words themselves, which can have plural forms when used indefinitely (e.g., "milyonlarca" - millions of), but not with a specific number.

4. Financial Context (Turkish Lira):
- Currency: Turkish Lira (Türk lirası) and Kuruş.
- Construction is simple. The decimal separator in Turkey is the comma.
- Example for 123,45 TRY:
    - "yüz yirmi üç Türk lirası kırk beş kuruş"
    - (one hundred twenty-three Turkish Lira forty-five Kuruş)

5. Zero:
- Zero is "sıfır".

6. Numbering System Scale:
- Turkish uses the short scale system.
- Note that "billion" is `milyar` (10^9), "trillion" is `trilyon` (10^12), etc.

*/

export const ones = [
    'sıfır',      // 0
    'bir',        // 1
    'iki',        // 2
    'üç',         // 3
    'dört',       // 4
    'beş',        // 5
    'altı',       // 6
    'yedi',       // 7
    'sekiz',      // 8
    'dokuz',      // 9
    'on'          // 10
];

// Teens are regular, but included for structural consistency.
export const teens = [
    'on',         // 10
    'on bir',     // 11
    'on iki',     // 12
    'on üç',      // 13
    'on dört',    // 14
    'on beş',     // 15
    'on altı',    // 16
    'on yedi',    // 17
    'on sekiz',   // 18
    'on dokuz'    // 19
];

export const tens = [
    '',
    'on',         // 10
    'yirmi',      // 20
    'otuz',       // 30
    'kırk',       // 40
    'elli',       // 50
    'altmış',     // 60
    'yetmiş',     // 70
    'seksen',     // 80
    'doksan'      // 90
];

export const hundreds = [
    '',
    'yüz',        // 100
    'iki yüz',    // 200
    'üç yüz',     // 300
    'dört yüz',   // 400
    'beş yüz',    // 500
    'altı yüz',   // 600
    'yedi yüz',   // 700
    'sekiz yüz',  // 800
    'dokuz yüz'   // 900
];

// Scales do not have plural forms when used with a number.
export const scales = [
    '',
    'bin',              // 10^3 (Thousand)
    'milyon',           // 10^6 (Million)
    'milyar',           // 10^9 (Billion)
    'trilyon',          // 10^12 (Trillion)
    'katrilyon',        // 10^15 (Quadrillion)
    'kentilyon',        // 10^18 (Quintillion)
    'sekstilyon',       // 10^21 (Sextillion)
    'septilyon',        // 10^24 (Septillion)
    'oktilyon',         // 10^27 (Octillion)
    'nonilyon',         // 10^30 (Nonillion)
    'desilyon',         // 10^33 (Decillion)
    'undesilyon',       // 10^36 (Undecillion)
    'dodesilyon',       // 10^39 (Duodecillion)
    'tredesilyon',      // 10^42 (Tredecillion)
    'katordesilyon',    // 10^45 (Quattuordecillion)
    'kindesilyon',      // 10^48 (Quindecillion)
    'seksdesilyon',     // 10^51 (Sexdecillion)
    'septendesilyon',   // 10^54 (Septendecillion)
    'oktodesilyon',     // 10^57 (Octodecillion)
    'novemdesilyon',    // 10^60 (Novemdecillion)
    'vigintilyon'       // 10^63 (Vigintillion)
];