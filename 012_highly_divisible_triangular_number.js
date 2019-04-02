var triangleLength = 1

while (true) {
  var triangleNumber = nthTriangleNumber(triangleLength);
  var divisors = findDivisors(triangleNumber);
  if (divisors.length > 500) {
    console.log(triangleNumber);
    break;
  }
  if (triangleLength % 100 === 0) {
    console.log([triangleLength, triangleNumber, divisors.length]);
  }
  triangleLength++;
}

function findDivisors(n) {
  var divisors = [1];
  
  for (var i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (n / i !== i) {
        divisors.push(n / i);
      }
    }
  }
  return divisors;
}

function nthTriangleNumber(n) {
  var triangleNumber = 0;
  for (var j = 1; j <= n; j++) {
    triangleNumber += j;
  }
  return triangleNumber
}