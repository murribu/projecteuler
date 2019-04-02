var sumOfSquares = 0;
var sum = 0;
var limit = 100;

for (var i = 1; i <= limit; i++) {
  sumOfSquares += i * i;
  sum += i;
}

console.log((sum * sum) - sumOfSquares);