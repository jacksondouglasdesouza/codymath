// src/utils/toWords/ur-PK.ts

/*
Urdu (ur-PK) Numbering System Notes:

1. Core System (Indian Numbering System):
- Urdu uses the Indian Numbering System, with scales based on لاکھ (lakh) and کروڑ (crore).
- The grouping pattern is `xx,xx,xx,xxx`. After the first group of three (hundreds), digits are grouped in pairs.
- Example: 1,23,45,678 is read as "ایک کروڑ تئیس لاکھ پینتالیس ہزار چھ سو اٹھتر"

2. Script:
- Urdu uses the Perso-Arabic script (Nastaliq style), which is written from right to left.
- While Urdu has its own numerals (۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹), this dictionary uses standard Western digits for data representation.

3. Unique Words for 1-100:
- The number words in Urdu are nearly identical to Hindi (as part of the Hindustani language).
- Numbers up to 100 have unique names and are not formed by simply combining tens and ones.
- Example: 21 is "اکیس" (ikkis), not a combination of "بیس" (bīs - twenty) and "ایک" (ek - one).
- For this reason, a single comprehensive list (`units`) is provided for numbers 0-100.

4. Financial Context (Pakistani Rupee):
- Currency: Pakistani Rupee (روپیہ - Rūpiyah) and Paisa (پیسہ - Paisa).
- Pluralization of Rupee:
    - 1 روپیہ (rūpiyah)
    - 2, 3, 4 روپے (rūpaye)
    - 5+ روپے (rūpaye)
- Example for 125.50 PKR:
    - "ایک سو پچیس روپے اور پچاس پیسے"
    - (ek sau pachīs rūpaye aur pachās paise)
    - (One hundred twenty-five Rupees and fifty Paisa)

5. Zero:
- Zero is "صفر" (sifar).

*/

// A comprehensive list for numbers 0-100 is necessary due to unique word formations.
export const units = [
    'صفر',      // 0
    'ایک',       // 1
    'دو',        // 2
    'تین',       // 3
    'چار',       // 4
    'پانچ',      // 5
    'چھ',        // 6
    'سات',       // 7
    'آٹھ',       // 8
    'نو',        // 9
    'دس',        // 10
    'گیارہ',     // 11
    'بارہ',      // 12
    'تیرہ',      // 13
    'چودہ',      // 14
    'پندرہ',     // 15
    'سولہ',      // 16
    'سترہ',      // 17
    'اٹھارہ',     // 18
    'انیس',      // 19
    'بیس',       // 20
    'اکیس',      // 21
    'بائیس',     // 22
    'تئیس',      // 23
    'چوبیس',     // 24
    'پچیس',      // 25
    'چھبیس',     // 26
    'ستائیس',    // 27
    'اٹھائیس',    // 28
    'انتیس',     // 29
    'تیس',       // 30
    'اکتیس',     // 31
    'بتیس',     // 32
    'تینتیس',    // 33
    'چونتیس',    // 34
    'پینتیس',    // 35
    'چھتیس',     // 36
    'سینتیس',    // 37
    'اڑتیس',     // 38
    'انتالیس',    // 39
    'چالیس',     // 40
    'اکتالیس',    // 41
    'بیالیس',    // 42
    'تینتالیس',   // 43
    'چوالیس',    // 44
    'پینتالیس',   // 45
    'چھیالیس',    // 46
    'سینتالیس',   // 47
    'اڑتالیس',    // 48
    'انچاس',     // 49
    'پچاس',      // 50
    'اکاون',     // 51
    'باون',      // 52
    'ترپن',      // 53
    'چون',       // 54
    'پچپن',      // 55
    'چھپن',      // 56
    'ستاون',     // 57
    'اٹھاون',     // 58
    'انسٹھ',     // 59
    'ساٹھ',      // 60
    'اکسٹھ',     // 61
    'باسٹھ',     // 62
    'تریسٹھ',     // 63
    'چونسٹھ',     // 64
    'پینسٹھ',     // 65
    'چھیاسٹھ',    // 66
    'سٹسٹھ',     // 67
    'اڑسٹھ',     // 68
    'انہتر',     // 69
    'ستر',       // 70
    'اکہتر',     // 71
    'بہتر',      // 72
    'تہتر',      // 73
    'چوہتر',     // 74
    'پچہتر',     // 75
    'چھہتر',     // 76
    'ستتر',      // 77
    'اٹھتر',     // 78
    'اناسی',     // 79
    'اسی',       // 80
    'اکیاسی',    // 81
    'بیاسی',     // 82
    'تراسی',     // 83
    'چوراسی',    // 84
    'پچاسی',     // 85
    'چھیاسی',    // 86
    'ستاسی',     // 87
    'اٹھاسی',    // 88
    'نواسی',     // 89
    'نوے',       // 90
    'اکیانوے',   // 91
    'بانوے',     // 92
    'ترانوے',     // 93
    'چورانوے',    // 94
    'پچانوے',    // 95
    'ھیانوے',    // 96
    'ستانوے',    // 97
    'اٹھانوے',    // 98
    'ننانوے',    // 99
    'ایک سو'      // 100
];

// Scales according to the Indian Numbering System.
export const scales = [
    '',        // 10^0
    'ہزار',   // Hazaar (Thousand) - 10^3
    'لاکھ',    // Lakh - 10^5
    'کروڑ',   // Crore - 10^7
    'ارب',    // Arab - 10^9
    'کھرب',   // Kharab - 10^11
    'نیل',     // Neel - 10^13
    'پدم',     // Padam - 10^15
    'سنکھ',   // Sankh - 10^17
    // Higher order terms from Vedic tradition to maintain parity
    'مہاسنکھ', // Mahasankh - 10^19
    'اناد',    // Anad - 10^21
    'جلاد',    // Jalad - 10^23
    'ماد',     // Madh - 10^25
    'پراردھ',  // Parardh - 10^27
    'انت',     // Ant - 10^29
    'مہاانت',   // Maha-ant - 10^31
    'شِشٹ',   // Shisht - 10^33
    'سنگھار',  // Singhar - 10^35
    'مہاسنگھار',// Maha-singhar - 10^37
    'اڈنٹ سنگھار', // Adant-singhar - 10^39
    'مہا اڈنٹ سنگھار' // Maha-adant-singhar - for consistency with other scale lengths
];