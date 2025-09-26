// src/utils/toWords/ar-SA.ts

/*
Arabic (Modern Standard) Numbering System Notes:

1. Grammatical Gender (المذكّر والمؤنث):
- This is the most critical aspect. The form of the number changes based on the gender of the noun being counted. Your conversion function will likely need a parameter for gender (e.g., toWords(123, { gender: 'feminine' })).
- Numbers 1 & 2: They agree in gender with the noun and come *after* it. (e.g., "كتابٌ واحدٌ" - one book (m), "سيارةٌ واحدةٌ" - one car (f)).
- Numbers 3-10: They have *reverse gender agreement*. The number takes the feminine form for a masculine noun, and the masculine form for a feminine noun. (e.g., "ثلاثةُ كتبٍ" - three books (m), "ثلاثُ سياراتٍ" - three cars (f)).
- The arrays `ones_masculine` and `ones_feminine` are provided to handle these cases.

2. Number Construction and Conjunctions:
- Compound numbers from 21-99 use the conjunction "و" (wa), meaning "and".
- The order is ones-and-tens. Example: 25 is "خمسة وعشرون" (khamsa wa-ʿishrūn) - literally "five and twenty".

3. Dual and Plural Forms for Scales (المثنى والجمع):
- Arabic has a "dual" form for the number 2. This applies to hundreds and larger scales.
- Scales like thousand, million, etc., have three forms:
    - Singular (for 1), Dual (for 2), and Plural (for 3-10).
- The logic must select the correct form. For example, 2,000 is "ألفان", but 3,000 is "ثلاثة آلاف".

4. Financial Context (Currency):
- Currency follows the same grammatical rules. The currency name is a noun with a specific gender.
- For instance, the Saudi Riyal (ريال) is masculine, while its subdivision, the Halala (هللة), is feminine.
- The integer and decimal parts are connected by the conjunction "و" (wa - "and").
- Example for 125.50 SAR:
    - Arabic: "مئة وخمسة وعشرون ريالاً وخمسون هللة"
    - Transliteration: (miʾah wa-khamsa wa-ʿishrūn riyālan wa-khamsūn halalah)
    - Literal Meaning: "One hundred and five and twenty riyals and fifty halalas"

5. Numbering System Scale:
- Arabic uses the short scale, same as English (Million, Billion, Trillion).

*/


// Numbers 0-19 for masculine nouns.
export const ones_masculine = [
    'صفر', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة',
    'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'
];

// Numbers 0-19 for feminine nouns.
export const ones_feminine = [
    'صفر', 'واحدة', 'اثنتان', 'ثلاث', 'أربع', 'خمس', 'ست', 'سبع', 'ثمان', 'تسع', 'عشر',
    'إحدى عشرة', 'اثنتا عشرة', 'ثلاث عشرة', 'أربع عشرة', 'خمس عشرة', 'ست عشرة', 'سبع عشرة', 'ثماني عشرة', 'تسع عشرة'
];

// Tens are mostly gender-neutral.
export const tens = [
    '', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'
];

// Hundreds have singular, dual, and combined forms.
export const hundreds = [
    '', 'مئة', 'مئتان', 'ثلاثمئة', 'أربعمئة', 'خمسمئة', 'ستمئة', 'سبعمئة', 'ثمانمئة', 'تسعمئة'
];

// Scales require singular, dual (for 2), and plural (for 3-10) forms.
export const scales = {
    thousand: { singular: 'ألف', dual: 'ألفان', plural: 'آلاف' },                            // 10^3
    million: { singular: 'مليون', dual: 'مليونان', plural: 'ملايين' },                      // 10^6
    billion: { singular: 'مليار', dual: 'ملياران', plural: 'مليارات' },                     // 10^9
    trillion: { singular: 'ترليون', dual: 'ترليونان', plural: 'ترليونات' },                  // 10^12
    quadrillion: { singular: 'كوادرليون', dual: 'كوادرليونان', plural: 'كوادرليونات' },     // 10^15
    quintillion: { singular: 'كوينتليون', dual: 'كوينتليونان', plural: 'كوينتليونات' },     // 10^18
    sextillion: { singular: 'سكستيليون', dual: 'سكستيليونان', plural: 'سكستيليونات' },      // 10^21
    septillion: { singular: 'سبتيليون', dual: 'سبتيليونان', plural: 'سبتيليونات' },         // 10^24
    octillion: { singular: 'أوكتيليون', dual: 'أوكتيليونان', plural: 'أوكتيليونات' },       // 10^27
    nonillion: { singular: 'نونيليون', dual: 'نونيليونان', plural: 'نونيليونات' },         // 10^30
    decillion: { singular: 'ديسيليون', dual: 'ديسيليونان', plural: 'ديسيليونات' },          // 10^33
    undecillion: { singular: 'أوندسيليون', dual: 'أوندسيليونان', plural: 'أوندسيليونات' },  // 10^36
    duodecillion: { singular: 'دوديسيليون', dual: 'دوديسيليونان', plural: 'دوديسيليونات' }, // 10^39
    tredecillion: { singular: 'تريديسيليون', dual: 'تريديسيليونان', plural: 'تريديسيليونات' }, // 10^42
    quattuordecillion: { singular: 'كواتورديسيليون', dual: 'كواتورديسيليونان', plural: 'كواتورديسيليونات' }, // 10^45
    quindecillion: { singular: 'كوينديسيليون', dual: 'كوينديسيليونان', plural: 'كوينديسيليونات' }, // 10^48
    sexdecillion: { singular: 'سيكسديسيليون', dual: 'سيكسديسيليونان', plural: 'سيكسديسيليونات' }, // 10^51
    septendecillion: { singular: 'سبتنديليون', dual: 'سبتنديليونان', plural: 'سبتنديليونات' }, // 10^54
    octodecillion: { singular: 'أوكتوديسيليون', dual: 'أوكتوديسيليونان', plural: 'أوكتوديسيليونات' }, // 10^57
    novemdecillion: { singular: 'نوفمديسيليون', dual: 'نوفمديسيليونان', plural: 'نوفمديسيليونات' }, // 10^60
    vigintillion: { singular: 'فيجينتيليون', dual: 'فيجينتيليونان', plural: 'فيجينتيليونات' } // 10^63
};