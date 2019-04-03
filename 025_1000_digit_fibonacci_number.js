var fib1 = 1;
var fib2 = 1;
var idx = 2;

while (true) {
  var nextFib = fib1 + fib2;
  fib1 = fib2;
  fib2 = nextFib;
  idx++;
  if (fib2.toString().length % 10 === 0) {
    console.log(idx);
    if (fib2.toString().length === 100) {
      break;
    }
  }
}

console.log(idx);