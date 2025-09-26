// src/utils/toWords/vi-VN.ts

/*
Vietnamese (vi-VN) Numbering System Notes:

1. Core System & Construction:
- Vietnamese uses a standard decimal system that is highly regular.
- The construction is straightforward, with number words placed in sequence.
- Example: 1,234 is "một nghìn hai trăm ba mươi bốn".

2. Key Spelling/Usage Rules:
- This is the most important part for a correct implementation.
- a) "Một" (1) becomes "mốt" when it follows a word for ten (e.g., "hai mươi mốt" for 21).
- b) "Năm" (5) becomes "lăm" when it follows a word for ten (e.g., "hai mươi lăm" for 25).
- c) "Linh" is used to represent a zero when it's between larger units, similar to "and" in "one hundred and one".
  - Example: 101 is "một trăm linh một".
  - Example: 2005 is "hai nghìn không trăm linh năm".

3. The `quốc ngữ` Alphabet:
- Vietnamese uses a Latin-based alphabet with a rich set of diacritics to represent tones and specific vowel sounds. Correct representation of these is crucial.

4. Financial Context (Vietnamese Đồng):
- Currency: Vietnamese Đồng (đồng).
- Due to inflation, there are no fractional units (like cents) in common circulation.
- The word "đồng" is simply appended to the number. It does not have a plural form.
- Example for 12,345 VND: "mười hai nghìn ba trăm bốn mươi lăm đồng".

5. Large Numbers:
- The system uses native/Sino-Vietnamese words for its scales.
- nghìn/ngàn = 1,000 (Thousand)
- triệu = 1,000,000 (Million)
- tỷ = 1,000,000,000 (Billion)

6. Zero:
- "không" is the common word for zero.

*/

export const ones = [
    'không',      // 0
    'một',        // 1
    'hai',        // 2
    'ba',         // 3
    'bốn',        // 4
    'năm',        // 5
    'sáu',        // 6
    'bảy',        // 7
    'tám',        // 8
    'chín',       // 9
    'mười'        // 10
];

export const tens = [
    '',
    'mười',       // 10
    'hai mươi',   // 20
    'ba mươi',    // 30
    'bốn mươi',   // 40
    'năm mươi',   // 50
    'sáu mươi',   // 60
    'bảy mươi',   // 70
    'tám mươi',   // 80
    'chín mươi'   // 90
];

export const hundreds = [
    '',
    'một trăm',   // 100
    'hai trăm',   // 200
    'ba trăm',    // 300
    'bốn trăm',   // 400
    'năm trăm',   // 500
    'sáu trăm',   // 600
    'bảy trăm',   // 700
    'tám trăm',   // 800
    'chín trăm'   // 900
];

// Scales follow the short scale system, using native/Sino-Vietnamese words.
export const scales = [
    '',
    'nghìn',            // 10^3 (Thousand)
    'triệu',            // 10^6 (Million)
    'tỷ',               // 10^9 (Billion)
    'nghìn tỷ',         // 10^12 (Trillion - lit. "thousand billion")
    'triệu tỷ',         // 10^15 (Quadrillion - lit. "million billion")
    'tỷ tỷ',            // 10^18 (Quintillion - lit. "billion billion")
    'nghìn tỷ tỷ',      // 10^21 (Sextillion)
    'triệu tỷ tỷ',      // 10^24 (Septillion)
    'tỷ tỷ tỷ',         // 10^27 (Octillion)
    'nghìn tỷ tỷ tỷ',   // 10^30 (Nonillion)
    'triệu tỷ tỷ tỷ',   // 10^33 (Decillion)
    'tỷ tỷ tỷ tỷ',      // 10^36 (Undecillion)
    'nghìn tỷ tỷ tỷ tỷ',// 10^39 (Duodecillion)
    'triệu tỷ tỷ tỷ tỷ',// 10^42 (Tredecillion)
    'tỷ tỷ tỷ tỷ tỷ',   // 10^45 (Quattuordecillion)
    'nghìn tỷ tỷ tỷ tỷ tỷ',// 10^48
    'triệu tỷ tỷ tỷ tỷ tỷ',// 10^51
    'tỷ tỷ tỷ tỷ tỷ tỷ',// 10^54
    'nghìn tỷ tỷ tỷ tỷ tỷ tỷ',// 10^57
    'triệu tỷ tỷ tỷ tỷ tỷ tỷ',// 10^60
    'tỷ tỷ tỷ tỷ tỷ tỷ tỷ' // 10^63
];