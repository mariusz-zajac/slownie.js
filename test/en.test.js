const should = require('should');
const slownie = require('../lib/index');

describe('slownie.en', function () {

    it('should be able to transform short numbers into corresponding words', function () {
        slownie.en(0).should.equal('zero');
        slownie.en(1).should.equal('one');
        slownie.en(2).should.equal('two');
        slownie.en(3).should.equal('three');
        slownie.en(4).should.equal('four');
        slownie.en(5).should.equal('five');
        slownie.en(6).should.equal('six');
        slownie.en(7).should.equal('seven');
        slownie.en(8).should.equal('eight');
        slownie.en(9).should.equal('nine');
        slownie.en(10).should.equal('ten');
        slownie.en(11).should.equal('eleven');
        slownie.en(12).should.equal('twelve');
        slownie.en(13).should.equal('thirteen');
        slownie.en(14).should.equal('fourteen');
        slownie.en(15).should.equal('fifteen');
        slownie.en(16).should.equal('sixteen');
        slownie.en(17).should.equal('seventeen');
        slownie.en(18).should.equal('eighteen');
        slownie.en(19).should.equal('nineteen');
        slownie.en(20).should.equal('twenty');
        slownie.en(21).should.equal('twenty-one');
        slownie.en(30).should.equal('thirty');
        slownie.en(32).should.equal('thirty-two');
        slownie.en(40).should.equal('forty');
        slownie.en(43).should.equal('forty-three');
        slownie.en(50).should.equal('fifty');
        slownie.en(54).should.equal('fifty-four');
        slownie.en(60).should.equal('sixty');
        slownie.en(65).should.equal('sixty-five');
        slownie.en(70).should.equal('seventy');
        slownie.en(76).should.equal('seventy-six');
        slownie.en(80).should.equal('eighty');
        slownie.en(87).should.equal('eighty-seven');
        slownie.en(90).should.equal('ninety');
        slownie.en(98).should.equal('ninety-eight');
        slownie.en(99).should.equal('ninety-nine');
        slownie.en(100).should.equal('one hundred');
        slownie.en(101).should.equal('one hundred one');
        slownie.en(110).should.equal('one hundred ten');
        slownie.en(112).should.equal('one hundred twelve');
        slownie.en(123).should.equal('one hundred twenty-three');
        slownie.en(200).should.equal('two hundred');
        slownie.en(220).should.equal('two hundred twenty');
        slownie.en(300).should.equal('three hundred');
        slownie.en(333).should.equal('three hundred thirty-three');
        slownie.en(400).should.equal('four hundred');
        slownie.en(456).should.equal('four hundred fifty-six');
        slownie.en(500).should.equal('five hundred');
        slownie.en(591).should.equal('five hundred ninety-one');
        slownie.en(600).should.equal('six hundred');
        slownie.en(606).should.equal('six hundred six');
        slownie.en(700).should.equal('seven hundred');
        slownie.en(777).should.equal('seven hundred seventy-seven');
        slownie.en(800).should.equal('eight hundred');
        slownie.en(838).should.equal('eight hundred thirty-eight');
        slownie.en(900).should.equal('nine hundred');
        slownie.en(992).should.equal('nine hundred ninety-two');
    });

    it('should be able to transform medium length numbers into corresponding words', function () {
        slownie.en(1000).should.equal('one thousand');
        slownie.en(1002).should.equal('one thousand two');
        slownie.en(1098).should.equal('one thousand ninety-eight');
        slownie.en(2000).should.equal('two thousand');
        slownie.en(2454).should.equal('two thousand four hundred fifty-four');
        slownie.en(3000).should.equal('three thousand');
        slownie.en(3998).should.equal('three thousand nine hundred ninety-eight');
        slownie.en(4000).should.equal('four thousand');
        slownie.en(4040).should.equal('four thousand forty');
        slownie.en(5000).should.equal('five thousand');
        slownie.en(5283).should.equal('five thousand two hundred eighty-three');
        slownie.en(6000).should.equal('six thousand');
        slownie.en(6500).should.equal('six thousand five hundred');
        slownie.en(7221).should.equal('seven thousand two hundred twenty-one');
        slownie.en(8886).should.equal('eight thousand eight hundred eighty-six');
        slownie.en(9356).should.equal('nine thousand three hundred fifty-six');
        slownie.en(9999).should.equal('nine thousand nine hundred ninety-nine');
        slownie.en(10000).should.equal('ten thousand');
        slownie.en(10430).should.equal('ten thousand four hundred thirty');
        slownie.en(11100).should.equal('eleven thousand one hundred');
        slownie.en(12202).should.equal('twelve thousand two hundred two');
        slownie.en(13013).should.equal('thirteen thousand thirteen');
        slownie.en(14070).should.equal('fourteen thousand seventy');
        slownie.en(15753).should.equal('fifteen thousand seven hundred fifty-three');
        slownie.en(20000).should.equal('twenty thousand');
        slownie.en(21000).should.equal('twenty-one thousand');
        slownie.en(22000).should.equal('twenty-two thousand');
        slownie.en(23000).should.equal('twenty-three thousand');
        slownie.en(24000).should.equal('twenty-four thousand');
        slownie.en(25010).should.equal('twenty-five thousand ten');
        slownie.en(100000).should.equal('one hundred thousand');
        slownie.en(123456).should.equal('one hundred twenty-three thousand four hundred fifty-six');
        slownie.en(200000).should.equal('two hundred thousand');
        slownie.en(386164).should.equal('three hundred eighty-six thousand one hundred sixty-four');
        slownie.en(1000000).should.equal('one million');
        slownie.en(1657856).should.equal('one million six hundred fifty-seven thousand eight hundred fifty-six');
        slownie.en(2864297).should.equal('two million eight hundred sixty-four thousand two hundred ninety-seven');
        slownie.en(3193882).should.equal('three million one hundred ninety-three thousand eight hundred eighty-two');
        slownie.en(4472902).should.equal('four million four hundred seventy-two thousand nine hundred two');
        slownie.en(5579361).should.equal('five million five hundred seventy-nine thousand three hundred sixty-one');
        slownie.en(12012000).should.equal('twelve million twelve thousand');
        slownie.en(13013000).should.equal('thirteen million thirteen thousand');
        slownie.en(14014000).should.equal('fourteen million fourteen thousand');
        slownie.en(99999999).should.equal('ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine');
        slownie.en(999000999).should.equal('nine hundred ninety-nine million nine hundred ninety-nine');
    });

    it('should be able to transform long numbers into corresponding words', function () {
        slownie.en(1939393822).should.equal('one billion nine hundred thirty-nine million three hundred ninety-three thousand eight hundred twenty-two');
        slownie.en(29837373765).should.equal('twenty-nine billion eight hundred thirty-seven million three hundred seventy-three thousand seven hundred sixty-five');
        slownie.en(100200300400).should.equal('one hundred billion two hundred million three hundred thousand four hundred');
        slownie.en(67395925919369).should.equal('sixty-seven trillion three hundred ninety-five billion nine hundred twenty-five million nine hundred nineteen thousand three hundred sixty-nine');
        slownie.en(9007199254740991).should.equal('nine quadrillion seven trillion one hundred ninety-nine billion two hundred fifty-four million seven hundred forty thousand nine hundred ninety-one');
    });

    it('should be able to transform negative numbers into corresponding words', function () {
        slownie.en(-0).should.equal('zero');
        slownie.en(-1001).should.equal('minus one thousand one');
        slownie.en(-45327).should.equal('minus forty-five thousand three hundred twenty-seven');
        slownie.en(-9748354358).should.equal('minus nine billion seven hundred forty-eight million three hundred fifty-four thousand three hundred fifty-eight');
        slownie.en(-134892492054300).should.equal('minus one hundred thirty-four trillion eight hundred ninety-two billion four hundred ninety-two million fifty-four thousand three hundred');
        slownie.en(-9007199254740991).should.equal('minus nine quadrillion seven trillion one hundred ninety-nine billion two hundred fifty-four million seven hundred forty thousand nine hundred ninety-one');
    });

    it('should throw error for too long numbers', function () {
        should.throws(() => slownie.en(9007199254740992), /The number is not safe integer/);
        should.throws(() => slownie.en(9007199254740993), /The number is not safe integer/);
        should.throws(() => slownie.en(10000000000000000), /The number is not safe integer/);
        should.throws(() => slownie.en(-10000000000000000), /The number is not safe integer/);
    });

    it('should throw error for not integers', function () {
        should.throws(() => slownie.en('0'), /The number is not safe integer/);
        should.throws(() => slownie.en('100'), /The number is not safe integer/);
        should.throws(() => slownie.en('abc'), /The number is not safe integer/);
        should.throws(() => slownie.en(''), /The number is not safe integer/);
        should.throws(() => slownie.en([]), /The number is not safe integer/);
        should.throws(() => slownie.en({}), /The number is not safe integer/);
        should.throws(() => slownie.en(null), /The number is not safe integer/);
        should.throws(() => slownie.en(0.1), /The number is not safe integer/);
        should.throws(() => slownie.en(1.005), /The number is not safe integer/);
    });
});
