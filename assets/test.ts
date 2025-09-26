
/**
 * Converts a number into its written-out English representation.
 * Handles numbers up to the trillions, including decimals.
 * @param {number} n The number to convert. Must be a safe integer for the integer part.
 * @param {string} [language='en'] The target language. Currently only 'en' is supported.
 * @returns {string} The number represented in words.

export function toWords(n: number, language: string = 'en'): string {
    if (language !== 'en') {
        return `Language '${language}' not supported yet.`;
    }
    
    // Check for the original sign of n at the beginning
    const isNegative = n < 0;
    const num = absolute(n); // Work with the absolute value from now on

    const integerPart = trunc(num);
    
    // Robustly get the fractional part as a string
    const numberAsString = num.toString();
    const fractionalString = numberAsString.includes('.') ? numberAsString.split('.')[1] : '';

    if (!Number.isSafeInteger(integerPart)) {
        return 'Integer part is too large or not a safe integer.';
    }

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion'];

    function convertInteger(integerNum: number): string {
        if (integerNum === 0) return 'zero';

        let words = [];
        let scaleIndex = 0;
        let tempNum = integerNum;

        while (tempNum > 0) {
            const chunk = tempNum % 1000;
            if (chunk > 0) {
                let chunkWords = [];
                const hundreds = floor(divide(chunk, 100));
                let remainder = chunk % 100;
                
                if (hundreds > 0) {
                    chunkWords.push(ones[hundreds], 'hundred');
                }
                
                if (remainder >= 20) {
                    chunkWords.push(tens[floor(divide(remainder, 10))]);
                    remainder %= 10;
                }
                
                if (remainder > 0) {
                    chunkWords.push(ones[remainder]);
                }
                
                const scaleWord = scales[scaleIndex];
                if (scaleWord) words.unshift(scaleWord);
                words.unshift(chunkWords.join(' '));
            }
            tempNum = floor(divide(tempNum, 1000));
            scaleIndex++;
        }
        return words.join(' ');
    }
    
    let result = '';
    
    if (integerPart === 0 && fractionalString.length > 0) {
        result = 'zero';
    } else {
        result = convertInteger(integerPart);
    }

    if (fractionalString.length > 0) {
        const fractionalWords = fractionalString.split('').map(digit => ones[Number(digit)] || 'zero').join(' ');
        result += ` point ${fractionalWords}`;
    }

    // Add the "minus" prefix at the very end if the original number was negative
    const finalResult = isNegative ? `minus ${result}` : result;

    return finalResult.replace(/\s+/g, ' ').trim();
}

*/