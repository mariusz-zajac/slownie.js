Slownie.js
==========

Little library for converting numbers into polish words.

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
const slownie = require('slownie')
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

TODO
----

* i18n
