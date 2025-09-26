// src/utils/toWords/en-US.ts

import { absolute, trunc, floor, divide, multiply, subtract } from '../../algebra/arithmetic';

export const ones = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'
];

export const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'
];

export const scales = [
    '', 'thousand', 'million', 'billion', 'trillion',
    'quadrillion', 'quintillion', 'sextillion', 'septillion',
    'octillion', 'nonillion', 'decillion', 'undecillion',
    'duodecillion', 'tredecillion', 'quattuordecillion',
    'quindecillion', 'sexdecillion', 'septendecillion',
    'octodecillion', 'novemdecillion', 'vigintillion'
];

//-- 

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
            
            if (hundreds > 0) { chunkWords.push(ones[hundreds], 'hundred'); }
            if (remainder >= 20) {
                chunkWords.push(tens[floor(divide(remainder, 10))]);
                remainder %= 10;
            }
            if (remainder > 0) { chunkWords.push(ones[remainder]); }
            
            const scaleWord = scales[scaleIndex];
            if (scaleWord) { words.unshift(scaleWord); }
            words.unshift(chunkWords.join(' '));
        }
        tempNum = floor(divide(tempNum, 1000));
        scaleIndex++;
    }
    return words.join(' ').replace(/\s+/g, ' ').trim();
}

function pureConverter(n: number): string {
    if (!Number.isSafeInteger(trunc(n))) {
        return 'Integer part is too large or not a safe integer.';
    }

    const isNegative = n < 0;
    const num = absolute(n);
    
    const integerPart = trunc(num);
    const numberAsString = num.toString();
    const fractionalString = numberAsString.includes('.') ? numberAsString.split('.')[1] : '';

    let result;
    if (integerPart === 0 && fractionalString.length > 0) {
        result = 'zero';
    } else {
        result = convertInteger(integerPart);
    }

    if (fractionalString.length > 0) {
        const fractionalWords = fractionalString.split('').map(digit => ones[Number(digit)] || 'zero').join(' ');
        result += ` point ${fractionalWords}`;
    }
    
    return (isNegative ? `minus ${result}` : result).trim();
}

//-- formatCurrency function --//

function currencyConverter(n: number, options: {
    majorSingular: string;
    majorPlural: string;
    minorSingular: string;
    minorPlural: string;
}): string {
    if (!Number.isSafeInteger(trunc(n))) {
        return 'Integer part is too large or not a safe integer.';
    }
    const isNegative = n < 0;
    const num = absolute(n);
    
    const integerPart = trunc(num);
    // Usamos round para lidar com casos como 1.235 -> 24 centavos
    const fractionalPart = Math.round(multiply(subtract(num, integerPart), 100));
    
    // Define o singular/plural para a unidade principal (ex: dollar/dollars)
    const majorUnit = integerPart === 1 ? options.majorSingular : options.majorPlural;
    // Define o singular/plural para a unidade fracionária (ex: cent/cents)
    const minorUnit = fractionalPart === 1 ? options.minorSingular : options.minorPlural;

    // Converte os números em palavras usando a função que já temos
    const majorWords = convertInteger(integerPart);
    const minorWords = convertInteger(fractionalPart);
    
    const parts = [];

    // Adiciona a parte principal se ela for maior que zero, ou se o valor total for zero.
    if (integerPart > 0 || (integerPart === 0 && fractionalPart === 0)) {
        parts.push(`${majorWords} ${majorUnit}`);
    }

    // Adiciona a parte fracionária se ela existir
    if (fractionalPart > 0) {
        parts.push(`${minorWords} ${minorUnit}`);
    }
    
    // Junta as duas partes com " and "
    const result = parts.join(' and ');
    
    // Adiciona o "minus" se for negativo e retorna
    return (isNegative ? `minus ${result}` : result).trim();
}


// -- Exporting the locale object --//
export const enUS = {
    pureConverter: pureConverter,
    currencyConverter: currencyConverter,
    currencyDefaults: {
        majorSingular: 'dollar',
        majorPlural: 'dollars',
        minorSingular: 'cent',
        minorPlural: 'cents',
    }
};