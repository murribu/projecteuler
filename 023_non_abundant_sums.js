var abundantNumbers = [];

for (var n = 1; n <= 28123; n++) {
  if (isAbundant(n)) {
    abundantNumbers.push(n);
  }
}


function findDivisors(n) {
  var divisors = [1];
  
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (n / i !== i) {
        divisors.push(n / i);
      }
    }
  }
  return divisors;
}

function isAbundant(n) {
  var divisors = findDivisors(n);
  return divisors.reduce((acc, cur) => { return cur + acc; }, 0) > n;
}

function canBeWrittenAsSumOfTwoAbundantNumbers(n) {
  var search = abundantNumbers.filter(a => { return a < n; })
  for (var j = 0; j < search.length; j++) {
    if (search.filter(a => { return n - search[j] === a; }).length > 0) {
      return true;
    }
  }
  return false
}

var sum = 0;

for (var i = 1; i <= 28123; i++) {
  if (!canBeWrittenAsSumOfTwoAbundantNumbers(i)) {
    sum += i;
  }
}

console.log(sum);