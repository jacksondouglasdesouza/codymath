// src/utils/toWords/ko-KR.ts

/*
Korean (ko-KR) Numbering System Notes:

1. The Dual Number System:
- Korean uses two distinct sets of numbers: a native Korean system and a Sino-Korean system (derived from Chinese).
- a) Sino-Korean System (일, 이, 삼...): Used for dates, money, minutes, addresses, phone numbers, and any number over 99. This is the system for general-purpose number-to-text conversion.
- b) Native Korean System (하나, 둘, 셋...): Used for counting objects, people, age, and hours. It is generally only used for numbers from 1 to 99.
- This file exports two objects, `sinoKorean` and `nativeKorean`, to provide both sets.

2. Myriad-Based System for Large Numbers:
- Like Japanese and Chinese, Korean uses the myriad system, grouping digits in units of 10,000.
- The scales are 만 (man, 10^4), 억 (eok, 10^8), 조 (jo, 10^12), etc. This applies to the Sino-Korean system.

3. Special Forms in Native Korean:
- The native Korean numbers for 1, 2, 3, 4, and 20 change form when they are followed by a noun or a counter.
- 하나 (hana) -> 한 (han)
- 둘 (dul) -> 두 (du)
- 셋 (set) -> 세 (se)
- 넷 (net) -> 네 (ne)
- 스물 (seumul) -> 스무 (seumu)
- Example: "one person" is "한 명" (han myeong), not "하나 명".

4. Financial Context (South Korean Won):
- The **Sino-Korean system is used for currency**.
- The currency is the South Korean Won (원). It has a historical subdivision, the Jeon (전), but it is no longer in practical use.
- The Won has no plural form.
- Example for 12,345 KRW: "만 이천삼백사십오 원" (man icheon sambaek sasip-o won).

5. Zero:
- "영" (yeong) is the Sino-Korean word for zero.
- "공" (gong) is also used, often when reading individual digits, like in phone numbers.

*/

// Sino-Korean numbers (for general use, money, dates, numbers over 99)
export const sinoKorean = {
    ones: [
        '영',       // 0
        '일',       // 1
        '이',       // 2
        '삼',       // 3
        '사',       // 4
        '오',       // 5
        '육',       // 6
        '칠',       // 7
        '팔',       // 8
        '구'        // 9
    ],
    tens: [
        '',
        '십',       // 10
        '이십',     // 20
        '삼십',     // 30
        '사십',     // 40
        '오십',     // 50
        '육십',     // 60
        '칠십',     // 70
        '팔십',     // 80
        '구십'      // 90
    ],
    hundreds: [
        '',
        '백',       // 100
        '이백',     // 200
        '삼백',     // 300
        '사백',     // 400
        '오백',     // 500
        '육백',     // 600
        '칠백',     // 700
        '팔백',     // 800
        '구백'      // 900
    ]
};

// Native Korean numbers (for counting items, age, hours, 1-99 only)
export const nativeKorean = {
    ones: [
        '',
        '하나',     // 1
        '둘',       // 2
        '셋',       // 3
        '넷',       // 4
        '다섯',     // 5
        '여섯',     // 6
        '일곱',     // 7
        '여덟',     // 8
        '아홉'      // 9
    ],
    tens: [
        '',
        '열',       // 10
        '스물',     // 20
        '서른',     // 30
        '마흔',     // 40
        '쉰',       // 50
        '예순',     // 60
        '일흔',     // 70
        '여든',     // 80
        '아흔'      // 90
    ]
};

// Scales follow the myriad (10^4) system and are used with Sino-Korean numbers.
export const scales = [
    '',
    '천',       // 10^3 (cheon) - Thousand, part of the grouping
    '만',       // 10^4 (man)
    '억',       // 10^8 (eok)
    '조',       // 10^12 (jo)
    '경',       // 10^16 (gyeong)
    '해',       // 10^20 (hae)
    '자',       // 10^24 (ja)
    '양',       // 10^28 (yang)
    '구',       // 10^32 (gu)
    '간',       // 10^36 (gan)
    '정',       // 10^40 (jeong)
    '재',       // 10^44 (jae)
    '극',       // 10^48 (geuk)
    '항하사',   // 10^52 (hanghasa)
    '아승기',   // 10^56 (aseunggi)
    '나유타',   // 10^60 (nayuta)
    '불가사의', // 10^64 (bulgasaui)
    '무량대수'  // 10^68 (muryangdaesu)
];