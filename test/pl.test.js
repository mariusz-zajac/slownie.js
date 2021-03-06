const should = require('should');
const slownie = require('../lib/index');

describe('slownie.pl', function () {

    it('should be able to transform short numbers into corresponding words', function () {
        slownie.pl(0).should.equal('zero');
        slownie.pl(1).should.equal('jeden');
        slownie.pl(2).should.equal('dwa');
        slownie.pl(3).should.equal('trzy');
        slownie.pl(4).should.equal('cztery');
        slownie.pl(5).should.equal('pięć');
        slownie.pl(6).should.equal('sześć');
        slownie.pl(7).should.equal('siedem');
        slownie.pl(8).should.equal('osiem');
        slownie.pl(9).should.equal('dziewięć');
        slownie.pl(10).should.equal('dziesięć');
        slownie.pl(11).should.equal('jedenaście');
        slownie.pl(12).should.equal('dwanaście');
        slownie.pl(13).should.equal('trzynaście');
        slownie.pl(14).should.equal('czternaście');
        slownie.pl(15).should.equal('piętnaście');
        slownie.pl(16).should.equal('szesnaście');
        slownie.pl(17).should.equal('siedemnaście');
        slownie.pl(18).should.equal('osiemnaście');
        slownie.pl(19).should.equal('dziewiętnaście');
        slownie.pl(20).should.equal('dwadzieścia');
        slownie.pl(21).should.equal('dwadzieścia jeden');
        slownie.pl(30).should.equal('trzydzieści');
        slownie.pl(32).should.equal('trzydzieści dwa');
        slownie.pl(40).should.equal('czterdzieści');
        slownie.pl(43).should.equal('czterdzieści trzy');
        slownie.pl(50).should.equal('pięćdziesiąt');
        slownie.pl(54).should.equal('pięćdziesiąt cztery');
        slownie.pl(60).should.equal('sześćdziesiąt');
        slownie.pl(65).should.equal('sześćdziesiąt pięć');
        slownie.pl(70).should.equal('siedemdziesiąt');
        slownie.pl(76).should.equal('siedemdziesiąt sześć');
        slownie.pl(80).should.equal('osiemdziesiąt');
        slownie.pl(87).should.equal('osiemdziesiąt siedem');
        slownie.pl(90).should.equal('dziewięćdziesiąt');
        slownie.pl(98).should.equal('dziewięćdziesiąt osiem');
        slownie.pl(99).should.equal('dziewięćdziesiąt dziewięć');
        slownie.pl(100).should.equal('sto');
        slownie.pl(101).should.equal('sto jeden');
        slownie.pl(110).should.equal('sto dziesięć');
        slownie.pl(112).should.equal('sto dwanaście');
        slownie.pl(123).should.equal('sto dwadzieścia trzy');
        slownie.pl(200).should.equal('dwieście');
        slownie.pl(220).should.equal('dwieście dwadzieścia');
        slownie.pl(300).should.equal('trzysta');
        slownie.pl(333).should.equal('trzysta trzydzieści trzy');
        slownie.pl(400).should.equal('czterysta');
        slownie.pl(456).should.equal('czterysta pięćdziesiąt sześć');
        slownie.pl(500).should.equal('pięćset');
        slownie.pl(591).should.equal('pięćset dziewięćdziesiąt jeden');
        slownie.pl(600).should.equal('sześćset');
        slownie.pl(606).should.equal('sześćset sześć');
        slownie.pl(700).should.equal('siedemset');
        slownie.pl(777).should.equal('siedemset siedemdziesiąt siedem');
        slownie.pl(800).should.equal('osiemset');
        slownie.pl(838).should.equal('osiemset trzydzieści osiem');
        slownie.pl(900).should.equal('dziewięćset');
        slownie.pl(992).should.equal('dziewięćset dziewięćdziesiąt dwa');
    });

    it('should be able to transform medium length numbers into corresponding words', function () {
        slownie.pl(1000).should.equal('jeden tysiąc');
        slownie.pl(1002).should.equal('jeden tysiąc dwa');
        slownie.pl(1098).should.equal('jeden tysiąc dziewięćdziesiąt osiem');
        slownie.pl(2000).should.equal('dwa tysiące');
        slownie.pl(2454).should.equal('dwa tysiące czterysta pięćdziesiąt cztery');
        slownie.pl(3000).should.equal('trzy tysiące');
        slownie.pl(3998).should.equal('trzy tysiące dziewięćset dziewięćdziesiąt osiem');
        slownie.pl(4000).should.equal('cztery tysiące');
        slownie.pl(4040).should.equal('cztery tysiące czterdzieści');
        slownie.pl(5000).should.equal('pięć tysięcy');
        slownie.pl(5283).should.equal('pięć tysięcy dwieście osiemdziesiąt trzy');
        slownie.pl(6000).should.equal('sześć tysięcy');
        slownie.pl(6500).should.equal('sześć tysięcy pięćset');
        slownie.pl(7221).should.equal('siedem tysięcy dwieście dwadzieścia jeden');
        slownie.pl(8886).should.equal('osiem tysięcy osiemset osiemdziesiąt sześć');
        slownie.pl(9356).should.equal('dziewięć tysięcy trzysta pięćdziesiąt sześć');
        slownie.pl(9999).should.equal('dziewięć tysięcy dziewięćset dziewięćdziesiąt dziewięć');
        slownie.pl(10000).should.equal('dziesięć tysięcy');
        slownie.pl(10430).should.equal('dziesięć tysięcy czterysta trzydzieści');
        slownie.pl(11100).should.equal('jedenaście tysięcy sto');
        slownie.pl(12202).should.equal('dwanaście tysięcy dwieście dwa');
        slownie.pl(13013).should.equal('trzynaście tysięcy trzynaście');
        slownie.pl(14070).should.equal('czternaście tysięcy siedemdziesiąt');
        slownie.pl(15753).should.equal('piętnaście tysięcy siedemset pięćdziesiąt trzy');
        slownie.pl(20000).should.equal('dwadzieścia tysięcy');
        slownie.pl(21000).should.equal('dwadzieścia jeden tysięcy');
        slownie.pl(22000).should.equal('dwadzieścia dwa tysiące');
        slownie.pl(23000).should.equal('dwadzieścia trzy tysiące');
        slownie.pl(24000).should.equal('dwadzieścia cztery tysiące');
        slownie.pl(25010).should.equal('dwadzieścia pięć tysięcy dziesięć');
        slownie.pl(100000).should.equal('sto tysięcy');
        slownie.pl(123456).should.equal('sto dwadzieścia trzy tysiące czterysta pięćdziesiąt sześć');
        slownie.pl(200000).should.equal('dwieście tysięcy');
        slownie.pl(386164).should.equal('trzysta osiemdziesiąt sześć tysięcy sto sześćdziesiąt cztery');
        slownie.pl(1000000).should.equal('jeden milion');
        slownie.pl(1657856).should.equal('jeden milion sześćset pięćdziesiąt siedem tysięcy osiemset pięćdziesiąt sześć');
        slownie.pl(2864297).should.equal('dwa miliony osiemset sześćdziesiąt cztery tysiące dwieście dziewięćdziesiąt siedem');
        slownie.pl(3193882).should.equal('trzy miliony sto dziewięćdziesiąt trzy tysiące osiemset osiemdziesiąt dwa');
        slownie.pl(4472902).should.equal('cztery miliony czterysta siedemdziesiąt dwa tysiące dziewięćset dwa');
        slownie.pl(5579361).should.equal('pięć milionów pięćset siedemdziesiąt dziewięć tysięcy trzysta sześćdziesiąt jeden');
        slownie.pl(12012000).should.equal('dwanaście milionów dwanaście tysięcy');
        slownie.pl(13013000).should.equal('trzynaście milionów trzynaście tysięcy');
        slownie.pl(14014000).should.equal('czternaście milionów czternaście tysięcy');
        slownie.pl(99999999).should.equal('dziewięćdziesiąt dziewięć milionów dziewięćset dziewięćdziesiąt dziewięć tysięcy dziewięćset dziewięćdziesiąt dziewięć');
        slownie.pl(999000999).should.equal('dziewięćset dziewięćdziesiąt dziewięć milionów dziewięćset dziewięćdziesiąt dziewięć');
    });

    it('should be able to transform long numbers into corresponding words', function () {
        slownie.pl(1939393822).should.equal('jeden miliard dziewięćset trzydzieści dziewięć milionów trzysta dziewięćdziesiąt trzy tysiące osiemset dwadzieścia dwa');
        slownie.pl(29837373765).should.equal('dwadzieścia dziewięć miliardów osiemset trzydzieści siedem milionów trzysta siedemdziesiąt trzy tysiące siedemset sześćdziesiąt pięć');
        slownie.pl(100200300400).should.equal('sto miliardów dwieście milionów trzysta tysięcy czterysta');
        slownie.pl(67395925919369).should.equal('sześćdziesiąt siedem bilionów trzysta dziewięćdziesiąt pięć miliardów dziewięćset dwadzieścia pięć milionów dziewięćset dziewiętnaście tysięcy trzysta sześćdziesiąt dziewięć');
        slownie.pl(9007199254740991).should.equal('dziewięć biliardów siedem bilionów sto dziewięćdziesiąt dziewięć miliardów dwieście pięćdziesiąt cztery miliony siedemset czterdzieści tysięcy dziewięćset dziewięćdziesiąt jeden');
    });

    it('should be able to transform negative numbers into corresponding words', function () {
        slownie.pl(-0).should.equal('zero');
        slownie.pl(-1001).should.equal('minus jeden tysiąc jeden');
        slownie.pl(-45327).should.equal('minus czterdzieści pięć tysięcy trzysta dwadzieścia siedem');
        slownie.pl(-9748354358).should.equal('minus dziewięć miliardów siedemset czterdzieści osiem milionów trzysta pięćdziesiąt cztery tysiące trzysta pięćdziesiąt osiem');
        slownie.pl(-134892492054300).should.equal('minus sto trzydzieści cztery biliony osiemset dziewięćdziesiąt dwa miliardy czterysta dziewięćdziesiąt dwa miliony pięćdziesiąt cztery tysiące trzysta');
        slownie.pl(-9007199254740991).should.equal('minus dziewięć biliardów siedem bilionów sto dziewięćdziesiąt dziewięć miliardów dwieście pięćdziesiąt cztery miliony siedemset czterdzieści tysięcy dziewięćset dziewięćdziesiąt jeden');
    });

    it('should throw error for too long numbers', function () {
        should.throws(() => slownie.pl(9007199254740992), /The number is not safe integer/);
        should.throws(() => slownie.pl(9007199254740993), /The number is not safe integer/);
        should.throws(() => slownie.pl(10000000000000000), /The number is not safe integer/);
        should.throws(() => slownie.pl(-10000000000000000), /The number is not safe integer/);
    });

    it('should throw error for not integers', function () {
        should.throws(() => slownie.pl('0'), /The number is not safe integer/);
        should.throws(() => slownie.pl('100'), /The number is not safe integer/);
        should.throws(() => slownie.pl('abc'), /The number is not safe integer/);
        should.throws(() => slownie.pl(''), /The number is not safe integer/);
        should.throws(() => slownie.pl([]), /The number is not safe integer/);
        should.throws(() => slownie.pl({}), /The number is not safe integer/);
        should.throws(() => slownie.pl(null), /The number is not safe integer/);
        should.throws(() => slownie.pl(0.1), /The number is not safe integer/);
        should.throws(() => slownie.pl(1.005), /The number is not safe integer/);
    });
});
