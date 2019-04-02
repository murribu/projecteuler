
var sum = 2;

for (var i = 3; i < 2000000; i++) {
  if (isPrime(i)) {
    sum += i;
  }
}

console.log(sum);

function isPrime(n) {
  if (n % 2 === 0)
    return false;
  for(var div = 3; div <= Math.sqrt(n); div += 2) {
    if (n % div === 0)
      return false;
  }
  return true;
}