// src/utils/toWords/fr-FR.ts

/* Important Notes for French:

- 'cent' gets an "s" only if no number follows (e.g., 'deux cents' vs 'deux cent un').
    When followed by another number, it remains singular.

- 'mille' is invariant and never takes a plural form.

- Large number scales follow the long scale:
    milliard = 10^9, billion = 10^12, billiard = 10^15, etc.

- Some compounds like 'vingt' or 'quatre-vingt' may get an "s" depending on context:
    - 'quatre-vingts' = 80 (with 's') if not followed by another number
    - 'quatre-vingt-un' = 81 (no 's' because followed by another number)

- Decimal numbers are written with a comma as the decimal separator (similar to PT-BR):
    - 101,23 = "cent un virgule deux trois" (most common in spoken French, digit by digit)
    - In formal or financial contexts, decimals can sometimes be grouped by hundredths:
    - 101,23 = "cent un virgule vingt-trois" (interpreted as "hundred one point twenty-three")

- Plurals only affect certain words in the integer part:
    - 'cent' and 'vingt' follow specific rules as above
    - Scales like 'million', 'milliard', etc., have plural forms when >1

- Note: In written French, the hyphen is used to connect numbers below 100 when combining tens and units:
    - 21 = 'vingt-et-un', 34 = 'trente-quatre', etc.
*/


export const ones = [
    'zéro', 'un', 'deux', 'trois', 'quatre', 'cinq',
    'six', 'sept', 'huit', 'neuf', 'dix',
    'onze', 'douze', 'treize', 'quatorze', 'quinze',
    'seize', 'dix-sept', 'dix-huit', 'dix-neuf'
];

export const tens = [
    '', '', 'vingt', 'trente', 'quarante', 'cinquante',
    'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'
];

export const hundreds = [
    '', 'cent', 'deux cents', 'trois cents', 'quatre cents',
    'cinq cents', 'six cents', 'sept cents', 'huit cents', 'neuf cents'
];

export const scales = [
    '',
    'mille', '',
    'million', 'millions',
    'milliard', 'milliards',
    'billion', 'billions',
    'billiard', 'billiards',
    'trillion', 'trillions',
    'trilliard', 'trilliards',
    'quadrillion', 'quadrillions',
    'quadrilliard', 'quadrilliards',
    'quintillion', 'quintillions',
    'quintilliard', 'quintilliards',
    'sextillion', 'sextillions',
    'sextilliard', 'sextilliards',
    'septillion', 'septillions',
    'septilliard', 'septilliards',
    'octillion', 'octillions',
    'octilliard', 'octilliards',
    'nonillion', 'nonillions',
    'nonilliard', 'nonilliards',
    'décillion', 'décillions',
    'décilliard', 'décilliards',
    'undécillion', 'undécillions',
    'undécilliard', 'undécilliards',
    'duodécillion', 'duodécillions',
    'duodécilliard', 'duodécilliards',
    'tredécillion', 'tredécillions',
    'tredécilliard', 'tredécilliards',
    'quattuordécillion', 'quattuordécillions',
    'quattuordécilliard', 'quattuordécilliards',
    'quindécillion', 'quindécillions',
    'quindécilliard', 'quindécilliards',
    'sexdécillion', 'sexdécillions',
    'sexdécilliard', 'sexdécilliards',
    'septendécillion', 'septendécillions',
    'septendécilliard', 'septendécilliards',
    'octodécillion', 'octodécillions',
    'octodécilliard', 'octodécilliards',
    'novemdécillion', 'novemdécillions',
    'novemdécilliard', 'novemdécilliards',
    'vigintillion', 'vigintillions'
];