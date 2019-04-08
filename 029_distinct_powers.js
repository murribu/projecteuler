var BigNum = require('big.js')
var limit = 100;
var powers = [];

for (var a = BigNum(2); a <= limit; a = a.plus(1)) {
  for (var b = 2; b <= limit; b++) {
    var num = a.pow(b);
    powers.push('c' + num.c.join('') + 'e' + num.e);
  }
}

powers = powers.filter((p, idx) => powers.indexOf(p) === idx);

console.log(powers);
console.log(powers[powers.length - 3]);
console.log(powers[powers.length - 2]);
console.log(powers[powers.length - 1]);
console.log(powers.length);