Slownie.js
==========

Little library for converting numbers into polish and english words.

Works only with integers.

Fork of https://github.com/fraunos/slownie.js.

Installation
------------

```
$ npm install @abbjs/slownie
```

Usage example
-------------

```
// Version 2.x.x
const slownie = require('slownie');
console.log(slownie.pl(1000)); // jeden tysiąc
console.log(slownie.pl(20030045)); // dwadzieścia milionów trzydzieści tysięcy czterdzieści pięć
console.log(slownie.pl(-768)); // minus siedemset sześćdziesiąt osiem
console.log(slownie.en(1000)); // one thousand
console.log(slownie.en(20030045)); // twenty million thirty thousand forty-five
console.log(slownie.en(-768)); // minus seven hundred sixty-eight

// Version 1.x.x - supports only polish language
const slownie = require('slownie');
console.log(slownie(1000)); // jeden tysiąc
console.log(slownie(2003004)); // dwa miliony trzy tysiące cztery
console.log(slownie(1939393822)); // jeden miliard dziewięćset trzydzieści dziewięć milionów trzysta dziewięćdziesiąt trzy tysiące osiemset dwadzieścia dwa
console.log(slownie(-45327)); // minus czterdzieści pięć tysięcy trzysta dwadzieścia siedem 
```

Limitations
-----------

Note that Javascript numbers larger than `9007199254740991` and smaller than `-9007199254740991`
are not precisely represented numbers and will not produce exact results, so you can convert numbers
inside that range only.
