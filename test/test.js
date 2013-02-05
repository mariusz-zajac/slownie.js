require('should')
var Slownie = require('../lib/slownie').Slownie

describe('Slownie', function(){

  it("should be able to transform short into corresponding words", function(){
    new Slownie().get(123).should.equal('sto dwadzieścia trzy');
  });

  it("should be able to transform long numbers into corresponding words", function(){
    new Slownie().get(1000000).should.equal('milion');
  });

  it("should be able to transform long numbers into corresponding words", function(){
    new Slownie().get(1000).should.equal('tysiąc');
  });

  it("should be able to transform medium length numbers into corresponding words", function(){
    new Slownie().get(29837373765).should.equal('dwadzieścia dziewięć miliardów osiemset trzydzieści siedem milionów trzysta siedemdziesiąt trzy tysiące siedemset sześćdziesiąt pięć');
  });

  it("should be able to transform freaking numbers into corresponding words", function(){
    new Slownie().get(100200300400).should.equal('sto miliardów dwieście milionów trzysta tysięcy czterysta');
  });

});
