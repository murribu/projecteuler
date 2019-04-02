BigNum = require('big.js')

function factorial(n) {
  var retval = BigNum('1');
  console.log(retval);
  for (var i = 1; i <= n; i++) {
    retval = retval.times(i);
  }
  return retval;
}

hundredfactorial = factorial(100);

console.log(hundredfactorial['c'].reduce((acc,cur) => {return acc + cur;}, 0));

// console.log(hundredfactorial.toString().split('').reduce((acc, cur) => {return acc + cur;}, 0));

