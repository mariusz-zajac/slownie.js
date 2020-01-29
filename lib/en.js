'use strict';

const utils = require('./utils');

const DICT = {
    minus: 'minus',
    zero: 'zero',
    units: ['', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine',
    ],
    teens: ['', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
    ],
    tens: ['', 'ten', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety',
    ],
    hundred: 'hundred',
    thousandPowerNames: [
        '',
        'thousand',
        'million',
        'billion',
        'trillion',
        'quadrillion',
    ],
};

/**
 * Convert number into english words.
 *
 * @param {number} number Number to convert
 *
 * @returns {string}
 */
module.exports = (number) => {
    utils.isValidIntegerOrFail(number);
    if (number === 0) {
        return DICT.zero;
    }
    let string = number < 0 ? DICT.minus : '';
    utils.splitNumberToTriplets(Math.abs(number)).forEach(triplet => {
        if (triplet.number > 0) {
            string += ' ' + convertTripletToWords(triplet.number, triplet.power);
        }
    });
    return utils.filterStr(string);
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
    let string = '';
    const hundreds = Math.floor(triplet / 100);
    const tens = Math.floor(triplet % 100 / 10);
    const units = triplet % 10;
    if (hundreds > 0) {
        string += DICT.units[hundreds] + ' ' + DICT.hundred;
    }
    if (tens === 1 && units > 0) {
        string += ' ' + DICT.teens[units];
    } else {
        if (tens > 0) {
            string += ' ' + DICT.tens[tens];
        }
        if (units > 0) {
            string += tens > 1 ? '-' + DICT.units[units] : ' ' + DICT.units[units];
        }
    }
    if (power > 0) {
        string += ' ' + DICT.thousandPowerNames[power];
    }
    return utils.filterStr(string);
}
