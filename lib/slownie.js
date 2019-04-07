'use strict';

const units = ['', 'jeden', 'dwa', 'trzy', 'cztery',
    'pięć', 'sześć', 'siedem', 'osiem', 'dziewięć'
];

const overDozens = ['', 'jedenaście', 'dwanaście', 'trzynaście', 'czternaście',
    'piętnaście', 'szesnaście', 'siedemnaście', 'osiemnaście', 'dziewiętnaście'
];

const tens = ['', 'dziesięć', 'dwadzieścia', 'trzydzieści', 'czterdzieści',
    'pięćdziesiąt', 'sześćdziesiąt', 'siedemdziesiąt', 'osiemdziesiąt', 'dziewięćdziesiąt'
];

const hundreds = ['', 'sto', 'dwieście', 'trzysta', 'czterysta',
    'pięćset', 'sześćset', 'siedemset', 'osiemset', 'dziewięćset'
];

const thousandPowerNames = [
    ['', '', ''],
    ['tysiąc', 'tysiące', 'tysięcy'],
    ['milion', 'miliony', 'milionów'],
    ['miliard', 'miliardy', 'miliardów'],
    ['bilion', 'biliony', 'bilionów'],
    ['biliard', 'biliardy', 'biliardów']
];

/**
 * Convert number into polish words.
 *
 * @param {number} number Number to convert
 *
 * @return {string}
 */
module.exports = (number) => {
    isValidNumberOrFail(number);
    if (number === 0) {
        return 'zero';
    }
    let string = number < 0 ? 'minus' : '';
    let digits = String(Math.abs(number));
    let length = digits.length;
    for (let i = Math.floor((length - 1) / 3); i >= 0; i--) {
        let threeDig = parseInt(digits.substring(length - (i + 1) * 3, length - i * 3));
        string += ' ' + convertThreeDigitsToString(threeDig);
        string += ' ' + getThousandPowerName(threeDig, i);
    }
    return filter(string);
};

function convertThreeDigitsToString(threeDig) {
    let string = hundreds[Math.floor(threeDig / 100)];
    let n = threeDig % 100;
    if (n > 10 && n < 20) {
        string += ' ' + overDozens[n % 10];
    } else {
        string += ' ' + tens[Math.floor(n / 10)] + ' ' + units[n % 10];
    }
    return filter(string);
}

function getThousandPowerName(number, power) {
    if (number > 0) {
        let form;
        if (number === 1) {
            form = 0;
        } else if (number % 10 > 1 && number % 10 < 5
            && number % 100 !== 12 && number % 100 !== 13 && number % 100 !== 14
        ) {
            form = 1;
        } else {
            form = 2;
        }
        return thousandPowerNames[power][form];
    }
    return '';
}

function filter(string) {
    return string.replace(/ +/g, ' ').trim();
}

function isValidNumberOrFail(number) {
    if (!Number.isSafeInteger(number)) {
        throw new Error('The number is not safe integer.'
            + ' You can convert integers between -' + Number.MAX_SAFE_INTEGER
            + ' and ' + Number.MAX_SAFE_INTEGER + '.'
        );
    }
}
