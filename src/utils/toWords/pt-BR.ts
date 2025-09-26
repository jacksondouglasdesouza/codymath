// src/utils/toWords/pt-BR.ts

import { absolute, divide, floor, multiply, power, round, subtract, trunc } from "../../algebra/arithmetic";

export const ones = [
    'zero', 'um', 'dois', 'três', 'quatro', 'cinco',
    'seis', 'sete', 'oito', 'nove', 'dez',
    'onze', 'doze', 'treze', 'catorze', 'quinze',
    'dezesseis', 'dezessete', 'dezoito', 'dezenove'
];

export const tens = [
    '', '', 'vinte', 'trinta', 'quarenta', 'cinquenta',
    'sessenta', 'setenta', 'oitenta', 'noventa'
];

export const hundreds = [
    '', 'cem', 'duzentos', 'trezentos', 'quatrocentos',
    'quinhentos', 'seiscentos', 'setecentos',
    'oitocentos', 'novecentos'
];

export const scales = [
    '', '',
    'mil', 'mil',
    'milhão', 'milhões',
    'bilhão', 'bilhões',
    'trilhão', 'trilhões',
    'quadrilhão', 'quadrilhões',
    'quintilhão', 'quintilhões',
    'sextilhão', 'sextilhões',
    'septilhão', 'septilhões',
    'octilhão', 'octilhões',
    'nonilhão', 'nonilhões',
    'decilhão', 'decilhões',
    'undecilhão', 'undecilhões',
    'duodecilhão', 'duodecilhões',
    'tredecilhão', 'tredecilhões',
    'quatordecilhão', 'quatordecilhões',
    'quindecilhão', 'quindecilhões',
    'sexdecilhão', 'sexdecilhões',
    'septendecilhão', 'septendecilhões',
    'octodecilhão', 'octodecilhões',
    'nondecilhão', 'nondecilhões',
    'vigintilhão', 'vigintilhões'
];

//--

function convertInteger(integerNum: number): string {
    if (integerNum === 0) return 'zero';
    function convertChunk(chunk: number): string {
        if (chunk === 0) return '';
        if (chunk === 100) return 'cem';
        
        const words: string[] = [];
        const hundred = floor(divide(chunk, 100));
        const tenAndOne = chunk % 100;

        if (hundred > 0) {
            words.push(hundred === 1 && tenAndOne > 0 ? 'cento' : hundreds[hundred]);
        }
        if (tenAndOne > 0) {
            if (tenAndOne < 20) {
                words.push(ones[tenAndOne]);
            } else {
                const ten = floor(divide(tenAndOne, 10));
                const one = tenAndOne % 10;
                words.push(tens[ten]);
                if (one > 0) {
                    words.push(ones[one]);
                }
            }
        }
        return words.join(' e ');
    }

    const parts: string[] = [];
    let scaleIndex = 0;
    let tempNum = integerNum;

    while (tempNum > 0) {
        const chunk = tempNum % 1000;
        if (chunk > 0) {
            let chunkStr = convertChunk(chunk);
            if (scaleIndex > 0) {
                const scaleBaseIndex = scaleIndex * 2;
                const scale = chunk === 1 ? scales[scaleBaseIndex] : scales[scaleBaseIndex + 1];
                chunkStr = (chunk === 1 && scaleIndex === 1) ? scale : `${chunkStr} ${scale}`;
            }
            parts.unshift(chunkStr);
        }
        tempNum = floor(divide(tempNum, 1000));
        scaleIndex++;
    }

    if (parts.length === 1) {
        return parts[0];
    }
    
    const lastPart = parts.pop() as string;
    const mainPart = parts.join(', ');
    return `${mainPart} e ${lastPart}`;
}

// --

function pureConverter(n: number): string {
    if (!Number.isSafeInteger(trunc(n))) {
        return 'O número inteiro é muito grande ou não é um inteiro seguro.';
    }
    const isNegative = n < 0;
    const num = absolute(n);
    const integerPart = trunc(num);
    const numberAsString = num.toString();
    const fractionalString = numberAsString.includes('.') ? numberAsString.split('.')[1] : '';

    let result = convertInteger(integerPart);

    if (fractionalString.length > 0) {
        const fractionalWords = fractionalString.split('').map(digit => ones[Number(digit)] || 'zero').join(' ');
        result += ` vírgula ${fractionalWords}`;
    }
    
    return (isNegative ? `menos ${result}` : result).trim();
}

//--

function currencyConverter(n: number, options: any): string {
    const isNegative = n < 0;
    const num = absolute(n);
    const roundedNum = divide(round(multiply(num, 100)), 100);
    let integerPart = floor(roundedNum);
    let fractionalPart = round(multiply(subtract(roundedNum, integerPart), 100));

    if (fractionalPart === 100) {
        integerPart += 1;
        fractionalPart = 0;
    }
    
    const majorUnit = integerPart === 1 ? options.majorSingular : options.majorPlural;
    const minorUnit = fractionalPart === 1 ? options.minorSingular : options.minorPlural;

    let parts = [];
    if (integerPart > 0 || (integerPart === 0 && fractionalPart === 0)) {
        const majorWords = convertInteger(integerPart);
        parts.push(`${majorWords} ${majorUnit}`);
    }
    if (fractionalPart > 0) {
        const minorWords = convertInteger(fractionalPart);
        parts.push(`${minorWords} ${minorUnit}`);
    }
    
    const result = parts.join(' e ');
    
    return (isNegative ? `menos ${result}` : result).trim();
}


// --- OBJECT EXPORT ---

export const ptBR = {
    pureConverter,
    currencyConverter,
    currencyDefaults: {
        majorSingular: 'real',
        majorPlural: 'reais',
        minorSingular: 'centavo',
        minorPlural: 'centavos',
    }
};