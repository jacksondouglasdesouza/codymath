// src/utils/toWords/fa-IR.ts

/*
Persian (Farsi) Numbering System Notes:

1. Core System & Construction:
- Farsi uses the standard short scale numbering system (thousand, million, billion), similar to English and Turkish. This is a key difference from Urdu, which uses the same script but the Indian system.
- Compound numbers are formed logically using the conjunction "o" (و), meaning "and".
- Example: 21 is "بیست و یک" (bist o yek) - "twenty and one".

2. Script and Numerals:
- Farsi uses the Perso-Arabic script, written right-to-left.
- It employs Eastern Arabic numerals (۰, ۱, ۲, ۳, ۴, ۵, ۶, ۷, ۸, ۹).

3. Plurals with Numbers:
- Similar to Turkish, nouns following a number greater than one typically remain in the singular form.
- Example: "پنج سیب" (panj sib) - "five apple", not "five apples".

4. Financial Context (Rial and Toman):
- This is a critical real-world detail.
- The official currency is the Iranian Rial (ریال).
- However, in daily life, prices are almost always quoted in Tomans (تومان).
- 1 Toman = 10 Rials. A developer must be aware of which unit they are converting.
- Example for 12,345 IRR (Rials):
    - "دوازده هزار و سیصد و چهل و پنج ریال"
    - (davazdah hezār o sisad o chehel o panj rial)

5. Grammatical Simplicity:
- Farsi has no grammatical gender, which simplifies number words.
- The system is highly regular with very few exceptions.

6. Zero:
- Zero is "صفر" (sefr).

*/

export const ones = [
    'صفر',       // 0
    'یک',        // 1
    'دو',         // 2
    'سه',        // 3
    'چهار',      // 4
    'پنج',       // 5
    'شش',        // 6
    'هفت',       // 7
    'هشت',       // 8
    'نه',         // 9
    'ده',         // 10
    'یازده',     // 11
    'دوازده',    // 12
    'سیزده',     // 13
    'چهارده',    // 14
    'پانزده',    // 15
    'شانزده',    // 16
    'هفده',      // 17
    'هجده',      // 18
    'نوزده'      // 19
];

export const tens = [
    '',
    '',
    'بیست',      // 20
    'سی',        // 30
    'چهل',       // 40
    'پنجاه',      // 50
    'شصت',       // 60
    'هفتاد',      // 70
    'هشتاد',      // 80
    'نود'        // 90
];

// Hundreds have some irregular forms (e.g., devist, sisad).
export const hundreds = [
    '',
    'صد',        // 100
    'دویست',     // 200
    'سیصد',      // 300
    'چهارصد',    // 400
    'پانصد',     // 500
    'ششصد',      // 600
    'هفتصد',     // 700
    'هشتصد',     // 800
    'نهصد'       // 900
];

// Scales follow the short scale system. Plural forms are not typically used with specific numbers.
export const scales = [
    '',
    'هزار',             // 10^3 (Thousand)
    'میلیون',           // 10^6 (Million)
    'میلیارد',          // 10^9 (Billion)
    'تریلیون',          // 10^12 (Trillion)
    'کوادریلیون',       // 10^15 (Quadrillion)
    'کوینتیلیون',       // 10^18 (Quintillion)
    'سکستیلیون',       // 10^21 (Sextillion)
    'سپتیلیون',       // 10^24 (Septillion)
    'اکتیلیون',        // 10^27 (Octillion)
    'نونیلیون',        // 10^30 (Nonillion)
    'دسیلیون',         // 10^33 (Decillion)
    'آندسیلیون',      // 10^36 (Undecillion)
    'دودسیلیون',      // 10^39 (Duodecillion)
    'تریدسیلیون',     // 10^42 (Tredecillion)
    'کواتوردسیلیون',  // 10^45 (Quattuordecillion)
    'کویندسیلیون',   // 10^48 (Quindecillion)
    'سکسدسیلیون',   // 10^51 (Sexdecillion)
    'سپتندسیلیون',  // 10^54 (Septendecillion)
    'اکتودسیلیون',   // 10^57 (Octodecillion)
    'نومدسیلیون',   // 10^60 (Novemdecillion)
    'ویجینتیلیون'     // 10^63 (Vigintillion)
];
