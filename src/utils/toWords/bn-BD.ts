// src/utils/toWords/bn-BD.ts

/*
Bengali (Bangla) Numbering System Notes:

1. Core System (Indian Numbering System):
- Bengali uses the Indian Numbering System, with scales based on লাখ (lakh) and কোটি (koti).
- The grouping pattern is `xx,xx,xx,xxx`. After the first group of three (hundreds), digits are grouped in pairs.
- Example: 1,23,45,678 is read as "এক কোটি তেইশ লাখ পঁয়তাল্লিশ হাজার ছয়শ আটাত্তর" (ek koti teish lakh poytallish hajar chhoy-sho atattor).

2. Unique Words for 1-100:
- Similar to Hindi, numbers up to 100 have unique or irregular names. They are not formed by simply combining tens and ones.
- Example: 21 is "একুশ" (ekush), not a combination of "বিশ" (bish - twenty) and "এক" (ek - one).
- For this reason, a single comprehensive list (`units`) is provided for numbers 0-100 to ensure accuracy.

3. Financial Context (Taka and Poysha):
- The currency in both Bangladesh and India (for Bengali speakers) is referred to as Taka and Poysha.
- Main unit: টাকা (Taka)
- Subdivision: পয়সা (Poysha)
- Example for 125.50:
    - "একশ পঁচিশ টাকা পঞ্চাশ পয়সা"
    - (ek-sho pochish taka ponchash poysha)
    - (One hundred twenty-five Taka fifty Poysha)

4. Core Scales:
    - হাজার (hajar) = 1,000 (10^3)
    - লাখ (lakh)    = 1,00,000 (10^5)
    - কোটি (koti)    = 1,00,00,000 (10^7)
    (and so on)

5. Zero:
- Zero is "শূন্য" (shunno).

6. Applicability:
- This dictionary is suitable for both Indian Bengali (bn-IN) and Bangladeshi Bengali (bn-BD).

*/

// A comprehensive list for numbers 0-100 is necessary due to unique word formations in Bengali.
export const units = [
    'শূন্য', 'এক', 'দুই', 'তিন', 'চার', 'পাঁচ', 'ছয়', 'সাত', 'আট', 'নয়', 'দশ', 'এগারো', 'বারো', 'তেরো', 'চোদ্দ', 'পনেরো', 'ষোল', 'সতেরো', 'আঠারো', 'উনিশ', 'বিশ', 'একুশ', 'বাইশ', 'তেইশ', 'চব্বিশ', 'পঁচিশ', 'ছাব্বিশ', 'সাতাশ', 'আঠাশ', 'উনত্রিশ', 'ত্রিশ', 'একত্রিশ', 'বত্রিশ', 'তেত্রিশ', 'চৌত্রিশ', 'পঁয়ত্রিশ', 'ছত্রিশ', 'সাঁইত্রিশ', 'আটত্রিশ', 'উনচল্লিশ', 'চল্লিশ', 'একচল্লিশ', 'বিয়াল্লিশ', 'তেতাল্লিশ', 'চুয়াল্লিশ', 'পঁয়তাল্লিশ', 'ছেচল্লিশ', 'সাতচল্লিশ', 'আটচল্লিশ', 'উনপঞ্চাশ', 'পঞ্চাশ', 'একান্ন', 'বায়ান্ন', 'তিপ্পান্ন', 'চুয়ান্ন', 'পঞ্চান্ন', 'ছাপ্পান্ন', 'সাতান্ন', 'আটান্ন', 'উনষাট', 'ষাট', 'একষট্টি', 'বাষট্টি', 'তেষট্টি', 'চৌষট্টি', 'পঁয়ষট্টি', 'ছেষট্টি', 'সাতষট্টি', 'আটষট্টি', 'উনসত্তর', 'সত্তর', 'একাত্তর', 'বাহাত্তর', 'তিয়াত্তর', 'চুয়াত্তর', 'পঁচাত্তর', 'ছিয়াত্তর', 'সাতাত্তর', 'আটাত্তর', 'উনআশি', 'আশি', 'একাশি', 'বিরাশি', 'তিরাশি', 'চুরাশি', 'পঁচাশি', 'ছিয়াশি', 'সাতাশি', 'আটাশি', 'উননব্বই', 'নব্বই', 'একানব্বই', 'বিরানব্বই', 'তিরানব্বই', 'চুরানব্বই', 'পঁচানব্বই', 'ছিয়ানব্বই', 'সাতানব্বই', 'আটানব্বই', 'নিরানব্বই', 'একশ'
];

// Scales according to the Indian Numbering System.
// Higher order terms are based on ancient/Vedic systems, included for parity with the extensive English scale.
export const scales = [
    '',          // 10^0
    'হাজার',    // Hajar (Thousand) - 10^3
    'লাখ',       // Lakh - 10^5
    'কোটি',      // Koti (Crore) - 10^7
    'আরব',       // Arob - 10^9
    'খরব',       // Khorob - 10^11
    'নীল',       // Neel - 10^13
    'পদ্ম',       // Podmo - 10^15
    'শঙ্খ',      // Shongkho - 10^17
    'মহাসাগর',   // Mohashagor - 10^19
    'মধ্য',      // Moddho - 10^21
    'অন্ত',       // Onto - 10^23
    'পরার্ধ',     // Porardho - 10^25
    'ভূরি',       // Bhuri - 10^27
    'অনন্ত',      // Ononto - 10^29
    'বিরাট',      // Birat - 10^31
    'অসংখ্যেয়',  // Oshongkhyo - 10^33
    'অমিত',      // Omit - 10^35
    'জগৎ',       // Jogot - 10^37
    'মহাজগৎ',     // Mohajogot - 10^39
    'ব্রহ্মাণ্ড',   // Bromhando - 10^41
    'পরম'        // Porom - 10^43 and beyond, matches the 21-scale length of the English file.
];