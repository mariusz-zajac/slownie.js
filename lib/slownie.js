'use strict';

const DICT = {
    minus: 'minus',
    zero: 'zero',
    units: ['', 'jeden', 'dwa', 'trzy', 'cztery',
        'pięć', 'sześć', 'siedem', 'osiem', 'dziewięć',
    ],
    teens: ['', 'jedenaście', 'dwanaście', 'trzynaście', 'czternaście',
        'piętnaście', 'szesnaście', 'siedemnaście', 'osiemnaście', 'dziewiętnaście',
    ],
    tens: ['', 'dziesięć', 'dwadzieścia', 'trzydzieści', 'czterdzieści',
        'pięćdziesiąt', 'sześćdziesiąt', 'siedemdziesiąt', 'osiemdziesiąt', 'dziewięćdziesiąt',
    ],
    hundreds: ['', 'sto', 'dwieście', 'trzysta', 'czterysta',
        'pięćset', 'sześćset', 'siedemset', 'osiemset', 'dziewięćset',
    ],
    thousandPowerNames: [
        ['', '', ''],
        ['tysiąc', 'tysiące', 'tysięcy'],
        ['milion', 'miliony', 'milionów'],
        ['miliard', 'miliardy', 'miliardów'],
        ['bilion', 'biliony', 'bilionów'],
        ['biliard', 'biliardy', 'biliardów'],
    ],
};

/**
 * Convert number into polish words.
 *
 * @param {number} number Number to convert
 *
 * @returns {string}
 */
module.exports = (number) => {
    isValidIntegerOrFail(number);
    if (number === 0) {
        return DICT.zero;
    }
    let string = number < 0 ? DICT.minus : '';
    let digits = String(Math.abs(number));
    let length = digits.length;
    for (let i = Math.ceil(length / 3) - 1; i >= 0; i--) {
        let triplet = parseInt(digits.substring(length - (i + 1) * 3, length - i * 3));
        if (triplet > 0) {
            string += ' ' + convertTripletToWords(triplet, i);
        }
    }
    return filter(string);
};

/**
 * Convert three digits to words.
 *
 * @param {number} triplet Three digits number
 * @param {number} power   Power of ten
 *
 * @returns {string}
 */
function convertTripletToWords(triplet, power) {
    let string = DICT.hundreds[Math.floor(triplet / 100)];
    let tens = triplet % 100;
    if (tens > 10 && tens < 20) {
        string += ' ' + DICT.teens[tens % 10];
    } else {
        string += ' ' + DICT.tens[Math.floor(tens / 10)] + ' ' + DICT.units[tens % 10];
    }
    if (power > 0) {
        string += ' ' + getThousandPowerName(triplet, power);
    }
    return filter(string);
}

/**
 * Get thousand power name.
 *
 * @param {number} triplet Three digits number
 * @param {number} power   Power of ten
 *
 * @returns {string}
 */
function getThousandPowerName(triplet, power) {
    let form;
    if (triplet === 1) {
        form = 0;
    } else if (triplet % 10 >= 2 && triplet % 10 <= 4
        && triplet % 100 !== 12 && triplet % 100 !== 13 && triplet % 100 !== 14
    ) {
        form = 1;
    } else {
        form = 2;
    }
    return DICT.thousandPowerNames[power][form];
}

/**
 * Filter string. Delete multiple spaces.
 *
 * @param {string} string String
 *
 * @returns {string}
 */
function filter(string) {
    return string.replace(/ +/g, ' ').trim();
}

/**
 * Check if number is safe integer.
 *
 * @param {*} number Number to check
 */
function isValidIntegerOrFail(number) {
    if (!Number.isSafeInteger(number)) {
        throw new Error('The number is not safe integer.'
            + ' You can convert integers between -' + Number.MAX_SAFE_INTEGER
            + ' and ' + Number.MAX_SAFE_INTEGER + '.'
        );
    }
}
