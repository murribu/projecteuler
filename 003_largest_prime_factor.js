
console.log(findPrimeFactors(600851475143));

function findPrimeFactors(n) {
  var divisors = [];
  
  for (var i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      n /= i;
    }
  }
  if (isPrime(n))
    divisors.push(n);
  return divisors;
}

function isPrime(n) {
  if (n % 2 === 0)
    return false;
  for(var div = 3; div <= Math.sqrt(n); div += 2) {
    if (n % div === 0)
      return false;
  }
  return true;
}