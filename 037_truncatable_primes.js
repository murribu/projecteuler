var primes = [2,3,5,7];
var largestNumberCheckedForPrime = 0;

function isPrime(n) {
  if (primes.indexOf(n) > -1)
    return true;
  if (n % 2 === 0 || n === 1)
    return false;
  for(var div = 3; div <= Math.sqrt(n); div += 2) {
    if (n % div === 0)
      return false;
  }
  return true;
}

var tPrimes = [];

var limit = 11;
var i = 11;
while (tPrimes.length < limit) {
  var iStr = i.toString();
  var soFarSoGood = true;
  var truncations = [];
  for (var j = 0; j < iStr.length; j++) {
    var prime1 = parseInt(iStr.substring(j))
    var prime2 = parseInt(iStr.substring(0, iStr.length - j));
    if (!isPrime(prime1) || !isPrime(prime2)) {
      soFarSoGood = false;
      break;
    } else {
      if (primes.indexOf(i) === -1) {
        primes.push(i);
      }
      truncations.push(prime1);
      if (j > 0) {
        // don't put the same one twice
        truncations.push(prime2);
      }
    }
    if (j === 0 && i > largestNumberCheckedForPrime) {
      largestNumberCheckedForPrime = i;
    }
  }
  if (soFarSoGood) {
    tPrimes.push(truncations);
  }
  i++;
}

// console.log(primes);
console.log(tPrimes);
console.log(tPrimes.reduce((acc, cur) => acc + cur[0], 0))