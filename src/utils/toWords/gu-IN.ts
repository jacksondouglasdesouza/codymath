// src/utils/toWords/gu-IN.ts

/*
Gujarati (gu-IN) Numbering System Notes:

1. Core System (Indian Numbering System):
- Gujarati, like other Indo-Aryan languages of the region, uses the Indian Numbering System with scales based on લાખ (lakh) and કરોડ (crore).
- The grouping pattern is `xx,xx,xx,xxx`.

2. Script:
- Gujarati uses its own script, which is an abugida derived from the Devanagari script but is distinct for not having the top horizontal bar.

3. Unique Words for 1-100:
- Numbers up to 100 have unique names. They are not formed by simply combining tens and ones.
- Example: 21 is "એકવીસ" (ekvīs), not a combination of "વીસ" (vīs - twenty) and "એક" (ek - one).
- For this reason, a single comprehensive list (`units`) is provided for numbers 0-100.

4. Financial Context (Indian Rupee):
- Currency: Indian Rupee (રૂપિયો - Rūpiyo) and Paisa (પૈસા - Paisā).
- Example for 123.45 INR:
    - "એક સો ત્રેવીસ રૂપિયા અને પિસ્તાલીસ પૈસા"
    - (ek so trevīs rūpiyā ane pistālīs paisā)

5. Zero:
- Zero is "શૂન્ય" (śūnya).

*/

// A comprehensive list for numbers 0-100 is necessary due to unique word formations.
export const units = [
    'શૂન્ય',       // 0
    'એક',         // 1
    'બે',          // 2
    'ત્રણ',        // 3
    'ચાર',        // 4
    'પાંચ',        // 5
    'છ',          // 6
    'સાત',        // 7
    'આઠ',         // 8
    'નવ',         // 9
    'દસ',         // 10
    'અગિયાર',     // 11
    'બાર',        // 12
    'તેર',        // 13
    'ચૌદ',        // 14
    'પંદર',       // 15
    'સોળ',        // 16
    'સત્તર',       // 17
    'અઢાર',       // 18
    'ઓગણીસ',      // 19
    'વીસ',        // 20
    'એકવીસ',      // 21
    'બાવીસ',      // 22
    'ત્રેવીસ',      // 23
    'ચોવીસ',      // 24
    'પચ્ચીસ',      // 25
    'છવ્વીસ',      // 26
    'સત્તાવીસ',     // 27
    'અઠ્ઠાવીસ',     // 28
    'ઓગણત્રીસ',    // 29
    'ત્રીસ',       // 30
    'એકત્રીસ',     // 31
    'બત્રીસ',      // 32
    'તેત્રીસ',      // 33
    'ચોત્રીસ',     // 34
    'પાંત્રીસ',     // 35
    'છત્રીસ',      // 36
    'સાડત્રીસ',     // 37
    'આડત્રીસ',     // 38
    'ઓગણચાલીસ',   // 39
    'ચાલીસ',      // 40
    'એકતાલીસ',    // 41
    'બેતાલીસ',    // 42
    'ત્રેતાલીસ',    // 43
    'ચુમાલીસ',    // 44
    'પિસ્તાલીસ',   // 45
    'છેતાલીસ',    // 46
    'સુડતાલીસ',   // 47
    'અડતાલીસ',    // 48
    'ઓગણપચાસ',   // 49
    'પચાસ',       // 50
    'એકાવન',      // 51
    'બાવન',       // 52
    'ત્રેપન',      // 53
    'ચોપન',       // 54
    'પંચાવન',     // 55
    'છપ્પન',      // 56
    'સત્તાવન',     // 57
    'અઠ્ઠાવન',     // 58
    'ઓગણસાઠ',    // 59
    'સાઠ',        // 60
    'એકસઠ',       // 61
    'બાસઠ',       // 62
    'ત્રેસઠ',      // 63
    'ચોસઠ',       // 64
    'પાંસઠ',      // 65
    'છાસઠ',       // 66
    'સડસઠ',       // 67
    'અડસઠ',       // 68
    'ઓગણસિત્તેર',  // 69
    'સિત્તેર',      // 70
    'એકોતેર',      // 71
    'બોતેર',       // 72
    'તોતેર',       // 73
    'ચુમોતેર',      // 74
    'પંચોતેર',     // 75
    'છોતેર',       // 76
    'સિત્યોતેર',    // 77
    'ઈઠ્યોતેર',     // 78
    'ઓગણાએંસી',   // 79
    'એંસી',       // 80
    'એક્યાસી',     // 81
    'બ્યાસી',      // 82
    'ત્ર્યાસી',      // 83
    'ચોર્યાસી',     // 84
    'પંચાસી',     // 85
    'છ્યાસી',      // 86
    'સિત્યાસી',     // 87
    'ઈઠ્યાસી',     // 88
    'નેવ્યાસી',     // 89
    'નેવું',        // 90
    'એકાણું',      // 91
    'બાણું',       // 92
    'ત્રાણું',       // 93
    'ચોરાણું',      // 94
    'પંચાણું',     // 95
    'છન્નું',       // 96
    'સત્તાણું',     // 97
    'અઠ્ઠાણું',     // 98
    'નવ્વાણું',     // 99
    'એક સો'       // 100
];

// Scales according to the Indian Numbering System.
export const scales = [
    '',
    'હજાર',       // 10^3 (Thousand)
    'લાખ',        // 10^5 (Lakh)
    'કરોડ',       // 10^7 (Crore)
    'અબજ',        // 10^9 (Arab)
    'ખર્વ',        // 10^11 (Kharab)
    'નીલ',        // 10^13 (Neel)
    'પદ્મ',        // 10^15 (Padma)
    'શંખ',        // 10^17 (Shankh)
    'મહાશંખ',     // 10^19 (Mahashankh)
    // Extended scales for parity
    'અંક',         // 10^21
    'જલદ',         // 10^23
    'મધ્ય',        // 10^25
    'પરાર્ધ',      // 10^27
    'અંત',         // 10^29
    'મહા અંત',     // 10^31
    'શિષ્ટ',       // 10^33
    'સિંઘર',       // 10^35
    'મહા સિંઘર',  // 10^37
    'અદંત સિંઘર', // 10^39
    'મહા અદંત સિંઘર' // ~10^41 and beyond
];