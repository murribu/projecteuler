BigNum = require("big.js");

// should've cached this mess
function factorial(n) {
  var retval = 1;
  for (var i = 1; i <= n; i++) {
    retval *= i;
  }
  return retval;
}

var winners = [];

for (var a = 0; a <= 9; a++) {
  for (var b = 0; b <= 9; b++) {
    for (var c = 0; c <= 9; c++) {
      for (var d = 0; d <= 9; d++) {
        for (var e = 0; e <= 9; e++) {
          for (var f = 0; f <= 9; f++) {
            for (var g = 0; g <= 9; g++) {
              for (var h = 0; h <= 9; h++) {
                var firstDigit = a > 0 ? 'a' : (b > 0 ? 'b' : (c > 0 ? 'c' : (d > 0 ? 'd' : (e > 0 ? 'e' : (f > 0 ? 'f' : g > 0 ? 'g' : 'h')))))
                if (
                  (firstDigit > 'a' ? 0 : factorial(a)) +
                  (firstDigit > 'b' ? 0 : factorial(b)) +
                  (firstDigit > 'c' ? 0 : factorial(c)) +
                  (firstDigit > 'd' ? 0 : factorial(d)) +
                  (firstDigit > 'e' ? 0 : factorial(e)) +
                  (firstDigit > 'f' ? 0 : factorial(f)) +
                  (firstDigit > 'g' ? 0 : factorial(g)) +
                    factorial(h) ===
                    parseInt("" + a + b + c + d + e + f + g + h) &&
                  parseInt("" + a + b + c + d + e + f + g + h) > 2
                ) {
                  winners.push(parseInt("" + a + b + c + d + e + f + g + h));
                  console.log(
                  (firstDigit > 'a' ? 0 : factorial(a)),
                  (firstDigit > 'b' ? 0 : factorial(b)),
                  (firstDigit > 'c' ? 0 : factorial(c)),
                  (firstDigit > 'd' ? 0 : factorial(d)),
                  (firstDigit > 'e' ? 0 : factorial(e)),
                  (firstDigit > 'f' ? 0 : factorial(f)),
                  (firstDigit > 'g' ? 0 : factorial(g)),
                    parseInt("" + a + b + c + d + e + f + g + h)
                  );
                }
                if (
                  a === 0 &&
                  a === 0 &&
                  a === 0 &&
                  a === 0 &&
                  a === 0 &&
                  a === 0 &&
                  a === 0
                ) {
                }
              }
            }
          }
        }
      }
    }
  }
}

console.log(winners);
console.log(winners.reduce((acc, cur) => acc + cur, 0));
