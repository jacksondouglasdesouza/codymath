// src/utils/toWords/ta-IN.ts

/*
Tamil (ta-IN) Numbering System Notes:

1. Core System and Construction:
- Tamil uses a standard decimal system and is highly regular and combinatorial.
- Compound numbers are formed by combining the tens and ones, often with minor euphonic changes (sandhi).
- Example: 21 is "இருபத்தி ஒன்று" (irupatti oṉṟu), a combination of "இருபது" (irupatu - 20) and "ஒன்று" (oṉṟu - 1).

2. Script and Numerals:
- Tamil uses its own unique script, an abugida.
- While Tamil has a traditional set of numerals (௧, ௨, ௩, etc.), modern usage overwhelmingly favors standard Hindu-Arabic numerals (1, 2, 3).

3. Plurals with Numbers:
- Similar to other Dravidian and many Indo-Aryan languages, nouns following a number typically remain in their singular form.
- Example: "ஐந்து ஆப்பிள்" (aintu āppiḷ) - "five apple".

4. Financial Context (Indian Rupee):
- Currency: Indian Rupee (ரூபாய் - Rūpāy) and Paisa (பைசா - Paisā).
- Example for 123.45 INR:
    - "நூற்றி இருபத்து மூன்று ரூபாய் நாற்பத்தைந்து பைசா"
    - (Nūṟṟi irupattu mūṉṟu rūpāy nāṟpattaintu paisā)

5. Zero:
- Zero is "பூஜ்யம்" (pūjjiyam).

6. Large Numbers:
- Tamil has native words for ten, hundred, thousand, etc.
- For modern large-scale numbers (million, billion), loanwords from English are standard, transliterated into the Tamil script.

*/

export const ones = [
    'பூஜ்யம்',        // 0
    'ஒன்று',          // 1
    'இரண்டு',        // 2
    'மூன்று',        // 3
    'நான்கு',         // 4
    'ஐந்து',          // 5
    'ஆறு',           // 6
    'ஏழு',           // 7
    'எட்டு',          // 8
    'ஒன்பது',        // 9
    'பத்து',          // 10
    'பதினொன்று',      // 11
    'பன்னிரண்டு',     // 12
    'பதிமூன்று',      // 13
    'பதினான்கு',      // 14
    'பதினைந்து',      // 15
    'பதினாறு',        // 16
    'பதினேழு',        // 17
    'பதினெட்டு',       // 18
    'பத்தொன்பது'      // 19
];

export const tens = [
    '',
    '',
    'இருபது',        // 20
    'முப்பது',        // 30
    'நாற்பது',       // 40
    'ஐம்பது',        // 50
    'அறுபது',        // 60
    'எழுபது',        // 70
    'எண்பது',        // 80
    'தொண்ணூறு'       // 90
];

export const hundreds = [
    '',
    'நூறு',          // 100
    'இருநூறு',       // 200
    'முந்நூறு',       // 300
    'நாநூறு',        // 400
    'ஐந்நூறு',        // 500
    'அறுநூறு',       // 600
    'எழுநூறு',       // 700
    'எண்ணூறு',       // 800
    'தொள்ளாயிரம்'    // 900
];

// Scales use native words for thousand, and loanwords for larger numbers.
export const scales = [
    '',
    'ஆயிரம்',            // 10^3 (Thousand)
    'மில்லியன்',         // 10^6 (Million)
    'பில்லியன்',         // 10^9 (Billion)
    'டிரில்லியன்',        // 10^12 (Trillion)
    'குவாட்ரில்லியன்',    // 10^15 (Quadrillion)
    'குயின்டில்லியன்',    // 10^18 (Quintillion)
    'செக்ஸ்டில்லியன்',    // 10^21 (Sextillion)
    'செப்டில்லியன்',     // 10^24 (Septillion)
    'ஆக்டில்லியன்',      // 10^27 (Octillion)
    'நோனில்லியன்',       // 10^30 (Nonillion)
    'டெசிலியன்',         // 10^33 (Decillion)
    'அன்டெசிலியன்',      // 10^36 (Undecillion)
    'டுவோடெசிலியன்',     // 10^39 (Duodecillion)
    'ட்ரேடெசிலியன்',      // 10^42 (Tredecillion)
    'குவாடோர்டெசிலியன்', // 10^45 (Quattuordecillion)
    'குயின்டெசிலியன்',  // 10^48 (Quindecillion)
    'செக்ஸ்டெசிலியன்',  // 10^51 (Sexdecillion)
    'செப்டென்டெசிலியன்', // 10^54 (Septendecillion)
    'ஆக்டோடெசிலியன்',   // 10^57 (Octodecillion)
    'நவம்தெசிலியன்',    // 10^60 (Novemdecillion)
    'விஜின்டில்லியன்'    // 10^63 (Vigintillion)
];