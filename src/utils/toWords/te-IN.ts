// src/utils/toWords/te-IN.ts

/*
Telugu (te-IN) Numbering System Notes:

1. Core System and Construction:
- Telugu uses a standard decimal system and is highly regular.
- Numbers are formed by sequencing the words for the scales.
- Example: 21 is "ఇరవై ఒకటి" (iravai okaṭi).

2. Dravidian Language Family:
- Telugu is a Dravidian language, one of the major languages of Southern India. Its vocabulary and structure are distinct from the Indo-Aryan languages of Northern India (like Hindi).

3. Script:
- Telugu uses its own unique script, an abugida known for its flowing, rounded characters with marks above them.

4. Financial Context (Indian Rupee):
- Currency: Indian Rupee (రూపాయి - Rūpāyi) and Paisa (పైసా - Paisā).
- Example for 123.45 INR:
    - "నూరు ఇరవై మూడు రూపాయలు మరియు నలభై ఐదు పైసలు"
    - (Nūru iravai mūḍu rūpāyalu mariyu nalabhai aidu paisalu)

5. Zero:
- Zero is "సున్నా" (sunnā).

6. Large Numbers:
- Telugu has native words for hundred ("వంద"), thousand ("వెయ్యి"), etc.
- For modern large-scale numbers (million, billion), loanwords from English are standard.

*/

export const ones = [
    'సున్నా',           // 0
    'ఒకటి',             // 1
    'రెండు',            // 2
    'మూడు',             // 3
    'నాలుగు',            // 4
    'ఐదు',              // 5
    'ఆరు',              // 6
    'ఏడు',              // 7
    'ఎనిమిది',          // 8
    'తొమ్మిది',          // 9
    'పది',              // 10
    'పదకొండు',          // 11
    'పన్నెండు',          // 12
    'పదమూడు',           // 13
    'పద్నాలుగు',         // 14
    'పదిహేను',          // 15
    'పదహారు',           // 16
    'పదిహేడు',          // 17
    'పద్దెనిమిది',       // 18
    'పంతొమ్మిది'        // 19
];

export const tens = [
    '',
    '',
    'ఇరవై',             // 20
    'ముప్పై',            // 30
    'నలభై',             // 40
    'యాభై',             // 50
    'అరవై',             // 60
    'డెబ్బై',             // 70
    'ఎనభై',             // 80
    'తొంభై'             // 90
];

export const hundreds = [
    '',
    'వంద',              // 100
    'రెండు వందలు',      // 200
    'మూడు వందలు',      // 300
    'నాలుగు వందలు',     // 400
    'ఐదు వందలు',       // 500
    'ఆరు వందలు',       // 600
    'ఏడు వందలు',       // 700
    'ఎనిమిది వందలు',    // 800
    'తొమ్మిది వందలు'     // 900
];

// Scales use a native word for thousand and English loanwords for larger scales.
export const scales = [
    '',
    'వెయ్యి',              // 10^3 (Thousand)
    'మిలియన్',            // 10^6 (Million)
    'బిలియన్',            // 10^9 (Billion)
    'ట్రిలియన్',           // 10^12 (Trillion)
    'క్వాడ్రిలియన్',        // 10^15 (Quadrillion)
    'క్విన్టిలియన్',        // 10^18 (Quintillion)
    'సెక్స్టిలియన్',        // 10^21 (Sextillion)
    'సెప్టిలియన్',        // 10^24 (Septillion)
    'ఆక్టిలియన్',          // 10^27 (Octillion)
    'నోనిలియన్',          // 10^30 (Nonillion)
    'డెసిలియన్',          // 10^33 (Decillion)
    'అన్‌డెసిలియన్',       // 10^36 (Undecillion)
    'డుయోడెసిలియన్',      // 10^39 (Duodecillion)
    'ట్రెడెసిలియన్',       // 10^42 (Tredecillion)
    'క్వాటువోర్డెసిలియన్',  // 10^45 (Quattuordecillion)
    'క్విన్‌డెసిలియన్',     // 10^48 (Quindecillion)
    'సెక్స్‌డెసిలియన్',      // 10^51 (Sexdecillion)
    'సెప్టెన్‌డెసిలియన్',  // 10^54 (Septendecillion)
    'ఆక్టోడెసిలియన్',     // 10^57 (Octodecillion)
    'నోవెం‌డెసిలియన్',    // 10^60 (Novemdecillion)
    'విజింటిలియన్'        // 10^63 (Vigintillion)
];
