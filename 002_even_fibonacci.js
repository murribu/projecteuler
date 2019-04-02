var fib1 = 1;
var fib2 = 1;
var sum = 0;

while (fib2 < 4000000) {
  if (fib2 % 2 === 0) {
    sum += fib2;
  }
  var nextFib = fib1 + fib2;
  fib1 = fib2;
  fib2 = nextFib;
}

console.log(sum);