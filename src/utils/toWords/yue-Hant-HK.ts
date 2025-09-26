// src/utils/toWords/yue-Hant-HK.ts

/*
Cantonese (Yue) Numbering System Notes:

1. Core System (Myriad-Based System):
- Like Mandarin, Cantonese uses the myriad-based system, grouping digits in units of 10,000.
- Core scales: 萬 (maan6, 10^4), 億 (jik1, 10^8), 兆 (siu6, 10^12), etc.
- The logic must process numbers in chunks of four digits.

2. Script (Traditional Chinese Characters):
- Cantonese is primarily written using Traditional Chinese characters, especially in Hong Kong, Macau, and overseas communities. This is a key distinction from Mandarin in Mainland China, which uses Simplified characters.

3. Spoken vs. Formal Numbers (Colloquialisms):
- Spoken Cantonese often uses colloquial words for some numbers, which differ from the formal written forms. This dictionary provides the formal (written) forms, but awareness of the spoken variants is crucial for a complete implementation.
- Common examples:
    - Zero: "〇" (ling4) is overwhelmingly used in speech and writing for things like phone numbers. The formal "零" (ling4) is also correct.
    - Twenty: "廿" (jaa6) is very common for 20, instead of the formal "二十" (ji6 sap6). E.g., 21 is often "廿一" (jaa6 jat1).

4. Financial Context (Hong Kong Dollar):
- Currency: Hong Kong Dollar (港元 / 港幣) and Cent (仙).
- Example for 1,234.50 HKD:
    - "一千二百三十四港元五毫" (jat1 cin1 ji6 baak3 saam1 sap6 sei3 gong2 jyun4 ng5 hou4)
    - Note: "毫" (hou4) is colloquially used for 10 cents. 50 cents = 5 hou.

5. Zero:
- The formal word for zero is "零" (ling4). The character "〇" is also extremely common.

*/

// Formal number words using Traditional Chinese characters.
export const ones = [
    '零',       // 0
    '一',       // 1
    '二',       // 2
    '三',       // 3
    '四',       // 4
    '五',       // 5
    '六',       // 6
    '七',       // 7
    '八',       // 8
    '九'        // 9
];

export const tens = [
    '',
    '十',       // 10
    '二十',     // 20
    '三十',     // 30
    '四十',     // 40
    '五十',     // 50
    '六十',     // 60
    '七十',     // 70
    '八十',     // 80
    '九十'      // 90
];

export const hundreds = [
    '',
    '百',       // 100
    '二百',     // 200
    '三百',     // 300
    '四百',     // 400
    '五百',     // 500
    '六百',     // 600
    '七百',     // 700
    '八百',     // 800
    '九百'      // 900
];

// Scales follow the myriad (10^4) system, using Traditional characters.
export const scales = [
    '',
    '千',       // 10^3 (cin1) - Thousand
    '萬',       // 10^4 (maan6) - Ten Thousand
    '億',       // 10^8 (jik1)
    '兆',       // 10^12 (siu6)
    '京',       // 10^16 (ging1)
    '垓',       // 10^20 (goi1)
    '秭',       // 10^24 (zi2)
    '穰',       // 10^28 (joeng4)
    '溝',       // 10^32 (kau1)
    '澗',       // 10^36 (gaan3)
    '正',       // 10^40 (zing3)
    '載',       // 10^44 (zoi3)
    '極',       // 10^48 (gik6)
    '恒河沙',   // 10^52 (hang4 ho4 saa1)
    '阿僧祇',   // 10^56 (aa3 sang1 kei4)
    '那由他',   // 10^60 (naa5 jau4 taa1)
    '不可思議', // 10^64 (bat1 ho2 si1 ji5)
    '無量大數'  // 10^68 (mou4 loeng4 daai6 sou3)
];
