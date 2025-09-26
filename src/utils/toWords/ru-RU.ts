// src/utils/toWords/ru-RU.ts

/*
Russian (ru-RU) Numbering System Notes:

1. Grammatical Gender and Case:
- This is the most critical aspect of Russian numbers. Words change form based on both gender (masculine, feminine, neuter) and grammatical case (nominative, genitive, etc.).
- The number words provided in this dictionary are in their default **nominative case**. A fully grammatically correct implementation would require a sophisticated handling of case agreement, which is beyond the scope of a simple dictionary.
- Gender affects the numbers 1 and 2 directly.
    - 1: один (m), одна (f), одно (n)
    - 2: два (m/n), две (f)
- The data structure for `ones` contains objects for 1 and 2 to provide these forms.

2. Pluralization of Nouns and Scales:
- The form of a noun being counted changes based on the last digit of the number.
    - Ends in 1 (but not 11): Nominative Singular (e.g., один стол - 1 table)
    - Ends in 2, 3, 4 (but not 12-14): Genitive Singular (e.g., два стола - 2 tables)
    - Ends in 5-9, 0, or 11-19: Genitive Plural (e.g., пять столов - 5 tables)
- This rule also applies to the scale words themselves (`thousand`, `million`). The `scales` array provides the three main forms needed to handle this logic.

3. Gender of Scales:
- Unlike in English, scale words have grammatical gender.
- "Thousand" (тысяча) is **feminine**. This means numbers modifying it must also be in the feminine form (e.g., "одна тысяча" for 1,000, "две тысячи" for 2,000).
- "Million" (миллион), "billion" (миллиард), etc., are **masculine**.

4. Financial Context (Ruble & Kopek):
- Currency: Russian Ruble (рубль) and Kopek (копейка).
- Gender: "Ruble" (рубль) is masculine. "Kopek" (копейка) is feminine.
- Pluralization follows the case rules mentioned in point 2.
    - 1 рубль / 1 копейка
    - 2, 3, 4 рубля / 2, 3, 4 копейки
    - 5+ рублей / 5+ копеек
- Example for 123.45 RUB:
    - "сто двадцать три рубля сорок пять копеек"
    - (sto dvadtsat' tri rublya sorok pyat' kopeyek)

5. Zero:
- Zero is "ноль" (nol').

*/

// The array contains objects for 1 and 2 to handle grammatical gender.
export const ones = [
    'ноль',                                    // 0
    { m: 'один', f: 'одна', n: 'одно' },      // 1
    { m: 'два', f: 'две', n: 'два' },         // 2
    'три',                                     // 3
    'четыре',                                  // 4
    'пять',                                    // 5
    'шесть',                                   // 6
    'семь',                                    // 7
    'восемь',                                  // 8
    'девять',                                  // 9
    'десять',                                  // 10
    'одиннадцать',                             // 11
    'двенадцать',                              // 12
    'тринадцать',                              // 13
    'четырнадцать',                            // 14
    'пятнадцать',                              // 15
    'шестнадцать',                             // 16
    'семнадцать',                              // 17
    'восемнадцать',                            // 18
    'девятнадцать'                             // 19
];

export const tens = [
    '',
    '',
    'двадцать',                                // 20
    'тридцать',                               // 30
    'сорок',                                   // 40
    'пятьдесят',                               // 50
    'шестьдесят',                              // 60
    'семьдесят',                               // 70
    'восемьдесят',                             // 80
    'девяносто'                                // 90
];

export const hundreds = [
    '',
    'сто',                                     // 100
    'двести',                                  // 200
    'триста',                                  // 300
    'четыреста',                               // 400
    'пятьсот',                                 // 500
    'шестьсот',                                // 600
    'семьсот',                                 // 700
    'восемьсот',                               // 800
    'девятьсот'                                // 900
];

// Scales require multiple forms for grammatical agreement.
// form_1 for numbers ending in 1 (e.g., 21, 31)
// form_2_4 for numbers ending in 2, 3, 4
// form_5_0 for numbers ending in 5-0 or 11-19
export const scales = [
    // Thousand is feminine and has unique declensions.
    { base: 'тысяча', f: true, form_1: 'тысяча', form_2_4: 'тысячи', form_5_0: 'тысяч' }, // 10^3
    { base: 'миллион', form_1: 'миллион', form_2_4: 'миллиона', form_5_0: 'миллионов' }, // 10^6
    { base: 'миллиард', form_1: 'миллиард', form_2_4: 'миллиарда', form_5_0: 'миллиардов' }, // 10^9
    { base: 'триллион', form_1: 'триллион', form_2_4: 'триллиона', form_5_0: 'триллионов' }, // 10^12
    { base: 'квадриллион', form_1: 'квадриллион', form_2_4: 'квадриллиона', form_5_0: 'квадриллионов' }, // 10^15
    { base: 'квинтиллион', form_1: 'квинтиллион', form_2_4: 'квинтиллиона', form_5_0: 'квинтиллионов' }, // 10^18
    { base: 'секстиллион', form_1: 'секстиллион', form_2_4: 'секстиллиона', form_5_0: 'секстиллионов' }, // 10^21
    { base: 'септиллион', form_1: 'септиллион', form_2_4: 'септиллиона', form_5_0: 'септиллионов' }, // 10^24
    { base: 'октиллион', form_1: 'октиллион', form_2_4: 'октиллиона', form_5_0: 'октиллионов' }, // 10^27
    { base: 'нониллион', form_1: 'нониллион', form_2_4: 'нониллиона', form_5_0: 'нониллионов' }, // 10^30
    { base: 'дециллион', form_1: 'дециллион', form_2_4: 'дециллиона', form_5_0: 'дециллионов' }, // 10^33
    { base: 'ундециллион', form_1: 'ундециллион', form_2_4: 'ундециллиона', form_5_0: 'ундециллионов' }, // 10^36
    { base: 'дуодециллион', form_1: 'дуодециллион', form_2_4: 'дуодециллиона', form_5_0: 'дуодециллионов' }, // 10^39
    { base: 'тредециллион', form_1: 'тредециллион', form_2_4: 'тредециллиона', form_5_0: 'тредециллионов' }, // 10^42
    { base: 'кваттуордециллион', form_1: 'кваттуордециллион', form_2_4: 'кваттуордециллиона', form_5_0: 'кваттуордециллионов' }, // 10^45
    { base: 'квиндециллион', form_1: 'квиндециллион', form_2_4: 'квиндециллиона', form_5_0: 'квиндециллионов' }, // 10^48
    { base: 'сексдециллион', form_1: 'сексдециллион', form_2_4: 'сексдециллиона', form_5_0: 'сексдециллионов' }, // 10^51
    { base: 'септендециллион', form_1: 'септендециллион', form_2_4: 'септендециллиона', form_5_0: 'септендециллионов' }, // 10^54
    { base: 'октодециллион', form_1: 'октодециллион', form_2_4: 'октодециллиона', form_5_0: 'октодециллионов' }, // 10^57
    { base: 'новемдециллион', form_1: 'новемдециллион', form_2_4: 'новемдециллиона', form_5_0: 'новемдециллионов' }, // 10^60
    { base: 'вигинтиллион', form_1: 'вигинтиллион', form_2_4: 'вигинтиллиона', form_5_0: 'вигинтиллионов' } // 10^63
];