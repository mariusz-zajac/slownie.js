const args = process.argv.splice(process.execArgv.length + 2);
const number = Number(args[0]);
const slownie = require('./lib/index');

console.log(number);
console.log(slownie.pl(number));
console.log(slownie.en(number));
