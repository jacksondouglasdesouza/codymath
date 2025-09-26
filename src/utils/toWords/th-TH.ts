// src/utils/toWords/th-TH.ts

/*
Thai (th-TH) Numbering System Notes:

1. Core System and Construction:
- Thai uses a standard decimal system with a highly regular structure, influenced by Chinese.
- The construction is combinatorial: `ยี่สิบเอ็ด` (yîi sìp èt) for 21 is literally "twenty-one".
- `yîi` is a special form for the number two when it's in the tens place (20).

2. The "Et" Rule for Number One:
- The number one is "หนึ่ง" (nʉ̀ŋ) in most cases.
- However, when it directly follows a ten, it becomes "เอ็ด" (èt).
- Example: 21 is "ยี่สิบเอ็ด" (yîi sìp èt), NOT "ยี่สิบหนึ่ง" (yîi sìp nʉ̀ŋ).
- Example: 101 is "หนึ่งร้อยเอ็ด" (nʉ̀ŋ rɔ́ɔi èt).

3. Script and Numerals:
- Thai uses its own beautiful and unique script, an abugida.
- It also has its own set of numerals (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙), though Western digits are also common.

4. Financial Context (Thai Baht):
- Currency: Thai Baht (บาท - bàat) and Satang (สตางค์ - sà-dtaang). (100 Satang = 1 Baht).
- Example for 123.50 THB:
  - "หนึ่งร้อยยี่สิบสามบาทห้าสิบสตางค์"
  - (nʉ̀ŋ rɔ́ɔi yîi sìp sǎam bàat hâa sìp sà-dtaang)

5. Large Numbers:
- Thai uses native words for scales up to a million. After that, it uses a multiplicative system based on "million" (ล้าน - láan).
- Trillion (10^12) is "ล้านล้าน" (láan láan) - literally "million million".

6. Zero:
- Zero is "ศูนย์" (sǔun).

*/

export const ones = [
    'ศูนย์',        // 0
    'หนึ่ง',        // 1
    'สอง',         // 2
    'สาม',         // 3
    'สี่',          // 4
    'ห้า',         // 5
    'หก',          // 6
    'เจ็ด',         // 7
    'แปด',         // 8
    'เก้า',         // 9
    'สิบ',         // 10
    'สิบเอ็ด',     // 11
    'สิบสอง',      // 12
    'สิบสาม',      // 13
    'สิบสี่',      // 14
    'สิบห้า',      // 15
    'สิบหก',       // 16
    'สิบเจ็ด',      // 17
    'สิบแปด',      // 18
    'สิบเก้า'      // 19
];

export const tens = [
    '',
    'สิบ',         // 10
    'ยี่สิบ',      // 20
    'สามสิบ',      // 30
    'สี่สิบ',      // 40
    'ห้าสิบ',      // 50
    'หกสิบ',       // 60
    'เจ็ดสิบ',      // 70
    'แปดสิบ',      // 80
    'เก้าสิบ'      // 90
];

export const hundreds = [
    '',
    'ร้อย',        // 100
    'สองร้อย',     // 200
    'สามร้อย',     // 300
    'สี่ร้อย',     // 400
    'ห้าร้อย',     // 500
    'หกร้อย',      // 600
    'เจ็ดร้อย',     // 700
    'แปดร้อย',     // 800
    'เก้าร้อย'      // 900
];

// Scales use a multiplicative system based on "million" for larger numbers.
export const scales = [
    '',
    'พัน',              // 10^3 (Thousand)
    'ล้าน',             // 10^6 (Million)
    'พันล้าน',          // 10^9 (Billion - "thousand million")
    'ล้านล้าน',         // 10^12 (Trillion - "million million")
    'พันล้านล้าน',      // 10^15 (Quadrillion)
    'ล้านล้านล้าน',     // 10^18 (Quintillion)
    'พันล้านล้านล้าน',  // 10^21 (Sextillion)
    'ล้านล้านล้านล้าน', // 10^24 (Septillion)
    'พันล้านล้านล้านล้าน',// 10^27 (Octillion)
    'ล้านล้านล้านล้านล้าน',// 10^30 (Nonillion)
    'พันล้านล้านล้านล้านล้าน',// 10^33 (Decillion)
    'ล้านล้านล้านล้านล้านล้าน',// 10^36 (Undecillion)
    'พันล้านล้านล้านล้านล้านล้าน',// 10^39 (Duodecillion)
    'ล้านล้านล้านล้านล้านล้านล้าน',// 10^42 (Tredecillion)
    'พันล้านล้านล้านล้านล้านล้านล้าน',// 10^45 (Quattuordecillion)
    'ล้านล้านล้านล้านล้านล้านล้านล้าน',// 10^48 (Quindecillion)
    'พันล้านล้านล้านล้านล้านล้านล้านล้าน',// 10^51 (Sexdecillion)
    'ล้านล้านล้านล้านล้านล้านล้านล้านล้าน',// 10^54 (Septendecillion)
    'พันล้านล้านล้านล้านล้านล้านล้านล้านล้าน',// 10^57 (Octodecillion)
    'ล้านล้านล้านล้านล้านล้านล้านล้านล้านล้าน',// 10^60 (Novemdecillion)
    'พันล้านล้านล้านล้านล้านล้านล้านล้านล้านล้าน' // 10^63 (Vigintillion)
];