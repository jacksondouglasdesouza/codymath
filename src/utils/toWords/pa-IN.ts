// src/utils/toWords/pa-IN.ts

/*
Punjabi (pa-IN) Numbering System Notes:

1. Core System (Indian Numbering System):
- Punjabi, as a major Indo-Aryan language, uses the Indian Numbering System with scales based on ਲੱਖ (lakh) and ਕਰੋੜ (crore).
- The grouping pattern is `xx,xx,xx,xxx`.

2. The Two Scripts: Gurmukhi and Shahmukhi:
- This is a unique and critical feature of Punjabi. The language is written in two different scripts.
- a) Gurmukhi (ਗੁਰਮੁਖੀ): Used in India (Punjab state). This is the script used in this dictionary file (`pa-IN`).
- b) Shahmukhi (شاه مکھی): A variant of the Perso-Arabic script, used in Pakistan. The number words are the same, just written differently.

3. Unique Words for 1-100:
- Like Hindi, Bengali, and Gujarati, numbers up to 100 have unique names.
- Example: 21 is "ਇੱਕੀ" (ikkī), not a combination of "ਵੀਹ" (vīh - twenty) and "ਇੱਕ" (ikk - one).
- For this reason, a single comprehensive list (`units`) is provided.

4. Financial Context (Indian Rupee):
- Currency: Indian Rupee (ਰੁਪਈਆ - Rūpaīā) and Paisa (ਪੈਸਾ - Paisā).
- Example for 123.45 INR:
    - "ਇੱਕ ਸੌ ਤੇਈ ਰੁਪਏ ਅਤੇ ਪੈਂਤਾਲੀ ਪੈਸੇ"
    - (ikk sau teī rūpaē ate paintālī paise)

5. Zero:
- Zero is "ਸਿਫ਼ਰ" (sifar).

*/

// A comprehensive list for numbers 0-100 is necessary due to unique word formations.
export const units = [
    'ਸਿਫ਼ਰ',       // 0
    'ਇੱਕ',         // 1
    'ਦੋ',          // 2
    'ਤਿੰਨ',        // 3
    'ਚਾਰ',        // 4
    'ਪੰਜ',        // 5
    'ਛੇ',          // 6
    'ਸੱਤ',        // 7
    'ਅੱਠ',        // 8
    'ਨੌਂ',         // 9
    'ਦਸ',         // 10
    'ਗਿਆਰਾਂ',      // 11
    'ਬਾਰਾਂ',       // 12
    'ਤੇਰਾਂ',       // 13
    'ਚੌਦਾਂ',       // 14
    'ਪੰਦਰਾਂ',      // 15
    'ਸੋਲ਼ਾਂ',       // 16
    'ਸਤਾਰਾਂ',      // 17
    'ਅਠਾਰਾਂ',      // 18
    'ਉੱਨੀ',        // 19
    'ਵੀਹ',        // 20
    'ਇੱਕੀ',        // 21
    'ਬਾਈ',        // 22
    'ਤੇਈ',        // 23
    'ਚੌਵੀ',       // 24
    'ਪੱਚੀ',       // 25
    'ਛੱਬੀ',       // 26
    'ਸਤਾਈ',       // 27
    'ਅਠਾਈ',       // 28
    'ਉਨੱਤੀ',       // 29
    'ਤੀਹ',        // 30
    'ਇਕੱਤੀ',       // 31
    'ਬੱਤੀ',       // 32
    'ਤੇਤੀ',       // 33
    'ਚੌਂਤੀ',       // 34
    'ਪੈਂਤੀ',       // 35
    'ਛੱਤੀ',       // 36
    'ਸੈਂਤੀ',       // 37
    'ਅਠੱਤੀ',       // 38
    'ਉਨਤਾਲੀ',      // 39
    'ਚਾਲੀ',       // 40
    'ਇਕਤਾਲੀ',      // 41
    'ਬਤਾਲੀ',       // 42
    'ਤ੍ਰਤਾਲੀ',      // 43
    'ਚੁਤਾਲੀ',      // 44
    'ਪੰਤਾਲੀ',      // 45
    'ਛਿਆਲੀ',      // 46
    'ਸੰਤਾਲੀ',      // 47
    'ਅਠਤਾਲੀ',      // 48
    'ਉਨੰਜਾ',      // 49
    'ਪੰਜਾਹ',      // 50
    'ਇਕਵੰਜਾ',     // 51
    'ਬਵੰਜਾ',      // 52
    'ਤਰਵੰਜਾ',     // 53
    'ਚੁਰੰਜਾ',      // 54
    'ਪਚਵੰਜਾ',     // 55
    'ਛਪੰਜਾ',      // 56
    'ਸਤਵੰਜਾ',     // 57
    'ਅਠਵੰਜਾ',     // 58
    'ਉਨਾਹਠ',      // 59
    'ਸੱਠ',        // 60
    'ਇਕਾਹਠ',      // 61
    'ਬਾਹਠ',       // 62
    'ਤਰੇਹਠ',       // 63
    'ਚੌਂਹਠ',       // 64
    'ਪੈਂਹਠ',       // 65
    'ਛਿਆਹਠ',      // 66
    'ਸਤਾਹਠ',      // 67
    'ਅਠਾਹਠ',      // 68
    'ਉਨੱਤਰ',      // 69
    'ਸੱਤਰ',       // 70
    'ਇਕੱਤਰ',      // 71
    'ਬਹੱਤਰ',      // 72
    'ਤਹੱਤਰ',      // 73
    'ਚੌਹੱਤਰ',      // 74
    'ਪੰਝੱਤਰ',      // 75
    'ਛਿਹੱਤਰ',      // 76
    'ਸਤੱਤਰ',      // 77
    'ਅਠੱਤਰ',      // 78
    'ਉਨਾਸੀ',      // 79
    'ਅੱਸੀ',        // 80
    'ਇਕਿਆਸੀ',     // 81
    'ਬਿਆਸੀ',      // 82
    'ਤਰਾਸੀ',      // 83
    'ਚੌਰਾਸੀ',     // 84
    'ਪਚਾਸੀ',      // 85
    'ਛਿਆਸੀ',      // 86
    'ਸਤਾਸੀ',      // 87
    'ਅਠਾਸੀ',      // 88
    'ਨਵਾਸੀ',      // 89
    'ਨੱਬੇ',        // 90
    'ਇਕਾਨਵੇਂ',     // 91
    'ਬਾਨਵੇਂ',      // 92
    'ਤਰਾਨਵੇਂ',     // 93
    'ਚੁਰਾਨਵੇਂ',     // 94
    'ਪਚਾਨਵੇਂ',     // 95
    'ਛਿਆਨਵੇਂ',     // 96
    'ਸਤਾਨਵੇਂ',     // 97
    'ਅਠਾਨਵੇਂ',     // 98
    'ਨੜਿੰਨਵੇ'     // 99
    // 'ਇੱਕ ਸੌ' for 100 is constructed.
];

// Scales according to the Indian Numbering System.
export const scales = [
    '',
    'ਸੌ',             // 10^2 (Hundred)
    'ਹਜ਼ਾਰ',           // 10^3 (Thousand)
    'ਲੱਖ',            // 10^5 (Lakh)
    'ਕਰੋੜ',           // 10^7 (Crore)
    'ਅਰਬ',            // 10^9 (Arab)
    'ਖਰਬ',            // 10^11 (Kharab)
    'ਨੀਲ',            // 10^13 (Neel)
    'ਪਦਮ',            // 10^15 (Padma)
    'ਸੰਖ',            // 10^17 (Sankh)
    'ਮਹਾਂਸੰਖ',        // 10^19 (Mahasankh)
    // Extended scales for parity
    'ਅੰਕ',             // 10^21
    'ਜਲਦ',             // 10^23
    'ਮਾਧ',             // 10^25
    'ਪਰਾਰਧ',          // 10^27
    'ਅੰਤ',             // 10^29
    'ਮਹਾਂਅੰਤ',         // 10^31
    'ਸ਼ਿਸ਼ਟ',           // 10^33
    'ਸਿੰਘਰ',           // 10^35
    'ਮਹਾਂਸਿੰਘਰ',      // 10^37
    'ਅਦੰਤਸਿੰਘਰ',     // 10^39
    'ਮਹਾਂਅਦੰਤਸਿੰਘਰ'   // ~10^41 and beyond
];
