// src/utils/toWords/wuu-Hans-SH.ts

/*
Wu Chinese (wuu-Hans-SH) Numbering System Notes:

1. Core System (Myriad-Based System):
- Like other Chinese languages, Wu uses the myriad-based system, grouping digits in units of 10,000.
- Core scales: 万 (wàn, 10^4), 亿 (yì, 10^8), 兆 (zhào, 10^12), etc.

2. Script (Simplified Chinese Characters):
- Wu Chinese is primarily spoken in regions of Mainland China (like Shanghai, Suzhou, Hangzhou) where Simplified Chinese characters (`Hans`) are the official standard. This dictionary uses Simplified characters.

3. Spoken vs. Formal Numbers (Colloquialisms):
- Spoken Shanghainese (a representative dialect of Wu) has its own colloquialisms.
- "Twenty" is often "廿" (nyè) instead of the formal "二十". This is similar to Cantonese.
- The numbers 1 and 2 also have different forms in some contexts. This dictionary provides the standard, formal written forms.

4. Financial Context (Chinese Yuan & Anti-Fraud Characters):
- Currency: Chinese Yuan (元), Jiao (角 - 1/10), Fen (分 - 1/100).
- CRITICAL: For financial and legal documents, special complex characters known as "dàxiě" (大写) are used to prevent forgery. A robust financial application MUST use these.
    - 零 (0) -> 零
    - 一 (1) -> 壹 (yī)
    - 二 (2) -> 贰 (èr)
    - 三 (3) -> 叁 (sān)
    - 四 (4) -> 肆 (sì)
    - 五 (5) -> 伍 (wǔ)
    - 六 (6) -> 陆 (liù)
    - 七 (7) -> 柒 (qī)
    - 八 (8) -> 捌 (bā)
    - 九 (9) -> 玖 (jiǔ)
    - 十 (10) -> 拾 (shí)
    - 百 (100) -> 佰 (bǎi)
    - 千 (1000) -> 仟 (qiān)
    - 万 (10^4) -> 万 or 萬
    - 亿 (10^8) -> 亿 or 億
- Example for 123.45 CNY (in formal, non-financial text): "一百二十三元四角五分"

5. Zero:
- The formal word for zero is "零" (líng).

*/

// Formal number words using Simplified Chinese characters.
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

// Scales follow the myriad (10^4) system, using Simplified characters.
export const scales = [
    '',
    '千',       // 10^3
    '万',       // 10^4
    '亿',       // 10^8
    '兆',       // 10^12
    '京',       // 10^16
    '垓',       // 10^20
    '秭',       // 10^24
    '穰',       // 10^28
    '沟',       // 10^32
    '涧',       // 10^36
    '正',       // 10^40
    '载',       // 10^44
    '极',       // 10^48
    '恒河沙',   // 10^52
    '阿僧祇',   // 10^56
    '那由他',   // 10^60
    '不可思议', // 10^64
    '无量大数'  // 10^68
];
