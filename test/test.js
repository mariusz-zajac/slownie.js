const should = require('should');
const slownie = require('../lib/slownie');

describe('slownie', function () {

    it('should be able to transform short into corresponding words', function () {
        slownie(0).should.equal('zero');
        slownie(1).should.equal('jeden');
        slownie(2).should.equal('dwa');
        slownie(3).should.equal('trzy');
        slownie(4).should.equal('cztery');
        slownie(5).should.equal('pięć');
        slownie(6).should.equal('sześć');
        slownie(7).should.equal('siedem');
        slownie(8).should.equal('osiem');
        slownie(9).should.equal('dziewięć');
        slownie(10).should.equal('dziesięć');
        slownie(11).should.equal('jedenaście');
        slownie(12).should.equal('dwanaście');
        slownie(13).should.equal('trzynaście');
        slownie(14).should.equal('czternaście');
        slownie(15).should.equal('piętnaście');
        slownie(16).should.equal('szesnaście');
        slownie(17).should.equal('siedemnaście');
        slownie(18).should.equal('osiemnaście');
        slownie(19).should.equal('dziewiętnaście');
        slownie(20).should.equal('dwadzieścia');
        slownie(21).should.equal('dwadzieścia jeden');
        slownie(30).should.equal('trzydzieści');
        slownie(32).should.equal('trzydzieści dwa');
        slownie(40).should.equal('czterdzieści');
        slownie(43).should.equal('czterdzieści trzy');
        slownie(50).should.equal('pięćdziesiąt');
        slownie(54).should.equal('pięćdziesiąt cztery');
        slownie(60).should.equal('sześćdziesiąt');
        slownie(65).should.equal('sześćdziesiąt pięć');
        slownie(70).should.equal('siedemdziesiąt');
        slownie(76).should.equal('siedemdziesiąt sześć');
        slownie(80).should.equal('osiemdziesiąt');
        slownie(87).should.equal('osiemdziesiąt siedem');
        slownie(90).should.equal('dziewięćdziesiąt');
        slownie(98).should.equal('dziewięćdziesiąt osiem');
        slownie(99).should.equal('dziewięćdziesiąt dziewięć');
        slownie(100).should.equal('sto');
        slownie(101).should.equal('sto jeden');
        slownie(110).should.equal('sto dziesięć');
        slownie(112).should.equal('sto dwanaście');
        slownie(123).should.equal('sto dwadzieścia trzy');
        slownie(200).should.equal('dwieście');
        slownie(220).should.equal('dwieście dwadzieścia');
        slownie(300).should.equal('trzysta');
        slownie(333).should.equal('trzysta trzydzieści trzy');
        slownie(400).should.equal('czterysta');
        slownie(456).should.equal('czterysta pięćdziesiąt sześć');
        slownie(500).should.equal('pięćset');
        slownie(591).should.equal('pięćset dziewięćdziesiąt jeden');
        slownie(600).should.equal('sześćset');
        slownie(606).should.equal('sześćset sześć');
        slownie(700).should.equal('siedemset');
        slownie(777).should.equal('siedemset siedemdziesiąt siedem');
        slownie(800).should.equal('osiemset');
        slownie(838).should.equal('osiemset trzydzieści osiem');
        slownie(900).should.equal('dziewięćset');
        slownie(992).should.equal('dziewięćset dziewięćdziesiąt dwa');
    });

    it('should be able to transform medium length numbers into corresponding words', function () {
        slownie(1000).should.equal('jeden tysiąc');
        slownie(1098).should.equal('jeden tysiąc dziewięćdziesiąt osiem');
        slownie(2000).should.equal('dwa tysiące');
        slownie(2454).should.equal('dwa tysiące czterysta pięćdziesiąt cztery');
        slownie(3000).should.equal('trzy tysiące');
        slownie(3998).should.equal('trzy tysiące dziewięćset dziewięćdziesiąt osiem');
        slownie(4000).should.equal('cztery tysiące');
        slownie(4040).should.equal('cztery tysiące czterdzieści');
        slownie(5000).should.equal('pięć tysięcy');
        slownie(5283).should.equal('pięć tysięcy dwieście osiemdziesiąt trzy');
        slownie(6000).should.equal('sześć tysięcy');
        slownie(6500).should.equal('sześć tysięcy pięćset');
        slownie(7221).should.equal('siedem tysięcy dwieście dwadzieścia jeden');
        slownie(8886).should.equal('osiem tysięcy osiemset osiemdziesiąt sześć');
        slownie(9356).should.equal('dziewięć tysięcy trzysta pięćdziesiąt sześć');
        slownie(9999).should.equal('dziewięć tysięcy dziewięćset dziewięćdziesiąt dziewięć');
        slownie(10000).should.equal('dziesięć tysięcy');
        slownie(10430).should.equal('dziesięć tysięcy czterysta trzydzieści');
        slownie(11100).should.equal('jedenaście tysięcy sto');
        slownie(12202).should.equal('dwanaście tysięcy dwieście dwa');
        slownie(13013).should.equal('trzynaście tysięcy trzynaście');
        slownie(14070).should.equal('czternaście tysięcy siedemdziesiąt');
        slownie(15753).should.equal('piętnaście tysięcy siedemset pięćdziesiąt trzy');
        slownie(20000).should.equal('dwadzieścia tysięcy');
        slownie(21000).should.equal('dwadzieścia jeden tysięcy');
        slownie(22000).should.equal('dwadzieścia dwa tysiące');
        slownie(23000).should.equal('dwadzieścia trzy tysiące');
        slownie(24000).should.equal('dwadzieścia cztery tysiące');
        slownie(25010).should.equal('dwadzieścia pięć tysięcy dziesięć');
        slownie(100000).should.equal('sto tysięcy');
        slownie(123456).should.equal('sto dwadzieścia trzy tysiące czterysta pięćdziesiąt sześć');
        slownie(200000).should.equal('dwieście tysięcy');
        slownie(386164).should.equal('trzysta osiemdziesiąt sześć tysięcy sto sześćdziesiąt cztery');
        slownie(1000000).should.equal('jeden milion');
        slownie(1657856).should.equal('jeden milion sześćset pięćdziesiąt siedem tysięcy osiemset pięćdziesiąt sześć');
        slownie(2864297).should.equal('dwa miliony osiemset sześćdziesiąt cztery tysiące dwieście dziewięćdziesiąt siedem');
        slownie(3193882).should.equal('trzy miliony sto dziewięćdziesiąt trzy tysiące osiemset osiemdziesiąt dwa');
        slownie(4472902).should.equal('cztery miliony czterysta siedemdziesiąt dwa tysiące dziewięćset dwa');
        slownie(5579361).should.equal('pięć milionów pięćset siedemdziesiąt dziewięć tysięcy trzysta sześćdziesiąt jeden');
        slownie(12012000).should.equal('dwanaście milionów dwanaście tysięcy');
        slownie(13013000).should.equal('trzynaście milionów trzynaście tysięcy');
        slownie(14014000).should.equal('czternaście milionów czternaście tysięcy');
        slownie(99999999).should.equal('dziewięćdziesiąt dziewięć milionów dziewięćset dziewięćdziesiąt dziewięć tysięcy dziewięćset dziewięćdziesiąt dziewięć');
        slownie(999000999).should.equal('dziewięćset dziewięćdziesiąt dziewięć milionów dziewięćset dziewięćdziesiąt dziewięć');
    });

    it('should be able to transform long numbers into corresponding words', function () {
        slownie(1939393822).should.equal('jeden miliard dziewięćset trzydzieści dziewięć milionów trzysta dziewięćdziesiąt trzy tysiące osiemset dwadzieścia dwa');
        slownie(29837373765).should.equal('dwadzieścia dziewięć miliardów osiemset trzydzieści siedem milionów trzysta siedemdziesiąt trzy tysiące siedemset sześćdziesiąt pięć');
        slownie(100200300400).should.equal('sto miliardów dwieście milionów trzysta tysięcy czterysta');
        slownie(67395925919369).should.equal('sześćdziesiąt siedem bilionów trzysta dziewięćdziesiąt pięć miliardów dziewięćset dwadzieścia pięć milionów dziewięćset dziewiętnaście tysięcy trzysta sześćdziesiąt dziewięć');
        slownie(9007199254740991).should.equal('dziewięć biliardów siedem bilionów sto dziewięćdziesiąt dziewięć miliardów dwieście pięćdziesiąt cztery miliony siedemset czterdzieści tysięcy dziewięćset dziewięćdziesiąt jeden');
    });

    it('should be able to transform negative numbers into corresponding words', function () {
        slownie(-0).should.equal('zero');
        slownie(-1001).should.equal('minus jeden tysiąc jeden');
        slownie(-45327).should.equal('minus czterdzieści pięć tysięcy trzysta dwadzieścia siedem');
        slownie(-9748354358).should.equal('minus dziewięć miliardów siedemset czterdzieści osiem milionów trzysta pięćdziesiąt cztery tysiące trzysta pięćdziesiąt osiem');
        slownie(-134892492054300).should.equal('minus sto trzydzieści cztery biliony osiemset dziewięćdziesiąt dwa miliardy czterysta dziewięćdziesiąt dwa miliony pięćdziesiąt cztery tysiące trzysta');
        slownie(-9007199254740991).should.equal('minus dziewięć biliardów siedem bilionów sto dziewięćdziesiąt dziewięć miliardów dwieście pięćdziesiąt cztery miliony siedemset czterdzieści tysięcy dziewięćset dziewięćdziesiąt jeden');
    });

    it('should throw error for too long numbers', function () {
        should.throws(() => slownie(9007199254740992), /The number is not safe integer/);
        should.throws(() => slownie(9007199254740993), /The number is not safe integer/);
        should.throws(() => slownie(10000000000000000), /The number is not safe integer/);
        should.throws(() => slownie(-10000000000000000), /The number is not safe integer/);
    });

    it('should throw error for not integers', function () {
        should.throws(() => slownie('0'), /The number is not safe integer/);
        should.throws(() => slownie('100'), /The number is not safe integer/);
        should.throws(() => slownie(''), /The number is not safe integer/);
        should.throws(() => slownie([]), /The number is not safe integer/);
        should.throws(() => slownie({}), /The number is not safe integer/);
        should.throws(() => slownie(null), /The number is not safe integer/);
        should.throws(() => slownie(0.1), /The number is not safe integer/);
        should.throws(() => slownie(1.005), /The number is not safe integer/);
    });
});
