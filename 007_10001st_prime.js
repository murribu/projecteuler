var primes = [2];
var test = 3;

while (primes.length < 10001) {
  if (isPrime(test))
    primes.push(test);
  test++;
}

console.log(primes[primes.length - 1]);

function isPrime(n) {
  if (n % 2 === 0)
    return false;
  for(var div = 3; div <= Math.sqrt(n); div += 2) {
    if (n % div === 0)
      return false;
  }
  return true;
}