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
    ['biliard', 'biliardy', 'biliardów'],
    ['trylion', 'tryliony', 'trylionów'],
    ['tryliard', 'tryliardy', 'tryliardów'],
    ['kwadrylion', 'kwadryliony', 'kwadrylionów']
];

module.exports = (number) => {
    let digits = String(number);
    if (digits === '0') {
        return 'zero';
    }
    let length = digits.length;
    if (length > thousandPowerNames.length * 3) {
        throw new Error('Too long number.');
    }
    let words = [];
    for (let i = Math.floor((length - 1) / 3); i >= 0; i--) {
        let threeDig = parseInt(digits.substring(length - (i + 1) * 3, length - i * 3));
        words.push(convertThreeDigitsToString(threeDig));
        words.push(getThousandPowerName(threeDig, i));
    }
    return joinWords(words);
};

function convertThreeDigitsToString(threeDig) {
    let words = [
        hundreds[Math.floor(threeDig / 100)]
    ];
    let n = threeDig % 100;
    if (n > 10 && n < 20) {
        words.push(overDozens[n % 10]);
    } else {
        words.push(tens[Math.floor(n / 10)]);
        words.push(units[n % 10]);
    }
    return joinWords(words);
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

function joinWords(words) {
    return words.filter(function (word) {
        return '' !== word;
    }).join(' ');
}
