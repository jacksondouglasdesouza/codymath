// src/utils/toWords/es-ES.ts

import { absolute, divide, floor, multiply, round, subtract, trunc } from "../../algebra/arithmetic";

export const ones = [
    'cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
    'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis',
    'diecisiete', 'dieciocho', 'diecinueve'
];

export const tens = [
    '', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta',
    'setenta', 'ochenta', 'noventa'
];

export const hundreds = [
    '', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos',
    'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
];

export const scales = [
    '', '', 
    'mil', 'mil', 
    'millón', 'millones', 
    'billón', 'billones',
    'trillón', 'trillones',
    'cuatrillón', 'cuatrillones',
    'quintillón', 'quintillones',
    'sextillón', 'sextillones',
    'septillón', 'septillones',
    'octillón', 'octillones',
    'nonillón', 'nonillones',
    'decillón', 'decillones',
    'undecillón', 'undeciliones',
    'duodecillón', 'duodecillones',
    'tredecillón', 'tredecillones',
    'cuatordecillón', 'cuatordecillones',
    'quindecillón', 'quindecillones',
    'sexdecillón', 'sexdecillones',
    'septendecillón', 'septendecillones',
    'octodecillón', 'octodecillones',
    'nondecillón', 'nondecillones',
    'vigintillón', 'vigintillones'
];

//--

function convertInteger(integerNum: number): string {
    if (integerNum === 0) return 'cero';

    const parts: string[] = [];
    let tempNum = integerNum;
    let scaleIndex = 0;

    while (tempNum > 0) {
        const chunk = tempNum % 1000;
        if (chunk > 0) {
            let chunkWords: string[] = [];
            const hundred = floor(divide(chunk, 100));
            const tenAndOne = chunk % 100;

            if (hundred > 0) {
                if (hundred === 1 && tenAndOne > 0) {
                    chunkWords.push('ciento');
                } else {
                    chunkWords.push(hundreds[hundred]);
                }
            }
            if (tenAndOne > 0) {
                if (tenAndOne < 20) {
                    if (tenAndOne === 1 && scaleIndex > 0) {
                        chunkWords.push('un');
                    } else {
                        chunkWords.push(ones[tenAndOne]);
                    }
                } else {
                    const ten = floor(divide(tenAndOne, 10));
                    const one = tenAndOne % 10;
                    
                    // Lógica para os números 21-29 com ortografia correta
                    if (ten === 2 && one > 0) {
                        switch (one) {
                            case 1:
                                chunkWords.push(scaleIndex > 0 ? 'veintiún' : 'veintiuno');
                                break;
                            case 2:
                                chunkWords.push('veintidós');
                                break;
                            case 3:
                                chunkWords.push('veintitrés');
                                break;
                            case 6:
                                chunkWords.push('veintiséis');
                                break;
                            default:
                                chunkWords.push(`veinti${ones[one]}`);
                        }
                    } else {
                        chunkWords.push(tens[ten]);
                        if (one > 0) {
                            chunkWords.push(`y ${ones[one]}`);
                        }
                    }
                }
            }
            let chunkStr = chunkWords.join(' ');
            if (scaleIndex > 0) {
                const scaleBaseIndex = scaleIndex * 2;
                const scale = chunk === 1 ? scales[scaleBaseIndex] : scales[scaleBaseIndex + 1];
                if (chunk === 1 && scaleIndex === 1) {
                    chunkStr = scale;
                } else {
                    chunkStr = `${chunkStr} ${scale}`;
                }
            }
            parts.unshift(chunkStr);
        }
        tempNum = floor(divide(tempNum, 1000));
        scaleIndex++;
    }
    return parts.join(' ').trim();
}

//--

// --- CONVERSORES (EXPORTADOS VIA OBJETO) ---

function pureConverter(n: number): string {
    const isNegative = n < 0;
    const num = absolute(n);
    
    const integerPart = trunc(num);
    const numberAsString = num.toString();
    const fractionalString = numberAsString.includes('.') ? numberAsString.split('.')[1] : '';

    let result = convertInteger(integerPart);

    if (fractionalString.length > 0) {
        // A regra para o espanhol é ler dígito por dígito, igual ao português.
        const fractionalWords = fractionalString.split('').map(digit => ones[Number(digit)] || 'cero').join(' ');
        result += ` coma ${fractionalWords}`;
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
        let majorWords = convertInteger(integerPart);
        // Aplica a regra do "uno" -> "un"
        if (integerPart % 10 === 1 && integerPart % 100 !== 11) {
            majorWords = majorWords.replace(/uno$/, 'un');
        }
        // Aplica a regra do "de" para milhões
        if (integerPart >= 1000000 && integerPart % 1000000 === 0) {
            parts.push(`${majorWords} de ${majorUnit}`);
        } else {
            parts.push(`${majorWords} ${majorUnit}`);
        }
    }

    if (fractionalPart > 0) {
        let minorWords = convertInteger(fractionalPart);
        // Aplica a regra do "uno" -> "un" também para os centavos
        if (fractionalPart % 10 === 1 && fractionalPart % 100 !== 11) {
            minorWords = minorWords.replace(/uno$/, 'un');
        }
        parts.push(`${minorWords} ${minorUnit}`);
    }
    
    const result = parts.join(' con ');
    
    return (isNegative ? `menos ${result}` : result).trim();
}

//--

// --- OBJETO DO DICIONÁRIO ---

export const esES = {
    pureConverter,
    currencyConverter,
    currencyDefaults: {
        majorSingular: 'euro',
        majorPlural: 'euros',
        minorSingular: 'céntimo',
        minorPlural: 'céntimos',
    }
};

