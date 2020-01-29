'use strict';

/**
 * Check if number is safe integer.
 *
 * @param {*} number Number to check
 */
module.exports.isValidIntegerOrFail = (number) => {
    if (!Number.isSafeInteger(number)) {
        throw new Error('The number is not safe integer.'
            + ' You can convert integers between -' + Number.MAX_SAFE_INTEGER
            + ' and ' + Number.MAX_SAFE_INTEGER + '.'
        );
    }
};

/**
 * Split number to triplets.
 *
 * @param {number} number Number to split
 *
 * @returns {{number: number, power: number}[]}
 */
module.exports.splitNumberToTriplets = (number) => {
    const triplets = [];
    let power = 0;
    while (number > 0) {
        triplets.unshift({
            number: number % 1000,
            power: power,
        });
        number = Math.floor(number / 1000);
        power++;
    }
    return triplets;
};

/**
 * Filter string - trim and delete multiple spaces.
 *
 * @param {string} string String
 *
 * @returns {string}
 */
module.exports.filterStr = (string) => {
    return string.replace(/ +/g, ' ').trim();
};
