// src/utils/toWords/zh-CN.ts

/* Chinese (Mandarin) - Simplified (Mainland China): 

1. Base System:
- Chinese uses a **myriad-based system (万制)**, grouping digits in units of 10,000 instead of 1,000.
- Core units: 十 (10), 百 (100), 千 (1,000), 万 (10⁴), 亿 (10⁸), 兆 (10¹²), 京 (10¹⁶), etc.

2. Digits:
- Numbers are expressed with unique characters (not built like French/Portuguese).
- Digits 0–9: 零 (0), 一 (1), 二 (2), 三 (3), 四 (4), 五 (5), 六 (6), 七 (7), 八 (8), 九 (9).

3. Construction:
- Numbers are formed by combining digit + place.
  Example: 23 = 二十三 ("two-ten-three").
- Zero (零) is inserted only when needed:
  - 105 = 一百零五 (yī bǎi líng wǔ)
  - 1005 = 一千零五 (yī qiān líng wǔ)

4. Decimals:
- The decimal separator is "点" (diǎn, 'dot/point').
- Each digit after the separator is read individually:
  Example: 101.23 = 一百零一点二三 (yī bǎi líng yī diǎn èr sān).

5. Large Number Nomenclature (up to 10^68):
- 10⁴  = 万 (wàn) / 萬 [financial]
- 10⁸  = 亿 (yì) / 億
- 10¹² = 兆 (zhào) / 兆   (*In Japanese/Korean tradition, 兆 = 10⁶, context matters)
- 10¹⁶ = 京 (jīng) / 京
- 10²⁰ = 垓 (gāi) / 垓
- 10²⁴ = 秭 (zǐ) / 秭
- 10²⁸ = 穰 (ráng) / 穰
- 10³² = 沟 (gōu) / 溝
- 10³⁶ = 涧 (jiàn) / 澗
- 10⁴⁰ = 正 (zhèng) / 正
- 10⁴⁴ = 载 (zài) / 載
- 10⁴⁸ = 极 (jí) / 極
- 10⁵² = 恒河沙 (héng hé shā) / 恒河沙  ("Ganges sands")
- 10⁵⁶ = 阿僧祇 (ā sēng qí) / 阿僧祇   (Buddhist origin)
- 10⁶⁰ = 那由他 (nà yóu tā) / 那由他
- 10⁶⁴ = 不可思议 (bù kě sī yì) / 不可思議
- 10⁶⁸ = 无量大数 (wú liàng dà shù) / 無量大數 ("immeasurable number")

6. Variants (Standard vs. Financial):
- In financial/legal contexts, complex forms (大写数字) are used to prevent forgery:
  一 → 壹, 二 → 贰, 三 → 叁, 四 → 肆, 五 → 伍, 六 → 陆, 七 → 柒, 八 → 捌, 九 → 玖, 零 → 零.
- Large scale units also have financial/traditional forms: 万 → 萬, 亿 → 億, etc.

7. Cultural/Practical Usage:
- In daily life, usage rarely exceeds 亿 (10⁸) or 兆 (10¹²).
- Terms beyond 京 (10¹⁶) are mainly literary, historical, or Buddhist in origin.
- Expressions like 恒河沙, 阿僧祇, 不可思议, 无量大数 are symbolic ("countless") rather than practical.
*/

/** 
 * Conclusion and Recommendations
  The equivalence is correct. The data in your dictionaries is accurate and well-structured for the purpose of a number-to-text conversion library.
  Key points for the implementation of the logic (toWords):
  Grouping Logic: Your function for Chinese must be fundamentally different from the one for English. It needs to group digits
  in fours (from right to left) to correctly apply the scales 万 (wàn), 亿 (yì), 兆 (zhào), etc.
  Handling of Zero (零): As your comments mention, the logic for inserting 零 (líng) is the biggest
  challenge in Chinese. It is only used once for multiple consecutive zeros (e.g., 1005 is 一千零五, not 一千零零五) and has specific placement rules.
  The Case of "Ten": Remember the special rule for numbers from 10 to 19, where "ten" (十) comes first (e.g., 十一 for eleven, 十二 for twelve), whereas
  in Portuguese/English the names are unique ("eleven", "twelve").
  In summary, the data preparation work is excellent. The challenge now lies in implementing the algorithm that will use 
  this data, especially for the complexities of the Chinese system.
*/


export const ones = [
    '零', '一', '二', '三', '四', '五',
    '六', '七', '八', '九'
];

export const tens = [
    '', '十', '二十', '三十', '四十', '五十',
    '六十', '七十', '八十', '九十'
];

export const hundreds = [
    '', '一百', '二百', '三百', '四百',
    '五百', '六百', '七百', '八百', '九百'
];

export const scales = [
    '',
    '十',       // 10
    '百',       // 100
    '千',       // 1,000
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