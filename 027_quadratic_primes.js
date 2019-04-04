var recordA = -1;
var recordB = -1;
var record = -1;

for (var a = -999; a < 1000; a++) {
  for (var b = -100; b <= 1000; b++) {
    var n = 0;
    var result = formula(a, b, n);
    while (isPrime(result)) {
      result = formula(a, b, ++n);
    }
    if (n > record) {
      recordA = a;
      recordB = b;
      record = n;
    }
  }
}

console.log(recordA, recordB, record, recordA*recordB);

function formula(a, b, n) {
  return (n*n) + (a*n) + b;
}

function isPrime(n) {
  if (n < 0 || n % 2 === 0)
    return false;
  for(var div = 3; div <= Math.sqrt(n); div += 2) {
    if (n % div === 0)
      return false;
  }
  return true;
}