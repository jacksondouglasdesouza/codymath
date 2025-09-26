// src/utils/toWords/hi-IN.ts

/* Hindi (hi-IN) Numbering System Notes:

1. Core System:
- Hindi uses the Indian Numbering System, which is based on grouping by Lakhs and Crores.
- The grouping pattern is different from the international system. After the first three digits (hundreds), digits are grouped in pairs.
- Example: 1,23,45,678 is read as "एक करोड़ तेईस लाख पैंतालीस हज़ार छह सौ अठहत्तर" (one crore, twenty-three lakh, forty-five thousand, six hundred seventy-eight).

2. Unique Words for 1-100:
- Unlike English, Hindi has unique or irregular words for most numbers up to 100.
- A simple combination of tens and ones will produce incorrect results (e.g., 21 is "इक्कीस" (ikkis), not "बीस एक" (bees ek)).
- For this reason, a single comprehensive list (`units`) is provided for numbers 0-100.

3. Financial Context (Rupees and Paise):
- When converting numbers to financial text, the currency name is typically appended.
- Integer part: The word "रुपये" (rupaye - rupees) is added at the end.
    - Example: ₹123 becomes "एक सौ तेईस रुपये" (ek sau teis rupaye).
- Decimal part: The word "पैसे" (paise) is added after the decimal value. The decimal part is read as a whole number.
    - Example: ₹123.45 becomes "एक सौ तेईस रुपये और पैंतालीस पैसे" (ek sau teis rupaye aur paintaalees paise - one hundred twenty-three rupees and forty-five paise).

4. Core Scales (Indian System):
    - हज़ार (hazaar) = 1,000 (10^3)
    - लाख (lakh)   = 1,00,000 (10^5)
    - करोड़ (crore)  = 1,00,00,000 (10^7)
    (and so on)

5. Zero:
- Zero is "शून्य" (shunya).

*/

// A comprehensive list for numbers 0-100 is necessary due to unique word formations in Hindi.

export const units = [
    'शून्य',      // 0
    'एक',        // 1
    'दो',         // 2
    'तीन',       // 3
    'चार',       // 4
    'पाँच',       // 5
    'छह',        // 6
    'सात',       // 7
    'आठ',        // 8
    'नौ',         // 9
    'दस',        // 10
    'ग्यारह',    // 11
    'बारह',      // 12
    'तेरह',      // 13
    'चौदह',      // 14
    'पंद्रह',     // 15
    'सोलह',      // 16
    'सत्रह',     // 17
    'अठारह',     // 18
    'उन्नीस',    // 19
    'बीस',       // 20
    'इक्कीस',    // 21
    'बाईस',      // 22
    'तेईस',      // 23
    'चौबीस',     // 24
    'पच्चीस',    // 25
    'छब्बीस',    // 26
    'सत्ताईस',   // 27
    'अट्ठाईस',   // 28
    'उनतीस',     // 29
    'तीस',       // 30
    'इकतीस',     // 31
    'बत्तीस',     // 32
    'तैंतीस',     // 33
    'चौंतीस',     // 34
    'पैंतीस',     // 35
    'छत्तीस',     // 36
    'सैंतीस',     // 37
    'अड़तीस',     // 38
    'उनतालीस',   // 39
    'चालीस',     // 40
    'इकतालीस',   // 41
    'बयालीस',    // 42
    'तैंतालीस',   // 43
    'चौवालीस',   // 44
    'पैंतालीस',   // 45
    'छियालीस',   // 46
    'सैंतालीस',   // 47
    'अड़तालीस',   // 48
    'उनचास',     // 49
    'पचास',      // 50
    'इक्यावन',   // 51
    'बावन',      // 52
    'तिरपन',     // 53
    'चौवन',      // 54
    'पचपन',      // 55
    'छप्पन',      // 56
    'सत्तावन',   // 57
    'अट्ठावन',   // 58
    'उनसठ',      // 59
    'साठ',       // 60
    'इकसठ',      // 61
    'बासठ',      // 62
    'तिरसठ',     // 63
    'चौंसठ',     // 64
    'पैंसठ',      // 65
    'छियासठ',    // 66
    'सरसठ',      // 67
    'अड़सठ',      // 68
    'उनहत्तर',    // 69
    'सत्तर',      // 70
    'इकहत्तर',    // 71
    'बहत्तर',     // 72
    'तिहत्तर',    // 73
    'चौहत्तर',    // 74
    'पचहत्तर',    // 75
    'छिहत्तर',    // 76
    'सतहत्तर',    // 77
    'अठहत्तर',    // 78
    'उनासी',      // 79
    'अस्सी',      // 80
    'इक्यासी',    // 81
    'बयासी',     // 82
    'तिरासी',     // 83
    'चौरासी',     // 84
    'पचासी',     // 85
    'छियासी',    // 86
    'सतासी',     // 87
    'अठासी',     // 88
    'नवासी',     // 89
    'नब्बे',      // 90
    'इक्यानबे',   // 91
    'बानबे',      // 92
    'तिरानबे',    // 93
    'चौरानबे',    // 94
    'पंचानबे',   // 95
    'छियानबे',   // 96
    'सत्तानबे',   // 97
    'अट्ठानबे',   // 98
    'निन्यानवे',  // 99
    'सौ'         // 100
];

// Scales according to the Indian Numbering System.
// Higher order terms are based on ancient systems (like Vedic mathematics) and are theoretical,
// included here for parity with the extensive English scale.
export const scales = [
    '',          // 10^0
    'हज़ार',    // hazaar (Thousand) - 10^3
    'लाख',       // lakh - 10^5
    'करोड़',      // crore - 10^7
    'अरब',       // arab - 10^9
    'खरब',       // kharab - 10^11
    'नील',       // neel - 10^13
    'पद्म',       // padma - 10^15
    'शंख',       // shankh - 10^17
    'समुद्र',     // samudra - 10^19
    'अंक',       // ank - 10^21
    'जल्द',       // jald - 10^23
    'माध',       // madh - 10^25
    'परार्ध',     // parardh - 10^27
    'अंत',        // ant - 10^29
    'महा अंत',    // maha ant - 10^31
    'शिष्ट',      // shisht - 10^33
    'सिंघर',      // singhar - 10^35
    'महा सिंघर', // maha singhar - 10^37
    'अदंत सिंघर',// adant singhar - 10^39
    'महा अदंत सिंघर' // Equivalent to Vigintillion's magnitude range
];