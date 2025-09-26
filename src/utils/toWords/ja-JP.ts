// src/utils/toWords/ja-JP.ts

/*
Japanese (ja-JP) Numbering System Notes:

1. Core System (Myriad-Based System):
- Japanese uses the myriad-based system, grouping digits in units of 10,000, identical to Chinese.
- Core scales: 万 (man, 10^4), 億 (oku, 10^8), 兆 (chō, 10^12), 京 (kei, 10^16), etc.
- The logic must process numbers in chunks of four digits.

2. Dual Counting Systems (Sino-Japanese vs. Native Japanese):
- Japanese has two sets of numbers. This dictionary uses the **Sino-Japanese (on'yomi) system** (ichi, ni, san...), which is derived from Chinese and is used for all general-purpose number-to-text conversion.
- There is also a **Native Japanese (kun'yomi) system** (hitotsu, futatsu, mit-tsu...) which is typically only used for counting 1 to 10 discrete items and is not suitable for converting arbitrary numbers.

3. Counters (助数詞 - josūshi):
- This is a critical feature of Japanese. When counting things, a "counter" suffix is appended to the number. The counter used depends on the object being counted.
- This library's scope is to provide the cardinal number (e.g., "三" - san). The developer must then append the appropriate counter.
- Examples of common counters:
    - 人 (nin): for people (e.g., "三人" - san-nin, three people)
    - 本 (hon): for long, cylindrical objects (e.g., "三本" - san-bon, three pens)
    - 枚 (mai): for flat, thin objects (e.g., "三枚" - san-mai, three sheets of paper)
    - 個 (ko): a general-purpose counter for small items.

4. Phonetic Changes:
- Some number combinations undergo phonetic changes (rendaku). For instance:
    - 300 is "三百" (sanbyaku), not "sanhyaku".
    - 600 is "六百" (roppyaku), not "rokuhyaku".
    - 800 is "八百" (happyaku), not "hachihyaku".
- A dedicated `hundreds` array helps manage these, though the logic must be aware of pronunciation.

5. Financial Context (Yen - 円):
- The Japanese Yen (円, en) is very simple.
- It has no fractional unit in common use.
- It does not have a plural form. "1 Yen" is "一円" (ichi en), and "10,000 Yen" is "一万円" (ichiman en).
- Example for 12,345 JPY: "一万二千三百四十五円"

6. Zero:
- "零" (rei) is the traditional Kanji for zero.
- "ゼロ" (zero), from English, is very common in modern usage. This dictionary uses the traditional "零".

*/

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

// Includes common phonetic irregularities for pronunciation (e.g., sanbyaku, roppyaku).
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

// Scales follow the myriad (10^4) system.
export const scales = [
    '',
    '千',       // 10^3 (Sen) - Special case, not a myriad scale but part of the grouping.
    '万',       // 10^4 (Man)
    '億',       // 10^8 (Oku)
    '兆',       // 10^12 (Chō)
    '京',       // 10^16 (Kei)
    '垓',       // 10^20 (Gai)
    '秭',       // 10^24 (Shi/Jo)
    '穰',       // 10^28 (Jō)
    '溝',       // 10^32 (Kō)
    '澗',       // 10^36 (Kan)
    '正',       // 10^40 (Sei)
    '載',       // 10^44 (Sai)
    '極',       // 10^48 (Goku)
    '恒河沙',   // 10^52 (Gōgasha)
    '阿僧祇',   // 10^56 (Asōgi)
    '那由他',   // 10^60 (Nayuta)
    '不可思議', // 10^64 (Fukashigi)
    '無量大数'  // 10^68 (Muryōtaisū)
];